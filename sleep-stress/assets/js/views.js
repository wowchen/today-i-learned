/* 睡眠与压力管理站 · views —— 视图共享组件与进度操作 */
(function(){
  window.SLP=window.SLP||{};

  function esc(s){ return String(s==null?'':s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;'); }
  SLP.esc=esc;   /* 供 views-tools 等模块复用 */

  /* ===== 共享小部件 ===== */
  /* 呼吸波形（首页 hero）：一条缓慢起伏的正弦 */
  SLP.waveSVG=function(){
    return '<svg class="wave" viewBox="0 0 300 44" preserveAspectRatio="none" aria-hidden="true">'
    +'<path d="M0,22 C12,8 24,8 36,22 S60,36 72,22 S96,8 108,22 S132,36 144,22 S168,8 180,22 S204,36 216,22 S240,8 252,22 S276,36 288,22 L300,22" fill="none" stroke="var(--teal)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
  };
  SLP.footer=function(){
    return '<footer><b>睡眠与压力管理站 · Sleep &amp; Stress</b> · 纯静态 · 离线可用<br>'
    +'<div class="med">⚠️ 本站内容仅为健康与心理科普，不能替代医生的诊断与治疗建议。量表结果仅供自我观察，不作为诊断依据。如遇持续失眠、睡眠中呼吸停顿或情绪危机，请及时就医。数据仅存于你的浏览器本机。</div></footer>';
  };
  SLP.seg=function(k,html){
    return '<div class="seg"><span class="k">'+esc(k)+'</span><p>'+html+'</p></div>';
  };
  SLP.modCard=function(m){
    var pct=Math.round(SLP.progress.moduleProg(m.id,m.lessons)*100);
    return '<button class="mod" onclick="SLP.nav(\'#/module?id='+m.id+'\')">'
    +'<div class="ic" style="background:'+m.soft+'">'+m.icon+'</div>'
    +'<h3>'+esc(m.name)+'</h3><p>'+esc(m.desc)+'</p>'
    +'<div class="meta"><span>'+m.lessons.length+' 课</span><span>约 '+m.lessons.length*5+' 分钟</span><span>'+(pct>0?pct+'% 完成':'未开始')+'</span></div>'
    +'<div class="prog"><i style="width:'+pct+'%"></i></div></button>';
  };
  SLP.lessonRow=function(l,i,m){
    var done=SLP.progress.isDone(l.id);
    return '<button class="lrow'+(done?' done':'')+'" onclick="SLP.nav(\'#/lesson?id='+l.id+'\')">'
    +'<span class="no">'+(done?'✓':(i+1))+'</span>'
    +'<h4>'+esc(l.title)+'</h4>'
    +'<span class="chk">'+(done?'⭐':'☆')+'</span></button>';
  };
  SLP.noticeCard=function(n){
    var cls=n.kind==='重要'?'tag-bad':n.kind==='筛查'?'tag-warn':n.kind==='新课'?'tag-idle':n.kind==='工具'?'tag-ok':'tag-idle';
    var body=typeof n.body==='string'?n.body:'';
    return '<div class="ntc"><div class="top"><span class="tag '+cls+'">'+esc(n.kind||'通知')+'</span><span class="date">'+esc(n.date)+'</span></div>'
    +'<h4>'+esc(n.title)+'</h4><p>'+esc(body)+'</p>'
    +(n.link?'<div style="margin-top:12px"><button class="btn btn-g btn-sm" onclick="SLP.nav(\''+n.link+'\')">'+esc(n.cta||'查看')+' →</button></div>':'')
    +'</div>';
  };
  SLP.progressSpark=function(){
    /* 近 14 天 activity 迷你柱状图 */
    var days=[],max=1;
    for(var i=13;i>=0;i--){ var d=new Date(); d.setDate(d.getDate()-i);
      var k=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
      var v=(SLP.progress.get().activity||{})[k]||0; max=Math.max(max,v); days.push(v);
    }
    var bars=days.map(function(v,i){
      var h=Math.round(v/max*46)+2;
      return '<rect x="'+(i*21+2)+'" y="'+(52-h)+'" width="14" height="'+h+'" rx="3" fill="var(--teal)" opacity="'+(v?0.9:0.18)+'"/>';
    }).join('');
    return '<svg viewBox="0 0 300 56" style="width:100%;height:56px;display:block;margin-top:8px">'+bars+'</svg>';
  };
  SLP.streak=function(){
    var s=SLP.progress.get().activity||{},n=0;
    for(var i=0;i<365;i++){ var d=new Date(); d.setDate(d.getDate()-i);
      var k=d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0');
      if(s[k]) n++; else if(i>0) break;
    }
    return n;
  };
  SLP.firstLessonHash=function(){
    var m=(SLP.modules||[]).find(function(m){return m.lessons.some(function(l){return !SLP.progress.isDone(l.id)})}) || (SLP.modules||[])[0];
    var l=m&&m.lessons.find(function(l){return !SLP.progress.isDone(l.id)}) || (m&&m.lessons[0]);
    return '#/lesson?id='+(l?l.id:'');
  };

  /* ===== 测验 ===== */
  SLP.pick=function(btn,lid,answer,i){
    var box=btn.parentNode, opts=box.querySelectorAll('.opt');
    if(opts[0].disabled) return;
    opts.forEach(function(o){o.disabled=true;o.classList.remove('right','wrong')});
    if(i===answer){ btn.classList.add('right'); } else { btn.classList.add('wrong'); opts[answer].classList.add('right'); }
    SLP.progress.recordQuiz(lid,i===answer);
    var why=box.querySelector('.why'); if(why) why.classList.add('show');
    /* 注意：答题不自动标记课程完成——由页面底部"标记已学"按钮控制 */
  };
  SLP.markDone=function(btn,id){
    if(SLP.progress.isDone(id)) return;
    SLP.progress.setDone(id,true);
    btn.textContent='已学 ✓'; btn.disabled=true;
    btn.classList.remove('btn-p'); btn.classList.add('btn-g');
  };

  /* ===== 设置页：导入导出 / 重置 / sync ===== */
  SLP.exportProgress=function(){
    var blob=new Blob([SLP.progress.exportJson()],{type:'application/json'});
    var a=document.createElement('a'); a.href=URL.createObjectURL(blob);
    a.download='slp-progress-'+new Date().toISOString().slice(0,10)+'.json'; a.click();
    URL.revokeObjectURL(a.href);
  };
  SLP.importProgressFile=function(input){
    var f=input.files&&input.files[0]; if(!f) return;
    var r=new FileReader();
    r.onload=function(){
      var ok=SLP.progress.importJson(r.result);
      var el=input.closest('.setcard').querySelector('.btnrow');
      var tip=document.createElement('div'); tip.className='setmsg '+(ok?'ok':'err'); tip.style.flexBasis='100%';
      tip.textContent=ok?'导入成功，进度已合并 ✓':'导入失败：不是有效的进度 JSON';
      el.after(tip);
    };
    r.readAsText(f);
  };
  SLP.confirmReset=function(){
    if(confirm('确定清除本机全部学习进度与工具数据吗？此操作不可恢复（建议先导出备份）。')){
      SLP.progress.resetAll(); alert('已清除。'); location.reload();
    }
  };
  SLP.saveSync=function(){
    var c=SLP.sync.save(
      document.getElementById('syRepo').value,
      document.getElementById('syBranch').value,
      document.getElementById('syToken').value,
      document.getElementById('syPath').value,
      document.getElementById('syAuto').checked
    );
    var el=document.getElementById('syMsg');
    if(!c.repo||!c.token){ el.textContent='仓库和 Token 都填了才会同步;当前仅本机保存。'; el.className='setmsg'; return; }
    el.textContent='保存中,正在测试连接…'; el.className='setmsg';
    SLP.sync.push().then(function(r){
      if(r.status==='pushed'){ el.textContent='保存并推送成功 ✓ 两台设备填同一组仓库/Token 即可互相同步。'; el.className='setmsg ok'; }
    });
  };
  SLP.pullOnce=function(){
    var el=document.getElementById('syMsg');
    el.textContent='拉取中…'; el.className='setmsg';
    SLP.sync.pull().then(function(r){
      if(r.status==='merged'){ el.textContent='拉取并合并成功 ✓'; el.className='setmsg ok'; }
      else if(r.status==='empty'){ el.textContent='远端还没有进度文件(先在另一台设备推送一次)。'; el.className='setmsg'; }
      else if(r.status==='disabled'){ el.textContent='请先填写仓库与 Token。'; el.className='setmsg err'; }
    });
  };
  SLP.clearSync=function(){
    if(confirm('确定清除本机保存的 GitHub 授权(Token)吗?')){ SLP.sync.clear(); location.reload(); }
  };

  SLP.q=function(k){
    var h=location.hash.split('?')[1]||'';
    var m=new RegExp('(?:^|&)'+k+'=([^&]*)').exec(h);
    return m?decodeURIComponent(m[1]):'';
  };

  /* ===== 术语气泡（移动端可点，事件委托） ===== */
  (function(){
    var pop=null;
    function ensurePop(){
      if(pop) return pop;
      pop=document.createElement('div'); pop.className='termpop'; pop.id='termPop';
      document.body.appendChild(pop); return pop;
    }
    document.addEventListener('click',function(e){
      var kw=e.target.closest ? e.target.closest('.kw[data-term]') : null;
      var p=ensurePop();
      if(kw){
        var slug=kw.getAttribute('data-term');
        var t=(SLP.terms||[]).filter(function(x){return x.id===slug})[0];
        if(!t) return;
        p.innerHTML='<b>'+t.cn+'</b>'+t.def;
        var r=kw.getBoundingClientRect();
        p.style.left=Math.max(8,Math.min(window.innerWidth-248,r.left))+'px';
        p.style.top=(r.bottom+8+window.scrollY)+'px';
        p.classList.add('show');
      } else if(!p.contains(e.target)){
        p.classList.remove('show');
      }
    });
  })();
})();
