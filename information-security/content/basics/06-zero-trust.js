/* basics/06-zero-trust (自动生成) */
ISL.registerLesson({
  id:"basics/06-zero-trust", module:"basics", order:6,
  title:"零信任", minutes:4,
  keywords:["零信任"],
  concept:"<p><gd data-term=\"zero-trust\">零信任</gd>一句话:<b>从不信任,持续验证</b>。不再因为\"你在公司内网里\"就放行,每次访问都要重新核验身份与设备。</p>",
  core:"<p>传统模型像\"进了小区门就随便串门\";零信任是\"进每户都要重新刷脸\"。它依赖强<gd data-term=\"identity\">身份</gd>、<gd data-term=\"mfa\">多因素</gd>、设备健康检查和细粒度授权。远程办公和云普及后,边界模糊,零信任几乎成了新范式。</p>",
  pitfalls:"<div class=\"pit\"><b>别踩坑 </b>零信任是一种架构理念,不是买个产品就完成。把它当成\"再加一道登录\"就跑偏了——核心是\"默认不信、按上下文动态授权\"。</div>",
  links:"<p>怎么在设计阶段就想清楚这些?这就要威胁建模。</p>"
});
