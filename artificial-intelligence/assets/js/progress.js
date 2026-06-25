/* 学习进度：localStorage 持久化 */
window.AIX = window.AIX || {};

(function() {
  var KEY = 'aix.progress.v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || blank(); }
    catch(e) { return blank(); }
  }

  function blank() {
    return { terms: {}, read: {}, prefs: {}, activity: {} };
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  AIX.progress = function() {
    var data = load();
    return {
      raw: function() { return data; },

      markRead: function(lessonId) {
        data.read[lessonId] = { readAt: Date.now(), updatedAt: Date.now() };
        save(data);
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
        for (var i = 0; i < AIX.path.length; i++) {
          if (!this.isRead(AIX.path[i])) return i;
        }
        return AIX.path.length;
      },

      export: function() { return JSON.parse(JSON.stringify(data)); },
      import: function(incoming) {
        data = incoming;
        save(data);
      }
    };
  };
})();
