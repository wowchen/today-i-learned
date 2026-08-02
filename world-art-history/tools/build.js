/* 世界艺术通史 · 单一数据源生成器(克隆 AI+电力框架,命名空间 AIP->WAH;MODULES 用对象式含富字段)
   用法: node tools/build.js
   生成 content/modules.js、content/terms.js、content/<mod>/<slug>.js,并注入 index.html 的 <!-- Lessons ... -->
   校验:data-term 是否定义、内部链接是否存在、是否含 emoji。
   课程数据从 tools/_src/<module>.js 加载(每文件 module.exports = [...]) */
const fs = require('fs');
const path = require('path');
const ROOT = path.resolve(__dirname, '..');
const C = (...a) => path.join(ROOT, 'content', ...a);
const SRC = path.resolve(__dirname, '_src');

/* ---------- 小工具(供参考;_src 文件内联 HTML,不调用这些) ---------- */
const g = (id, t) => '<gd data-term="' + id + '">' + t + '</gd>';
const ex = (t) => '<div class="ex">' + t + '</div>';
const pit = (t) => '<div class="pit"><b>别绕晕 </b>' + t + '</div>';
const fml = (t) => '<div class="fml">' + t + '</div>';
const qc = (q, options, answer, explain, source) => ({ type: 'choice', q: q, options: options, answer: answer, explain: explain, source: source || '想一想' });
const qf = (q, answers, explain, source) => ({ type: 'fill', q: q, answer: answers, explain: explain, source: source || '想一想' });

/* ============ 模块(对象式,含富字段供工具页使用) ============
   {id, title, shortTitle, era, yearStart, yearEnd, color(指向 --cN), region, keyworks, turning, span, oneliner, desc, en} */
const MODULES = [
  { id:'guide', title:'导览', shortTitle:'导览', era:'通识', yearStart:'-', yearEnd:'-', color:'--c0',
    region:'-', keyworks:'-', turning:'-', span:'3 课', oneliner:'艺术是什么、怎么看一幅画、本站怎么读',
    desc:'怎么用这个站、世界艺术通史全景、学习路线', en:'Guide' },
  { id:'prehistoric', title:'史前与原始艺术', shortTitle:'史前', era:'史前', yearStart:'前 40000', yearEnd:'前 3000', color:'--c1',
    region:'全球', keyworks:'拉斯科/阿尔塔米拉/威伦多夫的维纳斯', turning:'从生存到表达', span:'5 课',
    oneliner:'洞穴壁画与生育雕像,人类最早的视觉表达', desc:'洞穴壁画、巨石、原始雕像', en:'Prehistoric' },
  { id:'ancient-east', title:'古代近东与埃及', shortTitle:'近东·埃及', era:'古代', yearStart:'前 3500', yearEnd:'前 332', color:'--c2',
    region:'两河·尼罗', keyworks:'乌尔军旗/汉谟拉比法典/金字塔/图坦卡蒙', turning:'为宗教与王权服务', span:'6 课',
    oneliner:'苏美尔到波斯、古王国到新王国,艺术为神与王而作', desc:'两河流域与古埃及', en:'Ancient Near East & Egypt' },
  { id:'aegean-greece', title:'爱琴与古希腊', shortTitle:'古希腊', era:'古代', yearStart:'前 3000', yearEnd:'前 30', color:'--c3',
    region:'爱琴海', keyworks:'米诺斯壁画/帕特农/掷铁饼者/胜利女神', turning:'理想化人体诞生', span:'6 课',
    oneliner:'从米诺斯到希腊化,人体比例与神庙秩序', desc:'爱琴文明与古希腊', en:'Aegean & Greece' },
  { id:'rome', title:'伊特鲁里亚与古罗马', shortTitle:'古罗马', era:'古代', yearStart:'前 900', yearEnd:'公元 476', color:'--c4',
    region:'亚平宁·地中海', keyworks:'高架水道/斗兽场/庞培壁画/图拉真柱', turning:'拱券与写实肖像', span:'5 课',
    oneliner:'拱券、混凝土与写实肖像,实用主义的罗马', desc:'伊特鲁里亚与古罗马', en:'Etruscan & Rome' },
  { id:'byzantine', title:'早期基督教与拜占庭', shortTitle:'拜占庭', era:'中世纪', yearStart:'公元 100', yearEnd:'1453', color:'--c5',
    region:'地中海东岸', keyworks:'圣阿波利纳雷/拉文纳马赛克/圣索菲亚', turning:'金色平面与圣像', span:'5 课',
    oneliner:'地下墓窟到金色马赛克,神圣变成平面与光', desc:'早期基督教与拜占庭', en:'Early Christian & Byzantine' },
  { id:'islamic', title:'伊斯兰艺术', shortTitle:'伊斯兰', era:'中世纪', yearStart:'7 世纪', yearEnd:'16 世纪', color:'--c6',
    region:'西亚·北非·西班牙', keyworks:'岩石圆顶寺/阿尔罕布拉宫/细密画', turning:'几何与书法的装饰', span:'4 课',
    oneliner:'清真寺穹顶、阿拉伯书法与繁复几何装饰', desc:'伊斯兰艺术', en:'Islamic' },
  { id:'medieval', title:'中世纪:罗马式与哥特', shortTitle:'中世纪', era:'中世纪', yearStart:'5 世纪', yearEnd:'15 世纪', color:'--c7',
    region:'欧洲', keyworks:'手抄本/罗马式教堂/沙特尔大教堂/彩色玻璃', turning:'向天升起的哥特尖拱', span:'6 课',
    oneliner:'手抄本到哥特大教堂,光与高指向天堂', desc:'中世纪:罗马式与哥特', en:'Medieval' },
  { id:'renaissance', title:'文艺复兴', shortTitle:'文艺复兴', era:'近代', yearStart:'14 世纪', yearEnd:'16 世纪', color:'--c8',
    region:'意大利·北方', keyworks:'蒙娜丽莎/大卫/雅典学院/根特祭坛画', turning:'透视与人本觉醒', span:'8 课',
    oneliner:'透视诞生,人重新成为尺度,三杰登场', desc:'文艺复兴:意大利与北方', en:'Renaissance' },
  { id:'baroque', title:'巴洛克与洛可可', shortTitle:'巴洛克', era:'近代', yearStart:'17 世纪', yearEnd:'18 世纪', color:'--c9',
    region:'意大利·荷兰·法国', keyworks:'圣特雷莎狂喜/夜巡/加谢医生/凡尔赛洛可可', turning:'戏剧光影与世俗欢愉', span:'6 课',
    oneliner:'巴洛克的戏剧光影,到洛可可的轻巧甜腻', desc:'巴洛克与洛可可', en:'Baroque & Rococo' },
  { id:'c19', title:'18-19 世纪', shortTitle:'18-19 世纪', era:'近代', yearStart:'18 世纪', yearEnd:'19 世纪', color:'--c10',
    region:'欧洲', keyworks:'荷拉斯兄弟之誓/自由引导人民/拾穗/睡莲', turning:'走出学院、走向户外', span:'7 课',
    oneliner:'新古典到印象派,从宏大叙事到光的瞬间', desc:'18-19 世纪:新古典到印象派', en:'18th–19th Century' },
  { id:'modern', title:'现代艺术', shortTitle:'现代', era:'现代', yearStart:'20 世纪初', yearEnd:'20 世纪中', color:'--c11',
    region:'欧美', keyworks:'亚维农少女/呐喊/记忆的永恒/红黄蓝构成', turning:'抛弃写实、解构形式', span:'7 课',
    oneliner:'立体、表现、达达、超现实、抽象,形式大爆炸', desc:'现代艺术', en:'Modern' },
  { id:'contemporary', title:'当代艺术', shortTitle:'当代', era:'当代', yearStart:'20 世纪中', yearEnd:'至今', color:'--c12',
    region:'全球', keyworks:'波普玛丽莲/螺旋防波堤/气球狗/装置影像', turning:'什么都可能是艺术', span:'6 课',
    oneliner:'波普、极简、观念、装置、新媒体,边界消融', desc:'当代艺术', en:'Contemporary' },
  { id:'east-asia', title:'东亚:中国与日本', shortTitle:'东亚', era:'非西方', yearStart:'4 世纪', yearEnd:'19 世纪', color:'--c13',
    region:'中国·日本', keyworks:'女史箴图/溪山行旅图/神奈川冲浪里', turning:'水墨写意与浮世绘', span:'7 课',
    oneliner:'顾恺之到八大山人,水墨留白;浮世绘影响西方', desc:'东亚:中国书画与日本浮世绘', en:'East Asia' },
  { id:'world-beyond', title:'印度·美洲·非洲·大洋洲', shortTitle:'印度·美·非·洋', era:'非西方', yearStart:'前 3 世纪', yearEnd:'19 世纪', color:'--c14',
    region:'南亚·美洲·非洲·大洋洲', keyworks:'阿旃陀石窟/玛雅金字塔/非洲面具/复活节岛石像', turning:'多元文明各成体系', span:'6 课',
    oneliner:'印度、前哥伦布美洲、非洲部落、大洋洲的艺术传统', desc:'印度·美洲·非洲·大洋洲', en:'Beyond Europe' },
];

/* ============ 术语 ============ [id, name, en, def, analogy, module] ============ */
const TERMS = [
  // 通识
  ['what-is-art','艺术是什么','What is Art','人类用形象、声音或语言表达感受与观念的活动;视觉艺术是其中"用眼睛看"的一类。','把感受和想法变成能被看见的东西。','guide'],
  ['form-content','形式与内容','Form & Content','形式是"怎么做的"(线条、色彩、构图),内容是"画了什么"(人、故事、情绪)。','形式是杯子,内容是装的水。','guide'],
  ['medium','媒介','Medium','艺术家用的材料,如油画颜料、湿壁画、大理石、水墨。','画家手里的料。','guide'],
  ['composition','构图','Composition','画面里各元素怎么安排位置与关系。','画面里的排兵布阵。','guide'],
  ['style','风格','Style','一个时代、地区或艺术家反复出现的特征,让人一眼认出"这是谁的"。','艺术的口音。','guide'],
  // 史前
  ['cave-painting','洞穴壁画','Cave Painting','旧石器时代人在洞穴深处用矿物颜料画的动物与手印。','最早的"画展"在黑洞里。','prehistoric'],
  ['petroglyph','岩刻','Petroglyph','在岩石表面凿刻出来的图形。','石头上的刻痕。','prehistoric'],
  ['venus-figurine','维纳斯雕像','Venus Figurine','旧石器时代夸大女性生理特征的小石雕,多被认为与生育崇拜有关。','史前的生育符号。','prehistoric'],
  ['megalith','巨石','Megalith','史前人竖立的大石块,如巨石阵,功能多为宗教或天文。','搬不动的大石头。','prehistoric'],
  // 近东·埃及
  ['ziggurat','塔庙','Ziggurat','两河流域阶梯状的神庙塔,层层缩小,顶上供神。','层叠的神山。','ancient-east'],
  ['stele','石碑','Stele','立石上刻铭文或浮雕,用来记功或立法,如汉谟拉比法典碑。','石头做的公告。','ancient-east'],
  ['hieroglyph','象形文字','Hieroglyph','古埃及用图形表意的文字体系。','画出来的字。','ancient-east'],
  ['canon-proportion','比例规范','Canon of Proportions','古埃及雕塑用固定的网格比例画人体,几千年代代相传几乎不变。','照着格子画人。','ancient-east'],
  ['ka','卡','Ka','古埃及观念中人的灵魂之一,需要雕像或尸体作为居所才能永存。','灵魂的房子。','ancient-east'],
  ['sarcophagus','石棺','Sarcophagus','盛放遗体的石棺,常刻有宗教场景与亡者形象。','石头的最后住所。','ancient-east'],
  // 古希腊
  ['fresco','湿壁画','Fresco','在未干的石灰泥上用颜料绘画,干后颜色固结在墙里。','画进墙里的颜色。','aegean-greece'],
  ['krater','陶瓶','Krater','古希腊混酒水的陶器,常绘有故事场景,是早期绘画的主要载体。','会讲故事的罐子。','aegean-greece'],
  ['contrapposto','对立式平衡','Contrapposto','人体重心落在一条腿上,另一条腿放松,产生自然的 S 形扭转。','放松站出来的曲线。','aegean-greece'],
  ['order','柱式','Architectural Order','古希腊建筑的三种柱头样式:多立克(简朴)、爱奥尼(卷涡)、科林斯(茛苕叶)。','柱子的三种发型。','aegean-greece'],
  ['hellenistic','希腊化','Hellenistic','亚历山大东征后希腊艺术扩散并与各地融合,风格更激烈、写实、情绪化。','希腊艺术出门旅行。','aegean-greece'],
  // 古罗马
  ['arch','拱券','Arch','用楔形石块拼成弧形跨越空间的结构,让罗马人能造大跨度建筑。','石头做的彩虹桥。','rome'],
  ['roman-concrete','罗马混凝土','Roman Concrete','罗马人用火山灰配的混凝土,便宜坚固,是大尺度建筑的秘密。','两千年前的水泥。','rome'],
  ['verism','写实主义肖像','Verism','罗马人忠实甚至夸张地刻画人物皱纹、秃顶等真实特征的肖像传统。','不美颜的证件照。','rome'],
  ['basilica','巴西利卡','Basilica','罗马的长方形公共大厅,后被基督教借用为教堂的基本形制。','长方形的大会堂。','rome'],
  // 拜占庭
  ['mosaic','马赛克','Mosaic','用小块彩石或玻璃拼嵌成画面的技法,拜占庭教堂的金色墙壁多用此法。','拼出来的画。','byzantine'],
  ['icon','圣像','Icon','拜占庭基督教的宗教画像,被信徒当作神圣而非普通画作。','不是画,是窗户。','byzantine'],
  ['iconoclasm','圣像破坏','Iconoclasm','8-9 世纪拜占庭禁止并销毁圣像的运动,认为崇拜图像是偶像崇拜。','把圣像砸掉。','byzantine'],
  ['pendentive','帆拱','Pendentive','把圆顶架在方形空间上的弧形过渡结构,圣索菲亚大教堂的标志。','方墙顶圆顶的过渡。','byzantine'],
  // 伊斯兰
  ['arabesque','阿拉伯式花纹','Arabesque','伊斯兰艺术中无限延伸的几何与植物藤蔓装饰,不画具体形象。','绕来绕去的几何藤蔓。','islamic'],
  ['islamic-calligraphy','阿拉伯书法','Arabic Calligraphy','伊斯兰艺术中地位最高的形式,把经文写成流动的线条。','把字写最美的艺术。','islamic'],
  ['minaret','宣礼塔','Minaret','清真寺旁的高塔,供宣礼员登高呼唤礼拜。','叫人祷告的塔。','islamic'],
  ['mihrab','米哈拉布','Mihrab','清真寺朝向麦加方向的壁龛,标明礼拜方向。','指方向的凹槽。','islamic'],
  // 中世纪
  ['manuscript','手抄本','Manuscript','中世纪修道院抄写并装饰的羊皮纸书籍,是当时画与字的主要载体。','手抄的精装书。','medieval'],
  ['illumination','泥金装饰','Illumination','手抄本中大写字母与边框的金色彩绘装饰。','书页上的金光。','medieval'],
  ['romanesque','罗马式','Romanesque','11-12 世纪厚墙、圆拱、小窗的教堂风格,像古罗马又更厚重。','厚墙圆拱的城堡教堂。','medieval'],
  ['gothic','哥特式','Gothic','12 世纪后尖拱、肋拱、飞扶壁与大彩色窗的教堂风格,追求高与光。','向上长高的玻璃教堂。','medieval'],
  ['flying-buttress','飞扶壁','Flying Buttress','哥特教堂外部斜架的石拱,把屋顶侧推力传到地上,让墙能开大窗。','外墙上的石拐杖。','medieval'],
  ['stained-glass','彩色玻璃','Stained Glass','哥特教堂用铅条拼接的彩色玻璃窗,光线透过变成神圣色彩。','光做的画。','medieval'],
  // 文艺复兴
  ['perspective','透视','Perspective','在平面上用几何方法制造三维纵深幻觉的技法。','让平面骗出立体。','renaissance'],
  ['linear-perspective','线性透视','Linear Perspective','所有平行线在画面上汇聚到一个灭点,是文艺复兴的发明。','线条都指向一个点。','renaissance'],
  ['sfumato','晕涂法','Sfumato','达芬奇把边缘与明暗柔和过渡、不留生硬轮廓的画法,蒙娜丽莎的微笑由此而来。','把边界抹开。','renaissance'],
  ['chiaroscuro','明暗对照法','Chiaroscuro','用强烈的光影对比塑造体积感的技法,文艺复兴发端,巴洛克发扬。','光打出来的立体。','renaissance'],
  ['oil-painting','油画','Oil Painting','用亚麻仁油调和颜料的画法,干得慢便于衔接与修改,15 世纪后流行。','画得慢、改得动的颜料。','renaissance'],
  ['mannerism','风格主义','Mannerism','文艺复兴晚期刻意拉长人体、扭曲空间、炫技的风格,夹在盛期与巴洛克之间。','故意画拧巴。','renaissance'],
  // 巴洛克
  ['baroque-term','巴洛克','Baroque','17 世纪追求戏剧性、动感和强烈光影的风格,服务于宗教与王权。','戏剧打光的舞台感。','baroque'],
  ['tenebrism','暗调主义','Tenebrism','卡拉瓦乔式极端明暗,背景几乎全黑,主体如聚光灯下。','黑底聚光灯。','baroque'],
  ['genre-painting','风俗画','Genre Painting','描绘普通人日常生活的画作,17 世纪荷兰大成。','画老百姓过日子。','baroque'],
  ['rococo','洛可可','Rococo','18 世纪轻巧、甜腻、装饰繁复的风格,色粉、弧线、贝壳纹。','甜粉色的贝壳卷。','baroque'],
  // 18-19 世纪
  ['neoclassicism','新古典主义','Neoclassicism','18 世纪末回到希腊罗马的庄严、理性与英雄主题,对巴洛克洛可可的反动。','重新端庄起来。','c19'],
  ['romanticism','浪漫主义','Romanticism','19 世纪强调情感、激情、自然崇高与个人英雄的风格,与新古典对立。','放飞感情。','c19'],
  ['realism','写实主义','Realism','19 世纪中叶如实描绘底层劳动与日常、不美化不拔高的潮流。','画真实的苦与累。','c19'],
  ['impressionism','印象派','Impressionism','19 世纪后期用细碎笔触捕捉光色瞬间变化、走出画室的流派。','追着光跑。','c19'],
  ['plein-air','户外写生','Plein Air','到户外直接对景写生,印象派的核心做法。','在野外画,不在屋里编。','c19'],
  ['post-impressionism','后印象派','Post-Impressionism','在印象派基础上强调主观与结构的流派,代表塞尚、梵高、高更。','不光追光,还追意义。','c19'],
  // 现代
  ['cubism','立体主义','Cubism','毕加索、布拉克把物体拆成几何面、同时呈现多个视角的流派。','把东西打碎了再拼。','modern'],
  ['expressionism','表现主义','Expressionism','用扭曲造型与强烈色彩直接宣泄内心情绪的流派。','画出心里那股劲。','modern'],
  ['dada','达达','Dada','一战后反理性、反艺术、追求荒诞的艺术运动,当代艺术的源头之一。','故意捣乱的抗议。','modern'],
  ['surrealism','超现实主义','Surrealism','把梦境与潜意识搬上画面的流派,受弗洛伊德影响。','把梦画下来。','modern'],
  ['abstract-art','抽象艺术','Abstract Art','不描绘具体物象、只靠色彩线条本身表达的艺术。','不画东西,画感觉。','modern'],
  ['ready-made','现成品','Readymade','杜尚把现成物件(如小便池)签名当艺术品,颠覆"艺术是手工"的观念。','买来就是艺术。','modern'],
  // 当代
  ['pop-art','波普艺术','Pop Art','60 年代取材大众广告漫画消费图像的流派,代表安迪·沃霍尔。','把广告变成艺术。','contemporary'],
  ['minimalism','极简主义','Minimalism','剔除一切多余、只留基本几何与材料的风格。','少到不能再少。','contemporary'],
  ['conceptual-art','观念艺术','Conceptual Art','观念比作品本身更重要,作品可以只是一段文字或一张照片。','想法就是作品。','contemporary'],
  ['installation','装置艺术','Installation','为特定空间整体搭建、观众可走入其中的艺术形式。','能走进去的画。','contemporary'],
  ['land-art','大地艺术','Land Art','直接在自然中用土石水改地造景的艺术,常远离美术馆。','在大地上画画。','contemporary'],
  // 东亚
  ['ink-wash','水墨','Ink Wash','用水调墨在绢纸上作画,靠墨色浓淡干湿表现,中国画的基本语言。','水和墨的浓淡。','east-asia'],
  ['liubai','留白','Leaving Blank','中国画刻意不画的部分,以虚当实,让观者想象。','不画的地方也是画。','east-asia'],
  ['shanshui','山水画','Shanshui','以山川自然为主体的中国画,讲究可游可居、气韵生动。','画山水寄情。','east-asia'],
  ['gongbi','工笔','Gongbi','用细密工整线条与层层渲染的画法,与写意相对。','一根根线描出来的精细。','east-asia'],
  ['xieyi','写意','Xieyi','以简练笔墨抒发意趣、不求形似的画法。','几笔画出神。','east-asia'],
  ['ukiyo-e','浮世绘','Ukiyo-e','江户时代描写市井歌舞伎与风景的木版画,深刻影响印象派。','江户的彩色版画。','east-asia'],
  // 非西方
  ['mandala','曼陀罗','Mandala','印度教与佛教中象征宇宙的圆形几何图案,用于冥想。','圆里的宇宙。','world-beyond'],
  ['pre-columbian','前哥伦布艺术','Pre-Columbian Art','1492 年哥伦布到达之前美洲各文明的艺术,如玛雅、阿兹特克、印加。','哥伦布之前的美洲。','world-beyond'],
  ['tribal-art','部落艺术','Tribal Art','非洲、大洋洲等地的面具、雕像,多服务于仪式而非审美。','为仪式而做的脸。','world-beyond'],
];

/* ============ 从 _src 加载课程 ============
   每个文件 module.exports = [[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links], ...]
   concept/core/pitfalls/links 是内联 HTML 字符串(<gd data-term="id">、<div class="ex">、<div class="pit">、<a href="#/l/...">) */
const L = {};
MODULES.forEach(m => {
  const fp = path.join(SRC, m.id + '.js');
  if (fs.existsSync(fp)) {
    L[m.id] = require(fp);
  } else {
    L[m.id] = [];
    console.warn('警告: 未找到课程文件 ' + fp);
  }
});

/* ============ 组装 + 校验 + 写文件 ============ */
const termIds = new Set(TERMS.map(t => t[0]));
const moduleIds = new Set(MODULES.map(m => m.id));
const path_ = [];
const lessonIds = new Set();
MODULES.forEach(m => (L[m.id] || []).forEach(les => { var id = m.id + '/' + les[0]; path_.push(id); lessonIds.add(id); }));

let errors = [];
function checkBody(id, html) {
  if (!html) return;
  let m; const re = /data-term="([^"]+)"/g;
  while ((m = re.exec(html))) if (!termIds.has(m[1])) errors.push(id + ' 未知术语: ' + m[1]);
  const rl = /href="#\/l\/([^"]+)"/g;
  while ((m = rl.exec(html))) if (!lessonIds.has(m[1])) errors.push(id + ' 链接到不存在的课: ' + m[1]);
  const rm = /href="#\/m\/([^"]+)"/g;
  while ((m = rm.exec(html))) if (!moduleIds.has(m[1])) errors.push(id + ' 链接到不存在的模块: ' + m[1]);
  if (/[\u{1F000}-\u{1FAFF}\u{2600}-\u{27BF}]/u.test(html)) errors.push(id + ' 含 emoji/特殊符号');
}
MODULES.forEach(m => (L[m.id] || []).forEach(les => {
  var id = m.id + '/' + les[0];
  [les[4], les[5], les[6], les[8]].forEach(b => checkBody(id, b));
  (les[7] || []).forEach(q => { checkBody(id, q.q); checkBody(id, q.explain); });
}));
if (errors.length) { console.error('校验未通过:\n' + errors.join('\n')); process.exit(1); }

function w(p, s) { fs.mkdirSync(path.dirname(p), { recursive: true }); fs.writeFileSync(p, s); }
const J = o => JSON.stringify(o);

/* modules.js(含富字段) */
const mods = MODULES.map((m, i) => ({
  id: m.id, order: i, title: m.title, shortTitle: m.shortTitle, era: m.era,
  yearStart: m.yearStart, yearEnd: m.yearEnd, color: m.color, region: m.region,
  keyworks: m.keyworks, turning: m.turning, span: m.span, oneliner: m.oneliner,
  desc: m.desc, lessons: (L[m.id] || []).length, en: m.en
}));
let s = '/* 模块元数据 + 学习路径(世界艺术通史)(自动生成,勿手改) */\n';
s += 'window.WAH = window.WAH || {};\n';
s += 'WAH.modules = ' + J(mods) + ';\n';
s += 'WAH.path = ' + J(path_) + ';\n';
s += 'WAH.totalLessons = WAH.path.length;\n';
w(C('modules.js'), s);

/* terms.js */
const termObjs = TERMS.map(t => ({ id: t[0], name: t[1], en: t[2], def: t[3], analogy: t[4] || '', module: t[5] || '' }));
w(C('terms.js'), '/* 术语表(世界艺术通史)(自动生成) {id,name,en,def,analogy,module} */\nwindow.WAH = window.WAH || {};\nWAH.terms = ' + J(termObjs) + ';\n');

/* 课时文件 */
const scriptTags = [];
MODULES.forEach(m => {
  const mid = m.id;
  (L[mid] || []).forEach((les, idx) => {
    const id = mid + '/' + les[0];
    const obj = {
      id: id, module: mid, order: idx + 1, title: les[1], minutes: les[2],
      keywords: les[3], concept: les[4], core: les[5], pitfalls: les[6], quiz: les[7] || [], links: les[8]
    };
    let body = '/* ' + id + ' (自动生成) */\nWAH.registerLesson(' + JSON.stringify(obj, null, 0) + ');\n';
    w(C(mid, les[0] + '.js'), body);
    scriptTags.push('<script src="content/' + mid + '/' + les[0] + '.js"></script>');
  });
});

/* 注入 index.html */
const idxPath = path.join(ROOT, 'index.html');
let idx = fs.readFileSync(idxPath, 'utf8');
if (idx.indexOf('<!--LESSONS-->') !== -1) {
  idx = idx.replace('<!--LESSONS-->', scriptTags.join('\n'));
} else {
  idx = idx.replace(/<!-- Lessons[\s\S]*?<\/body>/, '<!-- Lessons (由 WAH.path 生成) -->\n' + scriptTags.join('\n') + '\n\n</body>');
}
fs.writeFileSync(idxPath, idx);

console.log('OK: ' + MODULES.length + ' 模块, ' + path_.length + ' 课, ' + TERMS.length + ' 术语。已注入 ' + scriptTags.length + ' 个课时脚本。');
