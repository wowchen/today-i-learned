/* 学习进度：localStorage 持久化 */
window.SPM = window.SPM || {};

(function() {
  var NS = window.SPM;
  var KEY = 'spm.progress.v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || blank(); }
    catch(e) { return blank(); }
  }

  function blank() {
    return { terms: {}, mistakes: {}, read: {}, prefs: {}, activity: {} };
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
    if (NS.sync) NS.sync.schedulePush();
    if (NS.onProgressChange) NS.onProgressChange();
  }

  SPM.progress = function() {
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

      addMistake: function(key, info) {
        data.mistakes[key] = { lesson: info.lesson, q: info.q, my: info.my, ans: info.ans, updatedAt: Date.now() };
        save(data);
      },
      removeMistake: function(key) {
        if (data.mistakes[key]) {
          data.mistakes[key].removed = true;
          data.mistakes[key].updatedAt = Date.now();
          save(data);
        }
      },
      mistakeCount: function() {
        var c = 0;
        for (var k in data.mistakes) if (!data.mistakes[k].removed) c++;
        return c;
      },
      allMistakes: function() {
        var arr = [];
        for (var k in data.mistakes) if (!data.mistakes[k].removed) arr.push(data.mistakes[k]);
        return arr;
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
        for (var i = 0; i < SPM.path.length; i++) {
          if (!this.isRead(SPM.path[i])) return i;
        }
        return SPM.path.length;
      },

      /* ── 合并(可选 GitHub 同步):条目级并集,updatedAt 新者胜;activity 兼容数组/map ── */
      merge: function(remote) {
        if (!remote || typeof remote !== 'object') return data;
        data.terms = data.terms || {};
        data.read = data.read || {};
        data.prefs = data.prefs || {};
        data.activity = data.activity || {};
        var r = remote;
        var rterms = (r.terms && typeof r.terms === 'object') ? r.terms : {};
        var rread = (r.read && typeof r.read === 'object') ? r.read : {};
        ['terms', 'read'].forEach(function(k) {
          var rm = (k === 'terms') ? rterms : rread;
          Object.keys(rm).forEach(function(id) {
            var rv = rm[id];
            if (!rv || typeof rv !== 'object') return;
            var lv = data[k][id];
            if (!lv || (rv.updatedAt || 0) > (lv.updatedAt || 0)) data[k][id] = rv;
          });
        });
        // prefs:旧模型无 updatedAt,保持本机(最后写入为准之本地优先)
        // activity:兼容 {days:[...]} 数组并集 与 {day:count} map 逐键取最大值
        var ract = r.activity || {};
        if (ract && Array.isArray(ract.days)) {
          var set = {};
          (data.activity.days || []).forEach(function(d) { if (d) set[d] = 1; });
          ract.days.forEach(function(d) { if (d) set[d] = 1; });
          data.activity = { days: Object.keys(set).sort() };
        } else if (ract && typeof ract === 'object') {
          var m = {};
          if (Array.isArray(data.activity.days)) {
            data.activity.days.forEach(function(d) { m[d] = 1; });
          } else if (data.activity && typeof data.activity === 'object') {
            Object.keys(data.activity).forEach(function(kk) { if (kk !== 'days') m[kk] = data.activity[kk]; });
          }
          Object.keys(ract).forEach(function(day) {
            if (day === 'days') return;
            m[day] = Math.max(m[day] || 0, ract[day] || 0);
          });
          data.activity = m;
        }
        // 直接落盘,避免触发 save()(防止 pull 合并时再次推送)
        try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { }
        if (NS.onProgressChange) NS.onProgressChange();
        return data;
      },

      exportJson: function() { return JSON.stringify(data, null, 2); },
      importJson: function(json) {
        try { this.merge(JSON.parse(json)); return true; } catch (e) { return false; }
      },

      export: function() { return JSON.parse(JSON.stringify(data)); },
      import: function(incoming) {
        data = incoming;
        save(data);
      }
    };
  };
})();
