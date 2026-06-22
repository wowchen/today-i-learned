/* 旅行模块第 7 课:安检 TSA。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-07-security',
  module: 'travel',
  order: 7,
  title: '机场②:安检 TSA',
  minutes: 5,
  keywords: ['安检', 'security', 'TSA', '脱鞋', '液体', 'laptop', '笔记本', 'screening'],

  sections: {
    what: '\
<p><strong>一句话:TSA 是美国机场安检。你基本只需"听懂指令、照做"——脱鞋、解皮带、脱外套、笔记本和液体单独放篮子。话不多,但听懂很关键。</strong></p>\
<p>场景地图:安检员先要 <en>Boarding pass and ID, please.</en>,然后一连串指令让你 <en>take off your shoes, belt, and jacket</en>。多数时候你点头照做即可,最多确认一句"笔记本要拿出来吗"。</p>',

    when: '\
<p>过安检口排队时。提前把口袋清空、液体装好,能快很多。</p>',

    how: '\
<p><strong>安检员会说(听懂照做):</strong></p>\
<table>\
<tr><th>安检员说</th><th>意思 / 你的回应</th></tr>\
<tr><td><en>Boarding pass and ID, please.</en></td><td>出示登机牌和证件 → <en>Here\'s my passport and boarding pass.</en></td></tr>\
<tr><td><en>Take off your shoes, belt, and jacket.</en></td><td>脱鞋、解皮带、脱外套(照做)</td></tr>\
<tr><td><en>Empty your pockets in the bin.</en></td><td>口袋东西放篮子里</td></tr>\
<tr><td><en>Step through, please.</en></td><td>请通过(走过去)</td></tr>\
<tr><td><en>Step aside for additional screening.</en></td><td>到旁边再查一次 → <en>OK, sure.</en>(别紧张别争辩)</td></tr>\
<tr><td><en>You\'re all set.</en> / <en>You\'re good to go.</en></td><td>可以走了 → <en>Thank you!</en></td></tr>\
</table>\
<p><strong>你可能要问(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>笔记本要拿出来吗?</td><td><en>Should I take out my laptop?</en></td></tr>\
<tr><td>手表能戴着过吗?</td><td><en>Can I keep my watch on?</en></td></tr>\
<tr><td>液体能带多少?</td><td><en>How much liquid can I bring?</en></td></tr>\
<tr><td>这水能带过去吗?</td><td><en>Can I bring this water through?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>TSA 三条铁律</strong>:① 笔记本/平板/相机单独放篮子;② 液体每瓶 ≤100 ml,全部装进 1 个 1 升透明袋;③ 充电宝可随身但<strong>不能托运</strong>。被 random check 照做就行,争辩反而升级。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:带超过 100 ml 的水/饮料过安检。</b>成品液体 >100 ml 一律丢弃。想喝水,过了安检再买 <en>Is bottled water allowed past security?</en></div>\
<div class="pit"><b>坑 2:被叫到旁边复检就慌、就争辩。</b><en>Step aside for additional screening.</en> 是常规随机检查。回 <en>OK, sure.</en> 配合即可,争辩只会更久。</div>\
<div class="pit"><b>坑 3:充电宝塞进托运箱。</b>锂电池(充电宝)必须<strong>随身</strong>,不能托运。装错托运箱会被拦下开包。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '液体过 TSA 安检的规定是?',
      options: ['随便带', '每瓶 ≤100 ml,装进 1 升透明袋', '只能带矿泉水', '托运里随便带'],
      answer: 1,
      explain: '液体每瓶 ≤100 ml,全部装在一个 1 升透明袋里;超量成品液体要丢弃,过安检后再买。'
    },
    {
      type: 'choice',
      q: '安检员说 "Step aside for additional screening." 最佳反应是?',
      options: ['争辩说我没问题', '掉头就走', 'OK, sure,配合检查', '大声抗议'],
      answer: 2,
      explain: '这是常规随机复检,平静配合 "OK, sure." 最快通过,争辩反而升级。'
    },
    {
      type: 'fill',
      q: '问"笔记本要拿出来吗":"Should I take ____ my laptop?"',
      answer: ['out'],
      explain: 'take out = 拿出来。笔记本、平板要单独放篮子过安检。'
    }
  ]
});
