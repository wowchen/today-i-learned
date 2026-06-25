/* genai/03-diffusion (自动生成) */
AIX.registerLesson({
  id:"genai/03-diffusion", module:"genai", order:3,
  title:"文生图与扩散模型", minutes:4,
  keywords:["文生图","扩散模型"],
  concept:"<p>今天主流的文生图,靠的是<gd data-term=\"diffusion\">扩散模型</gd>:<b>先学会把图片一步步加噪声打成雪花,再反过来,从纯噪声里一步步\"显影\"出图画</b>。</p>",
  core:"<p>训练时,模型看大量\"图片+文字描述\",学会\"加噪/去噪\"的本事。生成时,你给一句话(提示词),它就从一团随机噪声出发,在文字引导下一步步去噪,最终\"显影\"出符合描述的图。</p><figure class=\"fig\"><svg viewBox=\"0 0 320 80\" width=\"100%\"><rect x=\"10\" y=\"25\" width=\"50\" height=\"34\" rx=\"4\" class=\"f-box\"/><text x=\"35\" y=\"46\" class=\"f-dim\" text-anchor=\"middle\">噪声</text><rect x=\"90\" y=\"25\" width=\"50\" height=\"34\" rx=\"4\" class=\"f-box\"/><rect x=\"170\" y=\"25\" width=\"50\" height=\"34\" rx=\"4\" class=\"f-box2\"/><rect x=\"255\" y=\"25\" width=\"55\" height=\"34\" rx=\"4\" class=\"f-box2\"/><text x=\"282\" y=\"46\" class=\"f-txt\" text-anchor=\"middle\">成图</text><polygon class=\"f-arr\" points=\"62,42 72,42 67,38\"/><polygon class=\"f-arr\" points=\"62,42 72,42 67,46\"/><text x=\"160\" y=\"74\" class=\"f-dim\" text-anchor=\"middle\">一步步去噪(文字引导)</text></svg><figcaption>从噪声到图画:扩散模型逐步去噪</figcaption></figure><p>代表产品有 Midjourney、Stable Diffusion(开源)、DALL·E 等。同样思路也被用到文生视频。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>文生图最爱出问题的是<b>手指、文字、物理关系</b>(六根手指、招牌乱码)。它在\"拼像素的统计规律\",并不真懂手有几根指头,虽然在快速改善。</div>",
  links:"<p>从一张图到一段会动的视频,挑战又上一个台阶。</p>"
});
