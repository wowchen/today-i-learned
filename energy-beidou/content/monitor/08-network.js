EBD.registerLesson({
  id: 'monitor-08-network',
  module: 'monitor',
  order: 8,
  title: '监测精度从哪来:离不开地基增强网',
  minutes: 4,
  keywords: ['精度', '地基增强', 'CORS', '基准', '毫米级'],
  sections: {
    what:
      '<p>毫米级监测精度不是凭空来的,背后离不开<strong>稳定的高精度基准</strong>。除了就近自设基准点,大范围、长期的监测还要依托<gd data-term="dijizengqiang">地基增强网</gd>(<gd data-term="cors">CORS</gd>)提供统一、稳定的坐标框架。</p>',
    why:
      '<p>道理上承模块 3:监测靠"相对解算"扣误差,而扣得干不干净,取决于参照框架稳不稳。地基增强网遍布各地、长期连续运行,提供了一个<strong>区域统一、长期稳定</strong>的"尺子",让分散的监测点都能挂到同一基准上,毫米级位移才可信、可比。</p>',
    how:
      '<ul>' +
      '<li><strong>统一框架</strong>:监测网接入地基增强网的基准,所有点同框架,跨点、跨时段可比。</li>' +
      '<li><strong>长期稳定</strong>:CORS 站常年运行,基准不漂,适合多年尺度的缓慢形变监测。</li>' +
      '<li><strong>精密后处理</strong>:配合精密轨道钟差等产品,进一步把精度推到毫米。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:监测点自己装个接收机就能毫米级。</b>没有稳定可靠的基准框架(自设稳固基准点或地基增强网),"毫米级"无从谈起。精度是<strong>"好接收机 + 稳基准 + 长观测 + 精处理"</strong>共同的结果。</div>',
    links:
      '<p>· 把整套串起来跑一遍:下一课《一个滑坡预警案例的全流程》。<br>· 地基增强网本身,回看模块 3《地基增强网 CORS》。'
  }
});
