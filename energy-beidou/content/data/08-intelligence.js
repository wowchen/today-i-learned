EBD.registerLesson({
  id: 'data-08-intelligence',
  module: 'data',
  order: 8,
  title: '时空智能:AI 用上"在哪、何时"',
  minutes: 4,
  keywords: ['时空智能', 'AI', '预测', '识别', '负荷'],
  sections: {
    what:
      '<p><gd data-term="shikongzhineng">时空智能</gd>,就是让 AI 不只看数据本身,还用上"<strong>在哪、何时</strong>"这两个维度去做预测和决策。位置和时间一旦成为特征,很多电力问题就更好解了。</p>',
    why:
      '<p>例子最能说明价值:</p>' +
      '<ul>' +
      '<li><strong>负荷预测</strong>:用电随时间(早晚、季节)和空间(地区、行业)强相关,带时空特征预测更准。</li>' +
      '<li><strong>新能源功率预测</strong>:光伏风电出力取决于"何地、何时"的天气,时空信息是关键输入。</li>' +
      '<li><strong>缺陷识别</strong>:巡检照片的 AI 识别,配上<gd data-term="shikongbiaoqian">时空标签</gd>就能自动归位、追踪同一缺陷的发展。</li>' +
      '<li><strong>灾害预警</strong>:把监测位移、气象、地理结合,AI 研判风险趋势。</li>' +
      '</ul>',
    how:
      '<p>底层逻辑:北斗提供的精准位置和时间,让数据带上可靠的时空坐标;统一<gd data-term="shikongshuju">时空底座</gd>把多源数据对齐;AI 在此之上做时空建模与预测。<strong>数据的时空质量越高,智能的天花板越高。</strong></p>',
    pitfalls:
      '<div class="pit"><b>误解:有 AI 就不用管数据时空质量了。</b>恰恰相反,时空标签错了、时间对不齐,喂给 AI 就是"垃圾进、垃圾出"。时空智能的地基,仍是精准的时空数据。</div>',
    links:
      '<p>· 位置数据也要保护:下一课《数据安全》。<br>· AI 与北斗的更多结合,见模块 11《北斗 + AI》。'
  }
});
