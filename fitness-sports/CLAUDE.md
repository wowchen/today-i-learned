# 健身与运动学习站 · 项目说明(给 AI 与人类协作者)

用大白话**中文**讲透健身与运动的科普通识站：入门通识 + 身体认知 + 力量训练 + 有氧耐力 + 柔韧拉伸 + 核心稳定 + 高强度间歇 + 体态与功能 + 运动营养 + 恢复与睡眠 + 损伤与防护 + 特殊人群 + 减脂与塑形 + 增肌与力量 + 运动心理 + 运动项目。
纯静态、零依赖、零构建：浏览器直接打开 `index.html` 即可运行(`file://` 可用)，GitHub Pages 托管。

## 目录结构

```
index.html                 唯一入口(hash 路由单页)。课程脚本由 build.js 注入
assets/css/main.css        全站样式(顶部 :root 令牌：浅色草地森绿 / 深色深林暖绿)
assets/js/                 SPA 引擎(从 guitar-singing 克隆，命名空间 GTR->FIT)。不要改动
  registry.js  progress.js  sync.js  ui.js
  views-home.js  views-lesson.js  views-tools.js  engine.js
content/
  modules.js               16 模块元信息 + 学习路线(101 课，自动生成)
  terms.js                 全站术语库(115 条，自动生成)
  <模块目录>/NN-slug.js     各模块课程(自动生成)
tools/
  build.js                 单一数据源生成器(MODULES + TERMS + 加载 _src)
  _src/                    16 个模块的课程源数据(L.<moduleId> = [...])
_demos/                    建站前的三选一视觉风格 demo(野·Wild 已选用，可留作参考)
```

## 引擎契约(不要改 assets/)

- 全局命名空间 **`FIT`**。内容通过 `<script>` 自注册：
  `FIT.registerModule / FIT.registerPath / FIT.registerLesson / FIT.registerTerms`。
- localStorage 前缀 **`fit.`**(`fit.progress.v1` / `fit.sync.v1`)，与同域其它站隔离。
- 路由：`#/` 首页 · `#/m/<id>` 模块 · `#/l/<id>` 课程 · `#/terms` 速查 · `#/book` 收藏 · `#/search` 搜索 · `#/calc` 工具 · `#/settings` 设置。
- 默认主题跟随系统；HTML 标签上 `data-theme`。
- 课程五段：`concept`(①一句话) `core`(②讲透) `pitfalls`(③别踩坑) `quiz`(④想一想) `links`(⑤接着读)。

## 内容生成

```bash
cd fitness-sports
node tools/build.js    # 生成 content/ 并注入 index.html 脚本标签
```

源数据在 `tools/_src/*.js`，每个文件定义 `L.<moduleId> = [[slug, title, minutes, keywords, concept, core, pitfalls, quiz[], links], ...]`。
build.js 会校验：data-term 是否定义、内部链接是否存在、是否含 emoji/特殊符号(U+1F000-1FAFF、U+2600-27BF)。

## 互动工具(5 件)

1. **BMI 体成分** - 身高体重算 BMI + 中国成人分类 + 理想体重范围
2. **1RM 最大重量** - 重量×次数估单次最大重量(Epley/Brzycki)+ 训练负荷百分比表
3. **心率区间** - 年龄(可选静息心率)算最大心率 + 5 个训练区间(Karvonen)
4. **热量消耗** - 体重×活动(MET)×时长估消耗热量
5. **间歇计时器** - HIIT/Tabata 计时器，Web Audio 提示音(工作高音/休息低音/倒计时)

## 本地预览与自测

```bash
cd /Users/Solun/AGI/Claude/20260622-today-i-learned
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/fitness-sports/
```

自测清单：首页 hero / 模块页 / 课程五段 / 术语点查弹窗 / 收藏翻牌 / 设置主题切换 + 零 console 报错 / 五个工具页功能正常(尤其间歇计时器发声)。

## 说明

本站为科普通识，重在直觉与原理，不替代医疗与专业教练指导；涉及伤病请遵医嘱，动作请在能力范围内循序渐进。数值(BMI 分类、MET、心率公式)为常用教学概数。
