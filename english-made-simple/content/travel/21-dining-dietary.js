/* 旅行模块第 21 课:过敏与特殊饮食必说句。规范见 CLAUDE.md。 */
EMS.registerLesson({
  id: 'travel-21-dining-dietary',
  module: 'travel',
  order: 21,
  title: '餐饮②:过敏与特殊饮食必说句',
  minutes: 5,
  keywords: ['过敏', 'allergy', 'allergic', '素食', 'vegan', 'vegetarian', '无麸质', 'gluten-free', '清真', 'halal', '饮食'],

  sections: {
    what: '\
<p><strong>一句话:在美国说清饮食限制非常重要——餐厅把过敏当法律责任认真对待。关键:说 <en>I have a food allergy</en>(而不只是"我不吃X"),严重的要加 <en>severe</en> / <en>life-threatening</en>。</strong></p>\
<p>场景地图:服务员会主动问 <en>Any allergies or dietary restrictions?</en>。你先说自己的过敏,再说同伴的(素食等),严重过敏一定提"交叉污染"。</p>',

    when: '\
<p>有食物过敏、宗教饮食(清真/洁食)、素食/纯素、不耐受(乳糖/麸质)时,点餐时主动说明。</p>',

    how: '\
<p><strong>严重过敏必说句(不能省,点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我对花生严重过敏,可能危及生命。</td><td><en>I have a severe peanut allergy. This is life-threatening.</en></td></tr>\
<tr><td>这道菜含坚果/贝类/麸质吗?</td><td><en>Does this dish contain any nuts, shellfish, or gluten?</en></td></tr>\
<tr><td>能请厨师确认没有交叉污染吗?</td><td><en>Could you check with the chef to make sure there\'s no cross-contamination?</en></td></tr>\
<tr><td>我需要完全不含坚果的餐食。</td><td><en>I need a completely nut-free meal.</en></td></tr>\
</table>\
<p><strong>各类饮食限制(点读):</strong></p>\
<table>\
<tr><th>中文</th><th>English(点读)</th></tr>\
<tr><td>我对贝类过敏,我朋友是纯素食者。</td><td><en>I\'m allergic to shellfish. And my friend is vegan.</en></td></tr>\
<tr><td>有无麸质选项吗?</td><td><en>Do you have a gluten-free option?</en></td></tr>\
<tr><td>这道菜是全素的吗?(不含蛋奶)</td><td><en>Is this dish completely vegan?</en></td></tr>\
<tr><td>不放洋葱,谢谢。</td><td><en>No onions, please.</en></td></tr>\
<tr><td>能把 A 换成 B 吗?</td><td><en>Could I substitute the fries for a salad?</en></td></tr>\
</table>\
<div class="ex">💡 <strong>关键区别</strong>:<en>vegan</en>=纯素(无蛋奶) vs <en>vegetarian</en>=素食(可含蛋奶);<en>halal</en>=清真、<en>kosher</en>=犹太洁食。说 <strong>"I have a food allergy"</strong> 会触发更严格的厨房流程;只说 "I don\'t eat X" 不会。严重过敏务必加 <strong>severe</strong>,让服务员和厨师都当安全问题处理。</div>',

    pitfalls: '\
<div class="pit"><b>坑 1:严重过敏只说 "I don\'t like peanuts"。</b>太轻描淡写。要说 <en>I have a severe peanut allergy — it\'s life-threatening.</en>,厨房才会严肃对待、避免交叉污染。</div>\
<div class="pit"><b>坑 2:vegan 和 vegetarian 混用。</b>vegan 完全不含动物制品(连蛋奶蜂蜜都不行);vegetarian 可含蛋奶。点错可能吃到不能吃的。</div>\
<div class="pit"><b>坑 3:怕麻烦不说过敏。</b>美国餐厅认真对待过敏,这是他们的法律责任。主动说清是为自己安全,不会被嫌弃。</div>',
  },

  quiz: [
    {
      type: 'choice',
      q: '严重花生过敏,点餐时最该说哪句?',
      options: ['I don\'t like peanuts.', 'I have a severe peanut allergy. It\'s life-threatening.', 'No peanut maybe.', 'Peanut is bad.'],
      answer: 1,
      explain: '加 severe / life-threatening,厨房才会按安全问题处理并避免交叉污染。'
    },
    {
      type: 'choice',
      q: 'vegan 和 vegetarian 的区别是?',
      options: ['完全一样', 'vegan 不含任何动物制品,vegetarian 可含蛋奶', 'vegan 可吃鱼', 'vegetarian 是清真'],
      answer: 1,
      explain: 'vegan=纯素(无蛋奶蜂蜜);vegetarian=素食(可含蛋奶)。两者别混。'
    },
    {
      type: 'fill',
      q: '问厨房能否避免交叉污染:"…make sure there\'s no cross-____."',
      answer: ['contamination'],
      explain: 'cross-contamination = 交叉污染,严重过敏者点餐必须确认的关键点。'
    }
  ]
});
