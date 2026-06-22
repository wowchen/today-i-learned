/* 学习进度:localStorage 持久化 + 可同步的数据模型(ADR-5/6/7)。
   四件套:生词本 vocab / 错题本 mistakes / 阅读标记 read / 偏好 prefs,
   外加 activity(按天计数,用于 streak)。
   合并规则:条目级并集,updatedAt 新者胜;删除用软删除墓碑(removed:true),
   防止另一台设备把已删条目"复活"。 */
(function () {
  'use strict';
  window.EMS = window.EMS || {};

  var KEY = 'ems.progress.v1';
  var data = load();

  function blank() {
    return { version: 1, vocab: {}, mistakes: {}, read: {}, prefs: {}, activity: {} };
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
    ['vocab', 'mistakes', 'read', 'prefs', 'activity'].forEach(function (k) {
      if (!d[k] || typeof d[k] !== 'object') d[k] = b[k];
    });
    return d;
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { }
    if (EMS.sync) EMS.sync.schedulePush();
    if (EMS.onProgressChange) EMS.onProgressChange();
  }
  function now() { return Date.now(); }
  function today() {
    var d = new Date();
    return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate());
  }
  function pad(n) { return n < 10 ? '0' + n : '' + n; }

  function liveEntries(map) {
    return Object.keys(map).filter(function (k) { return !map[k].removed; })
      .map(function (k) { var e = map[k]; e._id = k; return e; });
  }

  EMS.progress = {
    raw: function () { return data; },

    /* ── 生词本 ── */
    addVocab: function (term, note, lessonId) {
      var id = String(term).trim().toLowerCase();
      if (!id) return;
      data.vocab[id] = { term: String(term).trim(), note: note || '', lesson: lessonId || '', updatedAt: now() };
      this.touch(); save();
    },
    removeVocab: function (id) {
      if (data.vocab[id]) { data.vocab[id] = { removed: true, updatedAt: now() }; save(); }
    },
    hasVocab: function (term) {
      var e = data.vocab[String(term).trim().toLowerCase()];
      return !!(e && !e.removed);
    },
    listVocab: function () {
      return liveEntries(data.vocab).sort(function (a, b) { return b.updatedAt - a.updatedAt; });
    },

    /* ── 错题本 ── */
    addMistake: function (qid, payload) {
      payload = payload || {};
      payload.updatedAt = now();
      data.mistakes[qid] = payload;
      save();
    },
    removeMistake: function (id) {
      if (data.mistakes[id]) { data.mistakes[id] = { removed: true, updatedAt: now() }; save(); }
    },
    listMistakes: function () {
      return liveEntries(data.mistakes).sort(function (a, b) { return b.updatedAt - a.updatedAt; });
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
      EMS.registry.lessonsOf(moduleId).forEach(function (l) {
        if (EMS.progress.isRead(l.id)) n++;
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

    /* ── 合并(ADR-6):条目级并集,时间戳新者胜 ── */
    merge: function (remote) {
      if (!remote || remote.version !== 1) return data;
      remote = normalize(remote);
      ['vocab', 'mistakes', 'read'].forEach(function (k) {
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
      if (EMS.onProgressChange) EMS.onProgressChange();
      return data;
    },

    /* ── 手动导出/导入(自动同步之外的备用通道) ── */
    exportJson: function () { return JSON.stringify(data, null, 2); },
    importJson: function (json) {
      try { this.merge(JSON.parse(json)); return true; } catch (e) { return false; }
    }
  };
})();
