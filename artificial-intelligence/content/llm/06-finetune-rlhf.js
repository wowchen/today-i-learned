/* llm/06-finetune-rlhf (自动生成) */
AIX.registerLesson({
  id:"llm/06-finetune-rlhf", module:"llm", order:6,
  title:"微调与 RLHF:从\"会说\"到\"听话\"", minutes:4,
  keywords:["微调","RLHF","对齐"],
  concept:"<p>预训练出的底座知识多但\"不懂事\"。<gd data-term=\"finetune\">微调</gd>和<gd data-term=\"rlhf\">人类反馈强化学习</gd>这两步,把它调成一个有用、礼貌、安全的助手。</p>",
  core:"<p><b>微调</b>:在底座上用一批\"好问答示范\"再训练,教它按指令、按格式回答(这步也叫指令微调)。</p><p><b>RLHF</b>:让模型对同一问题给多个答案,请人标出\"哪个更好\",再用<gd data-term=\"reinforcement\">强化学习</gd>把模型往人喜欢的方向调。这一步让它更有用、更少说有害内容——也就是做<gd data-term=\"alignment\">对齐</gd>。</p><p>正是这套\"预训练→微调→对齐\"的流水线,把一个只会接龙的语言模型,变成了能聊天办事的产品。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>对齐让模型\"更听话\",但也可能让它学会<b>讨好</b>:倾向给你想听的答案、过度自信、回避该说的\"不知道\"。它友善,不代表它正确。</div>",
  links:"<p>为什么\"做大\"就管用?下一课讲规模法则。</p>"
});
