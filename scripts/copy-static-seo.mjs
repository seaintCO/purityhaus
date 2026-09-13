import fs from 'node:fs';
for (const f of ['robots.txt','llms.txt','site.webmanifest','sitemap.xml']) {
  if (fs.existsSync(f)) fs.copyFileSync(f, `dist/${f}`);
}
