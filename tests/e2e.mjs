// End-to-end smoke test on the built site (phone viewport). Run: npm test
import { chromium } from 'playwright';
import { serve } from '../scripts/serve.mjs';

const server = await serve(4174);
const browser = await chromium.launch({ args: ['--use-fake-ui-for-media-stream', '--use-fake-device-for-media-stream'] });
const ctx = await browser.newContext({ viewport: { width: 390, height: 844 }, permissions: ['microphone'], acceptDownloads: true });
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
await step('DELE variant 4 reading + listening', async () => {
  await page.click('#home-btn'); await page.click('#go-dele'); await page.click('#d-study'); await page.click('#s-read');
  await page.click('[data-v="4"]'); await page.click('[data-n="3"]');
  if ((await page.$$('.qcard')).length !== 6) throw new Error('expected 6 questions');
  if (!(await page.textContent('main')).includes('El Molino')) throw new Error('variant 4 text missing');
  await page.click('#home-btn'); await page.click('#go-dele'); await page.click('#d-study'); await page.click('#s-aud'); await page.click('[data-n="3"]');
  if (!(await page.textContent('#gcard')).includes('Nuria')) throw new Error('variant 4 listening missing');
});
await step('spaced repetition: due questions come back', async () => {
  await page.click('#home-btn'); await page.click('#go-ccse'); await page.click('#go-study'); await page.click('[data-t="1"]');
  await page.click('#card .opt >> nth=0'); await page.waitForSelector('#nx');
  await page.evaluate(() => { const k = 'ccse2026.v1', o = JSON.parse(localStorage.getItem(k)); for (const id in o.q) o.q[id].due = Date.now() - 1000; localStorage.setItem(k, JSON.stringify(o)); });
  await page.reload(); await page.click('#go-ccse'); await page.click('#go-study');
  const sub = await page.textContent('#go-due small'); if (!/\d/.test(sub)) throw new Error('no due count: ' + sub);
  await page.click('#go-due'); await page.waitForSelector('#card .opt');
});
await step('progress file: download, reset, load back', async () => {
  await page.click('#set-btn');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('#f-save')]);
  const file = await dl.path();
  const before = await page.evaluate(() => JSON.parse(localStorage.getItem('ccse2026.v1')).exams.length);
  await page.click('#reset'); await page.click('#r-yes'); await page.click('#set-btn');
  if (await page.evaluate(() => JSON.parse(localStorage.getItem('ccse2026.v1')).exams.length) !== 0) throw new Error('reset failed');
  await page.setInputFiles('#f-load', file); await page.waitForFunction(n => JSON.parse(localStorage.getItem('ccse2026.v1')).exams.length === n, before);
});
await step('about and privacy page', async () => {
  await page.click('#about-btn'); const txt = await page.textContent('main');
  if (!txt.includes('GitHub') || !txt.includes('apto.feedback@icloud.com')) throw new Error('about content');
});
await step('speaking: record and play back', async () => {
  await page.click('#home-btn'); await page.click('#go-dele'); await page.click('#d-study'); await page.click('#s-speak'); await page.click('[data-s^="t1:"]');
  await page.click('.rec-b'); await page.waitForTimeout(600); await page.click('.rec-b');
  await page.waitForSelector('.rec-a:not([hidden])');
});
await step('no Spanish voice: help + read the text instead', async () => {
  const c2 = await browser.newContext({ viewport: { width: 390, height: 844 } });
  await c2.addInitScript(() => { Object.defineProperty(window, 'speechSynthesis', {configurable:true, value:{getVoices:()=>[], cancel(){}, speak(){}, onvoiceschanged:null}}); window.SpeechSynthesisUtterance = function(t){ this.text = t; }; localStorage.setItem('ccse2026.v1', JSON.stringify({set:{lang:'en', langChosen:true}})); });
  const p2 = await c2.newPage(); p2.on('pageerror', e => errors.push('no-voice: ' + e.message));
  await p2.goto('http://localhost:4174/'); await p2.click('#go-dele'); await p2.click('#d-study'); await p2.click('#s-aud'); await p2.click('[data-n="1"]');
  await p2.waitForSelector('.novoice details'); await c2.close();
});
await step('no third-party requests', async () => {
  const ext = []; page.on('request', r => { const u = new URL(r.url()); if (!['localhost', ''].includes(u.hostname) && !u.protocol.startsWith('blob')) ext.push(r.url()); });
  await page.reload(); await page.click('#go-ccse'); await page.waitForTimeout(300);
  if (ext.length) throw new Error(ext.join(', '));
});
await step('study plan is optional: set, edit, remove', async () => {
  await page.click('#home-btn'); await page.click('#go-ccse');
  if (await page.$('.plan-line')) throw new Error('plan shown without a date');
  await page.click('#plan-open'); const d = new Date(Date.now() + 30*86400000).toISOString().slice(0,10);
  await page.fill('#plan-date', d); await page.click('#plan-save'); await page.waitForSelector('#plan-go');
  await page.click('#back'); await page.waitForSelector('.plan-line');
  await page.click('#plan-open'); await page.click('#plan-clear'); await page.click('#back');
  if (await page.$('.plan-line')) throw new Error('date not removed');
});
await step('appearance switch', async () => {
  await page.click('#set-btn'); await page.check('input[name=theme][value=light]');
  if (await page.evaluate(() => document.documentElement.dataset.theme) !== 'light') throw new Error('light');
  await page.check('input[name=theme][value=system]');
  if (await page.evaluate(() => document.documentElement.dataset.theme)) throw new Error('system');
});
await step('answer states have text labels', async () => {
  await page.click('#home-btn'); await page.click('#go-ccse'); await page.click('#try .opt');
  const label = await page.$eval('#try .opt.right .ot', el => getComputedStyle(el, '::after').content);
  if (!label || label === 'none') throw new Error('no label on correct answer');
});
await step('hub buttons share one width', async () => {
  for (const vw of [360, 430, 820]) {
    await page.setViewportSize({ width: vw, height: 900 });
    for (const hub of ['#go-ccse', '#go-dele']) {
      await page.click('#home-btn'); const leave = await page.$('.confirm.leave [data-yes]'); if (leave) await leave.click();
      await page.click(hub);
      const widths = await page.$$eval('.actions .btn', bs => [...new Set(bs.map(b => Math.round(b.getBoundingClientRect().width)))]);
      if (widths.length !== 1) throw new Error(`${hub} at ${vw}px: widths ${widths}`);
    }
  }
  await page.setViewportSize({ width: 390, height: 844 });
});
await step('no horizontal scroll', async () => { const w = await page.evaluate(() => document.documentElement.scrollWidth); if (w > 390) throw new Error('scrollWidth ' + w); });
await step('works offline after first visit', async () => {
  await page.evaluate(() => navigator.serviceWorker.ready);
  await page.reload(); await ctx.setOffline(true); await page.reload(); await page.waitForSelector('#go-ccse'); await ctx.setOffline(false);
});

await browser.close(); server.close();
if (errors.length) { console.error('\n' + errors.join('\n')); process.exit(1); }
console.log('\nall e2e checks passed');
