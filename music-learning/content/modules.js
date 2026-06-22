/* 6 个模块元信息(0 导览 + 乐理/乐器/音乐史/赏析/流行演唱)+ 学习路线。
   short 用于侧边图签(≤2 字),no 是目录序号。
   路线占位共 37 课:未编写的课程显示"待编写",写好课程文件后自动激活。
   定位与纪律见 需求与讨论.md;风格 A「黑胶夜场」。 */
(function () {
  'use strict';

  [
    { id: 'guide',      no: 0, short: '导览', title: '学习导览',     sub: '怎么用 · 学什么 · 全景 · 术语', desc: '网站怎么用、音乐到底学什么、一图看懂六个模块全景、术语点查与收藏怎么玩。' },
    { id: 'theory',     no: 1, short: '乐理', title: '乐理:音乐的语法', sub: '音符 · 节奏 · 音阶 · 和弦 · 曲式', desc: '从一个音符讲起:音高、节奏拍子、音阶调式、音程、和弦和声、调性、曲式。乐理是听懂和演唱的共同地基。' },
    { id: 'instrument', no: 2, short: '乐器', title: '乐器:认识家族',   sub: '钢琴 · 吉他 · 弦管打 · 人声',  desc: '乐器家族总览,钢琴、吉他、弦乐、管乐、打击乐各自的脾气,以及"人声也是乐器"。' },
    { id: 'history',    no: 3, short: '史话', title: '音乐史:风格脉络', sub: '古典 · 爵士 · 摇滚 · 电子 · 流行', desc: '风格从哪来、往哪去:古典脉络、近现代、爵士、摇滚、电子、华语民族、流行。' },
    { id: 'listening',  no: 4, short: '赏析', title: '赏析:学会怎么听', sub: '听法 · 织体配器 · 结构',        desc: '从"觉得好听"到"听得出门道":怎么听一首曲子、织体与配器、古典名作、流行歌结构、世界音乐。' },
    { id: 'vocal',      no: 5, short: '演唱', title: '流行演唱:把歌唱出来', sub: '发声 · 气息 · 音准 · 共鸣 · 现场', desc: '本站特色模块。从嗓音原理、气息支撑、音准、共鸣音色、咬字归韵,到律动情感与话筒现场,带你真正开口唱。' }
  ].forEach(MUS.registerModule);

  /* 学习路线:有序课程 id,共 37 个占位。
     内容扩充时:写好课程文件 → 在 index.html 加 script 标签 → 此处占位自动激活。 */
  MUS.registerPath([
    /* ── 模块 0 · 学习导览(4) ── */
    { id: 'guide-01-howto', module: 'guide', title: '欢迎:这个网站怎么用' },
    { id: 'guide-02-what',  module: 'guide', title: '音乐到底学什么?六块拼图' },
    { id: 'guide-03-map',   module: 'guide', title: '一图看懂:从音符到舞台' },
    { id: 'guide-04-terms', module: 'guide', title: '术语点查与收藏怎么玩' },

    /* ── 模块 1 · 乐理(7) ── */
    { id: 'theory-01-notes',    module: 'theory', title: '音符与音高:从 C 到 B 的 7 个音' },
    { id: 'theory-02-rhythm',   module: 'theory', title: '节奏与拍子:音乐的脉搏' },
    { id: 'theory-03-scale',    module: 'theory', title: '音阶与调式:do re mi 的排列' },
    { id: 'theory-04-interval', module: 'theory', title: '音程:两个音之间的距离' },
    { id: 'theory-05-chord',    module: 'theory', title: '和弦与和声:把音叠起来' },
    { id: 'theory-06-key',      module: 'theory', title: '调性:一首歌的"地心引力"' },
    { id: 'theory-07-form',     module: 'theory', title: '曲式:一首歌是怎么搭起来的' },

    /* ── 模块 2 · 乐器(7) ── */
    { id: 'instrument-01-family',     module: 'instrument', title: '乐器家族总览:四大类怎么分' },
    { id: 'instrument-02-piano',      module: 'instrument', title: '钢琴:看得见的乐理' },
    { id: 'instrument-03-guitar',     module: 'instrument', title: '吉他:随身的和弦机器' },
    { id: 'instrument-04-strings',    module: 'instrument', title: '弦乐:会唱歌的木头' },
    { id: 'instrument-05-wind',       module: 'instrument', title: '管乐:用气吹出来的旋律' },
    { id: 'instrument-06-percussion', module: 'instrument', title: '打击乐:节奏的骨架' },
    { id: 'instrument-07-voice',      module: 'instrument', title: '人声:你随身带着的乐器' },

    /* ── 模块 3 · 音乐史(7) ── */
    { id: 'history-01-classical',  module: 'history', title: '古典脉络:巴洛克到浪漫' },
    { id: 'history-02-modern',     module: 'history', title: '近现代:打破规则的人' },
    { id: 'history-03-jazz',       module: 'history', title: '爵士:即兴的艺术' },
    { id: 'history-04-rock',       module: 'history', title: '摇滚:三个和弦的反叛' },
    { id: 'history-05-electronic', module: 'history', title: '电子:让机器做音乐' },
    { id: 'history-06-chinese',    module: 'history', title: '华语与民族音乐' },
    { id: 'history-07-pop',        module: 'history', title: '流行:口水歌也有讲究' },

    /* ── 模块 4 · 赏析(5) ── */
    { id: 'listening-01-howto',        module: 'listening', title: '怎么听一首曲子:从被动到主动' },
    { id: 'listening-02-texture',      module: 'listening', title: '织体与配器:谁在伴奏' },
    { id: 'listening-03-classic',      module: 'listening', title: '古典名作怎么听' },
    { id: 'listening-04-popstructure', module: 'listening', title: '流行歌的结构:主副歌怎么走' },
    { id: 'listening-05-world',        module: 'listening', title: '世界音乐:耳朵去旅行' },

    /* ── 模块 5 · 流行演唱(7) ── */
    { id: 'vocal-01-voice',      module: 'vocal', title: '嗓音与发声原理:声音怎么来的' },
    { id: 'vocal-02-breath',     module: 'vocal', title: '气息支撑:唱歌的发动机' },
    { id: 'vocal-03-pitch',      module: 'vocal', title: '音准:怎么唱才不跑调' },
    { id: 'vocal-04-resonance',  module: 'vocal', title: '共鸣与音色:让声音更亮更圆' },
    { id: 'vocal-05-diction',    module: 'vocal', title: '咬字归韵:把每个字唱清楚' },
    { id: 'vocal-06-groove',     module: 'vocal', title: '律动与情感:唱出味道' },
    { id: 'vocal-07-mic',        module: 'vocal', title: '话筒与现场:站上去怎么唱' }
  ]);

})();
