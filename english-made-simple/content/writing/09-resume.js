/* 写作模块第 9 课:简历与求职信。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'write-09-resume',
  module: 'write',
  order: 9,
  title: '写简历与求职信',
  minutes: 5,
  keywords: ['简历', 'resume', '求职信', 'cover letter', '求职', 'writing'],

  sections: {
    what: '\
<p><strong>一句话:英文简历(resume)讲究"用动词开头的短句 + 量化成果",求职信(cover letter)则用三段说清"我是谁、为什么合适、期待回复"。</strong></p>\
<p>求职文书是高回报的写作场景。它有非常明确的美式惯例,照着套就专业;不懂惯例,再好的经历也写得没说服力。</p>',

    when: '\
<p>找工作、申请、投简历时。</p>',

    how: '\
<p><strong>简历要点:用强动词开头,量化成果(点击听例句):</strong></p>\
<table>\
<tr><th>✗ 弱</th><th>✔ 强(动词开头+数字)</th></tr>\
<tr><td>I was responsible for sales.</td><td><en>Managed a sales team of 10.</en></td></tr>\
<tr><td>I did some projects.</td><td><en>Led 5 projects, increasing revenue by 20%.</en></td></tr>\
</table>\
<p>常用强动词:<en>managed</en> · <en>led</en> · <en>created</en> · <en>improved</en> · <en>achieved</en>。</p>\
<p><strong>求职信三段结构:</strong></p>\
<table>\
<tr><td>第1段</td><td>申请什么职位 + 你是谁</td></tr>\
<tr><td>第2段</td><td>为什么你合适(挑1-2个亮点+成果)</td></tr>\
<tr><td>第3段</td><td>期待面试 + 礼貌收尾</td></tr>\
</table>\
<div class="ex">💡 美式简历惯例:通常<strong>不放照片、不写年龄/婚姻状况</strong>(避免歧视嫌疑),一页为佳,用要点(bullet)不用大段文字。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:简历写大段句子。</b>用要点(bullet)+ 动词开头的短句,别写成作文。HR 几秒扫一份简历。</div>\
<div class="pit"><b>坑 2:放照片、写年龄婚否。</b>美式简历惯例不放这些(防歧视)。和中文简历习惯不同。</div>\
<div class="pit"><b>坑 3:只说职责不说成果。</b>"负责销售"不如"带10人团队、业绩涨20%"。量化的成果最有说服力。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '英文简历描述经历,最有说服力的写法是?',
      options: ['I was responsible for…', '动词开头+量化成果(Led 5 projects, +20%)', '写成长段落', '只列职责'],
      answer: 1,
      explain: '用强动词开头(Managed/Led)+ 量化成果(数字),比"我负责…"有力得多。'
    },
    {
      type: 'choice',
      q: '关于美式简历惯例,正确的是?',
      options: ['必须放照片', '通常不放照片、不写年龄婚否', '越长越好', '必须写婚姻状况'],
      answer: 1,
      explain: '美式简历通常不放照片、不写年龄/婚姻(防歧视),一页为佳,用要点。'
    }
  ]
});
