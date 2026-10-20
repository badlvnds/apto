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

// ---------- mock exam: overview, progress labels, jump between text and question ----------
Object.assign(I18N.es,{mSumShort:'2 partes · 8 tareas · 100 minutos',mSumFull:'4 partes · 13 tareas · unas 2 h 50 min',rulesT:'Antes de empezar',breakdownT:'Ver todas las tareas',
 mRules:f=>[`Cada parte tiene su propio tiempo: lectura 60 min, audición 40 min${f?', escritura 45 min; el oral tiene 12 min de preparación':''}. El tiempo que sobra no pasa a la parte siguiente.`,'En lectura puedes volver a tareas anteriores y cambiar respuestas. En audición, como en el examen, cada audio suena dos veces y se avanza hacia delante. Al pasar a otra parte ya no se puede volver.','Tus respuestas se guardan solas. Si cierras la página o se recarga, sigue desde el inicio: el tiempo continúa corriendo.','Verás si aciertas solo al final, como en el examen real.'],
 verPick:'Elige una versión del examen',verHint:'Las versiones 1–4 tienen tareas y preguntas distintas. Puedes hacerlas todas.',readTaskOf:n=>`Lectura · tarea ${n} de 4`,audTaskOf:n=>`Audición · tarea ${n} de 4`,qOf:(k,n)=>`Pregunta ${k} de ${n}`,recOf:(k,n)=>`audio ${k} de ${n}`,
 toText:'Ver el texto',backToQ:'Volver a la pregunta',prevTask:'Tarea anterior',timeLeft:x=>`Tiempo restante: ${x}`,timerEnd:'Se acabó el tiempo.'});
Object.assign(I18N.en,{mSumShort:'2 parts · 8 tasks · 100 minutes',mSumFull:'4 parts · 13 tasks · about 2 h 50 min',rulesT:'Before you start',breakdownT:'See all the tasks',
 mRules:f=>[`Each part has its own time: reading 60 min, listening 40 min${f?', writing 45 min; speaking has 12 min of preparation':''}. Time you don’t use doesn’t carry over to the next part.`,'In reading you can go back to earlier tasks and change answers. In listening, as in the exam, each recording plays twice and you move forward. Once you move to another part you can’t go back.','Your answers save themselves. If you close the page or it reloads, continue from the home screen: the clock keeps running.','You’ll see whether you’re right only at the end, as in the real exam.'],
 verPick:'Choose an exam version',verHint:'Versions 1–4 contain different tasks and questions. You can take them all.',readTaskOf:n=>`Reading · task ${n} of 4`,audTaskOf:n=>`Listening · task ${n} of 4`,qOf:(k,n)=>`Question ${k} of ${n}`,recOf:(k,n)=>`recording ${k} of ${n}`,
 toText:'Show the text',backToQ:'Back to the question',prevTask:'Previous task',timeLeft:x=>`Time left: ${x}`,timerEnd:'Time’s up.'});
Object.assign(I18N.ru,{mSumShort:'2 части · 8 заданий · 100 минут',mSumFull:'4 части · 13 заданий · около 2 ч 50 мин',rulesT:'Перед началом',breakdownT:'Все задания',
 mRules:f=>[`У каждой части своё время: чтение 60 мин, аудирование 40 мин${f?', письмо 45 мин; на подготовку к устной части 12 мин':''}. Неиспользованное время на следующую часть не переносится.`,'В чтении можно вернуться к предыдущим заданиям и поменять ответы. В аудировании, как на экзамене, каждая запись звучит дважды и вы идёте только вперёд. После перехода к следующей части вернуться нельзя.','Ответы сохраняются сами. Если закрыть страницу или она перезагрузится, продолжите с главной: время при этом идёт.','Верно или нет, вы увидите только в конце, как на настоящем экзамене.'],
 verPick:'Выберите вариант экзамена',verHint:'В вариантах 1–4 разные задания и вопросы. Можно пройти все.',readTaskOf:n=>`Чтение · задание ${n} из 4`,audTaskOf:n=>`Аудирование · задание ${n} из 4`,qOf:(k,n)=>`Вопрос ${k} из ${n}`,recOf:(k,n)=>`запись ${k} из ${n}`,
 toText:'К тексту',backToQ:'Вернуться к вопросу',prevTask:'Предыдущее задание',timeLeft:x=>`Осталось: ${x}`,timerEnd:'Время вышло.'});
Object.assign(I18N.uk,{mSumShort:'2 частини · 8 завдань · 100 хвилин',mSumFull:'4 частини · 13 завдань · близько 2 год 50 хв',rulesT:'Перед початком',breakdownT:'Усі завдання',
 mRules:f=>[`Кожна частина має свій час: читання 60 хв, аудіювання 40 хв${f?', письмо 45 хв; на підготовку до усної частини 12 хв':''}. Невикористаний час на наступну частину не переноситься.`,'У читанні можна повернутися до попередніх завдань і змінити відповіді. В аудіюванні, як на іспиті, кожен запис звучить двічі й ви йдете лише вперед. Після переходу до наступної частини повернутися не можна.','Відповіді зберігаються самі. Якщо закрити сторінку або вона перезавантажиться, продовжте з головної: час при цьому йде.','Правильно чи ні, ви побачите лише наприкінці, як на справжньому іспиті.'],
 verPick:'Оберіть варіант іспиту',verHint:'У варіантах 1–4 різні завдання й питання. Можна пройти всі.',readTaskOf:n=>`Читання · завдання ${n} із 4`,audTaskOf:n=>`Аудіювання · завдання ${n} із 4`,qOf:(k,n)=>`Питання ${k} із ${n}`,recOf:(k,n)=>`запис ${k} із ${n}`,
 toText:'До тексту',backToQ:'Повернутися до питання',prevTask:'Попереднє завдання',timeLeft:x=>`Залишилося: ${x}`,timerEnd:'Час вийшов.'});
// "Show the text" scrolls up to the passage; a floating button brings you back to the same question
function wireToText(){
  const smooth = () => { try { return matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth'; } catch(e){ return 'auto'; } };
  view.querySelectorAll('.totext').forEach(b => b.onclick = () => {
    const doc = document.getElementById(b.dataset.doc), card = b.closest('.qcard'); if (!doc || !card) return;
    doc.scrollIntoView({behavior: smooth(), block:'start'});
    let fb = document.getElementById('backq');
    if (!fb){ fb = document.createElement('button'); fb.id = 'backq'; fb.type = 'button'; fb.className = 'btn primary backq'; view.appendChild(fb); }
    fb.textContent = '↓ ' + t().backToQ;
    fb.onclick = () => { card.scrollIntoView({behavior: smooth(), block:'start'}); const o = card.querySelector('.opt.sel') || card.querySelector('.opt'); if (o) o.focus({preventScroll:true}); fb.remove(); };
  });
}
Object.assign(I18N.es,{inProgress:'en curso',leftShort:x=>`quedan ${x}`,timeUpShort:'tiempo agotado',resumeWaitT:'Tu examen te espera',resumeUpT:'Se acabó el tiempo de este examen',continueExam:'Continuar el examen',seeResult:'Ver el resultado',endEarly:'Terminar antes',endEarlyQ:(o,n)=>`¿Terminar ya? Te quedan ${o} de ${n} preguntas sin responder y contarán como fallos.`,endEarlyQ0:'¿Terminar ya y ver el resultado?',endEarlyYes:'Terminar'});
Object.assign(I18N.en,{inProgress:'in progress',leftShort:x=>`${x} left`,timeUpShort:'time’s up',resumeWaitT:'Your exam is waiting',resumeUpT:'Time ran out on this exam',continueExam:'Continue exam',seeResult:'See the result',endEarly:'End early',endEarlyQ:(o,n)=>`End now? ${o} of ${n} questions are unanswered and will count as wrong.`,endEarlyQ0:'End now and see the result?',endEarlyYes:'End exam'});
Object.assign(I18N.ru,{inProgress:'не завершён',leftShort:x=>`осталось ${x}`,timeUpShort:'время вышло',resumeWaitT:'Экзамен ждёт вас',resumeUpT:'Время этого экзамена вышло',continueExam:'Продолжить экзамен',seeResult:'Посмотреть результат',endEarly:'Завершить досрочно',endEarlyQ:(o,n)=>`Завершить сейчас? Без ответа ${o} из ${n} вопросов — они засчитаются как ошибки.`,endEarlyQ0:'Завершить сейчас и посмотреть результат?',endEarlyYes:'Завершить'});
Object.assign(I18N.uk,{inProgress:'не завершено',leftShort:x=>`залишилося ${x}`,timeUpShort:'час вийшов',resumeWaitT:'Іспит чекає на вас',resumeUpT:'Час цього іспиту вийшов',continueExam:'Продовжити іспит',seeResult:'Подивитися результат',endEarly:'Завершити достроково',endEarlyQ:(o,n)=>`Завершити зараз? Без відповіді ${o} із ${n} питань — їх буде зараховано як помилки.`,endEarlyQ0:'Завершити зараз і подивитися результат?',endEarlyYes:'Завершити'});
