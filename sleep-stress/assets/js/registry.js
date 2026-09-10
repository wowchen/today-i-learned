/* 睡眠与压力管理站 · registry —— 静态元数据与工具清单
   （模块/术语/通知由 tools/build.js 从 _src 生成并注入 content/） */
window.SLP = window.SLP || {};

SLP.META = {
  ns: 'SLP',
  title: '睡眠与压力管理站 · Sleep & Stress',
  desc: '大白话讲透睡眠与压力管理:睡眠周期、生物钟、失眠、打鼾与呼吸暂停、CBT-I、压力生理、应对方法、焦虑抑郁边界、咖啡因酒精蓝光。每课 5 分钟,不替代诊疗。'
};

/* 互动工具清单（实现在 views-tools.js） */
SLP.TOOL_LIST = [
  { id:'dur',    icon:'⏱', name:'睡眠时长与效率', desc:'输入上床、入睡与起床时间，算出卧床时长、实际睡着时长与睡眠效率。' },
  { id:'pss',    icon:'📋', name:'压力自评 PSS-10', desc:'10 题评估近一个月的主观压力，观察趋势而非给自己贴标签。' },
  { id:'caf',    icon:'☕', name:'咖啡因代谢计算', desc:'按摄入量与时间推算你睡前体内还剩多少，含半衰期与个体差异。' },
  { id:'diary',  icon:'📈', name:'睡眠日记',       desc:'记录入睡/起床/夜醒/质量，自动算睡眠效率并画趋势。数据只存本机。' },
  { id:'breath', icon:'🌬', name:'4-7-8 呼吸引导', desc:'跟着动画做四轮慢呼吸，呼气拉长以激活副交感，附睡前练习打卡。' }
];
