# 配电网与配电自动化学习站 · 开发规范(PDN · Power Distribution and Automation)

用大白话讲透**配电这一层**:配电网怎么分三层、一次设备有哪些、终端与通信怎么配、自动化怎么把故障处理掉、可靠性线损怎么管、分布式电源接进来会发生什么。
纯静态、零依赖、离线可用。**引擎克隆自新型电力系统与储能站(NPS),命名空间整体改为 `PDN`、localStorage 前缀 `nps.`→`pdn.`。** 「今日得到」合集第 41 站。

## 与兄弟站的关系

- **PGF(电网通识)** 回答「电网是什么」;**NPS(新型电力系统与储能)** 回答「系统怎么转型」;**AIP(AI+电力)** 回答「AI 怎么用」;**EMT(电力市场)** 回答「电怎么交易」;**TCM(通信通识)** 回答「传输网怎么组」;**本站(PDN)** 回答「配电这一层怎么搭、怎么管、怎么自动化」。
- 六站互不重复:本站不重复 PGF 的发输变配用全景,不重复 NPS 的储能技术路线与系统转型方向,不重复 AIP 的 AI 算法原理,只讲配电层的网架、设备、终端、通信、自动化与运维。
- **引擎与 NPS 逐行同构**:`registry / progress / sync / ui / engine / views-lesson` 仅做命名空间替换;`tools/build.js` 同构(含 helpers `g/ex/pit/fml/qc/qf`)。

## 视觉 = 配电网馈线拓扑(本站新定)

- 浅色 = 暖白 `--bg:#fbf9f7` + **电力橙** `--acc:#d9480f`;深色 = 石墨深灰 `--bg:#14181c` + **亮橙** `--acc:#ff8a3d`。底纹为**点阵**(`radial-gradient`),取「配电节点/杆塔」之意,与 NPS 的网格线区分。**橙色系在 40 站中此前未被占用**(朱红属 MATH、琥珀属 AIP、藏青属 FIN、电蓝属 EMT、光纤蓝青属 TCM、能源绿属 NPS)。
- 首页主图 = **单电源馈线拓扑**(`views-home.js` 的 `pdnSVG()`):变电站(双绕组变压器符号)→ 主馈线 → 分段开关 × 2(方形)→ 馈线末端,两条分支下接台区配变(箱体符号);主馈线 3 枚电流脉冲同向流动 + 两条分支各 1 枚向下,变电站带呼吸光环。带 `prefers-reduced-motion` 守卫。
- 顶栏图标 = 环网/馈线示意(母线 + 两个开关方块 + 闭环),区别于 NPS 的电池图标。

## 技术架构

- 全局命名空间:`window.PDN`;localStorage 前缀 `pdn.`(`pdn.progress.v1`);同步键 `pdn.sync.v1`、同步路径 `progress/pdn.json`。
- 课时五段式:① 一句话 · ② 讲透 · ③ 别踩坑 · ④ 想一想(quiz,即时判分) · ⑤ 接着读。
- 内容即数据:`PDN.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`。
- quiz:`{type:'choice',q,options[],answer:idx,explain,source}` 或 `{type:'fill',q,answer:[..],explain,source}`。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + 合规声明条 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入)
assets/css/main.css        全部样式(电力橙/石墨双主题 + .notice-bar + .gh-* + 工具 .calc-*)
assets/js/                 引擎:registry/progress/sync/ui/engine/views-lesson(克隆 NPS 改 PDN)
                           + views-home(馈线拓扑) + views-tools(5 工具)
content/                   modules.js(13 模块 + PDN.path + en)、terms.js(100 条)、<module>/<NN-slug>.js  ← 自动生成
tools/build.js             单一数据源(MODULES/TERMS)+ 从 _src 加载课程 + 校验 + 生成 + 注入
tools/_src/<module>.js     各模块课时块(module.exports = [...])
```

## 13 模块(84 课 / 100 术语)

guide 导览(4) · basic 配电网基础(8) · load 负荷与配网规划(6) · equip 配电设备与设施(7) · terminal 配电终端与感知(7) · comm 配网通信(6) · auto 配电自动化(8) · reliability 供电可靠性与运维(6) · dg 分布式电源与有源配网(7) · newtech 配网新技术(6) · market 配网业务与市场(6) · policy 标准与合规(6) · practice 一线实战(7)

## 5 个互动工具(views-tools.js)

1. **负荷预测与容载比测算器**(`PDN.calcLoad`):现状负荷 + 增长率 + 年限 → 规划年负荷、目标变电容量、现状与规划年容载比、容量缺口、建议新增主变台数
2. **线损率测算与降损效益**(`PDN.calcLoss`):供电量 + 售电量 + 线路长度 + 电价 + 管理目标 → 综合线损率、线损电量、超标电量与年降损电费效益
3. **配电自动化覆盖与效益评估器**(`PDN.calcDa`):线路总数 + 已覆盖数 + 故障率 + 处理时长 + 户数 → 覆盖率、年减少停电时长/户时、户均停电时间改善、剩余投资需求
4. **配网故障处置推演器**(`PDN.calcFault`):线路长度 + 分段开关数 + 联络条件 + 自动化模式 + 故障位置 → 分段与隔离范围、停电用户比例、隔离与恢复耗时对比
5. **分布式光伏接入承载力评估器**(`PDN.calcPv`):配变容量 + 最大负荷 + 已有/新增光伏 + 午间最小负荷 → 最大反向功率、反向占比、承载力分档与建议

工具页在 `PDN.views.calc` 渲染后用 `setTimeout(..., 0)` 触发五个计算函数首算,打开即有结果(本环境引擎无 `afterToolsRender` 钩子,故用 setTimeout)。

## 时效与合规层(本站必守)

> 内容基线:**2026 年 9 月**。涉标准、监管要求与政策的题材照此执行。

1. `index.html` 顶栏下方有**常驻声明条**(`.notice-bar`),首页「关于本站」有**声明块**,本文件顶部三处均写明内容基线日期。
2. `policy` 模块只写标准与制度的**名称与作用**,一律注明「以现行有效文件为准」,**不得编造标准编号与文号**。
3. 工具页与首页声明统一写「不构成工程设计、施工或合规依据,具体工程须以正式设计文件、现行标准与现场实际为准」。
4. 涉及电网安全处一律强调「技术辅助决策,人做最终判断」;涉现场作业处强调「安全永远优先于速度」。

## 如何增补内容

不要手改 `content/`(自动生成)。流程:
1. 编辑 `tools/_src/<module>.js` 加一条 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links]`。
2. 概念/正文里的术语链接用 `<gd data-term="术语id">显示文字</gd>`;公式用 `<div class="fml">`;示例用 `<div class="ex">`;踩坑用 `<div class="pit"><b>别绕晕 </b>…</div>`。
3. 运行 `node tools/build.js`。校验会检查:术语是否存在、内链是否指向真实课时/模块、是否含 emoji;并做**命名空间自检**(生成物必须含 `PDN.`、不得含 `NPS.`/`AIP.` 等任何兄弟站命名空间,`NPS`/`SLP` 已加入 `SIBLINGS` 白名单)。
4. 新术语要同步加进 `tools/build.js` 的 `TERMS`。

## 内容源写法陷阱

- `_src/*.js` 里短标识符(slug、标题、关键词)用**双引号**,长 HTML 内容用**单引号**包裹、内部 HTML 属性用双引号;正文引号用全角「」,**不要**在单引号字符串里出现半角 `'`。
- 闭合标签别写错:是 `</gd>`,不是 `</d>`。改完先 `node --check tools/_src/*.js` 再跑 build。
- ⚠️ **本站编写时踩过的坑(4 个文件、7 处)**:quiz 数组写成 `[{...}]]` 时,`source` 后的 `}` 会漏掉 —— 正确写法是 `"source":"想一想"}],`(`}` 闭对象 + `]` 闭 quiz 数组 + `,`)。症状是 `SyntaxError: Unexpected token ']'`,报错行号指向 quiz 行末尾,但真实原因是**对象未闭合**。写完逐文件 `node --check` 能立刻发现。
- ⚠️ **自动插术语链接时,术语只能从 `build.js` 的 `TERMS` 段提取**(`re.search(r'const TERMS = \[(.*?)\n\];', b, re.S)`)。若对整个 `build.js` 用 `\['([a-z0-9-]+)','([^']+)'` 匹配,会把 **MODULES 段**的条目也当成术语,插出 `<gd data-term="auto">` 这类非法引用(模块 id 不是术语 id),build 会报「未知术语」。插链接脚本应:① 只取 TERMS 段;② 按术语名**长度降序**匹配(避免「线损」抢在「线损率」前面);③ 只在标签外的文本片段替换(`re.split(r'(<[^>]*>)', ln)` 后取偶数索引);④ 跳过已完成替换的行(`'data-term=' in ln`)以便可重复运行;⑤ 跳过含 `href=` 的 links 行与 `'<div class="pit">` 行。
- slug 一旦发布不要改(会打断已读进度与旧链接)。
- 本站术语链接共 173 处、覆盖 66/100 个术语,密度约 2.1 处/课(基准站 NPS 为 141 处/106 课、约 1.3 处/课)。
