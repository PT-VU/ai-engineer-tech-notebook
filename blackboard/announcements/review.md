# MVP Review

审查范围：当前 `F:\独立项目\ai-engineer-tech-notebook` MVP，覆盖构建与 smoke check、生成页面、路由、内容字段、移动端/可访问性基本风险、敏感信息泄露和 Cloudflare Pages / GitHub Pages 发布阻塞项。

## 结论

建议：**可以作为 Cloudflare Pages 的 MVP 预发布版本，完成一次公开链接的 staging 验证后再正式发布；暂不建议直接按 GitHub Pages 的项目子路径发布。**

没有发现密钥、cookie、浏览器 profile、真实申请记录或构建产物中的本地路径泄露。当前没有阻断 Cloudflare Pages 根域名发布的硬错误，但仍有两个发布前应处理的风险：GitHub Pages 子路径兼容性，以及移动端视觉验证证据不成立。

## 已通过

- `npm run build` 通过，生成 3 个项目页、4 个文章页，共 12 个 HTML 页面和 1 个 CSS 文件。
- 按正确顺序重跑 `npm run check` 通过：12 个 HTML 页面、13 个输出文件均包含 viewport，未命中敏感模式。
- 本地预览已有服务占用 4173 端口；对首页、项目列表、3 个项目详情、文章列表、4 个文章详情、About 和缺失路径逐一请求，均能返回页面。缺失路径由本地预览脚本回退到 `404.html`。
- 所有生成页有 `lang="zh-CN"`、`title`、viewport、`header/nav/main/footer` 基本结构；页面提供跳过链接（skip link）和 `:focus-visible` 焦点样式。
- 移动端 CSS 在 800px 断点下将网格改为单列、压缩标题、重排文章侧栏和 footer，并支持 `prefers-reduced-motion`。
- 输出内容没有发现 `F:\`、`C:\Users\PT`、API key、secret、password、cookie、token 或私钥模式。需要公开的真实 GitHub、LinkedIn、CV、联系方式仍明确标记为待补入。

## 风险与阻塞项

### 1. GitHub Pages 项目子路径会破坏内部链接（中高风险）

构建脚本将导航、项目、文章和 CSS 写成 `/projects/`、`/writing/...`、`/assets/site.css` 这类根绝对路径。Cloudflare Pages 使用自定义域名或根域名时可正常工作；若仓库发布为 `https://<user>.github.io/<repo>/`，这些链接会指向域名根路径而不是仓库子路径，导致导航和样式失效。

建议在发布目标确定后增加可配置 `BASE_PATH`（或为 GitHub Pages 生成相对路径），并用实际项目 URL 进行 smoke test。若只使用 Cloudflare Pages 根域名/自定义域名，可以把该项降为非阻塞。

### 2. 移动端视觉证据无效（中风险）

`home-check.png` 与 `mobile-check.png` 的 SHA-256 完全相同，当前“mobile check”不是独立移动视口截图。因此 CSS 断点逻辑虽然存在，但尚未被真实移动视口验证。

建议在至少 390px 宽度下重新截图首页、文章页和项目页，确认导航不溢出、长标题不截断、文章侧栏顺序合理、按钮和链接可点击区域足够大。

### 3. 本地预览脚本的 404 状态码语义（低风险）

`scripts/serve.mjs` 对不存在路径回退 `404.html`，但仍发送 HTTP 200。它只影响本地预览和简单监控；Cloudflare Pages/GitHub Pages 的正式静态托管通常会按其平台规则处理 404。若继续使用该脚本做自动化检查，建议对缺失路径发送 404，或在 README 中明确这是预览脚本行为。

### 4. `npm run build` 与 `npm run check` 不能并行执行（低风险）

两者并行启动时，`check` 可能先于 build 删除/生成 `dist`，本次曾出现 `ENOENT: dist/index.html`；按顺序执行后立即通过。发布流水线应使用串行命令，例如 `npm run build; npm run check`。

### 5. 字体依赖外部 Google Fonts（低风险）

CSS 通过 `@import` 依赖 Google Fonts。网络不可用时会回退到 Georgia/Arial，页面仍可用，但截图和品牌排版会变化。若需要可复现的发布视觉，可自托管字体或接受该外部依赖并在 staging 验证。

## 内容与可访问性建议

- 中文正文、英文标题和英文摘要字段均已生成；文章页的英文摘要出现在文章头部，符合当前内容约定。
- 当前没有图片元素，因此不存在缺少 `alt` 的图片问题；后续加入截图、头像或 logo 时必须补 `alt`、版权来源和尺寸约束。
- `nav` 没有显式 `aria-label`，单一主导航场景下通常可用，但若未来加入页脚导航或多个导航区域，建议补充标签。
- 当前没有 sitemap、robots.txt、Open Graph/Twitter Card 或 canonical 元数据；它们不是 MVP 的构建阻塞项，但正式公开时建议补齐基本 SEO 和分享卡片。
- 项目页的仓库链接仍是 pending，About 页的 CV/LinkedIn/联系方式也未补入。若网站用于求职展示，这些内容是发布质量问题，建议在正式公开前完成 owner review。

## 发布建议

1. 优先使用 Cloudflare Pages 根路径做 staging：构建命令 `npm run build`，输出目录 `dist`；在真实预览 URL 检查全部导航和 404 行为。
2. 发布前重新生成真实移动视口截图，并完成个人信息、第三方平台内容、license、外链和仓库公开权限复核。
3. 如果选择 GitHub Pages 项目子路径，先实现 `BASE_PATH`/相对链接方案并在该子路径下验证；否则只建议用 GitHub Pages 自定义域名或用户根站点。

