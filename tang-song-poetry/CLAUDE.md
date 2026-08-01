# 唐诗宋词学习站 · 开发规范(TSP · 唐诗三百首 + 宋词一百五十首)

收 **唐诗三百首**(依蘅塘退士《唐诗三百首》选本,按体裁分六卷)与 **宋词一百五十首**(豪放 75 + 婉约 75),每首七段:原文 / 创作背景 / 字词注释 / 白话译白 / 赏析 / 想一想 / 接着读。纯静态、零依赖、离线可用。**「今日得到」合集第 28 站。**

## 与数学之美站(MATH)的关系

- **视觉完全克隆自数学之美**:白底 + 朱红 `--acc:#e0301e`(浅色)/ 暗底 + 金 `--acc:#d4a847`(深色)双主题;Songti 衬线大标题 + 等宽 kicker + 两列模块格首页。accent 令牌随主题红/金切换。
- **引擎沿用**:registry / progress / sync / ui / engine / views-lesson 与 MATH 逐行同构(仅 `MATH`->`TSP`、localStorage 前缀 `math.`->`tsp.`)。`tools/build.js` 同构,增加诗词专用 helper。
- **首页重做**:不再是黄金螺旋,改为**山月主视觉**(`views-home.js` 的 `sceneSVG()`:远山轮廓 + 明月脉冲 + 飞鸟漂浮)。
- **课程五段式承载诗词七段**:① 一句话(点睛)· ② 讲透(原文+背景+注释+译白+赏析,用 helper 结构化)· ③ 别踩坑(常见误读)· ④ 想一想(quiz)· ⑤ 接着读(回到诗卷)。
- **工具页换成 4 件诗词工具**(`views-tools.js`):体裁格律谱 / 意象寓意典 / 朝代诗流年表 / 飞花集句。

## 技术架构

- 全局命名空间:`window.TSP`;localStorage 前缀 `tsp.`(`tsp.progress.v1` / `tsp.sync.v1`,同步路径 `progress/tsp.json`)。
- 路由:`#/` 首页 · `#/m/<id>` 诗卷 · `#/l/<id>` 单篇 · `#/terms` 速查 · `#/book` 收藏 · `#/search` 搜索 · `#/calc` 工具 · `#/settings` 设置。
- 单篇五段:`concept` · `core` · `pitfalls` · `quiz` · `links`。
- 内容即数据:`TSP.registerLesson({ id, module, order, title, minutes, keywords, concept, core, pitfalls, quiz, links })`。
- 术语 `{id,name,en,def,analogy,module}`;正文 `<gd data-term="id">词</gd>`、`.ex`、`.pit`、`.fml`、诗词专用 `.poem-text/.poem-seg/.poem-notes/.poem-trans`。

## 目录结构

```
index.html                 SPA 外壳(顶栏 + #app + 引擎/内容脚本;课时 <script> 由 build.js 注入)
assets/css/main.css        全部样式(双主题 + 衬线首页 + 山月主视觉 + 诗词详情 .poem-*)
assets/js/                 引擎:registry/progress/sync/ui/engine/views-lesson(克隆 MATH 改 TSP)+ views-home(山月)/views-tools(4 工具)
content/                   modules.js(8 模块 + TSP.path + en)、terms.js(69 条)、<module>/<slug>.js  ← 全部自动生成
tools/build.js             单一数据源(MODULES/TERMS/helper)+ 加载 _src + 校验 + 生成 content/* + 注入 index.html
tools/_src/                8 模块的诗词源数据(L['module-id'] = [...].concat,可多文件拼接)
_demos/                    建站时的 3 风格 demo(留档,不参与运行)
```

## 内容生成

```bash
cd tang-song-poetry
node tools/build.js    # 生成 content/ 并注入 index.html 脚本标签
```

源数据在 `tools/_src/*.js`,每个文件定义 `L['module-id'] = (L['module-id'] || []).concat([[slug, title, minutes, keywords, concept, core, pitfalls, quiz, links], ...])`。同模块可拆多个文件(如 `tang-wulv-1.js`/`-2.js`/`-3.js`),build 按文件名排序依次 concat 拼接。

build.js 内提供 helper(eval 作用域,_src 可直接调用):
- 通用:`g(id,名)` 术语标注、`ex(文)` 例证框、`pit(文)` 别绕晕框、`fml(文)` 公式框、`qc(q,opts,ans,explain)` 选择题、`qf(...)` 填空题。
- 诗词专用:`pm(朝代,作者)` 作者行、`pt([句,...])` 原文块(居中衬线,句中可含 `<sup>①</sup>`)、`pseg(标题,正文)` 段落、`pnotes([[序号,字词,解释],...])` 注释列表、`ptrans(白话)` 译白块。

build.js 校验:data-term 是否定义、内部链接是否存在、是否含 emoji(U+1F000-1FAFF / U+2600-27BF;注释序号用 ①②③④ 不受影响)。

## 8 模块 / 445 首

| id | 诗卷 | 数量 |
|---|---|---|
| tang-wugu | 五言古诗 | 35 |
| tang-qigu | 七言古诗 | 28 |
| tang-wulv | 五言律诗 | 79 |
| tang-qilv | 七言律诗 | 53 |
| tang-wujue | 五言绝句 | 29 |
| tang-qijue | 七言绝句 | 76 |
| song-haofang | 豪放词 | 75 |
| song-wanyue | 婉约词 | 75 |

## 互动工具(4 件,在 views-tools.js)

1. **体裁格律谱** - 选诗(词)体,显示字数/句数/押韵/对仗/平仄要求与例句(五绝~七律 + 浣溪沙/如梦令/念奴娇)
2. **意象寓意典** - 选意象(月/柳/梅/雁/酒/菊/松/竹/落花/夕阳/舟/蝉/山/水/雨),看寓意与例句
3. **朝代诗流年表** - 初盛中晚唐 + 两宋代表诗人 SVG 时间轴
4. **飞花集句** - 输入一字,集出库中含此字的经典诗句

## 本地预览与自测

```bash
cd /Users/Solun/AGI/Claude/20260622-today-i-learned
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/tang-song-poetry/
```

自测清单:首页 hero(山月主视觉动效)/ 诗卷页 / 单篇七段(原文居中衬线+注释上标+译白+赏析)/ 术语点查弹窗 / 设置主题切换(朱红↔金)/ 四个工具页功能正常 / 零 console 报错。
