/* 通信通识 · 单一数据源生成器(科普通识,克隆 guitar 框架)。
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html。
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。 */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const C = (...a) => path.join(ROOT, 'content', ...a);

/* ---------- 小工具 ---------- */
const g = (id, t) => '<gd data-term="' + id + '">' + t + '</gd>';
const ex = (t) => '<div class="ex">' + t + '</div>';
const pit = (t) => '<div class="pit"><b>别踩坑 </b>' + t + '</div>';
const fml = (t) => '<div class="fml">' + t + '</div>';
const qc = (q, options, answer, explain, source) => ({ type: 'choice', q: q, options: options, answer: answer, explain: explain, source: source || '想一想' });

/* ============ 模块 ============ [id, title, desc, tag, en] ============ */
const MODULES = [
  ['basics','通信大白话','信号、带宽、协议分层、时延——通信的ABC','入门','Telecom Basics'],
  ['media','传输介质','双绞线、同轴、光纤与光缆家族','基础','Transmission Media'],
  ['optics','光器件与光模块','激光器、探测器、波长窗口与光功率','核心','Optics & Modules'],
  ['sdh','从 PDH 到 SDH','E1、复用树、STM-N、时钟同步','核心','PDH to SDH'],
  ['otn','波分与 OTN','WDM、OTU 封装、FEC、相干光、超长距','核心','WDM & OTN'],
  ['protect','保护与组网','链型环形、1+1、倒换时间、同沟教训','核心','Protection & Networking'],
  ['pon','接入网','从拨号到 FTTH、PON、分光与光衰','实用','Access & PON'],
  ['ops','传输网运维','网管告警、性能事件、割接流程','实战','Transport O&M'],
  ['dcr','机房与动环','-48V 直流、蓄电池、空调、防雷接地','实用','DC Room & Environment'],
  ['future','光缆防护与未来','防外破、OTDR 测障、量子与全光网','进阶','Protection & Future']
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  ['signal','信号','Signal','携带信息的电流、光波或电磁波，通信的载体。','信息的信使。','basics'],
  ['analog-digital','模拟与数字','Analog & Digital','连续变化的叫模拟，0/1 离散取值的叫数字，现代通信以数字为主。','水银温度计对电子温度计。','basics'],
  ['bandwidth','带宽','Bandwidth','信道能通过的频率范围或传输能力，越大跑得越多。','马路的车道数。','basics'],
  ['protocol','协议','Protocol','通信双方事先约定好的规则，如 TCP/IP。','通信界的普通话。','basics'],
  ['layering','分层','Layering','把复杂通信拆成层层叠叠的分工，各层只管自己的事。','快递的打包-分拣-派送体系。','basics'],
  ['packet-switch','分组交换','Packet Switching','把数据切成小包各自选路、到齐重组的传输方式。','拆成包裹分头寄。','basics'],
  ['latency','时延','Latency','数据从 A 到 B 花的时间，由发送、传播、处理、排队四段组成。','通勤的总耗时。','basics'],

  ['twisted-pair','双绞线','Twisted Pair','两两绞合的铜线，网线就是四对双绞线。','绞在一起抗干扰的铜辫子。','media'],
  ['coax','同轴电缆','Coaxial Cable','内芯-绝缘-屏蔽-外皮四层的铜缆，老电视线与同轴机房还在用。','铜管套铜管的电缆。','media'],
  ['fiber','光纤','Optical Fiber','用超纯玻璃拉成的细丝，靠光的全反射传信息。','会漏光吗？不漏的光走廊。','media'],
  ['single-mode','单模光纤','Single-mode Fiber','纤芯极细(约9μm)只走一种模式的光纤，长距离首选，黄色。','一条单向高速道。','media'],
  ['multi-mode','多模光纤','Multi-mode Fiber','纤芯较粗(50/62.5μm)多种模式并进，短距离机房用，橙色/水绿色。','多条并行的慢车道。','media'],
  ['fiber-cable','光缆','Optical Cable','把若干光纤加加强芯、护层做成能上工程的缆。','穿盔甲的光纤。','media'],

  ['laser','激光器','Laser Diode','把电信号变成光信号的器件，通信的核心发光元件。','手电筒的高级版。','optics'],
  ['photodiode','光电探测器','Photodiode','把光信号变回电信号的器件，光收信的眼睛。','光敏的耳朵。','optics'],
  ['optical-module','光模块','Optical Module','收发一体的小盒子：激光器+探测器+驱动，插在设备上。','光电翻译官。','optics'],
  ['wavelength-window','波长窗口','Wavelength Window','光纤损耗最低的波长段，850/1310/1550nm 三大常用窗口。','光纤顺风的频段。','optics'],
  ['dbm','光功率 dBm','dBm','光功率的对数单位，0dBm=1mW，收光一般在 -8 到 -28dBm 之间。','功率的对数计分。','optics'],
  ['sfp','SFP 封装','SFP','可插拔光模块的通用封装，SFP+/QSFP 分别到 10G/400G。','光模块的USB口。','optics'],

  ['e1','E1','E1','2.048Mbps 的标准数字电路，30 路电话一路 PCM 复用。','电信时代的一节标准车厢。','sdh'],
  ['pdh','PDH','Plesiochronous Digital Hierarchy','准同步数字体系，各地区速率不统一、上下话路要逐级拆装。','各说各话的准同步时代。','sdh'],
  ['sdh','SDH','Synchronous Digital Hierarchy','同步数字体系，全球统一速率、可从高速码流直接取出支路。','统一车厢规格的铁路网。','sdh'],
  ['stm-n','STM-N','STM-N','SDH 的速率等级：STM-1=155M、STM-4=622M、STM-16=2.5G、STM-64=10G。','SDH 的四档排量。','sdh'],
  ['overhead','开销','Overhead','SDH 帧里用于管理监控的"行政字节"，告警性能全靠它。','车头里的调度室。','sdh'],
  ['synchronization','网同步','Network Synchronization','全网时钟对齐到同一个源，避免滑码。','全网的统一节拍器。','sdh'],

  ['wdm','波分复用','WDM','一根光纤里同时跑多个波长，一个波长一条车道。','一根管子多条彩色水流。','otn'],
  ['dwdm','密集波分','DWDM','波长间隔很密(0.8nm 级)的波分，单纤几十上百波。','车道划到极限的波分。','otn'],
  ['otn','OTN','Optical Transport Network','光传送网，在波分上加标准封装 ODU/OTU 与管理开销。','给波分装上管理体系。','otn'],
  ['fec','前向纠错','FEC','发端加冗余、收端自动纠错的编码，换取更长传输距离。','快递多塞一份说明书防损。','otn'],
  ['coherent','相干光','Coherent Optical','用幅度+相位一起调制的收发技术，100G 以上的主力。','不光看亮暗还看波纹相位。','otn'],
  ['roadm','ROADM','Reconfigurable OADM','可在网管上远程上下波长的波分节点。','高速路上的遥控匝道。','otn'],

  ['protection-switching','保护倒换','Protection Switching','工作通道断了自动切到备用通道，目标 50ms 内完成。','主路断了立刻走辅路。','protect'],
  ['ring-network','环形组网','Ring Network','设备首尾相连成环，断一处可绕另一方向走。','断了任一边都能绕圈到。','protect'],
  ['fiber-cut','光缆阻断','Fiber Cut','光缆被挖断、烧断等导致通信中断的事件，防外破是重点。','光缆界的交通事故。','protect'],

  ['pon','无源光网络','PON','局端到用户之间全是无源器件的光接入网，省电免维护。','中间不插电的光分配网。','pon'],
  ['olt','OLT','Optical Line Terminal','PON 的局端设备，放在机房，管理下面所有用户端。','小区的快递总仓。','pon'],
  ['onu','ONU','Optical Network Unit','用户端的光猫，接收并转换光信号。','家里的快递柜。','pon'],
  ['splitter','分光器','Splitter','把一根光纤的光按比例分给多户的无源器件，常用 1:8/1:16。','光的分流三通。','pon'],
  ['ftth','光纤到户','FTTH','光纤一直铺到家里，千兆宽带的主力形态。','光纤进家门。','pon'],

  ['nms','网管系统','NMS','监控全网设备告警、性能、配置的管理平台。','通信网的驾驶舱。','ops'],
  ['alarm','告警','Alarm','设备异常时上报的事件，分紧急/主要/次要/警告。','设备的求救信号。','ops'],
  ['performance-event','性能事件','Performance Event','误码率、光功率等随时间采集的指标，坏趋势早于坏告警。','设备的体检报告。','ops'],
  ['cutover','割接','Cutover','把业务从旧路径切到新路径的计划性操作，通常安排在深夜。','通信界的搬家施工。','ops'],

  ['dc-power','-48V 直流','DC Power','通信机房的标准供电制式，正极接地、安全且电池友好。','机房世界的统一电压。','dcr'],
  ['battery','蓄电池','Battery','停电时顶上来的电池组，通常按 4-8 小时后备配置。','机房的充电宝。','dcr'],
  ['hvac','机房空调','HVAC','恒温恒湿精密空调，机房设备散热的生命线。','机房的大空调。','dcr'],
  ['grounding','防雷接地','Grounding','把雷电流泄放入地并统一参考电位的保护体系。','给闪电修的下水道。','dcr'],

  ['otdr','OTDR','Optical Time Domain Reflectometer','向光纤打光脉冲、按回波定位断点和衰减的测试仪。','光纤界的声呐。','future'],
  ['quantum-comm','量子通信','Quantum Communication','利用量子态传密钥的通信方式，窃听必留痕迹。','一拆封就自毁的密信。','future'],
  ['all-optical','全光网络','All-Optical Network','信号全程光进光出、不经光电转换的网，未来方向。','一路光到底的网络。','future'],
  ['dispersion','色散','Dispersion','不同频率的光在光纤中传播速度不同，导致脉冲展宽、码间串扰的线性损伤。','马拉松队伍越跑越散。','otn'],
  ['env-monitor','动环监控','Power & Env Monitoring','对机房动力（电源电池）与环境（温湿度/水浸/烟感/门禁）的集中监控体系。','机房的全天候保姆。','dcr']
];

/* ============ 加载课程内容 ============ */
const L = {};
const srcDir = path.join(__dirname, '_src');
fs.readdirSync(srcDir).filter(f => f.endsWith('.js')).sort().forEach(f => {
  eval(fs.readFileSync(path.join(srcDir, f), 'utf8'));
});

/* ============ 组装 + 校验 + 写文件 ============ */
const termIds = new Set(TERMS.map(t => t[0]));
const moduleIds = new Set(MODULES.map(m => m[0]));
const path_ = [];
const lessonIds = new Set();
MODULES.forEach(m => (L[m[0]] || []).forEach(les => { var id = m[0] + '/' + les[0]; path_.push(id); lessonIds.add(id); }));

let errors = [];
function checkBody(id, html) {
  if (!html) return;
  let m; const re = /data-term="([^"]+)"/g;
  while ((m = re.exec(html))) if (!termIds.has(m[1])) errors.push(id + ' 未知术语: ' + m[1]);
  const rl = /href="#\/l\/([^"]+)"/g;
  while ((m = rl.exec(html))) if (!lessonIds.has(m[1])) errors.push(id + ' 链接到不存在的课: ' + m[1]);
  const rm = /href="#\/m\/([^"]+)"/g;
  while ((m = rm.exec(html))) if (!moduleIds.has(m[1])) errors.push(id + ' 链接到不存在的模块: ' + m[1]);
  if (/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(html)) errors.push(id + ' 含 emoji/特殊符号');
}
MODULES.forEach(m => (L[m[0]] || []).forEach(les => {
  var id = m[0] + '/' + les[0];
  [les[4], les[5], les[6], les[8]].forEach(b => checkBody(id, b));
  (les[7] || []).forEach(q => { checkBody(id, q.q); checkBody(id, q.explain); });
}));
if (errors.length) { console.error('校验未通过:\n' + errors.join('\n')); process.exit(1); }

function w(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); }
const J = o => JSON.stringify(o);

/* modules.js */
const mods = MODULES.map((m, i) => ({ id: m[0], order: i, title: m[1], desc: m[2], lessons: (L[m[0]] || []).length, tag: m[3], en: m[4] }));
let s = '/* 模块元数据 + 学习路径(通信通识)(自动生成,勿手改) */\n';
s += 'window.TCM = window.TCM || {};\n';
s += 'TCM.modules = ' + J(mods) + ';\n';
s += 'TCM.path = ' + J(path_) + ';\n';
s += 'TCM.totalLessons = TCM.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(通信通识)(自动生成) {id,name,en,def,analogy,module} */\nwindow.TCM = window.TCM || {};\nTCM.terms = ' + J(termObjs) + ';\n');

/* 课时文件 */
const scriptTags = [];
MODULES.forEach(m => {
  const mid = m[0];
  (L[mid] || []).forEach((les, idx) => {
    const id = mid + '/' + les[0];
    const obj = {
      id: id, module: mid, order: idx + 1, title: les[1], minutes: les[2],
      keywords: les[3], concept: les[4], core: les[5], pitfalls: les[6], quiz: les[7] || [], links: les[8]
    };
    let body = '/* ' + id + ' (自动生成) */\nTCM.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    w(C(mid, les[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* 注入 index.html */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
if (idx.indexOf('<!--LESSONS-->') !== -1) {
  idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n'));
} else {
  idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!-- Lessons (由 TCM.path 生成) -->\n' + scriptTags.join('\n') + '\n\n</body>');
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
