/* 艺术家图鉴数据(世界艺术通史)· 手工维护,非 build.js 生成
   {id, name, born, died, era(模块id), role, oneliner, works[], related_lessons[]} */
window.WAH_FIGURES = [
  /* 古代近东与埃及 */
  {id:'imhotep',name:'伊姆霍特普',born:'前 27 世纪',died:'前 27 世纪',era:'ancient-east',role:'建筑师·医师(神化)',oneliner:'古王国阶梯金字塔的设计者,后被神化为智慧之神。',works:['左塞尔阶梯金字塔'],related_lessons:['ancient-east/05-egypt-old']},
  {id:'thutmose',name:'图特摩斯',born:'前 14 世纪',died:'前 14 世纪',era:'ancient-east',role:'雕塑师',oneliner:'新王国宫廷雕塑师,其作坊出土了著名的纳芙蒂蒂胸像。',works:['纳芙蒂蒂彩色胸像'],related_lessons:['ancient-east/06-egypt-new']},

  /* 古希腊 */
  {id:'phidias',name:'菲狄亚斯',born:'前 500',died:'前 432',era:'aegean-greece',role:'雕塑家',oneliner:'古典盛期宗师,帕特农神庙雕塑与宙斯巨像出自其手。',works:['帕特农神庙浮雕','雅典娜神像'],related_lessons:['aegean-greece/04-classical']},
  {id:'myron',name:'米隆',born:'前 480',died:'前 440',era:'aegean-greece',role:'雕塑家',oneliner:'《掷铁饼者》定格运动瞬间,古典比例的典范。',works:['掷铁饼者'],related_lessons:['aegean-greece/04-classical']},
  {id:'polykleitos',name:'波留克列特斯',born:'前 480',died:'前 440',era:'aegean-greece',role:'雕塑家·理论家',oneliner:'写《规范》论人体比例,《持矛者》是其公式。',works:['持矛者'],related_lessons:['aegean-greece/04-classical']},
  {id:'praxiteles',name:'普拉克西特列斯',born:'前 400',died:'前 330',era:'aegean-greece',role:'雕塑家',oneliner:'古典晚期把神拉下凡间,第一个做真人大小的裸体女神。',works:['克尼多斯的阿芙洛狄忒','赫尔墨斯与小酒神'],related_lessons:['aegean-greece/05-late-classical']},

  /* 古罗马 */
  {id:'vitruvius',name:'维特鲁威',born:'前 80',died:'前 15',era:'rome',role:'建筑师·理论家',oneliner:'《建筑十书》传世,文艺复兴的"维特鲁威人"由此而来。',works:['《建筑十书》'],related_lessons:['rome/02-architecture']},

  /* 拜占庭 */
  {id:'rublev',name:'安德烈·鲁布廖夫',born:'1360',died:'1428',era:'byzantine',role:'圣像画师',oneliner:'东正教圣像画巅峰,色彩柔和、目光慈悲。',works:['三位一体圣像'],related_lessons:['byzantine/04-icon']},

  /* 伊斯兰 */
  {id:'sinan',name:'米马尔·锡南',born:'1489',died:'1588',era:'islamic',role:'建筑师',oneliner:'奥斯曼帝国首席建筑师,清真寺穹顶的大师。',works:['苏莱曼尼耶清真寺','塞利米耶清真寺'],related_lessons:['islamic/01-mosque']},
  {id:'bihzad',name:'毕扎德',born:'1450',died:'1535',era:'islamic',role:'细密画师',oneliner:'波斯细密画集大成者,构图繁密、线条如丝。',works:['哈菲兹诗集插图'],related_lessons:['islamic/04-miniature']},

  /* 中世纪 */
  {id:'suger',name:'絮热修道院长',born:'1081',died:'1151',era:'medieval',role:'修道院长·哥特推手',oneliner:'圣德尼教堂改建,被视为哥特式诞生的关键人物。',works:['圣德尼教堂改建'],related_lessons:['medieval/03-gothic-born']},

  /* 文艺复兴 */
  {id:'giotto',name:'乔托',born:'1267',died:'1337',era:'renaissance',role:'画家',oneliner:'第一个让人物有重量、有表情的画家,文艺复兴的第一步。',works:['斯克罗威尼礼拜堂壁画','犹大之吻'],related_lessons:['renaissance/01-giotto']},
  {id:'brunelleschi',name:'布鲁内莱斯基',born:'1377',died:'1446',era:'renaissance',role:'建筑师·发明家',oneliner:'发明线性透视,还造出了佛罗伦萨大教堂穹顶。',works:['佛罗伦萨穹顶'],related_lessons:['renaissance/02-early-renaissance']},
  {id:'masaccio',name:'马萨乔',born:'1401',died:'1428',era:'renaissance',role:'画家',oneliner:'第一个把透视和明暗用进湿壁画的人。',works:['圣三位一体','逐出伊甸园'],related_lessons:['renaissance/02-early-renaissance']},
  {id:'donatello',name:'多纳泰罗',born:'1386',died:'1466',era:'renaissance',role:'雕塑家',oneliner:'自古罗马后第一个真人大小的裸体青铜大卫。',works:['青铜大卫'],related_lessons:['renaissance/02-early-renaissance']},
  {id:'botticelli',name:'波提切利',born:'1445',died:'1510',era:'renaissance',role:'画家',oneliner:'线条优雅,把异教神话重新画回基督教的世界。',works:['维纳斯的诞生','春'],related_lessons:['renaissance/02-early-renaissance']},
  {id:'davinci',name:'达·芬奇',born:'1452',died:'1519',era:'renaissance',role:'画家·全才',oneliner:'好奇一切,用晕涂法让蒙娜丽莎的微笑成了谜。',works:['蒙娜丽莎','最后的晚餐'],related_lessons:['renaissance/03-davinci']},
  {id:'michelangelo',name:'米开朗基罗',born:'1475',died:'1564',era:'renaissance',role:'雕塑家·画家',oneliner:'人体即宇宙,大理石里看见生命,天顶画压倒一生。',works:['大卫','西斯廷天顶画'],related_lessons:['renaissance/04-michelangelo']},
  {id:'raphael',name:'拉斐尔',born:'1483',died:'1520',era:'renaissance',role:'画家',oneliner:'和谐与优雅的集大成者,古典完美的代言人。',works:['雅典学院','西斯廷圣母'],related_lessons:['renaissance/05-raphael']},
  {id:'titian',name:'提香',born:'1488',died:'1576',era:'renaissance',role:'画家',oneliner:'威尼斯画派领袖,色彩与油画技法的革新者。',works:['乌尔比诺的维纳斯'],related_lessons:['renaissance/06-venice']},
  {id:'vaneyck',name:'凡·艾克',born:'1390',died:'1441',era:'renaissance',role:'画家',oneliner:'北方文艺复兴,把油画颜料用到极致,细节惊入微。',works:['根特祭坛画','阿尔诺芬尼夫妇像'],related_lessons:['renaissance/07-northern']},
  {id:'durer',name:'丢勒',born:'1471',died:'1528',era:'renaissance',role:'画家·版画家',oneliner:'北方的达芬奇,自画像自信,版画让作品广泛传播。',works:['28岁自画像','忧郁I'],related_lessons:['renaissance/08-durer']},

  /* 巴洛克 */
  {id:'caravaggio',name:'卡拉瓦乔',born:'1571',died:'1610',era:'baroque',role:'画家',oneliner:'极端明暗与市井模特,巴洛克戏剧光的源头。',works:['圣马太蒙召','微醺的酒神'],related_lessons:['baroque/01-caravaggio']},
  {id:'bernini',name:'贝尼尼',born:'1598',died:'1680',era:'baroque',role:'雕塑家·建筑师',oneliner:'大理石在他手里像能呼吸,巴洛克动感的化身。',works:['圣特雷莎的狂喜','阿波罗与达芙妮'],related_lessons:['baroque/02-bernini']},
  {id:'rembrandt',name:'伦勃朗',born:'1606',died:'1669',era:'baroque',role:'画家',oneliner:'用光刻画灵魂,一生自画像是一部内心史。',works:['夜巡','浪子回头'],related_lessons:['baroque/03-rembrandt']},
  {id:'vermeer',name:'维米尔',born:'1632',died:'1675',era:'baroque',role:'画家',oneliner:'荷兰小画派,日常里的静光与点彩。',works:['戴珍珠耳环的少女','倒牛奶的女仆'],related_lessons:['baroque/04-vermeer']},
  {id:'velazquez',name:'委拉斯凯兹',born:'1599',died:'1660',era:'baroque',role:'宫廷画家',oneliner:'西班牙宫廷,笔触松灵,西方肖像的高峰。',works:['宫娥'],related_lessons:['baroque/05-spanish-french']},
  {id:'poussin',name:'普桑',born:'1594',died:'1665',era:'baroque',role:'画家',oneliner:'在罗马的法国人,古典理性的旗手,影响法国学院。',works:['阿卡迪亚牧人'],related_lessons:['baroque/05-spanish-french']},
  {id:'rubens',name:'鲁本斯',born:'1577',died:'1640',era:'baroque',role:'画家',oneliner:'佛兰德斯巴洛克,丰满脸庞与翻滚肉体的壮观。',works:['劫夺吕西普的女儿'],related_lessons:['baroque/03-rembrandt']},

  /* 18-19 世纪 */
  {id:'david',name:'雅克-路易·大卫',born:'1748',died:'1825',era:'c19',role:'画家',oneliner:'新古典主义旗手,革命与拿破仑的官方画笔。',works:['荷拉斯兄弟之誓','马拉之死'],related_lessons:['c19/01-neoclassicism']},
  {id:'delacroix',name:'德拉克洛瓦',born:'1798',died:'1863',era:'c19',role:'画家',oneliner:'浪漫主义领袖,色彩与激情对抗古典的线条。',works:['自由引导人民','萨达纳帕勒之死'],related_lessons:['c19/02-romanticism']},
  {id:'turner',name:'透纳',born:'1775',died:'1851',era:'c19',role:'画家',oneliner:'把风景画成光与风暴,预告了印象派。',works:['雨、蒸汽和速度','奴隶船'],related_lessons:['c19/03-romantic-landscape']},
  {id:'courbet',name:'库尔贝',born:'1819',died:'1877',era:'c19',role:'画家',oneliner:'写实主义,只画自己看得见的东西,拒绝美化。',works:['采石工','奥尔南的葬礼'],related_lessons:['c19/04-realism']},
  {id:'manet',name:'马奈',born:'1832',died:'1883',era:'c19',role:'画家',oneliner:'画现代生活,把传统题材拉到当下,印象派的桥梁。',works:['草地上的午餐','奥林匹亚'],related_lessons:['c19/05-manet']},
  {id:'monet',name:'莫奈',born:'1840',died:'1926',era:'c19',role:'画家',oneliner:'印象派旗手,追着光画同一堆干草和睡莲。',works:['印象·日出','睡莲'],related_lessons:['c19/06-impressionism']},
  {id:'renoir',name:'雷诺阿',born:'1841',died:'1919',era:'c19',role:'画家',oneliner:'印象派里最温暖的人,画阳光下的欢聚。',works:['煎饼磨坊的舞会'],related_lessons:['c19/06-impressionism']},
  {id:'cezanne',name:'塞尚',born:'1839',died:'1906',era:'c19',role:'画家',oneliner:'后印象派,用几何看世界,现代艺术之父。',works:['圣维克多山','玩牌者'],related_lessons:['c19/07-post-impressionism']},
  {id:'vangogh',name:'梵高',born:'1853',died:'1890',era:'c19',role:'画家',oneliner:'用旋转笔触和浓烈色彩把情绪直接泼上画布。',works:['星月夜','向日葵'],related_lessons:['c19/07-post-impressionism']},
  {id:'gauguin',name:'高更',born:'1848',died:'1903',era:'c19',role:'画家',oneliner:'放弃股票经纪人生涯,去塔希提寻找原始的纯真。',works:['我们从哪里来'],related_lessons:['c19/07-post-impressionism']},

  /* 现代 */
  {id:'matisse',name:'马蒂斯',born:'1869',died:'1954',era:'modern',role:'画家',oneliner:'野兽派领袖,把色彩从物体上解放出来。',works:['舞蹈','红色的和谐'],related_lessons:['modern/01-fauvism']},
  {id:'picasso',name:'毕加索',born:'1881',died:'1973',era:'modern',role:'画家·雕塑家',oneliner:'一生不断变体,立体主义把物体打碎重拼。',works:['亚维农的少女','格尔尼卡'],related_lessons:['modern/02-cubism']},
  {id:'braque',name:'布拉克',born:'1882',died:'1963',era:'modern',role:'画家',oneliner:'与毕加索共同发明立体主义,更沉稳冷静。',works:['小提琴与水罐'],related_lessons:['modern/02-cubism']},
  {id:'munch',name:'蒙克',born:'1863',died:'1944',era:'modern',role:'画家',oneliner:'表现主义先驱,把焦虑与恐惧画成一张脸。',works:['呐喊'],related_lessons:['modern/03-expressionism']},
  {id:'kandinsky',name:'康定斯基',born:'1866',died:'1944',era:'modern',role:'画家·理论家',oneliner:'抽象艺术先驱,认为色彩线条本身就能表达。',works:['构成第八号'],related_lessons:['modern/06-abstract']},
  {id:'malevich',name:'马列维奇',born:'1879',died:'1935',era:'modern',role:'画家',oneliner:'至上主义,一个黑方块就是一场革命。',works:['黑方块'],related_lessons:['modern/06-abstract']},
  {id:'duchamp',name:'杜尚',born:'1887',died:'1968',era:'modern',role:'艺术家',oneliner:'一个签名的小便池,炸掉"艺术必须是手工"的观念。',works:['泉','下楼的裸女'],related_lessons:['modern/07-duchamp']},
  {id:'dali',name:'达利',born:'1904',died:'1989',era:'modern',role:'画家',oneliner:'超现实主义,把梦境的软钟挂在枝头。',works:['记忆的永恒'],related_lessons:['modern/05-surrealism']},
  {id:'miro',name:'米罗',born:'1893',died:'1983',era:'modern',role:'画家',oneliner:'超现实里的童心,用星星和生物画一个乐园。',works:['哈乐昆的狂欢'],related_lessons:['modern/05-surrealism']},

  /* 当代 */
  {id:'pollock',name:'波洛克',born:'1912',died:'1956',era:'contemporary',role:'画家',oneliner:'把画布铺地上滴洒颜料,行动即绘画。',works:['秋韵'],related_lessons:['contemporary/01-abstract-expressionism']},
  {id:'rothko',name:'罗斯科',born:'1903',died:'1970',era:'contemporary',role:'画家',oneliner:'大色块浮在画上,让人想哭的冥想。',works:['罗斯科色域'],related_lessons:['contemporary/01-abstract-expressionism']},
  {id:'warhol',name:'安迪·沃霍尔',born:'1928',died:'1987',era:'contemporary',role:'波普艺术家',oneliner:'把玛丽莲和汤罐头印成艺术,复制即风格。',works:['玛丽莲双联','坎贝尔汤罐'],related_lessons:['contemporary/02-pop-art']},
  {id:'lichtenstein',name:'利希滕斯坦',born:'1923',died:'1997',era:'contemporary',role:'波普艺术家',oneliner:'把漫画放大成画,本戴点成了招牌。',works:['哇'],related_lessons:['contemporary/02-pop-art']},
  {id:'smithson',name:'罗伯特·史密森',born:'1938',died:'1973',era:'contemporary',role:'大地艺术家',oneliner:'把艺术搬进荒野,螺旋防波堤随水位涨落。',works:['螺旋形防波堤'],related_lessons:['contemporary/05-installation-land']},
  {id:'kusama',name:'草间弥生',born:'1929',died:'至今',era:'contemporary',role:'装置艺术家',oneliner:'无限的水波点和镜屋,把幻觉变成可走入的空间。',works:['无限镜屋'],related_lessons:['contemporary/05-installation-land']},

  /* 东亚 */
  {id:'gukaizhi',name:'顾恺之',born:'348',died:'409',era:'east-asia',role:'画家',oneliner:'春蚕吐丝般的线描,东晋人物画大家。',works:['女史箴图','洛神赋图'],related_lessons:['east-asia/01-gu-kaizhi']},
  {id:'wudaozi',name:'吴道子',born:'680',died:'759',era:'east-asia',role:'画家',oneliner:'唐代画圣,衣袂飘举的"吴带当风"。',works:['送子天王图(摹本)'],related_lessons:['east-asia/02-tang-painting']},
  {id:'fankuan',name:'范宽',born:'950',died:'1032',era:'east-asia',role:'山水画家',oneliner:'北宋全景山水,大山堂堂、雨点皴。',works:['溪山行旅图'],related_lessons:['east-asia/03-song-landscape']},
  {id:'guoxi',name:'郭熙',born:'1023',died:'1085',era:'east-asia',role:'山水画家·理论家',oneliner:'《林泉高致》论三远,卷云皴画早春。',works:['早春图'],related_lessons:['east-asia/03-song-landscape']},
  {id:'zhaomengfu',name:'赵孟頫',born:'1254',died:'1322',era:'east-asia',role:'书画家',oneliner:'元代复古,以书入画,开文人画新局。',works:['鹊华秋色图'],related_lessons:['east-asia/04-literati']},
  {id:'dongqichang',name:'董其昌',born:'1555',died:'1636',era:'east-asia',role:'书画家·理论家',oneliner:'提出南北宗论,把绘画史重新排了座次。',works:['秋兴八景图'],related_lessons:['east-asia/05-qing-bada']},
  {id:'badashanren',name:'八大山人',born:'1626',died:'1705',era:'east-asia',role:'画家',oneliner:'明遗民,翻白眼的鱼鸟,写意里的孤傲。',works:['荷石水禽图'],related_lessons:['east-asia/05-qing-bada']},
  {id:'hokusai',name:'葛饰北斋',born:'1760',died:'1849',era:'east-asia',role:'浮世绘画师',oneliner:'画了一辈子,巨浪影响了一整个印象派。',works:['神奈川冲浪里'],related_lessons:['east-asia/07-ukiyoe']},
  {id:'hiroshige',name:'歌川广重',born:'1797',died:'1858',era:'east-asia',role:'浮世绘画师',oneliner:'东海道五十三次,雨与雾的风景版画大师。',works:['东海道五十三次'],related_lessons:['east-asia/07-ukiyoe']}
];
