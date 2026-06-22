SAN.registerLesson({
  id: 'emerging/03-ai',
  module: 'emerging',
  order: 3,
  title: '人工智能',
  minutes: 4,
  keywords: ['人工智能', '机器学习', '深度学习', '训练', '推理', '大模型'],
  concept: '<p><gd data-term="ai">人工智能(AI)</gd>让机器学习与决策。包含关系:<b>AI ⊃ 机器学习 ⊃ 深度学习</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与论文(AI赋能)。重点:AI/ML/DL关系、训练vs推理。</p>',
  core: '<div class="ex">两阶段:<b>训练</b>(用大量数据学出模型,算力大)与<b>推理</b>(用模型预测,讲究低延迟)。架构上训练放云端集群,推理可下沉边缘或服务化。</div>',
  pitfalls: '<div class="pit"><b>误解:AI=深度学习。</b>AI⊃机器学习⊃深度学习,深度学习只是其中一支。</div>',
  quiz: [
    { type: 'choice', q: 'AI、机器学习、深度学习的包含关系是?', options: ['DL⊃ML⊃AI', 'AI⊃ML⊃DL', 'ML⊃AI⊃DL', '三者并列'], answer: 1, source: '高频', explain: 'AI包含机器学习,机器学习包含深度学习。' }
  ],
  links: '<p>上一课:<a href="#/l/emerging/02-bigdata">大数据</a> · 下一课:<a href="#/l/emerging/04-iot">物联网</a></p>'
});
