SAD.registerLesson({
  id: 'future/04-ai',
  module: 'future',
  order: 4,
  title: '人工智能',
  minutes: 4,
  keywords: ['人工智能', '机器学习', '深度学习', '大模型', '训练', '推理'],
  concept: '<p>人工智能(AI)让机器具备学习与决策能力。主流是<b>机器学习</b>,尤其<b>深度学习(神经网络)</b>;近年大模型推动了通用能力跃升。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(AI赋能架构)。重点:AI/ML/DL关系、训练与推理区分。</p>',
  core: '<table><tr><th>概念</th><th>含义</th></tr>' +
    '<tr><td>人工智能 AI</td><td>最大范畴:让机器智能</td></tr>' +
    '<tr><td>机器学习 ML</td><td>从数据中学规律(AI的子集)</td></tr>' +
    '<tr><td>深度学习 DL</td><td>多层神经网络(ML的子集)</td></tr></table>' +
    '<div class="ex">两个阶段:<b>训练</b>(用大量数据学出模型,算力消耗大)与<b>推理</b>(用模型对新输入预测,讲究低延迟)。架构上常把训练放云端/集群,推理下沉到边缘或服务化。</div>',
  pitfalls: '<div class="pit"><b>误解:AI=深度学习。</b>包含关系是 <b>AI ⊃ 机器学习 ⊃ 深度学习</b>;深度学习只是当前最热的一支,不是AI全部。</div>',
  quiz: [
    { type: 'choice', q: 'AI、机器学习、深度学习的包含关系正确的是?', options: ['DL⊃ML⊃AI', 'AI⊃ML⊃DL', 'ML⊃AI⊃DL', '三者并列'], answer: 1, source: '高频', explain: 'AI包含机器学习,机器学习包含深度学习。' }
  ],
  links: '<p>上一课:<a href="#/l/future/03-iot">物联网</a> · 下一课:<a href="#/l/future/05-blockchain">区块链</a></p>'
});
