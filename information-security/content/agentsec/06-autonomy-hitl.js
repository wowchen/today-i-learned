/* agentsec/06-autonomy-hitl (自动生成) */
ISL.registerLesson({
  id:"agentsec/06-autonomy-hitl", module:"agentsec", order:6,
  title:"自主性与人在环路", minutes:4,
  keywords:["自主性","人在环"],
  concept:"<p><gd data-term=\"autonomy\">自主性</gd>指智能体在多大程度上不经人确认就自行决策行动。自主性越高越省事,出错的<gd data-term=\"risk\">风险</gd>也越大、越难挽回。</p>",
  core:"<p>关键设计是<gd data-term=\"human-in-the-loop\">人在环路</gd>:在高风险、不可逆的步骤(转账、删除、对外发布、改生产配置)保留人工确认这道闸。低风险、可逆的操作可以放手自动化。按\"后果严重性\"分级授权。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>\"全自动\"在 demo 里很惊艳,放到生产里一旦被注入或自己跑偏,可能在你发现前就造成既成事实。不可逆操作必须有人点头——这不是不信任 AI,是基本的工程冗余。</div>",
  links:"<p>智能体还有\"记忆\",记忆也会泄密。</p>"
});
