NPD.registerLesson({
  id: 'app/04-email',
  module: 'app',
  order: 4,
  title: '邮件协议:SMTP/POP3/IMAP',
  minutes: 4,
  keywords: ['SMTP', 'POP3', 'IMAP', '邮件', 'MIME', '收发'],
  concept: '<p>邮件系统靠三协议协作:<b><gd data-term="smtp">SMTP</gd></b>发、<b>POP3/IMAP</b>收。</p>' +
    '<div class="ex">寄信用 SMTP,取信用 POP3 或 IMAP;IMAP 比 POP3 更"在线同步"。</div>',
  exam: '<p><b>频度:中。</b>常考三协议职责、端口、POP3 vs IMAP 区别。</p>',
  core: '<p><b>三协议:</b></p>' +
    '<table><tr><th>协议</th><th>方向</th><th>端口</th><th>特点</th></tr>' +
    '<tr><td>SMTP</td><td>发送</td><td>TCP 25(及 465/587 加密)</td><td>push 推送邮件到服务器/之间</td></tr>' +
    '<tr><td>POP3</td><td>接收</td><td>TCP 110(及 995 加密)</td><td>下载到本地后通常删除</td></tr>' +
    '<tr><td>IMAP</td><td>接收</td><td>TCP 143(及 993 加密)</td><td>邮件留在服务器、多端同步</td></tr></table>' +
    '<p><b>邮件流转:</b>发件客户端→(SMTP)→发件方服务器→(SMTP)→收件方服务器→(POP3/IMAP)→收件客户端。</p>' +
    '<p><b>MIME:</b>扩展 SMTP 使其能传非 ASCII(附件、多媒体、中文等)。</p>' +
    '<p class="ex">POP3 是"下载即删"(本地为主);IMAP 是"邮件在云端、多端看同一份"——现代邮箱多用 IMAP。</p>',
  pitfalls: '<div class="pit"><b>易混:POP3 vs IMAP。</b>POP3 下载后通常从服务器删除(单机);IMAP 保留在服务器、状态同步(多端)。</div>' +
    '<div class="pit"><b>易错:SMTP 是"发"不是"收"。</b>收件用 POP3/IMAP;SMTP 只管发送与服务器间转发。</div>' +
    '<div class="pit"><b>考点:MIME 的作用。</b>SMTP 原本只传 ASCII,MIME 让它能传附件与多语种内容。</div>',
  quiz: [
    { type: 'choice', q: '发送电子邮件使用的协议是?', options: ['POP3', 'IMAP', 'SMTP', 'FTP'], answer: 2, source: '基础', explain: 'SMTP 负责发送。' },
    { type: 'choice', q: '下列哪个协议"邮件保留在服务器、多端同步"?', options: ['POP3', 'IMAP', 'SMTP', 'Telnet'], answer: 1, source: '基础', explain: 'IMAP 邮件留服务器、多端同步。' },
    { type: 'choice', q: 'MIME 的主要作用是?', options: ['加密邮件', '让 SMTP 能传非 ASCII(附件等)', '加速传输', '替代 SMTP'], answer: 1, source: '理解', explain: 'MIME 扩展 SMTP 传多媒体/附件。' }
  ],
  links: '<p>上一课:<a href="#/l/app/03-http">HTTP/HTTPS</a> · 下一课:<a href="#/l/app/05-other">FTP/SNMP/Telnet</a></p>'
});
