ISPM.registerLesson({
  id: 'infra/07-big-data-platform',
  module: 'infra',
  order: 7,
  title: '大数据平台',
  minutes: 3,
  keywords: ['大数据平台', 'Hadoop', 'Spark', '数据湖', '数据中台', '批处理', '流处理'],
  concept: '<p>海量数据要靠专门的<b>大数据平台</b>来存储和处理。本课了解主流技术（Hadoop、Spark）和数据湖、数据中台等概念。</p>',
  exam: '<p><b>考纲定位：</b>综合知识偶考。了解大数据处理技术和数据中台概念。</p>',
  core: '<p><b>主流大数据技术：</b></p>' +
    '<ul><li><b>Hadoop</b>：分布式存储（HDFS）+ 分布式计算（MapReduce）。擅长海量数据<em>批处理</em>。</li>' +
    '<li><b>Spark</b>：基于内存计算，比 Hadoop MapReduce 快得多，支持批处理和<em>流处理</em>。</li></ul>' +
    '<p><b>批处理 vs 流处理：</b>批处理处理<em>静态的历史数据</em>（如日报表）；流处理处理<em>实时流入的数据</em>（如实时监控、风控）。</p>' +
    '<p><b>数据湖：</b>存储海量<em>原始</em>数据（结构化、半结构化、非结构化都行），先存后用。区别于数据仓库（存加工后的结构化数据）。</p>' +
    '<p><b>数据中台：</b>把企业数据统一汇聚、治理、服务化，让数据能力被各业务复用，避免数据孤岛。是企业数字化的重要基础设施。</p>',
  pitfalls: '<div class="pit"><b>误解 1：数据湖和数据仓库一样。</b> 数据湖存<em>原始、多样</em>的数据（先存后用，schema-on-read）；数据仓库存<em>加工后的结构化</em>数据（先建模后用，schema-on-write）。</div>' +
    '<div class="pit"><b>误解 2：Spark 完全取代 Hadoop。</b> Spark 计算快，但常与 Hadoop 的 HDFS（存储）配合使用。两者更多是互补关系。</div>',
  quiz: [
    {
      type: 'choice',
      q: '存储海量原始数据（结构化、半结构化、非结构化均可）、先存储后处理的是：',
      options: ['数据仓库', '数据湖', '关系数据库', '缓存'],
      answer: 1,
      explain: '数据湖存储海量原始数据（各种格式），采用"先存后用"（schema-on-read）。数据仓库存储加工后的结构化数据（先建模后用）。'
    },
    {
      type: 'choice',
      q: '基于内存计算、速度快、同时支持批处理和流处理的大数据计算引擎是：',
      options: ['Hadoop MapReduce', 'Spark', 'MySQL', 'Excel'],
      answer: 1,
      explain: 'Spark 基于内存计算，速度远快于 Hadoop MapReduce，且同时支持批处理和流处理，是主流的大数据计算引擎。'
    }
  ],
  links: '<p>上一课：<a href="#/l/infra/06-iot-architecture">物联网架构</a> · 下一课：<a href="#/l/infra/08-ai-applications">人工智能应用</a></p>'
});
