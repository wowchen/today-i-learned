SAN.registerLesson({
  id: 'math/01-graph',
  module: 'math',
  order: 1,
  title: '图论基础',
  minutes: 4,
  keywords: ['图论', '最小生成树', '最短路径', 'Prim', 'Kruskal', 'Dijkstra'],
  concept: '<p>图论用节点和边建模网络问题。系分常考<b>最小生成树</b>(连通所有点的最省成本)和<b>最短路径</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识与案例计算。重点:最小生成树(Prim/Kruskal)、最短路径(Dijkstra)。</p>',
  core: '<table><tr><th>问题</th><th>算法</th><th>用途</th></tr>' +
    '<tr><td>最小生成树</td><td>Prim、Kruskal</td><td>用最少总成本连通所有节点(布线/管网)</td></tr>' +
    '<tr><td>最短路径</td><td>Dijkstra</td><td>两点间最短/最省路径</td></tr></table>' +
    '<div class="ex">Kruskal:每次选最短且不成环的边;Prim:从一点出发不断接最近的点。结果都是最小生成树。</div>',
  pitfalls: '<div class="pit"><b>误解:最小生成树和最短路径一回事。</b>最小生成树是"连通所有点总成本最小";最短路径是"两点间路径最短",目标不同。</div>',
  quiz: [
    { type: 'choice', q: '求"用最少总成本连通所有节点"应使用?', options: ['Dijkstra', '最小生成树(Prim/Kruskal)', '冒泡排序', '二分查找'], answer: 1, source: '高频', explain: '最小生成树解决连通所有点的最省成本。' }
  ],
  links: '<p>下一课:<a href="#/l/math/02-linear-programming">线性规划</a></p>'
});
