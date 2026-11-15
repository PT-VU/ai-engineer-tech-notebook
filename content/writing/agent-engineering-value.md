---
slug: agent-engineering-value
title_zh: Agent 工程的价值，不是把每一步都交给模型
title_en: The value of agent engineering is not giving every step to the model
summary_en: A first-person argument about where agent engineers create durable value when general-purpose agents can already use tools and operate software.
kind: essay
date: 2026-11-15
featured: true
evidence_level: firsthand synthesis
claim_mode: interpreted
stance: Agent engineering is the design of boundaries, evidence, and recovery around model uncertainty.
sources: Agent architecture notes, AutoApply experience, and personal system-design notes.
---
## 先说结论

当通用 Agent 已经会调用工具、操作浏览器、修改文件时，Agent 工程师的价值不会消失，但价值的位置会移动。它不再主要是“写一个 prompt 让模型完成任务”，而是设计一个系统，让模型的能力在真实约束中可用。

## 我认为最重要的三层

第一层是任务本身：用户到底要完成什么。第二层是 runtime：状态如何保存、工具如何执行、失败如何重试、权限如何检查。第三层是 harness：系统如何把模型放进一个有上下文、有反馈、有边界的工作环境里。

我不相信只增加 Agent 数量就能自动产生更强的系统。没有清晰的状态、责任和证据，多 Agent 只是把不确定性分散到更多地方。

## 这对我的项目意味着什么

在 DecisionFlow Mini 里，我优先做 typed contract、evidence chain、human review 和 audit trail；在 AutoApply 里，我优先处理登录、验证码、未知答案和最终提交的人工边界。这些选择看起来不如“全自动”性感，却更接近我认为可迁移的 AI Engineer 能力。

## 仍然没有解决的问题

我们仍然需要更好的 evaluation 来判断一个系统是不是在真实任务上可靠，而不是只在一条成功路径上完成 Demo。我的下一步不是继续加功能，而是把失败和恢复做成可观察、可比较的对象。
