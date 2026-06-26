/* endpoint/07-firmware-hardware (自动生成) */
ISL.registerLesson({
  id:"endpoint/07-firmware-hardware", module:"endpoint", order:7,
  title:"固件与硬件供应链", minutes:3,
  keywords:["固件","硬件","供应链"],
  concept:"<p>软件之下还有固件(BIOS/UEFI、设备底层程序)和硬件本身。它们一旦被植入后门,杀软和重装系统都未必清得掉,极其隐蔽。</p>",
  core:"<p>风险来自整条<gd data-term=\"supply-chain\">供应链</gd>:芯片、固件、第三方组件,任一环节被污染都可能。应对靠:可信启动、固件签名校验、采购可信来源、关键设备做完整性度量。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>这类风险普通人很难自查,但基本动作有用:及时更新固件、不买来历不明的二手网络设备、关键岗位用可信供应链的设备。</div>",
  links:"<p>守住了设备,接下来要守住\"你是谁\"——<a href=\"#/m/iam\">身份与访问</a>。</p>"
});
