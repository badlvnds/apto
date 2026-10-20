// Renders PNG icons from public/icons/icon.svg with Playwright (run once after changing the SVG).
import { chromium } from 'playwright';
import { readFileSync } from 'node:fs';
const svg = readFileSync(new URL('../public/icons/icon.svg', import.meta.url), 'utf8');
const b = await chromium.launch();
const p = await b.newPage();
for (const [name, size, pad] of [['icon-192.png',192,0],['icon-512.png',512,0],['apple-touch-icon.png',180,0],['icon-maskable-512.png',512,0.1]]) {
  await p.setViewportSize({width:size, height:size});
  const inner = Math.round(size*(1-pad*2));
  await p.setContent(`<html><body style="margin:0;background:${pad?'#7a1f2b':'transparent'};display:grid;place-items:center;width:${size}px;height:${size}px">${svg.replace('<svg ', `<svg width="${inner}" height="${inner}" `)}</body></html>`);
  await p.screenshot({path: new URL(`../public/icons/${name}`, import.meta.url).pathname, omitBackground: !pad});
}
await b.close();
console.log('icons written');
