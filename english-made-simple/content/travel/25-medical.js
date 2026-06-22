/* 旅行模块第 25 课:就医症状描述 + 药店。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-25-medical',
  module: 'travel',
  order: 25,
  title: '应急①:就医症状描述 + 药店',
  minutes: 5,
  keywords: ['就医', 'medical', '症状', 'symptom', '医生', 'doctor', '药店', 'pharmacy', '过敏', '发烧', 'OTC'],

  sections: {
    what: '\
<p><strong>一句话:看病的关键不是英语流利,而是把症状说清——<strong>部位 + 感觉 + 多久了 + 多严重</strong>。轻症先去药店问药剂师(免费),重症去 Urgent Care 或急诊。</strong></p>\
<p>场景地图:护士问 <en>What brings you in today?</en>,你说最重的症状;问"1 到 10 多疼",你给数字 + 位置 + 性质;主动报<strong>药物过敏</strong>和在吃的药。</p>',

    when: '\
<p>身体不适需就医,或去 CVS/Walgreens 药店买非处方药(OTC)时。<strong>美国医疗极贵,务必提前买含医疗的旅行保险。</strong></p>',

    how: '\
<p><strong>描述症状万能模板(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我胃痛很厉害,从今早开始呕吐。</td><td><en>I have a severe stomachache and I\'ve been vomiting since this morning.</en></td></tr>\
<tr><td>(1–10 多疼)大约七八分,下腹刺痛。</td><td><en>About a seven or eight. It\'s a sharp pain in my lower abdomen.</en></td></tr>\
<tr><td>我发烧了,体温 102 华氏度。</td><td><en>I have a fever — my temperature is 102 Fahrenheit.</en></td></tr>\
<tr><td>我对青霉素过敏。</td><td><en>I\'m allergic to penicillin.</en></td></tr>\
<tr><td>我在吃二甲双胍治糖尿病。</td><td><en>I take metformin for diabetes.</en></td></tr>\
<tr><td>我这里痛。(指着)</td><td><en>I have pain here.</en></td></tr>\
</table>\
<p><strong>药店买药(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我想找治喉咙痛和轻微发烧的药。</td><td><en>I\'m looking for something for a sore throat and mild fever.</en></td></tr>\
<tr><td>这是非处方药吗?</td><td><en>Is this over-the-counter?</en></td></tr>\
<tr><td>多久服一次?</td><td><en>How often should I take this?</en></td></tr>\
<tr><td>有儿童版吗?</td><td><en>Do you have a children\'s version?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>就医三选一</strong>:急诊 ER(最贵,胸痛/骨折/呼吸困难才去)· Urgent Care(便宜免预约,发烧扭伤适用)· 药店 Pharmacy(药剂师 PharmD 博士,咨询<strong>免费</strong>)。常用退烧药 Tylenol(acetaminophen);出发前把自己吃的药的<strong>英文名</strong>写在纸上。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:"我要买感冒药"说成 I want cold medicine。</b>感冒没特效药。直接说症状 <en>I\'m looking for something for a sore throat / runny nose.</en>,药剂师按症状推荐更对症。</div>\
<div class="pit"><b>坑 2:不主动说药物过敏。</b>药物过敏(青霉素/阿司匹林等)必须主动讲,别等被问。一句 <en>I\'m allergic to penicillin.</en> 可能救命。</div>\
<div class="pit"><b>坑 3:小病直奔急诊。</b>ER 账单动辄数千美元。轻症先问药剂师(免费)或去 Urgent Care,能省一大笔。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '轻微发烧喉咙痛,最省钱又有效的第一步是?',
      options: ['直接挂急诊 ER', '去药店问药剂师(免费)或 Urgent Care', '忍着不管', '回国再看'],
      answer: 1,
      explain: 'ER 最贵。轻症先咨询药店药剂师(免费)或去 Urgent Care,省下昂贵急诊费。'
    },
    {
      type: 'choice',
      q: '看病时关于药物过敏,正确做法是?',
      options: ['等医生问再说', '主动告知,如 I\'m allergic to penicillin', '不重要可以不说', '只用中文说'],
      answer: 1,
      explain: '药物过敏必须主动、清楚地告知,这关乎安全,不能等被问。'
    },
    {
      type: 'fill',
      q: '问药要怎么吃:"How often should I ____ this?"',
      answer: ['take'],
      explain: 'take medicine = 服药;How often should I take this? 问用药频次,买药最关键的信息之一。'
    }
  ]
});
