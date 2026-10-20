// End-to-end smoke test on the built site (phone viewport). Run: npm test
import { chromium } from 'playwright';
import { serve } from '../scripts/serve.mjs';

const server = await serve(4174);
const browser = await chromium.launch();
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 } });
// Fake Spanish voices so listening tasks can be exercised headlessly.
await ctx.addInitScript(() => {
  const voices = [{name:'Mónica',lang:'es-ES'},{name:'Jorge',lang:'es-ES'}];
  Object.defineProperty(window, 'speechSynthesis', {configurable:true, value:{getVoices:()=>voices, cancel(){}, speak(u){ setTimeout(()=>u.onend&&u.onend(), 5); }, onvoiceschanged:null}});
  window.SpeechSynthesisUtterance = function(t){ this.text = t; };
});
const page = await ctx.newPage();
const errors = [];
page.on('pageerror', e => errors.push(e.message));
const step = async (name, fn) => { try { await fn(); console.log('✓', name); } catch (e) { errors.push(name + ': ' + e.message); console.log('✗', name); } };

await page.goto('http://localhost:4174/');
await step('first run language picker', async () => { await page.click('[data-l="ru"]'); await page.waitForSelector('#go-ccse'); });
await step('CCSE sample question + explanation', async () => { await page.click('#go-ccse'); await page.click('#try .opt'); await page.waitForSelector('#try .tipbox'); });
await step('CCSE mock exam', async () => {
  await page.click('#go-exam');
  for (let i = 0; i < 25; i++) await page.click('.opts .opt >> nth=0');
  await page.click('#fin'); await page.waitForSelector('.verdict');
});
await step('DELE reading task (variant 2)', async () => {
  await page.click('#home-btn'); await page.click('#go-dele'); await page.click('#d-study'); await page.click('#s-read');
  await page.click('[data-v="2"]'); await page.click('[data-n="1"]');
  for (const c of await page.$$('.qcard')) await (await c.$$('.opt'))[0].click();
  await page.waitForSelector('#t-res:not([hidden])');
});
await step('DELE listening group task', async () => {
  await page.click('#home-btn'); await page.click('#go-dele'); await page.click('#d-study'); await page.click('#s-aud'); await page.click('[data-n="4"]');
  const sels = await page.$$('#gcard select'); for (let i = 0; i < sels.length; i++) await sels[i].selectOption(String(i));
  await page.waitForSelector('#t-res:not([hidden])');
});
await step('grammar diagnostic', async () => {
  await page.click('#home-btn'); await page.click('#go-dele'); await page.click('#d-study'); await page.click('#s-gram'); await page.click('#g-diag');
  for (let i = 0; i < 12; i++) { await page.click('#g-card .opt >> nth=0'); await page.click('#g-next'); }
  await page.waitForSelector('.stat');
});
await step('writing word counter', async () => {
  await page.click('#home-btn'); await page.click('#go-dele'); await page.click('#d-study'); await page.click('#s-write'); await page.click('[data-w="W1a"]');
  await page.fill('#w-txt', 'uno dos tres'); if (!(await page.textContent('#w-count')).includes('3')) throw new Error('count');
});
await step('no horizontal scroll', async () => { const w = await page.evaluate(() => document.documentElement.scrollWidth); if (w > 390) throw new Error('scrollWidth ' + w); });
await step('works offline after first visit', async () => {
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.reload(); await ctx.setOffline(true); await page.reload(); await page.waitForSelector('#go-ccse'); await ctx.setOffline(false);
});

await browser.close(); server.close();
if (errors.length) { console.error('\n' + errors.join('\n')); process.exit(1); }
console.log('\nall e2e checks passed');
