ISPM.registerLesson({
  id: 'overview/05-new-it-tech',
  module: 'overview',
  order: 5,
  title: '新一代信息技术概览',
  minutes: 4,
  keywords: ['新一代信息技术', '云计算', '大数据', '人工智能', '物联网', '区块链', '5G', '数字孪生'],
  concept: '<p>高项考纲与时俱进，新一代信息技术（云大物移智链）是必考的"新词"。本课先做一个总览，建立全貌；后续课时再逐个深入。</p>',
  exam: '<p><b>考纲定位：</b>综合知识<b>高频必考</b>。各项技术的核心定义和典型应用要能识别。</p>',
  core: '<p><b>新一代信息技术全家福：</b></p>' +
    '<ul><li><b>云计算</b>：按需提供可配置计算资源（IaaS/PaaS/SaaS）。"租用算力"。</li>' +
    '<li><b>大数据</b>：海量、多样、高速、价值密度低的数据集及其处理技术（4V 特征）。</li>' +
    '<li><b>人工智能（AI）</b>：让机器模拟人类智能（机器学习、深度学习、大模型）。</li>' +
    '<li><b>物联网（IoT）</b>：万物互联，让物体能感知和通信（感知层/网络层/应用层）。</li>' +
    '<li><b>移动互联网</b>：移动终端 + 互联网，随时随地连接。</li>' +
    '<li><b>区块链</b>：去中心化、不可篡改的分布式账本。</li>' +
    '<li><b>5G</b>：高速率、低时延、大连接的移动通信。</li>' +
    '<li><b>数字孪生</b>：物理实体在数字空间的实时映射镜像。</li></ul>' +
    '<div class="ex"><b>速记口诀：</b>"云大物移智链"——云计算、大数据、物联网、移动互联网、人工智能、区块链，再加 5G 和数字孪生。</div>',
  pitfalls: '<div class="pit"><b>误解 1：大数据就是数据量大。</b> 大数据的 4V 是 Volume（量大）、Variety（多样）、Velocity（高速）、Value（价值密度低）。不只是量大，还要多样、快速、能挖出价值。</div>' +
    '<div class="pit"><b>误解 2：人工智能就是机器人。</b> AI 是让机器模拟智能（识别、学习、推理、决策），机器人只是其载体之一。机器学习、大模型才是 AI 的核心。</div>',
  quiz: [
    {
      type: 'choice',
      q: '大数据的"4V"特征不包括：',
      options: ['Volume（大量）', 'Variety（多样）', 'Velocity（高速）', 'Virtual（虚拟）'],
      answer: 3,
      source: '高频考点',
      explain: '大数据4V特征：Volume（大量）、Variety（多样）、Velocity（高速）、Value（价值密度低）。没有Virtual（虚拟）。'
    },
    {
      type: 'choice',
      q: '"去中心化、不可篡改的分布式账本"描述的技术是：',
      options: ['云计算', '区块链', '大数据', '数字孪生'],
      answer: 1,
      explain: '区块链是去中心化、不可篡改的分布式账本技术，通过密码学和共识机制保证数据可信。'
    }
  ],
  links: '<p>上一课：<a href="#/l/overview/04-enterprise-info">企业信息化</a> · 下一课：<a href="#/l/overview/06-cloud-computing">云计算</a></p>'
});
