---
slug: decisionflow-mini
name: DecisionFlow Mini
name_en: Evidence-backed decision workflow
tagline_zh: 把证据、路由、审核和审计接成一条可追溯的决策链。
status: prototype
period: 2026
featured: true
stack: Python · FastAPI · Pydantic · SQLite · Docker
evaluation: measured in local test suite; private evaluator excluded
public_status: curated case study
evidence: README、typed contracts、测试与架构文档
boundary: 代码负责状态、权限和确定性门禁；LLM 只处理需要判断的部分。
next_step: 把公开的 synthetic trace 和评估结果整理成可复核的静态 walkthrough。
---
## 我想解决的问题

很多 Agent demo 能够生成答案，却没有把答案如何产生、依据什么、失败后怎么办说清楚。DecisionFlow Mini 的问题不是“让模型更聪明”，而是把一个决策任务放进可追踪的运行边界里。

## 我的设计判断

我把 evidence、finding、decision、response claim 和 audit event 作为一条链处理。risk、routing 和 compliance 这些不应该交给模型临场发挥的地方，由确定性代码负责。这个取向牺牲了一些看起来很自由的自治感，但换来了更容易测试和审查的系统。

## 证据与限制

项目已有 typed contracts、local queue、SQLite audit trail、human review 路由和测试。private evaluator、gold labels 和真实业务数据不属于公开仓库，因此这里不把“生产效果”写成已验证事实。

## 下一步

公开一组脱敏 synthetic trace，把一次运行中每个状态变化、人工接管点和最终结论的来源展示出来。
