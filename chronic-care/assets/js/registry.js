/* 慢病管理站 · registry —— 模块/术语/通知数据（build.js 从 _src 生成后注入到 content/，此文件只放静态元数据与工具清单） */
window.CDC = window.CDC || {};

CDC.META = {
  ns: 'CDC',
  title: '慢病管理站 · Chronic Care',
  desc: '大白话讲透慢病管理:高血压、糖尿病、血脂异常,吃动平衡、用药监测、就医随访。每课5分钟,不贩卖焦虑,不替代医嘱。'
};

/* 互动工具清单（实现在 views-tools.js） */
CDC.TOOL_LIST = [
  { id:'bp',   icon:'🩺', name:'血压分级评估', desc:'输入一次血压测量值,看落在哪一档。附分级标尺。' },
  { id:'bmi',  icon:'⚖️', name:'BMI 计算',     desc:'身高体重即时计算体质指数与区间。' },
  { id:'salt', icon:'🧂', name:'隐形盐估算',   desc:'三路加和估算今日盐摄入,对照 5 克上限。' },
  { id:'rec',  icon:'📈', name:'健康记录本',   desc:'记录血压/血糖/体重,自动画趋势图。数据只存本机。' },
  { id:'med',  icon:'💊', name:'服药打卡',     desc:'自定义药物清单,每日勾选打卡,当天自动重置。' }
];
