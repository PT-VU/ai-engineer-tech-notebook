---
slug: linkedin-autoapply
name: LinkedIn AutoApply
name_en: Browser automation with human boundaries
tagline_zh: 一个把浏览器自动化、岗位判断、人工接管和失败记录放在一起的开源工程实践。
status: working
period: 2026
featured: true
stack: Python · Playwright · Edge/CDP · Codex · local logs
evaluation: workflow and failure analysis documented; no public success-rate claim
public_status: public-safe summary; repository link pending verification
evidence: README、REQUIREMENTS、架构评估与公开框架说明
boundary: 登录、验证码、未知问题和未经确认的提交必须停下来交给人处理。
next_step: 在补入真实仓库链接前完成 secrets、PII、license 和第三方平台内容复核。
---
## 从自动化开始，最后落到边界

这个项目让我看到，浏览器自动化最有价值的部分不是“替人点击更多按钮”，而是把一个真实、脆弱、经常变化的外部流程拆成可以暂停、恢复和解释的阶段。

## 我的设计判断

搜索、去重、JD 提取、匹配评分和 Easy Apply 可以被 workflow 组织起来；登录、CAPTCHA、未知答案和最终提交不能被当成普通工具调用。系统应该明确知道什么时候自动化，什么时候把控制权交回人。

## 证据与限制

公开材料可以证明项目包含浏览器自动化、匹配、dry-run、日志和人工 handoff 等设计，但不能证明某个固定的外部投递成功率。真实账号、cookie、申请记录和运行数据不进入这个站点。

## 下一步

补充经过验证的公开仓库链接，并发布一篇失败模式文章，展示哪些外部网站问题无法靠“换一个 Agent loop”解决。
