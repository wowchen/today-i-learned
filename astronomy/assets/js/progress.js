/* 学习进度：localStorage 持久化 */
window.AST = window.AST || {};

(function() {
  var KEY = 'ast.progress.v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || blank(); }
    catch(e) { return blank(); }
  }

  function blank() {
    return { terms: {}, mistakes: {}, read: {}, prefs: {}, activity: {} };
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
    if (AST.sync) AST.sync.schedulePush();
    if (AST.onProgressChange) AST.onProgressChange();
  }

  AST.progress = function() {
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
        for (var i = 0; i < AST.path.length; i++) {
          if (!this.isRead(AST.path[i])) return i;
        }
        return AST.path.length;
      },

      export: function() { return JSON.parse(JSON.stringify(data)); },
      import: function(incoming) {
        data = incoming;
        save(data);
      },

      /* ── 合并(可选 GitHub 同步):条目级并集,updatedAt 新者胜 ── */
      merge: function(remote) {
        if (!remote || typeof remote !== 'object') return data;
        data.terms = data.terms || {};
        data.read = data.read || {};
        data.prefs = data.prefs || {};
        data.activity = data.activity || {};
        remote.terms = remote.terms || {};
        remote.read = remote.read || {};
        remote.prefs = remote.prefs || {};
        remote.activity = remote.activity || {};
        ['terms', 'read'].forEach(function (k) {
          Object.keys(remote[k]).forEach(function (id) {
            var r = remote[k][id], l = data[k][id];
            if (!l || (r.updatedAt || 0) > (l.updatedAt || 0)) data[k][id] = r;
          });
        });
        // prefs:整组最后写入为准(旧模型无 updatedAt,默认保留本地)
        if ((remote.prefs.updatedAt || 0) > (data.prefs.updatedAt || 0)) data.prefs = remote.prefs;
        // activity:兼容 {days:[...]} 与 {day:count} 两种形态
        var ra = remote.activity;
        if (Array.isArray(ra.days)) {
          var set = {};
          (data.activity.days || []).forEach(function (d) { set[d] = 1; });
          ra.days.forEach(function (d) { set[d] = 1; });
          data.activity = { days: Object.keys(set).sort() };
        } else if (typeof ra === 'object') {
          Object.keys(ra).forEach(function (day) {
            if (day === 'days') return;
            data.activity[day] = Math.max(data.activity[day] || 0, ra[day] || 0);
          });
        }
        // 直接写回,避免触发 push(拉取合并时不应再次推送)
        try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { }
        if (AST.onProgressChange) AST.onProgressChange();
        return data;
      },

      exportJson: function () { return JSON.stringify(data, null, 2); },
      importJson: function (json) {
        try { this.merge(JSON.parse(json)); return true; } catch (e) { return false; }
      }
    };
  };
})();
