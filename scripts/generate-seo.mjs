import fs from 'node:fs';

const site = (process.env.SITE_URL || '').replace(/\/$/, '');
const pages = ['/', '/services.html', '/susan.html', '/purity-of-hearts.html', '/contact.html'];

if (site) {
  const today = new Date().toISOString().slice(0, 10);
  const urls = pages.map((p, i) =>
    `  <url><loc>${site}${p}</loc><lastmod>${today}</lastmod><changefreq>${i === 0 ? 'weekly' : 'monthly'}</changefreq><priority>${i === 0 ? '1.0' : '0.8'}</priority></url>`
  ).join('\n');
  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
  fs.writeFileSync('sitemap.xml', xml);
  fs.writeFileSync('robots.txt', `User-agent: *\nAllow: /\n\nSitemap: ${site}/sitemap.xml\n`);
  console.log('Generated sitemap.xml and robots.txt for', site);
} else {
  console.log('SITE_URL not set; keeping domain-neutral robots.txt. Set SITE_URL in Vercel for sitemap generation.');
}
