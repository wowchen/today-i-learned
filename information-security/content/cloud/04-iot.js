/* cloud/04-iot (自动生成) */
ISL.registerLesson({
  id:"cloud/04-iot", module:"cloud", order:4,
  title:"物联网安全", minutes:3,
  keywords:["IoT","物联网"],
  concept:"<p><gd data-term=\"iot\">物联网</gd>设备(摄像头、门锁、传感器、智能家电)数量巨大,却常有弱口令、默认密码、固件难更新——成了攻击者的\"提款机\"和<gd data-term=\"botnet\">僵尸网络</gd>素材(Mirai 即是)。</p>",
  core:"<p>要点:改掉默认口令、及时更新固件、把 IoT 放进独立网络段(别和核心系统同网)、关掉用不到的远程访问。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>一个不起眼的联网摄像头,可能成为攻击者进入你内网的跳板。\"它只是个小设备\"恰恰是它危险的原因——没人把它当回事去管。</div>",
  links:"<p>当联网设备控制的是工厂和电网,风险就上升到物理世界。</p>"
});
