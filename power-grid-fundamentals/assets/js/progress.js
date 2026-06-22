/* 学习进度:localStorage 持久化 + 可同步的数据模型(ADR-4/5/6)。
   三件套:术语本 terms / 阅读标记 read / 偏好 prefs,外加 activity(按天计数,用于 streak)。
   合并规则:条目级并集,updatedAt 新者胜;删除用软删除墓碑(removed:true),
   防止另一台设备把已删条目"复活"。无小测、无错题本(ADR-10)。 */
(function () {
  'use strict';
  window.PGF = window.PGF || {};

  var KEY = 'pgf.progress.v1';
  var data = load();

  function blank() {
    return { version: 1, terms: {}, read: {}, prefs: {}, activity: {} };
  }
  function load() {
    try {
      var raw = localStorage.getItem(KEY);
      if (raw) {
        var d = JSON.parse(raw);
        if (d && d.version === 1) return normalize(d);
      }
    } catch (e) { }
    return blank();
  }
  function normalize(d) {
    var b = blank();
    ['terms', 'read', 'prefs', 'activity'].forEach(function (k) {
      if (!d[k] || typeof d[k] !== 'object') d[k] = b[k];
    });
    return d;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { }
    if (PGF.sync) PGF.sync.schedulePush();
    if (PGF.onProgressChange) PGF.onProgressChange();
  }
  function now() { return Date.now(); }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }
  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  function liveEntries(map) {
    return Object.keys(map).filter(function (k) { return !map[k].removed; })
      .map(function (k) { var e = map[k]; e._id = k; return e; });
  }

  PGF.progress = {
    raw: function () { return data; },

    /* ── 术语本(收藏的术语 id) ── */
    addTerm: function (termId, lessonId) {
      if (!termId) return;
      data.terms[termId] = { lesson: lessonId || '', updatedAt: now() };
      this.touch(); save();
    },
    removeTerm: function (termId) {
      if (data.terms[termId]) { data.terms[termId] = { removed: true, updatedAt: now() }; save(); }
    },
    hasTerm: function (termId) {
      var e = data.terms[termId];
      return !!(e && !e.removed);
    },
    listTerms: function () {
      return liveEntries(data.terms).sort(function (a, b) { return b.updatedAt - a.updatedAt; });
    },

    /* ── 阅读标记(手动) ── */
    markRead: function (lessonId) {
      data.read[lessonId] = { readAt: now(), updatedAt: now() };
      this.touch(); save();
    },
    unmarkRead: function (lessonId) {
      if (data.read[lessonId]) { data.read[lessonId] = { removed: true, updatedAt: now() }; save(); }
    },
    isRead: function (lessonId) {
      var e = data.read[lessonId];
      return !!(e && !e.removed);
    },
    readCountOf: function (moduleId) {
      var n = 0;
      PGF.registry.lessonsOf(moduleId).forEach(function (l) {
        if (PGF.progress.isRead(l.id)) n++;
      });
      return n;
    },

    /* ── 偏好(单值,最后写入为准) ── */
    setPref: function (k, v) {
      data.prefs[k] = v;
      data.prefs.updatedAt = now();
      save();
    },
    pref: function (k) { return data.prefs[k]; },

    /* ── 活跃度与 streak ── */
    touch: function () {
      var t = today();
      data.activity[t] = (data.activity[t] || 0) + 1;
    },
    streak: function () {
      var n = 0, d = new Date();
      for (; ;) {
        var key = d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
        if (data.activity[key]) { n++; d.setDate(d.getDate() - 1); }
        else break;
      }
      return n;
    },

    /* ── 合并(ADR-5):条目级并集,时间戳新者胜 ── */
    merge: function (remote) {
      if (!remote || remote.version !== 1) return data;
      remote = normalize(remote);
      ['terms', 'read'].forEach(function (k) {
        Object.keys(remote[k]).forEach(function (id) {
          var r = remote[k][id], l = data[k][id];
          if (!l || (r.updatedAt || 0) > (l.updatedAt || 0)) data[k][id] = r;
        });
      });
      // prefs:整组最后写入为准
      if ((remote.prefs.updatedAt || 0) > (data.prefs.updatedAt || 0)) data.prefs = remote.prefs;
      // activity:按天取最大值
      Object.keys(remote.activity).forEach(function (day) {
        data.activity[day] = Math.max(data.activity[day] || 0, remote.activity[day]);
      });
      try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { }
      if (PGF.onProgressChange) PGF.onProgressChange();
      return data;
    },

    /* ── 手动导出/导入(自动同步之外的备用通道) ── */
    exportJson: function () { return JSON.stringify(data, null, 2); },
    importJson: function (json) {
      try { this.merge(JSON.parse(json)); return true; } catch (e) { return false; }
    }
  };
})();
