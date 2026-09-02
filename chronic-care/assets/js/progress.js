/* 慢病管理站 · progress —— localStorage 进度(仿规范站单例形态,便于 sync 移植) */
(function(){
  var NS='CDC', KEY=NS+'.progress.v1';
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
    if(window.CDC&&CDC.sync) CDC.sync.schedulePush();
    if(window.CDC&&CDC.onProgressChange) CDC.onProgressChange();
  }
  function today(){ var d=new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); }

  window.CDC=window.CDC||{};
  window.CDC.progress={
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
      var s=load(); var t=s.tools[tid]||(s.tools[tid]={});
      if(key===undefined) return t;
      if(val===undefined) return t[key];
      t[key]=val; save(); return val;
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
      /* 按 updatedAt 逐条合并:新覆盖旧 */
      var s=load(); if(!remote||typeof remote!=='object') return;
      var rn=+remote.updatedAt||0, ln=+s.updatedAt||0;
      if(rn<=ln) return;
      ['lessons','activity','quizzes','tools'].forEach(function(k){
        var src=remote[k]||{}; if(!s[k]) s[k]={};
        Object.keys(src).forEach(function(id){
          var a=s[k][id], b=src[id];
          var at=a&&(a.at||a.updatedAt||0), bt=b&&(b.at||b.updatedAt||0);
          if(!a||( !at && !bt )||bt>=at||typeof a!=='object'||typeof b!=='object'){ s[k][id]=b; }
        });
      });
      s.updatedAt=rn; save();
    },
    resetAll:function(){
      try{ localStorage.removeItem(KEY); }catch(e){}
      st=null; load(); save();
    }
  };
})();
