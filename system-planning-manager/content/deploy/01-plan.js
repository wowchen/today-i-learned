SPM.registerLesson({
  id: 'deploy/01-plan',
  module: 'deploy',
  order: 1,
  title: '部署实施计划',
  minutes: 5,
  keywords: ['部署实施', '计划', '里程碑', '验收准则'],
  concept: '<p>部署实施把设计方案"施工落地":制定<b>计划</b>,明确范围、时间、里程碑、资源、风险与验收准则,把服务从"图纸"变成"可运营"。</p>',
  exam: '<p><b>考纲定位:</b>部署篇核心,案例常考"部署阶段该做什么"。</p>',
  core: '<ul>' +
    '<li><b>计划要素</b>:目标、范围、里程碑、角色职责、资源、风险与应急。</li>' +
    '<li><b>关键节点</b>:资源就绪 → 技术就绪 → 试运行/交付 → <gd data-term="acceptance">转产验收</gd>。</li>' +
    '<li><b>风险预案</b>:变更与回退、数据迁移、割接窗口。</li>' +
    '</ul>' +
    '<div class="ex">部署是"从规划到运营"的桥梁;计划不全,上线即翻车。</div>',
  pitfalls: '<div class="pit"><b>别把"部署"等同于"买设备安装"。</b>部署含流程上线、人员培训、流程试运行,是整体切换,不是单点装机。</div>',
  quiz: [
    { type: 'choice', q: '部署实施计划的核心产出是?', options: ['源代码', '含里程碑与验收准则的施工计划', '采购清单', '广告'], answer: 1, source: '高频', explain: '部署计划含目标、里程碑、资源、风险与验收准则。' }
  ],
  links: '<p>下一篇:<a href="#/l/deploy/02-resource-prep">资源准备</a></p>'
});
