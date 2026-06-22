/* 阅读模块第 7 课:读物分级。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'read-07-materials',
  module: 'read',
  order: 7,
  title: '读物怎么选:分级阅读不踩坑',
  minutes: 5,
  keywords: ['阅读材料', '分级阅读', 'graded readers', '读物', 'reading'],

  sections: {
    what: '\
<p><strong>一句话:选对难度的读物,阅读才坚持得下去——一页十个生词的书只会劝退,理想是"基本读得懂、偶有生词"。</strong></p>\
<p>很多人雄心勃勃买原版名著,结果一页查二十个词,三天放弃。阅读和听力一样讲究"可理解输入":材料要略高于你的水平,不能高太多。</p>',

    when: '\
<p>挑下一本读物、想开始英文阅读习惯时。</p>',

    how: '\
<p><strong>读物分级台阶(由易到难):</strong></p>\
<table>\
<tr><th>级别</th><th>读物类型</th></tr>\
<tr><td>入门</td><td>分级读物(graded readers)、儿童绘本、英文漫画</td></tr>\
<tr><td>初级</td><td>简写版名著、新闻简讯(如分级新闻 App)</td></tr>\
<tr><td>中级</td><td>青少年小说(YA)、博客、科普短文</td></tr>\
<tr><td>高级</td><td>原版小说、报刊杂志、专业文章</td></tr>\
</table>\
<div class="ex">🎯 "五指法则"测难度:翻开一页随便读,伸出手指数生词——一页超过 5 个完全不懂的词,这本对现在的你偏难,降一级。</div>\
<div class="ex">💡 选你<strong>感兴趣的话题</strong>,哪怕略难也读得下去;选无聊的,再简单也坚持不了。兴趣 > 难度。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:一上来啃原版名著。</b>《经济学人》、原版小说对初学者太难。从分级读物、简写版起步,台阶式上爬。</div>\
<div class="pit"><b>坑 2:只看"权威推荐书单"。</b>别人的书单未必合你水平和兴趣。用五指法则自测,挑自己想读的。</div>\
<div class="pit"><b>坑 3:难度选太低不挑战。</b>全都认识也不进步。理想是"基本懂、偶有生词",踮脚够得着。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"五指法则"用来判断什么?',
      options: ['读书速度', '一本书对你是否难度合适', '阅读时长', '生词重要性'],
      answer: 1,
      explain: '翻一页数完全不懂的生词,超过5个(一只手)说明偏难,该降一级。'
    },
    {
      type: 'choice',
      q: '零基础开始英文阅读,最适合的读物是?',
      options: ['原版名著', '《经济学人》', '分级读物/简写版', '专业论文'],
      answer: 2,
      explain: '从分级读物(graded readers)、简写版起步,难度可控,台阶式上爬。'
    }
  ]
});
