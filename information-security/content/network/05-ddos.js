/* network/05-ddos (自动生成) */
ISL.registerLesson({
  id:"network/05-ddos", module:"network", order:5,
  title:"DDoS:把你挤垮", minutes:3,
  keywords:["DDoS","可用性"],
  concept:"<p><gd data-term=\"ddos\">DDoS</gd>(分布式拒绝服务)用海量请求把服务挤爆,让正常用户用不了——攻击的是 <gd data-term=\"availability\">可用性</gd>。</p>",
  core:"<p>攻击流量常来自被控制的<gd data-term=\"botnet\">僵尸网络</gd>(大量\"肉鸡\"设备)。防御靠:上游流量清洗、CDN 分摊、限流与弹性扩容,很难靠一台设备硬扛。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>DDoS 有时是\"声东击西\"的烟雾弹:趁你忙着救服务,真正的窃密在别处进行。出现大流量攻击时,别松了其他监控。</div>",
  links:"<p>比起堵大门,更隐蔽的是从 Web 应用的缝里钻进来。</p>"
});
