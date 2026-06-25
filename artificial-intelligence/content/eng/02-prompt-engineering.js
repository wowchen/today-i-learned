/* eng/02-prompt-engineering (自动生成) */
AIX.registerLesson({
  id:"eng/02-prompt-engineering", module:"eng", order:2,
  title:"提示词工程 Prompt Engineering", minutes:4,
  keywords:["提示词工程","prompt"],
  concept:"<p><gd data-term=\"prompt-engineering\">提示词工程</gd>是把\"怎么交代任务\"做扎实:<b>清晰的指令 + 明确的角色和格式 + 必要的例子</b>,稳定地拿到好结果。</p>",
  core:"<p>核心手法你已在《用好大模型》见过:五要素(角色/任务/上下文/格式/约束)、给样例、分步要求。再加几招进阶:让它<gd data-term=\"chain-of-thought\">一步步推理</gd>、让它先复述需求再动手、给它\"如果不确定就说不知道\"的出口。</p><p>它的特点是<b>门槛最低、性价比最高</b>:不用编程,改改话术,效果立竿见影。是所有人都该掌握的基本功。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>提示词工程能压榨出模型的潜力,但<b>压不出它没有的能力</b>。模型根本不知道的私有信息、做不到的复杂任务,光靠话术变不出来——那是后面几层要解决的。</div>",
  links:"<p>当任务需要\"它本来不知道的信息\",就轮到上下文工程。</p>"
});
