# AI Engineer 技术分析博客 / CV Showcase：Landscape Research Report

> 研究日期：2026-11-15  
> 研究模式：方向判断 + 实现路径决策支持  
> 研究范围：本地 Agent / 开源项目材料、免费优先静态发布平台、内容框架、邻近个人技术博客与开源展示案例。  
> 目标：为 `F:\独立项目\ai-engineer-tech-notebook` 找到一条低成本、可维护、能展示 AI Engineer 全流程能力、且未来不难迁移的内容→构建→发布路径。

## 1. 结论先行

### 推荐路径

建议采用：

```text
F:\ 本地资料
  → 经过筛选和脱敏的 Markdown / YAML 内容仓库
  → Astro 静态构建
  → Cloudflare Pages Free
  → GitHub 作为源代码、版本和 issue 协作入口
```

推荐的理由不是 Astro 或 Cloudflare 本身“最先进”，而是这条组合最适合当前项目的三个约束：

1. 内容不是单一博客，而是 Agent 设计研究、项目决策、工程文档、实验记录和 CV 展示的混合知识库。
2. 需要按照项目、主题、时间、证据等级、状态和技术栈组织内容。
3. 需要免费优先，同时保留静态输出的可迁移性，不把业务逻辑锁在某个平台上。

### 备选路径

- 如果第一目标是尽快上线：`Eleventy + GitHub Pages`。
- 如果第一目标是最低锁定和最少依赖：`纯 HTML/CSS/JS + GitHub Pages`。
- 如果已经明确只做个人、非商业、偏 portfolio 的站点，并重视预览体验：`Astro + Vercel Hobby` 也可行，但需要接受 Hobby 的个人/非商业使用限制。
- Netlify Free 适合作为可用备选，但当前免费计划采用 credits，超限会暂停项目；不应把它当作“无限免费托管”。

### 最重要的架构判断

不要把 `F:\` 原始目录直接当成网站内容目录。应建立一个经过筛选的 publication layer：

```text
原始经验 / 研究 / 项目代码
          ↓ 选择、脱敏、压缩、解释
公开内容条目 + 项目 manifest + 来源链接
          ↓ 构建
静态页面、RSS、sitemap、项目索引、CV 视图
```

这样可以同时保留个人研究的深度、求职展示的可读性和隐私/版权边界。

## 2. 本地资料盘点

本次只读检查了以下资料范围，没有修改这些目录：

### 2.1 Agent 设计前沿研究

位置：`F:\个人经验池\Agent设计前沿研究`

已有材料包含：

- `00-本轮研究摘要与结论.md`
- `synthesis\2026-11-06-核心Agent设计框架v0.1.md`
- Evaluation、Safety、Orchestration、Harness、Memory、Tool Use、Multi-Agent 相关子报告
- sources、timeline、experiments、updates 和审核记录

适合公开展示的内容形态：

- “核心判断”短文：先给结论，再给证据和限制。
- 主题地图：Agent Runtime、State、Memory、Tool、Harness、Evaluation、Safety。
- 时间线：按季度展示观点如何变化。
- 研究卡片：来源、主张、证据强度、未解决问题。
- 实验计划：把尚未验证的内容明确标成 hypothesis，而不是包装成事实。

不建议直接公开：

- 所有内部过程日志、子 Agent 派发记录和未审核草稿。
- 可能暴露本地目录结构、个人工作流、API/凭据、私有对话或未授权材料的内容。

### 2.2 DecisionFlow Mini

位置：`F:\个人经验池\求职项目\Decision MVP`

这是最适合成为站点主案例的项目之一。已有材料体现了：

- 受限 Agent workflow，而非自由聊天。
- Pydantic typed contracts。
- evidence → finding → decision → response claim → audit event 的证据链。
- deterministic risk / routing / compliance gates。
- human review 路由。
- SQLite audit trail。
- private gold-label evaluator 与 public bundle boundary。
- FastAPI、Streamlit、Docker 和测试。

它可以把“我会搭 Agent”升级成更有说服力的求职叙事：

> 我能把 LLM 放进一个有证据、权限、状态、审核、失败边界和可验证产物的系统中。

### 2.3 LinkedIn AutoApply open-source framework

位置：`F:\LinkedIn-AutoApply\open-source-framework`

这个仓库适合展示工程演化和系统边界：

- Python workflow 与 agent loop 的对比。
- browser automation、外部 handoff、人工接管和 retry。
- `README.md`、`docs\architecture.md`、`docs\workflow.md` 中的架构说明。
- 测试、脚本、配置、license、security 和 contributing 文档。

公开前必须：

- 检查配置、日志、用户文件、cover letter 和历史数据是否含个人信息。
- 不公开真实账号、cookie、token、申请记录或第三方网站敏感信息。
- 把“代码已存在”和“可以安全在生产部署”分开表述。
- 将真实浏览器操作、平台政策和合规风险写进 limitation，而不是只展示自动化效果。

### 2.4 Agent 综述

位置：`F:\综述\agent综述`

已有 `evaluation-blueprint.md`、`master-blueprint.md`、timeline、patterns、narratives 等材料，适合变成：

- 综述导航页。
- Agent 设计概念词典。
- 主题演化图。
- “从提示词工程到 loop 工程”的解释性文章。

不要把综述页面做成大量论文摘要的堆积。更好的展示单元是：

```text
问题 → 代表性方法 → 工程含义 → 反例 / 边界 → 个人实验或项目对应关系
```

### 2.5 手搓 Agent

位置：`F:\手搓agent`

已有：

- `Agent架构对比.md`
- OpenAI、Anthropic、Microsoft、LangGraph SDK notes。
- runtime state、harness、dispatcher、tool registry、checkpoint、approval gate 等架构讨论。

这部分适合做“设计决策与架构比较”栏目，尤其可以连接到 DecisionFlow 和 AutoApply，而不是单独做成 SDK 介绍站。

## 3. 免费优先发布平台比较

以下事实来自平台官方文档或官方定价页面；额度、条款和免费计划会变化，应在真正部署前再次复核。

| 平台 | 适合当前项目的部分 | 免费层关键事实 | 维护 / 锁定风险 | 判断 |
|---|---|---|---|---|
| GitHub Pages | Git-native、最透明、纯静态发布、与开源仓库自然连接 | GitHub 官方列出 1 GB 源仓库建议上限、发布站点 1 GB、部署 10 分钟超时、100 GB/月软带宽限制、10 builds/hour 软限制 | 能力主要是静态托管；动态功能要外接；公开仓库和内容治理需要自己负责 | 最低平台复杂度；适合纯静态 MVP |
| Cloudflare Pages | 静态站、Git 集成、预览、全球分发、后续可接 Functions | Free 计划官方文档列出每次 1 个并发构建、每月 500 builds、20,000 个文件、单文件 25 MiB、每项目 100 个 custom domains、100 个项目/账户 | 一旦使用 Pages Functions、Workers、KV/R2，会增加 Cloudflare 专属耦合；纯静态输出仍可迁移 | 当前最平衡的默认选择 |
| Vercel Hobby | Git 预览、前端 DX、React/Next 生态、部署体验好 | Hobby 官方页面列出 100 GB fast data transfer、1M CDN requests、1M function invocations 等基础额度；超限通常等待周期恢复 | 官方条款限制 Hobby 为个人或非商业使用；深度使用 Vercel Functions/Analytics 会增加平台耦合 | 个人 portfolio 可用，但条款要先确认 |
| Netlify Free | Git/API 部署、预览、custom domain/SSL、静态站和轻量函数 | 官方定价页列出 $0、unlimited deploy previews、custom domains with SSL、300 credits/month；超出免费额度会暂停项目 | credits 模型比“固定带宽/构建数”更难直觉估算；使用 Netlify Database/Functions 会产生专属依赖 | 可用备选，不是无限免费 |

官方依据：

- [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/)
- [Vercel Hobby Plan](https://vercel.com/docs/plans/hobby)
- [Vercel Terms of Service](https://vercel.com/legal/terms)
- [Netlify Pricing and Plans](https://www.netlify.com/pricing/)

### 3.1 推荐排序

按本项目的目标，而不是按平台普及度排序：

1. **Cloudflare Pages Free**：默认推荐。静态站空间和构建额度足够，预览能力较强，未来可继续接边缘能力；但必须把这些能力封装在可替换 adapter 里。
2. **GitHub Pages**：最适合第一版和最低锁定方案。若内容规模不大、没有动态功能，它可能比 Cloudflare 更简单。
3. **Netlify Free**：作为第二备选。适合需要 preview workflow，但要把 credits 消耗纳入维护文档。
4. **Vercel Hobby**：技术上很方便，但个人/非商业条款使它不如前两者稳妥。未来如果这个站点承担商业咨询、课程、产品推广或客户服务，不应默认继续使用 Hobby。

### 3.2 成本结论

真正的基础成本不是平台订阅，而是：

- 域名费用（如果需要自定义域名）。
- 图片、视频、PDF 和大文件存储。
- AI 生成内容或动态 API 的推理成本。
- 维护标签、链接、引用、版本和隐私边界的时间。

因此，第一版应坚持：

- 静态 HTML 优先。
- 图片压缩，避免把视频或大型数据集放进站点仓库。
- 不在前端暴露 API key。
- 不把 F: 目录镜像到线上。
- 动态 Demo 使用外部链接或单独部署，博客本体不依赖它才能访问。

## 4. 内容框架比较

### 4.1 纯 HTML/CSS/JS

官方 Web 基础参考：[MDN Your first website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)

适合：

- 首页、CV、少量项目页。
- 需要最高可迁移性和最少依赖的版本。
- 不想引入 Node 构建链的早期 MVP。

优点：

- 输出就是浏览器原生文件。
- 能部署到几乎所有静态托管。
- 没有框架升级、插件和运行时锁定。

缺点：

- 多篇 Markdown 内容、标签、RSS、sitemap、导航和交叉引用需要自己维护。
- 很容易出现模板重复、链接漂移和手工更新遗漏。

判断：适合做 landing page 或第一版 CV，不适合作为长期技术知识库的唯一内容系统。

### 4.2 Eleventy

官方文档：[Eleventy Projects](https://www.11ty.dev/docs/projects/)、[Collections](https://www.11ty.dev/docs/collections/)

适合：

- Markdown-heavy blog。
- 需要 collections、tags、layouts、pagination、RSS 和静态输出。
- 希望 JavaScript 只出现在构建期，而不是页面运行时。

优点：

- 抽象层薄。
- 模板和内容边界清晰。
- collections 适合把研究笔记、项目、主题和时间线组织起来。
- 比完整前端框架更容易理解和迁移。

缺点：

- 复杂的 schema 校验、交互式项目图谱和类型安全需要额外设计。
- 如果站点后续越来越像应用，模板和客户端脚本可能逐步变复杂。

判断：如果项目强调“研究博客 + 少量 portfolio”，Eleventy 是最稳妥的轻量备选。

### 4.3 Astro

官方文档：[Astro Content Collections](https://docs.astro.build/guides/content-collections/)

适合：

- 内容很多且有明确 metadata schema。
- 需要项目卡片、主题过滤、证据标签、交互式图表或局部客户端组件。
- 既想保持静态输出，又不希望未来所有交互都手写。

官方文档显示，Astro content collections 可以从 Markdown、MDX、Markdoc、YAML、TOML、JSON 等来源构建内容集合，并可用 schema 做结构校验和类型提示；build-time collections 适合相对静态的博客、文档和产品内容。

优点：

- 内容模型和页面组件结合得好。
- 适合把项目、研究、实验、来源、标签和状态做成结构化对象。
- 可以保持静态预渲染，同时按需添加局部交互。

缺点：

- 引入 Node/npm、Astro、前端组件和构建配置。
- 对只有几页的站点来说可能过度。
- 一旦大量使用特定 UI 库或服务端 adapter，迁移成本会增加。

判断：最适合当前这个“技术分析博客 + 项目展示 + CV showcase”的长期方向，但第一版应该限制依赖，只使用静态输出和少量交互。

### 4.4 选择结论

```text
复杂度 / 内容结构

纯 HTML/CSS/JS  ←  Eleventy  ←  Astro
最低锁定                         更强 schema / component / interaction
```

当前建议：

- **默认：Astro**，但保持 static output。
- **降级：Eleventy**，如果第一阶段只做文章和项目页。
- **保底：纯 HTML/CSS/JS**，如果需要在一两天内发布一个可用版本。

不建议第一版使用 Next.js 或自建后端作为博客基础。它们不是不能用，而是会把“展示内容”问题扩大成 SSR、API、运行时、部署和安全问题，降低项目早期的可完成性。

## 5. 邻近案例研究

以下案例用于观察展示策略，不用于复制文章、设计或品牌。案例选择标准是：真实个人站点、持续技术写作、公开项目或开源仓库、对 AI/ML/工程实践有明确关联。

### 5.1 Simon Willison

- 站点：[simonwillison.net](https://simonwillison.net/)
- GitHub：[github.com/simonw](https://github.com/simonw)
- 相关仓库：[simonwillisonblog](https://github.com/simonw/simonwillisonblog)、[Datasette](https://github.com/simonw/datasette)、[LLM](https://github.com/simonw/llm)

解决的展示问题：

- 把持续实验、短观察、工具发布、项目日志和长文放进同一个长期可检索的个人工作流。
- 文章与项目、代码、演示和外部讨论互相链接。

值得借鉴：

- 高频、短反馈的 “working notes” 机制。
- 每篇内容都尽量落到一个具体实验、工具、现象或代码对象。
- 让博客成为项目开发日志，而不是项目完成后的宣传页。
- 维护清晰的 archive、tag 和 feed。

应拒绝：

- 直接复制其高频更新节奏；个人项目没有相同的时间预算。
- 复制其视觉或栏目名称。
- 把“持续发布”误认为“内容已经验证”。

许可证 / 复用风险：

- GitHub 仓库的代码是否可复用，必须以具体仓库的 LICENSE 为准。
- 站点文章、截图、图片和外部讨论不因公开可见就自动获得再发布许可。
- 本项目应只学习结构、链接方式和公开工程习惯，文章内容自行重写并引用原始链接。

### 5.2 Hamel Husain

- 站点：[hamel.dev](https://hamel.dev/)
- GitHub：[github.com/hamelsmu](https://github.com/hamelsmu)
- 相关仓库：[evals-skills](https://github.com/hamelsmu/evals-skills)

解决的展示问题：

- 把 applied AI、error analysis、evals、工程经验和课程/工具组织成一个面向实践者的可信入口。
- 站点既能承载长文，也能把文章引向可运行的开源工具。

值得借鉴：

- 每个主题都尽量有“问题 → 方法 → 失败 → 工具/实践”的路径。
- 将评测、调试、生产监控和用户反馈放在同一个工程叙事里。
- 用开源 repo 给文章增加可验证的技术落点。

应拒绝：

- 不要把个人站点做成课程销售漏斗，除非这确实是产品目标。
- 不要只展示方法论，要链接到自己的实验、测试和限制。
- 不要把作者的行业经验直接当成普适因果结论。

许可证 / 复用风险：

- `evals-skills` 仓库应以其当前 LICENSE 和各文件声明为准；引用方法时保留 attribution。
- 课程、书籍、博客正文和图表有独立版权边界，不能因为仓库公开就整体复制。

### 5.3 Eugene Yan

- 站点：[eugeneyan.com](https://eugeneyan.com/)
- GitHub：[github.com/eugeneyan](https://github.com/eugeneyan)
- 相关仓库：[ml-design-docs](https://github.com/eugeneyan/ml-design-docs)、[applied-ml](https://github.com/eugeneyan/applied-ml)、[testing-ml](https://github.com/eugeneyan/testing-ml)

解决的展示问题：

- 用长期文章、设计文档模板、生产 ML 资料索引和原型项目，构成“会思考、会设计、会实现”的证据链。

值得借鉴：

- 以 design doc、trade-off 和系统约束为展示单位，而不只是展示最终 demo。
- 将学习、写作、原型和开源资料放在同一个个人主页叙事中。
- 让 repository README 和个人网站互相补充：站点讲判断，仓库给材料。

应拒绝：

- 不要堆积大量链接而没有自己的选择和解释。
- 不要把收藏夹规模当成专业能力。
- 不要把别人的生产案例重新包装成自己的项目经验。

许可证 / 复用风险：

- 每个 repo 的 license 要单独确认；尤其是资料集合、模板和文章内容可能不是同一许可。
- 外部公司案例、论文和博客只能做引用或链接，不能把原文内容镜像进本站。

### 5.4 Chip Huyen

- 站点：[huyenchip.com](https://huyenchip.com/)
- GitHub：[github.com/chiphuyen](https://github.com/chiphuyen)
- 相关仓库：[aie-book](https://github.com/chiphuyen/aie-book)、[dmls-book](https://github.com/chiphuyen/dmls-book)、[sniffly](https://github.com/chiphuyen/sniffly)

解决的展示问题：

- 将个人背景、AI Engineering 方法论、书籍资源、开放工具和职业可信度放进一个入口。
- 用资源仓库和长文降低读者理解复杂系统的成本。

值得借鉴：

- 首页先回答“作者研究什么、做过什么、为什么可信”。
- 内容与项目分层：学习资源、系统设计、工具、书籍和个人介绍各有入口。
- 将 AI 工程拆成数据、评估、架构、部署和用户反馈等可导航主题。

应拒绝：

- 不复制书籍章节、图表或独特表述。
- 不把站点做成“书籍目录的缩略版”；需要加入自己的实验和判断。
- 不要只展示理论资源而不展示可运行工程。

许可证 / 复用风险：

- `aie-book` 是公开资源仓库，但书籍文本、图表和仓库内不同文件的许可仍需逐项确认。
- 最安全的方式是链接到原始资料、写自己的摘要、明确 attribution，并只复用明确许可的代码/数据。

### 5.5 案例综合

四个案例共同说明，可信的 AI Engineer 个人站点通常不是“项目截图墙”，而是：

```text
个人定位
  + 研究判断
  + 可运行项目
  + 设计 / 实验 / 失败记录
  + 开源仓库
  + 可验证的来源和限制
```

当前项目最值得采用的是“Simon 的工作日志 + Hamel 的 eval/错误分析 + Eugene 的设计文档 + Chip 的 AI engineering 导航”这四种结构的组合；不应复制任何一个人的文章、品牌、视觉或发布节奏。

## 6. 内容能力地图

建议把站点内容分为五类，而不是只分成 blog 和 projects：

| 内容域 | 目的 | 本地来源 | 对求职的信号 |
|---|---|---|---|
| Agent Systems | 解释 runtime、state、memory、tools、harness、orchestration | `F:\个人经验池\Agent设计前沿研究`、`F:\手搓agent` | 系统设计、抽象能力、边界意识 |
| Production Decisions | 展示如何把 Agent 放进业务流程 | `F:\个人经验池\求职项目\Decision MVP` | 端到端工程、typed contracts、审核和审计 |
| Open-source Engineering | 展示代码、测试、文档、配置、失败和演化 | `F:\LinkedIn-AutoApply\open-source-framework` | 软件工程、维护性、调试和真实复杂度 |
| Research Notes | 展示来源、比较、反例、时间变化和未解决问题 | `F:\综述\agent综述` | 研究能力、证据纪律、批判性思考 |
| CV / Career Surface | 将上述证据压缩成招聘者可快速扫描的入口 | 新建 publication layer | 信息组织、定位和沟通能力 |

### 推荐页面结构

1. 首页：一句定位、3 个 flagship projects、3 个核心主题、当前学习方向。
2. Projects：DecisionFlow Mini、Agent Evaluation / Harness（未来）、AutoApply framework。
3. Research：Agent Systems、Evaluation、Safety、Orchestration 的主题导航。
4. Engineering Notes：架构决策、失败记录、测试、部署和维护笔记。
5. CV：一页简历式摘要，链接到项目证据。
6. About / Method：说明内容来源、证据等级、实验状态和版权边界。

## 7. Integration seam：内容仓库 → 静态构建 → 免费发布

### 7.1 推荐目录边界

```text
ai-engineer-tech-notebook/
├─ content/                         # 可公开内容的 canonical source
│  ├─ projects/
│  ├─ research/
│  ├─ engineering-notes/
│  ├─ career/
│  └─ _data/                        # tags, topics, source registry
├─ public/                          # favicon, images, downloadable CV
├─ src/                             # Astro pages/components/layouts
├─ scripts/                         # import / validation / redaction helpers
├─ tests/                           # content schema and link checks
├─ README.md
└─ LICENSE                          # 仅对确实愿意开源的代码/模板声明
```

### 7.2 内容条目最小 schema

建议每篇文章或项目使用类似字段：

```yaml
title: ""
slug: ""
type: research | project | engineering-note | cv
status: draft | reviewed | published | archived
topics: []
source_paths: []
source_links: []
date: "YYYY-MM-DD"
updated: "YYYY-MM-DD"
evidence_level: firsthand | local-experiment | synthesis | opinion
public_safe: true
summary: ""
```

`source_paths` 只作为生成和追溯用，不应被静态站点直接暴露；页面展示的是整理后的内容和必要的来源链接。

### 7.3 构建接口

```text
content files + metadata
        ↓ schema validation
Astro / Eleventy build
        ↓ static output (dist/)
GitHub Actions / platform build
        ↓
GitHub Pages / Cloudflare Pages / Netlify / Vercel
```

站点自身不应依赖 F: 盘路径，也不应在浏览器运行时读取本地文件。所有公开内容必须在 build time 以前完成筛选和复制。

### 7.4 动态 Demo 的边界

如果需要展示 DecisionFlow、Agent runner 或 dashboard：

- 站点只展示架构图、输入输出样例、脱敏 trace、截图和链接。
- 动态 API / Streamlit / sandbox 单独部署。
- 没有动态服务时，项目介绍页仍然完整可读。
- 不把真实外部账号操作、API key 或个人数据放入公开 demo。

## 8. Borrow / Adapt / Reject

### Borrow

- 从 Simon 借鉴：长期工作日志和项目互链。
- 从 Hamel 借鉴：error analysis、evals、production feedback 的工程叙事。
- 从 Eugene 借鉴：design doc、方法、trade-off 和原型的组合。
- 从 Chip 借鉴：清晰的 AI Engineer 定位、主题导航和资源分层。
- 从本地 Agent 研究借鉴：evidence、state、harness、recovery 和 evaluation 作为一等对象。
- 从 DecisionFlow 借鉴：证据链、typed contract、private evaluator、human review 和 audit trail。

### Adapt

- 把每个项目写成“问题 → 约束 → 设计 → 验证 → 失败 / 限制 → 下一步”。
- 把研究笔记转为结构化 research cards，而不是原样搬运目录。
- 把 AutoApply 的复杂性压缩成架构图、风险说明和可公开的代码证据。
- 把简历 bullet 直接链接到项目、测试或设计文档。
- 将“正在学习”与“已验证能力”分开标记。

### Reject

- 不做纯视觉模板套壳，尤其不复制案例站点的品牌、排版和文案。
- 不做所有 F: 文件的自动镜像。
- 不把未审核的 Agent 草稿、内部协调日志或私密信息公开。
- 不用外部 benchmark、GitHub stars 或文章数量替代项目质量证据。
- 不把 Vercel/Netlify/Cloudflare 专属服务写入核心内容模型。
- 不在没有真实流量时虚构在线 A/B 或生产指标。

## 9. 对需求的影响

当前项目需求应补充以下内容：

### P0：必须有

- 一个清晰的 AI Engineer 定位首页。
- DecisionFlow Mini 项目页。
- Agent Systems / Evaluation 研究入口。
- 每个公开条目有状态、日期、来源和限制。
- 内容 schema 校验和 broken-link 检查。
- 公开内容与原始 F: 资料分离。
- 静态部署和可下载 CV。

### P1：强烈建议

- 项目之间的关系图或主题索引。
- 研究卡片和证据等级标签。
- 对照展示：workflow vs agent loop、deterministic gate vs LLM judgment、offline eval vs online monitoring。
- 脱敏 trace viewer 或静态 trace 示例。
- RSS / sitemap / Open Graph metadata。
- GitHub repo、README、测试和设计文档的互链。

### P2：后续再做

- 全站全文搜索。
- 交互式 Agent architecture canvas。
- 在线 demo、评论、登录、数据库、动态实验 dashboard。
- 自动从 F: 目录导入内容。

## 10. 对架构的影响

### 10.1 内容和站点分离

内容源必须是可迁移的 Markdown/YAML/JSON，站点框架只是 renderer。这样未来可从 Astro 切换到 Eleventy、纯 HTML、GitBook 或其他静态生成器，而不需要重写所有内容。

### 10.2 版本化和 provenance

每个内容条目应保存：

- 原始来源路径。
- 原始材料日期。
- 公开版本日期。
- 主要来源链接。
- 状态：draft / reviewed / published。
- 是否包含实验、推断、观点或第三方材料。

### 10.3 安全边界

发布前需要一个可重复的检查清单：

- secrets scan。
- PII scan。
- 本地路径和用户名扫描。
- 浏览器 cookie / token / API key 检查。
- 第三方截图和论文图表版权检查。
- `public_safe: true` gate。

### 10.4 CI gate

最小 CI 不需要复杂平台：

```text
markdown lint
frontmatter/schema validation
internal link check
external link warning report
secret / PII scan
static build
artifact size check
```

### 10.5 供应商锁定控制

核心内容层不应引用：

- Cloudflare KV schema。
- Vercel-specific server actions。
- Netlify Database API。
- 平台专属 analytics event schema。

如果需要这些能力，放在 `adapters/` 或独立 demo 中，并保证静态站在移除 adapter 后仍能构建。

## 11. 最小可行发布计划

### Phase 1：可发布内容基线

交付：

- 首页。
- CV 页。
- DecisionFlow Mini 项目页。
- Agent Systems 研究页。
- AutoApply 项目页的安全脱敏版本。
- 4–6 篇高质量 research / engineering notes。

技术：纯静态输出；不接数据库；不接动态登录。

### Phase 2：内容系统化

交付：

- Astro content collections 或 Eleventy collections。
- tags / topics / project status。
- source registry。
- schema validation。
- RSS / sitemap。
- GitHub Actions build。

### Phase 3：求职证据增强

交付：

- 项目 decision log。
- 测试和评估结果页面。
- 架构图。
- 失败案例和限制。
- “What I would improve next” 页面。

### Phase 4：可选动态演示

交付：

- 脱敏 trace viewer。
- 静态 replay。
- 独立部署的 demo API。
- 与站点解耦的 live experiment。

## 12. 主要风险和未解决问题

### 已识别风险

1. **资料泄露风险**：F: 目录包含个人经验、项目配置、日志和可能的私密数据，不能自动批量发布。
2. **版权风险**：综述中引用的论文、博客、书籍和图表不能作为自己的公开内容复制。
3. **内容过载风险**：研究资料多，如果没有首页定位和 curated paths，招聘者会迷失。
4. **维护风险**：标签、链接、版本和外部平台限制会随时间变化。
5. **平台风险**：免费计划可能改变额度、条款或暂停行为。
6. **可信度风险**：只展示“想法”和“架构图”会被看成概念设计，必须链接到代码、测试、实验或明确的限制。

### 尚不能确定

- 最终读者是招聘者、工程师、研究者还是未来客户；这会影响首页信息密度。
- 是否需要中文、英文双语；双语会显著增加内容维护量。
- 是否需要将 private research archive 与 public showcase 放在同一仓库；当前建议分离逻辑，不一定物理分离。
- 是否需要真实动态 demo；在没有稳定部署和安全边界前，不应让它阻塞静态站发布。

### 下一轮最值得研究的事项

1. 选定 Astro 或 Eleventy 后，用 3 个真实项目页做一次小型 build spike。
2. 对 `F:\个人经验池\Agent设计前沿研究` 做一次 publication candidate 标注，而不是全量导入。
3. 对 AutoApply 仓库执行 secrets / PII / license review。
4. 为 DecisionFlow Mini 生成一套可公开的静态 trace 和评估结果。
5. 让一位不熟悉背景的人在 3 分钟内回答：你是谁、最强项目是什么、你能做什么、证据在哪里。

## 13. Readiness assessment

### 当前 readiness：`READY FOR CONTENT CURATION; NOT YET READY FOR PUBLIC DEPLOYMENT`

理由：

- 已有足够多的研究、项目和工程材料，能够支撑一个有辨识度的 AI Engineer showcase。
- 已有明显的旗舰项目候选：DecisionFlow Mini。
- 已有系统设计和开源工程材料，可形成项目间的证据链。
- 尚未完成公开内容筛选、脱敏、版权检查、内容 schema、发布路径实现和读者测试。

推荐的下一步不是继续扩大外部 research，而是做一轮小范围内容整理：

```text
3 个项目页
4 篇研究 / 工程笔记
1 个 CV 页
1 个 publication checklist
→ 用 Astro 或 Eleventy 做静态 build
→ 发布到 Cloudflare Pages 或 GitHub Pages
→ 收集第一轮阅读反馈
```

## 14. 来源清单

### 平台与框架官方资料

- [GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- [Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/)
- [Vercel Hobby Plan](https://vercel.com/docs/plans/hobby)
- [Vercel Terms of Service](https://vercel.com/legal/terms)
- [Netlify Pricing](https://www.netlify.com/pricing/)
- [Astro Content Collections](https://docs.astro.build/guides/content-collections/)
- [Eleventy Projects](https://www.11ty.dev/docs/projects/)
- [Eleventy Collections](https://www.11ty.dev/docs/collections/)
- [MDN: Your first website](https://developer.mozilla.org/en-US/docs/Learn_web_development/Getting_started/Your_first_website)
- [GitHub licensing a repository](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/licensing-a-repository)

### 邻近案例

- [Simon Willison’s Weblog](https://simonwillison.net/)
- [Simon Willison GitHub](https://github.com/simonw)
- [Hamel Husain’s Blog](https://hamel.dev/)
- [Hamel Husain GitHub](https://github.com/hamelsmu)
- [Hamel evals-skills](https://github.com/hamelsmu/evals-skills)
- [Eugene Yan](https://eugeneyan.com/)
- [Eugene Yan GitHub](https://github.com/eugeneyan)
- [Eugene Yan ml-design-docs](https://github.com/eugeneyan/ml-design-docs)
- [Chip Huyen](https://huyenchip.com/)
- [Chip Huyen GitHub](https://github.com/chiphuyen)
- [Chip Huyen AI Engineering resources](https://github.com/chiphuyen/aie-book)

## 15. Skills、限制和方法说明

### Skills

- `find-skills`：已激活用于能力发现；本次没有安装任何 skill，也没有把外部 skill 作为项目依赖。
- `research`：已按高信任一手来源原则执行；平台和框架事实优先使用官方文档，案例优先使用个人站点和公开 GitHub 页面。
- `karpathy-guidelines`：已采用“最小充分范围、只改指定文件、显式假设、避免过度架构”的工作方式。

### 限制

- 免费层额度、条款和产品页面会变化；本报告记录的是 2026-11-15 的检查结果，不是长期承诺。
- 邻近案例是结构性样本，不代表个人技术博客的总体分布。
- 许可证判断必须以具体仓库当前 LICENSE、文件声明和内容版权为准；本报告不替代法律意见。
- 本次只做 landscape alignment，没有实施 Astro/Eleventy build，也没有做浏览器视觉 QA。
- 本次只修改了本报告文件，没有修改 F: 下的源资料或其他项目文件。
