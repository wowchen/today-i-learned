/* agent/11-eval-reliability (自动生成) */
AIX.registerLesson({
  id:"agent/11-eval-reliability", module:"agent", order:11,
  title:"Agent 评测与可靠性", minutes:4,
  keywords:["评测","轨迹","沙箱"],
  concept:"<p>怎么知道一个 Agent 靠不靠谱?看<gd data-term=\"trajectory\">轨迹</gd>、看任务成功率、在<gd data-term=\"sandbox\">沙箱</gd>里测——Agent 评测是独立于模型评测的新课题。</p>",
  core:"<p>模型评测问\"答得对不对\",Agent 评测问\"任务成没完成、路径对不对\"。关键指标:<b>任务成功率</b>、步骤效率、工具使用正确率、错误恢复能力。方法:构造任务集→自动判分+人工抽检→轨迹分析(失败卡在哪一步)。</p><p>可靠性工程:沙箱隔离(跑代码不出圈)、关键动作人工确认、限制步数与花费上限、操作全审计、可回滚。生产级 Agent 的标配,不是\"聪明\",是\"可控\"。</p>",
  pitfalls:"<div class=\"ex\">让 100 个 Agent 各完成\"订会议室\"任务:看成功率、平均步数、哪些步骤最常失败——比\"看起来好聪明\"可靠得多。</div>",
  links:"<div class=\"pit\"><b>别踩坑</b>演示视频里的丝滑成功≠稳定可靠。要专门测失败场景:工具挂了、API 超时、遇到恶意指令。评测集还要持续更新,防模型\"专刷你的题\"。</div>"
});
