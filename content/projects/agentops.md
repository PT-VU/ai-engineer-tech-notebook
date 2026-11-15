---
slug: agentops
name: AgentOps
name_en: A control plane for reliable agent execution
tagline_zh: 让 Agent 的运行状态、证据、恢复和治理成为一等对象。
status: research
period: 2026
featured: true
stack: Python · event model · observability · recovery
evaluation: architecture and workflow work in progress
public_status: curated case study
evidence: project README、architecture notes、blackboard decisions
boundary: 这是控制面与运行时思考的研究型项目，不宣称已经是完整生产平台。
next_step: 用一个最小可运行 execution trace 验证事件模型和恢复语义。
---
## 为什么需要控制面

当系统从一个 Agent 变成多个入口、多个 session、多个 provider 和多个 harness，真正难的问题不再是调用一次模型，而是知道系统现在在哪里、谁拥有控制权、正在等待什么，以及发生失败时能否恢复。

## 我的设计判断

我倾向于把 runtime state、control policy 和 execution lifecycle 分开。LLM 可以承担任务级的 control policy，但代码 runtime 必须负责状态保存、工具调用、权限检查、重试、超时和完成确认。把这几层混成一个“智能 Agent”会让故障定位变得困难。

## 证据与限制

当前材料主要是架构、事件定义和本地控制面设计，仍然属于研究和原型阶段。这里展示的是判断路径，不是成熟度背书。

## 下一步

把一次任务拆成可回放的事件序列，再用故障注入验证 checkpoint、人工接管和恢复是否真的成立。
