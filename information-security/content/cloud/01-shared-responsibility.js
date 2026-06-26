/* cloud/01-shared-responsibility (自动生成) */
ISL.registerLesson({
  id:"cloud/01-shared-responsibility", module:"cloud", order:1,
  title:"云安全:责任共担", minutes:3,
  keywords:["云","责任共担"],
  concept:"<p>上云不等于把安全外包给云厂商。<gd data-term=\"cloud-shared-responsibility\">责任共担</gd>模型说得很清楚:厂商管\"云本身\"(机房、硬件、底层),你管\"云里的东西\"(数据、配置、账号、应用)。</p>",
  core:"<p>不同服务模式(IaaS/PaaS/SaaS)分界线不同:用得越底层,你要管的越多。搞错边界,就会出现\"以为对方在管、其实没人管\"的真空。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>绝大多数云上事故不是云被黑了,而是用户自己配错了(开放了存储桶、泄露了密钥)。\"云厂商很安全\"是真的,但你那部分责任跑不掉。</div>",
  links:"<p>而用户这边最常见的翻车,就是配置错误。</p>"
});
