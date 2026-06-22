MUS.registerLesson({
  id: 'vocal-01-voice',
  module: 'vocal',
  order: 1,
  title: '嗓音与发声原理:声音怎么来的',
  minutes: 5,
  keywords: ['嗓音', '发声', '声带', '真声', '假声', '共鸣', '唱歌', '流行演唱'],
  sections: {
    what:
      '<p>唱歌前,先搞懂声音是怎么从你身体里出来的。三个零件协作:<strong>气流、声带、共鸣腔</strong>。</p>' +
      '<div class="ex">一句话版:<strong>肺里的气往上冲,带动<gd data-term="shengdai">声带</gd>振动发出声音,' +
      '再经<gd data-term="gongming">共鸣</gd>腔放大美化,从嘴里唱出来。</strong>这整个过程就叫<gd data-term="fasheng">发声</gd>。</div>',
    why:
      '<p>明白原理,你就知道<strong>嗓子该使劲的地方和不该使劲的地方</strong>。' +
      '唱一会儿就哑、高音上不去、声音发紧——多半是发力点错了,而不是天生嗓子差。</p>' +
      '<p>流行演唱尤其讲究"<strong>省着唱</strong>":真正的好声音是松弛、通畅的,不是吼出来的。' +
      '懂了发声原理,你才能往这个方向调。</p>',
    how:
      '<p>看声音的"三段旅程":</p>' +
      '<figure class="fig"><svg viewBox="0 0 420 90" width="100%" role="img" aria-label="气流经声带到共鸣腔的发声示意">' +
      '<rect class="f-box2" x="20" y="30" width="90" height="34" rx="6"/><text class="f-txt" x="65" y="52" text-anchor="middle">肺·气流</text>' +
      '<line class="f-line" x1="110" y1="47" x2="150" y2="47"/><polygon class="f-arr" points="150,42 160,47 150,52"/>' +
      '<rect class="f-box2" x="160" y="30" width="90" height="34" rx="6"/><text class="f-txt" x="205" y="52" text-anchor="middle">声带·振动</text>' +
      '<line class="f-line" x1="250" y1="47" x2="290" y2="47"/><polygon class="f-arr" points="290,42 300,47 290,52"/>' +
      '<rect class="f-box2" x="300" y="30" width="100" height="34" rx="6"/><text class="f-txt" x="350" y="52" text-anchor="middle">共鸣·放大</text>' +
      '<text class="f-dim" x="65" y="22" text-anchor="middle">发动机</text>' +
      '<text class="f-dim" x="205" y="22" text-anchor="middle">音源</text>' +
      '<text class="f-dim" x="350" y="22" text-anchor="middle">音箱</text>' +
      '</svg><figcaption>气流是发动机,声带是音源,共鸣腔是音箱——三者配合才有好声音</figcaption></figure>' +
      '<p>声带绷紧或放松,决定音高,也带来两种基本音色:</p>' +
      '<table><tr><th>类型</th><th>什么感觉</th><th>用在哪</th></tr>' +
      '<tr><td><gd data-term="zhenyin">真声</gd></td><td>结实、有力,像平时说话喊人</td><td>中低音区、主歌</td></tr>' +
      '<tr><td><gd data-term="jiayin">假声</gd></td><td>轻、飘,像叹气式的高音</td><td>真声够不着的高音</td></tr></table>' +
      '<div class="ex">自检小实验:正常说"啊——"是真声;再像模仿小孩那样发又细又轻的"咦——",那就是假声。' +
      '流行歌里副歌冲高音,常常是真假声切换甚至混合。</div>',
    pitfalls:
      '<div class="pit"><b>误解 1:高音靠嗓子用力喊。</b>大错。越喊声带越紧、越容易破和哑。' +
      '高音靠的是<gd data-term="qixi">气息</gd>支撑 + 共鸣 + 适当用假声/混声,核心是"放松而不是用力"。</div>' +
      '<div class="pit"><b>误解 2:假声是"唱不上去时的将就"。</b>' +
      '不是。假声是正经的演唱手段,很多流行歌的高音段落本就该用它,音色还更柔。</div>',
    links:
      '<p>· 下一课《气息支撑》讲那台"发动机"——怎么用腹部供气,让声音稳又持久。<br>' +
      '· 想让声音更亮更圆:后面《共鸣与音色》专门讲怎么调共鸣腔。<br>' +
      '· 不熟悉音高?回模块 1《音符与音高》补一下,唱准的前提是脑子里有音高。</p>'
  }
});
