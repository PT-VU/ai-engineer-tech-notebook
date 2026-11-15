import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const contentDir = path.join(root, 'content');
const dist = path.join(root, 'dist');

const esc = (value = '') => String(value).replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const inline = (value = '') => esc(value).replace(/`([^`]+)`/g, '<code>$1</code>').replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>').replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
function markdown(source) {
  const lines = source.trim().split(/\r?\n/); let html = ''; let list = false; let code = false; let codeLines = [];
  for (const line of lines) {
    if (line.trim() === '```') { if (code) { html += `<pre><code>${esc(codeLines.join('\n'))}</code></pre>`; codeLines = []; } code = !code; continue; }
    if (code) { codeLines.push(line); continue; }
    if (/^### /.test(line)) { html += `<h3>${inline(line.slice(4))}</h3>`; continue; }
    if (/^## /.test(line)) { html += `<h2>${inline(line.slice(3))}</h2>`; continue; }
    if (/^# /.test(line)) { html += `<h2>${inline(line.slice(2))}</h2>`; continue; }
    if (/^- /.test(line)) { if (!list) { html += '<ul>'; list = true; } html += `<li>${inline(line.slice(2))}</li>`; continue; }
    if (list) { html += '</ul>'; list = false; }
    if (!line.trim()) continue;
    html += `<p>${inline(line)}</p>`;
  }
  if (list) html += '</ul>'; if (code) html += `<pre><code>${esc(codeLines.join('\n'))}</code></pre>`;
  return html;
}
function parseFrontmatter(raw) {
  const match = raw.match(/^---\s*\n([\s\S]*?)\n---\s*\n([\s\S]*)$/);
  if (!match) return { data: {}, body: raw };
  const data = {};
  for (const line of match[1].split(/\r?\n/)) {
    const i = line.indexOf(':'); if (i < 0) continue;
    const key = line.slice(0, i).trim(); let value = line.slice(i + 1).trim();
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) value = value.slice(1, -1);
    if (value === 'true' || value === 'false') value = value === 'true';
    if (typeof value === 'string' && value.startsWith('[')) { try { value = JSON.parse(value.replaceAll("'", '"')); } catch {} }
    data[key] = value;
  }
  return { data, body: match[2] };
}
async function readCollection(folder) {
  const files = (await fs.readdir(path.join(contentDir, folder))).filter(f => f.endsWith('.md'));
  return Promise.all(files.map(async file => { const raw = await fs.readFile(path.join(contentDir, folder, file), 'utf8'); const parsed = parseFrontmatter(raw); return { ...parsed.data, body: parsed.body }; }));
}
const layout = (title, active, body) => `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${esc(title)} · Tong Pei</title><meta name="description" content="AI Engineer technical notebook by Tong Pei."><link rel="stylesheet" href="/assets/site.css"></head><body><a class="skip" href="#main">跳到主要内容</a><header class="site-header"><a class="brand" href="/">Tong Pei <span>/ AI Engineer notebook</span></a><nav>${[['项目','/projects/','projects'],['文章','/writing/','writing'],['关于与 CV','/about/','about']].map(([label,href,key]) => `<a class="${active===key?'active':''}" href="${href}">${label}</a>`).join('')}</nav></header><main id="main">${body}</main><footer><div><strong>Tong Pei</strong><span> / AI Engineer notebook</span></div><div>Evidence before spectacle. Judgment before automation.</div></footer></body></html>`;
const projectCard = p => `<article class="project-card"><div class="card-top"><span>${esc(p.status)}</span><span>${esc(p.period)}</span></div><h2><a href="/projects/${p.slug}/">${esc(p.name)}</a></h2><p>${esc(p.tagline_zh)}</p><div class="card-signal"><span>问题</span><span>边界</span><span>证据</span></div><a class="text-link" href="/projects/${p.slug}/">阅读案例 <span>↗</span></a></article>`;
const writingCard = p => `<article class="writing-row"><div class="writing-meta"><span>${esc(p.kind)}</span><span>${esc(p.date)}</span></div><div><h2><a href="/writing/${p.slug}/">${esc(p.title_zh)}</a></h2><p class="english-title">${esc(p.title_en)}</p><p>${esc(p.summary_en)}</p></div><a class="text-link" href="/writing/${p.slug}/">打开文章 <span>↗</span></a></article>`;
const projects = await readCollection('projects'); const writing = await readCollection('writing');
await fs.rm(dist, { recursive: true, force: true }); await fs.mkdir(path.join(dist, 'assets'), { recursive: true });
await fs.copyFile(path.join(root, 'assets', 'site.css'), path.join(dist, 'assets', 'site.css'));
const home = `<section class="hero"><div class="hero-copy"><p class="kicker">AI Engineer / Technical notebook</p><h1>我把 AI 系统做成<br><em>可以解释、评估和修复</em>的东西。</h1><p class="lede">记录 Agent systems、workflow、evaluation 与生产边界。这里不追逐“更像 Agent”的表演，而是拆解一个系统为什么可靠、哪里会失败，以及工程师应该为哪些判断负责。</p><div class="actions"><a class="button" href="/projects/">看精选项目</a><a class="button secondary" href="/about/">打开 CV / About</a></div></div><aside class="hero-note"><span class="note-label">当前工作方式</span><strong>问题 → 约束 → 判断 → 证据 → 限制</strong><p>我更在意系统在失败时留下了什么，而不是 Demo 在成功时看起来多聪明。</p></aside></section><section class="section"><div class="section-heading"><p class="kicker">Selected work</p><h2>三个项目，三种工程信号</h2><a class="text-link" href="/projects/">查看全部项目 <span>↗</span></a></div><div class="project-grid">${projects.filter(p=>p.featured).map(projectCard).join('')}</div></section><section class="split-section"><div><p class="kicker">A point of view</p><h2>Agent 工程的价值，不是把每一步都交给模型。</h2></div><div class="quote-block"><p>我把 LLM 看作不确定的决策部件，把 runtime、权限、状态、评估和人工接管看作让它能够进入现实的工程边界。</p><a class="text-link" href="/writing/agent-engineering-value/">读我的判断 <span>↗</span></a></div></section><section class="section writing-section"><div class="section-heading"><p class="kicker">Writing</p><h2>中文为主，英文摘要先告诉你值不值得读</h2><a class="text-link" href="/writing/">浏览文章 <span>↗</span></a></div><div class="writing-list">${writing.filter(p=>p.featured).slice(0,3).map(writingCard).join('')}</div></section>`;
await fs.writeFile(path.join(dist, 'index.html'), layout('AI Engineer technical notebook', '', home));
const projectsBody = `<section class="page-intro"><p class="kicker">Projects</p><h1>把判断落到系统里。</h1><p class="lede">这些项目不是功能清单，而是我如何处理边界、证据、失败和下一步的记录。</p></section><section class="project-grid project-grid-wide">${projects.map(projectCard).join('')}</section>`;
await fs.mkdir(path.join(dist, 'projects'), { recursive: true }); await fs.writeFile(path.join(dist, 'projects', 'index.html'), layout('Projects', 'projects', projectsBody));
for (const p of projects) { const body = `<article class="article project-detail"><div class="article-head"><p class="kicker">${esc(p.status)} · ${esc(p.period)}</p><h1>${esc(p.name)}</h1><p class="english-title">${esc(p.name_en)}</p><p class="dek">${esc(p.tagline_zh)}</p></div><div class="evidence-strip"><div><span>Stack</span><strong>${esc(p.stack)}</strong></div><div><span>Evaluation</span><strong>${esc(p.evaluation)}</strong></div><div><span>Public status</span><strong>${esc(p.public_status)}</strong></div></div><div class="article-grid"><div class="prose">${markdown(p.body)}</div><aside class="article-aside"><div><span class="aside-label">Evidence</span><p>${esc(p.evidence)}</p></div><div><span class="aside-label">Boundary</span><p>${esc(p.boundary)}</p></div><div><span class="aside-label">Next step</span><p>${esc(p.next_step)}</p></div></aside></div></article>`; await fs.mkdir(path.join(dist, 'projects', p.slug), { recursive: true }); await fs.writeFile(path.join(dist, 'projects', p.slug, 'index.html'), layout(p.name, 'projects', body)); }
const writingBody = `<section class="page-intro"><p class="kicker">Writing</p><h1>我如何理解 AI 工程。</h1><p class="lede">中文正文，英文摘要。每篇文章都从一个判断开始，再把它放回证据、项目和限制里。</p></section><div class="writing-list writing-list-wide">${writing.map(writingCard).join('')}</div>`;
await fs.mkdir(path.join(dist, 'writing'), { recursive: true }); await fs.writeFile(path.join(dist, 'writing', 'index.html'), layout('Writing', 'writing', writingBody));
for (const p of writing) { const body = `<article class="article"><div class="article-head"><p class="kicker">${esc(p.kind)} · ${esc(p.date)}</p><h1>${esc(p.title_zh)}</h1><p class="english-title">${esc(p.title_en)}</p><p class="english-summary">${esc(p.summary_en)}</p></div><div class="article-tags"><span>${esc(p.evidence_level)}</span><span>${esc(p.claim_mode)}</span><span>个人判断</span></div><div class="article-grid"><div class="prose">${markdown(p.body)}</div><aside class="article-aside"><div><span class="aside-label">这篇文章的立场</span><p>${esc(p.stance)}</p></div><div><span class="aside-label">来源</span><p>${esc(p.sources)}</p></div></aside></div></article>`; await fs.mkdir(path.join(dist, 'writing', p.slug), { recursive: true }); await fs.writeFile(path.join(dist, 'writing', p.slug, 'index.html'), layout(p.title_zh, 'writing', body)); }
const about = `<section class="page-intro"><p class="kicker">About / CV</p><h1>AI Engineer，关注 Agent 系统如何进入现实。</h1><p class="lede">我正在把传统机器学习背景、后端工程学习和 Agent 系统实践连接起来，专注于 workflow、runtime、evaluation、observability 与安全边界。</p></section><section class="about-grid"><div><h2>我在意什么</h2><p>我不把 Agent 当成一个更长的 prompt。对我来说，Agent 系统的难点是：不确定的模型如何在确定的权限、状态、工具、评估与人工责任中工作。</p><p>因此，我会优先问：系统知道自己做了什么吗？失败后能恢复吗？一个结论能回到证据吗？换模型之后，行为边界还在吗？</p></div><aside class="cv-sheet"><p class="kicker">CV surface</p><h2>Selected capabilities</h2><ul><li>Agentic workflows & runtime boundaries</li><li>Evaluation, evidence chains & auditability</li><li>Python backends, typed contracts & APIs</li><li>Browser automation with human handoff</li><li>Research synthesis and technical communication</li></ul><p class="pending">CV PDF、GitHub、LinkedIn 和联系方式将在发布前补入。</p></aside></section><section class="section"><div class="section-heading"><p class="kicker">Working method</p><h2>我会把“会做”拆成可检查的证据</h2></div><div class="method-grid"><div><strong>先定义边界</strong><p>哪些事情由代码决定，哪些事情交给模型，哪些事情必须由人确认。</p></div><div><strong>再保留证据</strong><p>状态、工具结果、来源、失败和评估结果都要有可追溯的形状。</p></div><div><strong>最后谈自动化</strong><p>自动化不是目标。可恢复、可解释、可持续改进才是。</p></div></div></section>`;
await fs.mkdir(path.join(dist, 'about'), { recursive: true }); await fs.writeFile(path.join(dist, 'about', 'index.html'), layout('About / CV', 'about', about));
await fs.writeFile(path.join(dist, '404.html'), layout('Page not found', '', `<section class="page-intro"><p class="kicker">404</p><h1>这条路径还没有内容。</h1><p class="lede"><a href="/">回到首页</a></p></section>`));
console.log(`Built ${projects.length} projects and ${writing.length} writing pages into ${dist}`);
