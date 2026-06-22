NPD.registerLesson({
  id: 'device/01-overview',
  module: 'device',
  order: 1,
  title: '互连设备总览:中继器到网关',
  minutes: 4,
  keywords: ['中继器', '集线器', '网桥', '交换机', '路由器', '网关', '层次'],
  concept: '<p>网络互连设备按工作层次递进:<b><gd data-term="repeater">中继器/集线器</gd></b>(物理)→<b><gd data-term="bridge">网桥</gd></b>→<b><gd data-term="switch">交换机</gd></b>(链路)→<b><gd data-term="router">路由器</gd></b>→<b><gd data-term="gateway">网关</gd></b>(网络及以上)。</p>' +
    '<div class="ex">层次越高越"聪明":物理层只放大信号,链路层看 MAC,网络层看 IP。</div>',
  exam: '<p><b>频度:高。</b>必考设备与层次对应、冲突域/广播域隔离能力。</p>',
  core: '<p><b>设备分层与能力:</b></p>' +
    '<table><tr><th>设备</th><th>层次</th><th>寻址</th><th>冲突域</th><th>广播域</th></tr>' +
    '<tr><td>中继器</td><td>物理</td><td>无</td><td>不隔离</td><td>不隔离</td></tr>' +
    '<tr><td>集线器</td><td>物理</td><td>无</td><td>不隔离(共享)</td><td>不隔离</td></tr>' +
    '<tr><td>网桥</td><td>链路</td><td>MAC</td><td>隔离</td><td>不隔离</td></tr>' +
    '<tr><td>交换机</td><td>链路</td><td>MAC</td><td>隔离(每端口)</td><td>不隔离</td></tr>' +
    '<tr><td>路由器</td><td>网络</td><td>IP</td><td>隔离</td><td>隔离</td></tr></table>' +
    '<p class="ex">交换机隔离冲突域、不隔离广播域;路由器二者都隔离——这是高频对比点。</p>',
  pitfalls: '<div class="pit"><b>易错:集线器不隔离冲突域。</b>集线器是"多口中继器",共享带宽、所有端口同一冲突域。</div>' +
    '<div class="pit"><b>易混:交换机 vs 路由器隔离能力。</b>交换机隔离冲突域但不隔离广播域;路由器两者都隔离。</div>' +
    '<div class="pit"><b>易错:网桥 vs 交换机。</b>网桥端口少(早期二端口);交换机是多端口网桥,本质相同、规模不同。</div>',
  quiz: [
    { type: 'choice', q: '下列设备中既隔离冲突域又隔离广播域的是?', options: ['集线器', '交换机', '路由器', '中继器'], answer: 2, source: '基础', explain: '路由器隔离冲突域与广播域。' },
    { type: 'choice', q: '集线器工作在?', options: ['物理层', '数据链路层', '网络层', '传输层'], answer: 0, source: '基础', explain: '集线器是物理层设备。' },
    { type: 'choice', q: '交换机对广播域的作用是?', options: ['隔离广播域', '不隔离广播域', '消除广播', '加密广播'], answer: 1, source: '基础', explain: '交换机不隔离广播域(需 VLAN 或路由)。' }
  ],
  links: '<p>上一课:<a href="#/l/wan/04-sdh">SDH 光传输</a> · 下一课:<a href="#/l/device/02-switch">交换机</a></p>'
});
