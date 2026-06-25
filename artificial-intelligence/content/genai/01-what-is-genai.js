/* genai/01-what-is-genai (自动生成) */
AIX.registerLesson({
  id:"genai/01-what-is-genai", module:"genai", order:1,
  title:"什么是生成式 AI", minutes:4,
  keywords:["生成式","AIGC"],
  concept:"<p><gd data-term=\"generative-ai\">生成式 AI</gd>指<b>能生成新内容</b>(文字、图片、音频、视频、代码)的 AI,区别于只做判断分类的传统\"判别式\"AI。</p>",
  core:"<p>老一代 AI 大多在\"做选择题\":这是不是垃圾邮件?图里有没有猫?生成式 AI 则在\"做问答题/创作题\":写一篇稿、画一张图、谱一段曲。它学到了数据的\"长相和规律\",于是能造出像那么回事的新样本。</p><p>它能火,靠的是几样技术接力:早期的<gd data-term=\"gan\">GAN</gd>(2014)让生成图像变逼真,<gd data-term=\"transformer\">Transformer</gd>(2017)解锁了文本生成,<gd data-term=\"diffusion\">扩散模型</gd>又把文生图推上高峰。大众口中的\"AIGC\",说的就是它。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>生成式 AI 是\"造得像\",不是\"造得对\"。它生成的内容可能流畅、好看却包含错误或虚构;越像真的,越要警惕(见<gd data-term=\"hallucination\">幻觉</gd>与深伪两课)。</div>",
  links:"<p>先看最成熟的一支:文本生成。</p>"
});
