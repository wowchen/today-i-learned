/* 互动实验室:就诊流程模拟器 / DRG-DIP 教学示意器 / 缩略语速配 */
window.HIT = window.HIT || {};
HIT.views = HIT.views || {};

HIT.views.lab = function(sub) {
  if (sub === 'visit-flow') return labVisitFlow();
  if (sub === 'drg-demo') return labDrgDemo();
  if (sub === 'acronym-match') return labAcronymMatch();
  return labIndex();
};

function labIndex() {
  var h = '<div class="tool-head"><h1 class="page">互动实验室</h1>' +
    '<p class="sub">动手点一遍流程,比背缩写更快。全部演示都在浏览器本地运行,离线、不联网,使用完全虚构数据,不代表真实诊疗或医保规则。</p></div>';
  h += '<div class="lab-grid">';
  h += labCard('visit-flow', '就诊流程模拟器', 'V', '点击挂号、医生、检验、影像、药房、结算等节点,看每一步的业务动作和涉及系统。');
  h += labCard('drg-demo', 'DRG/DIP 教学示意器', 'D', '选择虚构诊断、操作和复杂度,观察简化分组和支付逻辑。只讲概念,不是医保规则。');
  h += labCard('acronym-match', '医疗缩略语速配', 'A', '把 HIS、EMR、LIS、PACS、FHIR、DICOM 等缩写和含义配对,快速建立术语坐标。');
  h += '</div><p class="warnnote">免责声明:实验室只用于学习医疗业务与信息化,不构成医疗建议、诊断、治疗、用药或医保申报依据。</p>';
  HIT.render(h);
}
function labCard(sub, title, ic, desc) { return '<a class="labcard" href="#/lab/' + sub + '"><div class="ic">' + ic + '</div><h3>' + title + '</h3><p>' + desc + '</p></a>'; }
function labBack() { return '<div class="crumb"><a href="#/lab">互动实验室</a> / 演示</div>'; }

var FLOW = [
  { id:'reg', name:'挂号/建档', sys:'HIS / MPI', text:'确认患者身份、创建就诊号、分配号源。关键是身份准确和号源规则。' },
  { id:'doctor', name:'医生问诊', sys:'EMR / CPOE', text:'医生记录病情,开立检查、检验、用药等医嘱。' },
  { id:'lab', name:'检验检查', sys:'LIS / RIS / PACS', text:'医技科室接收申请、执行检查、审核并返回报告。' },
  { id:'pharmacy', name:'药房发药', sys:'HIS / 药房系统', text:'药师审核处方,校验库存,完成调剂和发药。' },
  { id:'pay', name:'收费结算', sys:'HIS / 医保接口', text:'汇总费用明细,按医保或自费规则结算,并生成对账依据。' },
  { id:'archive', name:'病历归档', sys:'EMR / 病案系统', text:'诊疗记录归档,病案首页和编码服务质控、统计和支付。' }
];
var FLOW_SEL = 0;
function labVisitFlow() {
  var h = labBack() + '<h1 class="page">就诊流程模拟器</h1><p class="sub">点击节点,看一次普通门诊背后的业务动作和系统触点。示例为虚构教学流程。</p>';
  h += '<div class="panel"><div id="flow-stage"></div><div id="flow-readout"></div></div><p class="warnnote">真实医院流程会因科室、地区、政策和系统不同而不同。</p>';
  HIT.render(h); drawFlow();
}
HIT.flowSelect = function(i) { FLOW_SEL = i; drawFlow(); };
function drawFlow() {
  var h = '<figure class="fig"><svg viewBox="0 0 760 180" width="100%">';
  for (var i = 0; i < FLOW.length; i++) {
    var x = 58 + i * 124, on = i === FLOW_SEL;
    if (i < FLOW.length - 1) h += '<path class="f-line dash" d="M' + (x + 46) + ',80 L' + (x + 88) + ',80"/>';
    h += '<g style="cursor:pointer" onclick="HIT.flowSelect(' + i + ')"><rect class="' + (on ? 'f-box2' : 'f-box') + '" x="' + (x - 44) + '" y="42" width="88" height="76" rx="16"/>';
    h += '<text class="' + (on ? 'f-hot' : 'f-txt') + '" x="' + x + '" y="74" text-anchor="middle">' + FLOW[i].name.split('/')[0] + '</text>';
    h += '<text class="f-dim" x="' + x + '" y="96" text-anchor="middle">' + FLOW[i].sys.split(' / ')[0] + '</text></g>';
  }
  h += '</svg><figcaption>一次就诊不是一条线,而是业务动作和系统数据的同步流转</figcaption></figure>';
  document.getElementById('flow-stage').innerHTML = h;
  var f = FLOW[FLOW_SEL];
  document.getElementById('flow-readout').innerHTML = '<div class="panel"><h3>' + f.name + '</h3><p><b>涉及系统:</b> ' + f.sys + '</p><p>' + f.text + '</p></div>';
}

function labDrgDemo() {
  var h = labBack() + '<h1 class="page">DRG/DIP 教学示意器</h1><p class="sub">用完全虚构的选项理解:诊断、操作、并发症和资源消耗会影响分组与支付管理。这里不是任何地区真实规则。</p>';
  h += '<div class="panel">' + select('diag','主要诊断',['普通肺炎','阑尾炎','髋部骨折']) + select('proc','主要操作',['保守治疗','内镜操作','手术治疗']) + select('cc','复杂度',['无明显并发症','有并发症','严重并发症']) + '<div id="drg-out"></div></div>';
  h += '<p class="warnnote">真实 DRG/DIP 分组器远比这里复杂,以正式医保政策和本地分组规则为准。</p>';
  HIT.render(h); HIT.drgCalc();
}
function select(id,label,opts){ var h='<div class="ctrl"><label>'+label+'</label><select class="field" id="'+id+'" onchange="HIT.drgCalc()">'; for(var i=0;i<opts.length;i++) h+='<option>'+opts[i]+'</option>'; return h+'</select></div>'; }
HIT.drgCalc = function() {
  function v(id){ return document.getElementById(id).value; }
  var diag=v('diag'), proc=v('proc'), cc=v('cc');
  var score = (diag==='髋部骨折'?3:diag==='阑尾炎'?2:1) + (proc==='手术治疗'?3:proc==='内镜操作'?2:1) + (cc==='严重并发症'?3:cc==='有并发症'?2:1);
  var group = score >= 8 ? '高资源组' : score >= 5 ? '中资源组' : '低资源组';
  var band = score >= 8 ? '示意费用带:较高' : score >= 5 ? '示意费用带:中等' : '示意费用带:较低';
  document.getElementById('drg-out').innerHTML = '<div class="out">虚构病例: ' + diag + ' / ' + proc + ' / ' + cc + '\n简化分组: ' + group + '\n' + band + '\n管理含义: 前端病历记录和编码质量会影响分组,分组又会影响支付与运营分析。</div>';
};

var MATCH = [
  ['HIS','医院基础业务系统'], ['EMR','电子病历'], ['LIS','检验信息系统'], ['PACS','影像归档系统'], ['FHIR','现代医疗数据交换标准'], ['DICOM','医学影像标准']
];
var LEFT = null, RIGHT = null, DONE = {};
function labAcronymMatch() {
  var h = labBack() + '<h1 class="page">医疗缩略语速配</h1><p class="sub">先点左边缩写,再点右边含义。配对成功会点亮。</p><div class="panel"><div class="match-grid"><div id="lefts"></div><div id="rights"></div></div><div id="match-out" class="note"></div></div>';
  HIT.render(h); drawMatch();
}
function drawMatch() {
  var l='', r='', defs = MATCH.map(function(x){return x[1];});
  defs = [defs[3],defs[0],defs[5],defs[1],defs[4],defs[2]];
  for (var i=0;i<MATCH.length;i++) l += '<button class="match-btn ' + (DONE[MATCH[i][0]]?'done':'') + '" onclick="HIT.pickLeft(\''+MATCH[i][0]+'\')">'+MATCH[i][0]+'</button>';
  for (var j=0;j<defs.length;j++) r += '<button class="match-btn" onclick="HIT.pickRight(\''+defs[j]+'\')">'+defs[j]+'</button>';
  document.getElementById('lefts').innerHTML = l; document.getElementById('rights').innerHTML = r;
  document.getElementById('match-out').textContent = '已完成 ' + Object.keys(DONE).length + '/' + MATCH.length + '。';
}
HIT.pickLeft=function(x){ LEFT=x; document.getElementById('match-out').textContent='已选择 '+x+', 再点右边含义。'; };
HIT.pickRight=function(x){ if(!LEFT){ document.getElementById('match-out').textContent='先点左边缩写。'; return;} var ok=false; for(var i=0;i<MATCH.length;i++) if(MATCH[i][0]===LEFT && MATCH[i][1]===x) ok=true; if(ok){ DONE[LEFT]=true; document.getElementById('match-out').textContent='配对成功: '+LEFT+' = '+x; } else { document.getElementById('match-out').textContent='还不对,再试一次。'; } LEFT=null; drawMatch(); };
