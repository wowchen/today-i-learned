/* network/07-apt-lateral (自动生成) */
ISL.registerLesson({
  id:"network/07-apt-lateral", module:"network", order:7,
  title:"APT 与横向移动", minutes:4,
  keywords:["APT","横向移动"],
  concept:"<p><gd data-term=\"apt\">APT</gd>(高级持续性威胁)是有组织、有耐心的高级攻击:打进来不急着动手,先潜伏、再<gd data-term=\"lateral-movement\">横向移动</gd>逐步扩大战果。</p>",
  core:"<p>典型链路:钓鱼进入一台机器 → 提权 → 偷凭据 → 在内网横向串到更多机器 → 找到核心数据慢慢外带。防御要靠纵深:网络分段、<gd data-term=\"pam\">特权管理</gd>、<gd data-term=\"edr\">EDR</gd>、异常检测与威胁狩猎。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>对 APT,\"防住入口\"这一个目标注定会失败——总有一封钓鱼会得手。重点要转向\"假设已被攻破\":能不能尽早发现横向移动、能不能限制爆炸半径。</div>",
  links:"<p>这些攻击之所以好使,部分原因是\"边界\"本身在瓦解。</p>"
});
