/* dl/06-rnn (自动生成) */
AIX.registerLesson({
  id:"dl/06-rnn", module:"dl", order:6,
  title:"循环神经网络 RNN", minutes:3,
  keywords:["RNN","序列","记忆"],
  concept:"<p><gd data-term=\"rnn\">循环神经网络</gd>专门处理<b>有先后顺序的序列</b>(文字、语音):它一边往后读,一边把前面的信息\"记\"在状态里,带着记忆理解后文。</p>",
  core:"<p>读句子\"我老家在四川,所以我爱吃……\"时,要靠记住\"四川\"才能接出\"辣\"。RNN 就是为这种\"上下文依赖\"设计的,曾是机器翻译、语音识别的主力。</p><p>但它有个老毛病:句子一长,前面的信息就<b>记不住、传不动</b>(梯度消失)。后来用 LSTM 等改良缓解,但根上没解决,而且只能<b>一个接一个</b>地算,慢、难并行。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑</b>RNN 已基本被<gd data-term=\"transformer\">Transformer</gd>取代。今天的大模型不靠 RNN 那种\"逐字记忆\",而是用<gd data-term=\"attention\">注意力</gd>一次看全句。了解 RNN 主要是为了懂这段历史。</p></div>",
  links:"<p>不管图像还是文字,送进网络前都得先变成数字——这就是\"嵌入\"。</p>"
});
