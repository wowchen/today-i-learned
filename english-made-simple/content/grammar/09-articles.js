/* 语法模块第 9 课:冠词。中国人高频错点。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-09-articles',
  module: 'grammar',
  order: 9,
  title: '冠词:a / an / the / 不加,老错点',
  minutes: 5,
  keywords: ['冠词', 'articles', 'a', 'an', 'the', '不定冠词', '定冠词'],

  sections: {
    what: '\
<p><strong>一句话:冠词是名词前的小词——a/an 表"某一个(泛指)",the 表"那个(特指)",有时什么都不加。中文没有冠词,所以这是中国人最容易漏、最容易错的地方。</strong></p>\
<p>类比:a 像第一次提到"一只猫"(听者还不知道哪只);the 像再次提到"那只猫"(双方都知道是哪只)。把这个"听者知不知道"的逻辑想通,冠词就有谱了。</p>',

    when: '\
<p>几乎每个名词前都要决定:加 a/an?加 the?还是不加?说话写句子时时刻在用。</p>',

    how: '\
<p><strong>三条主线规律(点击听):</strong></p>\
<table>\
<tr><th>用法</th><th>规则</th><th>例</th></tr>\
<tr><td>a / an</td><td>单数、可数、第一次提到/泛指一个</td><td><en>I saw a dog.</en>(某只狗)</td></tr>\
<tr><td>the</td><td>特指,双方都知道哪个</td><td><en>The dog is cute.</en>(刚说的那只)</td></tr>\
<tr><td>不加冠词</td><td>复数泛指、不可数、抽象概念</td><td><en>I like music.</en> · <en>Dogs are friendly.</en></td></tr>\
</table>\
<p><strong>a 还是 an?看后面词的"发音"而非字母:</strong></p>\
<div class="ex">辅音音开头用 a:<en>a book</en> · <en>a car</en><br>\
元音音开头用 an:<en>an apple</en> · <en>an hour</en>(hour 的 h 不发音,听感是元音!)<br>\
反例:<en>a university</en>(university 听感是 /ju/ 辅音,所以用 a 不用 an)</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:该加冠词全漏掉。</b>中文"我是学生"直译成 "I am student" 错,要 <en>I am a student</en>。单数可数名词前几乎必有冠词。</div>\
<div class="pit"><b>坑 2:a/an 只看首字母。</b>看发音!<en>an hour</en>(h 不发音)、<en>a university</en>(听感 ju)。靠耳朵不靠眼睛。</div>\
<div class="pit"><b>坑 3:泛指复数加 the。</b>"我喜欢狗(泛指所有狗)"是 <en>I like dogs</en>,不是 "I like the dogs"(那特指某几只)。泛指复数不加 the。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"我是个学生" 正确的是?',
      options: ['I am student', 'I am a student', 'I am the student', 'I am an student'],
      answer: 1,
      explain: '单数可数名词 student 前要加冠词,泛指用 a:I am a student。中文无冠词,易漏。'
    },
    {
      type: 'choice',
      q: '下面哪个搭配正确?',
      options: ['a apple', 'an apple', 'a hour', 'an university'],
      answer: 1,
      explain: 'an apple(元音音开头)。a/an 看发音:an hour(h不发音)、a university(听感 ju)。'
    },
    {
      type: 'fill',
      q: '"我喜欢音乐"(泛指、不可数)中,music 前面应该____冠词。(填:加 或 不加)',
      answer: ['不加'],
      explain: '不可数名词、抽象概念泛指时不加冠词:I like music(不是 the music)。'
    }
  ]
});
