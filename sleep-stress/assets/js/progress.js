/* 睡眠与压力管理站 · progress —— localStorage 进度（单例形态，便于 sync 移植） */
(function(){
  var NS='SLP', KEY=NS+'.progress.v1';
  var st=null;

  function load(){
    if(st) return st;
    try{ st=JSON.parse(localStorage.getItem(KEY)||'{}'); }catch(e){ st={}; }
    if(!st.lessons) st.lessons={};      // {lessonId:{done:true,at:ts}}
    if(!st.activity) st.activity={};    // {day:count} day=YYYY-MM-DD
    if(!st.quizzes) st.quizzes={};      // {lessonId:{right:n,wrong:n}}
    if(!st.tools) st.tools={};          // {toolId:{...}}
    if(!st.prefs) st.prefs={};          // 不参与同步
    st.updatedAt=st.updatedAt||0;
    return st;
  }
  function save(){
    var s=load(); s.updatedAt=Date.now();
    try{ localStorage.setItem(KEY,JSON.stringify(s)); }catch(e){}
    if(window.SLP&&SLP.sync) SLP.sync.schedulePush();
    if(window.SLP&&SLP.onProgressChange) SLP.onProgressChange();
  }
  function today(){ var d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }

  window.SLP=window.SLP||{};
  window.SLP.progress={
    get:load,
    isDone:function(id){ return !!load().lessons[id]; },
    setDone:function(id,done){
      var s=load();
      if(done){ s.lessons[id]={done:true,at:Date.now()}; s.activity[today()]=(s.activity[today()]||0)+1; }
      else { delete s.lessons[id]; }
      save();
    },
    recordQuiz:function(id,right){
      var s=load(); var q=s.quizzes[id]||(s.quizzes[id]={right:0,wrong:0});
      if(right) q.right++; else q.wrong++;
      save();
    },
    tool:function(tid,key,val){
      var s=load();
      if(key===undefined && val===undefined) return s.tools[tid];      // 读整个
      if(key===null){ s.tools[tid]=val; save(); return val; }          // 写整个(覆盖)
      var t=s.tools[tid]||(s.tools[tid]={});
      if(val===undefined) return t[key];                               // 读单项
      t[key]=val; save(); return val;                                  // 写单项
    },
    moduleProg:function(modId,lessonIds){
      var done=0; lessonIds.forEach(function(id){ if(load().lessons[id]) done++; });
      return lessonIds.length? done/lessonIds.length : 0;
    },
    exportJson:function(){ return JSON.stringify(load(),null,2); },
    importJson:function(json){
      var s=load(), inc;
      try{ inc=JSON.parse(json); }catch(e){ return false; }
      if(!inc||typeof inc!=='object') return false;
      Object.keys(inc).forEach(function(k){
        if(k==='prefs') return;
        if(k==='lessons'||k==='activity'||k==='quizzes'||k==='tools'){
          if(!s[k]) s[k]={};
          var src=inc[k]||{};
          Object.keys(src).forEach(function(id){ s[k][id]=src[id]; });
        } else if(k==='updatedAt'){ s.updatedAt=Math.max(s.updatedAt||0,+src||0); }
      });
      save(); return true;
    },
    merge:function(remote){
      /* 逐条合并：每条记录比时间戳，新覆盖旧（activity 取 max）—— 两台设备同时学习不丢数据 */
      var s=load(); if(!remote||typeof remote!=='object') return;
      ['lessons','activity','quizzes','tools'].forEach(function(k){
        var src=remote[k]||{}; if(!s[k]) s[k]={};
        Object.keys(src).forEach(function(id){
          var a=s[k][id], b=src[id];
          if(k==='activity'){
            var av=(typeof a==='number')?a:0, bv=(typeof b==='number')?b:0;
            if(bv>av) s[k][id]=bv;
          } else if(a===undefined || a===null){
            s[k][id]=b;
          } else if(typeof a==='object' && typeof b==='object'){
            var at=a.at||a.updatedAt||0, bt=b.at||b.updatedAt||0;
            if(bt>at) s[k][id]=b;
          }
        });
      });
      var rn=+remote.updatedAt||0, ln=+s.updatedAt||0;
      if(rn>ln) s.updatedAt=rn;
      save();
    },
    resetAll:function(){
      try{ localStorage.removeItem(KEY); }catch(e){}
      st=null; load(); save();
    }
  };
})();
