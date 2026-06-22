NPD.registerLesson({
  id: 'link/03-flow-control',
  module: 'link',
  order: 3,
  title: '流量控制:发太快怎么办',
  minutes: 5,
  keywords: ['流量控制', '停等协议', '后退N帧', '选择重传', '滑动窗口'],
  concept: '<p><b>流量控制</b>让发送方别发太快、压垮接收方——靠"接收方反馈"调节发送速率。</p>' +
    '<div class="ex">三种经典协议:停等 ARQ、后退 N 帧(GBN)、选择重传(SR)——效率与复杂度递增。</div>',
  exam: '<p><b>频度:中高。</b>常考三种协议的窗口大小、效率对比、序号位数要求。</p>',
  core: '<p><b>三种 ARQ 协议:</b></p>' +
    '<table><tr><th>协议</th><th>发送窗口</th><th>出错处理</th><th>效率</th></tr>' +
    '<tr><td>停等</td><td>1</td><td>重发该帧</td><td>最低</td></tr>' +
    '<tr><td>后退 N 帧(GBN)</td><td>W&gt;1</td><td>从出错帧起全部重发</td><td>中</td></tr>' +
    '<tr><td>选择重传(SR)</td><td>W&gt;1</td><td>只重发出错帧</td><td>最高</td></tr></table>' +
    '<p><b>窗口与序号关系:</b></p>' +
    '<ul>' +
    '<li>GBN:发送窗口 W ≤ 2^n − 1(n 为序号位数)。</li>' +
    '<li>SR:发送+接收窗口之和 ≤ 2^n,通常各 W ≤ 2^(n−1)。</li>' +
    '</ul>' +
    '<p class="ex">滑动窗口是统一框架:窗口大小决定"可连续发多少未确认",窗口滑动即确认后推进。</p>',
  pitfalls: '<div class="pit"><b>易错:GBN 出错重发范围。</b>从出错帧起<b>后续全部重发</b>,不是只发出错那帧——效率低于 SR。</div>' +
    '<div class="pit"><b>易错:SR 的序号位数要求最严。</b>发送+接收窗口和 ≤ 2^n,否则新旧帧混淆。</div>',
  quiz: [
    { type: 'choice', q: '出错时"只重发出错帧"的协议是?', options: ['停等', '后退 N 帧', '选择重传', '停等 ARQ'], answer: 2, source: '基础', explain: '选择重传(SR)只重发出错帧。' },
    { type: 'choice', q: '后退 N 帧协议中,若序号 3 位,发送窗口最大为?', options: ['4', '7', '8', '16'], answer: 1, source: '计算', explain: 'GBN: W ≤ 2^3−1=7。' },
    { type: 'choice', q: '效率最高(出错重传最少)的是?', options: ['停等', '后退 N 帧', '选择重传', '三者相同'], answer: 2, source: '理解', explain: 'SR 只重发出错帧,效率最高。' }
  ],
  links: '<p>上一课:<a href="#/l/link/02-error-control">差错控制</a> · 下一课:<a href="#/l/link/04-mac">MAC 子层</a> · TCP 流控:<a href="#/l/transport/03-flow-congestion">流量与拥塞控制</a></p>'
});
