SAN.registerLesson({
  id: 'analysis/01-structured-dfd',
  module: 'analysis',
  order: 1,
  title: '结构化分析:数据流图 DFD',
  minutes: 5,
  key: true,
  keywords: ['数据流图', 'DFD', '加工', '数据流', '数据存储', '外部实体', '分层'],
  concept: '<p><gd data-term="dfd">数据流图(DFD)</gd>是结构化分析的核心,用<b>四要素</b>描述"数据怎么流、被哪些加工处理":外部实体、加工(处理)、数据流、数据存储。</p>',
  exam: '<p><b>考纲定位:</b>系分案例<b>必考画图题</b>。重点:四要素、分层(顶层/0层/子图)、平衡原则。</p>',
  core: '<figure class="fig"><svg viewBox="0 0 320 80" width="100%" role="img" aria-label="DFD四要素">' +
    '<rect x="10" y="28" width="60" height="26" fill="none" stroke="var(--accent)"/><text x="40" y="45" text-anchor="middle" fill="var(--ink)" font-size="10">外部实体</text>' +
    '<circle cx="150" cy="41" r="22" fill="none" stroke="var(--accent)"/><text x="150" y="45" text-anchor="middle" fill="var(--ink)" font-size="10">加工</text>' +
    '<line x1="70" y1="41" x2="126" y2="41" stroke="var(--accent)"/><polygon points="126,37 134,41 126,45" fill="var(--accent)"/>' +
    '<line x1="240" y1="35" x2="310" y2="35" stroke="var(--line2)"/><line x1="240" y1="47" x2="310" y2="47" stroke="var(--line2)"/><text x="275" y="62" text-anchor="middle" fill="var(--ink)" font-size="10">数据存储</text>' +
    '<line x1="172" y1="41" x2="240" y2="41" stroke="var(--accent)"/></svg><figcaption>图 · DFD 四要素与数据流</figcaption></figure>' +
    '<div class="ex"><b>两条铁律:</b>① 父图与子图<b>平衡</b>(父图加工的输入输出数据流=子图边界数据流);② 加工的输入输出要<b>数据守恒</b>,不能凭空产生("黑洞/奇迹"加工都是错)。</div>',
  pitfalls: '<div class="pit"><b>误解:加工可以只有输入没有输出(或反之)。</b>这是经典错误:只进不出叫"黑洞",只出不进叫"奇迹/泉眼",都违反数据守恒,案例会扣分。</div>',
  quiz: [
    { type: 'choice', q: 'DFD的四个基本要素是?', options: ['类/对象/属性/方法', '外部实体/加工/数据流/数据存储', '节点/边/权重/路径', '实体/联系/属性/主键'], answer: 1, source: '高频', explain: 'DFD四要素:外部实体、加工、数据流、数据存储。' },
    { type: 'choice', q: '父图与子图的输入输出数据流必须一致,这叫?', options: ['数据守恒', '父子图平衡', '高内聚', '正交'], answer: 1, source: '高频', explain: '父图子图平衡是DFD分层的基本原则。' }
  ],
  links: '<p>下一课:<a href="#/l/analysis/02-data-dictionary">数据字典</a> · 案例:<a href="#/l/case/02-dfd-case">DFD案例</a></p>'
});
