MUS.registerLesson({
  id: 'theory-01-notes',
  module: 'theory',
  order: 1,
  title: '音符与音高:从 C 到 B 的 7 个音',
  minutes: 5,
  keywords: ['音符', '音高', '五线谱', '简谱', '八度', '键盘', 'CDEFGAB', 'do re mi'],
  sections: {
    what:
      '<p>音乐最小的积木是<gd data-term="yinfu">音符</gd>,每个音符代表一个<gd data-term="yingao">音高</gd>——' +
      '也就是声音的高低。西方音乐用 7 个字母表示基础音:</p>' +
      '<div class="ex"><strong>C D E F G A B</strong>,对应唱名 <strong>do re mi fa sol la si</strong>,' +
      '到 B 之后又回到 C,如此循环。中文歌本里常用<gd data-term="jianpu">简谱</gd> 1234567 表示同样这 7 个音。</div>',
    why:
      '<p>认全这 7 个音,你就迈过了音乐的第一道门槛:能<strong>读谱、在钢琴上找到音、跟着唱准</strong>。' +
      '无论后面学乐器还是学唱歌,所有内容都建立在"知道现在是哪个音"之上。</p>' +
      '<p>尤其唱歌:很多人"跑调"不是嗓子问题,而是<strong>脑子里没有稳定的音高概念</strong>。从这一课开始建立它。</p>',
    how:
      '<p>最直观的工具是钢琴键盘。看这组白键和黑键的循环:</p>' +
      '<figure class="fig"><svg viewBox="0 0 350 90" width="100%" role="img" aria-label="钢琴一个八度的键盘示意">' +
      '<g>' +
      '<rect class="f-box" x="10"  y="10" width="44" height="70"/><text class="f-txt" x="32"  y="72" text-anchor="middle">C</text>' +
      '<rect class="f-box" x="54"  y="10" width="44" height="70"/><text class="f-txt" x="76"  y="72" text-anchor="middle">D</text>' +
      '<rect class="f-box" x="98"  y="10" width="44" height="70"/><text class="f-txt" x="120" y="72" text-anchor="middle">E</text>' +
      '<rect class="f-box" x="142" y="10" width="44" height="70"/><text class="f-txt" x="164" y="72" text-anchor="middle">F</text>' +
      '<rect class="f-box" x="186" y="10" width="44" height="70"/><text class="f-txt" x="208" y="72" text-anchor="middle">G</text>' +
      '<rect class="f-box" x="230" y="10" width="44" height="70"/><text class="f-txt" x="252" y="72" text-anchor="middle">A</text>' +
      '<rect class="f-box" x="274" y="10" width="44" height="70"/><text class="f-txt" x="296" y="72" text-anchor="middle">B</text>' +
      '<rect class="f-arr" x="44"  y="10" width="20" height="42"/>' +
      '<rect class="f-arr" x="88"  y="10" width="20" height="42"/>' +
      '<rect class="f-arr" x="176" y="10" width="20" height="42"/>' +
      '<rect class="f-arr" x="220" y="10" width="20" height="42"/>' +
      '<rect class="f-arr" x="264" y="10" width="20" height="42"/>' +
      '</g></svg><figcaption>白键 = 7 个基础音;黑键 = 它们之间的升降音。E-F、B-C 之间没有黑键</figcaption></figure>' +
      '<p>关键规律:</p>' +
      '<ul>' +
      '<li><strong>循环</strong>:到 B 之后又是 C,只是高了一层。从一个 C 到下一个 C,叫一个<gd data-term="badu">八度</gd>。</li>' +
      '<li><strong>越往右越高</strong>:键盘右边音高、左边音低。</li>' +
      '<li><strong>黑键</strong>:夹在白键之间,是升(#)降(♭)音,下一条讲。</li>' +
      '</ul>' +
      '<p>记音高的位置,正规工具是<gd data-term="wuxianpu">五线谱</gd>:音符停在越高的线上,音就越高。它和键盘是一一对应的。</p>',
    pitfalls:
      '<div class="pit"><b>误解 1:升号 # 和降号 ♭ 是单独的音。</b>不是。' +
      '它们是<strong>同一个音的两种写法</strong>,即<gd data-term="dengyin">等音</gd>:C#(升 C)和 D♭(降 D)在钢琴上是同一个黑键。</div>' +
      '<div class="pit"><b>误解 2:E 和 F、B 和 C 之间一定有黑键。</b>恰恰相反,' +
      '这两处<strong>没有黑键</strong>,两个白键紧挨着。这也是为什么键盘看起来黑键是"两个一组、三个一组"。</div>',
    links:
      '<p>· 下一课《节奏与拍子》讲音的"长短"——有了高低再加上长短,才凑成真正的旋律。<br>' +
      '· 想上手找音:模块 2《钢琴:看得见的乐理》会带你在键盘上认这 7 个音。<br>' +
      '· 术语「八度」「五线谱」「等音」都可点开复习。</p>'
  }
});
