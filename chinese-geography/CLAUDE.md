# 中国地理学习站 · 开发规范(CG · 科普通识)

大白话中国地理站。纯静态、零依赖、离线可用。**引擎与双主题直接克隆自地理通识站(GEO),命名空间整体改为 `CG`、localStorage 前缀 `geo.`→`cg.`。这是科普通识站,不是考试站,重空间视角与因果直觉、不背省会、不应试。** 「今日得到」合集第 21 站。

## 与地理通识站(GEO)的关系

- **引擎完全沿用**:`registry / progress / ui / engine / views-lesson` 与 GEO 逐行同构(仅 `GEO`→`CG`、localStorage 前缀 `geo.`→`cg.`)。`tools/build.js` 同构(含 `fml()` 公式块、模块 `en` 字段、`title:m[1]` 映射、helpers `g/ex/pit/fml/qc/qf`)。
- **视觉 = 原样复用**:浅色 = 海蓝 `--acc:#1f6fb2` + 经纬网底纹;深色 = 暗夜地球绿 `--acc:#3fcf8e`。两套令牌在 `main.css` 顶部 `:root` 与 `[data-theme="dark"]`,accent 随主题切海蓝/绿。CSS 类前缀 `.gh-*` 沿用(内部命名)。
- **首页主图 = 中国化**(`views-home.js` 的 `chinaSVG()`):三级阶梯(青藏→中阶高原盆地→东部平原入海)+ 大江东流,光点用 SVG `animateMotion`+`<mpath>` 沿江流光东流入海;青藏第一阶梯顶点脉动。球面/经纬线描边改用山阶填色,全部走 `var(--acc/--acc2/--acc-soft)` 令牌随主题切海蓝/绿,带 `prefers-reduced-motion` 守卫。
- **工具页是 4 个中国专属计算器**(`views-tools.js`):横跨五时区(地方时换算)、胡焕庸线(黑河—腾冲半壁判定)、河流流域(产水估算)、正午太阳高度·昼长。其中胡焕庸线/河流流域为本站新写,时区/太阳高度沿用 GEO 逻辑。每张卡片有进场 + hover 动效。

## 技术架构

- 全局命名空间:`window.CG`;localStorage 前缀 `cg.`(`cg.progress.v1`)。
- 课时五段式:① 一句话 · ② 讲透 · ③ 别绕晕 · ④ 想一想(quiz,即时判分、**不写错题本**) · ⑤ 接着读。
- 内容即数据:`CG.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`。
- quiz:`{type:'choice',q,options[],answer:idx,explain,source}` 或 `{type:'fill',q,answer:[..],explain,source}`。
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`(强调块)、`.pit`(别绕晕块)、`.fml`(公式块)、`<table>`。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入 <!--LESSONS-->)
assets/css/main.css        全部样式(双主题 + 衬线首页 .gh-* + 三级阶梯动效 + 工具 .calc-*)
assets/js/                 引擎:registry/progress/ui/engine/views-lesson(克隆 GEO 改 CG)+ views-home(中国主图 chinaSVG)/views-tools(4 中国计算器)
content/                   modules.js(13 模块 + CG.path + en)、terms.js(88 条)、<module>/<NN-slug>.js  ← 全部自动生成
tools/build.js             单一数据源(MODULES/TERMS/LESSONS)+ 校验 + 生成 content/* + 注入 index.html
design/                    建站时的 3 个首页风格 demo(A 青绿山水 / B / C),仅留档,不参与运行
tools/_assemble.js         一次性汇总器:把子代理产出的 11 个课时块注入 build.js(运行后可删)
tools/_smoke.js            DOM-shim 冒烟测试(运行后可删)
```

## 13 模块(84 课)

territory 疆域与位置 · terrain 地形与三级阶梯 · climate 气候与季风 · rivers 河流与湖泊 · coast 海洋与海岸 · resources 自然资源 · hazards 自然灾害 · population 人口与民族 · admin 行政区划 · regions 四大地理区域 · regional 区域巡礼 · economy 经济与交通 · ecology 人地与生态。

## 四个互动工具(views-tools.js)

`CG.calcTimezone`(横跨五时区:两地经度→地方时差/时区,讲清中国横跨五时区却统一用北京时间)、`CG.calcHuLine`(城市下拉→黑河 50.2°N/127.5°E — 腾冲 24.7°N/98.5°E 平面叉积判东南/西北半壁,附 43% 面积/94% 人口背景)、`CG.calcBasin`(流域面积+年降水量+径流系数→年径流量(亿 m³)与平均流量 m³/s,讲清流域集水)、`CG.calcSun`(正午太阳高度 = 90−|纬度−直射点|,昼长由 cosH₀=−tan(纬)·tan(直射)推,含极昼/极夜)。辅助 `CG._num/_fix` 与文件内 `crRow` 等。

## 如何增补内容

不要手改 `content/`(自动生成)。流程:

1. 编辑 `tools/build.js`:在 `L.<模块>` 数组加一条 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links]`。**严守定位:concept/core/pitfalls/quiz/links 是固定的第 4/5/6/7/8 个元素。`ex()`/`fml()` 用 `+` 拼进 core 字符串;但 `pit(...)` 必须用 `,` 作为独立的第 6 元素——千万别写成 `core'+pit(...)`(会把 pit 折进 core、并使 quiz 错位,build 会报 `forEach is not a function`)。** 术语 `g('term-id','显示文字')`,id 必须在同文件 `TERMS` 中定义;选择题 `qc(q,opts,answerIdx,explain)`,填空 `qf(q,[answers],explain)`。
2. 新增术语改 `TERMS`。
3. 运行 `node tools/build.js`。它会校验(术语定义、内部链接 `#/l`、`#/m`、emoji)→ 生成全部 `content/*` → 注入 `index.html` 的 `<!--LESSONS-->`。
4. 运行 `node tools/_smoke.js` 冒烟。

## 内容纪律

白话先行再上术语;一课一概念 ≤5 分钟;**重空间视角与因果,不追求穷尽细节**;无 emoji、无 ✓/✗ 等特殊符号(build 会校验 `☀-➿` 区段,正文勿用)、无写死 #hex;会过时的数据标注年份(如人口/储量/产量标 2023);涉及行政区划、疆界、海洋权益、地缘以国家权威表述为准、保持中立;不搞地理决定论、不强化地域/民族刻板印象(差异不等于优劣)。

## 现状

13 模块 / 84 课 / 88 术语,4 个互动工具。`node tools/build.js` 通过(0 报错);`node tools/_smoke.js` DOM-shim 冒烟全过:13 模块、84 课注册、88 术语、path==课文件数==84、术语零 used-but-undefined、84 课五段式 pit(③)齐全、quiz 结构合法、8 个视图 0 报错;四计算器实测正确(胡焕庸线:北京→东南半壁、乌鲁木齐→西北半壁;河流流域:1万km²×800mm×0.3≈24亿m³;横跨五时区:135.5°E−73.5°E≈4h;赤道春分正午太阳高度90°/昼长12h)。
