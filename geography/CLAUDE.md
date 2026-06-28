# 地理通识学习站 · 开发规范(GEO · 科普非应试)

大白话地理通识站。纯静态、零依赖、离线可用。**引擎克隆自数学站(MATH),命名空间整体改为 `GEO`。这是科普站,不是考试站,重空间视角与因果直觉、不背省会、不应试。** 「今日得到」合集第 20 站。

## 与数学站(MATH)的关系

- **引擎完全沿用**:`registry / progress / ui / engine / views-lesson` 与 MATH 逐行同构(仅 `MATH`→`GEO`、localStorage 前缀 `math.`→`geo.`)。`tools/build.js` 同构(含 `fml()` 公式块、模块 `en` 字段、`title:m[1]` 映射)。
- **视觉 = B 骨架(浅色)+ C 配色(深色)**:浅色 = 海蓝 `--acc:#1f6fb2` + 经纬网底纹(Demo B);深色 = 暗夜地球绿 `--acc:#3fcf8e`(Demo C)。两套令牌在 `main.css` 顶部 `:root` 与 `[data-theme="dark"]`,accent 随主题切海蓝/绿。经纬网底纹由 `--grat` 控制(深色置 transparent)。
- **首页配图 = 地球 + 倾斜轨道 + 绕行卫星**(`views-home.js` 的 `globeSVG()`):卫星用 SVG `animateMotion` 沿椭圆轨道绕行;球面/经纬线描边用 `style="stroke:var(--acc/--acc2)"` 跟随主题。CSS 动效:`.gh-globe` 轻微浮动、经纬线淡入呼吸、卫星光晕脉动,均带 `prefers-reduced-motion` 守卫。
- **工具页是 4 个计算器(非 canvas)**(`views-tools.js` 的 `GEO.views.calc`):时区换算、两点大圆距离(haversine)、比例尺换算、正午太阳高度·昼长。每张卡片有进场 + hover 选中动效(`ghCardUp` / `ghGlyphPop`)。

## 技术架构

- 全局命名空间:`window.GEO`;localStorage 前缀 `geo.`(`geo.progress.v1`)。
- 课时五段式:① 一句话 · ② 讲透 · ③ 别绕晕 · ④ 想一想(quiz,即时判分、**不写错题本**) · ⑤ 接着读。
- 内容即数据:`GEO.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`。
- quiz:`{type:'choice',q,options[],answer:idx,explain,source}` 或 `{type:'fill',q,answer:[..],explain,source}`。
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`(强调块)、`.pit`(别绕晕块)、`.fml`(公式块)、`<table>`。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入 <!--LESSONS-->)
assets/css/main.css        全部样式(双主题 + 衬线首页 .gh-* + 地球动效 + 工具 .calc-*)
assets/js/                 引擎:registry/progress/ui/engine/views-lesson(克隆 MATH 改 GEO)+ views-home(地球配图)/views-tools(4 计算器)
content/                   modules.js(13 模块 + GEO.path + en)、terms.js(90 条)、<module>/<NN-slug>.js  ← 全部自动生成
tools/build.js             单一数据源(MODULES/TERMS/LESSONS)+ 校验 + 生成 content/* + 注入 index.html
design/                    建站时的 3 个首页风格 demo(A 等高线 / B 经纬航海 / C 暗夜地球),仅留档,不参与运行
```

## 13 模块(84 课)

intro 地理是什么 · map 地图与坐标 · earth 地球与运动 · atmosphere 大气与天气 · climate 气候 · water 水文 · landform 地貌与地质 · biosphere 土壤与生物 · resources 自然资源 · population 人口与城市 · economy 经济地理 · china 中国地理 · world 世界地理与地缘。

## 四个互动工具(views-tools.js)

`GEO.calcTimezone`(经度→地方时差/时区,可推算另一地时刻)、`GEO.calcDistance`(haversine 大圆距离 + 初始方位角)、`GEO.calcScale`(比例尺↔图上/实地距离双向换算)、`GEO.calcSun`(正午太阳高度 = 90−|纬度−直射点|,昼长由 cosH₀=−tan(纬)·tan(直射)推,含极昼/极夜判断)。辅助 `GEO._num/_fix` 与文件内 `crRow` 等。

## 如何增补内容

不要手改 `content/`(自动生成)。流程:

1. 编辑 `tools/build.js`:在 `L.<模块>` 数组加一条 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links]`。**严守定位:concept/core/pitfalls/quiz/links 是固定的第 4/5/6/7/8 个元素。`ex()`/`fml()` 用 `+` 拼进 core 字符串;但 `pit(...)` 必须用 `,` 作为独立的第 6 元素——千万别写成 `core'+pit(...)`(会把 pit 折进 core、并使 quiz 错位,build 会报 `forEach is not a function`)。** 术语 `g('term-id','显示文字')`,id 必须在同文件 `TERMS` 中定义;选择题 `qc(q,opts,answerIdx,explain)`,填空 `qf(q,[answers],explain)`。
2. 新增术语改 `TERMS`。
3. 运行 `node tools/build.js`。它会校验(术语定义、内部链接 `#/l`、`#/m`、emoji)→ 生成全部 `content/*` → 注入 `index.html` 的 `<!--LESSONS-->`。

## 内容纪律

白话先行再上术语;一课一概念 ≤5 分钟;**重空间视角与因果,不追求穷尽细节**;无 emoji、无 ✓/✗ 等特殊符号(build 会校验 `☀-➿` 区段,正文勿用)、无写死 #hex;会过时的数据标注年份;涉及行政区划、疆界、地缘以国家权威表述为准、保持中立;不搞地理决定论、不强化地域刻板印象(差异不等于优劣)。

## 现状

13 模块 / 84 课 / 90 术语,4 个互动工具。`node tools/build.js` 通过;DOM-shim 冒烟全过:path==课文件数==84、术语零 used-but-undefined、84 课 pit(③)齐全、quiz 结构合法、8 个视图 0 报错;四计算器实测正确(北京—纽约大圆距离≈10991 km、赤道春分正午太阳高度 90°/昼长 12h 等)。
