/* 慢病管理站 · sync —— GitHub 进度同步(可选),与全站规范实现一致
   token 仅存本机 localStorage['CDC.sync.v1'],默认路径 progress/cdc.json */
(function(){
  var NS='CDC', CFG_KEY=NS+'.sync.v1';
  var DEBOUNCE=4000, timer=null, cfg=null;

  function readCfg(){
    if(cfg) return cfg;
    try{ cfg=JSON.parse(localStorage.getItem(CFG_KEY)||'null')||{repo:'',branch:'main',token:'',path:'progress/cdc.json',auto:true}; }
    catch(e){ cfg={repo:'',branch:'main',token:'',path:'progress/cdc.json',auto:true}; }
    if(!cfg.path) cfg.path='progress/cdc.json';
    return cfg;
  }
  function writeCfg(){ try{ localStorage.setItem(CFG_KEY,JSON.stringify(cfg)); }catch(e){} }
  function enabled(){ var c=readCfg(); return !!(c.repo&&c.token); }
  function api(url,opts){
    var c=readCfg();
    opts=opts||{};
    opts.headers=Object.assign({
      'Authorization':'Bearer '+c.token,
      'Accept':'application/vnd.github+json',
      'Content-Type':'application/json'
    },opts.headers||{});
    return fetch(url,opts);
  }
  function msg(t,ok){
    var el=document.getElementById('syMsg');
    if(el){ el.textContent=t; el.className='setmsg '+(ok?'ok':'err'); }
    console.log('[sync]',t);
  }

  async function pull(){
    if(!enabled()) return {status:'disabled'};
    var c=readCfg();
    try{
      var r=await api('https://api.github.com/repos/'+c.repo+'/contents/'+c.path+'?ref='+encodeURIComponent(c.branch||'main'));
      if(r.status===404) return {status:'empty'};
      if(!r.ok) throw new Error('HTTP '+r.status);
      var j=await r.json();
      var txt=''; try{ txt=decodeURIComponent(escape(atob((j.content||'').replace(/\s/g,'')))); }catch(e){}
      var data=JSON.parse(txt||'{}');
      CDC.progress.merge(data);
      return {status:'merged',data:data};
    }catch(e){ msg('拉取失败: '+e.message,false); return {status:'error',error:e.message}; }
  }

  async function push(){
    if(!enabled()) return {status:'disabled'};
    var c=readCfg();
    try{
      var sha=null;
      var r=await api('https://api.github.com/repos/'+c.repo+'/contents/'+c.path+'?ref='+encodeURIComponent(c.branch||'main'));
      if(r.ok){ var j=await r.json(); sha=j.sha; }
      else if(r.status!==404) throw new Error('HTTP '+r.status);
      var body=btoa(unescape(encodeURIComponent(CDC.progress.exportJson())));
      var pr=await api('https://api.github.com/repos/'+c.repo+'/contents/'+c.path,{
        method:'PUT',
        body:JSON.stringify({message:'chore(cdc): sync progress',content:body,branch:c.branch||'main',sha:sha})
      });
      if(!pr.ok){ var ej=await pr.json().catch(function(){return {}}); throw new Error('HTTP '+pr.status+(ej.message?': '+ej.message:'')); }
      return {status:'pushed'};
    }catch(e){ msg('推送失败: '+e.message,false); return {status:'error',error:e.message}; }
  }

  function schedulePush(){
    if(!enabled()) return;
    var c=readCfg(); if(!c.auto) return;
    clearTimeout(timer);
    timer=setTimeout(function(){ push().then(function(r){ if(r.status==='pushed') msg('已自动同步到 GitHub ✓',true); }); },DEBOUNCE);
  }

  window.CDC=window.CDC||{};
  CDC.sync={
    boot:function(){ if(enabled()){ pull(); } },
    pull:pull, push:push, schedulePush:schedulePush,
    save:function(repo,branch,token,path,auto){
      var c=readCfg();
      c.repo=(repo||'').trim(); c.branch=(branch||'main').trim()||'main';
      c.token=(token||'').trim(); c.path=(path||'').trim()||'progress/cdc.json'; c.auto=!!auto;
      writeCfg(); cfg=c; return c;
    },
    getCfg:readCfg,
    clear:function(){ try{ localStorage.removeItem(CFG_KEY); }catch(e){} cfg=null; }
  };
})();
