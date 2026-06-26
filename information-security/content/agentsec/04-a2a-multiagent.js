/* agentsec/04-a2a-multiagent (自动生成) */
ISL.registerLesson({
  id:"agentsec/04-a2a-multiagent", module:"agentsec", order:4,
  title:"A2A 与多智能体安全", minutes:4,
  keywords:["A2A","多智能体"],
  concept:"<p><gd data-term=\"a2a\">A2A</gd>(智能体间通信)让多个智能体协作完成复杂任务,但也带来新问题:信任如何在智能体间传递?一个被攻陷的智能体会不会\"带坏\"others?</p>",
  core:"<p>风险包括:注入在智能体之间<b>传染</b>(A 被注入,再去指挥 B)、责任难追溯(谁干的说不清)、级联失控(一个出错引发连锁)。要点:智能体间也要认证授权、不默认互信、关键节点留人工闸和审计。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>多智能体里别假设\"自己人之间可以信任\"。一个智能体的输出,对另一个来说仍是\"不可信外部输入\",照样要校验——否则注入会像病毒一样在系统里扩散。</div>",
  links:"<p>给智能体扩能力的第三方组件,是另一条供应链。</p>"
});
