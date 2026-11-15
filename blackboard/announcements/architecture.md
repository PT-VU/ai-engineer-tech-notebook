# AI Engineer Technical Notebook — Architecture

> 状态：Architecture proposal
> 日期：2026-11-15（Europe/Amsterdam）
> 范围：MVP 的静态内容模型、页面边界、视觉方向、部署与发布门禁
> 权威输入：`blackboard/decisions/requirements-confirmed.md`、`blackboard/announcements/requirements-discovery.md`、`blackboard/announcements/landscape-research.md`

## 1. 架构结论

采用 **Astro + build-time content collections + static output**，部署优先选择 Cloudflare Pages Free，保留 GitHub Pages 作为可直接切换的低锁定路径。站点只消费仓库中经过人工筛选的 Markdown/YAML/JSON；它不读取 `F:\`，不连接数据库，不要求运行时模型调用。

架构的核心边界是：

```text
F:\ 原始资料（只读、不可直接发布）
        │ 人工选择、脱敏、重写、登记来源
        ▼
repo/content/  curated publication layer
        │ schema + public-safe + link + secret/PII gates
        ▼
Astro build（仅构建期）
        ▼
dist/ 静态 HTML/CSS/少量无状态 JS
        ▼
Cloudflare Pages / GitHub Pages
```

不能默改的需求：

- 受众仍以 recruiter、hiring manager、AI Engineer interviewer 为主，技术同行为次要受众。
- MVP 导航固定为 Home、Projects、Writing、About / CV。
- 技术文章以中文为主，每篇文章顶部必须同时显示中文标题、英文标题、英文摘要。
- 公共内容必须突出作者自己的判断、取舍、失败、证据和限制。
- 只发布人工筛选和 owner-reviewed 内容，绝不自动镜像 `F:\`。
- MVP 不引入登录、评论、newsletter 基础设施、动态 AI chat、数据库或自动导入。

## 2. 内容架构

### 2.1 内容集合

MVP 只需要四个公开集合和一个来源注册表：

| 集合 | 用途 | 页面入口 | 必须有的证据 |
|---|---|---|---|
| `projects` | 项目案例和可扫描项目卡 | `/projects/`、`/projects/[slug]/`、Home | repo、demo、评估、设计文档或明确的代码/实验状态 |
| `writing` | 技术文章、研究综合、实验/工程笔记 | `/writing/`、`/writing/[slug]/` | 外部来源、自己的实验或明确标注的推断 |
| `profile` | About、CV、技能与当前方向 | `/about/`、`/cv/`（可先合并） | 真实经历、可核验项目链接 |
| `topics` | 少量稳定主题词和导航描述 | Home、Writing index | 主题解释与关联条目 |
| `_data/sources` | 来源、许可证、访问日期、公开说明 | 构建期使用 | 原始 URL/path、license、provenance、public-safe |

不要把 `engineering-notes`、`research`、`experiments` 拆成更多顶层路由；它们作为 `writing.kind` 值，避免第一版产生空的导航层。

### 2.2 文章 frontmatter schema

以下是文章的最小公共契约。字段名保持英文，内容值可中英混合；字段多而不杂，所有字段都有渲染或发布门禁用途。

```yaml
type: writing                         # 固定为 writing
kind: essay | research | experiment | engineering-note | learning-note
slug: context-engineering-boundaries
status: draft | reviewed | published | archived
public_safe: true                     # 必须为 true 才允许 build
title_zh: "上下文工程的边界"
title_en: "Where Context Engineering Stops"
summary_en: "A first-person analysis of ..."  # 必填，页面顶部展示
dek_zh: "一句中文导语，可选"
date: 2026-11-15
updated: 2026-11-15
topics: [agent-systems, evaluation]
featured: false
evidence_level: firsthand | local-experiment | source-synthesis | opinion
claim_mode: verified | interpreted | hypothesis
source_ids: [astro-docs-001, local-eval-003]
source_paths: ["curated/decisionflow/eval-summary.md"]
evidence_links:
  - label: "Repository"
    url: "https://github.com/example/repo"
    kind: repo | demo | paper | docs | experiment | issue
    access: public | private-summary
    note: "What this link proves"
related_projects: [decisionflow-mini]
canonical_url: null
license: original | linked-only | CC-BY | review-required
review:
  owner: true
  reviewed_at: 2026-11-15
  pii_scan: pass
  secret_scan: pass
  rights_check: pass
```

Schema 规则：

- `slug` 全站唯一，只允许小写 ASCII、数字和连字符。
- `title_zh`、`title_en`、`summary_en`、`status`、`public_safe`、`evidence_level`、`source_ids` 为必填。
- `status: published` 只能在 `public_safe: true` 且三个 review gate 都为 `pass` 时通过构建。
- `source_paths` 仅用于追溯，默认不渲染到客户端，尤其不渲染盘符、用户名和原始目录结构。
- `source_ids` 指向 `_data/sources`；文章中显示可公开的链接标题、日期和 provenance 标签。
- `claim_mode` 允许读者区分事实、作者解释和待验证假设；不要用一个“可信度分数”代替这三个语义。
- `related_projects` 只引用已存在且 `public_safe: true` 的项目 slug。

文章正文建议固定为：`thesis`（一段开门见山的主张）→ `context` → `evidence` → `design/analysis` → `trade-offs` → `failure or limits` → `what changed` → `open questions`。模板可提供标题提示，但不自动生成事实或结论。

### 2.3 项目 schema

项目页承担招聘者的快速判断和面试官的深读两种路径。项目条目必须回答“问题是什么、边界在哪里、怎么验证、哪里失败”。

```yaml
type: project
slug: decisionflow-mini
status: prototype | working | research | archived
public_safe: true
name: "DecisionFlow Mini"
name_en: "DecisionFlow Mini"
tagline_zh: "把证据、路由、审核和审计接成一条可追溯的决策链。"
tagline_en: "A constrained workflow for evidence-backed decisions."
role: "Owner / system designer"
period: "2026"
topics: [agent-systems, evaluation, safety]
stack: [Python, FastAPI, Pydantic, SQLite, Docker]
problem: "..."
users_or_context: "..."
constraints: ["private evaluator", "human review", "no runtime secret"]
design:
  boundary: "..."
  flow: [evidence, finding, decision, response_claim, audit_event]
  deterministic_gates: [risk, routing, compliance]
implementation_facts: ["...", "..."]
evaluation:
  status: planned | partial | measured | unavailable
  metrics: ["...", "..."]
  result_summary: "..."
failures: ["...", "..."]
limitations: ["...", "..."]
next_step: "..."
evidence_links: []
source_ids: []
source_paths: []
review: {owner: true, pii_scan: pass, secret_scan: pass, rights_check: pass}
```

项目页面的推荐正文顺序：摘要 → 目标与约束 → 系统边界图/流程 → 关键设计判断 → 实现与证据 → 评估结果 → 失败和限制 → 下一步。`implementation_facts` 只写可核验事实；性能、效果和成熟度不能由项目名或视觉组件推断出来。

### 2.4 来源与 provenance schema

```yaml
id: local-eval-003
kind: local-artifact | repository | official-doc | paper | blog | dataset | image
title: "DecisionFlow evaluation summary"
origin: local | external
path: "curated/decisionflow/eval-summary.md"   # 仅 repo 相对路径
url: "https://..."                              # 外部来源可选
author: "..."
published_at: "2026-11-06"
accessed_at: "2026-11-15"
license: original | MIT | Apache-2.0 | CC-BY | unknown
provenance_note: "Owner-authored summary of a local experiment"
public_safe: true
redaction: "Removed private identifiers and operational traces"
```

来源字段的职责是回答三件事：材料从哪里来、作者在公开条目中做了什么加工、读者是否可以继续核验。外部资料只引用或链接，未经许可不复制正文、图表或截图；内部资料只引用 curated publication layer 的相对路径，不暴露 `F:\`。

### 2.5 状态流转

```text
candidate → drafted → reviewed → published
                │          │
                └──────────┴→ needs-redaction → drafted
published → archived
```

- `candidate` 是本地整理清单中的候选，不进入构建。
- `drafted` 已有 frontmatter 和正文，但可以含未验证内容。
- `reviewed` 通过 owner、provenance、PII/secret 和链接检查，仍可不公开。
- `published` 才进入索引、sitemap 和 RSS；发布前必须人工确认。
- `archived` 保留历史版本但不出现在默认列表；是否仍可直接访问由产品决定，MVP 默认不生成公开路由。
- `needs-redaction` 是审核结果，不是公开集合状态；修复后回到 `drafted`，避免将半安全内容误认为已审阅。

## 3. 目录与渲染边界

建议目录：

```text
ai-engineer-tech-notebook/
├─ content/
│  ├─ projects/*.md
│  ├─ writing/*.md
│  ├─ profile/*.md
│  ├─ topics/*.yaml
│  └─ _data/sources/*.yaml
├─ public/
│  ├─ images/                 # 已确认可发布的图片及 credits
│  ├─ downloads/cv.pdf
│  └─ favicon.*
├─ src/
│  ├─ content.config.ts       # collection schema，仅 build-time
│  ├─ layouts/
│  ├─ components/
│  ├─ pages/
│  └─ styles/
├─ scripts/
│  ├─ validate-content.*
│  ├─ check-links.*
│  └─ check-public-safe.*
├─ tests/
├─ astro.config.*
├─ package.json
└─ README.md
```

渲染边界：

- `content/` 是唯一公开内容源；组件不能直接读其他盘符或任意文件系统路径。
- Astro collection 只在 build time 读取文件、解析 schema、生成静态页面。
- `src/pages/` 负责路由和页面级组合；`src/components/` 不拥有内容事实。
- `public/` 只放已经通过版权、隐私、尺寸检查的发布资产。
- 客户端 JS 只用于无状态增强，例如目录锚点、轻量筛选或复制链接；无脚本时阅读、导航、CV 下载仍完整可用。
- 不把 Cloudflare Functions、KV、R2、Vercel server actions 或平台 analytics schema 写进核心 content model。若未来需要，置于 `adapters/`，移除后静态 build 必须仍通过。

## 4. 页面与组件分解

### 4.1 共享层

`BaseLayout` 负责 lang、title、description、canonical、Open Graph、sitemap metadata 和跳过导航链接。

`SiteHeader` 提供四项主导航；当前页面有明确 focus/active 状态，移动端使用原生 details 或无状态菜单，不依赖框架运行时。

`SiteFooter` 提供 GitHub、CV、来源/版权说明和更新时间；不放无依据的社交证明或订阅数字。

`EvidenceLinks` 统一渲染 repo、demo、docs、experiment、paper 等链接及其“它证明什么”说明。

`StatusBadge`、`TopicLabel`、`ProvenanceNote`、`Callout` 是语义组件，不是同样外观的卡片装饰。

### 4.2 Home `/`

固定结构：身份定位 → 证据导向的首屏行动 → 3 个精选项目 → 当前判断/主题 → 3 篇精选 writing → CV/联系入口。

来自 Markdown 集合的部分：定位副标题、项目卡、writing 卡、主题描述、当前 focus。首屏必须在约 30 秒内回答“你是谁、做什么、最强证据在哪里、下一步去哪”。

### 4.3 Projects index/detail

`/projects/` 固定有一句项目集合说明和按 `featured/status/topic` 的简单分组；MVP 不做复杂搜索。

`/projects/[slug]/` 由 `ProjectLayout` 渲染 schema 字段，正文章节可由 Markdown 内容控制，但顺序默认遵循“问题→边界→设计→证据→评估→失败→下一步”。项目 schema 负责机器可检索字段，正文负责作者判断；二者不重复堆砌。

### 4.4 Writing index/detail

`/writing/` 固定有 kind 说明、精选文章和按时间倒序列表。`/writing/[slug]/` 顶部强制渲染：中文标题、英文标题、英文摘要、日期、kind、evidence level、status。

文章正文是 Markdown；系统只提供 heading、目录、来源、关联项目、上/下一篇和公开状态等外壳，不自动生成摘要、事实或结论。

### 4.5 About / CV

MVP 可先用 `/about/` 承担 About + CV 双重入口，必要时再增加 `/cv/` 的打印友好视图。

固定内容：个人定位、能力边界、工作方式、联系方式/公开链接。

集合内容：精选项目证据、技术主题、经历条目、可下载 CV。简历内容和项目内容共用 `projects` 数据但不共用呈现模板，避免把项目页压成 bullet list。

## 5. Astro vs 更轻方案

选择 Astro 的理由是本项目同时需要：多种内容类型、schema 校验、项目/文章交叉引用、未来可加局部交互，以及静态输出。Astro 的 content collections 适合 Markdown/YAML/JSON 的 build-time 内容，能在类型层提前暴露缺字段和坏引用。

代价是 Node/npm 构建链、Astro 升级和组件知识；如果 MVP 最终只有 1 个 CV、3 个项目和 4 篇文章，Eleventy 或纯 HTML 会更轻。

迁移控制：

- 内容 schema 和 source registry 不引用 Astro API。
- 页面内容尽量用 Markdown + frontmatter；Astro 只负责读取和渲染。
- 组件接口使用通用 props（标题、状态、链接、正文），不把平台对象传入深层组件。
- `npm run build` 的产物是普通 `dist/`，可移交给 GitHub Pages、Cloudflare Pages 或其他静态主机。
- 若两个真实项目 spike 后发现没有局部交互和复杂集合，允许降级为 Eleventy，但不得为追求轻量删掉 schema、provenance、public-safe 和 CI gate。

## 6. 免费部署与 CI gate

默认发布链：Git push → CI → Astro static build → Cloudflare Pages Free。GitHub Pages 是同一 `dist/` 的备用发布目标。

最小 CI 顺序：

```text
1. install with lockfile
2. markdown/frontmatter/schema validation
3. cross-reference and internal-link check
4. public-safe / secret / PII scan
5. external-link report (broken external links fail only when policy marks required)
6. astro build
7. artifact size and route smoke check
```

最小接口，不规定具体实现：

- `validate-content`: 检查必填字段、枚举、slug 唯一性、日期格式、集合引用和已发布条目的 review 状态。
- `check-links`: 检查本地路径、Markdown 链接、项目/文章 slug、canonical URL；外链生成报告并支持 allowlist/过期标记。
- `check-public-safe`: 扫描 `public_safe: false`、`F:\`/用户名路径、邮箱/电话/地址、cookie/token/API key 形态、浏览器 profile、申请记录和私有仓库 URL；命中时停止发布。
- `check-rights`: 检查图片/图表/代码的 license 与 credits 是否齐全；`unknown` 只能出现在 draft。
- `build`: 只在以上 gate 通过后生成 `dist/`。

发布安全策略：任何 published item 的 gate 失败都阻止 production deploy；draft/reviewed 内容可以在 preview 中显示给 owner，但默认不出现在导航与 sitemap。CI 输出应包含失败文件和字段，不打印敏感匹配文本。

## 7. UI 方向：证据链作为视觉语法

### 7.1 主题与唯一概念

方向不是“AI 卡片墙”，而是“工程判断的证据链”：把一条从问题到决策、评估、失败和下一步的链条，变成页面的主组织方式。

设计句：

> 在这个站点里，项目的证据链成为页面的阅读路径；来源、判断、限制和下一步是导航结构本身。

这符合内容主题“系统边界、证据、恢复、审计”，也能通过具体项目材料成立。不要添加与内容无关的 01/02/03 编号、全大写眉题、渐变光晕、统一圆角卡片或“AI 未来感”图标。

### 7.2 紧凑 token system

```text
颜色
--paper:       #F6F5F1  温和纸面背景
--ink:         #20242A  正文与结构线
--muted:       #66717B  次要说明
--line:        #C9CEC9  边界、时间线、引用规则
--signal:      #B94A35  仅用于状态/证据节点与主要动作
--field:       #E7ECE8  证据块、代码/数据背景

字体
--font-display: "IBM Plex Sans", "Noto Sans SC", sans-serif
--font-body:    "Source Serif 4", "Noto Serif SC", serif
--font-mono:    "IBM Plex Mono", monospace（仅代码、路径和可复制值）

排版
--text-xs: 0.75rem; --text-sm: 0.875rem; --text-md: 1rem;
--text-lg: clamp(1.25rem, 2vw, 1.6rem);
--text-xl: clamp(2.2rem, 6vw, 5.4rem);
--leading-body: 1.72; --measure: 68ch;

布局
--space-1: .35rem; --space-2: .75rem; --space-3: 1.25rem;
--space-4: 2rem; --space-5: 4rem; --space-6: 7rem;
--content-max:  seventyrem;  # 实现时用合法 CSS 数值，例如 70rem
--radius: 2px;               # 只用于需要的控件，不做全站圆角
```

颜色比例以纸面和墨色为主，信号红只标出“当前状态/证据/动作”；代码和来源块使用冷淡字段色。整站左对齐，正文控制在 68ch 左右，标题可以更宽但不超过两行。显示字体和正文衬线形成“工程索引 + 个人论述”的双重语气；不使用通用 Inter + monospace 标签组合。

### 7.3 ASCII wireframe

```text
┌──────────────────────────────────────────────────────────────┐
│ NAME / AI ENGINEER NOTEBOOK              Projects Writing CV │
├──────────────────────────────────────────────────────────────┤
│ I build AI systems that can show their work.                 │
│ Evidence, boundaries, evaluation, and recovery in practice.  │
│ [View selected work]                         [Open CV]        │
│                                                              │
│ SELECTED WORK                                                │
│ ┌──────────────┐  ┌──────────────┐  ┌──────────────┐        │
│ │ DecisionFlow │  │ AgentOps     │  │ AutoApply    │        │
│ │ problem      │  │ boundary     │  │ status       │        │
│ │ evidence →   │  │ evidence →   │  │ evidence →   │        │
│ └──────────────┘  └──────────────┘  └──────────────┘        │
│                                                              │
│ HOW I THINK                     CURRENT WRITING             │
│ claim → evidence → limit        Chinese title               │
│ deterministic gate / LLM        English title + abstract     │
│ human review / audit             source / reading time        │
└──────────────────────────────────────────────────────────────┘
```

项目卡不使用相同的营销 CTA；卡内固定显示“问题/边界/证据状态”三项。详情页可采用左侧固定章节导航、右侧长文，证据链用细线和节点连接；节点必须对应真实章节或来源，不做抽象装饰。

### 7.4 内容层次

访问者顺序应是：

1. 身份与工作范围。
2. 一个主要动作：查看精选工作；次动作：打开 CV。
3. 三个项目的不同工程信号，而非三个相同卡片。
4. 一篇能代表判断力的文章。
5. 证据链接、状态、限制和下一步。

文章首屏严格显示中文标题、英文标题、英文摘要；来源与 evidence level 靠近主张，不藏在页面末尾。项目的“限制”和“失败”与“结果”同等显眼，避免简历式只展示成功。

### 7.5 Responsive 策略

- 桌面：12 列网格，标题与首屏行动占 7 列，右侧用一条证据摘要/状态轨迹占 5 列；详情页正文 8 列，目录 2–3 列。
- 平板：降为 6 列，项目卡两列，文章元数据转为一行或两行。
- 手机：单列；首屏动作垂直堆叠；项目卡保留“问题/边界/证据”而不是缩成图标；目录变为原生可展开列表。
- 任何图片、代码块和证据表都允许横向滚动但不能撑破 viewport；正文和按钮保持可访问字号与可见 focus。
- 无 hover 才能发现的内容；支持键盘、`prefers-reduced-motion`，首屏不依赖动画。
- 只保留一个有意义的 live thing：例如在项目页展开一条脱敏 trace 或在对比表中切换 workflow/agent loop；它必须有静态 fallback，不阻塞阅读。

## 8. 开发 work units 与验收标准

### W1 — Content contract

建立 collections、schema、source registry、状态枚举和示例条目。

验收：缺少双语文章字段、无来源、`public_safe: false` 的 published 条目会让校验失败；slug 和引用唯一。

### W2 — Shared shell

实现 BaseLayout、Header、Footer、metadata、focus、404 和静态 asset 规范。

验收：四个主导航在桌面/移动可用；任一页面无 JS 也能阅读和导航；title/canonical/OG 正确。

### W3 — Home + projects

完成 Home、projects index、3 个 project detail；每页包含问题、边界、证据、评估、限制。

验收：招聘者无需进入文章即可理解作者定位、三项目差异和下一步动作；每个外部声称均有来源或被标为 opinion/hypothesis。

### W4 — Writing

完成 4–6 篇精选文章和 Writing index/detail，加入 bilingual header、evidence label、related projects、source list。

验收：所有文章顶部出现中文标题、英文标题、英文摘要；正文以作者判断为主，不是外部资料摘要堆积。

### W5 — About/CV

完成 About/CV、可下载 CV 和项目证据互链。

验收：3 分钟内可回答作者是谁、强项是什么、证据在哪里；PDF/链接公开内容经过 owner review。

### W6 — CI/release gate

实现 schema、链接、rights、secret/PII、build 和 artifact smoke checks。

验收：故意加入私有路径、token 形态、坏 slug、坏链接和未通过 review 的 published 条目时 CI 失败；修复后可生成可部署 `dist/`。

### W7 — visual/responsive review

在桌面、平板、手机检查三条关键路径：Home→Project、Home→Writing、Home→CV。

验收：无横向溢出；键盘 focus 可见；减少动画设置生效；标题不超过两行；页面保留证据链语义而非退化成卡片墙。

## 9. 关键风险与应对

| 风险 | 影响 | 防线 |
|---|---|---|
| F: 原始资料误发布 | 隐私、账号、雇主或运营信息泄露 | repo-only curated layer；绝不运行时读取 F:；public-safe gate + owner review |
| 研究内容像资料搬运 | 降低个人判断和求职可信度 | 每篇必须有 thesis、trade-off、失败/限制、作者结论 |
| 证据不足 | “会搭 Agent”停留在概念层 | 项目页强制 evidence_links、evaluation status、implementation facts |
| bilingual 维护成本 | 更新不一致 | 文章仅强制中标题/英标题/英摘要；正文按中文主写，英文全文不作为 MVP 要求 |
| Astro/平台锁定 | 后续迁移成本 | build-time schema、纯静态 dist、无平台专属 content model |
| 外部链接/许可证变化 | 版权和可验证性退化 | source registry、访问日期、rights gate、定期报告；不自动复制外部内容 |
| 视觉变成模板化卡片墙 | 失去主题辨识度 | 证据链作为布局语法；每个组件必须有内容语义；限制统一圆角/渐变/全大写标签 |
| 内容规模膨胀 | 招聘者找不到重点 | 3 个精选项目、4–6 篇精选 writing；archive 和 topic 只作后续扩展 |

## 10. Readiness assessment 与下一阶段建议

**Readiness：READY FOR CONTENT CURATION AND BUILD SPIKE; NOT YET READY FOR PUBLIC DEPLOYMENT.**

架构、内容边界和 MVP 页面足以开始实现；但在公开发布前仍需：

1. 为 3 个项目和 4–6 篇文章完成 curated Markdown、source registry 和脱敏审阅。
2. 做一个 Astro build spike，验证 schema 引用、双语文章头部、项目/文章互链和静态输出。
3. 运行一次 secret/PII/rights 检查，并让不了解背景的人完成 3 分钟可理解性测试。
4. 再确认 Cloudflare Pages Free 或 GitHub Pages 的当前条款与额度，然后发布 preview；不要把平台选择变成内容模型的一部分。

## 11. Skills、限制与激活记录

已激活并应用：

- `karpathy-guidelines`：将范围压缩到本文件和架构决策；显式记录假设、边界、验收标准；不创建实现代码或额外抽象。
- `frontend-design`：从“证据链、工程判断、系统边界”提炼视觉概念，使用有意图的字体、布局和内容层次，避免通用 AI 页面默认样式。
- `design-taste-frontend`（本环境实际文件为 `taste-skill/SKILL.md`）：应用 subject-derived idea、先写内容论证、少装饰、保留真实内容密度、一个有意义的 live thing、响应式/可访问性和 look-and-fix 约束。当前只做架构，未运行其浏览器截图 inspector。

跳过/未使用：未安装任何 skill，未实现代码，未运行 Astro build、浏览器视觉 QA、链接检查脚本或部署命令。

限制：本报告依赖三份项目权威文档的现有结论；平台额度、条款、外部链接和许可证会变化，部署前必须复核。字段名和目录是建议契约，尚未由实际 Astro schema 编译验证。视觉 token 中的 `70rem` 是设计意图，实施时必须使用合法 CSS 值。

下一阶段建议：先完成 W1 + W2 的 build spike，再用 DecisionFlow Mini、AgentOps、AutoApply 三个候选项目和两篇文章验证内容契约；只有通过 public-safe、链接和可理解性检查后，才扩展到完整 MVP 内容集并部署 preview。
