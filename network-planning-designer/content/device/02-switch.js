NPD.registerLesson({
  id: 'device/02-switch',
  module: 'device',
  order: 2,
  title: '交换机:自学习与转发',
  minutes: 4,
  keywords: ['交换机', 'MAC 地址表', '自学习', '存储转发', '直通', '冲突域'],
  concept: '<p><b><gd data-term="switch">交换机</gd></b>是多端口网桥,基于 MAC 地址表线速转发帧,每个端口隔离冲突域。</p>' +
    '<div class="ex">比集线器聪明:"按门牌精准投递",而非全网广播。</div>',
  exam: '<p><b>频度:高。</b>常考自学习过程、转发方式、与集线器对比。</p>',
  core: '<p><b>交换机自学习建表:</b></p>' +
    '<ol>' +
    '<li>收到帧,记录<b>源 MAC → 入端口</b>映射,写入 MAC 地址表。</li>' +
    '<li>查目的 MAC:命中则单播转发到对应端口;未命中则<b>泛洪</b>(除入端口外全部转发)。</li>' +
    '<li>表项有老化时间,超时删除以适应拓扑变化。</li>' +
    '</ol>' +
    '<p><b>转发方式:</b></p>' +
    '<ul>' +
    '<li><b>存储转发(Store-and-Forward)</b>:收完整帧、校验后转发,可靠但延迟较高。</li>' +
    '<li><b>直通(Cut-through)</b>:读完目的 MAC 即转发,快但不校验错误。</li>' +
    '<li><b>碎片隔离</b>:存够 64 字节(过滤碰撞碎片)再转发,折中。</li>' +
    '</ul>' +
    '<p class="ex">交换机靠"源 MAC 自学习 + 目的 MAC 转发"工作,无需人工配置 MAC 表。</p>',
  pitfalls: '<div class="pit"><b>易混:未命中时"泛洪"≠ 广播。</b>泛洪是"复制到所有端口(除入端口)";广播帧(目的 MAC 全 1)也会泛洪,但两者概念不同。</div>' +
    '<div class="pit"><b>易错:存储转发 vs 直通。</b>存储转发校验可靠延迟高;直通快但可能转发坏帧。</div>',
  quiz: [
    { type: 'choice', q: '交换机建立 MAC 地址表依据的是?', options: ['目的 MAC', '源 MAC', 'IP 地址', '端口号'], answer: 1, source: '基础', explain: '自学习记录源 MAC→端口。' },
    { type: 'choice', q: '交换机收到目的 MAC 未在表中的帧时,通常?', options: ['直接丢弃', '泛洪到所有端口(除入端口)', '上送 CPU', '发广播'], answer: 1, source: '基础', explain: '未命中则泛洪。' },
    { type: 'choice', q: '收完整帧校验后再转发的方式是?', options: ['直通', '存储转发', '碎片隔离', '泛洪'], answer: 1, source: '基础', explain: '存储转发先校验后转发。' }
  ],
  links: '<p>上一课:<a href="#/l/device/01-overview">互连设备总览</a> · 下一课:<a href="#/l/device/03-router">路由器</a></p>'
});
