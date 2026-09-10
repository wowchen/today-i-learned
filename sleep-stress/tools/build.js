#!/usr/bin/env node
/* 睡眠与压力管理站 · build.js —— 从 tools/_src 生成 content/ 并校验
   用法: node tools/build.js */
const fs=require('fs'), path=require('path');
const ROOT=path.join(__dirname,'..'), SRC=path.join(__dirname,'_src'), OUT=path.join(ROOT,'content');

/* ---------- 术语表 ---------- */
const TERMS=[
  ['circadian','昼夜节律','身体内置的约 24 小时生物钟,管着什么时候困、什么时候醒、体温和激素怎么起伏。'],
  ['scn','视交叉上核','下丘脑里的一小簇神经元,是全身生物钟的"总台",靠光来对时。'],
  ['chronotype','时型','你是早鸟还是夜猫子,主要由基因决定,不是懒。'],
  ['sleep-cycle','睡眠周期','一夜由 4–6 个约 90 分钟的周期组成,每轮在浅睡、深睡、REM 之间走一遍。'],
  ['nrem','非快速眼动睡眠','占睡眠约 75%,分 N1/N2/N3 三段,越往后越深,深睡主要在 N3。'],
  ['rem','REM 睡眠','快速眼动睡眠,做梦最集中的阶段,对情绪消化和记忆整合很关键。'],
  ['slow-wave','慢波睡眠','即深睡(N3),大脑电波又慢又大,是身体修复和记忆固化的黄金时段。'],
  ['sleep-pressure','睡眠压力','清醒越久,脑内困意信号堆得越高,这就是"睡眠压力"。'],
  ['adenosine','腺苷','醒着时在大脑里越积越多的代谢产物,是"睡眠压力"的分子本体。'],
  ['caffeine','咖啡因','不制造清醒,只把腺苷的"困意插座"堵住——所以它掩盖疲劳,却不还债。'],
  ['half-life','半衰期','体内物质浓度减半所需时间。咖啡因平均约 5 小时,个体差异可达 2–10 小时。'],
  ['melatonin','褪黑素','天黑后由松果体分泌的"报时信号",告诉你该睡了,而不是直接把你打晕。'],
  ['sleep-debt','睡眠债','长期睡不够累积的缺口,像欠账一样要还,但一次补觉补不回全部。'],
  ['sleep-efficiency','睡眠效率','睡着时间 ÷ 躺在床上时间。低于 85% 通常说明床躺得太久、睡得太碎。'],
  ['sleep-onset','入睡潜伏期','从上床到真正睡着的时间,常以 30 分钟为界,超过就要留意。'],
  ['insomnia','失眠','有足够时间和机会睡,却仍然难以入睡或维持睡眠,并影响白天状态。'],
  ['insomnia-disorder','失眠障碍','每周至少 3 晚、持续 3 个月以上的失眠,且白天功能受损,是需要治疗的诊断。'],
  ['sleep-hygiene','睡眠卫生','一组改善睡眠的生活习惯,是改善睡眠的地基,但单独用对慢性失眠往往不够。'],
  ['cbti','失眠认知行为治疗(CBT-I)','失眠的一线疗法:用刺激控制、睡眠限制、认知调整重塑睡眠,效果不输安眠药且更持久。'],
  ['stimulus-control','刺激控制','核心一条:床只用来睡觉,不在床上刷手机、办公、焦虑,重建"上床=睡着"的条件反射。'],
  ['sleep-restriction','睡眠限制','故意缩短躺床时间,把睡眠"挤"得更实、更深,再逐步延长——听着反直觉但很有效。'],
  ['relaxation-training','放松训练','通过呼吸、肌肉放松等手段降低生理唤醒,给入睡创造条件。'],
  ['pmr','渐进式肌肉放松','从脚到额头逐组肌肉先绷紧 5 秒再放松 15 秒,靠身体放松带动大脑放松。'],
  ['breath-478','4-7-8 呼吸法','吸气 4 秒、屏息 7 秒、呼气 8 秒,呼气拉长可激活副交感神经,帮助降速。'],
  ['mindfulness','正念','有意识地、不加评判地待在当下。不是放空,是练习看着念头来去而不被卷走。'],
  ['body-scan','身体扫描','把注意力从头到脚逐段移过身体,感受而不评判,是常见的正念入睡练习。'],
  ['nap','午睡','10–30 分钟的小睡能提神;睡太久或太晚,会削弱晚间睡眠压力。'],
  ['sleep-inertia','睡眠惯性','刚醒时那段昏沉、反应慢的过渡期,通常几分钟到半小时,睡太久更明显。'],
  ['light-therapy','光照治疗','用特定强度与时间的光来校准生物钟,常用于季节性情绪低落与睡眠相位问题。'],
  ['blue-light','蓝光','屏幕和日光里波长短、能量高的一段,晚间暴露会压制褪黑素、推迟入睡。'],
  ['snoring','打鼾','气流通过狭窄的上气道引起软组织振动。单纯打鼾常见,但伴呼吸暂停就是病。'],
  ['apnea','睡眠呼吸暂停','睡眠中反复出现呼吸暂停或明显减弱,导致夜间缺氧和频繁微觉醒。'],
  ['osa','阻塞性睡眠呼吸暂停(OSA)','最常见的一型:上气道塌陷堵住气流,典型表现是响鼾+呼吸停顿+白天嗜睡。'],
  ['ahi','呼吸暂停低通气指数(AHI)','每小时呼吸暂停加低通气的次数,常以 ≥5 次/小时为诊断门槛,越高越重。'],
  ['rls','不宁腿综合征','静息时腿部难以忍受的不适,必须动一动才缓解,傍晚和夜间最重。'],
  ['plmd','周期性肢体运动','睡眠中每 20–40 秒一次的腿部抽动,常把人从深睡里拽出来而本人不知。'],
  ['parasomnia','异态睡眠','睡中出现的异常行为:梦游、夜惊、噩梦、快速眼动期行为障碍等。'],
  ['bruxism','磨牙','睡眠中不自主紧咬或磨动牙齿,常与压力和睡眠碎片化相关。'],
  ['hypersomnia','日间过度嗜睡','明明睡够时间,白天还是难以抵挡的困,是多种睡眠病的共同信号。'],
  ['narcolepsy','发作性睡病','一种神经系统疾病:白天突然不可抗拒地睡过去,常伴猝倒,需专科诊治。'],
  ['jetlag','时差','跨时区后生物钟与当地昼夜不合拍,导致入睡难、白天困、胃肠乱。'],
  ['shift-work','倒班','工作时间与生物钟长期冲突,是睡眠与代谢风险的重要来源。'],
  ['psg','多导睡眠监测','在睡眠实验室整夜记录脑电、眼动、呼吸、血氧等,是诊断睡眠呼吸暂停的金标准。'],
  ['actigraphy','体动记录仪','戴在手腕上连续记录活动与光照,可在家里连续多天客观估计睡眠节律。'],
  ['psqi','匹兹堡睡眠质量指数(PSQI)','常用的自评量表,从 7 个维度评估近一个月的睡眠质量,总分 0–21 分。'],
  ['sleep-diary','睡眠日记','连续记录入睡、起床、夜醒、白天状态,是看医生和做 CBT-I 的第一份材料。'],
  ['stress','压力','面对超出当前应对资源的挑战时,身体和心理产生的一整套反应。'],
  ['stressor','压力源','触发压力反应的刺激:deadline、冲突、噪音、疾病、重大变故都算。'],
  ['fight-flight','战斗—逃跑反应','遇到威胁时交感神经瞬间拉满,心跳加快、肌肉紧绷,准备打或跑。'],
  ['hpa-axis','HPA 轴','下丘脑—垂体—肾上腺轴,身体应对压力的主控通路,终点是释放皮质醇。'],
  ['cortisol','皮质醇','主要的"应激激素",短期动员能量、提高警觉,长期偏高则伤身。'],
  ['adrenaline','肾上腺素','应激时快速分泌,几秒钟内拉高心率、血压和血糖,是"急"的那一路。'],
  ['allostatic-load','适应负荷','长期反复应激把调节系统磨损后的累积代价,是慢性压力伤身的账本。'],
  ['eustress','良性压力','强度适中、可控、有意义的压力,能提升专注与表现,不是所有压力都坏。'],
  ['yerkes-dodson','耶克斯—多德森定律','压力与表现呈倒 U 形:太低没劲,太高崩盘,中等唤醒表现最好。'],
  ['appraisal','认知评价','同一件事为什么有人紧张有人淡定——关键在于你如何解读它和评估自己的资源。'],
  ['cognitive-reappraisal','认知重评','重新解读一件压力事件的意义(如"这是威胁"改成"这是挑战"),是有效的情绪调节策略。'],
  ['coping','应对','为处理压力源及其带来的情绪而采取的想法与行为的总称。'],
  ['problem-focused','问题聚焦应对','直接对压力源动手:列计划、找资源、分解任务。适合可控的问题。'],
  ['emotion-focused','情绪聚焦应对','不去改变事件本身,而是调节自己的情绪反应:倾诉、放松、接纳。适合不可控的问题。'],
  ['rumination','反刍思维','反复咀嚼同一件难受的事却得不到新结论,像车轮空转,会加重抑郁与失眠。'],
  ['vagus','迷走神经','第十对脑神经,是副交感系统的主干线,负责让身体慢下来、稳下来。'],
  ['sympathetic','交感神经','"油门"系统,负责动员、警觉、应激;长期踩着不放会耗竭。'],
  ['parasympathetic','副交感神经','"刹车"系统,负责休息、消化、修复;睡眠质量很大程度上靠它。'],
  ['hrv','心率变异性(HRV)','相邻心跳间隔的微小差异,差异大通常说明调节弹性好、恢复充分。'],
  ['biofeedback','生物反馈','用仪器把呼吸、心率等生理信号实时显示出来,帮你学会主动调节身体。'],
  ['anxiety','焦虑','面对不确定威胁时的担忧与身体紧绷,适度有用,过度则消耗生活。'],
  ['gad','广泛性焦虑障碍(GAD)','长期、弥漫、难以控制的担忧,持续 6 个月以上,常伴肌肉紧张和睡眠问题。'],
  ['panic','惊恐发作','几分钟内骤然出现的强烈恐惧伴心悸、窒息感、濒死感,睡眠中也可发生。'],
  ['depression','抑郁','不只是情绪低落,而是兴趣减退、精力下降、睡眠食欲改变等一整套状态,是可以治疗的疾病。'],
  ['phq9','PHQ-9','9 题抑郁自评量表,总分 0–27,是筛查而非诊断工具。'],
  ['gad7','GAD-7','7 题焦虑自评量表,总分 0–21,常用于筛查焦虑程度和随访变化。'],
  ['pss','知觉压力量表(PSS)','10 题评估近一个月"觉得生活不可控、超负荷"的程度,不是测你有多惨。'],
  ['burnout','职业倦怠','长期工作压力下的三重耗竭:精力耗尽、对工作疏离、成就感下降。'],
  ['emotional-labor','情绪劳动','工作中需要管理并表演情绪(如客服始终保持微笑)所带来的隐性消耗。'],
  ['self-compassion','自我关怀','像对待好朋友那样对待自己:觉察痛苦、承认人人如此、善意回应。'],
  ['resilience','心理韧性','面对逆境后仍能恢复和成长的能力,不是天生固定,可以刻意练。'],
  ['perfectionism','完美主义','把标准定得过高并以此评判自我价值,常与拖延、焦虑、倦怠同行。'],
  ['procrastination','拖延','明知有代价仍推迟,核心往往不是懒,而是任务带来的情绪不适。'],
  ['catastrophizing','灾难化','把可能性往最坏处推演并当成事实("我一定会搞砸"),是焦虑的常见思维陷阱。'],
  ['cbt','认知行为疗法(CBT)','通过调整想法与行为来改善情绪,是循证心理治疗的主流取向之一。'],
  ['act','接纳承诺疗法(ACT)','不跟痛苦硬拼,而是接纳它、澄清价值、朝重要方向行动。'],
  ['alcohol','酒精','会缩短入睡时间,代价是后半夜睡眠碎片化和 REM 反跳,是常见的"伪助眠"。'],
  ['rem-rebound','REM 反跳','长期被抑制后 REM 睡眠报复性增多,常伴多梦、夜间血压波动。'],
  ['red-flag','就医红旗信号','提示可能有器质性问题、需要尽快就诊的警号,如睡眠中呼吸停顿、猝倒、梦中打人。'],
  ['referral','转诊','由全科或心理科医生根据情况把你转到睡眠、精神或专科门诊的流程。']
].map(t=>({id:t[0],cn:t[1],def:t[2]}));

/* ---------- 内容源加载 ---------- */
const files=['sleep-basics','sleep-problems','sleep-improve','stress-basics','stress-coping','emotion','body-mind','help'];
const MODULES=[];
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
    ['title','one','deep','pit'].forEach(k=>{ if(l[k]&&/<script/i.test(l[k])) errors.push(`${l.id} ${k} 含可疑 script 标签`); });
  }
}
if(errors.length){ console.error('✗ 校验失败:\n'+errors.map(e=>'  - '+e).join('\n')); process.exit(1); }

/* ---------- 生成 content/*.js ---------- */
fs.mkdirSync(OUT,{recursive:true});
function write(name,obj){
  fs.writeFileSync(path.join(OUT,name),'/* generated by tools/build.js */\nwindow.SLP=window.SLP||{};\n'+obj);
}
write('modules.js',
  'SLP.META=SLP.META||{};SLP.META.nmods='+MODULES.length+';\n'
  +'SLP.modules='+JSON.stringify(MODULES.map(m=>({id:m.id,name:m.name,icon:m.icon,soft:m.soft,desc:m.desc,lessons:m.lessons.map(l=>({id:l.id,title:l.title}))})),null,1)+';\n'
  +'SLP.flatLessons='+JSON.stringify(MODULES.flatMap(m=>m.lessons.map(l=>l.id)))+';\n');
write('lessons.js',
  'SLP.lessonData={};\n'
  +MODULES.map(m=>m.lessons.map(l=>{
      const o={title:l.title,sub:l.sub,one:linkKw(l.one),deep:linkKw(l.deep),pit:linkKw(l.pit),quiz:l.quiz,next:l.next};
      if(o.quiz) o.quiz=Object.assign({},o.quiz,{why:linkKw(o.quiz.why||'')});
      return `SLP.lessonData[${JSON.stringify(l.id)}]=`+JSON.stringify(o)+';';
    }).join('\n')).join('\n')+'\n');
write('terms.js','SLP.terms='+JSON.stringify(TERMS,null,1)+';\n');
write('notices.js','SLP.notices='+JSON.stringify(notices,null,1)+';\n');

/* ---------- 注入 index.html ---------- */
const idxPath=path.join(ROOT,'index.html');
let html=fs.readFileSync(idxPath,'utf8');
const inject='<!-- content:start -->\n<script src="content/modules.js?v=20260910"></script>\n<script src="content/lessons.js?v=20260910"></script>\n<script src="content/terms.js?v=20260910"></script>\n<script src="content/notices.js?v=20260910"></script>\n<!-- content:end -->';
html=html.replace(/<!-- content:start -->[\s\S]*?<!-- content:end -->/, inject);
fs.writeFileSync(idxPath,html);

if(kwMiss.length) console.log('⚠ 未匹配术语(保留原样): '+[...new Set(kwMiss)].join(' / '));
console.log(`✓ build ok: ${MODULES.length} 模块 / ${lessonN} 课 / ${TERMS.length} 术语 / ${notices.length} 条通知 / ${kwLinked} 处术语链接`);
