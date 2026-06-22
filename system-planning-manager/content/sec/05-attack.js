SPM.registerLesson({
  id: 'sec/05-attack',
  module: 'sec',
  order: 5,
  title: '常见网络攻击与防范',
  minutes: 4,
  keywords: ['DDoS', 'SQL注入', 'XSS', '钓鱼', '勒索'],
  concept: '<p>常见威胁:<b>DDoS</b>(海量请求压垮服务)、<b>SQL 注入/XSS</b>(应用漏洞)、<b>钓鱼</b>(社会工程)、<b>勒索病毒</b>(加密数据勒索)。运维要会识别与应对。</p>',
  exam: '<p><b>考纲定位:</b>基础常识,概念辨析。</p>',
  core: '<ul>' +
    '<li><b>DDoS</b>:用流量清洗、限流、CDN 缓解;直接威胁<gd data-term="availability">可用性</gd>。</li>' +
    '<li><b>注入/XSS</b>:输入校验、参数化查询、转义防范。</li>' +
    '<li><b>勒索病毒</b>:最有效的应对是<b>离线/异地备份</b> + 及时打补丁。</li>' +
    '</ul>' +
    '<div class="ex">勒索病毒泛滥的今天,可靠备份(关联 <gd data-term="rpo">RPO</gd>)就是最后的救命稻草。</div>',
  pitfalls: '<div class="pit"><b>DDoS 不窃取数据</b>,目的是让服务不可用;它针对的是可用性而非保密性。</div>',
  quiz: [
    { type: 'choice', q: '应对勒索病毒、保障数据可恢复最关键的措施是?', options: ['换强密码', '可靠的离线/异地备份', '关闭日志', '提高带宽'], answer: 1, source: '高频', explain: '可靠备份可在被加密后恢复数据,是最后防线。' }
  ],
  links: '<p>上一课:<a href="#/l/sec/04-mlps">等级保护</a> · 下一篇:<a href="#/l/itss/01-it-service">什么是 IT 服务</a></p>'
});
