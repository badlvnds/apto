// Renders PNG icons, favicon.ico and the link-preview image from public/icons/icon.svg with Playwright.
// Run after changing the SVG: npm run icons
import { chromium } from 'playwright';
import { readFileSync, writeFileSync, mkdtempSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';

const pub = p => new URL('../public/' + p, import.meta.url).pathname;
const svg = readFileSync(pub('icons/icon.svg'), 'utf8');
const b = await chromium.launch();
const p = await b.newPage();

async function png(size, pad = 0){
  await p.setViewportSize({width:size, height:size});
  const inner = Math.round(size*(1-pad*2));
  await p.setContent(`<html><body style="margin:0;background:${pad?'#26332F':'transparent'};display:grid;place-items:center;width:${size}px;height:${size}px">${svg.replace('<svg ', `<svg width="${inner}" height="${inner}" `)}</body></html>`);
  return p.screenshot({omitBackground: !pad});
}

// PWA / Apple / browser-tab icons. Apple and maskable icons are opaque with a safe margin.
for (const [name, size, pad] of [['icon-192.png',192,0],['icon-512.png',512,0],['favicon-32.png',32,0],['favicon-16.png',16,0],['apple-touch-icon.png',180,0.1],['icon-maskable-512.png',512,0.1]])
  writeFileSync(pub('icons/' + name), await png(size, pad));

// favicon.ico with embedded PNGs (16, 32, 48): some browsers only ever ask for /favicon.ico.
const imgs = [16, 32, 48]; const data = [];
for (const s of imgs) data.push(await png(s));
const head = Buffer.alloc(6 + 16*imgs.length); head.writeUInt16LE(0,0); head.writeUInt16LE(1,2); head.writeUInt16LE(imgs.length,4);
let off = head.length;
imgs.forEach((s, i) => { const e = 6 + 16*i; head[e] = s; head[e+1] = s; head.writeUInt16LE(1, e+4); head.writeUInt16LE(32, e+6); head.writeUInt32LE(data[i].length, e+8); head.writeUInt32LE(off, e+12); off += data[i].length; });
writeFileSync(pub('favicon.ico'), Buffer.concat([head, ...data]));

// Link preview (Open Graph) image, 1200×630.
const fonts = pub('fonts/');
const dir = mkdtempSync(join(tmpdir(), 'og-'));
writeFileSync(join(dir, 'og.html'), `<!doctype html><html><head><style>
@font-face{font-family:B;src:url(file://${fonts}bricolage-latin.woff2);font-weight:200 800}
@font-face{font-family:S;src:url(file://${fonts}source-sans-3-latin-600.woff2);font-weight:600}
@font-face{font-family:S;src:url(file://${fonts}source-sans-3-cyrillic-600.woff2);font-weight:600;unicode-range:U+0400-045F,U+0490-0491}
@font-face{font-family:M;src:url(file://${fonts}plex-mono-latin-500.woff2)}
body{margin:0;width:1200px;height:630px;background:#26332F;font-family:S;color:#F1F5EF;display:flex;flex-direction:column;justify-content:space-between;padding:72px 80px;box-sizing:border-box}
.top{display:flex;align-items:center;gap:28px}.top svg{width:120px;height:120px}
h1{font-family:B;font-weight:800;font-size:112px;margin:0;letter-spacing:-.03em;line-height:1}
.tag{font-family:B;font-weight:700;font-size:56px;color:#B8D3B8;letter-spacing:-.02em;margin:0}
p{font-size:36px;margin:0;line-height:1.25;max-width:980px}
.langs{display:flex;gap:14px;font-family:M;font-size:26px}.langs span{border:2px solid #4A5B53;color:#C8D1C9;border-radius:999px;padding:6px 18px}
.row{display:flex;justify-content:space-between;align-items:flex-end}.free{font-size:30px;color:#A8B8AD}
</style></head><body>
<div class="top">${svg}<h1>Apto</h1></div>
<div><p class="tag">CCSE · DELE A2</p><p>Prepara gratis los exámenes de nacionalidad española</p></div>
<div class="row"><div class="langs"><span>ES</span><span>EN</span><span>RU</span><span>UK</span></div><span class="free">gratis · sin registro · tu progreso es tuyo</span></div>
</body></html>`);
await p.setViewportSize({width:1200, height:630});
await p.goto('file://' + join(dir, 'og.html'));
await p.evaluate(() => document.fonts.ready);
writeFileSync(pub('og-image.png'), await p.screenshot({type:'png'}));

await b.close();
console.log('icons, favicon.ico and og-image.png written');
