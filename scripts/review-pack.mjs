// Builds a printable review pack (PDF) of all original Spanish content for a teacher or native speaker.
// Run: node scripts/review-pack.mjs <out.pdf>
import { readFileSync, writeFileSync } from 'node:fs';
import vm from 'node:vm';
import { chromium } from 'playwright';
const read = p => readFileSync(new URL('../src/' + p, import.meta.url), 'utf8');
const files = ['i18n.js','aud.js','aud-b.js','v2-aud.js','v3-aud.js','v4-aud.js','read-a.js','read-b.js','v2-read.js','v2-read-b.js','v3-read.js','v4-read.js','dele.js','gram-b.js','ws.js','vocab.js'];
const ctx = vm.createContext({ console, document:{addEventListener(){}}, addEventListener(){} });
vm.runInContext(files.map(f => read('js/' + f)).join('\n') + '\n;globalThis.__x={AUD,AUDG,AUD_V2,AUD_V3,AUD_V4,AUDG_V2,AUDG_V3,AUDG_V4,READ_A,READ_B,READ_V2,READ_V3,READ_V4,GRAM,WRITE,SPEAK,VOC,WCHECK};', ctx);
const X = ctx.__x;
[...X.READ_A, ...X.READ_B].forEach(R => R.v = R.v || 1); X.AUD.forEach(a => a.v = a.v || 1); X.AUDG.forEach(g => g.v = g.v || 1);
const READ = [...X.READ_A, ...X.READ_B, ...X.READ_V2, ...X.READ_V3, ...X.READ_V4];
const AUD = [...X.AUD, ...X.AUD_V2, ...X.AUD_V3, ...X.AUD_V4], AUDG = [...X.AUDG, ...X.AUDG_V2, ...X.AUDG_V3, ...X.AUDG_V4];
const Q = JSON.parse(read('data/ccse2026.json')), EX = JSON.parse(read('data/ex_all.json'));
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const L = 'abcdefghij', who = s => ({f:'Mujer', m:'Hombre', n:'Locutor'}[s] || s);
const opts = (o, a) => `<ol type="a" class="opts">${o.map((x,j)=>`<li class="${j===a?'ok':''}">${esc(x)}${j===a?' <b>✓</b>':''}</li>`).join('')}</ol>`;
const tip = t => t ? `<p class="tip">Pista: ${esc(t.es)}</p>` : '';
const box = '<p class="fb">Comentario: ______________________________________________</p>';
let h = '';
const TN = {r:{1:'Correo personal',2:'Textos breves',3:'Relacionar textos',4:'Texto largo'},a:{1:'Conversaciones breves',2:'Mensajes y avisos',3:'Conversación larga',4:'Relacionar mensajes'}};
for (const v of [1,2,3,4]) {
  h += `<h1>DELE A2 · Versión ${v}</h1><h2>Comprensión de lectura</h2>`;
  for (const n of [1,2,3,4]) {
    h += `<h3>Tarea ${n} · ${TN.r[n]}</h3>`;
    for (const R of READ.filter(R => R.v === v && R.task === n)) {
      h += `<div class="item"><p class="id">${R.id}</p>${R.docs.map(d=>`<div class="doc">${d.label?`<b>${esc(d.label)}.</b> `:''}<b>${esc(d.title)}</b>${d.text.map(p=>`<p>${esc(p)}</p>`).join('')}</div>`).join('')}`;
      R.qs.forEach((q,k) => { h += `<div class="q"><p><b>${k+1}.</b> ${esc(q.q)}</p>${R.match ? `<p>Respuesta: <b>${esc(q.o[q.a])}</b> (${esc(R.docs[q.a].title)})</p>` : opts(q.o, q.a)}${tip(q.tip)}</div>`; });
      h += box + '</div>';
    }
  }
  h += `<h2>Comprensión auditiva (guiones)</h2>`;
  for (const n of [1,2]) { h += `<h3>Tarea ${n} · ${TN.a[n]}</h3>`;
    for (const a of AUD.filter(a => a.v === v && a.task === n)) h += `<div class="item"><p class="id">${a.id}</p><p><i>${esc(a.ctx)}</i></p><ul class="script">${a.lines.map(l=>`<li><span>${who(l.s)}:</span> ${esc(l.t)}</li>`).join('')}</ul><p><b>${esc(a.q)}</b></p>${opts(a.opts, a.ans)}${tip(a.tip)}${box}</div>`; }
  for (const n of [3,4]) { const G = AUDG.find(g => g.v === v && g.task === n); if (!G) continue;
    h += `<h3>Tarea ${n} · ${TN.a[n]}</h3><div class="item"><p class="id">${G.id}</p><p><i>${esc(G.ctx)}</i></p><ul class="script">${G.lines.map(l=>`<li><span>${l.s==='n'?'':who(l.s==='m'&&G.names?G.names[1]:l.s==='f'&&G.names?G.names[0]:l.s)+':'}</span> ${esc(l.t)}</li>`).join('')}</ul>`;
    if (G.select) h += `<p>Enunciados: ${G.stmts.map((s,i)=>`<b>${'ABCDEFGHIJ'[i]}</b> ${esc(s)}`).join(' · ')}</p>`;
    G.qs.forEach((q,k) => { h += `<div class="q"><p><b>${k+1}.</b> ${esc(q.q)} → <b>${G.select ? 'ABCDEFGHIJ'[q.a] + '. ' + esc(G.stmts[q.a]) : esc(G.names[q.a])}</b></p>${tip(q.tip)}</div>`; });
    h += box + '</div>'; }
}
h += `<h1>Gramática</h1>`;
for (const g of X.GRAM) { h += `<div class="item"><h3>${esc(g.name.es)}</h3><p class="id">${g.id}</p><p>${esc(g.rule.es)}</p><p class="tip">Para recordarlo: ${esc(g.mnemo.es)}</p>`;
  [...g.diag, ...g.prac].forEach((it,k) => { h += `<p>${k+1}. ${esc(it.s.replace('___', '____'))} <span class="alts">(${it.o.map((o,j)=>j===it.a?`<b>${esc(o)} ✓</b>`:esc(o)).join(' / ')})</span></p>`; });
  h += box + '</div>'; }
h += `<h1>Vocabulario</h1><p>Traducción al inglés como referencia; también hay versiones en ruso y ucraniano.</p>`;
for (const T of X.VOC) h += `<div class="item"><h3>${esc(T.name.es)}</h3><table>${T.w.map(w=>`<tr><td>${esc(w[0])}</td><td>${esc(w[1])}</td></tr>`).join('')}</table>${box}</div>`;
h += `<h1>Expresión escrita · modelos</h1>`;
h += `<p>Lista de autoevaluación que ve el alumno: ${X.WCHECK.es.map(esc).join(' · ')}</p>`;
for (const w of X.WRITE) h += `<div class="item"><p class="id">${w.id} · ${w.words[0]}–${w.words[1]} palabras · el texto es un ejemplo, no la única respuesta correcta</p>${w.input?`<div class="doc">${esc(w.input.text)}</div>`:''}${w.data?`<div class="doc">${w.data.map(esc).join('<br>')}</div>`:''}<p><b>${esc(w.instr)}</b></p><p class="model">${esc(w.model).replace(/\n/g,'<br>')}</p>${box}</div>`;
h += `<h1>Expresión oral · modelos</h1>`;
for (const s of [...X.SPEAK.t1, ...X.SPEAK.t2]) h += `<div class="item"><p class="id">${s.id}</p><h3>${esc(s.title)}</h3>${s.points?`<p>Puntos: ${s.points.map(esc).join(' · ')}</p>`:''}${s.scene?`<p><i>Práctica guiada con escena descrita: de momento no hay fotografía (se añadirán fotos reales).</i></p><div class="doc">${s.scene.map(esc).join('<br>')}</div><p>Preguntas de ayuda: ${s.q.map(esc).join(' · ')}</p>`:''}<p class="model">${esc(s.model)}</p>${box}</div>`;
for (const s of X.SPEAK.t3) h += `<div class="item"><p class="id">${s.id}</p><h3>${esc(s.title)}</h3><p><i>${esc(s.role)}</i></p><ul>${s.lines.map(l=>`<li>Examinador: ${esc(l)}</li>`).join('')}</ul><p>Frases útiles: ${s.useful.map(esc).join(' · ')}</p>${s.sample?`<p><b>Ejemplo de respuestas del candidato:</b></p><ol>${s.sample.map(esc).map(x=>`<li>${x}</li>`).join('')}</ol>`:''}<p>Criterios de autoevaluación: comprensibilidad · cumplimiento de la tarea · vocabulario · gramática.</p>${box}</div>`;
h += `<h1>CCSE · explicaciones (español)</h1><p>Las preguntas y respuestas son del manual oficial; aquí solo se revisan las explicaciones escritas para Apto.</p>`;
for (const q of Q) { const a = q.opts['abc'.indexOf(q.ans)]; h += `<div class="ccse"><p><b>${q.id}</b> ${esc(q.q)} → <b>${esc(a)}</b></p><p class="tip">${esc(EX[q.id][0])}</p></div>`; }
const html = `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>
@page{size:A4;margin:16mm 14mm}body{font:10.5pt/1.45 Georgia,serif;color:#222}h1{font:700 18pt sans-serif;color:#2c5a44;border-bottom:2px solid #2c5a44;margin:0 0 8px;page-break-before:always}h1:first-of-type{page-break-before:avoid}
h2{font:700 13pt sans-serif;color:#2c5a44;margin:14px 0 6px}h3{font:700 11pt sans-serif;margin:12px 0 4px}.item{border-top:1px solid #ccc;padding:8px 0}.q,.ccse,.script li{page-break-inside:avoid}h3{page-break-after:avoid}.id{font:8pt monospace;color:#888;margin:0}
.doc{background:#f3f5f0;padding:6px 10px;margin:4px 0}.doc p{margin:3px 0}.opts{margin:2px 0 2px 18px;padding:0}.opts .ok{font-weight:700}.tip{color:#555;font-style:italic;margin:2px 0}.fb{color:#aaa;font-size:9pt;margin:6px 0 0}
.script{list-style:none;padding:0;margin:4px 0}.script span{font:8.5pt sans-serif;color:#666}.alts{color:#555}.model{background:#f3f5f0;padding:6px 10px}table{border-collapse:collapse;width:100%}td{border-bottom:1px solid #eee;padding:2px 4px}.ccse{border-top:1px solid #eee;padding:4px 0;page-break-inside:avoid}.ccse p{margin:1px 0}
.cover{page-break-after:always;padding-top:60mm}.cover h1{border:0;font-size:28pt;page-break-before:avoid}
</style></head><body><div class="cover"><h1>Apto · revisión de contenidos</h1><p>Ejercicios originales de DELE A2 (4 versiones de lectura y audición), gramática, vocabulario, modelos de escritura y oral, y explicaciones del CCSE.</p>
<p>Cada bloque tiene un código (por ejemplo D-T1) y una línea para comentarios. Las respuestas correctas están en negrita con ✓.</p><p>Audición: en la app no hay grabaciones; el audio lo lee la voz sintética del dispositivo a partir de estos guiones (dos escuchas en modo examen). Expresión oral: las «fotos» son descripciones de escenas.</p><p>La estructura sigue el modelo de examen DELE A2 del Instituto Cervantes; conviene compararla con los modelos oficiales vigentes. Los ejercicios son originales, no oficiales.</p><p>Gracias por revisarlo. Comentarios: apto.feedback@icloud.com</p><p>Contenido original de Apto, versión 1.0.2 (octubre de 2026). CCSE: banco de preguntas del Manual CCSE 2026 del Instituto Cervantes; la sesión de comprobación de claves con el manual está pendiente. Revisado por última vez: 21-10-2026.</p><p>https://badlvnds.github.io/apto/</p></div>${h}</body></html>`;
const b = await chromium.launch(); const p = await b.newPage(); await p.setContent(html, {waitUntil:'load'});
await p.pdf({path: process.argv[2] || 'apto-review.pdf', format:'A4', printBackground:true, displayHeaderFooter:true, headerTemplate:'<span></span>', footerTemplate:'<div style="font:8px sans-serif;color:#888;width:100%;text-align:center">Apto · revisión · <span class="pageNumber"></span>/<span class="totalPages"></span></div>', margin:{top:'16mm',bottom:'16mm',left:'14mm',right:'14mm'}});
await b.close(); console.log('written', process.argv[2]);
