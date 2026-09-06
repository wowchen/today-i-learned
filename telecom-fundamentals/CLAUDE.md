# 通信通识 · Telecom Fundamentals (TCM)

大白话讲透通信与光传输（科普通识，非应试）。克隆 `guitar-singing` 共享引擎（GTR→TCM 命名空间替换），内容完全重写。

## 站点定位

- **读者**：电力通信从业者（传输网运维/调度数据网）、通信专业学生、对"信息怎么跑"好奇的人
- **视角**：工程直觉优先——每个技术都回答"它解决了什么问题、坏起来什么样、运维时怎么对付"
- **红线**：具体参数以现行国标/行标与设备手册为准；本站只建立直觉与体系，不替代规范

## 内容结构（10 模块 66 课 52 术语）

| 模块 | id | 课数 | 主题 |
|---|---|---|---|
| 通信大白话 | basics | 7 | 信号/模拟数字/带宽/协议/分层/分组交换/时延 |
| 传输介质 | media | 6 | 双绞线/同轴/光纤/单模多模/光缆家族(ADSS·OPGW) |
| 光器件与光模块 | optics | 7 | 激光器/探测器/光模块/波长窗口/dBm/SFP |
| 从 PDH 到 SDH | sdh | 8 | E1/PDH/SDH/STM-N/开销/网同步/天花板 |
| 波分与 OTN | otn | 8 | WDM/CWDM·DWDM/OTN/FEC/相干/ROADM/色散/EDFA |
| 保护与组网 | protect | 7 | 50ms/拓扑/1+1·1:1/环倒换/倒换演习/同沟教训/断点定位 |
| 接入网 | pon | 7 | 宽带演进/PON/EPON·GPON/分光与光衰/FTTH/专线 |
| 传输网运维 | ops | 7 | 网管/告警分级/性能事件/割接/故障处置/巡检三防/备件 |
| 机房与动环 | dcr | 6 | 机房全景/−48V/蓄电池/空调/防雷接地/动环监控 |
| 光缆防护与未来 | future | 6 | 外破/防外破体系/OTDR 曲线/光纤传感/量子/F5G |

## 互动工具（4 件，views-tools.js）

1. **dBm ↔ mW 换算**：双向换算 + 功率区间判断（强光/正常/弱光/欠灵敏度）
2. **光链路预算**：发光−光纤−熔接−法兰→收光与余量判定（≥3dB 合格）
3. **速率等级速查**：E1/STM-N/GE/100G 对照 + E1/STM-1 等效换算
4. **纤芯配色速查**：12 芯全色谱交互查询 + 束管分色规则

## 技术要点

- 主题：浅色冷白+光纤蓝青（#0e7490）/ 深色深海蓝+光青（#38d4f0）
- 首页 hero：光纤盘绕 SVG + `core-flow` stroke-dashoffset 光脉冲流动 + 光子呼吸点
- `tools/build.js` 单一数据源：MODULES/TERMS + `_src/*.js`（`L.<mod>` 数组，课程五段式：one/core+ex/pit/quiz/next），校验术语引用与内部链接后生成 `content/` 并注入 index.html `<!--LESSONS-->`
- 数据格式：`TCM.registerLesson({id:'mod/slug', concept, core, pitfalls, quiz, links, ...})`
- GitHub 同步与其他站一致：localStorage `tcm.sync.v1`，路径默认 `progress/telecom-fundamentals.json`
- 改内容后必跑 `node tools/build.js`；改引擎/CSS 后 bump index.html 资源版本参数
