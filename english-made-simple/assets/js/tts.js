/* 点词即听:浏览器自带美音(SpeechSynthesis,免费/离线/零依赖)。
   全站约定:任何带 [data-say] 的元素,点击即朗读其 data-say 文本。 */
(function () {
  'use strict';
  window.EMS = window.EMS || {};

  var pickedVoice = null;

  function pickVoice() {
    var prefer = (EMS.progress && EMS.progress.pref('voice')) || '';
    var voices = speechSynthesis.getVoices().filter(function (v) {
      return v.lang && v.lang.indexOf('en-US') === 0;
    });
    if (!voices.length) return null;
    if (prefer) {
      var hit = voices.filter(function (v) { return v.name === prefer; })[0];
      if (hit) return hit;
    }
    // 优先本地嗓音,保证离线可用
    return voices.filter(function (v) { return v.localService; })[0] || voices[0];
  }

  EMS.speak = function (text, rate) {
    if (!('speechSynthesis' in window) || !text) return;
    try {
      var u = new SpeechSynthesisUtterance(text);
      u.lang = 'en-US';
      u.rate = rate || 0.92;
      pickedVoice = pickVoice();
      if (pickedVoice) u.voice = pickedVoice;
      speechSynthesis.cancel();
      speechSynthesis.speak(u);
    } catch (e) { /* 静默:不支持 TTS 时不影响阅读 */ }
  };

  EMS.listVoices = function () {
    if (!('speechSynthesis' in window)) return [];
    return speechSynthesis.getVoices().filter(function (v) {
      return v.lang && v.lang.indexOf('en-US') === 0;
    });
  };

  // 全局委托:点击任何 [data-say] 即朗读
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-say]') : null;
    if (el) EMS.speak(el.getAttribute('data-say') || el.textContent);
  });

  // 某些浏览器需要先 getVoices 一次才会异步填充
  if ('speechSynthesis' in window) {
    speechSynthesis.getVoices();
    speechSynthesis.onvoiceschanged = function () { pickedVoice = null; };
  }
})();
