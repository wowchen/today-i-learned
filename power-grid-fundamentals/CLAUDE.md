# 电网通识 · 项目说明(给 AI 与人类协作者)

用大白话**中文**讲透**中国电力/电网行业**的通识自学站。零基础一看就懂。
纯静态、零依赖、零构建:浏览器直接打开 `index.html` 即可运行(`file://` 可用),GitHub Pages 托管。

## 线上地址与部署(2026-06-11 上线)

- **线上站点(手机/电脑/平板均可)**:https://wowchen.github.io/20260611-power-grid-fundamentals/
- **GitHub 仓库**:https://github.com/wowchen/20260611-power-grid-fundamentals(public,账号 `wowchen`)
- **托管方式**:GitHub Pages,`main` 分支根目录 `/`,提交后约 1 分钟自动重新构建上线。
- **提交身份**:本仓库 `user.email=wowchen@126.com`(`git config` 仅本仓库,不影响全局)。
- **重要**:此仓库是**独立仓库**,仅含本项目,切勿把其它项目混进来推送。

### 更新线上内容(改完后)

```bash
cd /Users/Solun/AGI/Claude/20260611-power-grid-fundamentals
node --check content/**/*.js        # 习惯:推送前先过语法检查
git add .
git commit -m "说明改动"            # 作者已固定为 wowchen@126.com
git push                            # 推 origin/main,Pages 约 1 分钟后自动更新
```

- 查 Pages 构建状态:`gh api repos/wowchen/20260611-power-grid-fundamentals/pages -q .status`(`built` = 已上线)。

**架构与决策依据见 `需求与讨论.md`(10 条 ADR + 体验原则),不要违背它。**
`design/` 是风格选型稿,**保留,不要删除**;定稿为**风格 A 工程蓝图**(深=蓝晒图纸默认,浅=白图纸),全站样式令牌在 `assets/css/main.css` 顶部。

## 目录结构

```
index.html                 唯一入口(hash 路由单页)。新增课程文件后在此追加 <script> 标签
需求与讨论.md               本站宪法:需求、ADR、体验原则
assets/css/main.css        全站样式(风格 A 设计令牌置顶)
assets/js/
  registry.js              内容/术语注册中心 + 搜索索引(自动生成)
  progress.js              术语本/已读标记/streak,条目级合并 + 软删除
  sync.js                  GitHub 进度同步(fine-grained PAT + Contents API)
  ui.js                    转义 / 渲染 / 线性图标
  terms.js                 术语点查浮层(<gd> 全局委托)+ 收藏
  views-home.js            首页(路线图优先)/ 完整路线 / 模块页
  views-lesson.js          课程页(五段模板渲染,无判分)
  views-tools.js           术语表 / 术语本 / 翻牌复习 / 搜索 / 设置
  engine.js                hash 路由 + 导航高亮 + 启动(script 顺序里必须最后)
content/
  modules.js               17 模块元信息 + 学习路线(138 课占位,id 即课程 id)
  terms.js                 全站术语库(随模块扩充)
  basics/01-kwh.js         标准样板课 ①(文字+表格+术语标记)
  basics/05-no-storage.js  标准样板课 ②(含 SVG 图解)
  <模块目录>/NN-slug.js     其余课程,按下方规范编写
```

## 内容编写规范(138 课已于 2026-06-12 全部完成)

> 下方规范在修改或新增课程时仍须遵守。

引擎已完成并验收,**不要改 `assets/` 下任何代码**,不要改 `index.html` 中内容区以外的部分。

### 新增一课的完整步骤(四步,缺一不可)

1. 新建 `content/<模块目录>/<NN>-<slug>.js`,按下方 schema 写内容;
2. 该课用到的新术语,追加进 `content/terms.js` 对应模块分组(`<gd data-term>` 引用的 id 必须存在);
3. 在 `index.html` 内容区追加 `<script src="content/...js"></script>`(按模块分组、按 order 排序,**必须在 engine.js 之前**);
4. 课程 id 必须与 `content/modules.js` 里 `registerPath` 的占位 id **完全一致**,课程会自动"激活"(占位已全部写好,不需要新增占位)。

### 课程 schema(以 `content/basics/05-no-storage.js` 为标准样板)

```js
PGF.registerLesson({
  id: 'basics-05-no-storage',   // 与 modules.js 路线占位一致:模块前缀-序号-slug
  module: 'basics',             // 模块 id,见 content/modules.js
  order: 5,                     // 模块内排序(与文件名序号一致)
  title: '电为什么不能大规模储存?',
  minutes: 4,                   // 阅读分钟数,硬上限 5;超了就拆课
  key: '全站总钥匙',             // 可选:重点课标记,一般课省略
  keywords: ['储存', '瞬时平衡'],  // 供全文搜索
  sections: {                   // 五段模板,HTML 字符串
    what:     '…',  // ① 一句话是什么:大白话 + 类比,先不抛术语
    why:      '…',  // ② 为什么重要:在电网全局里的位置 / 没有它会怎样
    how:      '…',  // ③ 怎么运作:机制 + 图解 + 关键数字
    pitfalls: '…',  // ④ 常见误解与易混:纠正直觉错误、对比易混概念
    links:    '…'   // ⑤ 关联与延伸:链接前后课程与相关模块
  }
});
```

**没有 quiz 字段,引擎无判分逻辑(ADR-10),不要发明小测。**

### 术语 schema(content/terms.js)

```js
{
  id: 'diaodu',            // 拼音或英文缩写,全站唯一
  name: '调度',             // 中文名
  en: 'dispatch',          // 英文/缩写,可选
  def: '电网的"大脑":……',   // 大白话定义,一两句,脱离上下文也能读懂
  analogy: '空中交通管制塔台。', // 类比,强烈建议给
  lesson: 'dispatch-01-what'   // 讲透它的那一课(可填未编写课,激活后自动可跳)
}
```

### 内容 HTML 约定

- **行业术语第一次出现用 `<gd data-term="id">术语</gd>` 包裹** → 引擎自动变成"点击弹卡 + 可收藏"。这是全站灵魂,漏包 = 缺陷。同一课内重复出现只包第一次。
- 例子/关键数字块用 `<div class="ex">…</div>`(绿左边),误解/坑用 `<div class="pit"><b>误解 N:…。</b>说明</div>`(红左边)。
- 对照表用 `<table>`;可用 `<strong>`、`<ul>/<ol>`。**不要内联样式(SVG 取色除外)、不要图片/外链资源、不要 emoji**(全站铁律:图标只用线性 SVG 或 ☆ ✓ × 等字形符号)。
- JS 字符串里写 HTML 用 `'…' +` 拼接续行(见样板),注意转义单引号。

### SVG 图解约定(ADR-9:图解优先)

- 流程/结构/曲线类概念**必须配内联 SVG**,放在 `how` 段:
  `<figure class="fig"><svg viewBox="…">…</svg><figcaption>图 · 说明</figcaption></figure>`
- SVG 内**只用预设取色类**(自动适配深浅主题,千万不要写死颜色):
  `f-box`(线框) `f-box2`(填充框) `f-line`(标注线) `f-arr`(箭头 marker 填充)
  `f-txt`(正文字) `f-dim`(弱化字) `f-hot`(强调字·黄) `f-ok`(强调字·绿) `f-okln`(绿线)
- 特殊需要时可用 `style="stroke:var(--ok)"` 这类 **CSS 变量**内联,绝不写 `#hex`。
- marker id 要带课程序号防冲突(如 `id="ar5"`)。
- 必画图清单(对应课程):发输变配用全景、电压等级阶梯、调度五级金字塔、电价构成堆叠、鸭子曲线、源网荷储四端、一笔电量闭环、cap-and-trade 流程、国网组织架构图、监管关系图。

### 文风铁律

1. **大白话优先**:每个术语第一次出现前,先用类比/场景讲明白,再给术语名。
2. **5 分钟颗粒度**:一课只讲一个点,讲不完就拆,不要贪。
3. **关键数字给直觉**:50Hz、±800kV、1GW……每个数字配类比或锚点(如"1GW ≈ 一台大核电机组"),不裸抛。
4. **误解段要"真误解"**:写普通人真实会有的直觉错误(如"电存在电网里"),不要编造没人会犯的错。
5. **中国语境为准**:制度、数字、机构以中国为准;国外仅作必要类比。
6. **组织架构类内容讲职能逻辑重于背名单**:部门/处室设置随机构改革常变,注明"以近年通行设置为准",重点讲"为什么要有这个部门、它管什么事"。
7. **数字时效**:装机量、电量等会过时的数字写量级与年份口径(如"2025 年前后约…"),不写精确到个位的数。

### 每个模块的知识来源(写前必读,对照"核心掌握项"逐条覆盖)

知识母本目录:`/Users/Solun/AGI/Claude/20260315-Bloom-one-vs-one-study-main/能源行业/`

| 模块 | 主要来源 |
|---|---|
| 1 能源全景 / 2 电学 / 3 发电 / 4 输变 / 7 格局 | 父课题 `syllabus.md` + `01.md` |
| 5 配用 | `Distribution-Grid/syllabus.md` + `01.md` |
| 6 调度 | `Grid-Dispatch/syllabus.md` + `01.md` |
| 8 组织 | 无 syllabus(用户指定新增),靠模型知识 + 公开资料,遵守文风铁律 6 |
| 9 市场 | `Power-Market/syllabus.md` + `01.md` |
| 10 新能 | `New-Energy-System/syllabus.md` + `01.md` |
| 11 储能 | `Energy-Storage/syllabus.md` + `01.md` |
| 12 营销 | `Power-Marketing/syllabus.md` + `01.md` |
| 13 双碳 | `Carbon-Market/syllabus.md` + `01.md` |
| 14 数字 | `Energy-Digital/syllabus.md` + `01.md` |
| 15 金融 | `Energy-Finance/syllabus.md` + `01.md` |
| 16 气水氢 | 父课题模块五 + 模型知识 |

各 syllabus 的「不在本课题范围内」同样适用于本站:**不讲**继电保护、潮流计算、电机原理、设备选型、通信协议报文、荐股。

### 验收自查(每完成一个模块跑一遍)

- `node --check content/**/*.js` 全通过;
- 浏览器打开 `index.html`:能进入新课、路线页该课从"待编写"变为可点、点 `<gd>` 弹卡且能收藏、搜索能搜到该课关键词;
- 检查无 emoji、SVG 无写死颜色、所有 `data-term` 在 terms.js 都有对应条目;
- commit 信息写明"内容:模块N <模块名> M 课"。

## 运行与测试

- 本地:直接双击 `index.html`,或 `python3 -m http.server` 后访问。
- 推送前习惯:`node --check` 过一遍语法。
- 进度同步是用户在「设置」里自配 private 仓库 + fine-grained PAT,代码里**永远不要**出现 token。
