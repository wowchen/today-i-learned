/* 学习进度：localStorage 持久化 */
window.HIT = window.HIT || {};

(function() {
  var KEY = 'hit.progress.v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || blank(); }
    catch(e) { return blank(); }
  }

  function blank() {
    return { terms: {}, read: {}, prefs: {}, activity: {} };
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
    if (HIT.sync) HIT.sync.schedulePush();
    if (HIT.onProgressChange) HIT.onProgressChange();
  }

  HIT.progress = function() {
    var data = load();
    return {
      raw: function() { return data; },

      markRead: function(lessonId) {
        data.read[lessonId] = { readAt: Date.now(), updatedAt: Date.now() };
        save(data);
      },
      markUnread: function(lessonId) {
        if (data.read[lessonId]) {
          data.read[lessonId].removed = true;
          data.read[lessonId].updatedAt = Date.now();
          save(data);
        }
      },
      isRead: function(lessonId) {
        return !!(data.read[lessonId] && !data.read[lessonId].removed);
      },
      readCount: function() {
        var c = 0;
        for (var k in data.read) if (!data.read[k].removed) c++;
        return c;
      },

      addTerm: function(termId, note) {
        data.terms[termId] = { note: note || '', addedAt: Date.now(), updatedAt: Date.now() };
        save(data);
      },
      removeTerm: function(termId) {
        if (data.terms[termId]) {
          data.terms[termId].removed = true;
          data.terms[termId].updatedAt = Date.now();
          save(data);
        }
      },
      hasTerm: function(termId) {
        return !!(data.terms[termId] && !data.terms[termId].removed);
      },
      termCount: function() {
        var c = 0;
        for (var k in data.terms) if (!data.terms[k].removed) c++;
        return c;
      },

      getPrefs: function() { return data.prefs; },
      setPref: function(key, val) {
        data.prefs[key] = val;
        save(data);
      },

      recordActivity: function() {
        var today = new Date().toISOString().slice(0, 10);
        if (!data.activity.days) data.activity.days = [];
        if (data.activity.days[data.activity.days.length - 1] !== today) {
          data.activity.days.push(today);
          if (data.activity.days.length > 365) data.activity.days = data.activity.days.slice(-365);
        }
        save(data);
      },
      streak: function() {
        if (!data.activity.days || data.activity.days.length === 0) return 0;
        var days = data.activity.days;
        var today = new Date().toISOString().slice(0, 10);
        var count = 0;
        var check = today;
        for (var i = days.length - 1; i >= 0; i--) {
          if (days[i] === check) {
            count++;
            var d = new Date(check);
            d.setDate(d.getDate() - 1);
            check = d.toISOString().slice(0, 10);
          } else if (days[i] < check) {
            break;
          }
        }
        return count;
      },

      currentStep: function() {
        for (var i = 0; i < HIT.path.length; i++) {
          if (!this.isRead(HIT.path[i])) return i;
        }
        return HIT.path.length;
      },

      export: function() { return JSON.parse(JSON.stringify(data)); },
      import: function(incoming) {
        data = incoming;
        save(data);
      },

      /* ── 合并(用于 GitHub 拉取):条目级并集,updatedAt 新者胜 ──
         兼容两种 activity 形态:本站 {days:[...]} 数组,或 PGF 系 {day:count} 映射。 */
      merge: function(remote) {
        if (!remote || typeof remote !== 'object') return data;
        if (!data.terms || typeof data.terms !== 'object') data.terms = {};
        if (!data.read || typeof data.read !== 'object') data.read = {};
        if (!data.prefs || typeof data.prefs !== 'object') data.prefs = {};
        if (!data.activity || typeof data.activity !== 'object') data.activity = {};

        // terms & read:按 updatedAt 并集,新者胜
        ['terms', 'read'].forEach(function(k) {
          var rm = remote[k];
          if (rm && typeof rm === 'object') {
            Object.keys(rm).forEach(function(id) {
              var r = rm[id], l = data[k][id];
              if (!l || (r && (r.updatedAt || 0) > (l.updatedAt || 0))) data[k][id] = r;
            });
          }
        });

        // prefs:旧模型无 updatedAt,整组以本机为准(不参与远程覆盖)

        // activity:本站 days 数组 → 合并去重排序;若为映射 {day:count} → 逐键取最大值
        if (remote.activity && Array.isArray(remote.activity.days)) {
          var set = {};
          (data.activity.days || []).forEach(function(d) { set[d] = 1; });
          remote.activity.days.forEach(function(d) { set[d] = 1; });
          data.activity = { days: Object.keys(set).sort() };
        } else if (remote.activity && typeof remote.activity === 'object') {
          Object.keys(remote.activity).forEach(function(day) {
            data.activity[day] = Math.max(data.activity[day] || 0, remote.activity[day]);
          });
        }

        // 直接落盘,避免 merge 过程中再次触发推送
        try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { }
        if (HIT.onProgressChange) HIT.onProgressChange();
        return data;
      },

      /* ── 自动同步用的 JSON 序列化/反序列化(区别于旧的 export()/import()) ── */
      exportJson: function() { return JSON.stringify(data, null, 2); },
      importJson: function(json) {
        try { this.merge(JSON.parse(json)); return true; } catch (e) { return false; }
      }
    };
  };
})();
