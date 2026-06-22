NPD.registerLesson({
  id: 'ops/03-performance',
  module: 'ops',
  order: 3,
  title: '性能监控与 QoS',
  minutes: 4,
  keywords: ['性能监控', '带宽', '时延', '丢包', 'QoS', '分类标记', '队列调度'],
  concept: '<p>性能监控盯<b>带宽、时延、抖动、丢包</b>;QoS 给关键业务开"绿色通道",保障体验。</p>' +
    '<div class="ex">监控是"测出来",QoS 是"管起来"——测出谁重要就给它优先。</div>',
  exam: '<p><b>频度:中高。</b>常考性能指标、QoS 三步、队列调度。</p>',
  core: '<p><b>关键性能指标:</b></p>' +
    '<ul>' +
    '<li><b>带宽/吞吐</b>:链路实际可用速率。</li>' +
    '<li><b>时延</b>:端到端传输延迟(含处理/排队/传输/传播)。</li>' +
    '<li><b>抖动</b>:时延的变化量,语音/视频敏感。</li>' +
    '<li><b>丢包率</b>:丢失包占比,影响可靠性与体验。</li>' +
    '</ul>' +
    '<p><b><gd data-term="qos">QoS</gd> 三步(常考):</b></p>' +
    '<ol>' +
    '<li><b>分类与标记</b>:识别流量类型并打标记(如 DSCP/802.1p)。</li>' +
    '<li><b>流量监管/整形</b>:限速与削峰(令牌桶),超限丢弃或缓存。</li>' +
    '<li><b>队列调度</b>:按优先级调度,如 PQ(严格优先)、CQ、WFQ。</li>' +
    '</ol>' +
    '<p class="ex">语音/视频对时延抖动敏感,需 QoS 保障优先;普通数据可尽力而为。</p>',
  pitfalls: '<div class="pit"><b>易混:时延 vs 抖动。</b>时延是"延迟多少";抖动是"延迟变化多大"——语音最怕抖动。</div>' +
    '<div class="pit"><b>易错:QoS 三步顺序。</b>先分类标记→再监管整形→最后队列调度——别颠倒。</div>',
  quiz: [
    { type: 'choice', q: '语音/视频对哪个指标最敏感?', options: ['带宽', '时延抖动', '端口数', 'MTU'], answer: 1, source: '理解', explain: '抖动影响实时业务体验。' },
    { type: 'choice', q: 'QoS 的第一步通常是?', options: ['队列调度', '分类与标记', '丢弃', '加密'], answer: 1, source: '基础', explain: '先分类标记识别流量。' },
    { type: 'choice', q: '用于限速削峰的机制是?', options: ['VLAN', '令牌桶(监管/整形)', 'STP', 'NAT'], answer: 1, source: '基础', explain: '令牌桶做流量监管/整形。' }
  ],
  links: '<p>上一课:<a href="#/l/ops/02-nms">网管系统</a> · 下一课:<a href="#/l/ops/04-fault">故障管理</a></p>'
});
