// ---------- continue where you left off · five-minute sessions · practise this exam's misses ----------

// The last study place is stored as a kind + plain arguments, so it survives a reload.
function markLast(k, a){ S.last = {k, a, at: Date.now()}; save(); }
const LAST_GO = {
  ccse: a => study(a),
  read: a => { S.set.dv = a.v || 1; syncV(); readTask(a.n); },
  aud: a => { S.set.dv = a.v || 1; syncV(); a.n <= 2 ? audRun(a.n, 0, []) : groupRun(a.n); },
  gram: a => gramTopic(a.id),
  voc: a => vocTopic(a.id),
  write: a => writeTask(a.id),
  speak: a => a.t === 'mono' ? speakMono(a.id) : speakPhoto(a.id)
};
function lastLabel(L){
  const T_ = t(), a = L.a || {};
  if (L.k === 'ccse') return 'CCSE · ' + (a.mode === 'wrong' ? T_.wrong : a.mode === 'due' ? T_.dueBtn : a.tarea ? `${T_.tarea} ${a.tarea} · ${tname(a.tarea)}` : T_.allT);
  if (!DELE_READY) return 'DELE A2';
  const d = 'DELE A2 · ';
  try {
    if (L.k === 'read') return d + `${T_.kRead} · Tarea ${a.n}` + (a.v > 1 ? ` · v${a.v}` : '');
    if (L.k === 'aud') return d + `${T_.kAud} · Tarea ${a.n}` + (a.v > 1 ? ` · v${a.v}` : '');
    if (L.k === 'gram') return d + `${T_.kGram} · ${loc(GRAM.find(g => g.id === a.id).name)}`;
    if (L.k === 'voc') return d + `${T_.kVoc} · ${loc(VOC.find(v => v.id === a.id).name)}`;
    if (L.k === 'write') return d + `${T_.kWrite} · ${WRITE.find(w => w.id === a.id).title}`;
    if (L.k === 'speak') return d + `${T_.kSpeak} · ${[...SPEAK.t1, ...SPEAK.t2].find(s => s.id === a.id).title}`;
  } catch(e){}
  return 'DELE A2';
}
function lastValid(){ const L = S.last; return L && LAST_GO[L.k] && (L.k === 'ccse' || DELE_READY) ? L : null; }

// Home card: only when no exam is waiting (the exam card takes that place).
function continueHTML(){
  if (curInfo()) return '';
  const L = lastValid(); if (!L) return '';
  const T_ = t();
  return `<section class="panel resume" id="cont"><span class="eyebrow">${esc(T_.contT)}</span><h2 class="sec">${esc(lastLabel(L))}</h2>
    <div class="row"><button class="btn primary" id="cont-go" type="button">${esc(T_.contGo)} →</button></div></section>`;
}
function wireContinue(){ const b = $('#cont-go'), L = lastValid(); if (b && L) b.onclick = () => go(() => LAST_GO[L.k](L.a)); }

// Vocabulary topic as its own entry point (used by the topic list and by "Continue").
function vocTopic(id){
  const T = VOC.find(x => x.id === id);
  markLast('voc', {id});
  const keys = [...vocDueKeys(T.id), ...T.w.filter(w => !vst(w.key)).slice(0, 10).map(w => w.key)];
  vocRun(keys.length ? keys : shuffle(T.w.map(w => w.key)).slice(0, 10), vocab);
}

// Five minutes: 5 CCSE questions (missed and due first, then unseen, then any) or 5 grammar gaps.
function quickIds(){
  const used = new Set(), out = [];
  const add = list => shuffle(list).forEach(q => { if (out.length < 5 && !used.has(q.id)){ used.add(q.id); out.push(q.id); } });
  add(Q.filter(q => isWrong(q.id))); add(Q.filter(q => isDue(q.id))); add(Q.filter(q => !S.q[q.id])); add(Q);
  return shuffle(out);
}
function quickCcse(){ study({mode:'list', ids: quickIds(), quick: true}); }
function quickGram(){
  current = quickGram;
  const T_ = t();
  const items = shuffle(GRAM.flatMap(g => g.prac.map(it => ({it, g})))).slice(0, 5);
  let done = 0, ok = 0;
  view.innerHTML = `<div class="stack"><span class="eyebrow">${esc(T_.quickT)}</span><h1>${esc(T_.quickGramT)}</h1>
    ${items.map((_, k) => `<section class="panel qcard"><span class="eyebrow" lang="es">${esc(loc(items[k].g.name))}</span><div id="qg${k}"></div></section>`).join('')}
    <section class="panel" id="qg-end" hidden><h2>${esc(T_.quickDoneT)}</h2><p class="lede" id="qg-score"></p>
      <div class="row"><button class="btn primary" id="qg-more" type="button">${esc(T_.quickMore)}</button><button class="btn" id="qg-home" type="button">${esc(T_.home)}</button></div></section></div>`;
  items.forEach(({it, g}, k) => gapItem($('#qg' + k), it, g.id, (r, fb) => { done++; if (r) ok++;
    fb.innerHTML = `<p class="feedback ${r ? 'ok' : 'no'}">${esc(r ? T_.correct : T_.incorrect)} ${r ? '' : '<span lang="es">' + esc(it.o[it.a]) + '</span>'}</p>`;
    if (done === items.length){ $('#qg-score').textContent = T_.quickScore(ok, done); $('#qg-end').hidden = false; $('#qg-more').focus(); } }));
  $('#qg-more').onclick = () => go(quickGram);
  $('#qg-home').onclick = () => go(home);
}

Object.assign(I18N.es,{contT:'Seguir donde lo dejaste',contGo:'Continuar',quickT:'¿Tienes 5 minutos?',quickCcse:'5 min · 5 preguntas del CCSE',quickGram:'5 min · 5 ejercicios de gramática (DELE A2)',quickGramT:'5 ejercicios de gramática',quickDoneT:'¡Listo!',quickScore:(k,n)=>`${k} de ${n} correctas.`,quickMore:'5 más',
 listDoneT:'Has terminado esta tanda',missedThis:n=>`Practicar las ${n} que fallaste`,passLine:n=>`Aprobado: ${n}`});
Object.assign(I18N.en,{contT:'Pick up where you left off',contGo:'Continue',quickT:'Got 5 minutes?',quickCcse:'5 min · 5 CCSE questions',quickGram:'5 min · 5 grammar exercises (DELE A2)',quickGramT:'5 grammar exercises',quickDoneT:'Done!',quickScore:(k,n)=>`${k} of ${n} correct.`,quickMore:'5 more',
 listDoneT:'You finished this set',missedThis:n=>`Practise the ${n} you missed`,passLine:n=>`Pass: ${n}`});
Object.assign(I18N.ru,{contT:'Продолжить с того места',contGo:'Продолжить',quickT:'Есть 5 минут?',quickCcse:'5 мин · 5 вопросов CCSE',quickGram:'5 мин · 5 упражнений по грамматике (DELE A2)',quickGramT:'5 упражнений по грамматике',quickDoneT:'Готово!',quickScore:(k,n)=>`Верно ${k} из ${n}.`,quickMore:'Ещё 5',
 listDoneT:'Подборка пройдена',missedThis:n=>`Потренировать ${n} с ошибками`,passLine:n=>`Проходной: ${n}`});
Object.assign(I18N.uk,{contT:'Продовжити з того місця',contGo:'Продовжити',quickT:'Є 5 хвилин?',quickCcse:'5 хв · 5 питань CCSE',quickGram:'5 хв · 5 вправ із граматики (DELE A2)',quickGramT:'5 вправ із граматики',quickDoneT:'Готово!',quickScore:(k,n)=>`Правильно ${k} з ${n}.`,quickMore:'Ще 5',
 listDoneT:'Добірку пройдено',missedThis:n=>`Потренувати ${n} з помилками`,passLine:n=>`Прохідний: ${n}`});
