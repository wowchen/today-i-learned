SPM.registerLesson({
  id: 'people/01-team',
  module: 'people',
  order: 1,
  title: '团队建设与发展',
  minutes: 5,
  keywords: ['团队建设', '塔克曼', '组建', '规范', '执行'],
  concept: '<p>服务靠人。团队建设按 <gd data-term="tuckman">塔克曼模型</gd>经历<b>组建→震荡→规范→执行→解散</b>五阶段;管理者要因阶段施策,促团队成熟。</p>',
  exam: '<p><b>考纲定位:</b>团队篇,选择题考阶段特征。</p>',
  core: '<ul>' +
    '<li><b>组建</b>:互不了解,明确目标与角色。</li>' +
    '<li><b>震荡</b>:冲突显现,需化解分歧、建规则。</li>' +
    '<li><b>规范</b>:形成默契与工作方式。</li>' +
    '<li><b>执行</b>:高效产出,自我管理。</li>' +
    '<li><b>解散</b>:项目结束,总结沉淀。</li>' +
    '</ul>' +
    '<div class="ex">"震荡期"别慌——这是必经阶段;引导得当,团队才会走向规范与执行。</div>',
  pitfalls: '<div class="pit"><b>不是凑齐人就叫团队。</b>未经磨合的人群只是"群体";要走过组建、震荡到规范才算团队。</div>',
  quiz: [
    { type: 'choice', q: '团队发展中冲突显现、需建规则的阶段是?', options: ['组建', '震荡', '执行', '解散'], answer: 1, source: '高频', explain: '震荡期冲突显现,需化解并建立规则。' }
  ],
  links: '<p>下一篇:<a href="#/l/people/02-role">角色与岗位</a></p>'
});
