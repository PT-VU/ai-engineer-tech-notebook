import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..'); const dist = path.join(root, 'dist');
const forbidden = /(?:api[_-]?key\s*[:=]|secret\s*[:=]|password\s*[:=]|cookie\s*[:=]|(?:bearer|access)[ _-]?token\s*[:=]|BEGIN (?:RSA|OPENSSH|PRIVATE)|F:\\|C:\\Users\\PT)/i;
const files = [];
async function walk(dir) { for (const item of await fs.readdir(dir, {withFileTypes:true})) { const full=path.join(dir,item.name); if(item.isDirectory()) await walk(full); else files.push(full); } }
await fs.access(dist); await walk(dist);
const html = files.filter(f=>f.endsWith('.html')); if (html.length < 10) throw new Error(`Expected at least 10 HTML pages, found ${html.length}`);
for (const file of files) { const text=await fs.readFile(file,'utf8'); if(forbidden.test(text)) throw new Error(`Sensitive-pattern check failed: ${path.relative(root,file)}`); if(file.endsWith('.html') && !text.includes('<meta name="viewport"')) throw new Error(`Missing viewport: ${path.relative(root,file)}`); }
console.log(`Checked ${html.length} HTML pages and ${files.length} files; no sensitive patterns found.`);
