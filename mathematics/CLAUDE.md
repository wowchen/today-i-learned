# 数学之美学习站 · 开发规范(MATH · 科普非应试)

大白话数学通识站。纯静态、零依赖、离线可用。**引擎克隆自经济学站(ECON)/ 投资理财站(PFIN),命名空间整体改为 `MATH`。这是科普站,不是考试站,重直觉与思想、不刷题、不追求严格证明。** 「今日得到」合集第 19 站。

## 与经济学站(ECON)的关系

- **引擎完全沿用**:`registry / progress / ui / engine / views-lesson` 与 ECON 逐行同构(仅 `ECON`→`MATH`、localStorage 前缀 `econ.`→`math.`)。`tools/build.js` 同构,增加 `fml()` 公式块与模块 `en` 字段。
- **首页重做**:不再是 ECON 的"瑞士长条列表",而是**衬线优雅版**(`views-home.js` + CSS `.mh-*`):黄金螺旋 SVG + 衬线大标题「数学之<em>美</em>」+ 两列模块格 + 统计数字。
- **双主题**:浅色 = 白底 + 朱红 `--acc:#e0301e`(终稿);深色 = 暗底 + 金 `--acc:#d4a847`(暗夜金分割)。两套令牌都在 `main.css` 顶部 `:root` 与 `[data-theme="dark"]`,accent 随主题切红/金。黄金螺旋描边用 `style="stroke:var(--acc/--acc2)"` 跟随主题。
- **工具页换成 4 个互动实验**(`views-tools.js` 的 `MATH.views.calc`),不是计算器:黄金螺旋/斐波那契、π 蒙特卡洛、函数绘图器(自带安全表达式解析,**不用 eval**)、埃拉托色尼素数筛。全部 canvas 实时运算,颜色经 `labColors()` 读 CSS 变量跟随主题。

## 技术架构

- 全局命名空间:`window.MATH`;localStorage 前缀 `math.`(`math.progress.v1`)。
- 课时五段式:① 一句话 · ② 讲透 · ③ 别绕晕 · ④ 想一想(quiz,即时判分、**不写错题本**) · ⑤ 接着读。
- 内容即数据:`MATH.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`。
- quiz:`{type:'choice',q,options[],answer:idx,explain,source}` 或 `{type:'fill',q,answer:[..],explain,source}`。
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`(强调块)、`.pit`(别绕晕块)、`.fml`(公式块)、`<table>`。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入 <!--LESSONS-->)
assets/css/main.css        全部样式(双主题 + 衬线首页 .mh-* + 实验 .lab-*)
assets/js/                 引擎:registry/progress/ui/engine/views-lesson(克隆 ECON 改 MATH)+ views-home(重做)/views-tools(4 实验)
content/                   modules.js(11 模块 + MATH.path + en)、terms.js(80 条)、<module>/<NN-slug>.js  ← 全部自动生成
tools/build.js             单一数据源(MODULES/TERMS/LESSONS)+ 校验 + 生成 content/* + 注入 index.html
design/                    建站时的 3 个首页风格 demo + 终稿(demo-final.html),仅留档,不参与运行
```

## 11 模块(72 课)

intro 数学是什么 · numbers 数与无穷 · algebra 代数与方程 · geometry 几何与空间 · trig 三角与波 · calculus 微积分 · probability 概率与随机 · statistics 统计与数据 · linear 线性代数 · discrete 离散与逻辑 · beauty 数学之美。

## 四个互动实验(views-tools.js)

`MATH.drawGolden`(滑杆调项数,画斐波那契方块 + 对数螺旋,极点取对角线交点)、`MATH.dropPoints/resetMC`(随机撒点估 π)、`MATH.plot` + `MATH._compile`(递归下降表达式解析,支持 + − * / ^、括号、sin/cos/tan/sqrt/abs/exp/log、pi/e)、`MATH.sieve`(筛法,网格高亮素数)。新增/改实验注意 canvas 用 `hiDPI()` 适配、颜色用 `labColors()`。

## 如何增补内容

不要手改 `content/`(自动生成)。流程:

1. 编辑 `tools/build.js`:在 `L.<模块>` 数组加一条 `[slug, 标题, 分钟, [关键词], concept, core, pitfalls, quizArray, links]`。**注意定位:concept/core/pitfalls/quiz/links 是固定的第 4/5/6/7/8 个元素;公式块 `fml(...)` 必须用 `+` 拼进相邻字符串,不能作为独立数组元素**(否则会错位)。术语 `g('term-id','显示文字')`,id 必须在同文件 `TERMS` 中定义;`pit(...)`、`ex(...)`;选择题 `qc(q,opts,answerIdx,explain)`,填空 `qf(q,[answers],explain)`。
2. 新增术语改 `TERMS`。
3. 运行 `node tools/build.js`。它会校验(术语定义、内部链接 `#/l`、`#/m`、emoji)→ 生成全部 `content/*` → 注入 `index.html` 的 `<!--LESSONS-->`。

## 内容纪律

白话先行再上术语;一课一概念 ≤5 分钟;**重直觉与思想,不追求严格证明**;无 emoji、无 ✓/✗/☆ 等特殊符号(build 会校验 `☀-➿` 区段,故正文勿用 ✓)、无写死 #hex;公式用纯文本/上下标近似书写,细节以教材为准;涉及"无穷/不完备"等不滥用到人生社会;数学家与难题不神化、不附会(如黄金比"无处不在"要标注夸大)。

## 现状

11 模块 / 72 课 / 80 术语,4 个互动实验。`node tools/build.js` 通过;DOM-shim 冒烟全过:path==课文件数==72、术语零 used-but-undefined、quiz 结构合法、8 个视图(含 4 canvas 实验)0 报错、表达式解析器 6 例通过且坏输入正确报错。
