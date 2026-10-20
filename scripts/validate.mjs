// Data checks: run before every build. Exits with code 1 on any problem.
import { readFileSync } from 'node:fs';
import vm from 'node:vm';
import { JS_ORDER } from './order.mjs';

const read = p => readFileSync(new URL('../src/' + p, import.meta.url), 'utf8');
const errors = [];
const fail = m => errors.push(m);

// CCSE: 300 questions, answer key, translations, explanations
const Q = JSON.parse(read('data/ccse2026.json')), TR = JSON.parse(read('data/tr_all.json')), EX = JSON.parse(read('data/ex_all.json'));
const LIMITS = {1:120, 2:36, 3:24, 4:36, 5:84};
if (Q.length !== 300) fail(`CCSE: expected 300 questions, got ${Q.length}`);
for (const [t, n] of Object.entries(LIMITS)) if (Q.filter(q => q.tarea === +t).length !== n) fail(`CCSE tarea ${t}: expected ${n}`);
for (const q of Q) {
  if (!['a','b','c'].includes(q.ans) || 'abc'.indexOf(q.ans) >= q.opts.length) fail(`CCSE ${q.id}: bad answer`);
  for (const l of ['en','ru','uk']) { const x = TR[q.id]?.[l]; if (!x || x.length !== (q.opts.length === 2 ? 1 : 4)) fail(`CCSE ${q.id}: translation ${l}`); }
  if (!EX[q.id] || EX[q.id].length !== 4 || EX[q.id].some(s => !s)) fail(`CCSE ${q.id}: explanation`);
}

// DELE: evaluate content files in a sandbox with stub globals the content code needs
const content = ['i18n.js','aud.js','aud-b.js','v2-aud.js','v3-aud.js','v4-aud.js','read-a.js','read-b.js','v2-read.js','v2-read-b.js','v3-read.js','v4-read.js','dele.js','ws.js','more.js','polish.js'];
const ctx = vm.createContext({ console, I18N: undefined });
const exportNames = 'I18N,AUD,AUDG,AUD_TOPICS,AUD_V2,AUD_V3,AUD_V4,AUDG_V2,AUDG_V3,AUDG_V4,READ_A,READ_B,READ_V2,READ_V3,READ_V4,GRAM,WRITE,SPEAK';
vm.runInContext(content.map(f => read('js/' + f)).join('\n') + `\n;globalThis.__x = {${exportNames}};`, ctx);
const X = ctx.__x;
[...X.READ_A, ...X.READ_B].forEach(R => R.v = R.v || 1); X.AUD.forEach(a => a.v = a.v || 1); X.AUDG.forEach(g => g.v = g.v || 1);
const READ = [...X.READ_A, ...X.READ_B, ...X.READ_V2, ...X.READ_V3, ...X.READ_V4];
const AUD = [...X.AUD, ...X.AUD_V2, ...X.AUD_V3, ...X.AUD_V4], AUDG = [...X.AUDG, ...X.AUDG_V2, ...X.AUDG_V3, ...X.AUDG_V4];
const ids = [...READ.map(r => r.id), ...AUD.map(a => a.id), ...AUDG.map(g => g.id)];
if (new Set(ids).size !== ids.length) fail('DELE: duplicate ids');
for (const v of [1,2,3,4]) {
  const r = [1,2,3,4].map(n => READ.filter(R => R.v === v && R.task === n).reduce((s,R) => s + R.qs.length, 0));
  const a = [1,2].map(n => AUD.filter(x => x.v === v && x.task === n).length).concat([3,4].map(n => AUDG.find(g => g.v === v && g.task === n)?.qs.length || 0));
  if (r.join() !== '5,8,6,6') fail(`DELE v${v} reading counts ${r}`);
  if (a.join() !== '6,6,6,7') fail(`DELE v${v} listening counts ${a}`);
}
for (const R of READ) {
  for (const l of ['en','ru','uk']) if (!R.textTr?.[l]) fail(`${R.id}: text translation ${l}`);
  R.qs.forEach((q, k) => {
    if (!(q.a >= 0 && q.a < q.o.length)) fail(`${R.id}:${k} answer`);
    for (const l of ['en','ru','uk']) if (!q.tr?.[l]) fail(`${R.id}:${k} tr ${l}`);
    for (const l of ['es','en','ru','uk']) if (!q.tip?.[l]) fail(`${R.id}:${k} tip ${l}`);
  });
}
for (const a of AUD) {
  if (!(a.ans >= 0 && a.ans < a.opts.length)) fail(`${a.id} answer`);
  if (!X.AUD_TOPICS[a.topic]) fail(`${a.id} topic`);
  for (const l of ['en','ru','uk']) if (!a.tr?.[l] || a.tr[l].length !== 5 + a.lines.length) fail(`${a.id} tr ${l}`);
  for (const l of ['es','en','ru','uk']) if (!a.tip?.[l]) fail(`${a.id} tip ${l}`);
}
for (const G of AUDG) G.qs.forEach((q, k) => {
  const max = G.select ? G.stmts.length : G.names.length;
  if (!(q.a >= 0 && q.a < max)) fail(`${G.id}:${k} answer`);
  for (const l of ['es','en','ru','uk']) if (!q.tip?.[l]) fail(`${G.id}:${k} tip ${l}`);
});
for (const g of X.GRAM) [...g.diag, ...g.prac].forEach((it, k) => { if (!it.s.includes('___') || !(it.a >= 0 && it.a < it.o.length)) fail(`grammar ${g.id}:${k}`); });

// Interface strings: every language has the same keys as Spanish
const keys = l => Object.keys(X.I18N[l]).sort().join();
for (const l of ['en','ru','uk']) if (keys(l) !== keys('es')) fail(`i18n ${l}: keys differ from es`);

if (!JS_ORDER.every(f => { try { read('js/' + f); return true; } catch { return false; } })) fail('build: missing js file');

if (errors.length) { console.error(errors.join('\n')); process.exit(1); }
console.log(`OK · CCSE 300 · DELE ${READ.length} reading texts, ${AUD.length + AUDG.length} listening items, ${X.GRAM.length} grammar topics`);
