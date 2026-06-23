/* 中国历史学习站 · 模块元数据 + 课时路径 */
window.CHS = window.CHS || {};

(function(CHS) {

CHS.modules = [
  {id:'myth',    title:'神话与传说', desc:'盘古开天、女娲补天、伏羲画卦、神农尝草；黄帝战蚩尤、尧舜禹禅让——中华叙事的总开篇。', tag:'Mythic', era:'上古·神话', lessons:6, order:1, color:'--gold',    ghost:'壹',  shortTitle:'神话', yearStart:'~前2070', yearEnd:'',     capital:'—', founder:'—',    lastRuler:'—',    generations:'—', oneliner:'中华神话叙事的总开篇'},
  {id:'xsz',     title:'夏商周',     desc:'夏启家天下、商汤革命、武王伐纣；甲骨文、青铜礼器、井田与封建，中华文明的古典开端。', tag:'古典', era:'古典·礼乐',  lessons:9, order:2, color:'--bronze', ghost:'貳',  shortTitle:'夏商周', yearStart:'前2070',  yearEnd:'前256',    capital:'二里头/殷/镐京', founder:'禹/汤/周武王', lastRuler:'纣/周赧王', generations:'17/30/37', oneliner:'中华文明古典开端，礼乐制度奠基'},
  {id:'cqzg',    title:'春秋战国',   desc:'礼崩乐坏、列国兼并；孔孟老庄韩非墨翟，中国思想的轴心时代。', tag:'思想', era:'春秋战国·百家', lessons:10, order:3, color:'--sky',    ghost:'叁',  shortTitle:'春秋战国', yearStart:'前770',   yearEnd:'前221',    capital:'—(列国)', founder:'—',    lastRuler:'—',    generations:'—', oneliner:'百家争鸣的思想轴心时代'},
  {id:'qin',     title:'秦',         desc:'商鞅变法奠基、嬴政扫六合；书同文车同轨、郡县制立；短而决定后世两千年格局。', tag:'一统', era:'帝国·奠基', lessons:7, order:4, color:'--crimson', ghost:'肆',  shortTitle:'秦', yearStart:'前221',   yearEnd:'前207',    capital:'咸阳',  founder:'嬴政',  lastRuler:'子婴',  generations:'3', oneliner:'一统六合，确立郡县帝制'},
  {id:'han',     title:'两汉',       desc:'楚汉之争、文景之治、汉武雄略；丝路通西域、独尊儒术、太史公作《史记》。', tag:'帝国', era:'帝国·汉风', lesssons:13, order:5, color:'--red',    ghost:'伍',  shortTitle:'两汉', yearStart:'前202',   yearEnd:'220',      capital:'长安/洛阳', founder:'刘邦',  lastRuler:'刘协',  generations:'29', oneliner:'帝国奠基，儒法并行政通西域'},
  {id:'weijin',  title:'三国两晋南北朝', desc:'群雄逐鹿、五胡入华；九品中正、佛教东传、玄学清谈，北朝融合为隋唐铺路。', tag:'分合', era:'分裂·融合', lessons:11, order:6, color:'--mist',   ghost:'陸',  shortTitle:'魏晋南北朝', yearStart:'220',    yearEnd:'589',     capital:'洛阳/建康', founder:'曹丕/司马炎', lastRuler:'陈后主', generations:'—', oneliner:'三百多年分裂与民族大融合'},
  {id:'sui-tang', title:'隋唐',      desc:'大运河贯南北、科举开寒门；贞观开元，长安万邦来朝；诗仙诗圣，古典文明的高峰。', tag:'盛世', era:'隋唐·盛唐', lessons:14, order:7, color:'--gold',   ghost:'柒',  shortTitle:'隋唐', yearStart:'581',    yearEnd:'960',     capital:'长安/洛阳', founder:'杨坚/李渊', lastRuler:'李柷',  generations:'5/20', oneliner:'中华古典文明的高峰，盛世气象'},
  {id:'song',    title:'宋辽金西夏', desc:'陈桥兵变、王安石变法、靖康之耻、临安偏安；活字印刷、火药、宋词与理学。', tag:'文盛', era:'文盛·武衰', lessons:11, order:8, color:'--jade',   ghost:'捌',  shortTitle:'宋辽金西夏', yearStart:'907/960', yearEnd:'1279',    capital:'开封/临安', founder:'赵匡胤', lastRuler:'赵㬎',  generations:'18', oneliner:'经济文化高峰，赵宋文治之盛'},
  {id:'yuan',    title:'元',         desc:'成吉思汗西征、忽必烈定都大都；行省制开创，横跨欧亚的世界帝国。', tag:'草原', era:'元·世界帝国', lessons:6, order:9, color:'--sky',    ghost:'玖',  shortTitle:'元', yearStart:'1271',   yearEnd:'1368',    capital:'大都',  founder:'忽必烈', lastRuler:'元顺帝', generations:'11', oneliner:'草原王朝，开创行省制度'},
  {id:'ming',    title:'明',         desc:'朱元璋起于布衣、永乐迁都北京、郑和七下西洋；内阁-东厂-海禁，白银时代。', tag:'内圣', era:'明朝·内圣', lessons:11, order:10, color:'--indigo', ghost:'拾',  shortTitle:'明', yearStart:'1368',   yearEnd:'1644',    capital:'南京/北京', founder:'朱元璋', lastRuler:'朱由检', generations:'16', oneliner:'汉人最后一个大一统王朝'},
  {id:'qing',    title:'清',         desc:'满洲入关、康乾盛世、版图大成；鸦片战争始受冲击，两千年帝制谢幕。', tag:'终章', era:'清朝·帝制末', lessons:13, order:11, color:'--plum',   ghost:'壹壹', shortTitle:'清', yearStart:'1644',   yearEnd:'1912',    capital:'北京', founder:'顺治',  lastRuler:'溥仪',  generations:'12', oneliner:'最后一个封建王朝，帝制终章'},
  {id:'roc',     title:'民国',       desc:'辛亥、北洋、新文化、北伐、抗战、内战；旧邦新命，向现代国家的痛苦转型。', tag:'近代', era:'民国·救亡', lessons:9, order:12, color:'--slate',  ghost:'壹貳', shortTitle:'民国', yearStart:'1912',   yearEnd:'1949',    capital:'南京(陪都重庆)', founder:'孙中山', lastRuler:'蒋介石', generations:'—', oneliner:'亚洲第一个共和国，救亡图存'},
  {id:'prc1',    title:'新中国前期', desc:'1949 立国、土改抗美、一化三改、探索与波折；农业大国走向独立工业体系的三十年。', tag:'建国', era:'当代·奠基', lessons:7, order:13, color:'--rose',   ghost:'壹叁', shortTitle:'新中国前期', yearStart:'1949',   yearEnd:'1978',    capital:'北京', founder:'毛泽东', lastRuler:'—',     generations:'—', oneliner:'新中国奠基，工业化起步'},
  {id:'prc2',    title:'改革开放至今', desc:'1978 改革开放，沿海起步、加入 WTO、城镇化与互联网；迈向现代化与中华民族伟大复兴。', tag:'复兴', era:'当代·复兴', lessons:8, order:14, color:'--red',    ghost:'壹肆', shortTitle:'改革开放', yearStart:'1978',   yearEnd:'至今',    capital:'北京', founder:'邓小平', lastRuler:'—',     generations:'—', oneliner:'改革开放，民族复兴之路'},
];

// 修正 han 字段 typo: lesssons → lessons(上面写错了,这里覆盖)
CHS.modules[4].lessons = 13;

CHS.path = [
  // myth (6)
  'myth/01-intro','myth/02-pangu','myth/03-nuwa','myth/04-fuxi',
  'myth/05-yandi-huangdi','myth/06-yaoshunyu',
  // xsz (9)
  'xsz/01-xia','xsz/02-shang','xsz/03-west-zhou','xsz/04-east-zhou',
  'xsz/05-rites','xsz/06-bronze','xsz/07-jiaguwen','xsz/08-jingtian','xsz/09-fengjian',
  // cqzg (10)
  'cqzg/01-spring-autumn','cqzg/02-five-hegemons','cqzg/03-seven-warriors',
  'cqzg/04-confucius','cqzg/05-laozi','cqzg/06-mozi','cqzg/07-hanfei',
  'cqzg/08-shangyang','cqzg/09-hezong','cqzg/10-sunzi',
  // qin (7)
  'qin/01-shangyang-reform','qin/02-yingzheng','qin/03-unification',
  'qin/04-junxian','qin/05-great-wall','qin/06-books','qin/07-downfall',
  // han (13)
  'han/01-chu-han','han/02-wen-jing','han/03-hanwu','han/04-silk-road',
  'han/05-wang-mang','han/06-guangwu','han/07-later-han','han/08-rujia',
  'han/09-chaju','han/10-sima-qian','han/11-east-han-decline',
  'han/12-yellow-turbans','han/13-end-of-han',
  // weijin (11)
  'weijin/01-three-kingdoms','weijin/02-caocao','weijin/03-zhuge-liang',
  'weijin/04-sima-shi','weijin/05-west-jin','weijin/06-wu-hu',
  'weijin/07-east-jin','weijin/08-buddhism','weijin/09-xuanxue',
  'weijin/10-north-wei-reform','weijin/11-sui-prelude',
  // sui-tang (14)
  'sui-tang/01-sui','sui-tang/02-grand-canal','sui-tang/03-keju',
  'sui-tang/04-tang-foundation','sui-tang/05-zhenguan','sui-tang/06-wu-zetian',
  'sui-tang/07-kaiyuan','sui-tang/08-poetry','sui-tang/09-an-lushan',
  'sui-tang/10-mid-tang','sui-tang/11-late-tang','sui-tang/12-five-dynasties',
  'sui-tang/13-tang-culture','sui-tang/14-sui-tang-economy',
  // song (11)
  'song/01-chenqiao','song/02-song-early','song/03-wang-anshi',
  'song/04-jingkang','song/05-south-song','song/06-economy',
  'song/07-song-poems','song/08-neo-confucianism','song/09-liao',
  'song/10-jin','song/11-xixia',
  // yuan (6)
  'yuan/01-genghis','yuan/02-kublai','yuan/03-xingsheng',
  'yuan/04-yuan-culture','yuan/05-mongol-empire','yuan/06-yuan-decline',
  // ming (11)
  'ming/01-zhu-yuanzhang','ming/02-yongle','ming/03-zheng-he',
  'ming/04-tumu','ming/05-zhang-juzheng','ming/06-dongchang',
  'ming/07-hai-jin','ming/08-wang-yangming','ming/09-ming-culture',
  'ming/10-ming-economy','ming/11-ming-downfall',
  // qing (13)
  'qing/01-manchu','qing/02-kangxi','qing/03-qianlong','qing/04-yongzheng',
  'qing/05-qing-territory','qing/06-opium-war','qing/07-taiping',
  'qing/08-yangwu','qing/09-jiawu','qing/10-wuxu','qing/11-xinhai',
  'qing/12-qing-culture','qing/13-qing-economy',
  // roc (9)
  'roc/01-xinhai','roc/02-beiyang','roc/03-new-culture','roc/04-northern-expedition',
  'roc/05-nanjing-decade','roc/06-war-of-resistance','roc/07-civil-war',
  'roc/08-roc-culture','roc/09-roc-economy',
  // prc1 (7)
  'prc1/01-founding','prc1/02-land-reform','prc1/03-korea-war',
  'prc1/04-five-year','prc1/05-exploration','prc1/06-culture-revolution',
  'prc1/07-prc1-economy',
  // prc2 (8)
  'prc2/01-third-plenum','prc2/02-sez','prc2/03-wto','prc2/04-urbanization',
  'prc2/05-internet','prc2/06-reform-culture','prc2/07-new-era',
  'prc2/08-prc2-economy',
];

CHS.totalLessons = CHS.path.length;
// Assign firstLesson for timeline
for (var i = 0; i < CHS.modules.length; i++) {
  var mId = CHS.modules[i].id;
  for (var j = 0; j < CHS.path.length; j++) {
    if (CHS.path[j].indexOf(mId + '/') === 0) {
      CHS.modules[i].firstLesson = CHS.path[j];
      break;
    }
  }
}

})(window.CHS);