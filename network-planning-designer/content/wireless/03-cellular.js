NPD.registerLesson({
  id: 'wireless/03-cellular',
  module: 'wireless',
  order: 3,
  title: '蜂窝移动网络:4G/5G',
  minutes: 4,
  keywords: ['蜂窝', '4G', 'LTE', '5G', '核心网', 'eMBB', 'uRLLC', 'mMTC'],
  concept: '<p>蜂窝移动通信把覆盖区分成"蜂窝"小区,频率可复用。4G/LTE 全 IP 化,5G 面向三大场景。</p>' +
    '<div class="ex">基站像"蜂巢格",相邻格用不同频率,整体覆盖又复用。</div>',
  exam: '<p><b>频度:中。</b>常考蜂窝原理、4G/5G 特征、5G 三大场景。</p>',
  core: '<p><b>蜂窝原理:</b>把区域划成六边形小区,每小区一个基站;相隔足够远的小区可<b>频率复用</b>,提升容量。</p>' +
    '<p><b>4G/LTE:</b></p>' +
    '<ul>' +
    '<li>全 IP 化、扁平架构,核心网 EPC。</li>' +
    '<li>OFDMA 正交频分多址,高速率、低延迟。</li>' +
    '<li>LTE 是 4G 的主流无线接入标准。</li>' +
    '</ul>' +
    '<p><b>5G 三大场景(高频度考点):</b></p>' +
    '<ul>' +
    '<li><b>eMBB</b>:增强移动宽带(大流量,如高清视频/VR)。</li>' +
    '<li><b>uRLLC</b>:超可靠低时延(自动驾驶、工业控制)。</li>' +
    '<li><b>mMTC</b>:海量机器通信(物联网、传感)。</li>' +
    '</ul>' +
    '<p class="ex">5G 核心特点:高频谱效率、低时延、大连接、网络切片(为不同业务切虚拟网络)。</p>',
  pitfalls: '<div class="pit"><b>易错:5G 三大场景别混。</b>eMBB=宽带大流量;uRLLC=低时延高可靠;mMTC=海量物联网。</div>' +
    '<div class="pit"><b>易混:频率复用 vs 多路复用。</b>蜂窝"频率复用"是空间上隔开复用;FDM/TDM 是单链路内复用。</div>',
  quiz: [
    { type: 'choice', q: '5G 面向"自动驾驶/工业控制"的场景是?', options: ['eMBB', 'uRLLC', 'mMTC', 'CSMA'], answer: 1, source: '基础', explain: 'uRLLC 超可靠低时延。' },
    { type: 'choice', q: '5G 面向"海量物联网连接"的场景是?', options: ['eMBB', 'uRLLC', 'mMTC', 'LTE'], answer: 2, source: '基础', explain: 'mMTC 海量机器通信。' },
    { type: 'choice', q: '蜂窝通信中"频率复用"指的是?', options: ['单链路分时', '相隔足够远的小区可重用同频率', '加密频率', '动态分配 IP'], answer: 1, source: '理解', explain: '空间上隔开的小区重用频率。' }
  ],
  links: '<p>上一课:<a href="#/l/wireless/02-wifi-secure">Wi-Fi 安全</a> · 下一课:<a href="#/l/wireless/04-iot">物联网</a></p>'
});
