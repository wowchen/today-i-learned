/* 内容注册中心 + 搜索索引 */
window.AIX = window.AIX || {};

AIX.lessons = {};
AIX.searchIndex = [];

AIX.registerLesson = function(data) {
  AIX.lessons[data.id] = data;
  AIX.searchIndex.push({
    id: data.id,
    type: 'lesson',
    title: data.title,
    module: data.module,
    keywords: data.keywords || [],
    text: [data.concept, data.core, data.pitfalls].join(' ')
  });
};

AIX.search = function(query) {
  if (!query || query.length < 1) return [];
  var q = query.toLowerCase();
  var results = [];

  for (var i = 0; i < AIX.searchIndex.length; i++) {
    var item = AIX.searchIndex[i];
    var score = 0;
    if (item.title.toLowerCase().indexOf(q) !== -1) score += 10;
    for (var k = 0; k < item.keywords.length; k++) {
      if (item.keywords[k].toLowerCase().indexOf(q) !== -1) score += 5;
    }
    if (item.text && item.text.toLowerCase().indexOf(q) !== -1) score += 2;
    if (score > 0) results.push({ id: item.id, type: item.type, title: item.title, module: item.module, score: score });
  }

  for (var t = 0; t < AIX.terms.length; t++) {
    var term = AIX.terms[t];
    var ts = 0;
    if (term.name.toLowerCase().indexOf(q) !== -1) ts += 10;
    if (term.en.toLowerCase().indexOf(q) !== -1) ts += 8;
    if (term.def.toLowerCase().indexOf(q) !== -1) ts += 3;
    if (ts > 0) results.push({ id: term.id, type: 'term', title: term.name, module: term.module, score: ts });
  }

  results.sort(function(a, b) { return b.score - a.score; });
  return results.slice(0, 20);
};
