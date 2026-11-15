---
slug: evaluation-reliability
title_zh: 没有评估，Agent 系统就只有故事
title_en: Without evaluation, an agent system is only a story
summary_en: Why evaluation, failure analysis, and evidence quality matter more than a polished demo when improving production-oriented agent systems.
kind: reliability note
date: 2026-11-15
featured: true
evidence_level: firsthand synthesis
claim_mode: interpreted
stance: Evaluation is not a final score; it is the feedback surface that makes architecture change responsibly.
sources: Agent evaluation research notes, DecisionFlow evaluation design, and project failure analysis.
---
## Demo 证明了什么

一个成功的 Demo 证明系统在某个输入、某个模型、某次运行里走通了。它不自动证明系统在不同输入、错误工具、权限变化、长任务和异常恢复下仍然可靠。

## 我更关注的评估对象

我会把评估拆成任务结果、证据质量、状态完整性、权限边界、失败分类和恢复能力。最终答案只是其中一层。一个答案看起来正确，但如果没有来源、没有记录中间状态、或者越过了不该越过的权限，我不会把它视为可靠。

## 个人取向

评估不是上线前的一次考试，而是系统设计的一部分。它应该告诉我：哪类输入变差了、哪个组件正在承担不该承担的责任、一次修复是否只是把失败换了位置。

## 当前限制

我现在很多材料仍然来自本地实验和设计文档，不能把它们包装成大规模线上结果。下一步需要更稳定的任务集、明确的 rubric、可重复的 trace 和对失败案例的分层统计。
