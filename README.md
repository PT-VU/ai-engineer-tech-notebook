# AI Engineer Technical Notebook

个人 AI Engineer 技术分析博客与 CV showcase。内容以中文为主；技术文章在顶部提供 English title 和 English summary，正文重点记录个人判断、系统边界、证据、失败与下一步。

## 本地运行

需要 Node.js 22+，无第三方依赖：

```powershell
npm run build
npm run check
npm run dev
```

然后打开 `http://localhost:4173/`。`npm run preview` 用于预览已生成的 `dist/`。

## 如何更新内容

- 项目：编辑 `content/projects/*.md`。
- 文章：编辑 `content/writing/*.md`。
- 文章必须保留 `title_zh`、`title_en`、`summary_en`、`evidence_level`、`claim_mode` 等字段。
- `featured: true` 的条目会出现在首页。
- 正文使用少量 Markdown：标题、段落、列表、代码块和链接。
- 构建脚本会把内容生成到 `dist/`；不要直接编辑 `dist/`。

## 发布路径

长期发布方式：将这个目录放入 GitHub public repository，然后在 Cloudflare Pages 连接仓库。构建命令为 `npm run build`，输出目录为 `dist`。GitHub Pages 也可以发布同一个 `dist/` 静态输出。

本地项目目前没有创建远程仓库、没有绑定 Cloudflare、没有购买域名，也没有部署线上站点。

## 发布前检查

```powershell
npm run build
npm run check
```

上线前还需要人工补齐：

- 真实 GitHub repository URL；
- 真实 LinkedIn / CV / 联系方式；
- DecisionFlow、AgentOps、AutoApply 的公开仓库或 demo 链接；
- 图片、logo、截图的版权与 credits；
- 每个项目的最终公开安全复核。

当前页面不包含 API key、账号、cookie、浏览器 profile、真实申请记录或 F 盘原始路径。

## 为什么没有测试框架

这是零依赖静态内容站，当前行为边界是“内容能构建、页面数量正确、页面包含 viewport、输出不出现敏感模式”。`scripts/check.mjs` 在构建后执行这些 smoke checks；真正部署前还应做浏览器路径和视觉检查。
