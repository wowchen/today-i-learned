SAD.registerLesson({
  id: 'embed/04-software',
  module: 'embed',
  order: 4,
  title: '嵌入式软件与中间件',
  minutes: 4,
  keywords: ['嵌入式软件', '嵌入式中间件', '嵌入式数据库', '交叉编译', '固件'],
  concept: '<p>嵌入式软件在资源受限环境下开发,常需<b>交叉编译</b>(在PC上编译、烧录到目标机),并用精简的嵌入式中间件/数据库支撑。</p>',
  exam: '<p><b>考纲定位:</b>综合知识。重点:交叉编译概念、嵌入式中间件特点。</p>',
  core: '<ul>' +
    '<li><b>交叉编译</b>:宿主机(PC)上生成目标机(ARM等)可执行码,因目标机资源不足以自编译。</li>' +
    '<li><b>嵌入式中间件</b>:为资源受限环境精简的通信/数据库中间件(如嵌入式SQLite)。</li>' +
    '<li><b>固件</b>:固化在设备里的软件,常存于Flash,可远程升级(OTA)。</li>' +
    '</ul>' +
    '<div class="ex">开发链:PC交叉编译 → 烧录/OTA → 目标机运行 → 远程调试。资源受限决定了"能省则省、能裁则裁"。</div>',
  pitfalls: '<div class="pit"><b>误解:嵌入式软件都在目标设备上编译。</b>目标机资源有限,通常在 PC 上<b>交叉编译</b>后再烧录,而非本机编译。</div>',
  quiz: [
    { type: 'choice', q: '在PC上编译生成嵌入式目标机可执行程序的方式称为?', options: ['本地编译', '交叉编译', '解释执行', '即时编译'], answer: 1, source: '高频', explain: '交叉编译:宿主机编译、目标机运行。' }
  ],
  links: '<p>上一课:<a href="#/l/embed/03-architecture">嵌入式架构设计</a> · 下一课:<a href="#/l/embed/05-reliability">嵌入式可靠性与安全</a></p>'
});
