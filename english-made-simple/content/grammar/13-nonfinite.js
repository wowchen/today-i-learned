/* 语法模块第 13 课:非谓语动词。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'grammar-13-nonfinite',
  module: 'grammar',
  order: 13,
  title: '非谓语:to do / doing / done',
  minutes: 5,
  keywords: ['非谓语', 'non-finite', '不定式', '动名词', '分词', 'to do', 'doing', 'done'],

  sections: {
    what: '\
<p><strong>一句话:一个句子只能有一个"正经谓语动词",其余动词要变成非谓语形式——to do(不定式)、doing(动名词/现在分词)、done(过去分词)。</strong></p>\
<p>中文可以一连串动词("我想去吃饭"三个动词),英语一句只允许一个谓语,其余得"变形让位"。<en>I want to eat.</en> —— want 是谓语,eat 得变成 to eat。这就是非谓语的由来。</p>',

    when: '\
<p>一句话里出现第二个、第三个动词时,就要考虑它该变成哪种非谓语形式。</p>',

    how: '\
<p><strong>三种形式,各有分工(点击听):</strong></p>\
<table>\
<tr><th>形式</th><th>常见用法</th><th>例句</th></tr>\
<tr><td>to do(不定式)</td><td>表目的/某些动词后</td><td><en>I want to go.</en> · <en>I came here to learn.</en></td></tr>\
<tr><td>doing(动名词)</td><td>当名词用/某些动词后</td><td><en>I enjoy reading.</en> · <en>Swimming is fun.</en></td></tr>\
<tr><td>done(过去分词)</td><td>表被动/完成</td><td><en>a broken cup</en> 一个破杯子</td></tr>\
</table>\
<div class="ex">🎯 to do 还是 doing?跟动词走,这是固定搭配,要记:<br>want / decide / hope + <strong>to do</strong>:<en>I decided to leave.</en><br>enjoy / finish / mind + <strong>doing</strong>:<en>I finished doing it.</en></div>',

    pitfalls: '\
<div class="pit"><b>坑 1:一句话堆两个谓语。</b>"我想去" 不是 "I want go",want 是谓语,go 要变 to go:<en>I want to go</en>。第二个动词必须非谓语化。</div>\
<div class="pit"><b>坑 2:to do / doing 搭配记反。</b>enjoy 后面只能 doing(enjoy reading,不是 enjoy to read);want 后面只能 to do。这些是固定的,高频的先记牢。</div>\
<div class="pit"><b>坑 3:动名词当主语忘了它是单数。</b><en>Swimming is fun</en>,动名词作主语视为单数,用 is 不用 are。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '"我想去" 正确的是?',
      options: ['I want go', 'I want to go', 'I want going', 'I want went'],
      answer: 1,
      explain: '一句只能一个谓语(want),第二个动词变非谓语:want + to do → I want to go。'
    },
    {
      type: 'choice',
      q: 'enjoy 后面接动词应该用?',
      options: ['to do(to read)', 'doing(reading)', '原形(read)', '过去式(read)'],
      answer: 1,
      explain: 'enjoy 后只能跟动名词 doing:enjoy reading。这是固定搭配,want 则只跟 to do。'
    },
    {
      type: 'fill',
      q: 'a ____ cup(一个"破了的"杯子,用 break 的过去分词表被动/完成)',
      answer: ['broken'],
      explain: '过去分词 broken 作定语,表被动/完成:a broken cup(被打破的杯子)。'
    }
  ]
});
