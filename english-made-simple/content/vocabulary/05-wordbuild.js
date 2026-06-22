/* 词汇模块第 5 课:构词法(合成/转化/缩略)。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'vocab-05-wordbuild',
  module: 'vocab',
  order: 5,
  title: '构词法:合成 · 转化 · 缩略',
  minutes: 5,
  keywords: ['构词法', '合成词', 'compound', '转化', 'conversion', '缩略', 'word formation'],

  sections: {
    what: '\
<p><strong>一句话:除了加词缀,英语还有三种"造新词"的常用套路——合成(两词拼一起)、转化(词性直接挪用)、缩略(砍短或取首字母)。认得套路,生词不再陌生。</strong></p>\
<p>英语一直在造新词,但万变不离这几招。看懂套路,你能猜出 <en>smartphone</en>、<en>to google</en>、<en>app</en> 这类词怎么来的。</p>',

    when: '\
<p>遇到没在词典见过的新词(尤其网络/科技词),先想想是不是合成、转化或缩略来的,八成能猜对。</p>',

    how: '\
<p><strong>套路一:合成词(compound)——两个词拼成一个。</strong>(点击听)</p>\
<div class="ex"><en>tooth</en> + <en>brush</en> = <en>toothbrush</en> 牙刷　|　<en>smart</en> + <en>phone</en> = <en>smartphone</en>　|　<en>basket</en> + <en>ball</en> = <en>basketball</en></div>\
<p><strong>套路二:转化(conversion)——同一个词不变样,直接换词性用。</strong></p>\
<table>\
<tr><th>原词性</th><th>转化用</th><th>例句</th></tr>\
<tr><td>名词 google</td><td>当动词</td><td><en>Let me google it.</en> 搜一下</td></tr>\
<tr><td>名词 water</td><td>当动词</td><td><en>I water the plants.</en> 浇水</td></tr>\
<tr><td>动词 a run</td><td>当名词</td><td><en>I went for a run.</en> 跑步</td></tr>\
</table>\
<p><strong>套路三:缩略(shortening / acronym)。</strong></p>\
<div class="ex">砍短:<en>application</en> → <en>app</en>　|　<en>advertisement</en> → <en>ad</en>　|　取首字母:<en>USA</en> · <en>ASAP</en>(as soon as possible)</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:合成词分开写或乱加空格。</b><en>toothbrush</en> 是一个词;有的合成词连写、有的带连字符(<en>well-known</en>)、有的分写(<en>high school</en>),拿不准查词典。</div>\
<div class="pit"><b>坑 2:转化用错场合。</b>"google 当动词"很口语,正式写作里慎用品牌名作动词。转化词常偏口语。</div>\
<div class="pit"><b>坑 3:缩略词当正式词写。</b><en>ad</en>、<en>app</en> 偏口语;正式文件可能要写全 advertisement / application。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: 'smartphone 属于哪种构词法?',
      options: ['加前缀', '合成(两个词拼一起)', '缩略', '转化'],
      answer: 1,
      explain: 'smart + phone = smartphone,两个独立的词拼成新词,叫合成词(compound)。'
    },
    {
      type: 'choice',
      q: '"Let me google it" 里的 google 是?',
      options: ['名词当动词用(转化)', '合成词', '前缀词', '拼错的词'],
      answer: 0,
      explain: 'google 本是名词(公司名),这里不变样直接当动词"搜索"用,这就是转化(conversion)。'
    },
    {
      type: 'fill',
      q: 'application 在口语里常缩略成 ____(三个字母)。',
      answer: ['app'],
      explain: 'application → app,这是"砍短"型缩略。advertisement → ad 同理。'
    }
  ]
});
