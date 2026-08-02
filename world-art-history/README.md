# 世界艺术通史 · World Art History

大白话讲透世界艺术通史(科普通识,加德纳《艺术通史》式脉络)。纯静态、零依赖、离线可用。

15 模块 87 课,五段式(一句话 · 讲透 · 别绕晕 · 想一想 · 接着读),含艺术史时间轴 / 艺术家图鉴 / 流派速查 / 中外艺术对照四个互动工具。

## 本地预览

```bash
cd world-art-history
python3 -m http.server 8000
# 浏览器打开 http://localhost:8000/world-art-history/
```

## 构建

```bash
node tools/build.js    # 生成 content/ 并注入 index.html
node tools/_smoke.js   # DOM-shim 冒烟自检
```

课程源数据在 `tools/_src/*.js`,详情见 `CLAUDE.md`。
