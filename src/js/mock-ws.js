// ---------- full DELE mock: writing (Prueba 3) and speaking (Prueba 4) after reading + listening ----------
Object.assign(I18N.es,{mockFull:'Examen completo: 4 pruebas',mockFullSub:'Lectura, audición, escritura (45 min) y oral (12 min de preparación + 12 de conversación).',mockShort:'Solo lectura y audición',mockShortSub:'Las pruebas que se corrigen solas. 1 h 40 min.',
 partWrite:'Parte 3 · Expresión escrita',partSpeak:'Parte 4 · Expresión oral',durW:'45 minutos',toSpeak:'Ir a la prueba oral',toWrite:'Ir a la expresión escrita',finishAll:'Terminar el examen',chooseOpt:'Elige una opción',
 speakIntro:'Prepara las tareas 1 y 2 (12 minutos). Después habla y grábate: 2–3 minutos en cada tarea. La tarea 3 es una conversación con el examinador.',
 wsResT:'Escritura y oral: autoevaluación',wsResNote:'Estas pruebas las corrige un examinador. Aquí puedes comparar tu texto con el ejemplo y repasar la lista.',wsWords:(n,a,b)=>`${n} palabras (objetivo ${a}–${b})`,wsEmpty:'No has escrito nada en esta tarea.',wsRecs:n=>n?`Te has grabado en ${n} tarea${n===1?'':'s'}. Escúchate con calma y compara con los ejemplos.`:'No te has grabado. La próxima vez, prueba a grabarte: se aprende mucho escuchándose.',yourTextT:'Tu texto'});
Object.assign(I18N.en,{mockFull:'Full exam: 4 tests',mockFullSub:'Reading, listening, writing (45 min) and speaking (12 min preparation + 12 min conversation).',mockShort:'Reading and listening only',mockShortSub:'The tests that mark themselves. 1 h 40 min.',
 partWrite:'Part 3 · Writing',partSpeak:'Part 4 · Speaking',durW:'45 minutes',toSpeak:'Go to the speaking test',toWrite:'Go to the writing test',finishAll:'Finish the exam',chooseOpt:'Choose one option',
 speakIntro:'Prepare tasks 1 and 2 (12 minutes). Then speak and record yourself: 2–3 minutes for each task. Task 3 is a conversation with the examiner.',
 wsResT:'Writing and speaking: self-check',wsResNote:'An examiner marks these tests. Here you can compare your text with the sample and go through the checklist.',wsWords:(n,a,b)=>`${n} words (target ${a}–${b})`,wsEmpty:'You didn’t write anything for this task.',wsRecs:n=>n?`You recorded yourself for ${n} task${n===1?'':'s'}. Listen back calmly and compare with the samples.`:'You didn’t record yourself. Next time, give it a try: you learn a lot from hearing yourself.',yourTextT:'Your text'});
Object.assign(I18N.ru,{mockFull:'Полный экзамен: 4 части',mockFullSub:'Чтение, аудирование, письмо (45 мин) и устная часть (12 мин подготовки + 12 мин разговора).',mockShort:'Только чтение и аудирование',mockShortSub:'Части, которые проверяются автоматически. 1 ч 40 мин.',
 partWrite:'Часть 3 · Письмо',partSpeak:'Часть 4 · Устная часть',durW:'45 минут',toSpeak:'К устной части',toWrite:'К письменной части',finishAll:'Завершить экзамен',chooseOpt:'Выберите вариант',
 speakIntro:'Подготовьте задания 1 и 2 (12 минут). Потом говорите и записывайте себя: 2–3 минуты на каждое задание. Задание 3 — разговор с экзаменатором.',
 wsResT:'Письмо и устная часть: самопроверка',wsResNote:'Эти части оценивает экзаменатор. Здесь можно сравнить свой текст с примером и пройтись по чек-листу.',wsWords:(n,a,b)=>`слов: ${n} (нужно ${a}–${b})`,wsEmpty:'В этом задании вы ничего не написали.',wsRecs:n=>n?`Вы записали себя в заданиях: ${n}. Переслушайте спокойно и сравните с примерами.`:'Вы не записывали себя. В следующий раз попробуйте: себя со стороны слышно лучше.',yourTextT:'Ваш текст'});
Object.assign(I18N.uk,{mockFull:'Повний іспит: 4 частини',mockFullSub:'Читання, аудіювання, письмо (45 хв) та усна частина (12 хв підготовки + 12 хв розмови).',mockShort:'Лише читання й аудіювання',mockShortSub:'Частини, які перевіряються автоматично. 1 год 40 хв.',
 partWrite:'Частина 3 · Письмо',partSpeak:'Частина 4 · Усна частина',durW:'45 хвилин',toSpeak:'До усної частини',toWrite:'До письмової частини',finishAll:'Завершити іспит',chooseOpt:'Оберіть варіант',
 speakIntro:'Підготуйте завдання 1 і 2 (12 хвилин). Потім говоріть і записуйте себе: 2–3 хвилини на кожне завдання. Завдання 3 — розмова з екзаменатором.',
 wsResT:'Письмо й усна частина: самоперевірка',wsResNote:'Ці частини оцінює екзаменатор. Тут можна порівняти свій текст із прикладом і пройтися чек-листом.',wsWords:(n,a,b)=>`слів: ${n} (треба ${a}–${b})`,wsEmpty:'У цьому завданні ви нічого не написали.',wsRecs:n=>n?`Ви записали себе в завданнях: ${n}. Переслухайте спокійно й порівняйте з прикладами.`:'Ви не записували себе. Наступного разу спробуйте: себе збоку чути краще.',yourTextT:'Ваш текст'});

const pick = a => a[Math.floor(Math.random()*a.length)];
// choose the writing and speaking tasks once per mock and keep them in DM (so resuming shows the same ones)
function wsSetup(){
  if (DM.ws) return;
  const s2 = pick(SPEAK.t2);
  DM.ws = {w1: pick(WRITE.filter(w=>w.task===1)).id, w2a: pick(WRITE.filter(w=>w.task===2 && w.opt===1)).id, w2b: pick(WRITE.filter(w=>w.task===2 && w.opt===2)).id, opt:1,
    s1: pick(SPEAK.t1).id, s2: s2.id, s3: SPEAK.t3.find(x => x.link === s2.id).id};
  DM.wr = {t1:'', t2:''}; DM.recs = 0;
}
function toWriting(){ TTS.stop(); DM.part = 'w'; DM.warned = false; DM.end = Date.now() + 45*60000; wsSetup(); go(mockWrite); }
function toSpeaking(){ TTS.stop(); DM.part = 's'; DM.warned = false; DM.end = Date.now() + 30*60000; go(mockSpeak); }
function wTaskHTML(w, key){
  const T_ = t(), lang = S.set.lang;
  return `${w.input?`<article class="panel doc" lang="es"><span class="eyebrow">De: ${esc(w.input.from)}</span><p>${esc(w.input.text)}</p></article>`:''}
    ${w.data?`<article class="panel doc" lang="es"><span class="eyebrow">${esc(T_.dataT)}</span><ul class="focus">${w.data.map(d=>`<li>${esc(d)}</li>`).join('')}</ul></article>`:''}
    <section class="panel"><p lang="es"><b>${esc(w.instr)}</b></p>${lang!=='es'&&S.set.trExam?`<p class="tr">${esc(w.instrTr[lang])}</p>`:''}
      <label class="vrow"><span>${esc(T_.yourText)}</span><textarea class="mw-txt" data-k="${key}" data-w="${w.id}" rows="9" lang="es" spellcheck="false">${esc(DM.wr[key]||'')}</textarea></label>
      <p class="note mw-count" data-k="${key}" role="status"></p><ul class="focus mw-hints" data-k="${key}"></ul></section>`;
}
function mockWrite(){
  current = mockWrite; CURV = DM.v || 1;
  const T_ = t(), w1 = WRITE.find(x=>x.id===DM.ws.w1), w2 = WRITE.find(x=>x.id===(DM.ws.opt===2?DM.ws.w2b:DM.ws.w2a));
  view.innerHTML = `<div class="stack"><div class="row"><span class="eyebrow">${esc(T_.partWrite)}</span><span class="sp"></span><span class="chip">${esc(T_.durW)}</span></div>
    <h2>${esc(T_.wT1)}</h2>${wTaskHTML(w1, 't1')}
    <h2>${esc(T_.wT2)}</h2><div class="filters" role="group" aria-label="${esc(T_.chooseOpt)}"><span class="note" style="align-self:center">${esc(T_.chooseOpt)}:</span>${[1,2].map(o=>`<button type="button" class="chip" data-opt="${o}" aria-pressed="${DM.ws.opt===o}">${o}</button>`).join('')}</div>
    ${wTaskHTML(w2, 't2')}
    <div class="row"><span class="sp"></span><button class="btn primary" id="mw-next" type="button">${esc(T_.toSpeak)}</button></div></div>`;
  EXAM_ON = true; saveCur({t:'dele', DM, at:{p:'w'}});
  view.querySelectorAll('[data-opt]').forEach(b => b.onclick = () => { DM.ws.opt = +b.dataset.opt; saveCur({t:'dele', DM, at:{p:'w'}}); mockWrite(); });
  view.querySelectorAll('.mw-txt').forEach(ta => {
    const w = WRITE.find(x => x.id === ta.dataset.w), k = ta.dataset.k, cnt = view.querySelector(`.mw-count[data-k="${k}"]`), hl = view.querySelector(`.mw-hints[data-k="${k}"]`);
    const upd = () => { const n = wc(ta.value); cnt.textContent = T_.words(n, w.words[0], w.words[1]); hl.innerHTML = writeHints(ta.value, w).map(h=>`<li>${esc(h)}</li>`).join(''); };
    ta.oninput = () => { DM.wr[k] = ta.value; clearTimeout(ta._t); ta._t = setTimeout(() => { saveCur({t:'dele', DM, at:{p:'w'}}); upd(); }, 400); cnt.textContent = T_.words(wc(ta.value), w.words[0], w.words[1]); };
    upd();
  });
  $('#mw-next').onclick = toSpeaking;
  mockTimer(toSpeaking);
}
function mockSpeak(){
  current = mockSpeak;
  const T_ = t(), s1 = SPEAK.t1.find(x=>x.id===DM.ws.s1), s2 = SPEAK.t2.find(x=>x.id===DM.ws.s2), s3 = SPEAK.t3.find(x=>x.id===DM.ws.s3);
  view.innerHTML = `<div class="stack"><div class="row"><span class="eyebrow">${esc(T_.partSpeak)}</span></div><p class="lede">${esc(T_.speakIntro)}</p>
    <div class="player"><span><b>${esc(T_.prep)}</b> · 12:00</span><button class="btn primary" id="ms-prep" type="button">${esc(T_.timerStart)}</button><span class="note mono" id="ms-prep-o"></span></div>
    <span class="eyebrow">${esc(T_.sT1)}</span><h2 lang="es">${esc(s1.title)}</h2>
    <section class="panel"><p><b>${esc(T_.pointsT)}</b></p><ul class="focus" lang="es">${s1.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul>${recorderHTML()}</section>
    <span class="eyebrow">${esc(T_.sT2)}</span><h2 lang="es">${esc(s2.title)}</h2>
    <section class="panel"><span class="eyebrow">${esc(T_.sceneT)}</span><ul class="focus" lang="es">${s2.scene.map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p><b>${esc(T_.guideQ)}</b></p><ul class="focus" lang="es">${s2.q.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>${recorderHTML()}</section>
    <span class="eyebrow">${esc(T_.sT3)}</span><h2 lang="es">${esc(s3.title)}</h2>
    <section class="panel"><p class="note">${esc(T_.roleT)}</p><p lang="es"><b>${esc(s3.role)}</b></p>
      <div class="player"><button class="btn primary" id="dl-next" type="button">${esc(T_.startDialog)}</button><span class="note mono" id="dl-o"></span></div><ol class="dlog" id="dl-log" lang="es"></ol>${recorderHTML()}</section>
    <div class="row"><span class="sp"></span><button class="btn primary" id="ms-done" type="button">${esc(T_.finishAll)}</button></div></div>`;
  EXAM_ON = true; saveCur({t:'dele', DM, at:{p:'s'}});
  spTimer($('#ms-prep'), $('#ms-prep-o'), 12*60);
  wireRecorders();
  // count each task where a recording was made
  view.querySelectorAll('.rec-a').forEach(a => a.addEventListener('loadedmetadata', () => { if (!a._counted){ a._counted = true; DM.recs = (DM.recs||0) + 1; } }));
  let i = 0; const nb = $('#dl-next'), log = $('#dl-log'); TTS.newCast();
  nb.onclick = () => { if (i >= s3.lines.length) return; const line = s3.lines[i++];
    log.insertAdjacentHTML('beforeend', `<li><span class="who">${esc(T_.examiner)}</span>${esc(line)}</li>`); TTS.speak([{s:'m', t:line}], 0.95);
    nb.textContent = i < s3.lines.length ? T_.nextLine : T_.dialogEnd; if (i >= s3.lines.length) nb.disabled = true; $('#dl-o').textContent = `${i}/${s3.lines.length}`; };
  $('#ms-done').onclick = () => { recStop(); DM.wsDone = true; mockFinish(); };
  mockTimer(() => { recStop(); DM.wsDone = true; mockFinish(); });
}
function wsResultHTML(D){
  if (!D || !D.full || !D.ws) return '';
  const T_ = t(), w1 = WRITE.find(x=>x.id===D.ws.w1), w2 = WRITE.find(x=>x.id===(D.ws.opt===2?D.ws.w2b:D.ws.w2a)), s1 = SPEAK.t1.find(x=>x.id===D.ws.s1), s2 = SPEAK.t2.find(x=>x.id===D.ws.s2);
  const wBlock = (w, txt, label) => { const n = wc(txt||''), ok = n >= w.words[0] && n <= w.words[1];
    return `<div class="bitem"><span class="bm">${esc(label)}</span>${txt?`<span class="${ok?'okc':'badc'} note">${esc(T_.wsWords(n, w.words[0], w.words[1]))}</span><details class="script"><summary>${esc(T_.yourTextT)}</summary><p lang="es" style="white-space:pre-line">${esc(txt)}</p></details>`:`<span class="note">${esc(T_.wsEmpty)}</span>`}
      <details class="script"><summary>${esc(T_.modelT)}</summary><p lang="es" style="white-space:pre-line">${esc(w.model)}</p></details></div>`; };
  return `<section class="panel"><h2>${esc(T_.wsResT)}</h2><p class="note">${esc(T_.wsResNote)}</p>
    <div class="blist">${wBlock(w1, D.wr.t1, T_.wT1)}${wBlock(w2, D.wr.t2, T_.wT2)}</div>
    <h3>${esc(T_.checkSelf)}</h3><ul class="focus">${(WCHECK[S.set.lang]||WCHECK.es).map(c=>`<li>${esc(c)}</li>`).join('')}</ul>
    <h3>${esc(T_.kSpeak)}</h3><p>${esc(T_.wsRecs(D.recs||0))}</p>
    <details class="script"><summary>${esc(T_.modelT)} · ${esc(s1.title)}</summary><p lang="es">${esc(s1.model)}</p></details>
    <details class="script"><summary>${esc(T_.modelT)} · ${esc(s2.title)}</summary><p lang="es">${esc(s2.model)}</p></details></section>`;
}
