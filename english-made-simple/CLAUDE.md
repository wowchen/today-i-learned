# English Made Simple · 项目说明(给 AI 与人类协作者)

用大白话**中文**讲透**美式英语**的学习站。零基础一看就懂。
纯静态、零依赖、零构建:浏览器直接打开 `index.html` 即可运行(`file://` 可用),GitHub Pages 直接托管。

## 线上地址与部署(2026-06-11 上线)

- **线上站点(手机/电脑/平板均可)**:https://wowchen.github.io/english-made-simple/
- **GitHub 仓库**:https://github.com/wowchen/english-made-simple(public,账号 `wowchen`)
- **托管方式**:GitHub Pages,`main` 分支根目录 `/`,提交后约 1 分钟自动重新构建上线。
- **提交身份**:本仓库 `user.email=wowchen@126.com`(`git config` 仅本仓库,不影响全局)。
- **重要**:此仓库是**独立仓库**,仅含本项目。父目录 `/Users/Solun/AGI/Claude` 原先那个破损 git 仓库(origin 误指向他人仓库 Li-Evan/Bloom)已删除——**切勿在父目录重新 `git init` 或把多个项目混进一个仓库推送**。

### 更新线上内容(改完代码后)

```bash
cd /Users/Solun/AGI/Claude/20260609-english-made-simple
node --check content/**/*.js        # 习惯:推送前先过语法检查
git add .
git commit -m "说明改动"            # 作者已固定为 wowchen@126.com
git push                            # 推 origin/main,Pages 约 1 分钟后自动更新
```

- 查 Pages 构建状态:`gh api repos/wowchen/english-made-simple/pages -q .status`(`built` = 已上线)。
- 进度同步(localStorage→GitHub)是**用户在站内「设置」里配置**的独立 private 仓库 + fine-grained PAT,与本部署无关;代码里**永远不要**出现 token。

**架构与决策依据见 `需求与讨论.md`(7 条 ADR + 体验层原则),不要违背它。**
`design/` 是风格选型稿,**保留,不要删除**;定稿为风格 D(晨读课本 + 侧边便利贴索引),全站样式令牌在 `assets/css/main.css` 顶部。

## 目录结构

```
index.html                 唯一入口(hash 路由单页)。新增课程文件后在此追加 <script> 标签
assets/css/main.css        全站样式(风格 D 设计令牌)
assets/js/
  tts.js                   点读:SpeechSynthesis en-US,[data-say] 全局委托
  registry.js              内容注册中心 + 搜索索引(自动生成)
  progress.js              进度四件套 + streak + 条目级合并/软删除(ADR-6/7)
  sync.js                  GitHub 进度同步(fine-grained PAT + Contents API,ADR-5)
  ui.js                    转义 / <en>→点读 / 收藏浮条
  views-home.js            首页(路线图优先)/ 完整路线 / 模块页
  views-lesson.js          课程页(五段模板渲染 + 小测判分 + 错题收集)
  views-tools.js           快速复习 / 生词本错题本 / 搜索 / 设置
  engine.js                hash 路由 + 导航高亮 + 启动
content/
  modules.js               十大模块元信息 + 学习路线(path)
  guide/*.js               导览 6 课
  pronunciation/*.js       发音 18 课
  vocabulary/*.js          词汇 12 课
  grammar/*.js             语法 14 课
  listening/*.js           听力 8 课
  speaking/*.js            口语 12 课
  reading/*.js             阅读 8 课
  writing/*.js             写作 10 课
  culture/*.js             文化 9 课
  travel/*.js              旅行 29 课(场景闭环:行前→机场→入境→交通→酒店→餐饮→购物→观光→应急→银行通讯→社交→收尾)
                           —— 十大模块共 126 课,已全部做满
需求与讨论.md               需求、ADR、体验层原则 —— 本项目的宪法
```

## 给内容创作模型的指令(Opus / Sonnet 看这里)

你的任务是**编写课程文件**。引擎已完成,不要改 `assets/` 下任何代码。

### 新增一课的完整步骤(三步,缺一不可)

1. 新建 `content/<模块目录>/<NN>-<slug>.js`,按下方 schema 写内容;
2. 在 `index.html` 的内容区追加 `<script src="content/...js"></script>`(按模块分组、按 order 排序);
3. 若是新知识点,确认 `content/modules.js` 的 `EMS.registerPath` 里有对应占位(id 必须一致);占位已存在的,id 照用即可,课程会自动"激活"。

### 课程 schema(以 `content/pronunciation/01-alphabet.js` 为标准样板)

```js
EMS.registerLesson({
  id: 'pron-03-short-vowels',   // 模块前缀-序号-slug,与 path 占位一致
  module: 'pron',               // 模块 id,见 content/modules.js
  order: 3,                     // 模块内排序
  title: '五个短元音:a e i o u 的本音',
  minutes: 5,                   // 阅读分钟数,硬上限 5;超了就拆课
  keywords: ['短元音', 'short vowels'],  // 供全文搜索
  sections: {                   // 五段模板的前四段,HTML 字符串
    what: '…',                  // ① 一句话是什么:大白话 + 类比,先不抛术语
    when: '…',                  // ② 什么时候用:真实场景
    how:  '…',                  // ③ 怎么用:规则 + 可点读例句/例词表
    pitfalls: '…',              // ④ 中国人易踩的坑:对比中文/常见错误
  },
  quiz: [                       // ⑤ 30 秒小测:2~3 题
    { type: 'choice', q: '…', options: ['…','…','…','…'], answer: 1, explain: '…' },
    { type: 'fill',   q: '…', answer: ['可接受答案1','可接受答案2'], explain: '…' }
  ]
});
```

### 内容 HTML 约定

- **所有英文一律用 `<en>…</en>` 包裹** → 引擎自动变成"点击发音 + 可收藏"。这是全站灵魂,漏包 = 缺陷。
- 例子块用 `<div class="ex">…</div>`(黄左边),坑用 `<div class="pit"><b>坑 N:标题。</b>说明</div>`(红左边)。
- 可用 `<table>`(对照表)、`<strong>`、`<ul>/<ol>`。不要内联样式、不要引入图片/外链资源。
- JS 字符串里写 HTML 用 `'\` 续行(见样板),注意转义单引号。

### 文风铁律

1. **大白话优先**:每个术语第一次出现前,先用类比/场景讲明白,再给术语名。
2. **美式为准**:发音、拼写(color 不是 colour)、表达全部 American English;英美差异只在文化模块对比讲。
3. **5 分钟颗粒度**:一课只讲一个点,讲不完就拆,不要贪。
4. **音标符号不能指望 TTS 念准**:孤立音标一律配例词发音(`<en>cat</en>`),即"例词驱动"(ADR-4)。
5. **小测要测"坑"**:题目优先覆盖 pitfalls 里的易错点,错题会自动进错题本被反复复习。

### 验收自查

- `node --check` 通过;浏览器打开 `index.html` 能进入该课、点读有声、小测可判分;
- 路线页该课从"待编写"变为可点;
- 搜索能搜到该课关键词。

## 运行与测试

- 本地:直接双击 `index.html`,或 `python3 -m http.server` 后访问。
- 进度同步需要用户在「设置」里配置 private 仓库 + fine-grained PAT,代码里**永远不要**出现任何 token。
