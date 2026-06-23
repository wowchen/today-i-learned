/* 人物图鉴 · 中国历史 · 约90位 */
window.CHS_FIGURES = [
  // myth
  {id:'pangu',name:'盘古',dynasty:'myth',born:'',died:'',role:'神话始祖',oneliner:'开天辟地的创世神。',key_events:['以斧分天地','化身为山川日月'],related_lessons:['myth/02-pangu']},
  {id:'nuwa',name:'女娲',dynasty:'myth',born:'',died:'',role:'神话母神',oneliner:'抟黄土造人，炼五色石补天。',key_events:['造人传说','炼石补天'],related_lessons:['myth/03-nuwa']},
  {id:'fuxi',name:'伏羲',dynasty:'myth',born:'',died:'',role:'文化始祖',oneliner:'画八卦、结网罟，立人文。',key_events:['画八卦','造网罟'],related_lessons:['myth/04-fuxi']},
  {id:'shennong',name:'神农',dynasty:'myth',born:'',died:'',role:'农业之祖',oneliner:'尝百草辨药性，教民耕作。',key_events:['尝百草','教耕作'],related_lessons:['myth/05-yandi-huangdi']},
  {id:'huangdi',name:'黄帝',dynasty:'myth',born:'',died:'',role:'共同始祖',oneliner:'部落联盟首领，战胜蚩尤。',key_events:['涿鹿之战','统一华夏部落'],related_lessons:['myth/05-yandi-huangdi']},
  {id:'yao',name:'尧',dynasty:'myth',born:'',died:'',role:'上古贤王',oneliner:'传贤不传子，让位于舜。',key_events:['禅位于舜'],related_lessons:['myth/06-yaoshunyu']},
  {id:'shun',name:'舜',dynasty:'myth',born:'',died:'',role:'上古贤王',oneliner:'接受尧之禅让，又禅让于禹。',key_events:['受禅于尧','禅位于禹'],related_lessons:['myth/06-yaoshunyu']},
  {id:'yu',name:'禹',dynasty:'myth',born:'',died:'',role:'治水英雄',oneliner:'治水十三年，三过家门而不入；传位于子启。',key_events:['治水','建立夏'],related_lessons:['myth/06-yaoshunyu','xsz/01-xia']},

  // xsz
  {id:'qi',name:'夏启',dynasty:'xsz',born:'',died:'前1978?',role:'夏朝开国',oneliner:'禹之子，开"家天下"局面。',key_events:['继位灭有扈氏'],related_lessons:['xsz/01-xia']},
  {id:'jie',name:'夏桀',dynasty:'xsz',born:'',died:'前1600?',role:'夏末暴君',oneliner:'夏朝末代，被商汤所灭。',key_events:['为商汤所灭'],related_lessons:['xsz/01-xia','xsz/02-shang']},
  {id:'tang',name:'商汤',dynasty:'xsz',born:'',died:'前1588?',role:'商朝开国',oneliner:'以德伐桀，建立商朝。',key_events:['鸣条之战灭夏'],related_lessons:['xsz/02-shang']},
  {id:'wuding',name:'武丁',dynasty:'xsz',born:'',died:'前1192',role:'商朝中兴君主',oneliner:'用傅说、妇好，开"武丁中兴"。',key_events:['武丁中兴','征鬼方'],related_lessons:['xsz/02-shang']},
  {id:'zhou',name:'商纣',dynasty:'xsz',born:'',died:'前1046',role:'商末',oneliner:'商朝末代，牧野兵败自焚。',key_events:['牧野之战'],related_lessons:['xsz/02-shang','xsz/03-west-zhou']},
  {id:'wuwang-fig',name:'周武王',dynasty:'xsz',born:'',died:'前1043',role:'周朝开国',oneliner:'兴兵伐纣，建立西周。',key_events:['牧野之战','分封诸侯'],related_lessons:['xsz/03-west-zhou']},
  {id:'zhougong-fig',name:'周公旦',dynasty:'xsz',born:'',died:'前1095?',role:'周公·摄政',oneliner:'制礼作乐，奠定周制基础。',key_events:['辅佐成王','东征','制礼作乐'],related_lessons:['xsz/03-west-zhou','xsz/05-rites']},

  // cqzg
  {id:'qihuan',name:'齐桓公',dynasty:'cqzg',born:'',died:'前643',role:'春秋首霸',oneliner:'用管仲，九合诸侯。',key_events:['尊王攘夷','葵丘会盟'],related_lessons:['cqzg/02-five-hegemons']},
  {id:'jinwen',name:'晋文公',dynasty:'cqzg',born:'前697?',died:'前628',role:'春秋霸主',oneliner:'流亡十九年后归国称霸。',key_events:['城濮之战','践土会盟'],related_lessons:['cqzg/02-five-hegemons']},
  {id:'kongzi-fig',name:'孔子',dynasty:'cqzg',born:'前551',died:'前479',role:'思想家',oneliner:'儒家创始人，主张仁与礼。',key_events:['周游列国','编订六经'],related_lessons:['cqzg/04-confucius']},
  {id:'laozi-fig',name:'老子',dynasty:'cqzg',born:'前571?',died:'前471?',role:'思想家',oneliner:'道家创始人，著《道德经》。',key_events:['西出函谷'],related_lessons:['cqzg/05-laozi']},
  {id:'mengzi-fig',name:'孟子',dynasty:'cqzg',born:'前372?',died:'前289',role:'思想家',oneliner:'儒家亚圣，倡性善与民本。',key_events:['游说梁齐'],related_lessons:['cqzg/04-confucius']},
  {id:'zhuangzi-fig',name:'庄子',dynasty:'cqzg',born:'前369?',died:'前286?',role:'思想家',oneliner:'道家代表，逍遥自由。',key_events:['著《庄子》'],related_lessons:['cqzg/05-laozi']},
  {id:'mozi-fig',name:'墨子',dynasty:'cqzg',born:'前470?',died:'前391?',role:'思想家',oneliner:'墨家创始人，兼爱非攻。',key_events:['止楚攻宋'],related_lessons:['cqzg/06-mozi']},
  {id:'hanfei-fig',name:'韩非',dynasty:'cqzg',born:'前280?',died:'前233',role:'思想家',oneliner:'法家集大成者。',key_events:['入秦','被害于狱中'],related_lessons:['cqzg/07-hanfei']},
  {id:'shangyang-fig',name:'商鞅',dynasty:'cqzg',born:'前390?',died:'前338',role:'变法家',oneliner:'秦国变法主持人，最终车裂。',key_events:['秦孝公变法','车裂而死'],related_lessons:['cqzg/08-shangyang','qin/01-shangyang-reform']},
  {id:'suqin',name:'苏秦',dynasty:'cqzg',born:'',died:'前284?',role:'纵横家',oneliner:'合纵抗秦，佩六国相印。',key_events:['说六国合纵'],related_lessons:['cqzg/09-hezong']},
  {id:'zhangyi',name:'张仪',dynasty:'cqzg',born:'',died:'前309',role:'纵横家',oneliner:'连横破纵，事秦惠王。',key_events:['连横破六国'],related_lessons:['cqzg/09-hezong']},
  {id:'sunzi-fig',name:'孙武',dynasty:'cqzg',born:'前544?',died:'前470?',role:'兵家',oneliner:'《孙子兵法》作者。',key_events:['吴楚柏举之战'],related_lessons:['cqzg/10-sunzi']},

  // qin
  {id:'qinshihuang-fig',name:'秦始皇',dynasty:'qin',born:'前259',died:'前210',role:'开国皇帝',oneliner:'统一六国，自称始皇帝。',key_events:['统一六国','书同文车同轨','建长城与阿房宫','焚书坑儒'],related_lessons:['qin/02-yingzheng','qin/03-unification','qin/04-junxian']},
  {id:'lisi',name:'李斯',dynasty:'qin',born:'前280?',died:'前208',role:'丞相',oneliner:'辅秦始皇统一，主张焚书。',key_events:['统一文字','焚书议','被赵高所害'],related_lessons:['qin/03-unification','qin/06-books']},
  {id:'zhaogao',name:'赵高',dynasty:'qin',born:'',died:'前207',role:'宦官',oneliner:'矫诏立胡亥，指鹿为马。',key_events:['沙丘之谋','害扶苏','立胡亥'],related_lessons:['qin/07-downfall']},
  {id:'hushi',name:'秦二世胡亥',dynasty:'qin',born:'前230',died:'前207',role:'皇帝',oneliner:'秦末暴政，亡国之君。',key_events:['继位','被赵高所杀'],related_lessons:['qin/07-downfall']},

  // han
  {id:'liubang-fig',name:'刘邦',dynasty:'han',born:'前256',died:'前195',role:'开国皇帝',oneliner:'布衣天子，建立西汉。',key_events:['斩白蛇起义','鸿门宴','垓下之战'],related_lessons:['han/01-chu-han']},
  {id:'xiangyu-fig',name:'项羽',dynasty:'han',born:'前232',died:'前202',role:'西楚霸王',oneliner:'力拔山兮气盖世，败于乌江。',key_events:['巨鹿之战','鸿门宴','乌江自刎'],related_lessons:['han/01-chu-han']},
  {id:'hanwendi',name:'汉文帝',dynasty:'han',born:'前203',died:'前157',role:'皇帝',oneliner:'轻徭薄赋，开文景之治。',key_events:['废肉刑','减赋税'],related_lessons:['han/02-wen-jing']},
  {id:'hanwu-fig',name:'汉武帝',dynasty:'han',born:'前156',died:'前87',role:'皇帝',oneliner:'雄才大略，北伐匈奴，独尊儒术。',key_events:['北伐匈奴','通西域','独尊儒术','设察举'],related_lessons:['han/03-hanwu','han/04-silk-road','han/08-rujia']},
  {id:'zhangqian-fig',name:'张骞',dynasty:'han',born:'前164?',died:'前114',role:'外交家',oneliner:'凿空西域，打通丝绸之路。',key_events:['两次出使西域'],related_lessons:['han/04-silk-road']},
  {id:'weiqing',name:'卫青',dynasty:'han',born:'',died:'前106',role:'将军',oneliner:'七战七捷，封长平侯。',key_events:['漠南之战','漠北决战'],related_lessons:['han/03-hanwu']},
  {id:'huoqubing',name:'霍去病',dynasty:'han',born:'前140',died:'前117',role:'将军',oneliner:'封狼居胥，二十四岁早逝。',key_events:['河西之战','封狼居胥'],related_lessons:['han/03-hanwu']},
  {id:'wangmang-fig',name:'王莽',dynasty:'han',born:'前45',died:'23',role:'新朝皇帝',oneliner:'外戚篡汉建"新"，改革失败。',key_events:['代汉建新','新政'],related_lessons:['han/05-wang-mang']},
  {id:'guangwu-fig',name:'光武帝刘秀',dynasty:'han',born:'前5',died:'57',role:'皇帝',oneliner:'重建汉室，开东汉。',key_events:['昆阳之战','光武中兴'],related_lessons:['han/06-guangwu']},
  {id:'simaqian-fig',name:'司马迁',dynasty:'han',born:'前145?',died:'前86?',role:'史学家',oneliner:'忍辱著《史记》，开纪传体。',key_events:['受宫刑','著《史记》'],related_lessons:['han/10-sima-qian']},
  {id:'caicang',name:'蔡伦',dynasty:'han',born:'',died:'121',role:'宦官·发明家',oneliner:'改良造纸术。',key_events:['改进造纸'],related_lessons:['han/11-east-han-decline']},

  // weijin
  {id:'caocao-fig',name:'曹操',dynasty:'weijin',born:'155',died:'220',role:'政治家·军事家',oneliner:'挟天子以令诸侯，曹魏奠基人。',key_events:['官渡之战','赤壁之战'],related_lessons:['weijin/02-caocao']},
  {id:'liubei-fig',name:'刘备',dynasty:'weijin',born:'161',died:'223',role:'蜀汉开国',oneliner:'织席贩履起家，三顾茅庐。',key_events:['桃园结义','三顾茅庐','夷陵之战'],related_lessons:['weijin/01-three-kingdoms','weijin/03-zhuge-liang']},
  {id:'sunquan-fig',name:'孙权',dynasty:'weijin',born:'182',died:'252',role:'东吴开国',oneliner:'据江东自立，三国鼎立。',key_events:['赤壁联刘抗曹','称帝建吴'],related_lessons:['weijin/01-three-kingdoms']},
  {id:'zhugeliang-fig',name:'诸葛亮',dynasty:'weijin',born:'181',died:'234',role:'丞相·军师',oneliner:'鞠躬尽瘁，死而后已。',key_events:['隆中对','赤壁联吴','六出祁山'],related_lessons:['weijin/03-zhuge-liang']},
  {id:'simayan-fig',name:'司马炎',dynasty:'weijin',born:'236',died:'290',role:'晋武帝',oneliner:'代魏建晋，统一三国。',key_events:['代魏','灭吴统一'],related_lessons:['weijin/04-sima-shi','weijin/05-west-jin']},
  {id:'xiaowen-fig',name:'北魏孝文帝',dynasty:'weijin',born:'467',died:'499',role:'皇帝',oneliner:'推行汉化，迁都洛阳。',key_events:['迁都洛阳','汉化改革'],related_lessons:['weijin/10-north-wei-reform']},

  // sui-tang
  {id:'yangjian-fig',name:'隋文帝杨坚',dynasty:'sui-tang',born:'541',died:'604',role:'开国皇帝',oneliner:'结束三百年分裂。',key_events:['代周建隋','灭陈统一'],related_lessons:['sui-tang/01-sui']},
  {id:'yangdi-fig',name:'隋炀帝',dynasty:'sui-tang',born:'569',died:'618',role:'皇帝',oneliner:'开运河、征高句丽，民力告竭。',key_events:['开大运河','三征高句丽'],related_lessons:['sui-tang/01-sui','sui-tang/02-grand-canal']},
  {id:'liyuan-fig',name:'唐高祖李渊',dynasty:'sui-tang',born:'566',died:'635',role:'开国皇帝',oneliner:'晋阳起兵，建立唐朝。',key_events:['晋阳起兵','建立唐朝'],related_lessons:['sui-tang/04-tang-foundation']},
  {id:'taizong-fig',name:'唐太宗李世民',dynasty:'sui-tang',born:'598',died:'649',role:'皇帝',oneliner:'贞观之治，明君典范。',key_events:['玄武门之变','贞观之治'],related_lessons:['sui-tang/05-zhenguan']},
  {id:'wuzetian-fig',name:'武则天',dynasty:'sui-tang',born:'624',died:'705',role:'女皇',oneliner:'中国唯一正统女皇。',key_events:['立周','晚年还政'],related_lessons:['sui-tang/06-wu-zetian']},
  {id:'xuanzong-fig',name:'唐玄宗',dynasty:'sui-tang',born:'685',died:'762',role:'皇帝',oneliner:'开元盛世主，亦遇安史之乱。',key_events:['开元盛世','安史之乱'],related_lessons:['sui-tang/07-kaiyuan','sui-tang/09-an-lushan']},
  {id:'libai-fig',name:'李白',dynasty:'sui-tang',born:'701',died:'762',role:'诗人',oneliner:'诗仙，浪漫主义巅峰。',key_events:['供奉翰林','放逐'],related_lessons:['sui-tang/08-poetry']},
  {id:'dufu-fig',name:'杜甫',dynasty:'sui-tang',born:'712',died:'770',role:'诗人',oneliner:'诗圣，沉郁顿挫记乱世。',key_events:['安史目击','飘泊蜀地'],related_lessons:['sui-tang/08-poetry']},
  {id:'anlushan',name:'安禄山',dynasty:'sui-tang',born:'703',died:'757',role:'叛将',oneliner:'胡人节度使，反唐自立。',key_events:['范阳起兵','称大燕皇帝'],related_lessons:['sui-tang/09-an-lushan']},
  {id:'yangguifei',name:'杨贵妃',dynasty:'sui-tang',born:'719',died:'756',role:'贵妃',oneliner:'唐玄宗宠妃，缢死马嵬坡。',key_events:['得宠','马嵬之变'],related_lessons:['sui-tang/09-an-lushan']},

  // song
  {id:'zhaokuangyin-fig',name:'宋太祖赵匡胤',dynasty:'song',born:'927',died:'976',role:'开国皇帝',oneliner:'陈桥兵变黄袍加身。',key_events:['陈桥兵变','杯酒释兵权'],related_lessons:['song/01-chenqiao']},
  {id:'wanganshi-fig',name:'王安石',dynasty:'song',born:'1021',died:'1086',role:'宰相·改革家',oneliner:'熙宁变法主持人。',key_events:['熙宁变法','两次罢相'],related_lessons:['song/03-wang-anshi']},
  {id:'sushi-fig',name:'苏轼',dynasty:'song',born:'1037',died:'1101',role:'文学家',oneliner:'诗词文俱佳，旷达豪迈。',key_events:['乌台诗案','贬黄州'],related_lessons:['song/07-song-poems']},
  {id:'yuefei-fig',name:'岳飞',dynasty:'song',born:'1103',died:'1142',role:'抗金将领',oneliner:'精忠报国，风波亭遇害。',key_events:['朱仙镇大捷','十二道金牌','风波亭'],related_lessons:['song/05-south-song']},
  {id:'huizong',name:'宋徽宗',dynasty:'song',born:'1082',died:'1135',role:'皇帝·书画家',oneliner:'瘦金体创始人，靖康被掳。',key_events:['创瘦金体','靖康被掳'],related_lessons:['song/04-jingkang']},
  {id:'zhuxi-fig',name:'朱熹',dynasty:'song',born:'1130',died:'1200',role:'理学家',oneliner:'集理学大成，"程朱"并称。',key_events:['编四书章句'],related_lessons:['song/08-neo-confucianism']},
  {id:'wenchanxiang',name:'文天祥',dynasty:'song',born:'1236',died:'1283',role:'抗元名臣',oneliner:'人生自古谁无死，留取丹心照汗青。',key_events:['抗元被俘','《正气歌》'],related_lessons:['song/05-south-song']},

  // yuan
  {id:'genghis-fig',name:'成吉思汗',dynasty:'yuan',born:'1162',died:'1227',role:'草原征服者',oneliner:'统一蒙古，开横跨欧亚的帝国。',key_events:['统一蒙古','西征花剌子模','征西夏'],related_lessons:['yuan/01-genghis','yuan/05-mongol-empire']},
  {id:'kublai-fig',name:'忽必烈',dynasty:'yuan',born:'1215',died:'1294',role:'元世祖',oneliner:'立国号大元，灭南宋统一。',key_events:['建元','灭南宋'],related_lessons:['yuan/02-kublai']},
  {id:'guanhanqing',name:'关汉卿',dynasty:'yuan',born:'',died:'1300?',role:'戏剧家',oneliner:'元曲四大家之首，《窦娥冤》作者。',key_events:['创作杂剧'],related_lessons:['yuan/04-yuan-culture']},

  // ming
  {id:'zhuyuanzhang-fig',name:'明太祖朱元璋',dynasty:'ming',born:'1328',died:'1398',role:'开国皇帝',oneliner:'乞丐和尚出身的皇帝。',key_events:['鄱阳湖之战','建明','废丞相'],related_lessons:['ming/01-zhu-yuanzhang']},
  {id:'yongle-fig',name:'明成祖朱棣',dynasty:'ming',born:'1360',died:'1424',role:'皇帝',oneliner:'靖难夺位，迁都北京。',key_events:['靖难之役','迁都北京','派郑和下西洋'],related_lessons:['ming/02-yongle']},
  {id:'zhenghe-fig',name:'郑和',dynasty:'ming',born:'1371',died:'1433',role:'航海家',oneliner:'七下西洋，远至东非。',key_events:['七下西洋'],related_lessons:['ming/03-zheng-he']},
  {id:'zhangjuzheng-fig',name:'张居正',dynasty:'ming',born:'1525',died:'1582',role:'内阁首辅',oneliner:'万历首辅，一条鞭法。',key_events:['考成法','一条鞭法'],related_lessons:['ming/05-zhang-juzheng']},
  {id:'wangyangming-fig',name:'王阳明',dynasty:'ming',born:'1472',died:'1529',role:'思想家',oneliner:'心学大师，知行合一。',key_events:['龙场悟道','平宸濠之乱'],related_lessons:['ming/08-wang-yangming']},
  {id:'lizicheng',name:'李自成',dynasty:'ming',born:'1606',died:'1645',role:'农民军领袖',oneliner:'闯王，攻陷北京致明亡。',key_events:['攻入北京','山海关之败'],related_lessons:['ming/11-ming-downfall']},

  // qing
  {id:'nuerhachi',name:'努尔哈赤',dynasty:'qing',born:'1559',died:'1626',role:'后金开国',oneliner:'统一女真，建立后金。',key_events:['统一女真','建后金'],related_lessons:['qing/01-manchu']},
  {id:'kangxi-fig',name:'康熙',dynasty:'qing',born:'1654',died:'1722',role:'皇帝',oneliner:'清圣祖，在位61年。',key_events:['平三藩','收台湾','抗沙俄'],related_lessons:['qing/02-kangxi']},
  {id:'yongzheng-fig',name:'雍正',dynasty:'qing',born:'1678',died:'1735',role:'皇帝',oneliner:'勤政皇帝，设军机处。',key_events:['设军机处','改土归流'],related_lessons:['qing/04-yongzheng']},
  {id:'qianlong-fig',name:'乾隆',dynasty:'qing',born:'1711',died:'1799',role:'皇帝',oneliner:'清高宗，盛极转衰。',key_events:['十全武功','编四库全书'],related_lessons:['qing/03-qianlong']},
  {id:'linzexu',name:'林则徐',dynasty:'qing',born:'1785',died:'1850',role:'大臣',oneliner:'虎门销烟，开眼看世界第一人。',key_events:['虎门销烟','发配伊犁'],related_lessons:['qing/06-opium-war']},
  {id:'hongxiuquan',name:'洪秀全',dynasty:'qing',born:'1814',died:'1864',role:'起义领袖',oneliner:'太平天国创立者。',key_events:['金田起义','定都天京'],related_lessons:['qing/07-taiping']},
  {id:'zengguofan',name:'曾国藩',dynasty:'qing',born:'1811',died:'1872',role:'大臣',oneliner:'湘军统帅，洋务派之一。',key_events:['创湘军','平太平天国'],related_lessons:['qing/07-taiping','qing/08-yangwu']},
  {id:'lihongzhang',name:'李鸿章',dynasty:'qing',born:'1823',died:'1901',role:'大臣',oneliner:'淮军统帅，洋务运动主导。',key_events:['创淮军','北洋海军','签马关条约'],related_lessons:['qing/08-yangwu','qing/09-jiawu']},
  {id:'cixi-fig',name:'慈禧',dynasty:'qing',born:'1835',died:'1908',role:'太后',oneliner:'晚清实际统治者。',key_events:['辛酉政变','戊戌镇压','支持义和团'],related_lessons:['qing/10-wuxu']},
  {id:'kangyouwei',name:'康有为',dynasty:'qing',born:'1858',died:'1927',role:'变法家',oneliner:'公车上书，戊戌变法领袖。',key_events:['公车上书','戊戌变法'],related_lessons:['qing/10-wuxu']},
  {id:'liangqichao',name:'梁启超',dynasty:'qing',born:'1873',died:'1929',role:'思想家',oneliner:'戊戌变法主将，新民说作者。',key_events:['戊戌变法','流亡日本'],related_lessons:['qing/10-wuxu']},
  {id:'sunzhongshan-fig',name:'孙中山',dynasty:'qing',born:'1866',died:'1925',role:'革命家',oneliner:'三民主义提出者，中华民国国父。',key_events:['创立同盟会','辛亥革命','建立中华民国'],related_lessons:['qing/11-xinhai','roc/01-xinhai']},
  {id:'puyi',name:'溥仪',dynasty:'qing',born:'1906',died:'1967',role:'末代皇帝',oneliner:'清朝末代皇帝，宣统帝。',key_events:['即位','退位','被冯玉祥逐出宫'],related_lessons:['qing/11-xinhai']},

  // roc
  {id:'yuanshikai-fig',name:'袁世凯',dynasty:'roc',born:'1859',died:'1916',role:'大总统',oneliner:'北洋首脑，民国首任大总统。',key_events:['任大总统','复辟称帝83天'],related_lessons:['roc/02-beiyang']},
  {id:'chenduxiu',name:'陈独秀',dynasty:'roc',born:'1879',died:'1942',role:'思想家',oneliner:'《新青年》主编，新文化运动主将。',key_events:['创《新青年》','五四运动'],related_lessons:['roc/03-new-culture']},
  {id:'hushi',name:'胡适',dynasty:'roc',born:'1891',died:'1962',role:'学者',oneliner:'提倡白话文与科学方法。',key_events:['倡白话文','留学美国'],related_lessons:['roc/03-new-culture']},
  {id:'luxun',name:'鲁迅',dynasty:'roc',born:'1881',died:'1936',role:'文学家',oneliner:'新文学旗手，《狂人日记》《阿Q正传》作者。',key_events:['弃医从文','文学创作'],related_lessons:['roc/08-roc-culture']},
  {id:'jiangjieshi-fig',name:'蒋介石',dynasty:'roc',born:'1887',died:'1975',role:'国民党领袖',oneliner:'国民革命军总司令，民国实际领导。',key_events:['北伐','抗战','败退台湾'],related_lessons:['roc/04-northern-expedition','roc/05-nanjing-decade','roc/06-war-of-resistance']},
  {id:'maozedong-fig',name:'毛泽东',dynasty:'roc',born:'1893',died:'1976',role:'共产党领袖',oneliner:'中共领袖，中华人民共和国主要缔造者。',key_events:['井冈山','长征','建立新中国'],related_lessons:['roc/06-war-of-resistance','roc/07-civil-war','prc1/01-founding']},
  {id:'zhouenlai',name:'周恩来',dynasty:'roc',born:'1898',died:'1976',role:'政治家',oneliner:'新中国首任总理。',key_events:['黄埔军校','长征','万隆会议'],related_lessons:['prc1/01-founding']},
  {id:'dengxiaoping-fig',name:'邓小平',dynasty:'prc2',born:'1904',died:'1997',role:'政治家',oneliner:'改革开放总设计师。',key_events:['推动改革开放','南方谈话'],related_lessons:['prc2/01-third-plenum','prc2/02-sez']},
  {id:'songqingling',name:'宋庆龄',dynasty:'roc',born:'1893',died:'1981',role:'政治家',oneliner:'孙中山夫人，国家名誉主席。',key_events:['国民党左派','建立新中国后任职'],related_lessons:['roc/01-xinhai']},
];