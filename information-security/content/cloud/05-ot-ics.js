/* cloud/05-ot-ics (自动生成) */
ISL.registerLesson({
  id:"cloud/05-ot-ics", module:"cloud", order:5,
  title:"工控与 OT 安全", minutes:3,
  keywords:["OT","工控","ICS"],
  concept:"<p><gd data-term=\"ot-security\">工控/OT 安全</gd>管的是工厂、电网、水厂、轨道交通等工业控制系统。它和 IT 安全最大的不同:出事会影响<b>物理世界</b>——停产、停电,甚至安全事故。</p>",
  core:"<p>这些系统往往老旧、不能随便打补丁/重启、协议无加密,曾长期\"物理隔离\"求安全。但联网化打破了隔离(震网 Stuxnet 是标志性事件),需要专门的分区分域、单向隔离、白名单防护。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>把 IT 那套\"赶紧打补丁、重启一下\"直接搬到 OT 会出大事——一次意外停机可能损失巨大甚至危及安全。OT 安全首要原则是\"不影响生产连续性与安全\"。</div>",
  links:"<p>另一类新技术场景是区块链与 Web3。</p>"
});
