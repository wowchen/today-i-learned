/* llm/09-open-vs-closed (自动生成) */
AIX.registerLesson({
  id:"llm/09-open-vs-closed", module:"llm", order:9,
  title:"开源与闭源大模型", minutes:4,
  keywords:["开源","闭源","开放权重"],
  concept:"<p>大模型大致两类:<b>闭源</b>(只能通过厂商接口调用,如 GPT、Claude、Gemini)和<gd data-term=\"open-weight\">开放权重</gd>(把参数公开、可下载自部署,如 Llama、DeepSeek、Qwen 的开源版),后者常被通称\"开源\"。</p>",
  core:"<p><b>闭源</b>:开箱即用、通常最前沿、有服务保障;但要付费、数据要发给对方、用法受限。</p><p><b>开放权重</b>:可本地部署、数据不出门、可深度定制和<gd data-term=\"finetune\">微调</gd>;但要自己搞算力和运维,效果和易用性参差。</p><p>2024 年以来,以 DeepSeek 等为代表的高效开源模型大幅拉近了与闭源的差距,也改变了全球格局。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>\"开源\"在大模型语境常只是<b>开放权重</b>,未必公开训练数据和完整训练代码,许可条款也各家不同(有的限制商用)。用之前务必看清楚许可证。</div>",
  links:"<p>具体有哪些主流模型?下一课做个速查。</p>"
});
