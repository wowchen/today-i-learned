/* endpoint/05-patch-management (自动生成) */
ISL.registerLesson({
  id:"endpoint/05-patch-management", module:"endpoint", order:5,
  title:"补丁与漏洞管理", minutes:3,
  keywords:["补丁","漏洞"],
  concept:"<p><gd data-term=\"patch\">补丁</gd>是修复软件漏洞的更新。<b>及时打补丁</b>是性价比最高的安全动作之一——大量重大事故(WannaCry、Equifax)都源于\"该打的补丁没打\"。</p>",
  core:"<p>难点在规模和节奏:成千上万台设备、不能随便重启业务系统,所以需要流程化的<b>漏洞管理</b>:发现 → 评估(按 <gd data-term=\"cvss\">CVSS</gd>/风险定优先级)→ 测试 → 分批上线。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>别追求\"补丁打全 100%\"而忽视优先级。先修\"高危且暴露在外、有现成利用\"的,比平均用力有效得多。实在不能马上打的,用隔离/虚拟补丁兜着。</div>",
  links:"<p>终端不只是公司电脑,还有员工自己的手机。</p>"
});
