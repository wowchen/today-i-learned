/* use/02-prompt-basics (自动生成) */
AIX.registerLesson({
  id:"use/02-prompt-basics", module:"use", order:2,
  title:"提示词入门", minutes:4,
  keywords:["提示词","prompt"],
  concept:"<p><gd data-term=\"prompt\">提示词</gd>就是你发给模型的那段话。一个好用的万能框架是说清五件事:<b>角色、任务、上下文、格式、约束</b>。</p>",
  core:"<ul><li><b>角色</b>:\"你是一位资深英语编辑\"——定身份,定专业度。</li><li><b>任务</b>:\"把下面这段中文润色成地道英文\"——最核心,要具体。</li><li><b>上下文</b>:\"读者是客户,场合正式\"——给背景和材料。</li><li><b>格式</b>:\"用表格,分三列\"——指定输出长相。</li><li><b>约束</b>:\"不超过 200 词,别编术语\"——划边界。</li></ul><p>再加一招很有效:<b>给例子</b>。给一两个\"输入→期望输出\"的样例(<gd data-term=\"in-context-learning\">上下文学习</gd>),它照着做往往最准。去<a href=\"#/lab/prompt\">提示词演练器</a>实操一下。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>提示词不是越长越玄乎越好。把需求说清楚就行;堆砌\"请你务必非常专业认真\"之类的空话,基本没用。</div>",
  links:"<p>想让它基于你的私有资料回答,就需要 RAG。</p>"
});
