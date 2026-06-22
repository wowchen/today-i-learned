NPD.registerLesson({
  id: 'comm/04-nyquist-shannon',
  module: 'comm',
  order: 4,
  title: '奈奎斯特与香农:信道容量天花板',
  minutes: 5,
  key: true,
  keywords: ['奈奎斯特', '香农', '信道容量', '信噪比', '码元速率', '计算'],
  concept: '<p>两条定理回答"一条信道最多能传多快"——一个讲理想无噪,一个讲有噪上限。</p>' +
    '<ul><li><b>奈奎斯特(无噪)</b>:C = 2W·log₂(V)</li>' +
    '<li><b>香农(有噪)</b>:C = W·log₂(1 + S/N)</li></ul>' +
    '<div class="ex">W 是带宽(Hz),V 是离散电平数,S/N 是信噪比。实际容量取两者<b>较小者</b>。</div>',
  exam: '<p><b>频度:高。</b>案例与综合知识<b>必考计算</b>之一。务必会用本站<a href="#/calc">计算器</a>手算验证。</p>',
  core: '<p><b>两公式与含义:</b></p>' +
    '<table><tr><th>定理</th><th>公式</th><th>含义</th></tr>' +
    '<tr><td>奈奎斯特</td><td>C = 2W·log₂(V)</td><td>无噪理想信道的码元速率上限 2W,每码元带 log₂(V) 比特</td></tr>' +
    '<tr><td>香农</td><td>C = W·log₂(1+S/N)</td><td>有噪信道的理论上限,与编码无关</td></tr></table>' +
    '<p><b>信噪比换算:</b>S/N(线性)= 10^(SNR_dB / 10);如 30 dB → S/N = 1000。</p>' +
    '<p><b>波特率 vs 比特率:</b>比特率 = <gd data-term="baud-rate">波特率</gd> × log₂(V)。</p>' +
    '<div class="ex"><b>例:</b>W=4000 Hz,V=16,SNR=30 dB。奈氏 C=2×4000×log₂16=32000 bps;香农 C=4000×log₂(1+1000)≈39869 bps;实际极限取较小者 = <b>32000 bps</b>。</div>',
  pitfalls: '<div class="pit"><b>易错:信噪比 dB 与线性比。</b>公式里 S/N 是线性比;给 dB 必须先换算 10^(dB/10)。</div>' +
    '<div class="pit"><b>易错:电平数 V 与比特数。</b>V 是电平/状态数,每码元携带 log₂(V) 比特,别把 V 当比特数代入。</div>' +
    '<div class="pit"><b>关键:实际容量取两者较小。</b>奈氏受电平数限制、香农受噪声限制,谁先到顶谁是瓶颈。</div>',
  quiz: [
    { type: 'choice', q: '带宽 4000 Hz、电平数 16、信噪比 30 dB 的信道,实际极限容量约为?', options: ['8000 bps', '32000 bps', '39869 bps', '64000 bps'], answer: 1, source: '计算', explain: '奈氏 32000,香农≈39869,取较小=32000。' },
    { type: 'fill', q: '信噪比 30 dB 对应线性比 S/N = ____。(纯数字)', answer: ['1000'], source: '计算', explain: '10^(30/10)=10^3=1000。' },
    { type: 'choice', q: '香农定理的信道容量取决于?', options: ['带宽与电平数', '带宽与信噪比', '码元速率与电压', '介质长度与温度'], answer: 1, source: '理解', explain: '香农 C=W·log₂(1+S/N),只看带宽与信噪比。' }
  ],
  links: '<p>上一课:<a href="#/l/comm/03-multiplexing">多路复用</a> · 下一课:<a href="#/l/comm/05-transmission-media">传输介质</a> · <a href="#/calc">信道容量计算器</a></p>'
});
