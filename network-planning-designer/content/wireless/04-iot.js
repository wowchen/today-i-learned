NPD.registerLesson({
  id: 'wireless/04-iot',
  module: 'wireless',
  order: 4,
  title: '物联网与短距通信',
  minutes: 3,
  keywords: ['物联网', 'IoT', '蓝牙', 'ZigBee', 'NB-IoT', 'LoRa', '传感器'],
  concept: '<p><b><gd data-term="iot">物联网</gd></b>通过传感器/网络把"物"相连,实现感知与控制,常用短距与低功耗广域技术。</p>' +
    '<div class="ex">万物上网——让灯泡、水表、电表也能说话。</div>',
  exam: '<p><b>频度:中。</b>常考物联网层次、短距技术、低功耗广域(LPWAN)。</p>',
  core: '<p><b>物联网三层架构:</b></p>' +
    '<ul>' +
    '<li><b>感知层</b>:传感器/RFID 采集数据。</li>' +
    '<li><b>网络层</b>:把数据传回平台(短距或广域)。</li>' +
    '<li><b>应用层</b>:数据分析与控制(智能家居/智慧城市)。</li>' +
    '</ul>' +
    '<p><b>短距通信:</b></p>' +
    '<ul>' +
    '<li><b>蓝牙</b>:短距、中速,个人设备互联。</li>' +
    '<li><b>ZigBee</b>:低功耗、自组网、低速,智能家居传感。</li>' +
    '<li><b>NFC</b>:极近距(厘米级),支付/标签。</li>' +
    '</ul>' +
    '<p><b>低功耗广域(LPWAN):</b></p>' +
    '<ul>' +
    '<li><b>NB-IoT</b>:蜂窝授权频段、广覆盖、低功耗,运营商物联网。</li>' +
    '<li><b>LoRa</b>:非授权频段、自建网、长距离低功耗。</li>' +
    '</ul>' +
    '<p class="ex">NB-IoT(运营商授权)与 LoRa(自建非授权)是 LPWAN 两大主流——考点常对比二者。</p>',
  pitfalls: '<div class="pit"><b>易混:NB-IoT vs LoRa。</b>NB-Iot 走蜂窝授权频段(运营商提供);LoRa 非授权频段、可自建网。</div>' +
    '<div class="pit"><b>易混:ZigBee vs 蓝牙。</b>ZigBee 低功耗自组网(传感网);蓝牙短距点对点(个人设备)。</div>',
  quiz: [
    { type: 'choice', q: '物联网三层架构自下而上为?', options: ['网络/感知/应用', '感知/网络/应用', '应用/网络/感知', '感知/应用/网络'], answer: 1, source: '基础', explain: '感知→网络→应用。' },
    { type: 'choice', q: '走蜂窝授权频段、适合运营商物联网的是?', options: ['LoRa', 'NB-IoT', 'ZigBee', '蓝牙'], answer: 1, source: '基础', explain: 'NB-IoT 蜂窝授权。' },
    { type: 'choice', q: '低功耗、自组网、常用于智能家居传感的是?', options: ['蓝牙', 'ZigBee', 'NFC', 'Wi-Fi'], answer: 1, source: '基础', explain: 'ZigBee 低功耗自组网。' }
  ],
  links: '<p>上一课:<a href="#/l/wireless/03-cellular">蜂窝移动</a> · 进入网络存储:<a href="#/l/storage/01-das-nas">DAS/NAS</a></p>'
});
