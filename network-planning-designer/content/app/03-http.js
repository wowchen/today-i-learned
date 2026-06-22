NPD.registerLesson({
  id: 'app/03-http',
  module: 'app',
  order: 3,
  title: 'HTTP 与 HTTPS',
  minutes: 5,
  key: true,
  keywords: ['HTTP', 'HTTPS', '请求响应', '方法', '状态码', '无状态', 'TLS'],
  concept: '<p><b><gd data-term="http">HTTP</gd></b> 是 Web 客户端与服务器间的请求/响应协议,默认 TCP 80,无状态。<b><gd data-term="https">HTTPS</gd></b> 在 TLS 上跑 HTTP,默认 443,保障传输安全。</p>' +
    '<div class="ex">HTTP 是"点菜—上菜"的规矩;HTTPS 把对话装进"加密保险箱"。</div>',
  exam: '<p><b>频度:中高。</b>常考方法、状态码分类、HTTPS 原理与端口。</p>',
  core: '<p><b>HTTP 请求方法:</b>GET(取)、POST(提交)、PUT(更新)、DELETE(删)、HEAD(取头)、OPTIONS 等。</p>' +
    '<p><b>状态码分类:</b></p>' +
    '<ul>' +
    '<li><b>1xx</b>:信息性(继续)。</li>' +
    '<li><b>2xx</b>:成功(200 OK)。</li>' +
    '<li><b>3xx</b>:重定向(301 永久、302 临时、304 未修改)。</li>' +
    '<li><b>4xx</b>:客户端错误(400 请求错、401 未授权、403 禁止、404 找不到)。</li>' +
    '<li><b>5xx</b>:服务端错误(500 内部错误、502 网关、503 不可用)。</li>' +
    '</ul>' +
    '<p><b>HTTPS:</b>HTTP over TLS——先 TLS 握手协商密钥、验证书,再加密传 HTTP 数据。</p>' +
    '<p class="ex">HTTP 无状态,靠 Cookie/Session 维持会话状态;HTTPS 不改变 HTTP 语义,只加密传输层。</p>',
  pitfalls: '<div class="pit"><b>易混:401 vs 403。</b>401 未认证(需登录);403 已认证但无权限(禁止访问)。</div>' +
    '<div class="pit"><b>易错:HTTPS 端口 443。</b>别与 HTTP 80 混;HTTPS 安全在 TLS 加密,不是 HTTP 本身改了。</div>' +
    '<div class="pit"><b>易混:GET vs POST。</b>GET 通常取数据(参数在 URL、可缓存、有长度限制);POST 提交数据(在请求体、相对安全)。</div>',
  quiz: [
    { type: 'choice', q: 'HTTP 状态码 404 表示?', options: ['服务器内部错误', '请求资源未找到', '永久重定向', '未授权'], answer: 1, source: '基础', explain: '404 Not Found。' },
    { type: 'choice', q: 'HTTPS 相比 HTTP 主要增加的是?', options: ['更快的传输', 'TLS 加密与身份认证', '更大的报文', '更短的首部'], answer: 1, source: '基础', explain: 'HTTPS 用 TLS 加密并验证书。' },
    { type: 'fill', q: 'HTTPS 默认端口是 ____。(数字)', answer: ['443'], source: '基础', explain: 'HTTPS 默认 443。' }
  ],
  links: '<p>上一课:<a href="#/l/app/02-dhcp">DHCP</a> · 下一课:<a href="#/l/app/04-email">邮件协议</a> · 安全细节:<a href="#/l/security/04-vpn">VPN/TLS</a></p>'
});
