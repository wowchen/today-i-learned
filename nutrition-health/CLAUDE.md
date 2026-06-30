# 营养与健康学习站 · 开发规范(NH · 科普通识)

大白话营养与健康站。纯静态、零依赖、离线可用。**引擎与双主题直接克隆自中国地理站(CG)/地理通识站(GEO),命名空间整体改为 `NH`、localStorage 前缀 `cg.`→`nh.`。这是科普通识站,不是医疗站,重因果机制与"平衡"直觉、不背营养素表、不贩卖焦虑、不替代医疗。** 「今日得到」合集第 22 站。

## 与 CG / GEO 站的关系

- **引擎完全沿用**:`registry / progress / ui / engine / views-lesson` 与 CG/GEO 逐行同构(仅 `CG`→`NH`、localStorage 前缀 `cg.`→`nh.`)。`tools/build.js` 同构(含 `fml()` 公式块、模块 `en` 字段、helpers `g/ex/pit/fml/qc/qf`)。
- **视觉 = 原样复用**:浅色 = 海蓝 `--acc:#1f6fb2` + 经纬网底纹;深色 = 暗夜绿 `--acc:#3fcf8e`(蓝=医疗信任、绿=健康活力,与营养主题相称)。两套令牌在 `main.css` 顶部 `:root` 与 `[data-theme="dark"]`,accent 随主题切海蓝/绿。CSS 类前缀 `.gh-*` 沿用(内部命名)。
- **首页主图 = 营养化**(`views-home.js` 的 `nutritionSVG()`):膳食宝塔五层(谷薯→蔬果→鱼蛋奶豆→畜禽肉→油盐顶尖),底宽顶尖,塔尖脉动,光点沿塔身缓升(SMIL `animateMotion`+`<mpath>`)。全部走 `var(--acc/--acc2/--acc-soft)` 令牌随主题切海蓝/绿,带 `prefers-reduced-motion` 守卫。
- **工具页是 4 个营养计算器**(`views-tools.js`):BMI 与体重判定(中国标准)、每日能量 TDEE(Mifflin-St Jeor)、营养素推荐量 DRI(2023 版概数速查)、食物红绿灯。全部本站新写。每张卡片有进场 + hover 动效。

## 技术架构

- 全局命名空间:`window.NH`;localStorage 前缀 `nh.`(`nh.progress.v1`)。
- 课时五段式:① 一句话 · ② 讲透 · ③ 别绕晕 · ④ 想一想(quiz,即时判分、**不写错题本**) · ⑤ 接着读。
- 内容即数据:`NH.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`。
- quiz:`{type:'choice',q,options[],answer:idx,explain,source}` 或 `{type:'fill',q,answer:[..],explain,source}`。
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`(强调块)、`.pit`(别绕晕块)、`.fml`(公式块)、`<table>`。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入 <!--LESSONS-->)
assets/css/main.css        全部样式(双主题 + 衬线首页 .gh-* + 膳食宝塔动效 + 工具 .calc-*)
assets/js/                 引擎:registry/progress/ui/engine/views-lesson(克隆 CG 改 NH)+ views-home(膳食宝塔 nutritionSVG)/views-tools(4 营养计算器)
content/                   modules.js(13 模块 + NH.path + en)、terms.js(84 条)、<module>/<NN-slug>.js  ← 全部自动生成
tools/build.js             单一数据源(MODULES/TERMS/LESSONS)+ 校验 + 生成 content/* + 注入 index.html
tools/_src/<module>.js     各模块课时块(子代理产出,原始 JS,由 _assemble.js 注入 build.js;运行后可删)
tools/_assemble.js         一次性汇总器:把 _src/*.js 注入 build.js(运行后可删)
tools/_smoke.js            DOM-shim 冒烟测试(运行后可删)
```

## 13 模块(84 课)

intro 营养学基础 · macro 三大宏量营养素 · micro 维生素与矿物质 · energy 能量与代谢 · digest 消化与吸收 · food 食物与膳食 · pattern 膳食模式 · life 生命周期营养 · special 特殊人群与状况 · chronic 营养与慢病 · safety 食品安全 · sup 保健食品与补充剂 · myth 营养误区与辨真。

## 四个互动工具(views-tools.js)

`NH.calcBMI`(身高/体重→BMI + 中国标准判定 + 可选腰围中心性肥胖风险,讲清 BMI 局限)、`NH.calcTDEE`(性别/年龄/身高/体重/活动量→BMR(Mifflin-St Jeor)+TDEE+三大宏量参考)、`NH.calcDRI`(性别+年龄段→2023 版 DRIs 概数:能量 EER、蛋白、钙、铁、维C、维D)、`NH.calcFoodLight`(食物下拉→绿/黄/红分级 + 说明,按加工程度+营养密度)。辅助 `NH._num/_fix` 与文件内 `crRow` 等。

## 如何增补内容

不要手改 `content/`(自动生成)。流程:

1. 编辑 `tools/build.js`:在 `L.<模块>` 数组加一条 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links]`。**严守定位:concept/core/pitfalls/quiz/links 是固定的第 4/5/6/7/8 个元素。`ex()`/`fml()` 用 `+` 拼进 core 字符串;但 `pit(...)` 必须用 `,` 作为独立的第 6 元素——千万别写成 `core'+pit(...)`(会把 pit 折进 core、并使 quiz 错位,build 会报 `forEach is not a function`)。** 术语 `g('term-id','显示文字')`,id 必须在同文件 `TERMS` 中定义;选择题 `qc(q,opts,answerIdx,explain)`,填空 `qf(q,[answers],explain)`。
2. 新增术语改 `TERMS`。
3. 运行 `node tools/build.js`。它会校验(术语定义、内部链接 `#/l`、`#/m`、emoji)→ 生成全部 `content/*` → 注入 `index.html` 的 `<!--LESSONS-->`。
4. 运行 `node tools/_smoke.js` 冒烟。

## 内容纪律(健康版)

白话先行再上术语;一课一概念 ≤5 分钟;**重因果机制与平衡,不追求穷尽细节**;**本站为科普通识,不替代医疗建议:疾病诊疗、孕期/婴幼儿/慢病管理以医生或临床营养师为准,本站不诊断不处方**;参考摄入量据《中国居民膳食营养素参考摄入量(2023)》、膳食指南据《中国居民膳食指南(2022)》并标年份;有争议的话题(最佳宏量比、生酮、断食、代糖)给主流共识并标不确定性、中立;不贩卖焦虑、不搞"超级食物"神话、不绝对化(没有"X 致癌""Y 减肥神效");不强化身材/体重焦虑(健康≠瘦,体成分/BMI 给区间与局限);无 emoji、无 ✓/✗ 等特殊符号(build 会校验 `☀-➿` 区段,正文勿用)、无写死 #hex。

## 现状

13 模块 / 84 课 / 84 术语,4 个互动工具。`node tools/build.js` 通过(0 报错);`node tools/_smoke.js` DOM-shim 冒烟全过:13 模块、84 课注册、84 术语、path==课文件数==84、术语零 used-but-undefined、84 课五段式 pit(③)齐全、quiz 结构合法、8 个视图 0 报错;四计算器实测正确(BMI:170/65≈22.5 正常;TDEE:男30/170/65/中度→BMR≈1596 TDEE≈2474;DRI:男/成人→蛋白65g 钙800mg;食物红绿灯:含糖饮料→红灯、燕麦→绿灯)。
