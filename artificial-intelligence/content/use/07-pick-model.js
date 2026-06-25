/* use/07-pick-model (自动生成) */
AIX.registerLesson({
  id:"use/07-pick-model", module:"use", order:7,
  title:"怎么选模型", minutes:4,
  keywords:["选模型","选型"],
  concept:"<p>选模型别看排行榜名次,要看<b>你的任务、预算、数据合规、是否要私有部署</b>这四件事。</p>",
  core:"<ul><li><b>任务</b>:日常问答用通用模型即可;重编程选编程强的;要处理超长文档选长<gd data-term=\"context-window\">上下文</gd>的;要图文选<gd data-term=\"multimodal\">多模态</gd>的。</li><li><b>预算</b>:贵的强但按<gd data-term=\"token\">token</gd>计费会累积;很多场景中小模型够用且便宜得多。</li><li><b>合规</b>:数据不能外发,就选<gd data-term=\"open-weight\">开放权重</gd>本地部署。</li><li><b>稳定性</b>:生产用要看接口可用性、速率限制、厂商可持续性。</li></ul><p>务实的做法:几个候选模型,拿你<b>真实的几个任务</b>各跑一遍对比,而不是迷信通用榜单。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>\"最大最贵=最适合\"是误区。杀鸡用牛刀,既慢又烧钱。先想清楚任务难度,很多活小模型+好提示词就拿下了。</div>",
  links:"<p>最后,把新手最常踩的坑集中扫一遍。</p>"
});
