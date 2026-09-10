/* 睡眠与压力管理站 · tools —— 5 个互动工具（数据经 SLP.progress.tool 持久化到本机） */
(function(){
  window.SLP=window.SLP||{};

  function toMin(hhmm){
    var p=String(hhmm||'').split(':');
    var h=+p[0], m=+p[1];
    if(isNaN(h)) return null;
    return h*60+(isNaN(m)?0:m);
  }
  function fmtDur(min){
    var h=Math.floor(min/60), m=Math.round(min%60);
    return h+' 小时 '+(m<10?'0':'')+m+' 分';
  }
  function diaryList(){
    var v=SLP.progress.tool('diary');
    if(!Array.isArray(v)) { v=[]; SLP.progress.tool('diary',null,v); }
    return v;
  }
  function breathData(){
    var v=SLP.progress.tool('breath');
    if(!v || !Array.isArray(v.days)) { v={days:[],rounds:0,phase:'idle'}; SLP.progress.tool('breath',null,v); }
    return v;
  }
  function todayKey(){ var d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }

  /* ============ 1. 睡眠时长与效率 ============ */
  SLP.toolDur=function(){
    var t=SLP.progress.tool('dur')||{};
    return '<h3>⏱ 睡眠时长与效率</h3><p class="hint">输入最近一次的上床、入睡与起床时间，算出卧床时长、实际睡着时长与睡眠效率。仅供自我观察，不作为诊断依据。</p>'
    +'<div class="rangelist"><div class="rr">'
    +'<div class="field"><label>上床时间</label><input id="tDurBed" type="time" value="'+(t.bed||'23:00')+'" oninput="SLP.durCalc()"></div>'
    +'<div class="field"><label>起床时间</label><input id="tDurUp" type="time" value="'+(t.up||'07:00')+'" oninput="SLP.durCalc()"></div>'
    +'</div><div class="rr">'
    +'<div class="field"><label>大概多久睡着（分钟）</label><input id="tDurLat" type="number" min="0" max="300" value="'+(t.lat==null?30:t.lat)+'" oninput="SLP.durCalc()"></div>'
    +'<div class="field"><label>夜里醒着的总时间（分钟）</label><input id="tDurWaso" type="number" min="0" max="300" value="'+(t.waso==null?15:t.waso)+'" oninput="SLP.durCalc()"></div>'
    +'</div></div>'
    +'<div class="scale" id="tDurScale">'
      +'<i style="background:var(--alert)" title="偏少"></i>'
      +'<i style="background:var(--warn)" title="偏少"></i>'
      +'<i style="background:var(--ok)" title="合适"></i><i style="background:var(--ok)" title="合适"></i>'
      +'<i style="background:var(--warn)" title="偏多"></i>'
    +'</div>'
    +'<div class="scale-lab"><span>&lt;6h 偏少</span><span>6–7h</span><span>7–9h 合适</span><span>9–10h</span><span>&gt;10h 偏多</span></div>'
    +'<div class="w-res"><div class="gauge"><div class="num" id="tDurV">—</div></div><div class="w-verdict" id="tDurMsg">输入时间后自动计算。</div></div>';
  };
  SLP.durCalc=function(){
    var bed=toMin(document.getElementById('tDurBed').value);
    var up=toMin(document.getElementById('tDurUp').value);
    var lat=+document.getElementById('tDurLat').value||0;
    var waso=+document.getElementById('tDurWaso').value||0;
    var v=document.getElementById('tDurV'), m=document.getElementById('tDurMsg');
    var segs=document.querySelectorAll('#tDurScale i');
    segs.forEach(function(x){x.classList.remove('on')});
    if(bed==null||up==null){ v.textContent='—'; m.textContent='输入时间后自动计算。'; return; }
    SLP.progress.tool('dur',null,{bed:document.getElementById('tDurBed').value,up:document.getElementById('tDurUp').value,lat:lat,waso:waso});
    var inBed=up-bed; if(inBed<=0) inBed+=1440;     /* 跨零点则加一天 */
    var asleep=Math.max(0,inBed-lat-waso);
    var eff=inBed>0? asleep/inBed : 0;
    var effPct=Math.round(eff*100);
    var h=asleep/60;
    var idx,col;
    if(h<6){ idx=0; col='var(--alert)'; }
    else if(h<7){ idx=1; col='var(--warn)'; }
    else if(h<=9){ idx=(h<8)?2:3; col='var(--ok)'; }
    else { idx=4; col='var(--warn)'; }
    segs[idx].classList.add('on');
    v.innerHTML=h.toFixed(1)+'<span style="font-size:.9rem;color:var(--note)"> 小时 · 效率 '+effPct+'%</span>';
    v.style.color=col;
    var tips=[];
    if(lat>30) tips.push('入睡用了 '+lat+' 分钟，超过 30 分钟这个常用分界——别在床上硬躺，躺下约 20 分钟还清醒就起身（见「刺激控制」一课）。');
    if(waso>30) tips.push('夜里清醒合计 '+waso+' 分钟，偏多——先排查酒精、咖啡因、噪音与呼吸问题。');
    if(effPct<85 && inBed>0) tips.push('睡眠效率 '+effPct+'%（睡着时间 ÷ 躺床时间），低于 85% 通常说明床躺得太久，可以把上床时间推后一点试试。');
    if(h<7) tips.push('实际睡着时长偏少。先固定起床时间、早上见光，把睡眠压力攒住，别提前上床。');
    else if(h>10) tips.push('睡得偏久。睡太久本身就可能是日间过度嗜睡的信号，若伴白天困倦建议就医评估。');
    else tips.push('时长落在常见建议区间。真正要看的是白天状态——不靠咖啡因也能清醒稳定，就说明够了。');
    m.innerHTML='<b>卧床 '+fmtDur(inBed)+' · 睡着 '+fmtDur(asleep)+'</b>'+tips.join(' ');
  };

  /* ============ 2. 压力自评 PSS-10（简化版，含反向计分） ============ */
  var PSS_ITEMS=[
    ['过去一个月，你有多常因为意外的事情而感到心烦？',0],
    ['你有多常觉得无法控制生活中重要的事情？',0],
    ['你有多常感到紧张、有压力？',0],
    ['你有多常对自己处理个人问题的能力充满信心？',1],
    ['你有多常觉得事情正按你的意愿发展？',1],
    ['你有多常发现自己无法应付所有必须做的事？',0],
    ['你有多常能够控制生活中令你不快的事情？',1],
    ['你有多常觉得自己掌控了局面？',1],
    ['你有多常因为无法控制的事情而生气？',0],
    ['你有多常觉得困难堆积太多、无法克服？',0]
  ];
  var PSS_OPTS=['从不','偶尔','有时','经常','总是'];
  SLP.toolPss=function(){
    return '<h3>📋 压力自评（PSS-10 简化版）</h3><p class="hint">评估近一个月"觉得生活有多不可控、多超负荷"。它测的是主观压力感受，不是测你有多惨，也不作为诊断依据。</p>'
    +'<div class="rangelist">'
    +PSS_ITEMS.map(function(it,i){
        return '<div class="pssrow"><span class="q">'+(i+1)+'. '+it[0]+'</span>'
        +'<select onchange="SLP.pssCalc()" data-i="'+i+'">'
        +PSS_OPTS.map(function(o,j){return '<option value="'+j+'">'+o+'</option>';}).join('')
        +'</select></div>';
      }).join('')
    +'</div>'
    +'<div class="scale" id="tPssScale">'
      +'<i style="background:var(--ok)"></i>'
      +'<i style="background:var(--warn)"></i>'
      +'<i style="background:var(--alert)"></i>'
    +'</div>'
    +'<div class="scale-lab"><span>0–13 低</span><span>14–26 中</span><span>27–40 高</span></div>'
    +'<div class="w-res"><div class="gauge"><div class="num" id="tPssV">—</div></div>'
    +'<div class="w-verdict" id="tPssMsg">逐题选择后自动计分。</div>'
    +'<button class="btn btn-g btn-sm" style="margin-left:auto" onclick="SLP.pssReset()">重填</button></div>';
  };
  SLP.pssCalc=function(){
    var sels=document.querySelectorAll('.pssrow select');
    if(!sels.length) return;
    var total=0, answered=0;
    sels.forEach(function(s){
      var i=+s.getAttribute('data-i'), raw=+s.value;
      answered++;
      total += PSS_ITEMS[i][1] ? (4-raw) : raw;     // 4/5/7/8 反向计分
    });
    var v=document.getElementById('tPssV'), m=document.getElementById('tPssMsg');
    var segs=document.querySelectorAll('#tPssScale i');
    segs.forEach(function(x){x.classList.remove('on')});
    SLP.progress.tool('pss',null,{score:total,at:Date.now(),answered:answered});
    var col,head,adv;
    if(total<=13){ col='var(--ok)'; segs[0].classList.add('on');
      head='压力水平偏低'; adv='你对生活的掌控感还不错。继续把睡眠、运动与恢复期守住——它们是压力的缓冲垫。'; }
    else if(total<=26){ col='var(--warn)'; segs[1].classList.add('on');
      head='压力水平中等'; adv='有不少事让你觉得失控或超负荷。建议挑一件最消耗你的事，做「问题聚焦」处理；同时补一项恢复动作（规律运动或睡前放松）。'; }
    else { col='var(--alert)'; segs[2].classList.add('on');
      head='压力水平偏高'; adv='主观压力已经相当高。优先减少暴露、增加恢复期，并认真考虑找人聊聊——心理咨询或员工援助计划（EAP）都是正常选择，别独自硬扛。'; }
    v.textContent=total;
    v.style.color=col;
    m.innerHTML='<b>'+head+'（'+total+' / 40）</b>'+adv+' 分数只用于自我观察变化趋势，请勿据此自我诊断。';
  };
  SLP.pssReset=function(){
    document.querySelectorAll('.pssrow select').forEach(function(s){ s.selectedIndex=0; });
    SLP.progress.tool('pss',null,{score:0,at:Date.now(),answered:0});
    document.getElementById('tPssV').textContent='—';
    var m=document.getElementById('tPssMsg'); m.textContent='逐题选择后自动计分。';
    document.querySelectorAll('#tPssScale i').forEach(function(x){x.classList.remove('on')});
  };

  /* ============ 3. 咖啡因代谢计算 ============ */
  SLP.toolCaf=function(){
    var t=SLP.progress.tool('caf')||{};
    return '<h3>☕ 咖啡因代谢计算</h3><p class="hint">咖啡因平均半衰期约 5 小时，个体差异可达 2–10 小时。算一算到你就寝时体内还剩多少。</p>'
    +'<div class="rangelist"><div class="rr">'
    +'<div class="field"><label>摄入量（mg，一杯美式约 150–200）</label><input id="tCafMg" type="number" min="0" max="1000" step="10" value="'+(t.mg==null?200:t.mg)+'" oninput="SLP.cafCalc()"></div>'
    +'<div class="field"><label>半衰期（小时）</label><select id="tCafHl" onchange="SLP.cafCalc()">'
      +['3','4','5','6','8'].map(function(x){return '<option value="'+x+'"'+(String(t.hl||'5')===x?' selected':'')+'>'+x+' 小时'+(x==='5'?'（平均）':(x==='3'?'（代谢快）':(x==='8'?'（代谢慢）':'')))+'</option>';}).join('')
    +'</select></div>'
    +'</div><div class="rr">'
    +'<div class="field"><label>摄入时间</label><input id="tCafAt" type="time" value="'+(t.at||'15:00')+'" oninput="SLP.cafCalc()"></div>'
    +'<div class="field"><label>预计就寝时间</label><input id="tCafBed" type="time" value="'+(t.bed||'23:00')+'" oninput="SLP.cafCalc()"></div>'
    +'</div></div>'
    +'<div class="scale" id="tCafScale">'
      +'<i style="background:var(--ok)"></i><i style="background:var(--warn)"></i>'
      +'<i style="background:var(--alert)"></i><i style="background:#8E2F25"></i>'
    +'</div>'
    +'<div class="scale-lab"><span>&lt;25mg 几乎无碍</span><span>25–50mg 轻微</span><span>50–100mg 明显</span><span>&gt;100mg 强烈</span></div>'
    +'<div class="w-res"><div class="gauge"><div class="num" id="tCafV">—</div></div><div class="w-verdict" id="tCafMsg">输入后自动计算。</div></div>';
  };
  SLP.cafCalc=function(){
    var mg=+document.getElementById('tCafMg').value||0;
    var hl=+document.getElementById('tCafHl').value||5;
    var at=toMin(document.getElementById('tCafAt').value);
    var bed=toMin(document.getElementById('tCafBed').value);
    var v=document.getElementById('tCafV'), m=document.getElementById('tCafMsg');
    var segs=document.querySelectorAll('#tCafScale i');
    segs.forEach(function(x){x.classList.remove('on')});
    if(at==null||bed==null){ v.textContent='—'; m.textContent='输入后自动计算。'; return; }
    SLP.progress.tool('caf',null,{mg:mg,hl:hl,at:document.getElementById('tCafAt').value,bed:document.getElementById('tCafBed').value});
    var mins=bed-at; if(mins<0) mins+=1440;   /* 跨零点则加一天 */
    var hrs=mins/60;
    var left=mg*Math.pow(0.5,hrs/hl);
    var col,idx,adv;
    if(left<25){ col='var(--ok)'; idx=0; adv='到就寝时残留很低，对入睡影响很小。'; }
    else if(left<50){ col='var(--warn)'; idx=1; adv='还有一定残留，敏感的人可能入睡变慢或夜间更易醒。'; }
    else if(left<100){ col='var(--alert)'; idx=2; adv='残留明显。即使你能睡着，深睡比例也往往被压低——试试把最后一杯提前到午后 2 点前。'; }
    else { col='#8E2F25'; idx=3; adv='残留很高，对睡眠影响强烈。建议大幅提前摄入时间，或直接减量。'; }
    segs[idx].classList.add('on');
    v.innerHTML=Math.round(left)+'<span style="font-size:.9rem;color:var(--note)"> mg 残留</span>';
    v.style.color=col;
    m.innerHTML='<b>距摄入 '+hrs.toFixed(1)+' 小时（约 '+(hrs/hl).toFixed(1)+' 个半衰期）</b>'+adv
      +' 记住：咖啡因只是把困意信号堵住，不偿还睡眠债；茶、可乐、能量饮料、奶茶和巧克力也都要算进去。';
  };

  /* ============ 4. 睡眠日记 ============ */
  SLP.toolDiary=function(){
    return '<h3>📈 睡眠日记</h3><p class="hint">每晚记一行，自动算睡眠效率并画趋势。连续记 1–2 周，就是看睡眠门诊最有用的材料。数据只存本机。</p>'
    +'<div class="rec-form">'
    +'<div class="field"><label>上床时间</label><input id="dBed" type="time" value="23:00"></div>'
    +'<div class="field"><label>起床时间</label><input id="dUp" type="time" value="07:00"></div>'
    +'<div class="field"><label>入睡用时（分钟）</label><input id="dLat" type="number" min="0" max="300" placeholder="30"></div>'
    +'<div class="field"><label>白天状态（1–5 分）</label><input id="dQ" type="number" min="1" max="5" placeholder="3"></div>'
    +'</div>'
    +'<button class="btn btn-p btn-sm" onclick="SLP.diaryAdd()">＋ 记一条</button>'
    +'<div class="chart-box"><svg id="dChart" viewBox="0 0 600 170" preserveAspectRatio="none"></svg>'
    +'<div class="scale-lab" id="dLegend"></div></div>'
    +'<div class="recent" id="dList"></div>';
  };
  SLP.diaryAdd=function(){
    var bed=document.getElementById('dBed').value, up=document.getElementById('dUp').value;
    var lat=+document.getElementById('dLat').value||0, q=+document.getElementById('dQ').value||0;
    if(!bed||!up){ alert('至少填上床与起床时间'); return; }
    var list=diaryList();
    list.unshift({t:Date.now(),bed:bed,up:up,lat:lat,q:q});
    if(list.length>200) list.length=200;
    SLP.progress.tool('diary',null,list);
    document.getElementById('dLat').value=document.getElementById('dQ').value='';
    SLP.diaryRender();
  };
  SLP.diaryDel=function(i){
    var list=diaryList(); list.splice(i,1); SLP.progress.tool('diary',null,list); SLP.diaryRender();
  };
  function diaryCalc(x){
    var b=toMin(x.bed), u=toMin(x.up);
    if(b==null||u==null) return null;
    var inBed=u-b; if(inBed<=0) inBed+=1440;
    var asleep=Math.max(0,inBed-(+x.lat||0));
    return {inBed:inBed,asleep:asleep,eff:inBed>0?asleep/inBed:0};
  }
  SLP.diaryRender=function(){
    var svg=document.getElementById('dChart'), lg=document.getElementById('dLegend'), li=document.getElementById('dList');
    if(!svg) return;
    var list=diaryList().filter(function(x){return diaryCalc(x)});
    var pts=list.slice(0,14).reverse();
    var W=600,H=170,pad=14;
    var vals=pts.map(function(x){return diaryCalc(x).asleep/60;});
    var min=vals.length?Math.min.apply(null,vals)-1:5, max=vals.length?Math.max.apply(null,vals)+1:10;
    if(max-min<2){ max=min+2; }
    var line='',dots='';
    pts.forEach(function(x,i){
      var c=diaryCalc(x), v=c.asleep/60;
      var px=pad+i*(W-2*pad)/Math.max(1,pts.length-1);
      var py=H-pad-(v-min)/(max-min)*(H-2*pad);
      line+=(line?' L':'M')+px.toFixed(1)+','+py.toFixed(1);
      dots+='<circle cx="'+px.toFixed(1)+'" cy="'+py.toFixed(1)+'" r="3.5" fill="var(--teal)"><title>'+new Date(x.t).toLocaleDateString()+' 约 '+v.toFixed(1)+' 小时</title></circle>';
    });
    svg.innerHTML=(line?'<path d="'+line+'" fill="none" stroke="var(--teal)" stroke-width="2.5" stroke-linejoin="round"/>':'<text x="300" y="88" text-anchor="middle" font-size="14" fill="var(--note)">还没有记录——先在上方记一条</text>')+dots;
    lg.innerHTML='<span>曲线 = 实际睡眠时长（近 '+pts.length+' 条）· 范围 '+min.toFixed(1)+'–'+max.toFixed(1)+' 小时</span>';
    var all=list.slice(0,14);
    var effAvg=all.length? all.reduce(function(s,x){return s+diaryCalc(x).eff;},0)/all.length : 0;
    var effTip=all.length? '<div class="ri"><b>近 '+all.length+' 天平均睡眠效率 '+(effAvg*100).toFixed(0)+'%</b><span>'+(effAvg>=0.85?'在健康区间':'低于 85%，可考虑把上床时间推后一点')+'</span></div>' : '';
    li.innerHTML=(all.length?effTip:'')+list.slice(0,20).map(function(x,i){
      var c=diaryCalc(x);
      return '<div class="ri"><span class="d">'+new Date(x.t).toLocaleDateString()+'</span>'
      +'<b>'+(c.asleep/60).toFixed(1)+' h</b>'
      +'<span>效率 '+(c.eff*100).toFixed(0)+'%</span>'
      +'<span>'+(x.q?('状态 '+x.q+'/5'):'')+'</span>'
      +'<button class="btn btn-g btn-sm" style="padding:2px 8px;font-size:.7rem" onclick="SLP.diaryDel('+i+')">删</button></div>';
    }).join('')||'<div class="ri"><span class="d">暂无记录</span></div>';
  };

  /* ============ 5. 4-7-8 呼吸引导 ============ */
  SLP.toolBreath=function(){
    var d=breathData();
    var todayN=(d.days||[]).filter(function(x){return x===todayKey();}).length;
    return '<h3>🌬 4-7-8 呼吸引导</h3><p class="hint">吸气 4 秒 → 屏息 7 秒 → 呼气 8 秒。呼气拉长会激活迷走神经、让心率降下来——躺下仍清醒时用它最合适。数字可按自己节奏微调，不适就停。</p>'
    +'<div class="breath-box">'
      +'<svg viewBox="0 0 240 240" class="breath-svg"><circle id="brRing" cx="120" cy="120" r="38" fill="none" stroke="var(--teal-soft)" stroke-width="10"/><circle id="brCircle" cx="120" cy="120" r="38" fill="var(--teal)" opacity="0.28"/>'
      +'<text id="brPhase" x="120" y="116" text-anchor="middle" font-size="20" font-weight="700" fill="var(--ink)">准备</text>'
      +'<text id="brSec" x="120" y="142" text-anchor="middle" font-size="14" fill="var(--note)">按开始</text></svg>'
      +'<div class="breath-side">'
        +'<div class="scale-lab" style="margin-bottom:8px"><span>今日已完成 <b id="brToday">'+todayN+'</b> 轮</span><span>建议 4 轮起</span></div>'
        +'<div class="btnrow" style="margin-top:0">'
          +'<button class="btn btn-p btn-sm" id="brBtn" onclick="SLP.breathToggle()">开始</button>'
          +'<button class="btn btn-g btn-sm" onclick="SLP.breathReset()">清零今日</button>'
        +'</div>'
        +'<p class="hint" style="margin:14px 0 0">做完一轮会记一次打卡。做完 4 轮若仍清醒，别在床上继续练——起身到别的房间做点安静的事，有睡意再回床（刺激控制）。</p>'
      +'</div>'
    +'</div>';
  };
  SLP._br={timer:null,phase:'idle',t:0,round:0};
  SLP.breathToggle=function(){
    var st=SLP._br, btn=document.getElementById('brBtn');
    if(st.timer){ SLP.breathStop(); if(btn) btn.textContent='开始'; return; }
    st.phase='inhale'; st.t=0;
    if(btn) { btn.textContent='停止'; btn.classList.remove('btn-p'); btn.classList.add('btn-g'); }
    st.timer=setInterval(SLP._brTick,100);
  };
  SLP.breathStop=function(){
    var st=SLP._br;
    if(st.timer){ clearInterval(st.timer); st.timer=null; }
    st.phase='idle';
    var b=document.getElementById('brBtn'); if(b){ b.textContent='开始'; b.classList.add('btn-p'); b.classList.remove('btn-g'); }
    var c=document.getElementById('brCircle'); if(c) c.setAttribute('r','38');
    var p=document.getElementById('brPhase'); if(p) p.textContent='准备';
    var s=document.getElementById('brSec'); if(s) s.textContent='按开始';
  };
  SLP._brTick=function(){
    var st=SLP._br;
    /* 离开工具页后自动停表，避免后台空转报错 */
    if(!document.getElementById('brCircle')){ if(st.timer){clearInterval(st.timer); st.timer=null;} st.phase='idle'; return; }
    var DUR={inhale:4,hold:7,exhale:8};
    st.t+=0.1;
    var dur=DUR[st.phase]||4;
    var p=document.getElementById('brPhase'), s=document.getElementById('brSec'), c=document.getElementById('brCircle');
    var prog=Math.min(1,st.t/dur);
    var r;
    if(st.phase==='inhale'){ r=38+prog*40; p.textContent='吸气'; }
    else if(st.phase==='hold'){ r=78; p.textContent='屏息'; }
    else { r=78-prog*40; p.textContent='呼气'; }
    c.setAttribute('r',r.toFixed(1));
    s.textContent=Math.max(0,Math.ceil(dur-st.t))+' 秒';
    if(st.t>=dur){
      st.t=0;
      if(st.phase==='inhale') st.phase='hold';
      else if(st.phase==='hold') st.phase='exhale';
      else { st.phase='inhale'; SLP.breathMark(); }
    }
  };
  SLP.breathMark=function(){
    var d=breathData();
    if(!Array.isArray(d.days)) d.days=[];
    d.days.push(todayKey());
    if(d.days.length>1000) d.days=d.days.slice(-1000);
    d.rounds=(d.rounds||0)+1;
    SLP.progress.tool('breath',null,d);
    var n=(d.days||[]).filter(function(x){return x===todayKey();}).length;
    var el=document.getElementById('brToday'); if(el) el.textContent=n;
  };
  SLP.breathReset=function(){
    var d=breathData();
    d.days=(d.days||[]).filter(function(x){return x!==todayKey();});
    SLP.progress.tool('breath',null,d);
    var el=document.getElementById('brToday'); if(el) el.textContent='0';
  };

  /* 工具页渲染后初始化 */
  SLP.afterToolsRender=function(){
    SLP.durCalc(); SLP.cafCalc(); SLP.diaryRender();
  };
})();
