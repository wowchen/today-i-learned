#!/usr/bin/env node
/* 慢病管理站 · build.js —— 从 tools/_src 生成 content/ 并校验
   用法: node tools/build.js */
const fs=require('fs'), path=require('path');
const ROOT=path.join(__dirname,'..'), SRC=path.join(__dirname,'_src'), OUT=path.join(ROOT,'content');

const g=(id,cn)=>`<a class="kw" title="${cn}">${cn}</a>`;

/* ---------- 术语表 ---------- */
const TERMS=[
  ['systolic','收缩压','心室收缩泵血时血管壁承受的最高压力,就是血压值的"高位数字"。'],
  ['diastolic','舒张压','心室舒张(放松)时血管内的最低压力,是"低位数字"。'],
  ['white-coat','白大衣效应','在医院见到医生就紧张导致血压偏高的现象,家里测更接近真实。'],
  ['hba1c','糖化血红蛋白','反映近 2–3 个月平均血糖水平的指标,像血糖的"学期成绩单"。'],
  ['insulin','胰岛素','帮助血糖进入细胞的激素;2型糖尿病的核心问题是细胞对它"不接电话"。'],
  ['insulin-resistance','胰岛素抵抗','细胞对胰岛素反应变差,血糖进不了细胞,滞留在血液里。'],
  ['ldl','低密度脂蛋白(LDL-C)','"坏胆固醇",会把胆固醇沉积到血管壁,是动脉粥样斑块的主要原料。'],
  ['hdl','高密度脂蛋白(HDL-C)','"好胆固醇",负责把血管壁多余的胆固醇运回肝脏处理。'],
  ['triglyceride','甘油三酯','血液中的脂肪储备,主要来自过剩的碳水和酒精。'],
  ['statin','他汀类药物','降胆固醇的主力药,通过抑制肝脏合成胆固醇起效,常需长期服用。'],
  ['metabolic','代谢','身体把食物转化为能量并处理废物的全部化学过程的总称。'],
  ['dash-diet','DASH 饮食','防治高血压的膳食模式:多蔬果、全谷物、低脂奶,限盐限饱和脂肪。'],
  ['sodium','钠','食盐的主要成分,过量摄入会升高血压;很多加工食品"隐形"含钠。'],
  ['fasting-glucose','空腹血糖','隔夜禁食 8 小时以上测的血糖,正常应低于 6.1 mmol/L。'],
  ['ogtt','口服葡萄糖耐量试验(OGTT)','喝糖水后测血糖,看身体处理糖的能力,是糖尿病诊断手段之一。'],
  ['hypoglycemia','低血糖','血糖过低引起心慌/出汗/手抖,糖尿病患者用药后需特别警惕。'],
  ['complication','并发症','慢病长期控制不佳引发的器官损害,如肾病、视网膜病变、足病。'],
  ['atherosclerosis','动脉粥样硬化','脂质在动脉壁沉积形成斑块,使血管变窄变脆,是心梗脑梗的土壤。'],
  ['follow-up','随访','定期复诊和健康检查,慢病管理"三分治七分管"里的"管"。'],
  ['compliance','依从性','按医嘱按时按量用药和执行生活处方的程度,决定慢病控制成败。'],
  ['mfv','中等强度运动','运动时能说话但不能唱歌的强度,快走是最典型的例子。'],
  ['bmi','体质指数(BMI)','体重(kg)÷身高(m)²,18.5–24 为我国成人正常范围。'],
  ['visceral-fat','内脏脂肪','堆积在腹腔器官周围的脂肪,比皮下脂肪更危害代谢健康。'],
  ['plate-method','餐盘法则','每餐 1/2 非淀粉类蔬菜 + 1/4 蛋白质 + 1/4 主食的直观配餐法。'],
  ['titration','剂量滴定','药物从小剂量开始,按反应逐步调整到合适剂量的过程。'],
  ['drug-holiday','擅自停药','未与医生商议自行停药;血压血糖反弹往往发生在停药后的"平静期"之后。'],
  ['home-monitoring','家庭监测','在家定期自测血压血糖并记录,是医生调药的重要依据。'],
  ['community-screening','社区筛查','社区卫生服务中心提供的免费慢病筛查,是早期发现的主要渠道。'],
  ['chronic-disease-clinic','慢病门诊','医院或社区针对慢病患者的长期处方与随访服务。'],
  ['hypertension-crisis','高血压急症','血压骤升(常 >180/120)伴头痛/视物模糊/胸痛等,需立即就医。'],
  ['foot-care','足部护理','糖尿病患者每日检查双足,预防糖尿病足的关键日常动作。'],
  ['dka','酮症酸中毒','糖尿病急性并发症:胰岛素严重不足致酮体堆积、血液变酸,呼气可有烂苹果味,需立即急诊。'],
  ['hhs','高渗高血糖状态','多见于老年 2 型的糖尿病急性并发症:血糖常超 33.3 mmol/L,伴极度脱水与意识障碍。'],
  ['diabetic-foot','糖尿病足','神经病变与血管病变叠加致足部溃疡/感染/坏疽,是截肢的首要原因之一。'],
  ['retinopathy','视网膜病变','糖尿病眼部微血管病变,早期无症状,是工作年龄人群致盲的首因之一。'],
  ['nephropathy','糖尿病肾病','最早信号是尿微量白蛋白升高,放任发展可致肾功能衰竭,需每年筛查。'],
  ['uacr','尿微量白蛋白','尿液里检出的少量白蛋白,是糖尿病肾伤最早期的信号,比常规尿蛋白试纸早好几年,应每年查一次。'],
  ['mi','心肌梗死','冠状动脉被血栓急性堵死致心肌坏死,胸痛持续超 15 分钟须立即拨 120。'],
  ['stroke','脑卒中','脑梗死与脑出血的统称,高血压是第一位危险因素,FAST 口诀识别、救治有时间窗。'],
  ['tia','TIA','短暂性脑缺血发作,俗称小中风:症状几分钟到几小时完全恢复,却是大中风的前哨,当天就要就诊。'],
  ['thrombolysis','溶栓','用药物溶解血栓,脑梗静脉溶栓黄金时间窗为发病 4.5 小时内,越早越好。'],
  ['stent','支架植入','球囊撑开狭窄血管后放入金属网管保持开通,是心梗救治的关键手段,黄金时间 90 分钟。'],
  ['metabolic-syndrome','代谢综合征','腹型肥胖+胰岛素抵抗为土壤,血压血糖血脂多项异常并存,需作为整体管理的状态。'],
  ['insulin-resistance','胰岛素抵抗','胰岛素降糖效率下降,身体代偿性多分泌,是三高共同的土壤。'],
  ['gastroparesis','胃轻瘫','胃排空延迟:早饱恶心腹胀,血糖谱忽高忽低难解释,是血糖难控的隐性原因。'],
  ['cgm','CGM','持续葡萄糖监测:14天一贴自动连测,把散点变曲线,TIR>70%是常用目标。'],
  ['polypharmacy','多重用药','同时服用5种以上药物,相互作用与重复用药风险上升,需定期清点药单。'],
  ['thrombectomy','取栓','导管进入血管把大血栓直接取出,大血管堵塞脑梗经评估可延至发病 24 小时内。'],
  ['referral','转诊','社区医生根据病情把你推荐到上级医院对应科室的过程。']
].map(t=>({id:t[0],cn:t[1],def:t[2]}));
if(!TERMS.some(t=>t.id==='hypertension-crisis')){}

/* ---------- 内容源加载 ---------- */
const files=['hypertension','diabetes','lipids','diet-move','medication','visit'];
const MODULES=[]; const ALL_TERMS=new Map(TERMS.map(t=>[t.id,t]));
for(const f of files){
  const p=path.join(SRC,f+'.js');
  if(!fs.existsSync(p)){ console.error('✗ 缺少源文件 '+p); process.exit(1); }
  const data=eval(fs.readFileSync(p,'utf8'));
  data.lessons.forEach((l,i)=>{ l.id=data.id+'-'+String(i+1).padStart(2,'0'); l._m=data.name; });
  MODULES.push(data);
}
/* 通知 */
const notices=eval(fs.readFileSync(path.join(SRC,'notices.js'),'utf8'));

/* ---------- 术语自动链接:<b class="kw">中文</b> → <a class="kw" data-term="slug"> ----------
   匹配不到术语表的保留原样(降级为普通强调),并统计报告 */
const termByCn=new Map(TERMS.map(t=>[t.cn,t]));
let kwLinked=0, kwMiss=[];
function linkKw(s){
  return String(s).replace(/<b class="kw">([^<]+)<\/b>/g, (m,cn)=>{
    const t=termByCn.get(cn.trim());
    if(!t){ kwMiss.push(cn.trim()); return m; }
    kwLinked++;
    return `<a class="kw" data-term="${t.id}" title="${t.def}">${cn}</a>`;
  });
}

/* ---------- 校验 ---------- */
let lessonN=0, errors=[];
for(const m of MODULES){
  for(const l of m.lessons){
    lessonN++;
    for(const k of ['title','one','deep','pit']) if(!l[k]) errors.push(`${l.id} 缺字段 ${k}`);
    if(!l.quiz||!l.quiz.q||!Array.isArray(l.quiz.opts)||l.quiz.opts.length<3) errors.push(`${l.id} quiz 不完整`);
    else if(typeof l.quiz.answer!=='number'||l.quiz.answer>=l.quiz.opts.length) errors.push(`${l.id} quiz answer 越界`);
    if(!l.quiz||!l.quiz.why) errors.push(`${l.id} 缺 quiz.why`);
    /* HTML 转义检查:字符串含未转义的 <script 视为错误 */
    ['title','one','deep','pit'].forEach(k=>{ if(l[k]&&/<script/i.test(l[k])) errors.push(`${l.id} ${k} 含可疑 script 标签`); });
  }
}
if(errors.length){ console.error('✗ 校验失败:\n'+errors.map(e=>'  - '+e).join('\n')); process.exit(1); }

/* ---------- 生成 content/*.js ---------- */
fs.mkdirSync(OUT,{recursive:true});
function write(name,obj){
  fs.writeFileSync(path.join(OUT,name),'/* generated by tools/build.js */\nwindow.CDC=window.CDC||{};\n'+obj);
}
write('modules.js',
  'CDC.META=CDC.META||{};CDC.META.ndiseases=3;\n'
  +'CDC.modules='+JSON.stringify(MODULES.map(m=>({id:m.id,name:m.name,icon:m.icon,soft:m.soft,desc:m.desc,lessons:m.lessons.map(l=>({id:l.id,title:l.title}))})),null,1)+';\n'
  +'CDC.flatLessons='+JSON.stringify(MODULES.flatMap(m=>m.lessons.map(l=>l.id)))+';\n');
/* 课时内容文件(每模块一个,按需加载也行,但纯静态直接全量注入 index.html 更简单——这里生成两个聚合文件) */
write('lessons.js',
  'CDC.lessonData={};\n'
  +MODULES.map(m=>m.lessons.map(l=>{
      const o={title:l.title,sub:l.sub,one:linkKw(l.one),deep:linkKw(l.deep),pit:linkKw(l.pit),quiz:l.quiz,next:l.next};
      if(o.quiz) o.quiz=Object.assign({},o.quiz,{why:linkKw(o.quiz.why||'')});
      return `CDC.lessonData[${JSON.stringify(l.id)}]=`+JSON.stringify(o)+';';
    }).join('\n')).join('\n')+'\n');
write('terms.js','CDC.terms='+JSON.stringify(TERMS,null,1)+';\n');
write('notices.js','CDC.notices='+JSON.stringify(notices,null,1)+';\n');

/* ---------- 统计术语链接 ---------- */
let kwN=kwLinked;

/* ---------- 注入 index.html ---------- */
const idxPath=path.join(ROOT,'index.html');
let html=fs.readFileSync(idxPath,'utf8');
const inject='<!-- content:start -->\n<script src="content/modules.js?v=20260906"></script>\n<script src="content/lessons.js?v=20260906"></script>\n<script src="content/terms.js?v=20260906"></script>\n<script src="content/notices.js?v=20260906"></script>\n<!-- content:end -->';
html=html.replace(/<!-- content:start -->[\s\S]*?<!-- content:end -->/, inject);
fs.writeFileSync(idxPath,html);

if(kwMiss.length) console.log('⚠ 未匹配术语(保留原样): '+[...new Set(kwMiss)].join(' / '));
console.log(`✓ build ok: ${MODULES.length} 模块 / ${lessonN} 课 / ${TERMS.length} 术语 / ${notices.length} 条通知 / ${kwN} 处术语链接`);
