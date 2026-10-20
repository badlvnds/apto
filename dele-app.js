// ---------- DELE A2 grammar + reading strings ----------
Object.assign(I18N.es,{secCCSE:'CCSE · Conocimientos de España',secDELE:'DELE A2 · Español',
 gramBtn:'Gramática',gramBtnSub:'Test de nivel y repaso por temas',readBtn:'Comprensión de lectura',readBtnSub:'Beta · 2 textos',
 gramTitle:'Gramática A2',gramLede:'Haz el test de 12 frases para ver qué temas fallas. Después repasa cada tema: regla, truco para recordarla y 3 ejercicios.',
 diagStart:'Hacer el test',diagQ:(i,n)=>`Frase ${i} de ${n}`,topics:'Temas',notTested:'sin hacer',rule:'La regla',mnemo:'Para recordarlo',practice:'Practica',
 gramResult:'Resultado del test',weak:'Temas para repasar',allGood:'¡Todo bien! No has fallado ningún tema. Repasa igualmente los ejercicios cuando quieras.',studyTopic:'Repasar',backTopics:'Todos los temas',practiceDone:(o,n)=>`${o} de ${n} correctas`,again2:'Otra vez',
 readTitle:'Comprensión de lectura A2',readLede:'Textos cortos de la vida diaria con preguntas como en el examen. Lee el texto y elige la respuesta.',readTextTr:'Traducción del texto',readNext:'Siguiente texto',readDone:'Resultado',readScore:(o,n)=>`${o} de ${n} correctas`,
 deleNote:'Ejercicios originales para practicar. Para ver el examen real, usa los',deleNoteLink:'modelos de examen DELE A2 del Instituto Cervantes'});
Object.assign(I18N.en,{secCCSE:'CCSE · Knowledge of Spain',secDELE:'DELE A2 · Spanish',
 gramBtn:'Grammar',gramBtnSub:'Level test and topic review',readBtn:'Reading',readBtnSub:'Beta · 2 texts',
 gramTitle:'A2 grammar',gramLede:'Take the 12-sentence test to see which topics trip you up. Then review each one: rule, a trick to remember it and 3 exercises.',
 diagStart:'Take the test',diagQ:(i,n)=>`Sentence ${i} of ${n}`,topics:'Topics',notTested:'not tested',rule:'The rule',mnemo:'To remember it',practice:'Practice',
 gramResult:'Test result',weak:'Topics to review',allGood:'All good! You didn’t miss any topic. Review the exercises whenever you like.',studyTopic:'Review',backTopics:'All topics',practiceDone:(o,n)=>`${o} of ${n} correct`,again2:'Again',
 readTitle:'A2 reading',readLede:'Short everyday texts with exam-style questions. Read the text and choose the answer.',readTextTr:'Text translation',readNext:'Next text',readDone:'Result',readScore:(o,n)=>`${o} of ${n} correct`,
 deleNote:'Original practice exercises. To see the real exam, use the',deleNoteLink:'Instituto Cervantes DELE A2 model exams'});
Object.assign(I18N.ru,{secCCSE:'CCSE · Знание Испании',secDELE:'DELE A2 · Испанский язык',
 gramBtn:'Грамматика',gramBtnSub:'Тест уровня и разбор тем',readBtn:'Чтение',readBtnSub:'Бета · 2 текста',
 gramTitle:'Грамматика A2',gramLede:'Пройдите тест из 12 фраз, чтобы увидеть, в каких темах вы ошибаетесь. Потом разберите каждую: правило, подсказка для запоминания и 3 упражнения.',
 diagStart:'Пройти тест',diagQ:(i,n)=>`Фраза ${i} из ${n}`,topics:'Темы',notTested:'не пройдено',rule:'Правило',mnemo:'Как запомнить',practice:'Упражнения',
 gramResult:'Результат теста',weak:'Темы для разбора',allGood:'Всё отлично! Ошибок нет ни в одной теме. Упражнения можно пройти в любой момент.',studyTopic:'Разобрать',backTopics:'Все темы',practiceDone:(o,n)=>`Верно: ${o} из ${n}`,again2:'Ещё раз',
 readTitle:'Чтение A2',readLede:'Короткие бытовые тексты с вопросами как на экзамене. Прочитайте текст и выберите ответ.',readTextTr:'Перевод текста',readNext:'Следующий текст',readDone:'Результат',readScore:(o,n)=>`Верно: ${o} из ${n}`,
 deleNote:'Упражнения оригинальные, для тренировки. Настоящий формат экзамена — в',deleNoteLink:'моделях экзамена DELE A2 от Instituto Cervantes'});
Object.assign(I18N.uk,{secCCSE:'CCSE · Знання Іспанії',secDELE:'DELE A2 · Іспанська мова',
 gramBtn:'Граматика',gramBtnSub:'Тест рівня та розбір тем',readBtn:'Читання',readBtnSub:'Бета · 2 тексти',
 gramTitle:'Граматика A2',gramLede:'Пройдіть тест із 12 фраз, щоб побачити, у яких темах ви помиляєтеся. Потім розберіть кожну: правило, підказка для запам’ятовування та 3 вправи.',
 diagStart:'Пройти тест',diagQ:(i,n)=>`Фраза ${i} із ${n}`,topics:'Теми',notTested:'не пройдено',rule:'Правило',mnemo:'Як запам’ятати',practice:'Вправи',
 gramResult:'Результат тесту',weak:'Теми для розбору',allGood:'Усе чудово! Помилок немає в жодній темі. Вправи можна пройти будь-коли.',studyTopic:'Розібрати',backTopics:'Усі теми',practiceDone:(o,n)=>`Правильно: ${o} із ${n}`,again2:'Ще раз',
 readTitle:'Читання A2',readLede:'Короткі побутові тексти з питаннями як на іспиті. Прочитайте текст і оберіть відповідь.',readTextTr:'Переклад тексту',readNext:'Наступний текст',readDone:'Результат',readScore:(o,n)=>`Правильно: ${o} із ${n}`,
 deleNote:'Вправи оригінальні, для тренування. Справжній формат іспиту — у',deleNoteLink:'моделях іспиту DELE A2 від Instituto Cervantes'});

const loc = o => o[S.set.lang] || o.es;
function gstat(id){ return S.gram[id] || (S.gram[id] = {n:0, ok:0}); }
function grec(id, ok){ const g = gstat(id); g.n++; if (ok) g.ok++; save(); }
function deleNote(){ const T_ = t(); return `<p class="note">${esc(T_.deleNote)} <a href="${DELE_A2_URL}" target="_blank" rel="noopener">${esc(T_.deleNoteLink)}</a>.</p>`; }

// one fill-the-gap item; calls done(ok) after answering
function gapItem(container, it, topicId, done){
  const parts = it.s.split('___');
  container.innerHTML = `<p class="qtext gap" lang="es">${esc(parts[0])}<span class="blank">___</span>${esc(parts[1]||'')}</p>
    <div class="opts row3">${it.o.map((o,k)=>`<button type="button" class="opt" data-k="${k}"><span lang="es">${esc(o)}</span></button>`).join('')}</div><div class="fb"></div>`;
  container.querySelectorAll('.opt').forEach(b => b.onclick = () => {
    const k = +b.dataset.k, ok = k === it.a;
    container.querySelectorAll('.opt').forEach(x => { x.disabled = true; const kk = +x.dataset.k; if (kk === it.a) x.classList.add('right'); else if (kk === k) x.classList.add('wrong'); });
    const bl = container.querySelector('.blank'); bl.textContent = it.o[it.a]; bl.classList.add('ok');
    grec(topicId, ok); if (it.key) drec(it.key, ok);
    done && done(ok, container.querySelector('.fb'));
  });
}

// ---------- grammar hub ----------
function grammar(){
  const T_ = t();
  view.innerHTML = `<div class="stack">${backRow(deleStudy, T_.deleStudy)}<span class="eyebrow">DELE A2</span><h1>${esc(T_.gramTitle)}</h1><p class="lede">${esc(T_.gramLede)}</p>
    <div class="row"><button class="btn primary" id="g-diag" type="button">${esc(T_.diagStart)}<small>12 · ${GRAM.length} ${esc(T_.topics.toLowerCase())}</small></button></div>
    <section class="panel"><h2>${esc(T_.topics)}</h2><div class="tareas">${GRAM.map(g=>{const s=S.gram[g.id], p=s&&s.n?Math.round(s.ok/s.n*100):null;
      return `<button type="button" class="trow trbtn-row" data-g="${g.id}"><span class="tt" lang="es">${esc(loc(g.name))}</span><span class="tc">${p===null?esc(T_.notTested):p+'%'}</span><div class="track"><i class="${p===null?'':p>=80?'m':p>=60?'s':'b'}" style="width:${p||0}%"></i></div></button>`}).join('')}</div></section>
    ${deleNote()}</div>`;
  wireBack(deleStudy);
  $('#g-diag').onclick = () => go(() => gramDiag());
  view.querySelectorAll('[data-g]').forEach(b => b.onclick = () => go(() => gramTopic(b.dataset.g)));
}
function gramDiag(){
  const items = shuffle(GRAM.flatMap(g => g.diag.map(it => ({it, g:g.id}))));
  const res = {}; let i = 0;
  const T_ = t();
  view.innerHTML = `<div class="stack"><div class="row"><span class="eyebrow" id="g-count"></span></div><section class="panel qcard" id="g-card"></section>
    <div class="row"><button class="btn" id="g-exit" type="button">${esc(T_.finish)}</button></div></div>`;
  $('#g-exit').onclick = () => go(grammar);
  function step(){
    if (i >= items.length) return go(() => gramDiagDone(res));
    $('#g-count').textContent = T_.diagQ(i+1, items.length);
    const {it, g} = items[i];
    gapItem($('#g-card'), it, g, (ok, fb) => {
      res[g] = res[g] || [0,0]; res[g][1]++; if (ok) res[g][0]++;
      fb.innerHTML = `<p class="feedback ${ok?'ok':'no'}">${esc(ok?T_.correct:T_.incorrect)} ${ok?'':'<span lang="es">'+esc(it.o[it.a])+'</span>'}</p><div class="row"><span class="chip" lang="es">${esc(loc(GRAM.find(x=>x.id===g).name))}</span><span class="sp"></span><button class="btn primary" id="g-next" type="button">${esc(T_.next)}</button></div>`;
      const n = $('#g-next'); n.onclick = () => { i++; step(); }; n.focus();
    });
  }
  step();
}
function gramDiagDone(res){
  current = () => gramDiagDone(res);
  const T_ = t(), weak = GRAM.filter(g => res[g.id] && res[g.id][0] < res[g.id][1]);
  const tot = Object.values(res).reduce((a,r)=>[a[0]+r[0],a[1]+r[1]],[0,0]);
  view.innerHTML = `<div class="stack"><section class="panel"><span class="eyebrow">${esc(T_.gramResult)}</span>
    <div class="stat"><b>${tot[0]}/${tot[1]}</b><span>${esc(T_.practiceDone(tot[0], tot[1]))}</span></div>
    <div class="tareas">${GRAM.map(g=>{const r=res[g.id]||[0,0];return `<div class="trow"><span class="tt" lang="es">${esc(loc(g.name))}</span><span class="tc">${r[0]}/${r[1]}</span><div class="track"><i class="${r[0]===r[1]?'m':'b'}" style="width:${r[1]?r[0]/r[1]*100:0}%"></i></div></div>`}).join('')}</div></section>
    ${weak.length ? `<h2>${esc(T_.weak)}</h2><div class="tareas" style="gap:10px">${weak.map(g=>`<button class="btn" data-g="${g.id}" type="button"><span lang="es">${esc(loc(g.name))}</span><small>${esc(loc(g.mnemo))}</small></button>`).join('')}</div>` : `<p class="lede">${esc(T_.allGood)}</p>`}
    <div class="row"><button class="btn" id="g-hub" type="button">${esc(T_.backTopics)}</button></div></div>`;
  view.querySelectorAll('[data-g]').forEach(b => b.onclick = () => go(() => gramTopic(b.dataset.g)));
  $('#g-hub').onclick = () => go(grammar);
}
function gramTopic(id){
  const T_ = t(), g = GRAM.find(x => x.id === id);
  let done = 0, ok = 0;
  view.innerHTML = `<div class="stack"><span class="eyebrow">DELE A2 · ${esc(T_.gramBtn)}</span><h1 lang="es">${esc(loc(g.name))}</h1>
    <section class="panel"><h2>${esc(T_.rule)}</h2><p>${esc(loc(g.rule))}</p>
      <div class="tipbox"><span class="eyebrow">${esc(T_.mnemo)}</span><p>${esc(loc(g.mnemo))}</p></div></section>
    <h2>${esc(T_.practice)}</h2>
    ${g.prac.map((_,k)=>`<section class="panel qcard" id="p${k}"></section>`).join('')}
    <p class="note" id="p-score" role="status"></p>
    <div class="row"><button class="btn" id="p-again" type="button">${esc(T_.again2)}</button><span class="sp"></span><button class="btn primary" id="p-hub" type="button">${esc(T_.backTopics)}</button></div></div>`;
  g.prac.forEach((it,k) => gapItem($('#p'+k), it, g.id, (r, fb) => { done++; if (r) ok++;
    fb.innerHTML = `<p class="feedback ${r?'ok':'no'}">${esc(r?T_.correct:T_.incorrect)} ${r?'':'<span lang="es">'+esc(it.o[it.a])+'</span>'}</p>`;
    if (done === g.prac.length) $('#p-score').textContent = T_.practiceDone(ok, done); }));
  $('#p-again').onclick = () => go(() => gramTopic(id));
  $('#p-hub').onclick = () => go(grammar);
}

