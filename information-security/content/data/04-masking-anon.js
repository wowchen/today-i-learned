/* data/04-masking-anon (自动生成) */
ISL.registerLesson({
  id:"data/04-masking-anon", module:"data", order:4,
  title:"脱敏与匿名化", minutes:3,
  keywords:["脱敏","匿名化"],
  concept:"<p><gd data-term=\"data-masking\">数据脱敏</gd>:把敏感字段打码或替换,既能用于测试/展示,又不泄露真值(如手机号显示成 138****6789)。匿名化更彻底,力求无法再关联到具体个人。</p>",
  core:"<p>用途很实在:开发测试别用真实生产数据、对外报表别带个人信息、数据共享前先脱敏。这也是 <gd data-term=\"pipl\">个保法</gd> 鼓励的方向。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>简单打码常能被\"重标识\":几条看似匿名的数据一关联,就能还原到个人。真正的匿名化很难,做不到就按\"个人信息\"严格管,别自欺欺人。</div>",
  links:"<p>怎么防止敏感数据被违规带出去?DLP。</p>"
});
