SAD.registerLesson({
  id: 'db/06-backup-recovery',
  module: 'db',
  order: 6,
  title: '备份与恢复',
  minutes: 4,
  keywords: ['备份', '恢复', '日志', '检查点', '冷备', '热备', 'redo', 'undo'],
  concept: '<p>故障难免,数据库靠<b>日志 + 备份</b>来恢复。日志记录每个事务的修改,故障后用它<b>重做(redo)已提交、撤销(undo)未提交</b>。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:备份类型、redo/undo、检查点作用。</p>',
  core: '<table><tr><th>备份方式</th><th>说明</th></tr>' +
    '<tr><td>冷备份</td><td>停库完整复制,简单但需停机</td></tr>' +
    '<tr><td>热备份</td><td>不停机备份,配合日志,业务连续</td></tr>' +
    '<tr><td>完全/增量/差异</td><td>全量 vs 只备变化(增量基于上次备份,差异基于上次全量)</td></tr></table>' +
    '<div class="ex"><b>恢复策略:</b>已提交但未写盘 → redo;未提交却已写盘 → undo。<b>检查点</b>定期把内存刷盘并记录,缩短故障后需扫描的日志范围。</div>',
  pitfalls: '<div class="pit"><b>误解:已提交事务一定已经写入磁盘。</b>提交时可能只写了日志、数据还在缓冲,故障后需 <b>redo</b> 重做才真正落盘。</div>',
  quiz: [
    { type: 'choice', q: '系统故障后,对"已提交但未写入磁盘"的事务应执行?', options: ['undo撤销', 'redo重做', '忽略', '回滚全部'], answer: 1, source: '高频', explain: '已提交未落盘的事务用redo重做;未提交的用undo撤销。' }
  ],
  links: '<p>上一课:<a href="#/l/db/05-transaction">事务与并发</a> · 下一课:<a href="#/l/db/07-distributed">分布式数据库</a></p>'
});
