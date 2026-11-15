# 个人博客 / CV Showcase 公开发布路径研究

> 研究日期：2026-11-15  
> 研究目的：研究一个没有现成网站的个人，如何从 0 建立可公开访问、可持续更新、免费优先且可迁移的技术博客 / CV showcase。  
> 研究对象：GitHub Pages、Cloudflare Pages、Vercel Hobby、Netlify Free、Hashnode、Medium、Substack、Notion Sites、GitBook、Codex Sites。  
> 证据规则：平台能力、价格、URL、限制和发布步骤只采用官方文档、官方帮助中心、官方定价页或官方产品说明；上线耗时和适配判断属于本报告的工程估计或推断。

## 1. 结论先行

### 明确排序

#### 最适合现在直接上线：Hashnode Free

原因：不需要先搭建网站或构建链，官方产品页说明可以免费开始、获得 `*.hashnode.dev` 地址、使用 Markdown 编辑器、发布 unlimited posts，并可导出 Markdown。它最适合今天就把第一篇中文技术文章、英文摘要、项目链接和个人介绍公开出去。[Hashnode 官方产品页](https://hashnode.com/)

代价：免费层不提供自定义域名、headless GraphQL API 和 GitHub backup；这些能力在 Hashnode Pro 中。它更像“博客平台”，不是完全由你控制的个人主页。

#### 最适合长期维护：GitHub repository + Astro/Eleventy + Cloudflare Pages 或 GitHub Pages

更具体地说：

```text
GitHub repository = 内容、版本、代码和 ownership 的 canonical source
Astro / Eleventy = 静态生成器
Cloudflare Pages = 更强的免费预览和构建体验
GitHub Pages = 更透明、更低平台耦合的备用发布目标
```

GitHub Pages 官方支持从仓库发布静态文件，也支持使用 GitHub Actions 构建任意静态站点生成器；Cloudflare Pages 官方支持连接 GitHub 仓库、按 push 自动部署、生成分支和 PR 预览。[GitHub Pages 创建站点](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)；[GitHub Pages 自定义 workflow](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows)；[Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)

这条路径最适合你的目标：中文技术文章、双语摘要、个人判断、项目案例、CV、GitHub 链接、持续更新和未来迁移。

#### 最省事但牺牲控制力：Notion Sites

Notion 官方支持把页面发布成站点，发布后内容修改会自动更新；可以 claim 一个 `notion.site` domain，也可以开启搜索引擎索引。免费或低门槛，但自定义域名、SEO、主题和更强的品牌控制需要付费计划或 add-on。[Notion Sites 官方帮助](https://www.notion.com/help/public-pages-and-web-publishing)；[Notion pricing](https://www.notion.com/pricing)

它适合快速做临时 portfolio、学习主页或内部/半公开知识页，不适合作为你长期的工程能力证明主站，除非你明确接受 Notion 的页面结构和视觉限制。

### 总体建议

最实际的策略不是在平台之间做一次性押注，而是分两层：

```text
今天：Hashnode Free 公开第一批文章，获得可分享 URL
并行：GitHub 保存 canonical Markdown / CV / 项目链接
中期：Astro/Eleventy 静态站部署到 Cloudflare Pages 或 GitHub Pages
```

这样可以先获得公开写作反馈，又不会把长期内容锁在博客平台里。

## 2. 从 0 建站需要哪些实际步骤

无论选择哪个方案，都可以拆成六个动作：

```text
1. 准备公开内容
2. 选择内容存放位置
3. 生成或编辑网页
4. 获得默认公开 URL
5. 配置自动更新和自定义域名
6. 建立备份、迁移和内容治理
```

### 2.1 内容放在哪里

| 方案 | 内容的主要位置 | 你是否拥有一个独立 canonical copy |
|---|---|---|
| GitHub Pages / Cloudflare / Vercel / Netlify | GitHub repository 中的 Markdown、HTML、CSS、JS 和 assets | 是，最强 |
| Hashnode | Hashnode publication；可导出 Markdown，需自行保留 master copy | 部分是，建议另存 GitHub |
| Medium | Medium profile/publication；可导出 HTML zip | 部分是，建议另存原始 Markdown |
| Substack | Substack publication；官方支持导出 posts/subscribers/stats | 部分是，但建议另存文章源文件 |
| Notion Sites | Notion page/database；可导出 Markdown/HTML/CSV | 部分是，导出不能一键重建 workspace |
| GitBook | GitBook space，或通过 Git Sync 与 GitHub/GitLab 双向同步 | 可以较强，取决于是否使用 Git Sync |
| Codex Sites | Sites 的托管项目、源代码和站点数据；官方建议通过 Codex 导出 source code | 需要主动导出，数据库和上传文件不能通过内置机制完整打包恢复 |

### 2.2 网页如何生成

三种基本模式：

1. **平台编辑器直接生成**：Hashnode、Medium、Substack、Notion、GitBook。技术门槛最低，内容和呈现绑定在平台中。
2. **静态生成器构建**：Astro、Eleventy、Jekyll 或纯 HTML/CSS/JS。内容在 Git 中，构建后输出静态 HTML。
3. **托管应用生成**：Codex Sites。由产品生成和托管交互式网站或轻量应用，适合快速产出，但不是传统 Git-based blog 的同义替代。

### 2.3 URL 从哪里来

默认 URL 模板如下：

| 方案 | 默认公开 URL |
|---|---|
| GitHub Pages user site | `https://<username>.github.io/` |
| GitHub Pages project site | `https://<username>.github.io/<repository>/` |
| Cloudflare Pages | `https://<project>.pages.dev/` |
| Vercel | `https://<project>.vercel.app/` |
| Netlify | `https://<site>.netlify.app/` |
| Hashnode | `https://<name>.hashnode.dev/` |
| Medium profile | `https://medium.com/@<username>` |
| Medium publication | `https://medium.com/<publication-name>` |
| Substack profile/publication | `https://substack.com/@<handle>` 或 `https://<handle>.substack.com/` |
| Notion Sites | `https://notion.site/<slug>` 或账户生成的 Notion Sites 地址 |
| GitBook | `https://<organization-name>.gitbook.io/<site-title>` |
| Codex Sites | 部署后由 Sites 提供托管 URL；官方说明个人账户默认 URL 可能使用随机标识符 |

URL 模板和限制来源：

- [GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)
- [GitHub Pages automatic deployment](https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically)
- [Cloudflare Pages Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)
- [Hashnode Terms of Use](https://hashnode.com/terms)
- [Medium publication guide](https://help.medium.com/hc/en-us/articles/115004681607-Getting-started-with-a-Medium-publication)
- [Substack publishing guide](https://support.substack.com/hc/en-us/articles/29152946791188-How-can-I-publish-on-Substack)
- [Notion Sites](https://www.notion.com/help/public-pages-and-web-publishing)
- [GitBook quickstart](https://gitbook.com/docs/getting-started/quickstart)
- [OpenAI: Creating and using ChatGPT Sites](https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites)

### 2.4 如何更新

- Git-based 静态站：修改 Markdown 或代码，提交并 push；GitHub Actions、Cloudflare、Vercel 或 Netlify 自动构建和部署。
- Hashnode：在编辑器中修改并发布；官方也提供 CLI，但当前 CLI/API 发布需要 Pro publication。[Hashnode CLI](https://hashnode.com/blog/hashnode-cli)
- Medium：Web 或移动端编辑器修改；已发布文章保存后立即对读者可见。[Medium create/edit story](https://help.medium.com/hc/en-us/articles/214874698-Create-edit-or-delete-a-story)
- Substack：在 publisher dashboard 中管理草稿、发布文章、订阅者和统计。[Substack publishing guide](https://support.substack.com/hc/en-us/articles/29152946791188-How-can-I-publish-on-Substack)
- Notion Sites：直接修改已发布页面，官方说明页面内容变化会自动更新站点。[Notion Sites](https://www.notion.com/help/public-pages-and-web-publishing)
- GitBook：可用 visual editor 或 Git Sync；Git Sync 支持 GitHub/GitLab 与 GitBook 双向同步。[GitBook Git Sync](https://www.gitbook.com/features/git-sync)
- Codex Sites：编辑后先预览，保存版本，再发布；官方建议在发布前 review，发布会生成 production URL。[OpenAI ChatGPT Sites](https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites)

## 3. 方案逐项比较

上线耗时是本报告的粗略工程估计，假设已有账号、没有复杂视觉设计，且内容先准备 1 个首页 + 1 个 CV + 1 篇文章。

### 3.1 GitHub Pages + Markdown / 静态网页

**默认 URL**

- user site：`https://<username>.github.io/`
- project site：`https://<username>.github.io/<repository>/`

**实际发布步骤**

1. 创建 `username.github.io` 仓库，或使用普通项目仓库。
2. 放入静态 HTML/CSS/JS，或准备 Astro/Eleventy 的源文件。
3. 在仓库 Settings → Pages 设置 publishing source。
4. 如果使用非 Jekyll 生成器，配置 GitHub Actions 构建并上传 Pages artifact。
5. push 到生产分支，等待 workflow 完成，打开 Pages URL。
6. 如果要用自己的域名，在 Pages 设置中配置 custom domain，并按 GitHub 官方说明完成 DNS。

GitHub 官方明确说明 Pages 可以展示开源项目、博客或简历；GitHub Free 对公共仓库可用；非 Jekyll 静态生成器可以用 Actions 构建发布。[GitHub Pages quickstart](https://docs.github.com/en/pages/quickstart)；[Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)

**维护方式**

- 内容和代码都在 GitHub。
- 每次 push 自动构建。
- 通过 pull request 或本地 preview 审阅。
- 需要自己维护 schema、链接检查、图片压缩和 SEO metadata。

**评估**

- 上线耗时：**半天到 1 天**，取决于是否使用静态生成器。
- 技术门槛：**中等**；纯 HTML 低，Astro/Eleventy + Actions 中等。
- 中文支持：**高**；托管静态文件不限制内容语言，字体和页面编码由你控制。
- CV 展示强度：**很高**；可以设计项目页、timeline、下载 CV 和 GitHub links。
- SEO / 搜索：**可控但需要自己配置** title、description、sitemap、RSS、Open Graph 和结构化数据。
- 平台限制：GitHub 官方列出源仓库建议不超过 1 GB、发布站点不超过 1 GB、部署 10 分钟超时、100 GB/月软带宽限制、10 builds/hour 软限制；GitHub Pages 不适合作为商业交易或 SaaS 托管。[GitHub Pages limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)
- 迁移难度：**最低**。构建输出是标准静态文件，源代码和内容在 Git 中。
- 适合：长期 CV showcase、开源项目、技术博客、研究笔记。
- 不适合：需要数据库、登录、在线评论或动态 API 的产品站。

### 3.2 Cloudflare Pages + GitHub repository

**默认 URL**

`https://<project>.pages.dev/`

**实际发布步骤**

1. 把静态网站源代码推到 GitHub。
2. Cloudflare Dashboard → Workers & Pages → Create application → Pages → Connect to Git。
3. 授权 GitHub，选择 repository 和 production branch。
4. 填写 build command 和 output directory，例如 Astro 的静态构建输出目录。
5. 保存并部署；后续 branch push 会自动构建，分支和 PR 可以得到 preview URL。
6. 在 Pages → Custom domains → Set up a domain 添加 apex domain 或 subdomain。
7. apex domain 需要将 nameservers 指向 Cloudflare；subdomain 通常配置 CNAME 指向 `<project>.pages.dev`，并且必须先在 Pages 控制台关联 custom domain。[Cloudflare custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)

**维护方式**

- GitHub 是 source of truth。
- Cloudflare 自动 build/deploy。
- PR preview 允许发布前检查。
- 可以关闭自动 production deployment，改用手动或 CI 控制。[Cloudflare Git integration](https://developers.cloudflare.com/pages/configuration/git-integration/)

**评估**

- 上线耗时：**半天到 1 天**。
- 技术门槛：**中等**；首次需要理解 build command、output directory 和 DNS。
- 中文支持：**高**，同样由生成的 HTML 和字体控制。
- CV 展示强度：**很高**。
- SEO / 搜索：**高可控**，但 metadata、sitemap、RSS 仍由站点自己生成。
- 免费层：官方限制页列出 Free 为每次 1 个并发 build、每月 500 builds、单项目 20,000 个文件、单文件 25 MiB、每账户 100 个 Pages projects；预览部署可以无限保留。[Cloudflare Pages limits](https://developers.cloudflare.com/pages/platform/limits/)
- 迁移难度：**低**，只要不依赖 Pages Functions、Workers、KV、R2 等 Cloudflare 专属能力。
- 适合：长期维护、需要 PR preview、未来可能有轻量边缘能力的静态站。
- 不适合：希望完全不接触 DNS / build configuration 的用户。

### 3.3 Vercel Hobby

**默认 URL**

`https://<project>.vercel.app/`

**实际发布步骤**

1. 把站点代码放入 GitHub/GitLab/Bitbucket/Azure DevOps repository。
2. Vercel Dashboard → New Project → Import Git Repository。
3. 选择 framework preset、root directory、build output 和 environment variables。
4. 点击 Deploy，Vercel 生成 deployment URL。
5. 后续每次 commit 或 PR 都可以触发 production 或 preview deployment。
6. Project Settings → Domains → 添加自己的 domain，并按页面提示设置 DNS。[Vercel Git deployment](https://vercel.com/docs/git)；[Vercel custom domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain)

**评估**

- 上线耗时：**1–3 小时**，如果使用成熟模板；自己配置 Astro/静态站通常半天内。
- 技术门槛：**低到中等**。
- 中文支持：**高**。
- CV 展示强度：**很高**。
- SEO / 搜索：**高可控**。
- 免费层：官方 Hobby 页面列出 100 GB fast data transfer、1M CDN requests、1M function invocations 等额度；超限通常会进入等待或暂停周期。[Vercel Hobby Plan](https://vercel.com/docs/plans/hobby)
- 关键限制：Vercel Terms 明确 Hobby 只允许 personal or non-commercial use；Vercel limits 还说明 Hobby team 不能连接 Git organization-owned repositories。[Vercel Terms](https://vercel.com/legal/terms)；[Vercel limits](https://vercel.com/docs/limits)
- 迁移难度：**低到中等**；静态输出容易迁移，Vercel Functions、Analytics、Blob 等会增加锁定。
- 适合：个人、非商业、重视 preview 和前端 DX 的 portfolio。
- 不适合：未来要做商业咨询、产品推广、客户服务或组织级站点，除非转 Pro/Enterprise。

### 3.4 Netlify Free

**默认 URL**

`https://<site-name>.netlify.app/`

**实际发布步骤**

1. 创建 GitHub/GitLab/Bitbucket/Azure DevOps repository。
2. Netlify Dashboard → Add new project → Import an existing project。
3. 授权 Git provider，选择 repository。
4. 设置 build command 和 publish directory，或使用框架自动检测。
5. 点击 Publish，得到 `.netlify.app` URL。
6. Domain management → Production domains → Add a domain，连接已购买的 domain；按官方向导配置 Netlify DNS 或外部 DNS。[Netlify deploy from repository](https://docs.netlify.com/start/quickstarts/deploy-from-repository/)；[Netlify custom domains](https://docs.netlify.com/domains-https/custom-domains/)

**评估**

- 上线耗时：**1–3 小时**。
- 技术门槛：**低到中等**。
- 中文支持：**高**。
- CV 展示强度：**高**。
- SEO / 搜索：**高可控**。
- 免费层：官方定价页列出 $0、custom domains with SSL、unlimited deploy previews 和 300 credits/month；新 credit-based 账户的项目默认 private，免费计划有 hard monthly limits，达到额度会暂停项目。[Netlify pricing](https://www.netlify.com/pricing/)
- 迁移难度：**低到中等**；静态输出容易迁移，Netlify Functions/Blob/Database 会提高锁定。
- 适合：需要简单 Git deploy、preview 和 custom domain 的个人站。
- 不适合：无法接受 credit 计量或项目因超额暂停的公开站点。

### 3.5 Hashnode

**默认 URL**

`https://<name>.hashnode.dev/`

**实际发布步骤**

1. 注册 Hashnode 账户。
2. 创建 publication，选择名称、handle、主题和基本资料。
3. 在 Markdown editor 中创建文章。
4. 添加中文标题、英文标题或英文摘要、tags、封面图、GitHub 和 LinkedIn 链接。
5. 预览并 Publish，文章和 publication 立即拥有公开 URL。
6. 需要自己的 domain 时升级 Pro，并在 publication 设置中配置 domain 和 DNS；官方 Terms 说明默认 publication 有免费 `hashnode.dev` subdomain，custom domain 由你负责注册和 DNS 维护。[Hashnode Terms](https://hashnode.com/terms)

**评估**

- 上线耗时：**15–60 分钟**。
- 技术门槛：**最低**。
- 中文支持：**可用**；平台是 Markdown / Web editor，Unicode 内容可以发布；官方没有承诺中文搜索筛选能力，因此不能把中文 SEO 结果当成保证。
- CV 展示强度：**中等**；可以做 profile、pages、series 和 projects links，但自由布局不如自建静态站。
- SEO / 搜索：**中高**；官方产品页列出 sitemap、RSS、JSON-LD、social cards 和 built-in analytics；但平台 feed、站内推荐和 URL 结构仍由 Hashnode 控制。[Hashnode official product page](https://hashnode.com/)
- 免费层：官方产品页列出 $0、unlimited posts、Markdown editor、comments、series、analytics 和 `hashnode.dev` hosted blog。
- 付费边界：Hashnode Pro 官方页面列出 custom domain、GraphQL API、headless mode、GitHub backup、bulk Markdown import、scheduled publishing 和 no branding，价格页面当前列出 $5/month 或 $50/year。[Hashnode Pro](https://hashnode.com/pro)
- 迁移难度：**中低**；官方说明 posts 可导出 Markdown，但主题、评论、平台 analytics 和页面结构需要重建。
- 适合：今天就开始公开技术写作，积累文章和搜索入口。
- 不适合：把 CV、复杂项目图、完整设计系统和所有内容控制都放在同一平台。

### 3.6 Medium

**默认 URL**

- profile：`https://medium.com/@<username>`
- publication：`https://medium.com/<publication-name>`

**实际发布步骤**

1. 注册 Medium account。
2. 点击 Write，创建 draft。
3. 添加 title、subtitle、正文、图片、code block、topics。
4. Publish；文章进入公开 profile，并可能进入 followers 的 feed 和 Medium distribution。
5. 如果要 publication，进入 Settings → Publishing → Manage publications → Create a new publication；官方说明创建 publication 需要 active membership subscription。[Medium first story](https://help.medium.com/hc/en-us/articles/225168768-Writing-and-publishing-your-first-story)；[Medium publication](https://help.medium.com/hc/en-us/articles/115004681607-Getting-started-with-a-Medium-publication)
6. 自定义域名需要 active Medium membership、自己拥有 domain，并配置 A records；Medium 目前不支持 Google Analytics 或其他第三方脚本。[Medium custom domain](https://help.medium.com/hc/en-us/articles/115003053487-Setting-up-a-custom-domain-for-your-profile-or-publication)

**评估**

- 上线耗时：**15–60 分钟**。
- 技术门槛：**最低**。
- 中文支持：**可以发布中文**；官方说明 Medium 界面为英文、没有按语言筛选内容，但作者可以用任意语言写作。[Medium language availability](https://help.medium.com/hc/en-us/articles/360035241933-About-language-availability-on-Medium)
- CV 展示强度：**低到中等**；profile/publication 更像文章集合，不能很好表达项目架构、实验数据和完整 CV。
- SEO / 搜索：**中高**；Medium 有自身 distribution 和 publication search，但个人无法完全控制 metadata、脚本和站点结构。
- 免费层：免费账户可以阅读和写作；但 publication 创建和 custom domain 需要 active membership。[Medium using Medium](https://help.medium.com/hc/en-us/articles/225168028-Using-Medium)
- 迁移：官方支持将个人数据和 stories 导出为 HTML zip；API 不再发放新的 integration tokens。[Medium export](https://help.medium.com/hc/en-us/articles/115004745787-Export-your-account-data)；[Medium API/importing](https://help.medium.com/hc/en-us/articles/213480228-API-Importing)
- 适合：扩大文章分发、建立写作者 profile、把文章作为外部渠道。
- 不适合：作为个人 AI Engineer 的唯一 home page 或 CV showcase。

### 3.7 Substack

**默认 URL**

- profile：`https://substack.com/@<handle>`
- publication：`https://<handle>.substack.com/`

**实际发布步骤**

1. 注册 Substack，选择 handle。
2. 创建 publication 或使用 profile mode。
3. Publisher dashboard → Create → Article。
4. 写作、预览、选择是否发送给 subscribers，然后发布或 schedule。
5. 设置 profile、sections、logo、navigation、social links 和 welcome page。
6. 自定义域名：Settings → Domain → Add custom domain，支付一次性 $50，配置 CNAME；官方说明 Substack 建议使用 `www` subdomain，root domain 可做 redirect。[Substack publishing](https://support.substack.com/hc/en-us/articles/29152946791188-How-can-I-publish-on-Substack)；[Substack custom domain](https://support.substack.com/hc/en-us/articles/360051222571-How-do-I-set-up-my-custom-domain-on-Substack)

**评估**

- 上线耗时：**30–90 分钟**。
- 技术门槛：**低**。
- 中文支持：**可用**；官方产品说明包含 multi-language support，但具体发现和 SEO 表现仍取决于文章语言和平台分发。[Substack features](https://substack.com/features)
- CV 展示强度：**中等**；可以有主页、sections、链接和简介，但核心模型是 newsletter / publication，而不是工程 portfolio。
- SEO / 搜索：**中高**；Substack 有站内 network、recommendations、Notes、search 和邮件分发，但你对 HTML、脚本和页面结构的控制有限。
- 免费层：官方产品页列出 free to start、no upfront costs、unlimited subscribers；付费订阅收入产生时平台收取 revenue share。[Substack features](https://substack.com/features)
- 迁移：**中低**；官方列出 posts、subscriber list、stats 的导出，以及从多种平台导入。[Substack features](https://substack.com/features)
- 适合：长期写作、newsletter、读者关系、定期发送双语技术文章。
- 不适合：作为唯一 CV showcase；它会把你的定位推向 writer/newsletter creator，而不是系统工程 portfolio。

### 3.8 Notion Sites

**默认 URL**

Notion 官方说明可以 claim one `notion.site` domain，具体 page 使用 slug；也可以使用账户生成的 Notion Sites URL。

**实际发布步骤**

1. 在 Notion 建立根页面。
2. 组织子页面：About、CV、Projects、Research、Notes。
3. 打开 Share → Publish → Publish。
4. 点击 View site，获得 live URL。
5. 开启 Search engine indexing → Discoverable on the web。
6. 如果需要自定义 slug 或更强 SEO / themes / Google Analytics / custom domain，检查当前 paid plan 和 add-on 条件。
7. 更新 Notion 页面；官方说明已发布页面的内容修改会自动更新站点。[Notion publish](https://www.notion.com/help/public-pages-and-web-publishing)

**评估**

- 上线耗时：**10–30 分钟**。
- 技术门槛：**最低**。
- 中文支持：**高**；编辑器本身适合中文和中英文混排。
- CV 展示强度：**中高**；结构化文档和简历很方便，但视觉差异化和细节控制有限。
- SEO / 搜索：**低到中等**；可以开启搜索索引，但官方说明 Notion Sites 可能需要最多四周出现在搜索结果中；免费层 SEO 定制能力有限。[Notion Sites](https://www.notion.com/help/public-pages-and-web-publishing)
- 免费层：可以发布页面、claim 一个 `notion.site` domain、开启 search indexing；付费计划提供更多站点定制。[Notion Sites](https://www.notion.com/help/public-pages-and-web-publishing)
- 自定义域名：Notion 官方定价页列出连接 custom domain 和移除 Notion branding 的 add-on 价格为 $8/month/domain billed annually 或 $10 monthly。[Notion pricing](https://www.notion.com/pricing)
- 迁移：官方支持导出 HTML、Markdown 和 CSV；但明确说明不能通过重新上传导出内容即时重建整个 workspace。[Notion export](https://www.notion.com/help/export-your-content)
- 公开风险：发布页面会连同子页面一起公开，页面 metadata 可能包含参与者姓名、头像和 email；发布前要检查页面树和贡献者信息。[Notion publish](https://www.notion.com/help/public-pages-and-web-publishing)
- 适合：快速临时 portfolio、个人知识页、内部或半公开项目目录。
- 不适合：希望长期拥有自己的内容模型、视觉系统和高可迁移构建链。

### 3.9 GitBook

**默认 URL**

`https://<organization-name>.gitbook.io/<site-title>`

**实际发布步骤**

1. 创建 GitBook organization / space。
2. 选择 visual editor 或从 Markdown、HTML、Word、Notion、GitHub Wiki 等来源 import。
3. 如果采用 docs-as-code，连接 GitHub/GitLab repository，配置 Git Sync 和 branch。
4. 组织 spaces、navigation、translations、pages 和 site settings。
5. 点击 Publish，GitBook 给出 live URL。
6. Custom domain 需要在 Settings → Domain and URL 配置；官方 quickstart 说明 DNS 传播最长可能约 48 小时。[GitBook quickstart](https://gitbook.com/docs/getting-started/quickstart)；[GitBook import](https://gitbook.com/docs/getting-started/import)

**评估**

- 上线耗时：**1–3 小时**。
- 技术门槛：**低到中等**。
- 中文支持：**可用**；更适合文档式中文内容和中英文结构，但需要单独规划 navigation 和 translation。
- CV 展示强度：**中等**；项目文档很强，个人主页和独特品牌较弱。
- SEO / 搜索：**高**；官方 Free plan 列出 built-in SEO、sitemap、responsive design 和 unlimited page views。[GitBook pricing](https://www.gitbook.com/pricing)
- 免费层：Free plan 面向 individuals；包括 public publishing、basic customization、preview deployments、Git Sync 和 built-in SEO；custom domain 不包含在 Free plan，Premium 起价官方当前列出 $65/site/month（annual billing）。[GitBook pricing](https://www.gitbook.com/pricing)
- Git Sync：官方说明可以在 GitBook visual editor 和 GitHub/GitLab Markdown 之间双向同步。[GitBook Git Sync](https://www.gitbook.com/features/git-sync)
- 迁移：如果内容保持 Markdown，迁移相对可行；GitBook 的结构化 blocks、tabs、callouts 和嵌入内容可能需要重建。
- 适合：项目文档、技术手册、开源项目 docs、研究知识库。
- 不适合：把个人 CV、个人判断和项目 showcase 做成一个有强品牌感的主站。

### 3.10 Codex Sites

**官方可验证能力**

OpenAI 官方帮助中心说明 ChatGPT Sites 可以创建、预览、发布和分享交互式网站或 lightweight apps；新 Site 默认 private，部署后产生 hosted URL；在可用时可以连接自己拥有的 custom domain，并通过 DNS 完成配置。[Creating and using ChatGPT Sites](https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites)

官方发布流程：

1. 在 ChatGPT Work、桌面端 Work 或 Codex 中描述要构建的网站。
2. 加入内容、文件、数据、链接和限制。
3. Review preview。
4. 继续让 Codex 修改。
5. Deploy Site，获得 URL。
6. 通过 Share 选择访问对象；公开发布能力取决于账号、区域和 workspace 设置。
7. 如 custom domain 可用，Site settings → Add domain → 配置 DNS。
8. 修改后先 review，保存/发布新版本。

**评估**

- 上线耗时：**30 分钟到数小时**，取决于交互复杂度。
- 技术门槛：**最低到中等**；不需要先搭建传统前端工程。
- 中文支持：**理论上可用**，但站点生成和字体/布局质量要实际审查。
- CV 展示强度：**高**，尤其适合交互式项目展示、dashboard、案例浏览器和轻量工具。
- SEO / 搜索：**不应默认假设和传统静态博客等价**；官方说明重点是 hosted website/lightweight app、访问控制和交互工作流，而不是完整的 docs-as-code SEO 控制。
- 迁移：**中到高风险**。官方建议可以让 Codex export source code，但官方帮助也说明 Sites 没有内置方式把 database records 和 uploaded files 一起备份并恢复到新 Site；恢复旧版本主要恢复 code，不等于完整恢复数据。[OpenAI ChatGPT Sites](https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites)
- 区域与账号可用性：较早的发布说明曾写明公开发布在 EEA、瑞士和英国首发时不可用；但当前 OpenAI 帮助中心页面已更新为：Sites 对 Plus/Pro 以及 Business/Enterprise 开放，具体仍取决于账号、workspace 和权限。因此不能把它当成“必然可用”的默认路径，应该先在当前账号里验证；即使可用，它仍有源代码/数据迁移边界。[Creating and using ChatGPT Sites](https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites)；[earlier rollout note](https://help.openai.com/en/articles/6825453-how-do-i-use-chatgpt-with-browsing)
- 适合：在可用区域快速做交互式项目演示、内部站点、评审页面、轻量工具。
- 不适合：作为你在荷兰长期维护、以 Git 为 canonical source 的个人技术博客主站。

## 4. 横向评分与适配判断

评分是本报告的工程判断：5 = 强，1 = 弱；不是平台官方评分。

| 方案 | 上线耗时 | 技术门槛 | 中文内容 | CV 展示 | SEO/发现 | 更新效率 | 迁移性 | 免费优先适配 | 核心牺牲 |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---|
| GitHub Pages + Astro/Eleventy | 半天–1天 | 3 | 5 | 5 | 4 | 4 | 5 | 5 | 需要自己维护构建和 SEO |
| Cloudflare Pages + GitHub | 半天–1天 | 3 | 5 | 5 | 4 | 5 | 4 | 5 | DNS / Cloudflare 集成复杂度 |
| Vercel Hobby | 1–3小时 | 2–3 | 5 | 5 | 4 | 5 | 4 | 3 | Hobby 非商业限制 |
| Netlify Free | 1–3小时 | 2–3 | 5 | 4 | 4 | 5 | 4 | 4 | credits 和超限暂停 |
| Hashnode Free | 15–60分钟 | 1 | 4 | 3 | 4 | 5 | 3 | 5 | 免费层域名和布局控制 |
| Medium | 15–60分钟 | 1 | 4 | 2 | 4 | 5 | 3 | 3 | publication/domain/analytics 受限 |
| Substack | 30–90分钟 | 1 | 4 | 3 | 4 | 5 | 3 | 4 | newsletter 导向、custom domain $50 |
| Notion Sites | 10–30分钟 | 1 | 5 | 3 | 2–3 | 5 | 3 | 4 | 视觉、SEO、结构和域名控制 |
| GitBook | 1–3小时 | 2 | 4 | 3 | 5 | 4 | 4 | 3 | docs-first，custom domain 不在 Free |
| Codex Sites | 30分钟–数小时 | 1–2 | 4 | 4 | 2–3 | 3 | 2–3 | 2–3 | 账号/区域/权限可用性、数据/版本迁移边界 |

## 5. 针对本项目的明确建议

### 5.1 文章内容

你的文章应采用固定的双语信息结构：

```text
中文标题
English title
英文摘要（2–4 句）
中文正文
项目 / GitHub / 研究来源链接
结论、限制、下一步
```

这样既满足中文技术表达，也让招聘者或国际读者快速判断主题。英文摘要不需要逐句翻译全文；它的任务是给出问题、工程判断和证据入口。

### 5.2 首页内容

首页不应先展示文章列表，而应先回答：

1. 你是谁？
2. 你要做什么类型的 AI Engineer 工作？
3. 你最有证据的三个项目是什么？
4. 你如何设计、评估、部署和维护 Agent 系统？
5. 招聘者下一步应该看哪个项目或 CV？

### 5.3 项目优先级

推荐第一批公开项目：

1. **DecisionFlow Mini**：证据链、typed contracts、risk routing、human review、audit trail。
2. **Agent Systems / Evaluation research**：展示个人判断、来源、反例和未解决问题。
3. **LinkedIn AutoApply open-source framework**：展示 workflow、browser automation、agent loop、handoff、tests 和维护边界。

不要同时公开 F: 目录中的所有研究文件；先挑 3 个项目页和 4–6 篇文章。

## 6. 最短上线路径：今天开始，不创建任何外部资源

以下是建议的最短路径，步骤是可执行说明，但本研究没有替你创建账号、仓库或发布站点。

### 路径 A：最快公开第一篇文章

目标：今天得到一个可分享 URL。

1. 注册或登录 Hashnode。
2. 创建 publication，选择个人 handle；确认默认 URL 为 `<handle>.hashnode.dev`。
3. 完善 profile：一句 AI Engineer 定位、所在地、GitHub、LinkedIn、CV 链接。
4. 创建第一篇文章：中文标题 + English title + English abstract + 中文正文。
5. 文章末尾放 DecisionFlow Mini、GitHub 和下一篇研究计划的链接。
6. Publish 前检查个人信息、F: 路径、真实 token、内部对话和第三方材料。
7. 发布后把文章的 Markdown 源文件保存到自己的 GitHub 或本地 content 目录。
8. 后续继续在 GitHub 保存 canonical copy，再复制到 Hashnode 发布；不要只保留平台上的版本。

这条路径牺牲视觉控制，但最快获得公开反馈。Hashnode 官方说明 free hosted blog、unlimited posts、Markdown editor 和 posts export，适合作为临时第一站。[Hashnode official product page](https://hashnode.com/)

### 路径 B：长期主站的最短稳健路径

目标：一周内建立可以持续维护的个人主站。

1. 在 GitHub 创建一个专门的 public repository，例如 `ai-engineer-tech-notebook`。
2. 只放经过筛选的公开内容，不把 `F:\` 原始目录镜像进去。
3. 先用纯 Markdown + 简单静态模板，避免第一天引入复杂动态功能。
4. 选择 Astro 或 Eleventy；如果希望内容 schema、项目卡片和局部交互，选 Astro；如果只要轻量文章和项目页，选 Eleventy。
5. 建立 3 个项目页、4–6 篇文章、1 个 CV 页和 1 个 About / Method 页。
6. 配置构建命令和输出目录，在本地确认静态 build 成功。
7. 选择 Cloudflare Pages：Workers & Pages → Create application → Pages → Connect to Git → 选择 GitHub repository → 填 build command/output directory → Deploy。[Cloudflare Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)
8. 先使用 `<project>.pages.dev` URL；不要先购买域名。
9. 每次修改走 branch → preview → review → merge to main → production。
10. 需要自定义域名时再购买 domain，并按 Cloudflare custom domain 页面添加 DNS。[Cloudflare custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
11. 保留 GitHub Pages 作为备份发布目标；静态 output 不应依赖 Cloudflare 专属 runtime。

### 自定义域名的通用步骤

1. 先从 registrar 购买 domain；平台通常不会免费提供你的永久自定义域名。
2. 在目标平台控制台先“添加/关联” domain。
3. 平台提供 CNAME、A 或验证 TXT record。
4. 在 registrar 的 DNS 控制台添加相同记录。
5. 等待 DNS propagation。
6. 在平台刷新验证状态。
7. 设置根域名与 `www` 的 canonical redirect。
8. 确认旧平台 URL、GitHub URL 或 preview URL 是否需要保留或 redirect。

不要只把一个 CNAME 指向托管平台，却跳过平台控制台的“关联 domain”步骤；Cloudflare 官方特别说明，单独添加 CNAME 而不先在 Pages 中关联，可能导致 domain 无法解析。[Cloudflare custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)

## 7. 维护、所有权和迁移策略

### 7.1 推荐的 ownership 规则

```text
Markdown / YAML / CV / project metadata：你自己的 GitHub repository
图片和静态 assets：repository 或明确的对象存储
平台发布：可替换的 build/deploy target
平台 analytics / comments / subscribers：平台派生数据，不作为唯一事实源
域名：你自己的 registrar 账户
```

域名必须由你自己注册和续费，不要把域名所有权交给博客平台。Hashnode、Substack、Notion、GitBook 和托管平台都可以作为发布层，但长期个人品牌的域名应由你控制。

### 7.2 内容更新 cadence

建议最小维护周期：

- 每周：发布或更新 1 篇短 engineering note。
- 每月：更新首页、项目状态、CV link、项目截图和技术栈。
- 每季度：检查外部链接、平台条款、域名、站点构建、搜索可见性和公开资料安全。

### 7.3 迁移演练

在上线后 30 天内做一次迁移演练：

1. 从 canonical GitHub repository 重新 build。
2. 用另一静态 host 发布 build output。
3. 逐页检查图片、内部链接、RSS、sitemap 和 CV download。
4. 验证文章 URL 是否可由 slug 重新生成。
5. 记录平台专属内容：comments、analytics、newsletter subscribers、Notion blocks、GitBook components。

如果无法在 1 天内把内容迁移到另一静态 host，说明内容 ownership 仍然过度依赖平台。

## 8. 关键风险

### 内容和隐私风险

- 不公开 `F:\` 原始目录、用户名、内部文件路径、浏览器日志、cookie、token、真实求职记录或第三方个人信息。
- AutoApply 项目需要单独做 secrets、PII、license 和第三方网站内容检查。
- DecisionFlow 的数据必须确认是公开可用的 synthetic data，不要上传真实公司、客户或个人数据。

### 平台风险

- GitHub Pages、Cloudflare、Vercel、Netlify 的免费层和条款会变化。
- Vercel Hobby 的 non-commercial 条款会影响未来商业化。
- Hashnode 的免费层可以快速开始，但 custom domain / API / backup 不是免费层承诺。
- Medium 的账号、publication、membership 和 custom domain 之间有额外依赖。
- Substack 的 custom domain 不是完全免费，官方当前说明一次性 $50。
- Notion 的页面树发布会连带子页面，可能无意暴露内部页面。
- GitBook Free 更像 public docs，而不是高度品牌化 portfolio；custom domain 不在普通 Free plan。
- Codex Sites 的账号、区域、workspace 和公共发布权限会影响可用性；当前帮助中心与早期发布说明存在时间差，部署前应以当前账号实际可见的 Sites 能力为准。

### 求职展示风险

- 文章数量不等于工程能力。
- 只展示架构图，不展示测试、失败、限制和真实代码，会削弱可信度。
- 只展示“Agent 自动化效果”，不说明权限、人工审核、成本、恢复和安全边界，会引发反向质疑。
- 中英文双语会增加维护成本；优先保证中文正文和高质量英文摘要，而不是全文机械翻译。

## 9. 最终决策建议

### 如果你今天只想公开一个可分享地址

选 **Hashnode Free**。

它的优势是速度、Markdown 编辑、免费默认 URL 和文章分发；同时保留每篇文章的本地/GitHub Markdown 源文件。

### 如果你要建立真正的个人 AI Engineer 主站

选 **GitHub repository + Astro/Eleventy + Cloudflare Pages**，并保留 **GitHub Pages** 作为可替换发布目标。

推荐默认技术选择：

```text
内容：Markdown + frontmatter
构建：Astro（需要 schema / project cards / local interactions）
轻量替代：Eleventy
部署：Cloudflare Pages Free
备用：GitHub Pages
域名：自己从 registrar 购买和管理
```

### 如果你只想最省事地做一个临时 portfolio

选 **Notion Sites**。

但要把它视为临时入口，并保留 Markdown / CV / 项目源文件；不要让 Notion 成为唯一的内容事实源。

### 如果你要经营 newsletter

选 **Substack**，但将它作为分发渠道，不作为唯一 CV 主站。

### 如果你要做项目文档而不是个人品牌主页

选 **GitBook**，尤其当你需要 docs navigation、Git Sync、版本化文档和项目手册时。

## 10. Readiness assessment

### 当前状态：`READY FOR A SMALL PUBLIC PILOT; NOT YET READY FOR THE LONG-TERM MAIN SITE`

已经具备：

- 足够的 Agent 研究和工程材料。
- DecisionFlow Mini 作为旗舰项目。
- AutoApply 作为开源工程案例。
- 可支撑中文文章、英文摘要、CV 和 GitHub link 的内容。
- 已明确免费优先和可迁移的发布原则。

尚未具备：

- 公开内容筛选和脱敏清单。
- 3 个项目页和 4–6 篇首发文章。
- GitHub canonical content repository。
- 网站框架和 deployment target 的实际验证。
- 版权、license、secrets、PII 和外链检查。
- 第一轮真实读者反馈。

### 下一步建议

1. 先整理一篇 DecisionFlow Mini 文章和一篇 Agent Evaluation 文章。
2. 为两篇文章分别写中文标题、英文标题和英文摘要。
3. 将 Markdown master copy 保存到 GitHub 或本地 publication layer。
4. 用 Hashnode Free 做第一轮公开发布，获得链接和阅读反馈。
5. 同时开始 Astro/Eleventy 小型 build spike，不要一开始迁移全部 F: 资料。
6. 一周后决定是否把 Cloudflare Pages 主站上线。
7. 购买自定义域名之前，先完成内容、结构、脱敏和迁移演练。

## 11. 官方来源索引

### GitHub Pages

- [Quickstart](https://docs.github.com/en/pages/quickstart)
- [Creating a GitHub Pages site](https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site)
- [Automatic deployment with GitHub Actions](https://docs.github.com/en/get-started/start-your-journey/deploying-your-website-automatically)
- [Custom workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows)
- [Limits](https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits)

### Cloudflare Pages

- [Git integration](https://developers.cloudflare.com/pages/get-started/git-integration/)
- [GitHub integration](https://developers.cloudflare.com/pages/configuration/git-integration/github-integration/)
- [Custom domains](https://developers.cloudflare.com/pages/configuration/custom-domains/)
- [Limits](https://developers.cloudflare.com/pages/platform/limits/)

### Vercel

- [Deploying Git repositories](https://vercel.com/docs/git)
- [Deployments](https://vercel.com/docs/deployments)
- [Custom domains](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
- [Hobby plan](https://vercel.com/docs/plans/hobby)
- [Terms of Service](https://vercel.com/legal/terms)
- [Limits](https://vercel.com/docs/limits)

### Netlify

- [Deploy from repository](https://docs.netlify.com/start/quickstarts/deploy-from-repository/)
- [Custom domains](https://docs.netlify.com/domains-https/custom-domains/)
- [Pricing and plans](https://www.netlify.com/pricing/)

### Hosted blogs

- [Hashnode](https://hashnode.com/)
- [Hashnode Terms](https://hashnode.com/terms)
- [Hashnode Pro](https://hashnode.com/pro)
- [Hashnode CLI](https://hashnode.com/blog/hashnode-cli)
- [Medium: writing and publishing](https://help.medium.com/hc/en-us/articles/225168768-Writing-and-publishing-your-first-story)
- [Medium: publications](https://help.medium.com/hc/en-us/articles/115004681607-Getting-started-with-a-Medium-publication)
- [Medium: custom domain](https://help.medium.com/hc/en-us/articles/115003053487-Setting-up-a-custom-domain-for-your-profile-or-publication)
- [Medium: language availability](https://help.medium.com/hc/en-us/articles/360035241933-About-language-availability-on-Medium)
- [Medium: export](https://help.medium.com/hc/en-us/articles/115004745787-Export-your-account-data)
- [Substack: publishing](https://support.substack.com/hc/en-us/articles/29152946791188-How-can-I-publish-on-Substack)
- [Substack: custom domain](https://support.substack.com/hc/en-us/articles/360051222571-How-do-I-set-up-my-custom-domain-on-Substack)
- [Substack features and portability](https://substack.com/features)

### Notion / GitBook

- [Notion Sites](https://www.notion.com/help/public-pages-and-web-publishing)
- [Notion pricing](https://www.notion.com/pricing)
- [Notion export](https://www.notion.com/help/export-your-content)
- [GitBook quickstart](https://gitbook.com/docs/getting-started/quickstart)
- [GitBook pricing](https://www.gitbook.com/pricing)
- [GitBook import](https://gitbook.com/docs/getting-started/import)
- [GitBook Git Sync](https://www.gitbook.com/features/git-sync)

### Codex Sites

- [Creating and using ChatGPT Sites](https://help.openai.com/en/articles/20001339-creating-and-using-chatgpt-sites)
- [OpenAI Academy: ChatGPT Sites](https://openai.com/academy/chatgpt-sites/)
- [Using Codex with your ChatGPT plan](https://help.openai.com/en/articles/11369540-using-codex-with-your-chatgpt-plan)
- [OpenAI training: building a shareable site](https://developers.openai.com/training/walkthroughs/building-a-shareable-site)

## 12. Limitations and method note

- 本报告没有创建任何账号、仓库、域名或站点。
- 本报告没有安装 skill，也没有修改任何源资料。
- 所有平台价格、免费额度、区域可用性和产品能力都可能变化；部署前需要重新打开官方页面核验。
- 上线耗时、技术门槛、CV 强度、SEO 强度和迁移难度是面向当前项目的工程判断，不是平台官方承诺。
- “中文支持”区分了能否输入/发布 Unicode 内容与平台是否对中文提供专门搜索、SEO 或本地化保证；后者通常没有被官方完全承诺。
- Codex Sites 的分析只基于当前可访问的 OpenAI 官方帮助和产品说明；没有调用创建、部署或公开发布工具。
- 最终推荐优先考虑你的 ownership、迁移性和求职展示目标，而不是单个平台的短期便利。
