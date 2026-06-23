/* 术语表 · 中国历史 · 人物/制度/器物/事件/概念 */
window.CHS = window.CHS || {};

(function(CHS) {

CHS.terms = [
  // 神话 myth
  {id:'pangu',     name:'盘古',     en:'Pangu',         module:'myth', def:'中华神话中开天辟地的始祖，传说他从混沌中分开天地。', analogy:'中华版本的"创世神"。'},
  {id:'nuwa',      name:'女娲',     en:'Nuwa',          module:'myth', def:'神话中的造人之神与补天英雄，捏黄土为人、炼石补天。', analogy:'东方母系创世神，混合"造人 + 救世"两个职能。'},
  {id:'fuxi',      name:'伏羲',     en:'Fuxi',          module:'myth', def:'传说中创"八卦"的人文始祖，结绳为网、画卦立教。', analogy:'文化符号系统的发明者。'},
  {id:'shennong',  name:'神农',     en:'Shennong',      module:'myth', def:'尝百草、辨药性、教耕作的农业之神。', analogy:'中华版本的"农业 + 医药"创制者。'},
  {id:'huangdi',   name:'黄帝',     en:'Yellow Emperor',module:'myth', def:'传说中华民族共祖，战胜蚩尤、统一华夏部落联盟。', analogy:'政治意义上的"民族始祖"。'},
  {id:'chiyou',    name:'蚩尤',     en:'Chiyou',        module:'myth', def:'与黄帝大战于涿鹿的部落首领，南方苗蛮先祖。', analogy:'黄帝叙事中的"另一方"。'},
  {id:'yao-shun-yu',name:'尧舜禹',  en:'Yao-Shun-Yu',   module:'myth', def:'三位上古贤王，行禅让之制；禹治水、传位于子启而废禅让。', analogy:'禅让制典范，禹之后转为家天下。'},
  {id:'shanrang',  name:'禅让',     en:'Abdication',    module:'myth', def:'传说中尧让位于舜、舜让位于禹的传贤不传子制度。', analogy:'最早的"选贤"叙事，与家天下相对。'},

  // 夏商周 xsz
  {id:'xia-qi',    name:'夏启',     en:'Qi of Xia',     module:'xsz',  def:'禹之子，开启"家天下"，建立夏朝，结束禅让。', analogy:'政权由公转私的转折点。'},
  {id:'jiagu',     name:'甲骨文',   en:'Oracle Bone Script',module:'xsz', def:'刻在龟甲兽骨上的商代占卜文字，最早系统汉字。', analogy:'相当于商王朝的"国务日记"。'},
  {id:'shang-tang',name:'商汤',     en:'Tang of Shang', module:'xsz',  def:'商朝开国君主，"汤武革命"灭夏建商。', analogy:'第一次"以下犯上"的成功王朝更替。'},
  {id:'wuwang',    name:'周武王',   en:'King Wu of Zhou',module:'xsz', def:'周朝开国之君，伐纣灭商，建立周朝。', analogy:'继商汤之后的第二次"汤武革命"。'},
  {id:'zhougong',  name:'周公',     en:'Duke of Zhou',  module:'xsz',  def:'武王之弟，制礼作乐、辅佐成王，奠定西周礼乐制度。', analogy:'中华礼乐制度的总设计师。'},
  {id:'fengjian',  name:'分封制',   en:'Fengjian',      module:'xsz',  def:'周天子分封宗室与功臣建国，建立等级宗法秩序。', analogy:'类似中世纪欧洲采邑制的层级封建。'},
  {id:'jingtian',  name:'井田制',   en:'Well-field System',module:'xsz', def:'相传周代将土地划成"井"字九份，八家私田中间公田。', analogy:'理想化的集体劳动土地制度。'},
  {id:'qingtong',  name:'青铜器',   en:'Bronze Ware',   module:'xsz',  def:'商周代表器物，礼器+兵器+食器；铸有铭文。', analogy:'权力与宗教仪式的物质载体。'},
  {id:'liyue',     name:'礼乐',     en:'Rites and Music',module:'xsz', def:'周公所制的礼仪制度与配套音乐，规定等级与秩序。', analogy:'西周社会的"宪法 + 国歌"。'},

  // 春秋战国 cqzg
  {id:'kongzi',    name:'孔子',     en:'Confucius',     module:'cqzg', def:'儒家创始人，主张"仁"与礼治；述而不作，传弟子三千。', analogy:'中华思想的"教师 + 政治改革家"。'},
  {id:'mengzi',    name:'孟子',     en:'Mencius',       module:'cqzg', def:'儒家亚圣，主张"性善"与"民贵君轻"。', analogy:'儒家的"理想主义版"。'},
  {id:'laozi',     name:'老子',     en:'Laozi',         module:'cqzg', def:'道家创始人，著《道德经》，主张"无为"。', analogy:'反向思维与自然哲学的祖师。'},
  {id:'zhuangzi',  name:'庄子',     en:'Zhuangzi',      module:'cqzg', def:'道家代表，主张逍遥自由，著《庄子》。', analogy:'东方的"自由派哲学家"。'},
  {id:'mozi',      name:'墨子',     en:'Mozi',          module:'cqzg', def:'墨家创始人，主张"兼爱""非攻"，工匠出身。', analogy:'第一个"反战 + 普世爱"思想家。'},
  {id:'hanfei',    name:'韩非',     en:'Han Feizi',     module:'cqzg', def:'法家集大成者，主张以法、术、势治国。', analogy:'秦帝国制度的理论先驱。'},
  {id:'shangyang', name:'商鞅',     en:'Shang Yang',    module:'cqzg', def:'秦国变法的主持人，开阡陌、废井田、重耕战。', analogy:'最彻底也最残酷的法家改革家。'},
  {id:'baijia',    name:'百家争鸣', en:'Hundred Schools', module:'cqzg', def:'春秋战国诸子思想空前繁荣的现象，儒道墨法名兵农等并立。', analogy:'中华思想的"轴心时代"。'},
  {id:'hezong',    name:'合纵连横', en:'Vertical/Horizontal Alliances', module:'cqzg', def:'战国晚期苏秦、张仪倡导的两种外交策略。', analogy:'多国博弈中的"反霸联盟 vs 投靠霸主"。'},
  {id:'sunzi',     name:'孙子',     en:'Sun Tzu',       module:'cqzg', def:'兵家代表，著《孙子兵法》十三篇，论战与不战。', analogy:'东方军事思想的奠基者，影响至今。'},
  {id:'wuba',      name:'春秋五霸', en:'Five Hegemons', module:'cqzg', def:'春秋时期先后称霸的诸侯,常说齐桓晋文楚庄秦穆吴越等。', analogy:'诸侯版的"群雄逐鹿"。'},
  {id:'qixiong',   name:'战国七雄', en:'Seven Warring States',module:'cqzg', def:'战国后期并存的七个强国:秦楚齐燕赵魏韩。', analogy:'战国版"G7",最终由秦统一。'},

  // 秦 qin
  {id:'qinshihuang',name:'秦始皇',  en:'Qin Shi Huang', module:'qin',  def:'嬴政,中国第一个皇帝,统一六国、统一文字度量衡。', analogy:'中华大一统格局的奠基者。'},
  {id:'junxian',   name:'郡县制',   en:'Junxian System',module:'qin',  def:'秦废分封,设郡县,郡守由中央任命。', analogy:'最早的"中央集权式行政区划"。'},
  {id:'changcheng',name:'长城',     en:'Great Wall',    module:'qin',  def:'秦始皇连接战国旧城,防御匈奴的北方长墙;后历代延伸。', analogy:'横跨两千年的国家防御工程。'},
  {id:'fenshu',    name:'焚书坑儒', en:'Burning of Books',module:'qin',def:'秦始皇为统一思想下令焚烧诸子典籍、坑杀儒生。', analogy:'最早的"思想控制"案例。'},
  {id:'shutongwen',name:'书同文',   en:'Unified Script',module:'qin',  def:'秦统一文字为"小篆",后简化为隶书。', analogy:'信息标准化的开端。'},
  {id:'sui-zhi',   name:'秦二世',   en:'Qin Er Shi',    module:'qin',  def:'胡亥,秦始皇之子,在位仅三年被赵高所杀。', analogy:'帝国速亡的注脚。'},

  // 两汉 han
  {id:'liubang',   name:'刘邦',     en:'Liu Bang',      module:'han',  def:'西汉开国之君,亭长出身,垓下击败项羽。', analogy:'第一个"布衣天子"。'},
  {id:'xiangyu',   name:'项羽',     en:'Xiang Yu',      module:'han',  def:'西楚霸王,贵族出身,与刘邦争天下败于乌江。', analogy:'失败的英雄叙事典范。'},
  {id:'wenjing',   name:'文景之治', en:'Reign of Wen-Jing',module:'han',def:'汉文帝、景帝休养生息、轻徭薄赋的盛世。', analogy:'西汉"经济奇迹"的奠基期。'},
  {id:'hanwu',     name:'汉武帝',   en:'Emperor Wu',    module:'han',  def:'刘彻,西汉强盛期君主,北征匈奴、独尊儒术、设察举。', analogy:'汉帝国的"巅峰皇帝"。'},
  {id:'silk-road', name:'丝绸之路', en:'Silk Road',     module:'han',  def:'张骞通西域后形成的东西方贸易通道。', analogy:'古代版的"全球化"动脉。'},
  {id:'zhang-qian',name:'张骞',     en:'Zhang Qian',    module:'han',  def:'汉武帝时期两次出使西域,开通丝路。', analogy:'中国的"哥伦布"(陆上版)。'},
  {id:'rujia',     name:'独尊儒术', en:'Confucianism Supremacy',module:'han',def:'汉武帝采董仲舒议,罢黜百家、独尊儒术。', analogy:'国家意识形态的官方定制。'},
  {id:'chaju',     name:'察举制',   en:'Chaju System',  module:'han',  def:'汉代地方推举孝廉、茂才入仕的制度。', analogy:'科举之前的"举荐"型选官。'},
  {id:'wangmang',  name:'王莽',     en:'Wang Mang',     module:'han',  def:'西汉外戚,篡汉建"新"朝,新政失败被杀。', analogy:'两汉间的"异端皇帝"。'},
  {id:'guangwu',   name:'光武中兴', en:'Guangwu Restoration',module:'han',def:'刘秀重建汉朝(东汉),恢复汉室,中兴之治。', analogy:'汉朝的"第二次创业"。'},
  {id:'simaqian',  name:'司马迁',   en:'Sima Qian',     module:'han',  def:'汉武帝时期太史令,著《史记》开纪传体先河。', analogy:'中华史学的奠基人。'},
  {id:'shiji',     name:'史记',     en:'Records of Grand Historian',module:'han',def:'司马迁所著纪传体通史,记黄帝至汉武三千年事。', analogy:'东方版的"通史巨著"。'},
  {id:'huangjin',  name:'黄巾起义', en:'Yellow Turban Rebellion',module:'han',def:'东汉末年张角领导的农民起义,触发军阀混战。', analogy:'东汉灭亡的导火索。'},

  // 三国两晋南北朝 weijin
  {id:'caocao',    name:'曹操',     en:'Cao Cao',       module:'weijin',def:'东汉末年权臣,挟天子以令诸侯,曹魏奠基人。', analogy:'乱世枭雄的代表。'},
  {id:'liubei',    name:'刘备',     en:'Liu Bei',       module:'weijin',def:'蜀汉开国之君,以"汉室宗亲"号召,三顾茅庐请诸葛亮。', analogy:'弱势创业者的标杆。'},
  {id:'sunquan',   name:'孙权',     en:'Sun Quan',      module:'weijin',def:'东吴开国之君,据江东自立。', analogy:'三国中"守成"的代表。'},
  {id:'zhugeliang',name:'诸葛亮',   en:'Zhuge Liang',   module:'weijin',def:'蜀汉丞相,六出祁山北伐;智慧化身。', analogy:'中华版"鞠躬尽瘁"的政治家。'},
  {id:'simayan',   name:'司马炎',   en:'Sima Yan',      module:'weijin',def:'晋武帝,西晋开国,短暂统一三国。', analogy:'西晋"统一时刻"的开创者。'},
  {id:'wuhu',      name:'五胡乱华', en:'Five Barbarians',module:'weijin',def:'西晋末年匈奴鲜卑羯氐羌等北方民族入主中原。', analogy:'中华版的"民族大迁徙"。'},
  {id:'jiupinzhongzheng',name:'九品中正', en:'Nine-rank System',module:'weijin',def:'魏晋设中正官评士族九品,门第成为入仕主因。', analogy:'阶层固化的"选官内卷"。'},
  {id:'xiaowen',   name:'北魏孝文帝',en:'Emperor Xiaowen',module:'weijin',def:'拓跋宏,推行汉化改革,迁都洛阳,易服易姓。', analogy:'草原政权汉化的范例。'},
  {id:'fojiao',    name:'佛教东传', en:'Buddhism in China',module:'weijin',def:'东汉末经丝路传入,魏晋南北朝大兴,寺院遍地。', analogy:'外来思想的本土化"第一波"。'},
  {id:'xuanxue',   name:'玄学清谈', en:'Mysterious Learning',module:'weijin',def:'魏晋以《老》《庄》《易》为本的思辨之学;清谈成风。', analogy:'失意士族的"哲学避世"。'},

  // 隋唐 sui-tang
  {id:'yangjian',  name:'杨坚',     en:'Yang Jian',     module:'sui-tang',def:'隋文帝,北周外戚,代周建隋,统一南北。', analogy:'结束三百年分裂的"统一者"。'},
  {id:'yangdi',    name:'隋炀帝',   en:'Yang Guang',    module:'sui-tang',def:'隋朝二世,开凿大运河、三征高句丽,致民疲国乱。', analogy:'有功有罪的"亡国之君"。'},
  {id:'yunhe',     name:'大运河',   en:'Grand Canal',   module:'sui-tang',def:'隋炀帝开凿连通南北的水运大动脉。', analogy:'帝国的"主干道",承粮通水。'},
  {id:'keju',      name:'科举制',   en:'Imperial Examination',module:'sui-tang',def:'隋创、唐完善的考试选官制度,延续1300年。', analogy:'最早的"公开考试 + 阶层通道"。'},
  {id:'liyuan',    name:'李渊',     en:'Li Yuan',       module:'sui-tang',def:'唐高祖,隋末起兵建唐。', analogy:'唐帝国的奠基人。'},
  {id:'taizong',   name:'唐太宗',   en:'Emperor Taizong',module:'sui-tang',def:'李世民,玄武门之变后即位,开"贞观之治"。', analogy:'中华明君的标杆。'},
  {id:'wuzetian',  name:'武则天',   en:'Wu Zetian',     module:'sui-tang',def:'中国唯一正统女皇,改国号"周",晚年还政于李唐。', analogy:'帝制时代的女性最高权力者。'},
  {id:'xuanzong',  name:'唐玄宗',   en:'Emperor Xuanzong',module:'sui-tang',def:'李隆基,开元盛世的缔造者,亦因晚年宠杨贵妃致安史之乱。', analogy:'盛极而衰的典型。'},
  {id:'anshi',     name:'安史之乱', en:'An-Shi Rebellion',module:'sui-tang',def:'755-763年安禄山、史思明叛乱,唐由盛转衰的分水岭。', analogy:'帝国转折点。'},
  {id:'libai',     name:'李白',     en:'Li Bai',        module:'sui-tang',def:'盛唐诗人,浪漫主义代表,称"诗仙"。', analogy:'中华诗歌的天才人物。'},
  {id:'dufu',      name:'杜甫',     en:'Du Fu',         module:'sui-tang',def:'盛唐诗人,沉郁顿挫,称"诗圣"。', analogy:'诗歌史学家,纪录乱世。'},
  {id:'jiedushi',  name:'节度使',   en:'Jiedushi',      module:'sui-tang',def:'唐设镇守边疆的军政长官,后导致藩镇割据。', analogy:'失控的"地方军阀"制度。'},
  {id:'wudai',     name:'五代十国', en:'Five Dynasties',module:'sui-tang',def:'907-960年间中原五个短命政权与南方十国并立。', analogy:'唐宋间的"过渡期"乱世。'},

  // 宋辽金西夏 song
  {id:'zhao-kuangyin',name:'赵匡胤',en:'Zhao Kuangyin', module:'song', def:'宋太祖,陈桥兵变黄袍加身,杯酒释兵权。', analogy:'武人转文治的开创者。'},
  {id:'chenqiao',  name:'陈桥兵变', en:'Chenqiao Mutiny',module:'song',def:'960年赵匡胤被部下黄袍加身,建立宋朝。', analogy:'最和气的开国"政变"。'},
  {id:'wanganshi', name:'王安石变法',en:'Wang Anshi Reform',module:'song',def:'宋神宗时期推行的青苗、保甲、市易等新法。', analogy:'宋代版"国家干预 + 财政改革"。'},
  {id:'jingkang',  name:'靖康之耻', en:'Jingkang Incident',module:'song',def:'1127年金兵攻陷开封,徽钦二帝被掳;北宋亡。', analogy:'宋代版的"国耻日"。'},
  {id:'zhuxi',     name:'朱熹',     en:'Zhu Xi',        module:'song', def:'南宋理学集大成者,建立程朱理学体系。', analogy:'后世儒家正统的塑造者。'},
  {id:'sushi',     name:'苏轼',     en:'Su Shi',        module:'song', def:'北宋文豪,诗词文俱佳,豁达旷达。', analogy:'宋代版的"文化超新星"。'},
  {id:'yuefei',    name:'岳飞',     en:'Yue Fei',       module:'song', def:'南宋抗金名将,十二道金牌召回后被秦桧害死于风波亭。', analogy:'忠义文化的最高图腾。'},
  {id:'huozi',     name:'活字印刷', en:'Movable Type',  module:'song', def:'北宋毕昇发明的胶泥活字印刷术。', analogy:'信息复制成本的革命。'},
  {id:'song-poems',name:'宋词',     en:'Song Ci',       module:'song', def:'宋代代表文学,长短句配乐,豪放婉约两派。', analogy:'宋代的"流行歌词"。'},
  {id:'lixue',     name:'程朱理学', en:'Neo-Confucianism',module:'song',def:'宋代二程、朱熹发展的儒学新体系,以"理"为核心。', analogy:'后期帝国的官方意识形态。'},

  // 元 yuan
  {id:'genghis',   name:'成吉思汗', en:'Genghis Khan',  module:'yuan', def:'铁木真,统一蒙古,横扫欧亚的草原大帝。', analogy:'人类历史最大陆地帝国的开创者。'},
  {id:'kublai',    name:'忽必烈',   en:'Kublai Khan',   module:'yuan', def:'元世祖,建立元朝、定都大都(北京),灭南宋。', analogy:'蒙古帝国转型为中原王朝的关键。'},
  {id:'xingsheng', name:'行省制',   en:'Province System',module:'yuan',def:'元代设行中书省(行省),为后世省级行政奠基。', analogy:'现代省制的雏形。'},
  {id:'yuanqu',    name:'元曲',     en:'Yuan Opera',    module:'yuan', def:'元代代表文学,杂剧 + 散曲,关汉卿等名家。', analogy:'戏剧文学的"中国黄金期"。'},
  {id:'mongol-empire',name:'蒙古帝国',en:'Mongol Empire',module:'yuan',def:'13世纪蒙古各汗国构成的横跨欧亚的征服帝国。', analogy:'前现代版的"全球化"。'},

  // 明 ming
  {id:'zhu-yuanzhang',name:'朱元璋',en:'Zhu Yuanzhang', module:'ming', def:'明太祖,放牛娃、和尚出身,起义建明。', analogy:'最草根的"农民皇帝"。'},
  {id:'yongle',    name:'永乐帝',   en:'Yongle Emperor',module:'ming', def:'朱棣,靖难夺位后迁都北京,派郑和下西洋。', analogy:'明朝的"盛世皇帝"。'},
  {id:'zhenghe',   name:'郑和',     en:'Zheng He',      module:'ming', def:'永乐至宣德间七下西洋,远达东非。', analogy:'比哥伦布早90年的航海家。'},
  {id:'tumu',      name:'土木堡之变',en:'Tumu Crisis',  module:'ming', def:'1449年明英宗亲征瓦剌被俘,明朝由盛转衰。', analogy:'明代版的"安史"转折。'},
  {id:'zhang-juzheng',name:'张居正',en:'Zhang Juzheng',module:'ming', def:'明万历初年首辅,推行"一条鞭法"等改革。', analogy:'后期帝国的最后一次大改革。'},
  {id:'dongchang', name:'东厂',     en:'Eastern Depot', module:'ming', def:'明代设立的特务机构,由宦官掌控。', analogy:'帝制版"国安局"。'},
  {id:'haijin',    name:'海禁',     en:'Sea Ban',       module:'ming', def:'明清时期限制海上贸易与人员出入的政策。', analogy:'对外封闭的源头。'},
  {id:'wangyangming',name:'王阳明', en:'Wang Yangming', module:'ming', def:'明代心学大师,主张"知行合一""致良知"。', analogy:'宋明理学的另一支高峰。'},
  {id:'baiyin',    name:'白银时代', en:'Silver Era',    module:'ming', def:'明中后期美洲、日本白银大量流入,促进货币经济。', analogy:'前现代版的"全球资本流动"。'},
  {id:'mingmo',    name:'明末农民军',en:'Late Ming Rebels',module:'ming',def:'李自成、张献忠等领导的农民起义,直接灭明。', analogy:'王朝末期的"流寇 + 起义"。'},

  // 清 qing
  {id:'shunzhi',   name:'顺治',     en:'Shunzhi',       module:'qing', def:'清世祖,清入关后第一帝。', analogy:'满清"在中原立足"的开端。'},
  {id:'kangxi',    name:'康熙',     en:'Kangxi',        module:'qing', def:'清圣祖,平三藩、收台湾、抗沙俄;奠定康乾盛世。', analogy:'中华历史在位最久的明君。'},
  {id:'yongzheng', name:'雍正',     en:'Yongzheng',     module:'qing', def:'清世宗,严吏治、改土归流、设军机处。', analogy:'康乾间的"勤政皇帝"。'},
  {id:'qianlong',  name:'乾隆',     en:'Qianlong',      module:'qing', def:'清高宗,在位60年,版图与文治达顶峰,亦埋下颓势。', analogy:'盛极而衰的转折人物。'},
  {id:'yapian',    name:'鸦片战争', en:'Opium War',     module:'qing', def:'1840-1842年清英之战,签《南京条约》,中国近代化起点。', analogy:'中国近代史的"起点钟声"。'},
  {id:'taiping',   name:'太平天国', en:'Taiping Rebellion',module:'qing',def:'1851-1864年洪秀全领导的农民起义,席卷半个中国。', analogy:'最惨烈的清末内乱。'},
  {id:'yangwu',    name:'洋务运动', en:'Self-Strengthening',module:'qing',def:'1860年代起"师夷长技以制夷"的现代化尝试。', analogy:'中国的"明治维新"试错版。'},
  {id:'jiawu',     name:'甲午战争', en:'Sino-Japanese War',module:'qing',def:'1894-1895年中日战争,清败于日,洋务破产。', analogy:'清帝国最后的尊严崩塌。'},
  {id:'wuxu',      name:'戊戌变法', en:'Hundred Days Reform',module:'qing',def:'1898年光绪与康梁推行的现代化改革,被慈禧镇压。', analogy:'失败的体制内变法。'},
  {id:'cixi',      name:'慈禧',     en:'Empress Dowager Cixi',module:'qing',def:'晚清实际统治者,垂帘听政近半世纪。', analogy:'晚清"实际掌门人"。'},
  {id:'xinhai',    name:'辛亥革命', en:'Xinhai Revolution',module:'qing',def:'1911年武昌起义,推翻清朝,结束两千年帝制。', analogy:'中华版的"大革命"。'},
  {id:'sunzhongshan',name:'孙中山', en:'Sun Yat-sen',   module:'qing', def:'中华民国国父,三民主义提出者,创建同盟会。', analogy:'中国近代民主革命的旗手。'},

  // 民国 roc
  {id:'yuanshikai',name:'袁世凯',   en:'Yuan Shikai',   module:'roc',  def:'北洋军阀首领,接孙中山任民国大总统,曾称帝83天。', analogy:'民初最具争议的强人。'},
  {id:'beiyang',   name:'北洋军阀', en:'Beiyang Warlords',module:'roc',def:'袁世凯死后(1916-1928)分裂的军阀派系,皖系直系奉系。', analogy:'共和招牌下的军阀混战。'},
  {id:'wusi',      name:'五四运动', en:'May Fourth Movement',module:'roc',def:'1919年因巴黎和会引发的青年学生爱国 + 文化革新运动。', analogy:'中华现代思想的开端。'},
  {id:'xinwenhua', name:'新文化运动',en:'New Culture Movement',module:'roc',def:'1915起《新青年》主导的反传统、倡科学民主运动。', analogy:'中华版的"启蒙运动"。'},
  {id:'beifa',     name:'北伐',     en:'Northern Expedition',module:'roc',def:'1926-1928年蒋介石率国民革命军北伐统一中国。', analogy:'国民政府名义统一的关键战役。'},
  {id:'jiangjieshi',name:'蒋介石',  en:'Chiang Kai-shek',module:'roc',  def:'国民党领袖,民国实际领导者;败退台湾。', analogy:'近代中国的"两条道路"之一。'},
  {id:'maozedong', name:'毛泽东',   en:'Mao Zedong',    module:'roc',  def:'中共领袖,创立井冈山根据地、领导抗战与解放战争。', analogy:'近代中国"另一条道路"的旗手。'},
  {id:'kangzhan',  name:'抗日战争', en:'War of Resistance',module:'roc',def:'1937-1945年中华民族抗击日本侵略的全面战争。', analogy:'近代中国最大的民族战争。'},
  {id:'changzheng',name:'长征',     en:'Long March',    module:'roc',  def:'1934-1936年红军从苏区到陕北的战略转移,二万五千里。', analogy:'中共革命的精神图腾。'},

  // 新中国前期 prc1
  {id:'kaiguo',    name:'开国大典', en:'PRC Founding',  module:'prc1', def:'1949年10月1日,毛泽东在天安门城楼宣告新中国成立。', analogy:'当代中国的元年时刻。'},
  {id:'tugai',     name:'土地改革', en:'Land Reform',   module:'prc1', def:'1950-52年没收地主土地分给农民,彻底变革农村结构。', analogy:'最彻底的一次农村革命。'},
  {id:'kangmei',   name:'抗美援朝', en:'Korea War',     module:'prc1', def:'1950-1953年志愿军赴朝作战,与美军打成平局。', analogy:'新中国的"立国之战"。'},
  {id:'sanjiaoyihua',name:'一化三改',en:'First Five-Year Plan',module:'prc1',def:'1953-1957工业化 + 对农业、手工业、资本主义工商业的社会主义改造。', analogy:'计划经济体制的奠基期。'},
  {id:'dayuejin',  name:'大跃进',   en:'Great Leap Forward',module:'prc1',def:'1958-1960激进经济运动,导致严重困难,1959-61饥荒。', analogy:'激进发展的反面教训。'},
  {id:'wenge',     name:'文化大革命', en:'Cultural Revolution',module:'prc1',def:'1966-1976年发动的政治运动,十年浩劫。', analogy:'当代中国最沉重的一段历史。'},

  // 改革开放 prc2
  {id:'dengxiaoping',name:'邓小平', en:'Deng Xiaoping', module:'prc2', def:'中共第二代领导核心,1978年开启改革开放。', analogy:'当代中国"总设计师"。'},
  {id:'gaige',     name:'改革开放', en:'Reform and Opening', module:'prc2',def:'1978年十一届三中全会启动的经济体制改革与对外开放政策。', analogy:'当代中国的"重启键"。'},
  {id:'tequ',      name:'经济特区', en:'Special Economic Zone',module:'prc2',def:'1980年起设深圳、珠海、汕头、厦门、海南五大特区。', analogy:'改革的"试验田"。'},
  {id:'wto',       name:'加入WTO', en:'WTO Accession', module:'prc2', def:'2001年中国正式加入世界贸易组织,深度融入全球化。', analogy:'当代中国全球化的关键节点。'},
  {id:'chengzhenhua',name:'城镇化', en:'Urbanization',  module:'prc2', def:'1990年代起农村人口向城镇大规模迁移的进程。', analogy:'最大规模的人类城市化运动。'},
  {id:'hulianwang', name:'互联网产业',en:'Internet Industry',module:'prc2',def:'1995年起中国互联网产业从门户到移动到平台的发展。', analogy:'当代中国新一代的产业引擎。'},
  {id:'fuxing',    name:'中华民族伟大复兴',en:'National Rejuvenation',module:'prc2',def:'当代中国发展的总体目标,以两个一百年为里程碑。', analogy:'当代中国的总愿景。'},
];

})(window.CHS);