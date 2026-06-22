SPM.registerLesson({
  id: 'sec/03-defense',
  module: 'sec',
  order: 3,
  title: '安全防护体系',
  minutes: 5,
  keywords: ['防火墙', 'IDS', 'IPS', '纵深防御', '访问控制'],
  concept: '<p>安全要"纵深防御":从边界到主机到应用到数据层层设防。常见手段:<b>防火墙、入侵检测/防御(IDS/IPS)、访问控制、加密、审计</b>。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,选择题。</p>',
  core: '<ul>' +
    '<li><b>防火墙</b>:按规则过滤流量;<b>IDS</b> 检测告警、<b>IPS</b> 检测并阻断。</li>' +
    '<li><b>访问控制</b>:最小权限、职责分离;模型有 DAC/MAC/RBAC。</li>' +
    '<li><b>纵深防御</b>:不依赖单一手段,多层叠加。</li>' +
    '</ul>' +
    '<div class="ex">服务安全是 SLA 的隐性底线,出安全事故等于服务失信。</div>',
  pitfalls: '<div class="pit"><b>IDS 只报警、IPS 会拦截。</b>两者常被混淆,记住"D=Detect 检测,P=Prevent 防御"。</div>',
  quiz: [
    { type: 'choice', q: '既能检测入侵又能主动阻断的是?', options: ['IDS', 'IPS', '防火墙日志', '杀毒'], answer: 1, source: '高频', explain: 'IPS 检测并阻断;IDS 只检测告警。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/02-auth">认证签名</a> · 下一课:<a href="#/l/sec/04-mlps">等级保护</a></p>'
});
