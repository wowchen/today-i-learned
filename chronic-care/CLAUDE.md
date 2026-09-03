# 慢病管理站 · chronic-care (CDC)

大白话讲透慢病管理（高血压 / 糖尿病 / 血脂 / 吃动 / 用药 / 随访）。

## 状态：✅ 已上线

- **风格 A · 医疗专业风**（三选一草案选定，草案存于 `designs/`）
- **独立 UI 引擎**：跳出主站共享引擎框架，独立设计系统 + hash 路由 + 自有进度模型
- 6 模块 / 76 课 / 32 术语 / 5 条通知 / 5 互动工具

## 内容规划

| 模块 | id | 课程数 |
|---|---|---|
| 高血压 | hypertension | 15 |
| 2 型糖尿病 | diabetes | 15 |
| 血脂异常 | lipids | 10 |
| 饮食与运动 | diet-move | 11 |
| 用药与监测 | medication | 11 |
| 就医与随访 | visit | 14 |

五段式：一句话 / 讲透 / 别绕晕 / 想一想（测验）/ 接着读。

## 互动工具（views-tools.js）

1. 血压分级评估（分级标尺 + 可写入健康记录本）
2. BMI 计算（五区间标尺）
3. 隐形盐估算（三路滑块，对照 5 克/天）
4. 健康记录本（血压/血糖/体重，SVG 趋势图，仅本机）
5. 服药打卡（自定义清单，每日自动重置）

## 构建

```bash
node tools/build.js   # 从 tools/_src 生成 content/，校验术语/quiz/字段并注入 index.html
```

## 架构

- `assets/css/main.css` — Style A 设计系统（浅色医疗青蓝 + 深色深青夜航，CSS 变量双主题）
- `assets/js/registry.js` — 元数据与工具清单
- `assets/js/progress.js` — 单例进度模型（lessons/activity/quizzes/tools），exportJson/importJson/merge
- `assets/js/sync.js` — GitHub 进度同步（可选），token 仅存本机 `localStorage['CDC.sync.v1']`，默认路径 `progress/cdc.json`
- `assets/js/ui.js` — 主题切换 + 图标
- `assets/js/views.js` — 视图组件（卡片/五段式/测验/导入导出）
- `assets/js/views-tools.js` — 5 个互动工具
- `assets/js/engine.js` — hash 路由 + boot
- `tools/build.js` + `tools/_src/*.js` — 内容单一数据源

## 内容红线

- 仅供健康科普，不构成诊疗建议
- 不贩卖焦虑、不推荐具体药品品牌
- 数据仅存本机浏览器，不上传不共享
