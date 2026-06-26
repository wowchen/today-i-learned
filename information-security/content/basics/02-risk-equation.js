/* basics/02-risk-equation (自动生成) */
ISL.registerLesson({
  id:"basics/02-risk-equation", module:"basics", order:2,
  title:"风险 = 资产 × 威胁 × 脆弱性", minutes:4,
  keywords:["风险","公式"],
  concept:"<p>安全资源永远有限,所以要会算账。<gd data-term=\"risk\">风险</gd>粗略等于<b>资产价值 × 威胁可能性 × 脆弱性</b>。</p>",
  core:"<p>这个乘式很有用:任意一项接近 0,风险就被压下来。打补丁是降<gd data-term=\"vulnerability\">脆弱性</gd>,减少存的敏感数据是降资产暴露,威慑与情报是降<gd data-term=\"threat\">威胁</gd>。</p><div class=\"ex\">家里有名画(资产高)+ 在治安差的地段(威胁高)+ 门锁是坏的(脆弱高),风险就极高;换把好锁,风险立刻下来。</div>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>别把\"风险\"和\"漏洞\"混为一谈。有漏洞不等于有高风险——如果那台机器没存重要数据、也不对外,风险可能很低。要按风险排优先级,不是按漏洞数量。</div>",
  links:"<p>去<a href=\"#/lab/risk\">风险评估计算器</a>拖一拖三个滑杆找找感觉。下一课拆解威胁与脆弱性。</p>"
});
