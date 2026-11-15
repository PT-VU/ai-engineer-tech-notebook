# Requirements Discovery — AI Engineer Technical Notebook

**Project:** F:\独立项目\ai-engineer-tech-notebook  
**Phase:** Requirements discovery  
**Date:** 2026-11-15  
**Status:** Discovery draft; architecture and implementation remain gated on owner confirmation

## 1. Executive summary

The project should become a curated public-facing AI Engineer technical notebook that also functions as a CV/portfolio landing page. Its strongest differentiator is not “many AI topics”, but a visible chain from personal reasoning to working systems, failure analysis, evaluation, and engineering trade-offs.

The recommended product direction is a static, repository-backed site with a portfolio-first homepage and a research-notebook content layer. The first release should publish a small, edited set of project case studies and technical essays, each with clear provenance and an explicit distinction between verified implementation facts, personal interpretation, and open questions.

This is a product-discovery conclusion, not an architecture decision. No Agent, RAG, CMS, dynamic backend, or multi-agent design is required to validate the product. The initial product can be delivered as a static site generated from curated Markdown.

## 2. Five-sentence understanding of the request

1. The user wants one public site that explains their AI Engineer identity through both technical writing and demonstrable projects.
2. The source material is already present on F:\ and includes Agent learning notes, architecture reasoning, personal experience, research synthesis, and open-source or portfolio projects.
3. The site must help a hiring-oriented visitor quickly understand what the user builds, how they think, and where the evidence is.
4. The site should preserve the depth of a technical notebook without exposing the entire private archive or turning the homepage into an undifferentiated document index.
5. Free-first publishing is a constraint, while the exact host, domain, analytics, language mix, and publication workflow still require owner confirmation and external landscape comparison.

## 3. Scope and evidence discipline

### 3.1 Confirmed from project context

- The project is an AI Engineer technical-analysis blog and CV showcase.
- Content should be curated from Agent thinking, technical analysis, personal experience, and open-source project material on F:\.
- A free-first static publishing path is preferred.
- Source materials must remain read-only during discovery.
- Architecture, implementation, and independent review are gated on requirements confirmation.

### 3.2 Evidence-backed observations

- The source archive contains substantial material about Agent architecture, Workflow vs Agent boundaries, memory, context engineering, tools, evaluation, safety, and multi-agent trade-offs.
- The source archive contains concrete projects rather than only study notes, including LinkedIn-AutoApply, AgentOps, DecisionFlow Mini, and an AgentFlow Control Tower portfolio concept.
- The strongest recurring narrative is “reliable AI systems require constraints, evidence, evaluation, recovery, and human responsibility”, not “add more agents”.
- Existing project documents already use static walkthroughs, GitHub repositories, Markdown, local demos, evaluation reports, and free/local-first delivery as credible portfolio surfaces.
- The materials contain private or operationally sensitive areas such as browser profiles, credentials, resumes, runtime logs, application records, and local configuration. These must not become an automatic publication source.

### 3.3 Reasonable product inferences

The following are recommendations, not confirmed owner decisions:

- Hiring managers, technical interviewers, and AI engineering peers are the primary audiences.
- The homepage should optimize for fast credibility and project discovery before deep reading.
- English should be the default public language if the site is used for international job search; selected Chinese notes can remain a later expansion.
- A curated publication workflow is safer and more valuable than publishing the source archive directly.
- The first release should emphasize a few deep case studies over a large number of shallow posts.

### 3.4 Unknown or high-risk assumptions

- Whether the owner wants the site optimized first for job conversion, technical reputation, or equal weighting.
- Whether the owner wants a personal name/identity prominently exposed or prefers a project-led identity.
- Whether the owner wants English-only, Chinese-only, or bilingual publication.
- Whether the owner owns or wants to buy a custom domain.
- Whether analytics, comments, newsletter signup, contact forms, or social links are desired.
- Which materials are safe to publish after removing personal identifiers, employer information, credentials, proprietary data, and operational traces.
- Whether the public site should link to live demos, source repositories, downloadable CV files, or only static explanations.

## 4. Product definition

### One-sentence definition

An evidence-led AI Engineer portfolio and technical notebook that turns real Agent-system experiments, projects, and engineering judgments into readable case studies for hiring and technical credibility.

### Core user promise

“In a few minutes, I can understand what this engineer builds, see how they reason about reliable AI systems, inspect evidence from real projects, and decide whether to continue to the CV, repository, or a deeper technical essay.”

### Product principles

1. Curate before publishing: the source archive is raw material, not the public information architecture.
2. Evidence over claims: link each project or technical claim to a source artifact, repository, experiment, or explicitly marked hypothesis.
3. Depth in layers: a visitor can scan a short summary, then open implementation and evaluation detail.
4. Human judgment is part of the product: architecture choices, limitations, failed approaches, and trade-offs are first-class content.
5. Free-first and reversible: avoid an MVP dependency on paid infrastructure or a hosted runtime.
6. Public-safe by construction: no credentials, cookies, browser profiles, private resumes, raw application logs, or unreviewed personal data enter the publication pipeline.

## 5. Target users and jobs to be done

| User | Primary job | Evidence they need | Recommended entry point |
|---|---|---|---|
| Hiring manager / recruiter | Decide whether the candidate is relevant enough to interview | Clear positioning, selected projects, practical outcomes, CV link | Home → Selected work → CV |
| AI/Platform engineering interviewer | Assess engineering depth and judgment | Architecture trade-offs, failure modes, evaluation, recovery, security boundaries | Home → Case study → Technical detail |
| AI Engineer / researcher peer | Explore ideas and compare implementation reasoning | Essays, research synthesis, source links, open questions | Writing / Research |
| Future self / collaborator | Recover context and continue work | Project status, decisions, provenance, links to source material | Projects / Notes |

The primary audience recommendation is hiring-oriented readers, with technical peers as a strong secondary audience. This is a decision frontier, not yet confirmed.

### Core visitor tasks

1. Understand who the author is and what type of AI systems they build or analyze.
2. Find one credible project within two navigation actions.
3. Understand the problem, system boundary, engineering choices, and outcome of that project.
4. Inspect evidence: repository, demo, evaluation, design note, or source trail.
5. Read a technical essay that demonstrates independent thinking rather than framework name-dropping.
6. Open the CV or contact/profile destination.

## 6. Content model

| Content type | Purpose | Minimum structure | Public-safety rule |
|---|---|---|---|
| Project case study | Show end-to-end engineering ability | Problem, users, constraints, design, implementation, evaluation, failures, next step | Sanitize data and operational details |
| Technical essay | Show reasoning and technical judgment | Thesis, evidence, comparison, trade-offs, conclusion, open questions | Separate fact, interpretation, and hypothesis |
| Research synthesis | Show ability to compare the field | Question, sources, convergence, disagreement, implications | Prefer primary/official sources for external claims |
| Experiment / evaluation note | Show measurable engineering practice | Hypothesis, setup, metric, result, limitation | Do not publish secrets or private datasets |
| Learning note | Capture evolving understanding | Concept, example, what changed, unresolved point | Curate; avoid publishing raw diary content by default |
| Project card | Enable fast scanning | One-line value, status, stack, evidence links | Link to a deeper case study when available |
| Profile / CV | Convert interest into a professional action | Positioning, skills, selected impact, links | Review personal details before publishing |

The public site should distinguish verified implementation facts, personal interpretation, external/research synthesis, and open questions. This distinction is already a recurring strength in the source materials and should become a visible editorial convention.

## 7. Homepage purpose and first-screen recommendation

### Recommended first-screen job

Within approximately 30 seconds, a new visitor should be able to answer:

1. Who is this person?
2. What kind of AI systems do they build or analyze?
3. What is the strongest proof that the work is real?
4. Where should I go next: project, writing, CV, or repository?

### Recommended first-screen content

1. Short identity statement: AI Engineer focused on reliable Agent systems, workflows, evaluation, and production boundaries.
2. One supporting sentence naming the distinctive angle: evidence, recovery, safety, and engineering trade-offs.
3. Two primary actions: View selected work and Open CV.
4. Three featured project cards, each with status and evidence links.
5. A small “how I think” or “current focus” strip linking to one or two essays.

The recommendation is portfolio-first with research depth immediately available. It avoids making the homepage a chronological feed or a generic “AI enthusiast” profile.

## 8. Information architecture candidates

### Candidate A — Portfolio-first

~~~text
Home
├── Selected Work
├── Writing
├── About / CV
└── Contact / Links
~~~

**Strengths:** fastest for hiring conversion; simple to build; clear project proof.  
**Risks:** may underrepresent the depth of the research notebook.

### Candidate B — Research-notebook-first

~~~text
Home
├── Topics
├── Research Notes
├── Timeline
├── Projects
└── About
~~~

**Strengths:** supports long-term knowledge growth and discovery.  
**Risks:** visitors may not quickly understand the author’s professional value; taxonomy can become a maintenance burden.

### Candidate C — Hybrid portfolio + notebook (recommended)

~~~text
Home
├── Projects
│   ├── Featured Case Studies
│   └── Project Index
├── Writing
│   ├── Technical Essays
│   ├── Research Synthesis
│   └── Experiments / Notes
├── About / CV
└── Links / Contact
~~~

**Strengths:** supports both stated goals; projects establish credibility, while writing demonstrates depth.  
**Risks:** requires editorial tagging and a clear distinction between “case study” and “note”.

Use Candidate C, but keep MVP navigation shallow: Home, Projects, Writing, About / CV. Do not expose a full source-folder mirror or an overly granular topic taxonomy in the first release.

## 9. Minimum viable version

The MVP should prove that the site can convert real source material into a credible public narrative.

### Recommended MVP contents

- One responsive static homepage.
- One profile/About/CV page.
- Three selected project case studies, recommended candidates:
  - LinkedIn-AutoApply: practical browser automation and AI-assisted workflow boundaries.
  - AgentOps: observability, evidence, recovery, and governance for an AI execution plane.
  - DecisionFlow Mini or AgentFlow Control Tower: typed workflow, human review, auditability, and evaluation.
- Four to six edited technical essays or research notes.
- Project/status labels such as working, prototype, research, archived.
- Source/evidence links for every public project or claim cluster.
- A visible CV and repository link.
- A buildable local/repository workflow with no required runtime database or LLM API.
- A publication checklist covering privacy, provenance, links, and factual status.

### Explicitly not required for MVP

- Search, comments, newsletter, user accounts, personalized recommendations, or a dynamic dashboard.
- An embedded AI chat assistant.
- Automatic ingestion or automatic publication from F:\.
- A vector database, RAG pipeline, multi-agent content editor, or long-term memory system.
- A CMS or admin panel unless Markdown editing is later proven to be a bottleneck.

## 10. Free-first constraints

- The public site should be statically buildable and deployable without a paid backend.
- Content should remain portable in a Git repository and readable as Markdown or plain text.
- Local preview and CI build should not require proprietary software or a paid API.
- Runtime model calls must not be a prerequisite for visitors to read the site.
- Optional automation for summarization, tagging, or link checking must be replaceable by a deterministic or manual step.
- The deployment plan must have a clear exit path: exportable files, repository ownership, and no vendor-only content store.

### Deployment choices still open

The exact free host should be selected only after the external landscape comparison and owner confirmation. Candidates to compare include a repository-native static host, a free static deployment platform, and a self-managed local-to-public workflow. The comparison must cover custom domain support, build limits, preview deployments, redirect/headers support, analytics, privacy, portability, and account/region constraints.

## 11. Design-tree decision frontier

The following questions are reachable now. The recommendation is explicit, but each item remains an owner decision.

### Round 1 — Product identity and publication boundary

#### Q1 — What is the primary job of the site?

Should the site optimize first for converting hiring interest into a CV/interview conversation, while still supporting a serious technical notebook?

**Recommended:** Yes. Use a portfolio-first homepage and make the research notebook the depth layer.

#### Q2 — Who is the primary audience?

Should hiring managers, recruiters, and AI engineering interviewers be the primary audience, with technical peers as a secondary audience?

**Recommended:** Yes. This gives the homepage a clear decision target without excluding peer readers.

#### Q3 — What is the public language policy?

Should the MVP be English-first, with Chinese material selectively translated or added later rather than requiring a full bilingual site from day one?

**Recommended:** Yes, if international AI Engineer roles remain a target. Keep source notes in their original language during curation.

#### Q4 — What may be published from the source archive?

Should publication be curated and explicit, with no automatic publication of files from F:\ and no public exposure of raw personal, operational, credential, browser, or application data?

**Recommended:** Yes. Every public item should pass an owner review and a privacy/provenance checklist.

#### Q5 — What is the identity strategy?

Should the site be explicitly personal and CV-linked, rather than an anonymous topic publication or a generic Agent knowledge base?

**Recommended:** Yes. The author’s judgment and project ownership are part of the value proposition.

### Round 2 — Content and delivery choices, unlocked after Round 1

#### Q6 — What is the source of truth for published content?

Should curated Markdown in the project repository be the source of truth, with generated pages as build artifacts?

**Recommended:** Yes. It is free-first, portable, reviewable, and consistent with the existing materials.

#### Q7 — What should be the MVP navigation?

Should the MVP use four top-level destinations: Home, Projects, Writing, and About / CV?

**Recommended:** Yes. Defer separate Research, Timeline, and Topics navigation until content volume justifies them.

#### Q8 — What evidence should project pages expose?

Should every featured project expose at least one of: repository, demo, evaluation result, design note, or clearly marked implementation status?

**Recommended:** Yes. If no evidence is publishable, label the item as an idea or omit it from featured work.

#### Q9 — What is the deployment baseline?

Should the first release be a public static deployment with no server-side runtime dependency?

**Recommended:** Yes. Choose the provider only after the external comparison and owner review.

#### Q10 — Are analytics and contact mechanisms needed in MVP?

Should the MVP defer invasive analytics, comments, newsletter signup, and contact-form infrastructure, using simple public links first?

**Recommended:** Yes. Add only if there is a concrete conversion or learning goal and a privacy decision.

## 12. Success criteria

### Product acceptance criteria

1. A first-time hiring-oriented visitor can identify the author’s role, focus, and next action from the homepage without reading a long essay.
2. A visitor can reach a featured project within two navigation actions.
3. Each featured project states its problem, contribution, status, and evidence links.
4. At least one project demonstrates a real engineering trade-off or failure mode, not only a feature list.
5. Every published technical claim is marked or supported as fact, personal interpretation, external synthesis, or open question.
6. The site is usable on desktop and mobile and can be built from a clean checkout.
7. No secrets, cookies, browser profiles, credentials, raw private resumes, private employer data, or unreviewed operational logs are included.
8. The owner can remove or update a post without changing the site’s underlying architecture.
9. The site can be migrated to another static host using repository content and documented build steps.

### Suggested early measurement

These are measurement proposals, not existing baselines:

- Five-second comprehension test: can a reviewer state the author’s focus after viewing the first screen?
- Project discovery test: can a reviewer find a selected project in two actions?
- Evidence test: can a reviewer identify the repository/demo/evaluation link for each featured project?
- Editorial integrity audit: zero secret or private-artifact leaks in the publication set.
- Build reproducibility: clean checkout produces the expected page set without a paid runtime service.
- Human review score: independent reviewers rate clarity, credibility, and technical depth against a small rubric.

## 13. Risks and mitigations

| Risk | Why it matters | Mitigation |
|---|---|---|
| Archive sprawl | The site becomes a dump of notes and loses a clear story | Curate a small featured set; keep an unpublished backlog |
| Ambiguous audience | Homepage tries to serve recruiters, researchers, and learners equally | Confirm primary audience and optimize first-screen copy for it |
| Privacy leakage | Source folders include credentials, profiles, resumes, logs, or personal records | Explicit allowlist publication; denylist sensitive classes; owner review |
| Overclaiming Agent capability | Projects may be described as autonomous Agents when they are workflows | Preserve the existing Workflow vs Agent distinction and state boundaries plainly |
| Stale technical claims | Framework and provider details change quickly | Timestamp research notes; separate current fact from historical observation |
| Case-study weakness | Project pages list stacks without showing decisions or outcomes | Require problem, constraints, trade-offs, evidence, and limitation sections |
| Bilingual scope explosion | Full translation doubles editorial and QA cost | English-first MVP or a small bilingual subset only |
| Free-host lock-in | A free platform may impose limits or account constraints | Keep repository as source of truth and document export/migration |
| Visual over-engineering | Time is spent on animation instead of evidence and content | Use a restrained visual system and validate content first |
| Unclear update workflow | New notes accumulate but never become publishable | Define a draft → review → publish checklist and status labels |

## 14. Explicit non-goals

- Building a general Agent framework or multi-agent content-production system.
- Automatically crawling or publishing the entire F:\ archive.
- Publishing private resumes, browser state, credentials, cookies, employer-confidential information, raw application records, or unredacted logs.
- Creating a dynamic social network, comments platform, newsletter system, or membership product.
- Adding a chatbot merely because the site is about AI.
- Making technical claims that cannot be tied to a source, experiment, implementation, or clearly marked hypothesis.
- Maintaining a backend database solely for content that can be represented as versioned Markdown.
- Selecting a paid deployment provider before the free-first comparison and owner decision.
- Treating a visual theme, framework, or hosting provider as a confirmed product requirement.

## 15. Readiness assessment

### Current status: Partially ready — not yet ready for architecture

#### Ready / sufficiently clear

- Product category: public AI Engineer technical notebook + CV showcase.
- Source-material families and major evidence themes.
- Free-first static direction as the leading hypothesis.
- Need for curated, evidence-led publication.
- Candidate projects and content types.
- Clear non-goals around automatic archive publication and sensitive data.
- Initial measurable acceptance criteria.

#### Still blocking architecture and implementation

- Owner confirmation of the Round 1 decision frontier: primary job, audience, language, publication boundary, and identity strategy.
- Owner confirmation that repository Markdown is acceptable as the publication source of truth.
- External landscape comparison of free static hosting/build options.
- Review-role mapping and independent review gate referenced by the project-start announcement.
- Final allowlist of public projects and artifacts after privacy/proprietary-data review.

#### Readiness gate

Proceed to architecture only when:

1. Q1–Q5 are answered or explicitly accepted with the recommendations above.
2. Q6–Q10 have a confirmed MVP direction or are recorded as deferred decisions.
3. The first public content set has named owners/status and an evidence link for each item.
4. The free-first deployment comparison is available.
5. An independent reviewer is assigned and the review scope is explicit.

## 16. Evidence index

The following paths were used as evidence or context. Their full content is not copied into this report.

| Source path | Evidence used |
|---|---|
| F:\独立项目\ai-engineer-tech-notebook\blackboard\announcements\0001-project-started.md | Authoritative scope, free-first static preference, discovery and review gates |
| F:\Agent学习\Agent工程的价值与定位——从通用Agent到框架设计的思考.md | Personal thesis on Agent engineering value, levels of work, LinkedIn-AutoApply evidence, and design judgment |
| F:\Agent学习\project_ai_pulse.md | Technical-notebook narrative, information lifecycle, progressive evolution, evaluation, and interview value |
| F:\Agent学习\agent_knowledge_framework_review.md | Knowledge map covering Workflow vs Agent, memory, context, tools, evaluation, safety, and production gaps |
| F:\手搓agent\Agent架构对比.md | Comparative framing of Agent frameworks and architecture trade-offs |
| F:\手搓agent\openai_sdk\OPENAI_AGENT_SDK_NOTES.md | Notes on structured Agent runtime and tool/handoff concepts; source evidence, not a product decision |
| F:\手搓agent\langgtaph_sdk\LANGGRAPH_SDK_NOTES.md | Notes on graph workflows, persistence, and human interruption; technical themes for possible essays |
| F:\个人经验池\Agent architect.md | Enterprise AI architecture perspective: context, memory, identity, permissions, governance, and avoiding premature coupling |
| F:\个人经验池\思考日志.md | Personal reasoning and evolving questions; supports an edited thinking content type, not automatic publication |
| F:\个人经验池\Tong_Pei_职业背景与规划画像.md | Career/profile context used to infer the CV-showcase audience and positioning needs |
| F:\个人经验池\求职项目\Tong_Pei_求职作品集项目_AgentFlow_Control_Tower.md | Portfolio project framing and evidence-led project presentation pattern |
| F:\个人经验池\求职项目\Decision MVP\开发文件\DecisionFlow_Mini_项目决策与待确认问题.md | Static HTML walkthrough, GitHub-first presentation, local-first runtime, gold-label evaluation, staged deployment |
| F:\独立项目\AgentOps\README.md | Existing project identity and control-plane positioning |
| F:\独立项目\AgentOps\docs\architecture.md | Evidence, event, recovery, and governance themes suitable for a case study |
| F:\独立项目\AgentOps\blackboard\messages\requirements-discovery.md | Existing requirements-discovery practice and explicit separation of facts, evidence, decisions, recovery, and non-goals |
| F:\综述\Agent总览.md | Broad Agent topic landscape and likely content taxonomy |
| F:\综述\agent综述\synthesis\master-blueprint.md | Synthesis themes for planning, tools, evaluation, safety, memory, and orchestration |
| F:\综述\agent综述\synthesis\open-questions.md | Open research questions and the case for presenting uncertainty explicitly |
| F:\LinkedIn-AutoApply\README.md | Concrete project workflow, repository structure, dry-run behavior, human handoff, and evidence surfaces |
| F:\LinkedIn-AutoApply\REQUIREMENTS.md | Original user problem, feature scope, MVP boundaries, and project configuration decisions |
| F:\LinkedIn-AutoApply\agent_architecture_evaluation.md | Evidence that the project is best described as an Agentic Workflow with explicit reliability and evaluation gaps |

## 17. Skills, limitations, and next-stage recommendation

### Skills activated

- **grilling:** used the design-tree/frontier method to separate facts that can be inspected from product decisions requiring owner confirmation, and to provide a recommendation for each reachable question.
- **karpathy-guidelines:** used explicit assumptions, minimum-scope reasoning, surgical file scope, and verifiable acceptance criteria. No architecture or implementation was started.

### Skills skipped

- No frontend, Sites, architecture, implementation, or deployment skill was activated because this task was limited to requirements discovery.
- No external research conclusion is asserted here; the project announcement assigns free-host/build-path comparison to a separate research role.

### Limitations

- This report is based on permitted local source materials and project context; it does not decide what the owner is willing to publish.
- Source-folder presence is evidence that material exists, not evidence that it is public-safe, current, or complete.
- The report does not validate external hosting prices, free-tier limits, domain availability, or provider policy.
- The report does not inspect or reproduce sensitive runtime state, credentials, cookies, browser profiles, .env, key, or PEM files.

### Next stage

The next step is a short owner decision round for Q1–Q5, followed by the external free-host comparison and an independent review of the proposed first public content set. Only then should the project enter architecture selection and implementation planning.

