/* 全站术语库。每条:
   id      术语 id(拼音或英文缩写,全站唯一,<gd data-term="id"> 引用)
   name    中文名
   en      英文/缩写(可选)
   def     大白话定义(一两句,独立可读)
   analogy 类比(可选,强烈建议给)
   lesson  讲透它的那一课 id(可选;课未编写也可先填)
   随内容逐模块扩充:每写一个模块的课程,同步把新术语追加到对应分组。 */
MUS.registerTerms([
  /* ── 乐理·音高与记谱 ── */
  {
    id: 'yinfu', name: '音符', en: 'note',
    def: '记录一个声音的最小符号,告诉你"哪个音、唱多长"。音乐就是一串音符排出来的。',
    analogy: '像文字里的一个字:单看是个字,连起来才成句。',
    lesson: 'theory-01-notes'
  },
  {
    id: 'yingao', name: '音高', en: 'pitch',
    def: '一个音听起来是高是低。物理上由振动快慢(频率)决定,越快越高。',
    analogy: '像声音的"海拔":尖细的是高音,低沉的是低音。',
    lesson: 'theory-01-notes'
  },
  {
    id: 'badu', name: '八度', en: 'octave',
    def: '从一个音到下一个同名音的距离(如低 do 到高 do)。两个音名字相同、听感相似,高音的频率正好是低音的两倍。',
    analogy: '同一个人用童声和成人声音唱同一句:还是那句,只是整体高了一层。',
    lesson: 'theory-01-notes'
  },
  {
    id: 'dengyin', name: '等音', en: 'enharmonic',
    def: '同一个音高的两种写法,比如升 C(C#)和降 D(D♭)其实是钢琴上同一个黑键。',
    analogy: '像"番茄"和"西红柿":两个名字,同一样东西。',
    lesson: 'theory-01-notes'
  },
  {
    id: 'wuxianpu', name: '五线谱', en: 'staff',
    def: '用五条横线记录音高的乐谱:音符在线上越高,音就越高。全世界通用。',
    analogy: '像音高的"楼层图":音符停在哪一层,就唱哪个高度。',
    lesson: 'theory-01-notes'
  },
  {
    id: 'jianpu', name: '简谱', en: 'numbered notation',
    def: '用 1234567 代表 do re mi fa sol la si 的记谱法,中文歌本里最常见,上手快。',
    analogy: '五线谱的"傻瓜版":直接写数字,不用数线。',
    lesson: 'theory-01-notes'
  },

  /* ── 乐理·节奏 ── */
  {
    id: 'jiezou', name: '节奏', en: 'rhythm',
    def: '声音在时间上的长短和排列方式。同样的音高,节奏不同就是完全不同的句子。',
    analogy: '像说话的"语速和停顿":字一样,断句不同,意思和味道全变。',
    lesson: 'theory-02-rhythm'
  },
  {
    id: 'jiepai', name: '节拍', en: 'beat',
    def: '音乐里均匀往前走的"脉搏",你跟着点头、打拍子打的就是它。',
    analogy: '像心跳:稳稳地一下一下,音乐踩着它走。',
    lesson: 'theory-02-rhythm'
  },
  {
    id: 'paihao', name: '拍号', en: 'time signature',
    def: '写在谱子开头的分数(如 4/4、3/4),告诉你"每小节几拍、以几分音符为一拍"。',
    analogy: '像舞步口令:"四拍一循环"还是"三拍一循环",决定了摇摆的方式。',
    lesson: 'theory-02-rhythm'
  },
  {
    id: 'xiaojie', name: '小节', en: 'measure / bar',
    def: '把音乐按拍号切成的一段段等长片段,谱子上用竖线隔开,方便数拍和排练。',
    analogy: '像文章的一句句:竖线就是句号,一节一节往下读。',
    lesson: 'theory-02-rhythm'
  },
  {
    id: 'bpm', name: '速度 / BPM', en: 'tempo',
    def: '每分钟有多少拍(Beats Per Minute),数字越大歌越快。60 BPM 就是每秒一拍。',
    analogy: '像跑步机的速度档:调高了,整首歌就赶起来。',
    lesson: 'theory-02-rhythm'
  },

  /* ── 乐理·和声(占位,课程后续编写) ── */
  {
    id: 'xuanlv', name: '旋律', en: 'melody',
    def: '一首歌里你能哼出来的那条主线,由一连串高低长短的音组成。',
    analogy: '像一段话的"主句":别人记住一首歌,记的就是它。',
    lesson: 'guide-02-what'
  },
  {
    id: 'hexian', name: '和弦', en: 'chord',
    def: '几个音(通常三个起)同时发声、听起来融为一体的组合,是伴奏的基本单位。',
    analogy: '像做菜的"一勺复合调料":几样一起下,出来一个味道。',
    lesson: 'theory-05-chord'
  },
  {
    id: 'hesheng', name: '和声', en: 'harmony',
    def: '研究和弦怎么搭配、怎么连接好听的学问,管的是"伴奏走向"。',
    analogy: '像给主旋律配的背景色:配得好,画面立刻有层次。',
    lesson: 'theory-05-chord'
  },

  /* ── 流行演唱 ── */
  {
    id: 'shengdai', name: '声带', en: 'vocal folds',
    def: '喉咙里两片会振动的肌肉膜,气流冲过它们振动就发出声音,绷紧发高音、放松发低音。',
    analogy: '像吉他的弦:绷紧了音高,松了音低,气流就是拨弦的手。',
    lesson: 'vocal-01-voice'
  },
  {
    id: 'fasheng', name: '发声', en: 'phonation',
    def: '气息冲过声带使其振动、产生声音的整个过程。唱得好不好,核心就在这一步顺不顺。',
    analogy: '像吹口哨:气、口型、力度配合好了,声音才干净。',
    lesson: 'vocal-01-voice'
  },
  {
    id: 'zhenyin', name: '真声', en: 'chest voice',
    def: '说话时用的、结实有力的声音,声带整片振动,适合中低音区。',
    analogy: '像你喊朋友名字时的嗓门:扎实、有底气。',
    lesson: 'vocal-01-voice'
  },
  {
    id: 'jiayin', name: '假声', en: 'falsetto / head voice',
    def: '又轻又飘的高音,声带只有边缘振动,能轻松唱到真声够不着的高度。',
    analogy: '像模仿小孩或叹气时那种细细的高音,省力。',
    lesson: 'vocal-01-voice'
  },
  {
    id: 'gongming', name: '共鸣', en: 'resonance',
    def: '声音在胸腔、口腔、鼻腔等空间里被放大、染色,让嗓音更亮、更圆、更有穿透力。',
    analogy: '像吉他的木箱:同样拨弦,有箱子才响亮。你的身体就是那个箱子。',
    lesson: 'vocal-01-voice'
  },
  {
    id: 'qixi', name: '气息', en: 'breath support',
    def: '唱歌时对呼吸的控制——用腹部稳稳供气,而不是靠嗓子硬撑,是一切演唱技巧的地基。',
    analogy: '像吹气球时手稳稳捏着口:气放得匀,声音才稳。',
    lesson: 'vocal-02-breath'
  },

  /* ── 乐理·音阶调式 ── */
  {
    id: 'yinjie', name: '音阶', en: 'scale',
    def: '把音按固定的间距规律从低到高排成一队,如 do re mi fa sol la si do。',
    analogy: '像一截有固定台阶高度的楼梯:踩着它上下,就成了旋律。',
    lesson: 'theory-03-scale'
  },
  {
    id: 'banyin', name: '半音', en: 'semitone',
    def: '音乐里最小的音高间距,钢琴上相邻两个键(含黑键)之间就是半音。',
    analogy: '像尺子上最小的一格,再短就分不下去了。',
    lesson: 'theory-03-scale'
  },
  {
    id: 'quanyin', name: '全音', en: 'whole tone',
    def: '两个半音的距离。比如 C 到 D 中间隔着一个黑键,就是一个全音。',
    analogy: '两小格并成一大格。',
    lesson: 'theory-03-scale'
  },
  {
    id: 'diaoshi', name: '调式', en: 'mode',
    def: '音阶内部音的排列方式,决定一首歌的"色彩气质",最常见的是大调和小调。',
    analogy: '像照片的滤镜:同一张图,暖色调阳光、冷色调忧郁。',
    lesson: 'theory-03-scale'
  },
  {
    id: 'dadiao', name: '大调', en: 'major',
    def: '听感明亮、积极的调式,大多数欢快的流行歌都用它。',
    analogy: '阳光下的颜色:鲜亮、开朗。',
    lesson: 'theory-03-scale'
  },
  {
    id: 'xiaodiao', name: '小调', en: 'minor',
    def: '听感忧郁、深情的调式,大量抒情慢歌、伤感情歌都用它。',
    analogy: '阴天的颜色:沉静、有心事。',
    lesson: 'theory-03-scale'
  },

  /* ── 乐理·音程与和声 ── */
  {
    id: 'yincheng', name: '音程', en: 'interval',
    def: '两个音之间的距离,用"度"来量:同音是一度,相邻是二度,到第八个同名音是八度。',
    analogy: '像两个台阶之间隔了几级。',
    lesson: 'theory-04-interval'
  },
  {
    id: 'xiehe', name: '协和音程', en: 'consonant interval',
    def: '两个音一起响时融洽、稳定、好听的音程,如三度、五度、八度。',
    analogy: '像合得来的搭档:站一起就舒服。',
    lesson: 'theory-04-interval'
  },
  {
    id: 'sanhexian', name: '三和弦', en: 'triad',
    def: '最基础的和弦:在一个音上叠两个三度,共三个音同时发声。',
    analogy: '三个人搭的最小合唱团,缺一不成块。',
    lesson: 'theory-05-chord'
  },
  {
    id: 'genyin', name: '根音', en: 'root',
    def: '一个和弦的"地基音",和弦通常以它命名,也常落在低音。',
    analogy: '像一栋楼的地基:整块和弦都立在它上面。',
    lesson: 'theory-05-chord'
  },
  {
    id: 'hexianjinxing', name: '和弦进行', en: 'chord progression',
    def: '一个接一个排起来的和弦序列,决定一首歌的走向和情绪,如"万能进行"1-5-6-4。',
    analogy: '像一串脚印:往哪走,情绪就被带到哪。',
    lesson: 'theory-05-chord'
  },

  /* ── 乐理·调性与曲式 ── */
  {
    id: 'diaoxing', name: '调性', en: 'tonality',
    def: '一首歌"有个家、最后想回家"的感觉,所有音都围着主音转。',
    analogy: '像地心引力:不管跳多高,最后都被拉回地面(主音)。',
    lesson: 'theory-06-key'
  },
  {
    id: 'zhuyin', name: '主音', en: 'tonic',
    def: '一个调里最稳定的那个音,歌停在它上面才觉得"完整、落地"。',
    analogy: '一首歌的"家":绕一圈,回到它才安心。',
    lesson: 'theory-06-key'
  },
  {
    id: 'zhuandiao', name: '转调', en: 'modulation',
    def: '歌进行到中途换到另一个调,常见于最后一遍副歌"升 key"把情绪推上去。',
    analogy: '像换挡提速:同一条路,突然上了个台阶。',
    lesson: 'theory-06-key'
  },
  {
    id: 'qushi', name: '曲式', en: 'musical form',
    def: '一首歌的整体结构图:哪段铺垫、哪段高潮、怎么循环。',
    analogy: '像房子的户型图:先有结构,再谈装修。',
    lesson: 'theory-07-form'
  },
  {
    id: 'yueju', name: '乐句', en: 'phrase',
    def: '音乐里相对完整的一小段,像说话的一句话,听感上有起有落。',
    analogy: '旋律里的"一句话":说到这儿能喘口气。',
    lesson: 'theory-07-form'
  },
  {
    id: 'qianzou', name: '前奏', en: 'intro',
    def: '一首歌开头、进入主歌之前的纯音乐段落,负责定气氛、把人带进来。',
    analogy: '像电影开场:还没说正事,先把你拉进情境。',
    lesson: 'theory-07-form'
  },
  {
    id: 'zhuge', name: '主歌', en: 'verse',
    def: '负责讲故事、做铺垫的段落,情绪较平,为副歌的爆发蓄力。',
    analogy: '像助跑:为后面那一跳攒劲。',
    lesson: 'theory-07-form'
  },
  {
    id: 'fuge', name: '副歌', en: 'chorus',
    def: '全曲高潮、最抓耳、最该被记住的部分,通常反复出现。',
    analogy: '一首歌的"招牌菜":别人哼的多半是它。',
    lesson: 'theory-07-form'
  },
  {
    id: 'qiaoduan', name: '桥段', en: 'bridge',
    def: '出现在后段、换个口味的段落,旋律和和声常有新意,避免一直重复。',
    analogy: '像饭吃到一半上的一道新菜:换换口,后面更香。',
    lesson: 'theory-07-form'
  },

  /* ── 乐器·分类与通用 ── */
  {
    id: 'yueqi', name: '乐器', en: 'instrument',
    def: '用来发出乐音的器具,按"声音怎么产生"分为弦乐、管乐、打击乐、键盘、电子等家族。',
    analogy: '像厨房里的各种锅:用途不同,做出的"菜"也不同。',
    lesson: 'instrument-01-family'
  },
  {
    id: 'xianyueqi', name: '弦乐器', en: 'string instrument',
    def: '靠弦的振动发声的乐器,可拉(小提琴)、可拨(吉他)、可敲(钢琴)。',
    analogy: '本质都是"让一根绷紧的线抖起来"。',
    lesson: 'instrument-01-family'
  },
  {
    id: 'guanyueqi', name: '管乐器', en: 'wind instrument',
    def: '靠吹气让管内空气振动发声的乐器,如长笛、小号、萨克斯。',
    analogy: '像往瓶口吹气发出的"呜"声,只是做得更精密。',
    lesson: 'instrument-01-family'
  },
  {
    id: 'dajiyueqi', name: '打击乐器', en: 'percussion',
    def: '靠敲击发声的乐器,大多负责节奏,如鼓、木琴、三角铁。',
    analogy: '把"敲东西"这件事做成了乐器。',
    lesson: 'instrument-01-family'
  },
  {
    id: 'jianpan', name: '键盘乐器', en: 'keyboard',
    def: '通过按键发声的乐器,如钢琴、电钢、电子琴。钢琴本质敲弦,常单列为键盘类。',
    analogy: '一排开关,按下哪个就响哪个音。',
    lesson: 'instrument-01-family'
  },
  {
    id: 'yinse', name: '音色', en: 'timbre',
    def: '声音的"长相":同样音高、同样音量,小提琴和钢琴听起来不一样,差别就在音色。',
    analogy: '像每个人的嗓音:说同一句话,你也能听出是谁。',
    lesson: 'instrument-01-family'
  },
  {
    id: 'yinyu', name: '音域', en: 'range',
    def: '一件乐器或一个人能发出的最低音到最高音的范围。',
    analogy: '像跳高的"上下限":太高够不着,太低够不下。',
    lesson: 'instrument-02-piano'
  },
  {
    id: 'pinge', name: '品格', en: 'fret',
    def: '吉他指板上的金属条,把弦分成一格格;手指按在不同格上得到不同音高。',
    analogy: '像尺子的刻度:按到哪一格,音就定在哪。',
    lesson: 'instrument-03-guitar'
  },
  {
    id: 'saoxian', name: '扫弦', en: 'strumming',
    def: '右手一次性刷过多根弦,把整个和弦"刷"出来,带节奏感。',
    analogy: '像一巴掌划过琴弦,六个音一起出来。',
    lesson: 'instrument-03-guitar'
  },
  {
    id: 'hexiantu', name: '和弦图', en: 'chord diagram',
    def: '吉他和弦的图示:竖线是弦、横线是品,圆点告诉你手指按哪。看图就能按出和弦。',
    analogy: '像和弦的"按法说明书",照着摆手指就行。',
    lesson: 'instrument-03-guitar'
  },
  {
    id: 'gongxian', name: '弓弦乐器', en: 'bowed string',
    def: '用弓摩擦琴弦发声的乐器,如小提琴、大提琴,能拉长音、像人声一样歌唱。',
    analogy: '用一把"毛刷"蹭弦,蹭出绵长的声音。',
    lesson: 'instrument-04-strings'
  },
  {
    id: 'rouxian', name: '揉弦', en: 'vibrato',
    def: '按弦的手指轻轻摇动,让音微微上下波动,声音立刻有了感情和人味。',
    analogy: '像唱歌结尾那种自然的颤音,让音"活"起来。',
    lesson: 'instrument-04-strings'
  },
  {
    id: 'jiaoxiang', name: '交响乐团', en: 'symphony orchestra',
    def: '由弦乐、木管、铜管、打击乐等几十上百人组成的大型乐团,弦乐是主力。',
    analogy: '音乐界的"大兵团作战",声部分工极细。',
    lesson: 'instrument-04-strings'
  },
  {
    id: 'muguan', name: '木管乐器', en: 'woodwind',
    def: '靠吹气过边缘或吹动簧片发声的管乐,如长笛、单簧管、萨克斯(看发声方式,不看材质)。',
    analogy: '吹奏类里"音色柔一些"的那一拨。',
    lesson: 'instrument-05-wind'
  },
  {
    id: 'tongguan', name: '铜管乐器', en: 'brass',
    def: '靠嘴唇贴号嘴振动发声的管乐,如小号、长号、圆号,声音明亮有号角感。',
    analogy: '靠"打嘟噜"的嘴唇当音源,越绷越高。',
    lesson: 'instrument-05-wind'
  },
  {
    id: 'huangpian', name: '簧片', en: 'reed',
    def: '装在某些木管吹口处的薄片,吹气使它振动发声,如单簧管、萨克斯的关键零件。',
    analogy: '像草叶吹响时那片振动的叶子。',
    lesson: 'instrument-05-wind'
  },
  {
    id: 'guzu', name: '架子鼓', en: 'drum kit',
    def: '把底鼓、军鼓、镲等组合在一起、一人手脚并用演奏的鼓组,流行/摇滚的节奏核心。',
    analogy: '一个人的打击乐"驾驶舱",手脚全用上。',
    lesson: 'instrument-06-percussion'
  },
  {
    id: 'digu', name: '底鼓', en: 'kick drum',
    def: '用脚踩踏板敲的大鼓,发出低沉的"咚",常落在第 1、3 拍,是律动的地基。',
    analogy: '音乐的"脚步声":稳稳地往前踩。',
    lesson: 'instrument-06-percussion'
  },
  {
    id: 'jungu', name: '军鼓', en: 'snare drum',
    def: '发出清脆"啪"声的鼓,常落在第 2、4 拍(backbeat),给音乐带来弹性和劲头。',
    analogy: '律动里的"击掌":啪一下,精神一振。',
    lesson: 'instrument-06-percussion'
  },
  {
    id: 'shengbu', name: '声部', en: 'voice part',
    def: '多人(或多件乐器)分工演唱/演奏的不同音高线条,如合唱的女高音、男低音等。',
    analogy: '像合唱团里不同高度的几排人,叠起来才丰满。',
    lesson: 'instrument-07-voice'
  },

  /* ── 音乐史·古典脉络 ── */
  {
    id: 'baluoke', name: '巴洛克', en: 'Baroque',
    def: '约 1600–1750 的音乐时期,风格华丽繁复、讲究多线条交织,代表是巴赫、维瓦尔第。',
    analogy: '像繁复的雕花家具:处处是装饰。',
    lesson: 'history-01-classical'
  },
  {
    id: 'gudianzhuyi', name: '古典主义', en: 'Classical era',
    def: '约 1750–1820 的音乐时期,追求清晰、均衡、优雅,代表是莫扎特、海顿。',
    analogy: '像对称工整的园林:讲究比例和秩序。',
    lesson: 'history-01-classical'
  },
  {
    id: 'langman', name: '浪漫主义', en: 'Romantic era',
    def: '约 1820–1900 的音乐时期,情感强烈、个人化、戏剧性强,代表是肖邦、柴可夫斯基。',
    analogy: '像把内心戏全写在脸上:浓墨重彩。',
    lesson: 'history-01-classical'
  },
  {
    id: 'jiaoxiangqu', name: '交响曲', en: 'symphony',
    def: '为交响乐团创作的大型多乐章作品,是古典音乐里分量最重的体裁之一。',
    analogy: '音乐里的"长篇小说":篇幅大、结构讲究。',
    lesson: 'history-01-classical'
  },

  /* ── 音乐史·近现代 ── */
  {
    id: 'yinxiangpai', name: '印象派', en: 'Impressionism',
    def: '20 世纪初的音乐风格,弱化调性、追求朦胧流动的色彩感,代表是德彪西。',
    analogy: '像晕开的水彩画:轮廓模糊,重在氛围。',
    lesson: 'history-02-modern'
  },
  {
    id: 'wudiaoxing', name: '无调性', en: 'atonality',
    def: '刻意取消"主音"和调性中心的写法,听感悬浮、紧张、无家可归。',
    analogy: '像一段没有重力的太空漫步:踩不到地。',
    lesson: 'history-02-modern'
  },

  /* ── 音乐史·爵士 ── */
  {
    id: 'jueshi', name: '爵士', en: 'jazz',
    def: '20 世纪初源于美国非裔社区的音乐,以即兴和复杂和声为标志。',
    analogy: '音乐界的"即兴脱口秀":有主题,但每场都现编。',
    lesson: 'history-03-jazz'
  },
  {
    id: 'bulusi', name: '布鲁斯', en: 'blues',
    def: '源自非裔美国人的音乐根基,带特有的"忧郁音"(蓝调音),是爵士、摇滚的共同源头。',
    analogy: '像音乐里的"叹气":带点苦,但很有味道。',
    lesson: 'history-03-jazz'
  },
  {
    id: 'jixing', name: '即兴', en: 'improvisation',
    def: '在和弦与调式的框架内当场编奏旋律,每次都不同。爵士的灵魂。',
    analogy: '像按话题即兴发挥:有边界,但内容现想。',
    lesson: 'history-03-jazz'
  },
  {
    id: 'qiebai', name: '切分', en: 'syncopation',
    def: '把重音故意放到不该强调的拍子上,打破规整,带来松弛和弹性。',
    analogy: '像走路故意错半拍:一下子有了"晃"的味道。',
    lesson: 'history-03-jazz'
  },
  {
    id: 'swing', name: '摇摆', en: 'swing',
    def: '爵士特有的节奏处理:把两个等长的音奏成"长—短",产生晃悠的律动。',
    analogy: '像跛着脚的舞步:不匀,反而带劲。',
    lesson: 'history-03-jazz'
  },

  /* ── 音乐史·摇滚 ── */
  {
    id: 'yaogun', name: '摇滚', en: 'rock',
    def: '以人声+电吉他+贝斯+鼓为核心阵容的音乐,声音强劲直接,常代表一种态度。',
    analogy: '把布鲁斯插上电、调大音量的产物。',
    lesson: 'history-04-rock'
  },
  {
    id: 'dianjita', name: '电吉他', en: 'electric guitar',
    def: '靠拾音器把弦的振动转成电信号、经音箱放大的吉他,是摇滚的标志音色。',
    analogy: '吉他装上了"扩音和变声器"。',
    lesson: 'history-04-rock'
  },
  {
    id: 'shizhen', name: '失真', en: 'distortion',
    def: '把电吉他信号故意"压爆",得到毛糙、有冲击力的音色,摇滚力量感的来源。',
    analogy: '像声音被"撕开了边",更野更冲。',
    lesson: 'history-04-rock'
  },
  {
    id: 'riff', name: '即兴段(riff)', en: 'riff',
    def: '反复出现、一听就记住的器乐短句(常是吉他),往往比主旋律还洗脑。',
    analogy: '乐曲里的"口头禅":一响就认出这首歌。',
    lesson: 'history-04-rock'
  },

  /* ── 音乐史·电子 ── */
  {
    id: 'dianziyinyue', name: '电子音乐', en: 'electronic music',
    def: '用电路和电脑生成、加工声音的音乐,而非依赖传统乐器。',
    analogy: '用"声音的乐高"搭歌,零件可以凭空造。',
    lesson: 'history-05-electronic'
  },
  {
    id: 'hechengqi', name: '合成器', en: 'synthesizer',
    def: '用电子方式凭空生成、塑造音色的乐器,能造出自然界没有的声音。',
    analogy: '声音的"3D 打印机":想要什么音色就调什么。',
    lesson: 'history-05-electronic'
  },
  {
    id: 'caiyang', name: '采样', en: 'sampling',
    def: '把一段现成的声音(鼓点、人声、甚至环境音)剪进来当素材使用。',
    analogy: '像做拼贴画:把现成片段剪下来拼成新作品。',
    lesson: 'history-05-electronic'
  },
  {
    id: 'daw', name: '编曲软件(DAW)', en: 'digital audio workstation',
    def: '在电脑上录音、编排、混音的软件,相当于一个"数字录音棚",一个人就能做整首歌。',
    analogy: '把整座录音棚装进了一台电脑。',
    lesson: 'history-05-electronic'
  },

  /* ── 音乐史·华语与民族 ── */
  {
    id: 'wusheng', name: '五声音阶', en: 'pentatonic scale',
    def: '只用五个音(宫商角徵羽,约简谱 1 2 3 5 6)的音阶,是中国传统旋律的底色。',
    analogy: '少了两个音的调色盘,反而调出独特的"东方色"。',
    lesson: 'history-06-chinese'
  },
  {
    id: 'minyue', name: '民乐', en: 'Chinese folk instruments',
    def: '中国民族器乐,讲究韵味与滑音,代表乐器有二胡、古筝、琵琶、笛子。',
    analogy: '我们自己的"管弦乐队",音色一听就亲切。',
    lesson: 'history-06-chinese'
  },
  {
    id: 'xiqu', name: '戏曲', en: 'Chinese opera',
    def: '中国传统的综合舞台艺术,唱念做打俱全、程式化强,如京剧、昆曲、各地方戏。',
    analogy: '古代版的"音乐剧",一招一式都有规矩。',
    lesson: 'history-06-chinese'
  },
  {
    id: 'huayu', name: '华语流行', en: 'C-pop',
    def: '用中文演唱、以西方流行编曲为底的流行音乐,涵盖港台与内地。',
    analogy: '把全球流行的"做法",换上中文的"食材"。',
    lesson: 'history-06-chinese'
  },

  /* ── 音乐史·流行 ── */
  {
    id: 'liuxing', name: '流行音乐', en: 'pop music',
    def: '面向大众、以好记上口为目标的音乐,博采各风格之长,核心是抓耳。',
    analogy: '各路风格的"集大成外卖":怎么对大众胃口怎么来。',
    lesson: 'history-07-pop'
  },
  {
    id: 'hook', name: '钩子(hook)', en: 'hook',
    def: '一首歌里最抓耳、让你忍不住记住和跟唱的片段,常是副歌的一句旋律或反复的词。',
    analogy: '像鱼钩:一下就把你的注意力勾住。',
    lesson: 'history-07-pop'
  },
  {
    id: 'bianqu', name: '编曲', en: 'arrangement',
    def: '决定一首歌用什么乐器、怎么铺陈、如何推进情绪的工序,决定成品的"听感长相"。',
    analogy: '同一道菜,编曲就是"怎么摆盘和搭配"。',
    lesson: 'history-07-pop'
  },
  {
    id: 'zhizuoren', name: '制作人', en: 'producer',
    def: '统筹一首歌从创作到成品的人,把控编曲、录音、混音的整体方向。',
    analogy: '一首歌的"总导演"。',
    lesson: 'history-07-pop'
  },

  /* ── 赏析 ── */
  {
    id: 'zhiti', name: '织体', en: 'texture',
    def: '一首乐曲里同时发声的各条线索如何交织、谁主谁辅的整体感觉。',
    analogy: '像一块布的"织法":几股线怎么穿插,决定厚薄手感。',
    lesson: 'listening-02-texture'
  },
  {
    id: 'peiqi', name: '配器', en: 'orchestration',
    def: '决定用哪些乐器来担当各个声部、各段落,塑造整体音色的安排。',
    analogy: '像给角色"选演员":谁来演主角、谁来配戏。',
    lesson: 'listening-02-texture'
  },
  {
    id: 'yuezhang', name: '乐章', en: 'movement',
    def: '大型作品(如交响曲)里相对独立的一段,各有自己的速度和性格,合成一部完整作品。',
    analogy: '像一本书的"章":各自成段,合起来是整本。',
    lesson: 'listening-03-classic'
  },
  {
    id: 'zhuti', name: '主题', en: 'theme',
    def: '乐曲里反复出现、可辨认的核心旋律,后面常以变奏、转调等方式变形回归。',
    analogy: '像剧里的"主角":换装换心情,你总认得出是它。',
    lesson: 'listening-03-classic'
  },
  {
    id: 'jianzou', name: '间奏', en: 'interlude',
    def: '歌曲中段没有人声的纯器乐段落,用来过渡、换段或让情绪喘口气。',
    analogy: '像说话中间的停顿:给下一句腾地方。',
    lesson: 'listening-04-popstructure'
  },
  {
    id: 'shijieyinyue', name: '世界音乐', en: 'world music',
    def: '泛指各民族、各地区的传统与现代音乐,常用与西方流行不同的音阶和节奏。',
    analogy: '音乐版的"环球旅行":每到一地,口味都不同。',
    lesson: 'listening-05-world'
  },
  {
    id: 'fuhejiezou', name: '复合节奏', en: 'polyrhythm',
    def: '多条不同的节奏同时进行、彼此交错又对得上,听感繁复而有集体律动。',
    analogy: '像几个人各拍各的点,却合成一个大节奏。',
    lesson: 'listening-05-world'
  },

  /* ── 流行演唱 ── */
  {
    id: 'fushihuxi', name: '腹式呼吸', en: 'diaphragmatic breathing',
    def: '用横膈膜(肚子)带动的深呼吸:吸气时肚子鼓起、肩膀放松,是唱歌供气的正确方式。',
    analogy: '像给气球从底部充气,而不是只鼓表面。',
    lesson: 'vocal-02-breath'
  },
  {
    id: 'zhicheng', name: '气息支撑', en: 'breath support',
    def: '用小腹和横膈膜稳稳托住气流、匀速送出的能力,声音稳不稳全看它。',
    analogy: '像提水桶时小腹自然绷住的那股劲:稳稳托着。',
    lesson: 'vocal-02-breath'
  },
  {
    id: 'yinzhun', name: '音准', en: 'intonation',
    def: '唱出的音高与目标音是否吻合。准就"在调上",不准就跑调。',
    analogy: '像射箭中不中靶心:差一点就"偏"了。',
    lesson: 'vocal-03-pitch'
  },
  {
    id: 'paodiao', name: '跑调', en: 'off-pitch',
    def: '唱的音高偏离了目标,多因听不准或控制不住,绝大多数可通过练耳改善。',
    analogy: '像走路走歪了线:看清、走慢,就能纠回来。',
    lesson: 'vocal-03-pitch'
  },
  {
    id: 'erxun', name: '耳训', en: 'ear training',
    def: '通过反复听辨、模唱来训练对音高音程的感知,是改善音准的根本办法。',
    analogy: '给耳朵"健身":练多了就能一听就准。',
    lesson: 'vocal-03-pitch'
  },
  {
    id: 'xiongqiang', name: '胸腔共鸣', en: 'chest resonance',
    def: '声音在胸腔里被放大,带来低沉、厚实、温暖的音色,适合中低音区。',
    analogy: '像低音音箱:让声音更"沉、暖"。',
    lesson: 'vocal-04-resonance'
  },
  {
    id: 'tousheng', name: '头声', en: 'head voice',
    def: '高音区的共鸣感觉"在头部/面部上方",音色明亮轻盈,是唱高音的主力。',
    analogy: '像声音飘到头顶上方:又高又亮。',
    lesson: 'vocal-04-resonance'
  },
  {
    id: 'hunsheng', name: '混声', en: 'mixed voice',
    def: '把胸声的厚实和头声的轻亮按比例掺着用,让中高音区过渡顺滑、不破不虚。',
    analogy: '像调咖啡:浓和淡兑出最顺口的比例。',
    lesson: 'vocal-04-resonance'
  },
  {
    id: 'yaozi', name: '咬字', en: 'diction / articulation',
    def: '唱歌时对字头(声母)的处理:清晰而不咬死,让词听得清又不僵。',
    analogy: '像说话吐字:既要清楚,又别一个字一个字蹦。',
    lesson: 'vocal-05-diction'
  },
  {
    id: 'guiyun', name: '归韵', en: 'vowel closing',
    def: '把一个字的长音停在主元音(字腹)上,最后把韵尾轻轻收到位的处理。',
    analogy: '像写字的收笔:长长地铺开,再稳稳收住。',
    lesson: 'vocal-05-diction'
  },
  {
    id: 'ludong', name: '律动', en: 'groove',
    def: '演唱里踩着节拍、与鼓点呼应产生的"劲儿",让人想跟着动。',
    analogy: '像走路自带的摇摆:踩对点就有了味道。',
    lesson: 'vocal-06-groove'
  },
  {
    id: 'dongtai', name: '动态', en: 'dynamics',
    def: '声音强弱、轻响的变化。主歌收、副歌放,有起伏才动人。',
    analogy: '像说话的抑扬顿挫:全程一个音量最催眠。',
    lesson: 'vocal-06-groove'
  },
  {
    id: 'huatong', name: '话筒', en: 'microphone',
    def: '把声音转成电信号放大的设备。嘴与麦的距离可当"音量旋钮"用。',
    analogy: '声音的"扩音喇叭":用法对了才好听。',
    lesson: 'vocal-07-mic'
  },
  {
    id: 'hunxiang', name: '混响', en: 'reverb',
    def: '给声音加上"空间回声"的效果,让嗓音更润、更有空间感,但过量会让字糊成一片。',
    analogy: '像在浴室唱歌的回声:适度好听,太多就糊。',
    lesson: 'vocal-07-mic'
  }
]);
