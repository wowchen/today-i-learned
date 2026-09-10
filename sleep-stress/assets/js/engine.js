/* 睡眠与压力管理站 · engine —— hash 路由 + 启动 */
(function(){
  var ROUTES={
    '':renderHome, '#/':renderHome, '#/home':renderHome,
    '#/module':renderModule,
    '#/lesson':renderLesson,
    '#/notices':renderNotices,
    '#/tools':renderTools,
    '#/settings':renderSettings
  };

  function nav(hash){ location.hash=hash; }
  function go(){ window.scrollTo(0,0); }

  /* ---- Home ---- */
  function renderHome(){
    var mods=SLP.modules||[], totalL=0; mods.forEach(function(m){ totalL+=m.lessons.length; });
    var doneN=0; mods.forEach(function(m){ m.lessons.forEach(function(l){ if(SLP.progress.isDone(l.id)) doneN++; }); });
    var pct=totalL? Math.round(doneN/totalL*100):0;

    document.getElementById('view').innerHTML=
    '<div class="wrap">'
    +'<div class="hero"><div>'
      +'<span class="pill"><span class="dot"></span>睡眠 · 压力 · 身心节律</span>'
      +'<h1>把睡眠和压力<br>讲成<em>大白话</em></h1>'
      +SLP.waveSVG()
      +'<p class="lede">不背指南原文，不贩卖焦虑。每节课 5 分钟，讲透一个知识点——睡眠周期怎么走、为什么凌晨会醒、皮质醇在忙什么、压力大时该做什么，一篇说明白。内容仅供健康与心理科普，不替代诊疗。</p>'
      +'<div class="hero-actions">'
        +'<button class="btn btn-p" onclick="SLP.nav(\''+SLP.firstLessonHash()+'\')">开始学习 →</button>'
        +'<button class="btn btn-g" onclick="SLP.nav(\'#/notices\')">今日通知</button>'
      +'</div>'
    +'</div>'
    +'<div class="vital">'
      +'<div class="vh"><b>学习进度</b><span class="tag '+(pct>=60?'tag-ok':pct>0?'tag-warn':'tag-idle')+'">'+(pct>=60?'稳步推进':pct>0?'已开始':'待开始')+' · '+pct+'%</span></div>'
      +'<div class="bp-row">'
        +'<div class="bp"><div class="lab">已完成课程</div><div class="num">'+doneN+'</div></div>'
        +'<div class="bp"><div class="lab">总课程数</div><div class="num">'+totalL+'</div></div>'
      +'</div>'
      +SLP.progressSpark()
      +'<div class="foot">连续学习 <b>'+SLP.streak()+'</b> 天 · 进度可同步到 GitHub（设置页配置）</div>'
    +'</div></div>'

    +'<div class="strip">'
      +'<div class="stat"><div class="n"><i>'+(SLP.META.nmods||8)+'</i> 大模块</div><div class="t">睡眠 → 压力 → 情绪 → 求助</div></div>'
      +'<div class="stat"><div class="n"><i>'+totalL+'</i> 节微课</div><div class="t">每节 5 分钟 · 五段式讲透</div></div>'
      +'<div class="stat"><div class="n"><i>'+(SLP.TOOL_LIST.length)+'</i> 个工具</div><div class="t">作息 / 压力 / 咖啡因 / 日记 / 呼吸</div></div>'
      +'<div class="stat"><div class="n"><i>0</i> 广告</div><div class="t">纯静态离线 · 不替代诊疗</div></div>'
    +'</div>'

    +'<section><div class="shead"><div><h2>课程模块</h2><p>先看懂睡眠与压力的机制，再学方法，最后知道什么时候该求助</p></div>'
      +'<a onclick="SLP.nav(\'#/tools\')">互动工具 →</a></div>'
      +'<div class="grid">'+mods.map(SLP.modCard).join('')+'</div></section>'

    +'<section><div class="shead"><div><h2>最新通知</h2><p>红旗信号提醒 · 工具用法 · 新课上架</p></div>'
      +'<a onclick="SLP.nav(\'#/notices\')">全部通知 →</a></div>'
      +'<div class="ntc-grid">'+(SLP.notices||[]).slice(0,4).map(SLP.noticeCard).join('')+'</div></section>'

    +SLP.footer()
    +'</div>';
    go();
  }

  /* ---- Module ---- */
  function renderModule(){
    var id=(SLP.q('id')||''), m=(SLP.modules||[]).find(function(x){return x.id===id;});
    if(!m){ nav('#/home'); return; }
    var done=m.lessons.filter(function(l){return SLP.progress.isDone(l.id)}).length;
    document.getElementById('view').innerHTML=
    '<div class="wrap">'
    +'<div class="crumbbar"><a onclick="SLP.nav(\'#/home\')">首页</a> / <b>'+m.name+'</b></div>'
    +'<div class="module-hero"><div class="ic" style="background:'+m.soft+'">'+m.icon+'</div>'
      +'<div><h1>'+m.name+'</h1><div class="d">'+m.desc+'</div>'
      +'<div class="d" style="margin-top:8px"><span class="tag '+(done===m.lessons.length&&m.lessons.length?'tag-ok':'tag-idle')+'">'+done+' / '+m.lessons.length+' 节完成</span></div></div></div>'
    +'<section><div class="lgrid">'+m.lessons.map(function(l,i){return SLP.lessonRow(l,i,m)}).join('')+'</div></section>'
    +SLP.footer()+'</div>';
    go();
  }

  /* ---- Lesson ---- */
  function renderLesson(){
    var id=SLP.q('id')||'';
    var hit=null,hm=null;
    (SLP.modules||[]).forEach(function(m){ m.lessons.forEach(function(l){ if(l.id===id){hit=l;hm=m;} }); });
    if(!hit){ nav('#/home'); return; }
    hit=Object.assign({},hit,SLP.lessonData[id]||{});   // 合并正文与 quiz（正文存 lessonData）
    var flat=[]; (SLP.modules||[]).forEach(function(m){ m.lessons.forEach(function(l){ flat.push({l:l,m:m}); }); });
    var idx=flat.findIndex(function(x){return x.l.id===id});
    var prev=flat[idx-1], next=flat[idx+1];

    document.getElementById('view').innerHTML=
    '<div class="wrap">'
    +'<div class="crumbbar"><a onclick="SLP.nav(\'#/home\')">首页</a> / <a onclick="SLP.nav(\'#/module?id='+hm.id+'\')">'+hm.name+'</a> / <b>第 '+(idx+1-flat.findIndex(function(x){return x.m.id===hm.id}))+' 课</b></div>'
    +'<div class="lesson">'
      +'<div class="crumb">'+hm.icon+' '+hm.name+' · '+hit.id+'</div>'
      +'<h2>'+hit.title+'</h2>'
      +'<p class="sub">'+(hit.sub||'读完本课约 5 分钟')+'</p>'
      +SLP.seg('一句话',hit.one)
      +SLP.seg('讲透',hit.deep)
      +SLP.seg('别绕晕',hit.pit)
      +'<div class="quiz">'
        +'<p class="q">想一想：'+hit.quiz.q+'</p>'
        +hit.quiz.opts.map(function(o,i){return '<button class="opt" data-i="'+i+'" onclick="SLP.pick(this,\''+hit.id+'\','+hit.quiz.answer+','+i+')">'+String.fromCharCode(65+i)+'. '+o+'</button>';}).join('')
        +'<div class="why" id="quizWhy">'+hit.quiz.why+'</div>'
      +'</div>'
      +(hit.next?'<div class="seg" style="margin-top:18px;margin-bottom:0"><span class="k">接着读</span><p>'+hit.next+'</p></div>':'')
      +'<div style="text-align:center;margin-top:22px">'
        +(SLP.progress.isDone(id)
          ?'<button class="btn btn-g btn-sm" disabled>已学 ✓</button>'
          :'<button class="btn btn-p btn-sm" onclick="SLP.markDone(this,\''+hit.id+'\')">✓ 标记已学</button>')
      +'</div>'
      +'<div class="nextnav">'
        +(prev?'<button class="btn btn-g btn-sm" onclick="SLP.nav(\'#/lesson?id='+prev.l.id+'\')">← '+prev.l.title+'</button>':'<span></span>')
        +(next?'<button class="btn btn-p btn-sm" onclick="SLP.nav(\'#/lesson?id='+next.l.id+'\')">'+next.l.title+' →</button>':'<span></span>')
      +'</div>'
    +'</div>'
    +SLP.footer()+'</div>';
    go();
  }

  /* ---- Notices ---- */
  function renderNotices(){
    var ns=SLP.notices||[];
    document.getElementById('view').innerHTML=
    '<div class="wrap">'
    +'<div class="crumbbar"><a onclick="SLP.nav(\'#/home\')">首页</a> / <b>健康通知</b></div>'
    +'<section style="padding-top:24px"><div class="shead"><div><h2>健康通知</h2><p>红旗信号 · 工具用法 · 课程提醒</p></div></div>'
    +'<div class="ntc-grid">'+ns.map(SLP.noticeCard).join('')+'</div></section>'
    +SLP.footer()+'</div>';
    go();
  }

  /* ---- Tools ---- */
  function renderTools(){
    document.getElementById('view').innerHTML=
    '<div class="wrap">'
    +'<div class="crumbbar"><a onclick="SLP.nav(\'#/home\')">首页</a> / <b>互动工具</b></div>'
    +'<section style="padding-top:24px"><div class="shead"><div><h2>互动工具</h2><p>数据只存在你的浏览器本机，不上传、不共享；结果仅供自我观察</p></div></div>'
    +'<div class="tools-grid">'
      +'<div class="toolcard">'+SLP.toolDur()+'</div>'
      +'<div class="toolcard">'+SLP.toolPss()+'</div>'
      +'<div class="toolcard">'+SLP.toolCaf()+'</div>'
      +'<div class="toolcard">'+SLP.toolDiary()+'</div>'
      +'<div class="toolcard full">'+SLP.toolBreath()+'</div>'
    +'</div></section>'
    +SLP.footer()+'</div>';
    SLP.afterToolsRender();
    go();
  }

  /* ---- Settings ---- */
  function renderSettings(){
    var c=SLP.sync.getCfg();
    document.getElementById('view').innerHTML=
    '<div class="wrap">'
    +'<div class="crumbbar"><a onclick="SLP.nav(\'#/home\')">首页</a> / <b>设置</b></div>'
    +'<section style="padding-top:24px"><div class="shead"><div><h2>设置</h2><p>外观、数据与跨设备同步</p></div></div>'
    +'<div class="setgrid">'
      +'<div class="setcard"><h3>🎨 外观</h3><p class="d">跟随系统或手动切换深浅主题。</p>'
        +'<div class="btnrow"><button class="btn btn-g btn-sm" onclick="SLP.toggleTheme();location.reload()">切换深色 / 浅色</button></div></div>'
      +'<div class="setcard"><h3>💾 本地数据</h3><p class="d">进度与工具数据保存在本机浏览器。可导出 JSON 备份或从文件恢复。</p>'
        +'<div class="btnrow">'
        +'<button class="btn btn-g btn-sm" onclick="SLP.exportProgress()">导出进度</button>'
        +'<button class="btn btn-g btn-sm" onclick="document.getElementById(\'impFile\').click()">导入进度</button>'
        +'<input type="file" id="impFile" accept=".json" class="hidden" onchange="SLP.importProgressFile(this)">'
        +'</div>'
        +'<div class="btnrow"><button class="btn btn-g btn-sm" style="color:var(--alert);border-color:var(--alert-soft)" onclick="SLP.confirmReset()">清除全部进度</button></div></div>'
      +'<div class="setcard" style="grid-column:1/-1"><h3>☁️ GitHub 进度同步（可选）</h3>'
        +'<p class="d">用一个你的 private 仓库存进度（如 <code>you/grid-progress</code>）。fine-grained PAT 只授权该仓库 Contents 读写、建议设 90 天过期。token 只存在本机浏览器，不会进入站点代码仓库。不配置则进度仅存本机，不影响学习。</p>'
        +'<div class="rangelist"><div class="rr">'
        +'<div><label>仓库（owner/repo）</label><input id="syRepo" value="'+(c.repo||'')+'" placeholder="wowchen/grid-progress"></div>'
        +'<div><label>分支</label><input id="syBranch" value="'+(c.branch||'main')+'" placeholder="main"></div>'
        +'</div><div class="rr">'
        +'<div><label>Token（仅本机保存）</label><input id="syToken" type="password" value="'+(c.token||'')+'" placeholder="github_pat_…"></div>'
        +'<div><label>文件路径</label><input id="syPath" value="'+(c.path||'progress/slp.json')+'"></div>'
        +'</div></div>'
        +'<label style="display:flex;align-items:center;gap:8px;margin-top:14px;cursor:pointer"><input type="checkbox" id="syAuto" '+(c.auto?'checked':'')+' style="accent-color:var(--teal);width:16px;height:16px"> 自动同步（学完一课 4 秒后自动推送）</label>'
        +'<div class="btnrow">'
          +'<button class="btn btn-p btn-sm" onclick="SLP.saveSync()">保存并立即同步</button>'
          +'<button class="btn btn-g btn-sm" onclick="SLP.pullOnce()">只拉取一次</button>'
          +'<button class="btn btn-g btn-sm" style="color:var(--alert)" onclick="SLP.clearSync()">清除本机授权</button>'
        +'</div>'
        +'<div class="setmsg" id="syMsg"></div></div>'
    +'</div></section>'
    +SLP.footer()+'</div>';
    go();
  }

  window.SLP=window.SLP||{};
  SLP.nav=nav;
  SLP.renderHome=renderHome;

  function router(){
    var h=location.hash||'#/';
    (ROUTES[h.split('?')[0]]||renderHome)();
    /* nav active state */
    var page=h.split('?')[0];
    document.querySelectorAll('.topnav a').forEach(function(a){
      a.classList.toggle('on',a.getAttribute('data-route')===(page==='#/'||page===''?'#/home':page));
    });
  }
  SLP.boot=function(){
    SLP.initTheme();
    document.querySelectorAll('.topnav a').forEach(function(a){
      a.addEventListener('click',function(e){ e.preventDefault(); nav(a.getAttribute('data-route')); });
    });
    router();
    if(SLP.sync) SLP.sync.boot();
    window.addEventListener('hashchange',router);
  };
})();
