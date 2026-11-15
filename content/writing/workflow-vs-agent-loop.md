---
slug: workflow-vs-agent-loop
title_zh: Workflow 与 Agent loop：不要用一个词掩盖控制权
title_en: Workflow vs agent loop: do not hide control ownership behind one word
summary_en: A practical distinction between deterministic workflows, graph runtimes, and LLM-led control policies, based on comparing real agent architectures.
kind: architecture note
date: 2026-11-15
featured: true
evidence_level: firsthand synthesis
claim_mode: interpreted
stance: The key question is not whether a system is called an agent, but who owns the next-step decision and who guarantees execution.
sources: Agent architecture comparison notes and LangGraph SDK notes.
---
## 我不把 Agent 当成标签

代码 workflow、graph runtime 和 LLM agent loop 都可以完成多步任务，但它们的控制权来源不同。代码 workflow 由 if、for、timeout 决定；graph runtime 由 state、node 和 edge 决定；LLM loop 则让模型根据上下文和工具结果选择下一步。

## 更精确的说法

当我说“LLM 主导 Agent”时，我真正想说的是：LLM 承担主要 control policy，而 code runtime 仍然负责 execution lifecycle。调用、解析、保存状态、权限、超时、重试和完成确认不能因为模型更自主就消失。

## 为什么这对调试重要

如果一个任务失败，我们需要知道是 policy 选错了、工具返回错了、状态没保存、权限不够，还是恢复逻辑缺失。没有这层拆分，所有问题都会被归因成“模型不够聪明”。

## 我的选择

我倾向于混合结构：确定性的地方用代码，真正需要开放判断的地方用模型，并且让两者之间有明确的契约。这比追求一个纯粹的“全自主 Agent”更容易解释，也更容易迁移到不同业务。
