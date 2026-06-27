/* 学习进度：localStorage 持久化 */
window.MATH = window.MATH || {};

(function() {
  var KEY = 'math.progress.v1';

  function load() {
    try { return JSON.parse(localStorage.getItem(KEY)) || blank(); }
    catch(e) { return blank(); }
  }

  function blank() {
    return { terms: {}, mistakes: {}, read: {}, prefs: {}, activity: {} };
  }

  function save(data) {
    localStorage.setItem(KEY, JSON.stringify(data));
  }

  MATH.progress = function() {
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
        for (var i = 0; i < MATH.path.length; i++) {
          if (!this.isRead(MATH.path[i])) return i;
        }
        return MATH.path.length;
      },

      export: function() { return JSON.parse(JSON.stringify(data)); },
      import: function(incoming) {
        data = incoming;
        save(data);
      }
    };
  };
})();
