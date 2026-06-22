ISPM.registerLesson({
  id: 'pm-framework/01-what-is-pm',
  module: 'pm-framework',
  order: 1,
  title: '什么是项目管理',
  minutes: 5,
  keywords: ['项目', '项目管理', '临时性', '独特性', '渐进明细'],
  concept: '<p>先分清两个概念：<b>项目</b>和<b>运营</b>。</p>' +
    '<p>你每天上班打卡、处理日常工单——这是<b>运营</b>，特点是重复、持续。而"开发一个新系统""建一栋楼""组织一场大会"——这些有明确起止时间、要创造独特成果的工作就是<b>项目</b>。</p>' +
    '<p><gd data-term="five-process-groups">项目管理</gd>就是将知识、技能、工具和技术应用于项目活动，以满足项目要求。简单说：<em>用对的方法，在有限的时间和预算内，交付约定的成果</em>。</p>',
  exam: '<p><b>考纲定位：</b>综合知识必考 2-3 题，理解项目三个特征（临时性、独特性、渐进明细）是基础中的基础。案例分析中判断"这是不是项目管理问题"也依赖本课概念。</p>' +
    '<p><b>出题方式：</b>通常考项目与运营的区别、项目的三个特征辨析。</p>',
  core: '<p><b>项目的三大特征：</b></p>' +
    '<ul><li><b>临时性（Temporary）</b>：有明确的开始和结束时间。注意：临时性不等于时间短，建三峡大坝也是项目。</li>' +
    '<li><b>独特性（Unique）</b>：每个项目的成果都是独一无二的。即使盖同样户型的楼，地块、团队、时间都不同。</li>' +
    '<li><b>渐进明细（Progressive Elaboration）</b>：项目的细节随着信息增多而逐步清晰。不是一开始就什么都确定。</li></ul>' +
    '<figure class="fig"><svg width="360" height="120" viewBox="0 0 360 120">' +
    '<rect x="10" y="40" width="100" height="40" rx="4" fill="none" stroke="var(--accent)" stroke-width="1.5"/>' +
    '<text x="60" y="64" text-anchor="middle" fill="var(--ink)" font-size="12">项目</text>' +
    '<rect x="130" y="10" width="100" height="30" rx="4" fill="none" stroke="var(--ok)" stroke-width="1"/>' +
    '<text x="180" y="29" text-anchor="middle" fill="var(--ink)" font-size="11">临时性</text>' +
    '<rect x="130" y="45" width="100" height="30" rx="4" fill="none" stroke="var(--ok)" stroke-width="1"/>' +
    '<text x="180" y="64" text-anchor="middle" fill="var(--ink)" font-size="11">独特性</text>' +
    '<rect x="130" y="80" width="100" height="30" rx="4" fill="none" stroke="var(--ok)" stroke-width="1"/>' +
    '<text x="180" y="99" text-anchor="middle" fill="var(--ink)" font-size="11">渐进明细</text>' +
    '<line x1="110" y1="50" x2="130" y2="25" stroke="var(--ink2)" stroke-width="1"/>' +
    '<line x1="110" y1="60" x2="130" y2="60" stroke="var(--ink2)" stroke-width="1"/>' +
    '<line x1="110" y1="70" x2="130" y2="95" stroke="var(--ink2)" stroke-width="1"/>' +
    '<rect x="250" y="40" width="100" height="40" rx="4" fill="none" stroke="var(--warn)" stroke-width="1.5"/>' +
    '<text x="300" y="64" text-anchor="middle" fill="var(--ink)" font-size="12">运营</text>' +
    '<text x="300" y="100" text-anchor="middle" fill="var(--ink2)" font-size="10">重复、持续、无终止</text>' +
    '</svg><figcaption>图 · 项目 vs 运营</figcaption></figure>',
  pitfalls: '<div class="pit"><b>误解 1：项目完成后团队一定解散。</b> 临时性指的是项目本身有终点，不是说团队一定解散。项目结束后团队可能继续做其他项目。</div>' +
    '<div class="pit"><b>误解 2：运营就不需要管理。</b> 运营需要"运营管理"，项目需要"项目管理"——管理方法和关注点不同，但都需要管理。</div>' +
    '<div class="pit"><b>误解 3：渐进明细 = 范围蔓延。</b> 渐进明细是正常的认知深化过程（经过变更控制），<gd data-term="scope-creep">范围蔓延</gd>是未经控制的范围扩大。一个合规，一个违规。</div>',
  quiz: [
    {
      type: 'choice',
      q: '以下哪项不是项目的特征？',
      options: ['临时性', '独特性', '重复性', '渐进明细'],
      answer: 2,
      source: '高频考点',
      explain: '重复性是运营的特征，不是项目的特征。项目的三大特征是：临时性、独特性、渐进明细。'
    },
    {
      type: 'choice',
      q: '项目的"渐进明细"是指：',
      options: [
        '项目范围不断被扩大',
        '随着信息增多，项目特征逐步清晰和详细',
        '项目进度逐步加快',
        '项目成本逐步降低'
      ],
      answer: 1,
      explain: '渐进明细（Progressive Elaboration）是指随着对项目了解的加深，项目的特征和细节逐步变得清晰和详细。这是一个正常的认知过程，不等于范围蔓延。'
    }
  ],
  links: '<p>相关术语：<gd data-term="five-process-groups">五大过程组</gd>、<gd data-term="ten-knowledge-areas">十大知识领域</gd></p>' +
    '<p>下一课：<a href="#/l/pm-framework/02-five-process-groups">五大过程组</a></p>'
});
