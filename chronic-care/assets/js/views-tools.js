/* 慢病管理站 · tools —— 5 个互动工具（数据经 CDC.progress.tool 持久化到本机） */
(function(){
  window.CDC=window.CDC||{};

  /* ============ 1. 血压分级评估 ============ */
  CDC.toolBp=function(){
    return '<h3>🩺 血压分级评估</h3><p class="hint">输入一次测量的收缩压 / 舒张压，看它落在哪一档。仅供学习，不构成诊断。</p>'
    +'<div class="rangelist"><div class="rr">'
    +'<div class="field"><label>收缩压 SBP (mmHg)</label><input id="tBpS" type="number" value="145" min="60" max="260" oninput="CDC.bpGrade()"></div>'
    +'<div class="field"><label>舒张压 DBP (mmHg)</label><input id="tBpD" type="number" value="92" min="40" max="160" oninput="CDC.bpGrade()"></div>'
    +'</div></div>'
    +'<div class="scale" id="tBpScale">'
      +'<i style="background:var(--ok)" title="正常"></i><i style="background:var(--ok)" title="正常"></i>'
      +'<i style="background:var(--warn)" title="正常高值"></i>'
      +'<i style="background:#D8B13A" title="1级"></i><i style="background:#D8B13A" title="1级"></i>'
      +'<i style="background:var(--alert)" title="2级"></i><i style="background:var(--alert)" title="2级"></i>'
      +'<i style="background:#8E2F25" title="3级"></i>'
    +'</div>'
    +'<div class="scale-lab"><span>正常 &lt;120/80</span><span>正常高值 130-139/85-89</span><span>1级 ≥140/90</span><span>2级 ≥160/100</span><span>3级 ≥180/110</span></div>'
    +'<div class="w-res"><div class="gauge"><div class="num" id="tBpLv">—</div></div><div class="w-verdict" id="tBpVerdict">输入数字查看分级。</div>'
    +'<button class="btn btn-g btn-sm" style="margin-left:auto" onclick="CDC.bpRecord()">记入健康记录本</button></div>';
  };
  CDC.bpGrade=function(){
    var s=+document.getElementById('tBpS').value||0, d=+document.getElementById('tBpD').value||0;
    var lv=document.getElementById('tBpLv'), v=document.getElementById('tBpVerdict'), segs=document.querySelectorAll('#tBpScale i');
    segs.forEach(function(x){x.classList.remove('on')});
    var cat,col,idx,head,msg;
    if(s>=180||d>=110){cat=3;col='#8E2F25';idx=7;head='3 级高血压（重度）';msg=s+'/'+d+' 已达 3 级。请尽快就医，不要拖延——这一档需要医生立刻介入评估。';}
    else if(s>=160||d>=100){cat=2;col='var(--alert)';idx=5;head='2 级高血压（中度）';msg=s+'/'+d+' 达到 2 级。建议 1–2 周内就诊，带上多日家庭测量记录。';}
    else if(s>=140||d>=90){cat=1;col='#D8B13A';idx=3;head='1 级高血压（轻度）';msg=s+'/'+d+' 达到 1 级标准。不同日再测两次确认，并记录后咨询医生——确诊与否由医生判断，不是这个工具。';}
    else if(s>=130||d>=85){cat='H';col='var(--warn)';idx=2;head='正常高值';msg=s+'/'+d+' 还没到高血压线，但已进入"正常高值"。现在正是生活方式干预的黄金窗口——少盐、运动、减重从现在开始最划算。';}
    else{cat=0;col='var(--ok)';idx=0;head='正常血压';msg=s+'/'+d+' 在正常范围。保持现有习惯，每年体检时留意趋势即可。';}
    if(!(s>0&&d>0)){lv.textContent='—';v.textContent='输入数字查看分级。';return;}
    segs[idx].classList.add('on');
    lv.textContent=head; lv.style.color=col;
    v.innerHTML='<b>'+head+'</b>'+msg;
    CDC._bpLast={s:s,d:d};
  };
  CDC.bpRecord=function(){
    var b=CDC._bpLast; if(!b){alert('先输入血压值');return;}
    CDC.recAdd('bp',b.s+'/'+b.d);
    alert('已记入健康记录本 ✓ 可在下方"健康记录本"查看趋势');
  };

  /* ============ 2. BMI ============ */
  CDC.toolBmi=function(){
    var t=CDC.progress.tool('bmi')||{};
    return '<h3>⚖️ BMI 体质指数</h3><p class="hint">初筛工具。肌肉量高的人可能被"误判"，仅供参考。</p>'
    +'<div class="rangelist"><div class="rr">'
    +'<div class="field"><label>身高 (cm)</label><input id="tBmiH" type="number" value="'+(t.h||172)+'" min="80" max="250" oninput="CDC.bmiCalc()"></div>'
    +'<div class="field"><label>体重 (kg)</label><input id="tBmiW" type="number" value="'+(t.w||'')+'" placeholder="如 65" min="20" max="300" oninput="CDC.bmiCalc()"></div>'
    +'</div></div>'
    +'<div class="scale" id="tBmiScale"><i style="background:var(--warn)"></i><i style="background:var(--ok)"></i><i style="background:var(--ok)"></i><i style="background:var(--warn)"></i><i style="background:var(--alert)"></i></div>'
    +'<div class="scale-lab"><span>&lt;18.5 偏瘦</span><span>18.5–24 正常</span><span>24–28 超重</span><span>≥28 肥胖</span></div>'
    +'<div class="w-res"><div class="gauge"><div class="num" id="tBmiV">—</div></div><div class="w-verdict" id="tBmiWho">输入身高体重查看。</div></div>';
  };
  CDC.bmiCalc=function(){
    var h=+document.getElementById('tBmiH').value/100, w=+document.getElementById('tBmiW').value;
    var v=document.getElementById('tBmiV'), who=document.getElementById('tBmiWho'), segs=document.querySelectorAll('#tBmiScale i');
    segs.forEach(function(x){x.classList.remove('on')});
    if(!(h>0.5&&w>10)){v.textContent='—';who.textContent='输入身高体重查看。';return;}
    CDC.progress.tool('bmi',null,Object.assign(CDC.progress.tool('bmi')||{},{h:h*100,w:w}));
    var b=w/(h*h); v.textContent=b.toFixed(1);
    var cat,col,idx,adv;
    if(b<18.5){cat='偏瘦';col='var(--warn)';idx=0;adv='体重偏低。慢病管理同样需要足够的营养储备，建议咨询医生或营养师评估饮食结构。';}
    else if(b<24){cat='正常';col='var(--ok)';idx=b<21?1:2;adv='体重在正常范围。保持现有饮食与运动习惯，每 6–12 个月复查一次即可。';}
    else if(b<28){cat='超重';col='var(--warn)';idx=3;adv='进入超重区间。对血压、血糖、血脂而言，减重 5% 就有明确获益——从每天多走 2000 步开始。';}
    else{cat='肥胖';col='var(--alert)';idx=4;adv='达到肥胖标准。建议就诊评估代谢指标（血压/血糖/血脂），在医生指导下制定减重计划，不必自行极端节食。';}
    segs[idx].classList.add('on');
    v.style.color=col; who.innerHTML='<b>'+cat+'</b>'+adv;
  };

  /* ============ 3. 隐形盐估算 ============ */
  CDC.toolSalt=function(){
    var t=CDC.progress.tool('salt')||{cook:2.5,pick:3,staple:0.7};
    return '<h3>🧂 隐形盐估算</h3><p class="hint">一天 5 克上限（约一啤酒瓶盖），是所有来源加起来的总量——盐藏在哪里，比炒菜放了多少更关键。</p>'
    +'<div class="rangelist">'
    +'<div class="field"><label>炒菜用盐 (克) —— 出锅前放更省</label><input id="tSaltC" type="range" min="0" max="8" step="0.5" value="'+t.cook+'" oninput="CDC.saltCalc()" style="width:100%;accent-color:var(--teal)"></div>'
    +'<div class="field"><label>咸菜 / 酱油 / 腐乳 (克) —— 隐形盐大头</label><input id="tSaltP" type="range" min="0" max="8" step="0.5" value="'+t.pick+'" oninput="CDC.saltCalc()" style="width:100%;accent-color:var(--teal)"></div>'
    +'<div class="field"><label>主食零食 (克) —— 挂面/面包/薯片</label><input id="tSaltS" type="range" min="0" max="5" step="0.1" value="'+t.staple+'" oninput="CDC.saltCalc()" style="width:100%;accent-color:var(--teal)"></div>'
    +'</div>'
    +'<div class="w-res"><div class="gauge"><div class="num" id="tSaltTot">—</div></div><div class="w-verdict" id="tSaltMsg">拖动滑块估算。</div></div>';
  };
  CDC.saltCalc=function(){
    var c=+document.getElementById('tSaltC').value, p=+document.getElementById('tSaltP').value, s=+document.getElementById('tSaltS').value;
    CDC.progress.tool('salt',null,{cook:c,pick:p,staple:s});
    var tot=c+p+s, limit=5;
    var el=document.getElementById('tSaltTot'), m=document.getElementById('tSaltMsg');
    el.innerHTML=tot.toFixed(1)+'<span style="font-size:.9rem;color:var(--note)"> / 5 克</span>';
    if(tot>limit*1.6){el.style.color='var(--alert)';m.innerHTML='<b>明显超标。</b>建议明天两处下手：咸菜换凉拌黄瓜，酱油用限盐勺。慢慢来。';}
    else if(tot>limit){el.style.color='var(--warn)';m.innerHTML='<b>超了一点点。</b>咸菜酱料通常是大头——试试出锅前再放盐，咸味更明显、用量更少。';}
    else{el.style.color='var(--ok)';m.innerHTML='<b>控制在 5 克以内。</b>味蕾 4–6 周就能适应清淡，血压也会跟着谢谢你。';}
  };

  /* ============ 4. 健康记录本 ============ */
  CDC.toolRec=function(){
    return '<h3>📈 健康记录本</h3><p class="hint">记录血压 / 空腹血糖 / 体重，自动画近 14 条趋势。数据只存本机浏览器。</p>'
    +'<div class="rec-form">'
    +'<div class="field"><label>收缩压</label><input id="rS" type="number" placeholder="128"></div>'
    +'<div class="field"><label>舒张压</label><input id="rD" type="number" placeholder="82"></div>'
    +'<div class="field"><label>空腹血糖</label><input id="rG" type="number" step="0.1" placeholder="6.1"></div>'
    +'<div class="field"><label>体重 kg</label><input id="rW" type="number" step="0.1" placeholder="65.5"></div>'
    +'</div>'
    +'<button class="btn btn-p btn-sm" onclick="CDC.recSubmit()">＋ 记一条</button>'
    +'<div class="chart-box"><svg id="recChart" viewBox="0 0 600 170" preserveAspectRatio="none"></svg>'
    +'<div class="scale-lab" id="recLegend"></div></div>'
    +'<div class="recent" id="recList"></div>';
  };
  CDC.recAdd=function(kind,valStr){
    var list=CDC.progress.tool('rec')||[];
    list.unshift({t:Date.now(),kind:kind,v:valStr});
    if(list.length>200) list.length=200;
    CDC.progress.tool('rec',null,list);
  };
  CDC.recSubmit=function(){
    var s=+document.getElementById('rS').value||0, d=+document.getElementById('rD').value||0;
    var g=+document.getElementById('rG').value||0, w=+document.getElementById('rW').value||0;
    if(!s&&!d&&!g&&!w){alert('至少填一项');return;}
    CDC.recAdd('mix',{s:s,d:d,g:g,w:w});
    document.getElementById('rS').value=document.getElementById('rD').value=document.getElementById('rG').value=document.getElementById('rW').value='';
    CDC.recRender();
  };
  CDC.recRender=function(){
    var list=(CDC.progress.tool('rec')||[]).filter(function(x){return x.kind==='mix'});
    var svg=document.getElementById('recChart'), lg=document.getElementById('recLegend'), li=document.getElementById('recList');
    if(!svg) return;
    /* 简单折线: 收缩压 */
    var pts=list.slice(0,14).reverse();
    var W=600,H=170,pad=10;
    var sVals=pts.map(function(x){return x.v.s}).filter(Boolean);
    var min=sVals.length?Math.min.apply(null,sVals)-10:110, max=sVals.length?Math.max.apply(null,sVals)+10:150;
    if(max-min<20){max=min+20;}
    var line='',dots='';
    pts.forEach(function(x,i){
      if(!x.v.s) return;
      var px=pad+i*(W-2*pad)/Math.max(1,pts.length-1);
      var py=H-pad-(x.v.s-min)/(max-min)*(H-2*pad);
      line+=(line?' L':'M')+px.toFixed(1)+','+py.toFixed(1);
      dots+='<circle cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="3.5" fill="var(--teal)"><title>'+new Date(x.t).toLocaleDateString()+' 收缩压 '+x.v.s+'</title></circle>';
    });
    svg.innerHTML=(line?'<path d="'+line+'" fill="none" stroke="var(--teal)" stroke-width="2.5" stroke-linejoin="round"/>':'<text x="300" y="88" text-anchor="middle" font-size="14" fill="var(--note)">还没有记录——先在上方记一条</text>')+dots;
    lg.innerHTML='<span>曲线 = 收缩压趋势（近 '+pts.length+' 条）· 范围 '+Math.round(min)+'–'+Math.round(max)+' mmHg</span>';
    li.innerHTML=list.slice(0,20).map(function(x){
      var v=x.v;
      return '<div class="ri"><span class="d">'+new Date(x.t).toLocaleString()+'</span><b>'+(v.s?v.s+'/'+v.d:'')+'</b><span>'+(v.g?'血糖 '+v.g:'')+'</span><span>'+(v.w?v.w+' kg':'')+'</span></div>';
    }).join('')||'<div class="ri"><span class="d">暂无记录</span></div>';
  };

  /* ============ 5. 服药打卡 ============ */
  CDC.toolMed=function(){
    var data=CDC.progress.tool('med')||{list:[],day:'',taken:{}};
    return '<h3>💊 服药打卡</h3><p class="hint">添加自己的药物清单，每天勾选打卡，次日自动重置。漏服一天别慌，别自行补双倍——详见「用药与监测」模块。</p>'
    +'<div style="display:flex;gap:10px;margin-bottom:14px;flex-wrap:wrap">'
    +'<div class="field" style="flex:2;min-width:150px"><label>药名</label><input id="medName" placeholder="如 氨氯地平"></div>'
    +'<div class="field" style="flex:1;min-width:110px"><label>频次</label><select id="medFreq"><option>每天 1 次</option><option>每天 2 次</option><option>隔天 1 次</option></select></div>'
    +'<div class="field" style="flex:0;align-self:flex-end"><button class="btn btn-g btn-sm" onclick="CDC.medAdd()">＋ 添加</button></div>'
    +'</div>'
    +'<div id="medList"></div>';
  };
  function medDay(){ var d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }
  CDC.medAdd=function(){
    var name=document.getElementById('medName').value.trim(); if(!name){alert('填个药名');return;}
    var freq=document.getElementById('medFreq').value;
    var data=CDC.progress.tool('med')||{list:[],day:'',taken:{}};
    data.list.push({n:name,f:freq});
    CDC.progress.tool('med',null,data);
    document.getElementById('medName').value='';
    CDC.medRender();
  };
  CDC.medDel=function(i){
    var data=CDC.progress.tool('med')||{list:[],day:'',taken:{}};
    data.list.splice(i,1); CDC.progress.tool('med',null,data); CDC.medRender();
  };
  CDC.medToggle=function(i){
    var data=CDC.progress.tool('med')||{list:[],day:'',taken:{}};
    if(data.day!==medDay()){data.day=medDay();data.taken={};}
    data.taken[i]=!data.taken[i];
    CDC.progress.tool('med',null,data); CDC.medRender();
  };
  CDC.medRender=function(){
    var box=document.getElementById('medList'); if(!box) return;
    var data=CDC.progress.tool('med')||{list:[],day:'',taken:{}};
    if(data.day!==medDay()){data.taken={};data.day=medDay();}
    if(!data.list.length){box.innerHTML='<div class="setmsg">还没有药物记录——添加一支试试。</div>';return;}
    var done=data.list.filter(function(_,i){return data.taken[i]}).length;
    box.innerHTML='<div class="scale-lab" style="margin-bottom:8px"><span>今天 '+done+' / '+data.list.length+' 已打卡</span><span>'+medDay()+'</span></div>'
    +data.list.map(function(m,i){
      var on=!!data.taken[i];
      return '<div class="medrow"><input type="checkbox" '+(on?'checked':'')+' onchange="CDC.medToggle('+i+')" style="accent-color:var(--teal);width:17px;height:17px">'
      +'<b style="'+(on?'text-decoration:line-through;color:var(--note)':'')+'">'+esc(m.n)+'</b><span class="when">'+esc(m.f)+'</span>'
      +'<button class="btn btn-g btn-sm" style="padding:4px 10px" onclick="CDC.medDel('+i+')">删</button></div>';
    }).join('');
  };

  /* 工具页渲染后初始化 */
  CDC.afterToolsRender=function(){
    CDC.bpGrade(); CDC.bmiCalc(); CDC.saltCalc(); CDC.recRender(); CDC.medRender();
  };
})();
