NPD.registerLesson({
  id: 'security/05-ids-ips',
  module: 'security',
  order: 5,
  title: 'IDS 与 IPS:入侵检测/防御',
  minutes: 3,
  keywords: ['IDS', 'IPS', '入侵检测', '入侵防御', '旁路', '串行', '特征库'],
  concept: '<p><b><gd data-term="ids">IDS/IPS</gd></b>识别并处置恶意流量:IDS 只"报警",IPS 还能"拦"。</p>' +
    '<div class="ex">IDS 是"监控摄像头"(旁路、只报);IPS 是"门口保安"(串行、能拦)。</div>',
  exam: '<p><b>频度:中。</b>常考 IDS vs IPS 区别、部署方式、检测方式。</p>',
  core: '<p><b>IDS vs IPS:</b></p>' +
    '<table><tr><th>维度</th><th>IDS</th><th>IPS</th></tr>' +
    '<tr><td>部署</td><td>旁路(镜像)</td><td>串行(必经)</td></tr>' +
    '<tr><td>动作</td><td>检测+告警</td><td>检测+阻断</td></tr>' +
    '<tr><td>影响</td><td>不影响流量</td><td>可丢包,需低延迟</td></tr></table>' +
    '<p><b>检测方式:</b></p>' +
    '<ul>' +
    '<li><b>特征/误用检测</b>:按已知攻击特征库匹配,准但只能认已知攻击。</li>' +
    '<li><b>异常检测</b>:建立正常行为基线,偏离即疑,能发现未知但误报多。</li>' +
    '</ul>' +
    '<p class="ex">现代 NGFW 多集成 IPS 能力,边界一体防护。</p>',
  pitfalls: '<div class="pit"><b>易混:IDS 旁路 vs IPS 串行。</b>IDS 接镜像口旁听,不影响业务;IPS 必须串在流量路径上才能阻断。</div>' +
    '<div class="pit"><b>易混:特征检测 vs 异常检测。</b>特征=已知攻击库(准、漏未知);异常=基线偏离(能发现未知、误报多)。</div>',
  quiz: [
    { type: 'choice', q: '能直接"阻断"恶意流量的是?', options: ['IDS', 'IPS', 'NMS', 'DHCP'], answer: 1, source: '基础', explain: 'IPS 串行可阻断。' },
    { type: 'choice', q: 'IDS 的典型部署方式是?', options: ['串行', '旁路(镜像)', '无线', '直连终端'], answer: 1, source: '基础', explain: 'IDS 旁路旁听。' },
    { type: 'choice', q: '基于"已知攻击特征库"匹配的检测是?', options: ['异常检测', '特征(误用)检测', '随机检测', '哈希检测'], answer: 1, source: '基础', explain: '特征检测按特征库匹配。' }
  ],
  links: '<p>上一课:<a href="#/l/security/04-vpn">VPN/IPSec</a> · 下一课:<a href="#/l/security/06-aaa">AAA 与隔离</a></p>'
});
