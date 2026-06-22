# 高项学习站 · 开发规范

## 项目定位

信息系统项目管理师（高项/软考高级）备考学习站。纯静态、零依赖、离线可用。

## 技术架构

- 纯 HTML/CSS/JS，零 npm 依赖，零构建步骤
- Hash SPA 路由（`#/l/module/lesson`）
- Content-as-Data：课时是 JS 对象，通过 `ISPM.registerLesson()` 注册
- localStorage 持久化（进度/术语/错题/偏好）
- 全局命名空间：`window.ISPM`

## 目录结构

```
index.html                    SPA 入口
assets/css/main.css           全部样式（design tokens 在顶部）
assets/js/
  registry.js                 内容注册 + 搜索索引
  progress.js                 学习进度持久化
  ui.js                       渲染工具 + 术语弹窗
  views-home.js               首页
  views-lesson.js             课时页 + 练习系统
  views-tools.js              工具页（术语/错题/搜索/设置）
  engine.js                   路由 + 启动
content/
  modules.js                  模块元数据 + 学习路径
  terms.js                    术语表
  <module>/<NN>-<slug>.js     课时内容
design/
  style-{a,b,c,d}.html        视觉风格备选方案
```

## 课时模板（六段式）

每个课时文件调用 `ISPM.registerLesson(data)`，字段：

| 字段 | 必填 | 说明 |
|------|------|------|
| `id` | ✓ | 格式 `module/NN-slug`，与文件路径一致 |
| `module` | ✓ | 所属模块 ID |
| `order` | ✓ | 模块内序号 |
| `title` | ✓ | 课时标题 |
| `minutes` | ✓ | 预计阅读时间（上限 5 分钟） |
| `key` | | 标记为核心课时（高频考点） |
| `keywords` | ✓ | 搜索关键词数组 |
| `concept` | ✓ | ① 概念：白话解释 + 术语引入 |
| `exam` | ✓ | ② 考纲定位：出题频率/分值/方向 |
| `core` | ✓ | ③ 核心要点：机制/流程/图解 |
| `pitfalls` | ✓ | ④ 易混辨析：误解 + 正解 |
| `quiz` | ✓ | ⑤ 真题练习：2-3 题 |
| `links` | ✓ | ⑥ 关联：相关课时/术语 |

## 练习题数据格式

```javascript
// 选择题
{ type: 'choice', q: '题目文本', options: ['A', 'B', 'C', 'D'], answer: 1, source: '2022上', explain: '解析' }
// 填空题
{ type: 'fill', q: '题目文本（____处填答案）', answer: ['答案1', '答案2'], source: '', explain: '解析' }
```

## 术语数据格式

```javascript
{ id: 'slug', name: '中文名', en: 'English Name', def: '定义', analogy: '类比', module: 'module-id' }
```

## 内容写作规范

1. **白话先行**：先用生活类比解释，再引入专业术语
2. **5 分钟硬上限**：一课一概念，超时就拆分
3. **考纲导向**：每课标注出题频率和分值权重
4. **真实误解**：易混辨析必须对应考生真实易错点
5. **中国考纲语境**：以软考官方教程为准，PMBOK 作为补充
6. **无 emoji**：图标用线性 SVG 或 Unicode 符号（✓ × →）

## HTML 标记约定

- 术语：`<gd data-term="id">术语名</gd>`
- 误解：`<div class="pit"><b>误解 N：...</b>...</div>`
- 示例：`<div class="ex">...</div>`
- 图解：`<figure class="fig"><svg>...</svg><figcaption>图 · 说明</figcaption></figure>`
- SVG 颜色：只用 CSS 变量（`var(--accent)` `var(--ok)` 等），永远不写死色值

## 添加新课时步骤

1. 在 `content/<module>/` 下创建 `<NN>-<slug>.js`
2. 按六段式模板编写内容
3. 在 `index.html` 底部添加 `<script src="content/<module>/<NN>-<slug>.js"></script>`
4. 检查 `content/modules.js` 中的 `ISPM.path` 包含该课时 ID
5. 如有新术语，添加到 `content/terms.js`

## 不做什么

- 不引入任何 npm 包或构建工具
- 不使用 emoji
- 不添加后端 API
- 不抄原题不标来源（标注年份即可，如"2022上"）
- 不在内容中写超纲的深度技术细节
