NPD.registerLesson({
  id: 'lan/04-aggregation',
  module: 'lan',
  order: 4,
  title: '链路聚合(LACP)',
  minutes: 3,
  keywords: ['链路聚合', 'LACP', '802.3ad', '带宽', '冗余', '负载分担'],
  concept: '<p><b><gd data-term="lacp">链路聚合</gd></b>把多条物理链路捆成一条逻辑链路,增加带宽并提供冗余。</p>' +
    '<div class="ex">几条小路"并成一条宽路",还能互为备份——断了自动切到其余链路。</div>',
  exam: '<p><b>频度:中。</b>常考聚合作用、LACP 协议、负载分担方式。</p>',
  core: '<p><b>链路聚合价值:</b></p>' +
    '<ul>' +
    '<li><b>增加带宽</b>:N 条链路聚合,逻辑带宽近似 N 倍。</li>' +
    '<li><b>冗余</b>:某条物理链路故障,流量自动切到其余链路。</li>' +
    '<li><b>负载分担</b>:按源/目的 MAC、IP、端口等分流到各物理链路。</li>' +
    '</ul>' +
    '<p><b>LACP(IEEE 802.3ad):</b>动态协商聚合组,确保两端参数一致后才捆绑,比手工聚合更可靠。</p>' +
    '<p><b>聚合条件:</b>两端速率/双工/配置一致;通常同型号同批次端口。</p>' +
    '<p class="ex">链路聚合是"链路级"冗余与扩容;注意它≠ 路由冗余(那是 VRRP/HSRP),层次不同。</p>',
  pitfalls: '<div class="pit"><b>易混:链路聚合 vs STP。</b>聚合把多链路捆一条(扩容冗余);STP 是把环路剪成树(防环)。两者常配合:聚合链路在 STP 看来是一条链路。</div>' +
    '<div class="pit"><b>易错:聚合带宽非简单相加。</b>受哈希分流限制,单会话流量仍走一条物理链路,不能超单链路速率。</div>',
  quiz: [
    { type: 'choice', q: '链路聚合的主要作用不包括?', options: ['增加带宽', '提供冗余', '负载分担', '隔离广播域'], answer: 3, source: '理解', explain: '隔离广播域是 VLAN 的作用。' },
    { type: 'choice', q: '动态协商链路聚合的标准协议是?', options: ['STP', 'LACP(802.3ad)', 'VRRP', 'OSPF'], answer: 1, source: '基础', explain: 'LACP 动态协商聚合。' },
    { type: 'choice', q: '关于链路聚合带宽,正确的是?', options: ['单会话可超单链路速率', '单会话仍走一条物理链路', '带宽固定为单链路', '不支持冗余'], answer: 1, source: '理解', explain: '哈希分流,单会话限单链路速率。' }
  ],
  links: '<p>上一课:<a href="#/l/lan/03-stp">生成树</a> · 下一课:<a href="#/l/lan/05-l3-switch">三层交换</a></p>'
});
