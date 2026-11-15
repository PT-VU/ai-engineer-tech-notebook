---
slug: context-vs-workflow
title_zh: 对 Agent 来说，Context 往往比 Workflow 更接近行为的根源
title_en: For agents, context is often closer to behavior than workflow
summary_en: Why I treat context, memory, identity, and permissions as runtime foundations instead of assuming that orchestration alone explains agent behavior.
kind: architecture note
date: 2026-11-15
featured: true
evidence_level: firsthand synthesis
claim_mode: interpreted
stance: Workflow describes control flow; context shapes what the model can see and therefore what it is likely to do.
sources: Enterprise AI architecture notes and Agent runtime comparisons.
---
## 一个容易被忽视的区别

Workflow 解决的是“下一步去哪里”。Context 解决的是“这一轮模型到底看到了什么”。在传统软件里，控制流通常足以解释很多行为；在 LLM 系统里，同一个节点换一组 context，行为可能完全不同。

## 我的取向

我会先统一 context、memory、identity、permission 和 runtime contract，再讨论要不要把更多 Agent 接进 workflow。不是因为 workflow 不重要，而是因为没有共同的 context 边界，workflow 连接得越多，污染和不可解释性越容易扩散。

## 这不是“少写代码”的理由

Context 不是一个神秘的 prompt 文件。它需要 storage、retrieval、更新、权限和版本语义。把 context 当作字符串拼接，短期很快，长期会让问题无法复现。

## 我的开放问题

不同模型在同一 context 下仍然会有不同决策。工程上真正能保证的不是完全一致的输出，而是相对稳定的输入边界、工具权限、状态变化和验证路径。
