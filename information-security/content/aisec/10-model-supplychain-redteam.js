/* aisec/10-model-supplychain-redteam (自动生成) */
ISL.registerLesson({
  id:"aisec/10-model-supplychain-redteam", module:"aisec", order:10,
  title:"模型供应链、水印与 AI 红队", minutes:4,
  keywords:["供应链","水印","AI红队"],
  concept:"<p>模型也有<gd data-term=\"supply-chain\">供应链</gd>:你用的开源模型、数据集、第三方微调,任一环被污染都可能带入后门或偏见。所以要关注来源、签名校验、社区信誉。</p>",
  core:"<p>两个配套手段:<gd data-term=\"watermark\">水印</gd>(给 AI 生成内容嵌入可追溯标记,对抗<gd data-term=\"deepfake\">深度伪造</gd>和滥用)和 <gd data-term=\"ai-red-team\">AI 红队</gd>(专门对 AI 做对抗测试,主动找越狱、注入、有害输出),把安全测试常态化。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>深度伪造已让\"眼见为实\"失效:伪造的人脸、声音可用于诈骗和造谣。对重要事项(转账、授权)别只信音视频,要用带外多因素核验。</div>",
  links:"<p>当模型接上工具、能自己动手,风险再上一个台阶——进入<a href=\"#/m/agentsec\">智能体与脚手架安全</a>。</p>"
});
