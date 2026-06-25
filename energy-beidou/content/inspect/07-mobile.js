EBD.registerLesson({
  id: 'inspect-07-mobile',
  module: 'inspect',
  order: 7,
  title: '配网巡检与移动作业终端',
  minutes: 4,
  keywords: ['配网', '移动作业', '终端', 'PMS', '设备识别'],
  sections: {
    what:
      '<p>配电网设备多、分布密、贴近用户(街边的变压器、环网柜、电缆分支箱)。配网巡检靠的是<strong>移动作业终端</strong>:一台带北斗定位的手持机或平板,巡到哪、查的是哪台设备,自动对上号。</p>',
    why:
      '<p>配网设备成千上万、外观相似,最怕"<strong>查错设备、记错位置</strong>"。终端用北斗定位 + 设备坐标,确保"<strong>你站在哪台设备前,系统就调出哪台的台账</strong>",检查结果即时回填,不再事后凭记忆补录、张冠李戴。</p>',
    how:
      '<ul>' +
      '<li><strong>定位识别</strong>:北斗定位结合设备坐标(或扫码)锁定当前设备。</li>' +
      '<li><strong>即查即填</strong>:现场查看台账、录入缺陷,带<gd data-term="shikongbiaoqian">时空标签</gd>实时上传。</li>' +
      '<li><strong>到位留痕</strong>:巡检轨迹和到位记录可追溯,防止漏巡、假巡。</li>' +
      '</ul>',
    pitfalls:
      '<div class="pit"><b>误解:配网设备街边都有信号,定位不是问题。</b>城区是不错,但配网也深入城乡接合部、地下、楼宇内部,信号未必稳。这时需结合<gd data-term="shineidingwei">室内定位</gd>或扫码辅助,别假设处处都能精准定位。</div>',
    links:
      '<p>· 卫星照不到的地方怎么定位:下一课《变电站室内定位》。<br>· 到位留痕、防假巡,见模块 8《到位管控》。'
  }
});
