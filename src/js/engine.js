// ---------- DELE A2 full format: reading 4 tareas, listening 4 tareas ----------
// The reading/listening texts arrive in a separate data pack (dele.*.js), which calls deleInit() when loaded.
let READ = [], R_TOTAL = 0, A_TOTAL = 0, DELE_READY = false;
function deleInit(){
  [...READ_A, ...READ_B].forEach(R => R.v = R.v || 1); AUD.forEach(a => a.v = a.v || 1); AUDG.forEach(g => g.v = g.v || 1);
  AUD.push(...AUD_V2, ...AUD_V3, ...AUD_V4); AUDG.push(...AUDG_V2, ...AUDG_V3, ...AUDG_V4);
  READ = [...READ_A, ...READ_B, ...READ_V2, ...READ_V3, ...READ_V4].sort((a,b) => a.task - b.task);
  R_TOTAL = READ.filter(R => R.v === 1).reduce((s,R) => s + R.qs.length, 0);
  A_TOTAL = AUD.filter(a => a.v === 1).length + AUDG.filter(g => g.v === 1).reduce((s,g) => s + g.qs.length, 0);
  DELE_READY = true;
}
const VARIANTS = [1,2,3,4];
let CURV = 1;
const RT = (n, v = CURV) => READ.filter(R => R.task === n && R.v === v);
const AT = (n, v = CURV) => AUD.filter(a => a.task === n && a.v === v);
const AG = (n, v = CURV) => AUDG.find(g => g.task === n && g.v === v);
Object.assign(I18N.es,{variant:'Variante'}); Object.assign(I18N.en,{variant:'Version'}); Object.assign(I18N.ru,{variant:'Вариант'}); Object.assign(I18N.uk,{variant:'Варіант'});
function syncV(){ CURV = (S.set && S.set.dv) || 1; }
function varPickHTML(label){ return `<div class="filters" role="group" aria-label="${esc(label||t().variant)}"><span class="note" style="align-self:center">${esc(label||t().variant)}:</span>${VARIANTS.map(v=>`<button type="button" class="chip" data-v="${v}" aria-pressed="${v===CURV}">${v}</button>`).join('')}</div>`; }
function wireVar(rerender){ view.querySelectorAll('[data-v]').forEach(b => b.onclick = () => { S.set.dv = +b.dataset.v; save(); syncV(); go(rerender); }); }
const TASKN = {
 r:{1:{es:'Correo personal',en:'Personal email',ru:'Личное письмо',uk:'Особистий лист'},2:{es:'Textos breves',en:'Short texts',ru:'Короткие тексты',uk:'Короткі тексти'},3:{es:'Relacionar textos',en:'Match the texts',ru:'Сопоставление текстов',uk:'Зіставлення текстів'},4:{es:'Texto largo',en:'Long text',ru:'Длинный текст',uk:'Довгий текст'}},
 a:{1:{es:'Conversaciones breves',en:'Short conversations',ru:'Короткие диалоги',uk:'Короткі діалоги'},2:{es:'Mensajes y avisos',en:'Messages and announcements',ru:'Сообщения и объявления',uk:'Повідомлення та оголошення'},3:{es:'Conversación larga',en:'Long conversation',ru:'Длинный разговор',uk:'Довга розмова'},4:{es:'Relacionar mensajes',en:'Match the messages',ru:'Сопоставление сообщений',uk:'Зіставлення повідомлень'}}
};
const taskCount = (p,n) => p === 'r' ? RT(n).reduce((s,R)=>s+R.qs.length,0) : (n <= 2 ? AT(n).length : AG(n).qs.length);
const taskTitle = (p,n) => `Tarea ${n} · ${loc(TASKN[p][n])}`;
Object.assign(I18N.es,{readCardSub:()=>`4 tareas · ${R_TOTAL} preguntas`,audCardSub:()=>`4 tareas · ${A_TOTAL} preguntas`,pickTask:'Elige una tarea',nQ:n=>`${n} preguntas`,
 readLede:'Las cuatro tareas del examen: un correo, ocho textos breves, tres textos para relacionar y un texto largo.',audLede:'Las cuatro tareas del examen: conversaciones breves, mensajes, una conversación larga y mensajes para relacionar. Los audios los lee la voz de tu dispositivo.',
 mockLede:'Examen completo de lectura y audición: 4 tareas de lectura (60 minutos) y 4 de audición (40 minutos), como en el DELE A2. No verás si aciertas hasta el final.',
 durR:'60 minutos',durA:'40 minutos',nextTask:'Siguiente tarea',timeUp:'Se acabó el tiempo de esta parte.',stmtsT:'Enunciados',choose:'Elige…',showTr:'Ver traducción',byTask:'Aciertos por tarea',taskRes:'Resultado de la tarea',backTasks:'Todas las tareas'});
Object.assign(I18N.en,{readCardSub:()=>`4 tareas · ${R_TOTAL} questions`,audCardSub:()=>`4 tareas · ${A_TOTAL} questions`,pickTask:'Choose a task',nQ:n=>`${n} questions`,
 readLede:'All four exam tasks: an email, eight short texts, three texts to match and a long text.',audLede:'All four exam tasks: short conversations, messages, a long conversation and messages to match. Recordings are read by your device’s voice.',
 mockLede:'A full reading and listening exam: 4 reading tasks (60 minutes) and 4 listening tasks (40 minutes), as in the DELE A2. You won’t see whether you’re right until the end.',
 durR:'60 minutes',durA:'40 minutes',nextTask:'Next task',timeUp:'Time is up for this part.',stmtsT:'Statements',choose:'Choose…',showTr:'Show translation',byTask:'Accuracy by task',taskRes:'Task result',backTasks:'All tasks'});
Object.assign(I18N.ru,{readCardSub:()=>`4 задания · ${R_TOTAL} вопросов`,audCardSub:()=>`4 задания · ${A_TOTAL} вопросов`,pickTask:'Выберите задание',nQ:n=>`вопросов: ${n}`,
 readLede:'Все четыре задания экзамена: письмо, восемь коротких текстов, три текста на сопоставление и длинный текст.',audLede:'Все четыре задания экзамена: короткие диалоги, сообщения, длинный разговор и сообщения на сопоставление. Записи читает голос вашего устройства.',
 mockLede:'Полный экзамен по чтению и аудированию: 4 задания на чтение (60 минут) и 4 на аудирование (40 минут), как на DELE A2. Верно или нет, вы увидите только в конце.',
 durR:'60 минут',durA:'40 минут',nextTask:'Следующее задание',timeUp:'Время на эту часть вышло.',stmtsT:'Утверждения',choose:'Выберите…',showTr:'Показать перевод',byTask:'Точность по заданиям',taskRes:'Результат задания',backTasks:'Все задания'});
Object.assign(I18N.uk,{readCardSub:()=>`4 завдання · ${R_TOTAL} питань`,audCardSub:()=>`4 завдання · ${A_TOTAL} питань`,pickTask:'Оберіть завдання',nQ:n=>`питань: ${n}`,
 readLede:'Усі чотири завдання іспиту: лист, вісім коротких текстів, три тексти на зіставлення й довгий текст.',audLede:'Усі чотири завдання іспиту: короткі діалоги, повідомлення, довга розмова й повідомлення на зіставлення. Записи читає голос вашого пристрою.',
 mockLede:'Повний іспит із читання та аудіювання: 4 завдання на читання (60 хвилин) і 4 на аудіювання (40 хвилин), як на DELE A2. Правильно чи ні, ви побачите лише наприкінці.',
 durR:'60 хвилин',durA:'40 хвилин',nextTask:'Наступне завдання',timeUp:'Час на цю частину вийшов.',stmtsT:'Твердження',choose:'Оберіть…',showTr:'Показати переклад',byTask:'Точність за завданнями',taskRes:'Результат завдання',backTasks:'Усі завдання'});
I18N.es.speaker.n='Locutor'; I18N.en.speaker.n='Announcer'; I18N.ru.speaker.n='Диктор'; I18N.uk.speaker.n='Диктор';

// ---------- item lookup for mistakes ----------
function dItem(key){
  const [kind, a, b] = key.split(':');
  if (kind !== 'g' && !DELE_READY) return null;
  if (kind === 'g'){ const g = GRAM.find(x=>x.id===a); if (!g) return null; const it = (b[0]==='d'?g.diag:g.prac)[+b.slice(1)]; return it ? {kind, g, it} : null; }
  if (kind === 'r'){ const R = READ.find(x=>x.id===a); return R && R.qs[+b] ? {kind, R, k:+b} : null; }
  if (kind === 'a' && b === undefined){ const it = AUD.find(x=>x.id===a); return it ? {kind, it} : null; }
  if (kind === 'a'){ const G = AUDG.find(x=>x.id===a); return G && G.qs[+b] ? {kind:'ag', G, k:+b} : null; }
  return null;
}
function keysOfTask(p, n){
  if (p === 'r') return READ.filter(R => R.task === n).flatMap(R => R.qs.map((_,k) => `r:${R.id}:${k}`));
  if (n <= 2) return AUD.filter(a => a.task === n).map(it => `a:${it.id}`);
  return AUDG.filter(g => g.task === n).flatMap(G => G.qs.map((_,k) => `a:${G.id}:${k}`));
}
function taskAcc(p, n){ let N=0, ok=0; keysOfTask(p,n).forEach(k => { const d = S.dq[k]; if (d){ N+=d.n; ok+=d.ok; } }); return N ? Math.round(ok/N*100) : null; }
const pctTxt = p => p === null ? t().notTested : p + ' %';
const barCls = p => p === null ? '' : p >= 80 ? 'm' : p >= 60 ? 's' : 'b';

// ---------- reading renderers ----------
function docHTML(R){
  return R.docs.map((d,i) => `<article class="panel doc" lang="es"${i===0?` id="doc-${R.id}"`:''}>${d.label?`<span class="doclabel">${esc(d.label)}</span>`:''}<h2>${esc(d.title)}</h2>${d.text.map(p=>`<p>${esc(p)}</p>`).join('')}</article>`).join('');
}
function readQ(box, R, k, {exam=false, chosen, onAnswer, label, toText=false}={}){
  const T_ = t(), q = R.qs[k], lang = S.set.lang, x = lang==='es' ? null : q.tr[lang];
  const trm = lang === 'es' ? 'off' : (exam && !S.set.trExam ? 'off' : S.set.tr), hid = trm === 'tap' ? ' hidden' : '', show = x && trm !== 'off';
  const optLabel = j => R.match ? `${q.o[j]} · ${R.docs[j].title}` : q.o[j];
  box.innerHTML = `<div class="qhead"><span class="chip">${esc(label || T_.qOf(k+1, R.qs.length))}</span><span class="sp"></span>${toText?`<button type="button" class="trbtn totext" data-doc="doc-${R.id}">↑ ${esc(T_.toText)}</button>`:''}${show&&trm==='tap'?`<button type="button" class="trbtn" aria-expanded="false">${esc(T_.translate)}</button>`:''}</div>
    <div class="qblock"><p class="qtext" lang="es">${esc(q.q)}</p>${show?`<p class="tr"${hid}>${esc(x[0])}</p>`:''}</div>
    <div class="opts">${(R.match ? q.o.map((_,j)=>j) : shuffle(q.o.map((_,j)=>j))).map((j,pos)=>{const o=q.o[j]; return `<button type="button" class="opt ${chosen===j?'sel':''}" data-j="${j}"><span class="l">${R.match?esc(o):L[pos]}</span><span class="ot"><span lang="es">${esc(R.match?R.docs[j].title:o)}</span>${show&&x[1+j]&&x[1+j]!==o?`<span class="tr"${hid}>${esc(x[1+j])}</span>`:''}</span></button>`;}).join('')}</div><div class="fb"></div>`;
  wireTr(box);
  let done = false;
  box.querySelectorAll('.opt').forEach(b => b.onclick = () => {
    const j = +b.dataset.j, ok = j === q.a;
    if (exam){ box.querySelectorAll('.opt').forEach(o => o.classList.toggle('sel', o === b)); onAnswer && onAnswer(j); return; }
    if (done) return; done = true;
    box.querySelectorAll('.opt').forEach(o => { o.disabled = true; const jj = +o.dataset.j; if (jj === q.a) o.classList.add('right'); else if (jj === j) o.classList.add('wrong'); });
    drec(`r:${R.id}:${k}`, ok);
    box.querySelector('.fb').innerHTML = `<p class="feedback ${ok?'ok':'no'}">${esc(ok?T_.correct:T_.incorrect)} ${ok?'':'<span lang="es">'+esc(optLabel(q.a))+'</span>'}</p><div class="tipbox"><span class="eyebrow">${esc(T_.tipT)}</span><p>${esc(loc(q.tip))}</p></div>${reportHTML()}`;
    wireReport(box.querySelector('.fb'), `DELE ${R.id}:${k+1}`, q.q);
    onAnswer && onAnswer(ok);
  });
}
function trDetails(R){ const l = S.set.lang; return l === 'es' ? '' : `<details class="script"><summary>${esc(t().readTextTr)}</summary><p>${esc(R.textTr[l])}</p></details>`; }

// ---------- reading practice ----------
function reading(){
  syncV(); const T_ = t();
  view.innerHTML = `<div class="stack">${backRow(deleStudy, T_.deleStudy)}<span class="eyebrow">DELE A2 · ${esc(T_.kRead)}</span><h1>${esc(T_.readTitle)}</h1><p class="lede">${esc(T_.readLede)}</p>${varPickHTML()}
    <div class="tareas" style="gap:10px">${[1,2,3,4].map(n=>{const p=taskAcc('r',n);return `<button class="btn" data-n="${n}" type="button">${esc(taskTitle('r',n))}<small>${esc(T_.nQ(taskCount('r',n)))} · ${esc(pctTxt(p))}</small></button>`}).join('')}</div>${deleNote()}</div>`;
  wireBack(deleStudy); wireVar(reading);
  view.querySelectorAll('[data-n]').forEach(b => b.onclick = () => go(() => readTask(+b.dataset.n)));
}
function readTask(n){
  current = () => readTask(n);
  const T_ = t(), list = RT(n); let total = list.reduce((s,R)=>s+R.qs.length,0), done = 0, ok = 0;
  view.innerHTML = `<div class="stack">${backRow(reading, T_.backTasks)}<span class="eyebrow">DELE A2 · ${esc(T_.kRead)}</span><h1>${esc(taskTitle('r',n))}</h1><span class="chip" style="align-self:flex-start">${esc(T_.variant)} ${CURV}</span>
    ${list.map(R=>`<div class="group">${docHTML(R)}${R.qs.map((_,k)=>`<section class="panel qcard" id="q-${R.id}-${k}"></section>`).join('')}<div class="trd" id="trd-${R.id}" hidden>${trDetails(R)}</div></div>`).join('')}
    <section class="panel" id="t-res" hidden></section></div>`;
  wireBack(reading);
  let qi = 0;
  list.forEach(R => { let left = R.qs.length; R.qs.forEach((_,k) => readQ($(`#q-${R.id}-${k}`), R, k, {label: T_.qOf(++qi, total), toText: R.task !== 2, onAnswer: r => { done++; if (r) ok++; if (--left === 0) $(`#trd-${R.id}`).hidden = false;
    if (done === total){ const box = $('#t-res'); box.hidden = false; box.innerHTML = `<span class="eyebrow">${esc(T_.taskRes)}</span><div class="stat"><b>${ok}/${total}</b><span>${esc(T_.readScore(ok,total))}</span></div><div class="row">${n<4?`<button class="btn primary" id="t-next" type="button">${esc(T_.nextTask)}</button>`:''}<button class="btn" id="t-all" type="button">${esc(T_.backTasks)}</button></div>`;
      const nx = $('#t-next'); if (nx) nx.onclick = () => go(() => readTask(n+1)); $('#t-all').onclick = () => go(reading); } }})); });
}

// ---------- listening group renderer (tareas 3 and 4) ----------
function audGroup(box, G, {exam=true, feedback=true, chosen={}, onAnswer, only}={}){
  const T_ = t(), lang = S.set.lang, x = lang === 'es' ? null : G.tr && G.tr[lang];
  const trm = lang === 'es' ? 'off' : (exam && !S.set.trExam ? 'off' : S.set.tr), hid = trm === 'tap' ? ' hidden' : '', show = trm !== 'off';
  const idx = only === undefined ? G.qs.map((_,k)=>k) : [only];
  const lines = (only !== undefined && G.msgs) ? G.msgs[only].lines : G.lines;
  let plays = 0, left = idx.length;
  TTS.newCast();
  const stmtList = G.select ? `<div class="stmts"><span class="eyebrow">${esc(T_.stmtsT)}</span><ol type="A">${G.stmts.map((s,i)=>`<li><span lang="es">${esc(s)}</span>${show&&lang!=='es'?`<span class="tr"${hid}>${esc(G.stmtsTr[lang][i])}</span>`:''}</li>`).join('')}</ol></div>` : '';
  const ctxTr = G.select ? null : (x && x.ctx);
  box.innerHTML = `<div class="qhead"><span class="chip t">${esc(taskTitle('a', G.task))}</span><span class="sp"></span>${show&&trm==='tap'&&lang!=='es'?`<button type="button" class="trbtn" aria-expanded="false">${esc(T_.translate)}</button>`:''}</div>
    <p class="note" lang="es">${esc(G.ctx)}</p>${show&&ctxTr?`<p class="tr"${hid}>${esc(ctxTr)}</p>`:''}
    <div class="player"><button class="btn primary a-play" type="button">${esc(T_.play)}</button>${exam?'':`<label class="radio slow"><input type="checkbox" class="a-slow" ${S.set.audSlow?'checked':''}> ${esc(T_.slow)}</label>`}<span class="note a-left" role="status">${exam?esc(T_.playsLeft(2)):''}</span></div>${noVoiceHTML(lines, G.names ? {f:G.names[0], m:G.names[1]} : null)}
    ${stmtList}
    <div class="gqs">${idx.map(k=>{const q=G.qs[k];
      if (G.select) return `<div class="gq" data-k="${k}"><label class="selrow"><span class="qtext sm" lang="es">${esc(q.q)}</span><select data-k="${k}" aria-label="${esc(q.q)}"><option value="">${esc(T_.choose)}</option>${G.stmts.map((s,i)=>`<option value="${i}" ${chosen[k]===i?'selected':''}>${'ABCDEFGHIJ'[i]}. ${esc(s)}</option>`).join('')}</select></label><div class="fb"></div></div>`;
      return `<div class="gq" data-k="${k}"><p class="qtext sm" lang="es">${esc(q.q)}</p>${show&&lang!=='es'?`<p class="tr"${hid}>${esc(q.tr[lang])}</p>`:''}<div class="opts row3">${G.names.map((nm,j)=>`<button type="button" class="opt ${chosen[k]===j?'sel':''}" data-j="${j}"><span lang="es">${esc(nm)}</span></button>`).join('')}</div><div class="fb"></div></div>`;}).join('')}</div>
    <div class="g-after"></div>`;
  wireTr(box);
  const playBtn = box.querySelector('.a-play'), leftEl = box.querySelector('.a-left'), slow = box.querySelector('.a-slow');
  if (slow) slow.onchange = () => { S.set.audSlow = slow.checked; save(); };
  playBtn.onclick = () => {
    if (playBtn.dataset.on){ TTS.stop(); playBtn.dataset.on=''; playBtn.textContent = T_.play; return; }
    if (exam && plays >= 2 && left > 0) return;
    plays++; playBtn.dataset.on = '1'; playBtn.textContent = T_.stop;
    if (exam) leftEl.textContent = T_.playsLeft(Math.max(0, 2 - plays));
    TTS.speak(lines, (!exam && S.set.audSlow) ? 0.7 : 0.95, () => { playBtn.dataset.on=''; playBtn.textContent = T_.play; if (exam && plays >= 2 && left > 0){ playBtn.disabled = true; leftEl.textContent = T_.noPlays; } });
  };
  const answer = (k, val, wrap) => {
    const q = G.qs[k], ok = val === q.a;
    if (!feedback){ onAnswer && onAnswer(k, val, ok); return; }
    left--;
    drec(`a:${G.id}:${k}`, ok);
    const right = G.select ? `${'ABCDEFGHIJ'[q.a]}. ${G.stmts[q.a]}` : G.names[q.a];
    const scr = G.select ? `<details class="script"><summary>${esc(T_.transcript)}</summary><p lang="es">${esc(q.script)}</p>${lang!=='es'?`<p class="tr">${esc(q.scriptTr[lang])}</p>`:''}</details>` : '';
    wrap.querySelector('.fb').innerHTML = `<p class="feedback ${ok?'ok':'no'}">${esc(ok?T_.correct:T_.incorrect)} ${ok?'':'<span lang="es">'+esc(right)+'</span>'}</p><div class="tipbox"><p>${esc(loc(q.tip))}</p></div>${scr}`;
    if (left === 0){ playBtn.disabled = false; if (exam) leftEl.textContent = '';
      if (!G.select) box.querySelector('.g-after').innerHTML = `<details class="script"><summary>${esc(T_.transcript)}</summary><ol>${G.lines.map((l,j)=>`<li><span class="who">${esc(l.s==='m'?G.names[1]:G.names[0])}</span><span lang="es">${esc(l.t)}</span>${x?`<span class="tr">${esc(x.lines[j])}</span>`:''}</li>`).join('')}</ol></details>`; }
    onAnswer && onAnswer(k, val, ok);
  };
  box.querySelectorAll('.gq').forEach(wrap => {
    const k = +wrap.dataset.k;
    wrap.querySelectorAll('.opt').forEach(b => b.onclick = () => {
      const j = +b.dataset.j;
      if (!feedback){ wrap.querySelectorAll('.opt').forEach(o => o.classList.toggle('sel', o === b)); return answer(k, j, wrap); }
      wrap.querySelectorAll('.opt').forEach(o => { o.disabled = true; const jj = +o.dataset.j; if (jj === G.qs[k].a) o.classList.add('right'); else if (jj === j) o.classList.add('wrong'); });
      answer(k, j, wrap);
    });
    const sel = wrap.querySelector('select');
    if (sel) sel.onchange = () => { if (sel.value === '') return; const v = +sel.value; if (feedback){ sel.disabled = true; sel.classList.add(v === G.qs[k].a ? 'ok' : 'no'); } answer(k, v, wrap); };
  });
}

// ---------- listening practice ----------
function listening(){
  syncV(); const T_ = t();
  view.innerHTML = `<div class="stack">${backRow(deleStudy, T_.deleStudy)}<span class="eyebrow">DELE A2 · ${esc(T_.kAud)}</span><h1>${esc(T_.audTitle)}</h1><p class="lede">${esc(T_.audLede)}</p>
    <section class="panel"><div class="radios">
      <label class="radio"><input type="radio" name="amode" id="amode-exam" value="exam" ${S.set.audMode!=='practice'?'checked':''}> <span><b>${esc(T_.modeExam)}</b><br><span class="note">${esc(T_.modeExamHint)}</span></span></label>
      <label class="radio"><input type="radio" name="amode" id="amode-practice" value="practice" ${S.set.audMode==='practice'?'checked':''}> <span><b>${esc(T_.modePractice)}</b><br><span class="note">${esc(T_.modePracticeHint)}</span></span></label>
    </div><div style="margin-top:12px">${voiceBoxHTML()}</div></section>${varPickHTML()}
    <div class="tareas" style="gap:10px">${[1,2,3,4].map(n=>`<button class="btn" data-n="${n}" type="button">${esc(taskTitle('a',n))}<small>${esc(T_.nQ(taskCount('a',n)))} · ${esc(pctTxt(taskAcc('a',n)))}</small></button>`).join('')}</div>
    <p class="note">${esc(T_.audNote)} <a href="${DELE_A2_URL}" target="_blank" rel="noopener">${esc(T_.audNoteLink)}</a>.</p></div>`;
  wireBack(deleStudy); wireVoiceBox(); wireVar(listening);
  view.querySelectorAll('input[name=amode]').forEach(i => i.onchange = () => { S.set.audMode = i.value; save(); });
  view.querySelectorAll('[data-n]').forEach(b => b.onclick = () => { const n = +b.dataset.n; go(() => n <= 2 ? audRun(n, 0, []) : groupRun(n)); });
}
function audRun(n, i, results){
  current = () => audRun(n, i, results);
  const T_ = t(), list = AT(n), exam = S.set.audMode !== 'practice';
  view.innerHTML = `<div class="stack">${backRow(listening, T_.backTasks)}<div class="row"><span class="eyebrow">${esc(taskTitle('a',n))} · ${i+1}/${list.length}</span><span class="sp"></span><span class="chip">${esc(exam?T_.modeExam:T_.modePractice)}</span></div>
    <section class="panel qcard" id="acard"></section><div id="a-after"></div></div>`;
  wireBack(listening);
  audItem($('#acard'), list[i], {exam, feedback:true, onAnswer: ok => {
    results.push({id:list[i].id, ok});
    $('#a-after').innerHTML = `<div class="row"><span class="sp"></span><button class="btn primary" id="a-next" type="button">${esc(T_.next)}</button></div>`;
    $('#a-next').onclick = () => i+1 < list.length ? go(() => audRun(n, i+1, results)) : go(() => audDone(n, results));
  }});
}
function audDone(n, results){
  current = () => audDone(n, results);
  const T_ = t(), ok = results.filter(r=>r.ok).length, wrong = results.filter(r=>!r.ok).map(r=>AUD.find(a=>a.id===r.id));
  view.innerHTML = `<div class="stack"><section class="panel"><span class="eyebrow">${esc(taskTitle('a',n))}</span>
    <div class="stat"><b>${ok}/${results.length}</b><span>${esc(T_.audScore(ok, results.length))}</span></div>
    ${wrong.length ? `<h2>${esc(T_.audErr)}</h2><div class="blist">${wrong.map(w=>`<div class="bitem"><span class="bm">${esc(loc(AUD_TOPICS[w.topic]))}</span><span class="bq" lang="es">${esc(w.q)}</span><span>${esc(loc(w.tip))}</span></div>`).join('')}</div>` : `<p class="lede">${esc(T_.audAllOk)}</p>`}</section>
    <div class="actions">${n<4?`<button class="btn primary" id="a-nt" type="button">${esc(T_.nextTask)}</button>`:''}<button class="btn" id="a-all" type="button">${esc(T_.backTasks)}</button></div></div>`;
  const nt = $('#a-nt'); if (nt) nt.onclick = () => go(() => n+1 <= 2 ? audRun(n+1, 0, []) : groupRun(n+1));
  $('#a-all').onclick = () => go(listening);
}
function groupRun(n){
  current = () => groupRun(n);
  const T_ = t(), G = AG(n), exam = S.set.audMode !== 'practice'; let ok = 0, done = 0;
  view.innerHTML = `<div class="stack">${backRow(listening, T_.backTasks)}<div class="row"><span class="eyebrow">DELE A2 · ${esc(T_.kAud)}</span><span class="sp"></span><span class="chip">${esc(exam?T_.modeExam:T_.modePractice)}</span></div>
    <section class="panel qcard" id="gcard"></section><section class="panel" id="t-res" hidden></section></div>`;
  wireBack(listening);
  audGroup($('#gcard'), G, {exam, feedback:true, onAnswer: (k, v, r) => { done++; if (r) ok++;
    if (done === G.qs.length){ const box = $('#t-res'); box.hidden = false; box.innerHTML = `<span class="eyebrow">${esc(T_.taskRes)}</span><div class="stat"><b>${ok}/${done}</b><span>${esc(T_.audScore(ok,done))}</span></div><div class="row">${n<4?`<button class="btn primary" id="t-next" type="button">${esc(T_.nextTask)}</button>`:''}<button class="btn" id="t-all" type="button">${esc(T_.backTasks)}</button></div>`;
      const nx = $('#t-next'); if (nx) nx.onclick = () => go(() => groupRun(n+1)); $('#t-all').onclick = () => go(listening); } }});
}

// ---------- DELE mock exam (full) ----------
let DM = null;
const AUD_STEPS = () => [...AT(1).map(it=>({it})), ...AT(2).map(it=>({it})), {G:AG(3)}, {G:AG(4)}];
function deleMock(){
  syncV(); const T_ = t(), full = S.set.mockFull !== false;
  view.innerHTML = `<div class="stack">${backRow(deleHub, 'DELE A2')}<span class="eyebrow">DELE A2</span><h1>${esc(T_.mockTitle)}</h1>
    <p class="summary">${esc(full ? T_.mSumFull : T_.mSumShort)}</p>
    <p class="note">${esc(T_.mFormatNote)} <a href="${DELE_A2_URL}" target="_blank" rel="noopener">${esc(T_.deleNoteLink)}</a>.</p>
    <section class="panel"><div class="radios">${[['full',T_.mockFull,T_.mockFullSub],['short',T_.mockShort,T_.mockShortSub]].map(([v,l,h])=>`<label class="radio"><input type="radio" name="mkind" value="${v}" ${full===(v==='full')?'checked':''}> <span><b>${esc(l)}</b><br><span class="note">${esc(h)}</span></span></label>`).join('')}</div></section>
    <section class="panel"><h2>${esc(T_.rulesT)}</h2><ul class="focus">${T_.mRules(full).map(r=>`<li>${esc(r)}</li>`).join('')}</ul>
      <details class="script"><summary>${esc(T_.mDiffT)}</summary><ul class="focus">${T_.mDiff.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></details>
      <details class="script"><summary>${esc(T_.breakdownT)}</summary>
        <p><b>${esc(T_.partRead)} · ${esc(T_.durR)}</b></p><ul class="focus">${[1,2,3,4].map(n=>`<li>${esc(taskTitle('r',n))} · ${esc(T_.nQ(taskCount('r',n)))}</li>`).join('')}</ul>
        <p><b>${esc(T_.partAud)} · ${esc(T_.durA)}</b></p><ul class="focus">${[1,2,3,4].map(n=>`<li>${esc(taskTitle('a',n))} · ${esc(T_.nQ(taskCount('a',n)))}</li>`).join('')}</ul>
        ${full?`<p><b>${esc(T_.partWrite)} · ${esc(T_.durW)}</b></p><ul class="focus"><li>${esc(T_.wT1)}</li><li>${esc(T_.wT2)}</li></ul><p><b>${esc(T_.partSpeak)}</b></p><ul class="focus"><li>${esc(T_.sT1)}</li><li>${esc(T_.sT2)}</li><li>${esc(T_.sT3)}</li></ul>`:''}
      </details></section>
    <section class="panel">${varPickHTML(T_.verPick)}<p class="note">${esc(T_.verHint)}</p></section>
    <section class="panel"><h2>${esc(T_.voices)}</h2>${voiceBoxHTML()}</section>
    <div class="row"><button class="btn primary" id="m-start" type="button">${esc(T_.mockStart)} · ${esc(T_.variant)} ${CURV}</button></div></div>`;
  wireBack(deleHub); wireVoiceBox(); wireVar(deleMock);
  view.querySelectorAll('input[name=mkind]').forEach(i => i.onchange = () => { S.set.mockFull = i.value === 'full'; save(); deleMock(); });
  $('#m-start').onclick = () => { DM = {ans:{}, v:CURV, part:'r', full: S.set.mockFull !== false, end: Date.now() + 60*60000}; go(() => mockRead(1)); };
}
function mockTimer(onUp){
  stopTimer();
  const tick = () => { const l = DM.end - Date.now(); setTimer(l); warnCheck(DM.end, DM); if (l <= 0){ stopTimer(); onUp(); } };
  tick(); timer = setInterval(tick, 1000);
}
function toListening(){ TTS.stop(); DM.part = 'a'; DM.warned = false; DM.end = Date.now() + 40*60000; go(() => mockAud(0)); }
function mockRead(n){
  current = () => mockRead(n); CURV = DM.v || 1;
  const T_ = t(), list = RT(n);
  const total = list.reduce((s,R)=>s+R.qs.length,0); let qi = 0;
  view.innerHTML = `<div class="stack mock"><span class="eyebrow">${esc(T_.readTaskOf(n))}</span><h2 class="task-t">${esc(loc(TASKN.r[n]))}</h2>
    ${list.map(R=>`<div class="group">${docHTML(R)}${R.qs.map((_,k)=>`<section class="panel qcard" id="q-${R.id}-${k}"></section>`).join('')}</div>`).join('')}
    <div class="row">${n>1?`<button class="btn" id="m-prev" type="button">${esc(T_.prevTask)}</button>`:''}<span class="sp"></span><button class="btn primary" id="m-next" type="button">${esc(n<4?T_.nextTask:T_.toAud)}</button></div></div>`;
  EXAM_ON = true; saveCur({t:'dele', DM, at:{p:'r', n}});
  list.forEach(R => R.qs.forEach((_,k) => { const key = `r:${R.id}:${k}`; readQ($(`#q-${R.id}-${k}`), R, k, {exam:true, chosen: DM.ans[key], label: T_.qOf(++qi, total), toText: R.task !== 2, onAnswer: j => { DM.ans[key] = j; save(); }}); }));
  wireToText();
  const pv = $('#m-prev'); if (pv) pv.onclick = () => go(() => mockRead(n-1));
  $('#m-next').onclick = () => n < 4 ? go(() => mockRead(n+1)) : toListening();
  mockTimer(toListening);
}
function mockAud(i){
  current = () => mockAud(i); CURV = DM.v || 1;
  const T_ = t(), steps = AUD_STEPS(), st = steps[i];
  const task = st.it ? st.it.task : st.G.task;
  const inTask = st.it ? steps.slice(0, i+1).filter(x => x.it && x.it.task === task).length : 0;
  view.innerHTML = `<div class="stack mock"><span class="eyebrow">${esc(T_.audTaskOf(task))}${st.it?' · '+esc(T_.recOf(inTask, AT(task).length)):''}</span><h2 class="task-t">${esc(loc(TASKN.a[task]))}</h2>
    <section class="panel qcard" id="ma"></section>
    <div class="row"><span class="sp"></span><button class="btn primary" id="m-next" type="button">${esc(i+1<steps.length?T_.next:(DM.full?T_.toWrite:T_.finishMock))}</button></div></div>`;
  EXAM_ON = true; saveCur({t:'dele', DM, at:{p:'a', i}});
  if (st.it) audItem($('#ma'), st.it, {exam:true, feedback:false, chosen: DM.ans['a:'+st.it.id], onAnswer: (ok,k) => { DM.ans['a:'+st.it.id] = k; save(); }});
  else { const ch = {}; st.G.qs.forEach((_,k) => { const v = DM.ans[`a:${st.G.id}:${k}`]; if (v !== undefined) ch[k] = v; });
    audGroup($('#ma'), st.G, {exam:true, feedback:false, chosen: ch, onAnswer: (k, v) => { DM.ans[`a:${st.G.id}:${k}`] = v; save(); }}); }
  $('#m-next').onclick = () => { TTS.stop(); i+1 < steps.length ? go(() => mockAud(i+1)) : mockFinish(); };
  mockTimer(mockFinish);
}
function mockFinish(){
  if (!DM || DM.done) return; stopTimer(); TTS.stop(); CURV = DM.v || 1;
  if (!DM.res) mockScore();
  // full exam: after reading + listening come writing and speaking
  if (DM.full && !DM.wsDone && !DM.skipWS){ if (DM.part === 'w') return go(mockWrite); if (DM.part === 's') return go(mockSpeak); return toWriting(); }
  DM.done = true; clearCur(); EXAM_ON = false;
  const R = DM.res, D = DM;
  go(() => mockResult(R.r, R.a, R.tasks, R.review, D));
}
function mockScore(){
  const tasks = {}, review = [];
  const add = (p, n, key, ok) => { const id = p+n; tasks[id] = tasks[id] || [0,0]; tasks[id][1]++; if (ok) tasks[id][0]++; drec(key, ok); if (!ok) review.push(key); };
  [1,2,3,4].forEach(n => RT(n).forEach(R => R.qs.forEach((q,k) => { const key=`r:${R.id}:${k}`; add('r', n, key, DM.ans[key] === q.a); })));
  [1,2].forEach(n => AT(n).forEach(it => { const key=`a:${it.id}`; add('a', n, key, DM.ans[key] === it.ans); }));
  [3,4].forEach(n => { const G = AG(n); G.qs.forEach((q,k) => { const key=`a:${G.id}:${k}`; add('a', n, key, DM.ans[key] === q.a); }); });
  const sum = p => [1,2,3,4].reduce((s,n) => [s[0]+tasks[p+n][0], s[1]+tasks[p+n][1]], [0,0]);
  const r = sum('r'), a = sum('a');
  S.dmocks.push({at:Date.now(), v:CURV, ok:r[0]+a[0], n:r[1]+a[1], r, a, tasks}); save();
  DM.res = {r, a, tasks, review};
}
function rightTxt(d){
  if (d.kind === 'r'){ const q = d.R.qs[d.k]; return d.R.match ? `${q.o[q.a]} · ${d.R.docs[q.a].title}` : q.o[q.a]; }
  if (d.kind === 'a') return d.it.opts[d.it.ans];
  const q = d.G.qs[d.k]; return d.G.select ? `${'ABCDEFGHIJ'[q.a]}. ${d.G.stmts[q.a]}` : d.G.names[q.a];
}
function qTxt(d){ return d.kind === 'r' ? d.R.qs[d.k].q : d.kind === 'a' ? d.it.q : d.G.qs[d.k].q; }
function tipTxt(d){ return loc(d.kind === 'r' ? d.R.qs[d.k].tip : d.kind === 'a' ? d.it.tip : d.G.qs[d.k].tip); }
function mockResult(r, a, tasks, review, D){
  current = () => mockResult(r, a, tasks, review, D);
  const T_ = t(), pr = Math.round(r[0]/r[1]*100), pa = Math.round(a[0]/a[1]*100), tot = Math.round((r[0]+a[0])/(r[1]+a[1])*100), pass = pr >= 60 && pa >= 60;
  const row = (label, x) => { const p = Math.round(x[0]/x[1]*100); return `<div class="trow"><span class="tt">${esc(label)}</span><span class="tc">${x[0]}/${x[1]}</span><div class="track"><i class="${barCls(p)}" style="width:${p}%"></i></div></div>`; };
  view.innerHTML = `<div class="stack"><section class="panel"><span class="eyebrow">${esc(T_.mockRes)}</span>
    <div class="stat"><span class="verdict ${pass?'ok':'no'}">${tot} %</span></div>
    <div class="tareas">${row(T_.kRead, r)}${row(T_.kAud, a)}</div><p class="note">${esc(T_.mockRef)} ${review.length?esc(T_.mockAdded):''}</p></section>
    <section class="panel"><h2>${esc(T_.byTask)}</h2><div class="tareas">${[1,2,3,4].map(n=>row(`${T_.kRead} · ${taskTitle('r',n)}`, tasks['r'+n])).join('')}${[1,2,3,4].map(n=>row(`${T_.kAud} · ${taskTitle('a',n)}`, tasks['a'+n])).join('')}</div></section>
    ${wsResultHTML(D)}
    ${review.length?`<section class="panel"><h2>${esc(T_.review)}</h2><div class="blist">${review.map(k=>{const d=dItem(k); return `<div class="bitem"><span class="bm">${esc(d.kind==='r'?T_.kRead:T_.kAud)}</span><span class="bq" lang="es">${esc(qTxt(d))}</span><span class="ba" lang="es">${esc(rightTxt(d))}</span><span>${esc(tipTxt(d))}</span></div>`}).join('')}</div></section>`:''}
    <div class="actions"><button class="btn primary" id="mr-wrong" type="button" ${review.length?'':'disabled'}>${esc(T_.deleWrong)}</button><button class="btn" id="mr-prog" type="button">${esc(T_.myProgress)}</button><button class="btn" id="mr-hub" type="button">DELE A2</button></div></div>`;
  $('#mr-wrong').onclick = () => go(deleMistakes);
  $('#mr-prog').onclick = () => go(deleReport);
  $('#mr-hub').onclick = () => go(deleHub);
}

// ---------- DELE mistakes ----------
function deleMistakes(prevKey){
  const T_ = t(), keys = dWrongKeys();
  if (!keys.length){
    view.innerHTML = `<div class="stack">${backRow(deleHub, 'DELE A2')}<h1>${esc(T_.mistTitle)}</h1><section class="panel"><p class="lede">${esc(T_.mistEmpty)}</p><div class="row"><button class="btn primary" id="x-mock" type="button">${esc(T_.deleMock)}</button><button class="btn" id="x-study" type="button">${esc(T_.deleStudy)}</button></div></section></div>`;
    wireBack(deleHub); $('#x-mock').onclick = () => go(deleMock); $('#x-study').onclick = () => go(deleStudy); return;
  }
  const pool = keys.filter(k => k !== prevKey), src = pool.length ? pool : keys, key = src[Math.floor(Math.random()*src.length)], d = dItem(key);
  current = () => deleMistakes(prevKey);
  const kindName = d.kind === 'g' ? T_.kGram + ' · ' + loc(d.g.name) : d.kind === 'r' ? `${T_.kRead} · ${taskTitle('r', d.R.task)}` : `${T_.kAud} · ${taskTitle('a', d.kind==='a'?d.it.task:d.G.task)}`;
  view.innerHTML = `<div class="stack">${backRow(deleHub, 'DELE A2')}<div class="row"><span class="eyebrow">${esc(T_.mistTitle)}</span><span class="sp"></span><span class="chip">${esc(T_.pending(keys.length))}</span></div>
    <p class="note">${esc(T_.mistLede(keys.length))}</p><span class="chip t" style="align-self:flex-start">${esc(kindName)}</span>
    ${d.kind==='r'?docHTML(d.R):''}
    <section class="panel qcard" id="mx"></section><div id="mx-after"></div></div>`;
  wireBack(deleHub);
  const after = () => { $('#mx-after').innerHTML = `<div class="row"><span class="sp"></span><button class="btn primary" id="mx-next" type="button">${esc(T_.next)}</button></div>`; const n = $('#mx-next'); n.onclick = () => go(() => deleMistakes(key)); n.focus(); };
  if (d.kind === 'g') gapItem($('#mx'), d.it, d.g.id, (ok, fb) => { fb.innerHTML = `<p class="feedback ${ok?'ok':'no'}">${esc(ok?T_.correct:T_.incorrect)}</p><div class="tipbox"><span class="eyebrow">${esc(T_.mnemo)}</span><p>${esc(loc(d.g.mnemo))}</p><p class="note">${esc(loc(d.g.rule))}</p></div>`; after(); });
  if (d.kind === 'r') readQ($('#mx'), d.R, d.k, {onAnswer: after});
  if (d.kind === 'a') audItem($('#mx'), d.it, {exam:false, feedback:true, onAnswer: after});
  if (d.kind === 'ag') audGroup($('#mx'), d.G, {exam:false, feedback:true, only:d.k, onAnswer: after});
}

// ---------- DELE progress ----------
function deleReport(){
  const T_ = t(), parts = [{n:T_.kRead, x:partAcc('r:')},{n:T_.kAud, x:partAcc('a:')},{n:T_.kGram, x:partAcc('g:')}];
  const wrong = dWrongKeys().length, mocks = S.dmocks;
  const audErr = {};
  Object.keys(S.dq).filter(k => k.startsWith('a:')).forEach(k => { const d = dItem(k); if (!d) return; const topic = d.kind === 'a' ? d.it.topic : d.G.topic; const s = S.dq[k]; audErr[topic] = (audErr[topic]||0) + (s.n - s.ok); });
  const audList = Object.entries(audErr).filter(e => e[1] > 0).sort((a,b) => b[1]-a[1]);
  const gr = GRAM.map(g => { const s = S.gram[g.id]; return {g, p: s && s.n ? Math.round(s.ok/s.n*100) : null}; });
  const tk = [...[1,2,3,4].map(n => ({label:`${T_.kRead} · ${taskTitle('r',n)}`, p:taskAcc('r',n)})), ...[1,2,3,4].map(n => ({label:`${T_.kAud} · ${taskTitle('a',n)}`, p:taskAcc('a',n)}))];
  const focus = [];
  const weakPart = parts.filter(p => p.x.n >= 3).sort((a,b) => a.x.p - b.x.p)[0]; if (weakPart && weakPart.x.p < 80) focus.push(T_.focusPart(weakPart.n.toLowerCase(), weakPart.x.p));
  const weakTask = tk.filter(x => x.p !== null && x.p < 70).sort((a,b) => a.p - b.p)[0]; if (weakTask) focus.push(`${weakTask.label}: ${weakTask.p} %`);
  const weakG = gr.filter(x => x.p !== null && x.p < 80).sort((a,b) => a.p - b.p)[0]; if (weakG) focus.push(T_.focusTopicG(loc(weakG.g.name)));
  if (wrong) focus.push(T_.focusMist(wrong));
  if (!mocks.length) focus.push(T_.focusMock);
  const bar = (label, p, attrs='') => `<div class="trow" ${attrs}><span class="tt">${esc(label)}</span><span class="tc">${esc(pctTxt(p))}</span><div class="track"><i class="${barCls(p)}" style="width:${p||0}%"></i></div></div>`;
  view.innerHTML = `<div class="stack">${backRow(deleHub, 'DELE A2')}<h1>${esc(T_.dprogTitle)}</h1>
    <section class="panel"><h2>${esc(T_.repFocus)}</h2><ul class="focus">${focus.map(f=>`<li>${esc(f)}</li>`).join('')}</ul></section>
    <section class="panel"><h2>${esc(T_.byPart)}</h2><div class="tareas">${parts.map(p=>bar(p.n, p.x.p)).join('')}</div></section>
    <section class="panel"><h2>${esc(T_.byTask)}</h2><div class="tareas">${tk.map(x=>bar(x.label, x.p)).join('')}</div></section>
    <section class="panel"><h2>${esc(T_.mocksT)}</h2>${mocks.length?`<div class="blist">${mocks.slice(-8).reverse().map(m=>`<div class="bitem"><span class="bm">${new Date(m.at).toLocaleDateString(S.set.lang,{day:'numeric',month:'short'})}</span><span class="bq">${esc(T_.variant)} ${m.v||1} · ${Math.round(m.ok/m.n*100)} % · ${esc(T_.kRead)} ${m.r[0]}/${m.r[1]} · ${esc(T_.kAud)} ${m.a[0]}/${m.a[1]}</span></div>`).join('')}</div>`:`<p class="note">${esc(T_.noMocks)}</p>`}</section>
    <section class="panel"><h2>${esc(T_.gramTopicsT)}</h2><div class="tareas">${gr.map(x=>`<button type="button" class="trow trbtn-row" data-g="${x.g.id}"><span class="tt" lang="es">${esc(loc(x.g.name))}</span><span class="tc">${esc(pctTxt(x.p))}</span><div class="track"><i class="${barCls(x.p)}" style="width:${x.p||0}%"></i></div></button>`).join('')}</div></section>
    ${audList.length?`<section class="panel"><h2>${esc(T_.audErrT)}</h2><div class="blist">${audList.map(([tp,n])=>`<div class="bitem"><span class="bq">${esc(loc(AUD_TOPICS[tp]))}</span><span class="bm">${esc(T_.repMissedN(n))}</span></div>`).join('')}</div></section>`:''}
    <div class="actions"><button class="btn primary" id="dp-wrong" type="button" ${wrong?'':'disabled'}>${esc(T_.deleWrong)}</button><button class="btn" id="dp-mock" type="button">${esc(T_.deleMock)}</button></div></div>`;
  wireBack(deleHub);
  view.querySelectorAll('[data-g]').forEach(b => b.onclick = () => go(() => gramTopic(b.dataset.g)));
  $('#dp-wrong').onclick = () => go(deleMistakes);
  $('#dp-mock').onclick = () => go(deleMock);
}
