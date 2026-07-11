/* 学习进度：localStorage 持久化 */
window.NH = window.NH || {};

(function() {
  var KEY = 'nh.progress.v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || blank(); }
    catch(e) { return blank(); }
  }

  function blank() {
    return { terms: {}, mistakes: {}, read: {}, prefs: {}, activity: {} };
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
    if (NH.sync) NH.sync.schedulePush();
    if (NH.onProgressChange) NH.onProgressChange();
  }

  NH.progress = function() {
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
        for (var i = 0; i < NH.path.length; i++) {
          if (!this.isRead(NH.path[i])) return i;
        }
        return NH.path.length;
      },

      export: function() { return JSON.parse(JSON.stringify(data)); },
      import: function(incoming) {
        data = incoming;
        save(data);
      },

      /* ── 合并(同步用):条目级并集,updatedAt 新者胜;prefs 整组保留本机;activity 兼容两种形状 ── */
      merge: function(remote) {
        if (!remote || typeof remote !== 'object') return data;
        ['terms', 'read', 'prefs', 'activity'].forEach(function (k) {
          if (!data[k] || typeof data[k] !== 'object') data[k] = {};
        });
        ['terms', 'read'].forEach(function (k) {
          Object.keys(remote[k] || {}).forEach(function (id) {
            var r = remote[k][id], l = data[k][id];
            if (!l || (r.updatedAt || 0) > (l.updatedAt || 0)) data[k][id] = r;
          });
        });
        // prefs:旧模型无 updatedAt,整组保留本机(不合并)。
        if (remote.activity && Array.isArray(remote.activity.days)) {
          var set = {};
          (data.activity.days || []).forEach(function (d) { set[d] = 1; });
          remote.activity.days.forEach(function (d) { set[d] = 1; });
          data.activity = { days: Object.keys(set).sort() };
        } else if (remote.activity && typeof remote.activity === 'object') {
          Object.keys(remote.activity).forEach(function (day) {
            data.activity[day] = Math.max(data.activity[day] || 0, remote.activity[day]);
          });
        }
        try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { }
        if (NH.onProgressChange) NH.onProgressChange();
        return data;
      },

      exportJson: function() { return JSON.stringify(data, null, 2); },
      importJson: function(json) {
        try { this.merge(JSON.parse(json)); return true; } catch (e) { return false; }
      }
    };
  };
})();
