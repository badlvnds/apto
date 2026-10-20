// ---------- Forest Slate refinement: appearance, answer-state labels, microcopy, optional study plan, home shortcuts ----------
Object.assign(I18N.es,{optRight:'Respuesta correcta',optWrong:'Tu respuesta',
 incorrect:'No del todo. Veamos por qué.',
 appearT:'Apariencia',appearSys:'Como el sistema',appearLight:'Clara',appearDark:'Oscura',
 jumpT:'Seguir practicando',jumpCMock:'CCSE · simulacro',jumpDMock:'DELE A2 · examen de prueba',jumpDue:n=>`CCSE · repaso de hoy (${n})`,jumpCWrong:n=>`CCSE · errores (${n})`,jumpDWrong:n=>`DELE A2 · errores (${n})`,
 examSub:'25 preguntas. 45 minutos. Tú puedes.',resOk:'Nada mal. Sigue así.',
 readyNote:'La preparación es una estimación a partir de las preguntas dominadas y tus últimos simulacros. No garantiza el resultado del examen.',
 foot3:'Tu progreso es tuyo: se guarda solo en este dispositivo.',
 planPast:'Esa fecha ya ha pasado. Pon otra o quítala.',planAsk:'¿Tienes ya fecha de examen? Te ayudamos a repartir la práctica.',planT:'Plan de estudio',planEdit:'Cambiar o quitar la fecha',planClear:'Quitar la fecha',planSave:'Guardar',planOptional:'Es opcional: todo funciona igual sin fecha. La fecha se guarda solo en este dispositivo.',
 planToday:'El examen es hoy. Nada de temas nuevos: con repasar tus errores basta. ¡Suerte!',planShort:n=>`Quedan ${n} día${n===1?'':'s'}. No da tiempo a todo, y no pasa nada: céntrate en tus errores y haz un simulacro.`,
 planPaceC:(t)=>`Ritmo sugerido: unas ${t} preguntas al día.`,planPaceD:(t)=>`Ritmo sugerido: unos ${t} ejercicios al día.`,
 planWhyC:(l,d)=>`Cálculo: ${l} preguntas sin dominar × 2 aciertos cada una, repartidas en ${d} día${d===1?'':'s'} (dejamos libres los dos últimos para simulacros).`,
 planWhyD:'Cálculo: unos 15 ejercicios al día; 25 en las dos últimas semanas, con un examen de prueba cada pocos días.',
 planNoPromise:'Es una sugerencia, no una promesa: cada persona aprende a su ritmo.',planDone:'Hecho por hoy. Ve a vivir tu vida.',planTodayN:(d,t)=>`Hoy: ${d} de ${t}`});
Object.assign(I18N.en,{optRight:'Correct answer',optWrong:'Your answer',
 incorrect:'Not quite. Let’s see why.',
 appearT:'Appearance',appearSys:'Match system',appearLight:'Light',appearDark:'Dark',
 jumpT:'Keep practising',jumpCMock:'CCSE · mock exam',jumpDMock:'DELE A2 · mock exam',jumpDue:n=>`CCSE · today’s review (${n})`,jumpCWrong:n=>`CCSE · mistakes (${n})`,jumpDWrong:n=>`DELE A2 · mistakes (${n})`,
 examSub:'25 questions. 45 minutes. You’ve got this.',resOk:'Not bad at all. Keep going.',
 readyNote:'Readiness is an estimate based on mastered questions and your latest mock exams. It doesn’t guarantee an exam result.',
 foot3:'Your progress stays yours: it’s stored only on this device.',
 planPast:'That date has passed. Set a new one or remove it.',planAsk:'Have an exam date in mind? We can help you pace your practice.',planT:'Study plan',planEdit:'Change or remove the date',planClear:'Remove the date',planSave:'Save',planOptional:'Optional: everything works the same without a date. The date is stored only on this device.',
 planToday:'The exam is today. No new material: a quick look at your mistakes is plenty. Good luck!',planShort:n=>`${n} day${n===1?'':'s'} left. There isn’t time for everything, and that’s fine: focus on your mistakes and do one mock exam.`,
 planPaceC:(t)=>`Suggested pace: about ${t} questions a day.`,planPaceD:(t)=>`Suggested pace: about ${t} exercises a day.`,
 planWhyC:(l,d)=>`How we got this: ${l} questions not yet mastered × 2 correct answers each, spread over ${d} day${d===1?'':'s'} (the last two are left free for mock exams).`,
 planWhyD:'How we got this: about 15 exercises a day; 25 in the last two weeks, with a mock exam every few days.',
 planNoPromise:'A suggestion, not a promise: everyone learns at their own pace.',planDone:'Done for today. Go live your life.',planTodayN:(d,t)=>`Today: ${d} of ${t}`});
Object.assign(I18N.ru,{optRight:'Верный ответ',optWrong:'Ваш ответ',
 incorrect:'Не совсем. Давайте разберёмся.',
 appearT:'Оформление',appearSys:'Как в системе',appearLight:'Светлое',appearDark:'Тёмное',
 jumpT:'Продолжить',jumpCMock:'CCSE · пробный экзамен',jumpDMock:'DELE A2 · пробный экзамен',jumpDue:n=>`CCSE · повторение на сегодня (${n})`,jumpCWrong:n=>`CCSE · ошибки (${n})`,jumpDWrong:n=>`DELE A2 · ошибки (${n})`,
 examSub:'25 вопросов. 45 минут. Вы справитесь.',resOk:'Совсем неплохо. Продолжайте.',
 readyNote:'Готовность — это оценка по выученным вопросам и последним пробным экзаменам. Она не гарантирует результат на экзамене.',
 foot3:'Ваш прогресс принадлежит вам: он хранится только на этом устройстве.',
 planPast:'Эта дата уже прошла. Укажите новую или уберите её.',planAsk:'Уже знаете дату экзамена? Поможем распределить занятия.',planT:'План занятий',planEdit:'Изменить или убрать дату',planClear:'Убрать дату',planSave:'Сохранить',planOptional:'Это необязательно: без даты всё работает так же. Дата хранится только на этом устройстве.',
 planToday:'Экзамен сегодня. Ничего нового: достаточно пробежаться по ошибкам. Удачи!',planShort:n=>`До экзамена дней: ${n}. На всё времени не хватит, и это нормально: сосредоточьтесь на ошибках и пройдите один пробный экзамен.`,
 planPaceC:(t)=>`Предлагаемый темп: около ${t} вопросов в день.`,planPaceD:(t)=>`Предлагаемый темп: около ${t} упражнений в день.`,
 planWhyC:(l,d)=>`Как посчитали: ${l} невыученных вопросов × 2 верных ответа на каждый, на ${d} дн. (последние два дня оставляем для пробных экзаменов).`,
 planWhyD:'Как посчитали: около 15 упражнений в день; 25 в последние две недели и пробный экзамен раз в несколько дней.',
 planNoPromise:'Это рекомендация, а не обещание: все учатся в своём темпе.',planDone:'На сегодня всё. Идите жить свою жизнь.',planTodayN:(d,t)=>`Сегодня: ${d} из ${t}`});
Object.assign(I18N.uk,{optRight:'Правильна відповідь',optWrong:'Ваша відповідь',
 incorrect:'Не зовсім. Розберімося.',
 appearT:'Вигляд',appearSys:'Як у системі',appearLight:'Світлий',appearDark:'Темний',
 jumpT:'Продовжити',jumpCMock:'CCSE · пробний іспит',jumpDMock:'DELE A2 · пробний іспит',jumpDue:n=>`CCSE · повторення на сьогодні (${n})`,jumpCWrong:n=>`CCSE · помилки (${n})`,jumpDWrong:n=>`DELE A2 · помилки (${n})`,
 examSub:'25 питань. 45 хвилин. Ви впораєтеся.',resOk:'Зовсім непогано. Продовжуйте.',
 readyNote:'Готовність — це оцінка за вивченими питаннями й останніми пробними іспитами. Вона не гарантує результату на іспиті.',
 foot3:'Ваш прогрес належить вам: він зберігається лише на цьому пристрої.',
 planPast:'Ця дата вже минула. Вкажіть нову або приберіть її.',planAsk:'Вже знаєте дату іспиту? Допоможемо розподілити заняття.',planT:'План занять',planEdit:'Змінити або прибрати дату',planClear:'Прибрати дату',planSave:'Зберегти',planOptional:'Це необов’язково: без дати все працює так само. Дата зберігається лише на цьому пристрої.',
 planToday:'Іспит сьогодні. Нічого нового: досить переглянути помилки. Успіху!',planShort:n=>`До іспиту днів: ${n}. На все часу не вистачить, і це нормально: зосередьтеся на помилках і пройдіть один пробний іспит.`,
 planPaceC:(t)=>`Запропонований темп: близько ${t} питань на день.`,planPaceD:(t)=>`Запропонований темп: близько ${t} вправ на день.`,
 planWhyC:(l,d)=>`Як порахували: ${l} невивчених питань × 2 правильні відповіді на кожне, на ${d} дн. (останні два дні залишаємо для пробних іспитів).`,
 planWhyD:'Як порахували: близько 15 вправ на день; 25 в останні два тижні й пробний іспит раз на кілька днів.',
 planNoPromise:'Це порада, а не обіцянка: кожен вчиться у своєму темпі.',planDone:'На сьогодні все. Ідіть жити своє життя.',planTodayN:(d,t)=>`Сьогодні: ${d} із ${t}`});
// "Correct" varies a little so it doesn't read like a machine; mostly plain.
const CORRECT_LINES = {es:['Correcto.','Correcto.','Eso es.','Mírate, sabiendo cosas.'],en:['Correct.','Correct.','That’s it.','Look at you knowing things.'],ru:['Верно.','Верно.','Именно так.','Смотрите-ка, вы это знаете.'],uk:['Правильно.','Правильно.','Саме так.','Дивіться-но, ви це знаєте.']};
Object.keys(CORRECT_LINES).forEach(l => Object.defineProperty(I18N[l], 'correct', {enumerable:true, configurable:true, get(){ const a = CORRECT_LINES[l]; return a[Math.floor(Math.random()*a.length)]; }}));

// ---------- appearance ----------
function applyTheme(){
  const th = S.set.theme, root = document.documentElement;
  if (th === 'light' || th === 'dark') root.dataset.theme = th; else delete root.dataset.theme;
  const metas = document.querySelectorAll('meta[name="theme-color"]');
  metas.forEach(m => m.setAttribute('content', th === 'dark' ? '#26332F' : th === 'light' ? '#F2F5F0' : (m.media.includes('dark') ? '#26332F' : '#F2F5F0')));
  root.style.setProperty('--t-right', JSON.stringify(t().optRight));
  root.style.setProperty('--t-wrong', JSON.stringify(t().optWrong));
}
function appearanceHTML(){
  const T_ = t(), cur = S.set.theme || 'system';
  return `<section class="panel"><h2>${esc(T_.appearT)}</h2><div class="radios">${[['system',T_.appearSys],['light',T_.appearLight],['dark',T_.appearDark]].map(([v,l])=>`<label class="radio"><input type="radio" name="theme" value="${v}" ${cur===v?'checked':''}> ${esc(l)}</label>`).join('')}</div></section>`;
}
function wireAppearance(){ view.querySelectorAll('input[name=theme]').forEach(i => i.onchange = () => { S.set.theme = i.value === 'system' ? '' : i.value; save(); applyTheme(); }); }

// ---------- optional study plan ----------
function planCalc(kind){
  const date = kind === 'c' ? S.set.dateC : S.set.dateD, n = daysTo(date);
  if (!date) return {state:'none'};
  if (n < 0) return {state:'past', n};
  if (n === 0) return {state:'today', n};
  const x = (S.daily||{})[today()] || {c:0, d:0}, done = kind === 'c' ? x.c : x.d;
  if (kind === 'c'){
    const left = Q.filter(q=>!isMastered(q.id)).length, studyDays = Math.max(1, n - 2);
    const target = Math.max(10, Math.min(80, Math.ceil(left * MASTER / studyDays)));
    return {state: n <= 3 ? 'short' : 'ok', n, target, done, left, studyDays};
  }
  return {state: n <= 3 ? 'short' : 'ok', n, target: n <= 14 ? 25 : 15, done};
}
// quiet line under the hub actions: an invitation without a date, a compact pace with one
function planSectionHTML(kind){
  const T_ = t(), p = planCalc(kind);
  if (p.state === 'none') return `<button class="sectionlink" id="plan-open" type="button">${esc(T_.planAsk)}</button>`;
  let main;
  if (p.state === 'past') main = T_.planPast;
  else if (p.state === 'today') main = T_.planToday;
  else if (p.state === 'short') main = T_.planShort(p.n);
  else main = `${T_.planDays(p.n)} · ${p.done >= p.target ? T_.planDone : T_.planTodayN(p.done, p.target)}`;
  return `<div class="plan-line"><span class="eyebrow">${esc(T_.planT)}</span><p>${esc(main)}</p><button class="sectionlink" id="plan-open" type="button">${esc(T_.planEdit)}</button></div>`;
}
function wirePlanSection(kind){ const b = $('#plan-open'); if (b) b.onclick = () => go(() => planView(kind)); }
function planView(kind){
  current = () => planView(kind);
  const T_ = t(), back = kind === 'c' ? ccseHub : deleHub, label = kind === 'c' ? 'CCSE' : 'DELE A2', date = kind === 'c' ? S.set.dateC : S.set.dateD, p = planCalc(kind);
  let body = '';
  if (p.state === 'past') body = `<p>${esc(T_.planPast)}</p>`;
  else if (p.state === 'today') body = `<p>${esc(T_.planToday)}</p>`;
  else if (p.state === 'short') body = `<p>${esc(T_.planShort(p.n))}</p>`;
  else if (p.state === 'ok') body = `<p><b>${esc(kind==='c'?T_.planPaceC(p.target):T_.planPaceD(p.target))}</b></p><p class="note">${esc(kind==='c'?T_.planWhyC(p.left, p.studyDays):T_.planWhyD)}</p><p class="note">${esc(T_.planNoPromise)}</p>
    <p>${esc(T_.planDays(p.n))} · ${esc(p.done >= p.target ? T_.planDone : T_.planTodayN(p.done, p.target))}</p>`;
  view.innerHTML = `<div class="stack">${backRow(back, label)}<span class="eyebrow">${esc(label)}</span><h1>${esc(T_.planT)}</h1><p class="lede">${esc(T_.planAsk)}</p>
    <section class="panel"><label class="vrow"><span>${esc(T_.planDate)}</span><input type="date" id="plan-date" value="${date||''}"></label>
      <div class="row"><button class="btn primary" id="plan-save" type="button">${esc(T_.planSave)}</button>${date?`<button class="btn" id="plan-clear" type="button">${esc(T_.planClear)}</button>`:''}</div>
      <p class="note">${esc(T_.planOptional)}</p></section>
    ${body?`<section class="panel">${body}${p.state!=='past'?`<div class="row"><button class="btn" id="plan-go" type="button">${esc(T_.planGo)}</button></div>`:''}</section>`:''}</div>`;
  wireBack(back);
  const setD = v => { if (kind === 'c') S.set.dateC = v; else S.set.dateD = v; save(); go(() => planView(kind)); };
  $('#plan-save').onclick = () => setD($('#plan-date').value || '');
  const c = $('#plan-clear'); if (c) c.onclick = () => setD('');
  const g = $('#plan-go'); if (g) g.onclick = () => planGo(kind);
}
function planGo(kind){
  if (kind === 'c'){ const wrong = Q.filter(q=>isWrong(q.id)).length; return go(() => study(wrong ? {mode:'wrong'} : dueCount() ? {mode:'due'} : {tarea:0})); }
  if (dWrongKeys().length) return go(deleMistakes);
  const cand = [...[1,2,3,4].map(n=>({p:'r',n,a:taskAcc('r',n)})), ...[1,2,3,4].map(n=>({p:'a',n,a:taskAcc('a',n)}))].sort((x,y)=>(x.a===null?-1:x.a)-(y.a===null?-1:y.a))[0];
  go(() => cand.p === 'r' ? readTask(cand.n) : (cand.n <= 2 ? audRun(cand.n, 0, []) : groupRun(cand.n)));
}

// ---------- home: quiet shortcuts back into practice ----------
function jumpHTML(){
  const T_ = t(), due = dueCount(), cw = Q.filter(q=>isWrong(q.id)).length, dw = dWrongKeys().length;
  const items = [];
  if (due) items.push(['due', T_.jumpDue(due)]);
  if (cw) items.push(['cwrong', T_.jumpCWrong(cw)]);
  if (dw) items.push(['dwrong', T_.jumpDWrong(dw)]);
  const vd = vocDueKeys().length; if (vd) items.push(['voc', T_.kVoc + ' · ' + T_.vocDue(vd)]);
  items.push(['cmock', T_.jumpCMock], ['dmock', T_.jumpDMock]);
  return `<nav class="jump" aria-label="${esc(T_.jumpT)}"><span class="eyebrow">${esc(T_.jumpT)}</span><ul>${items.map(([k,l])=>`<li><button class="jumpbtn" type="button" data-j="${k}">${esc(l)}<span aria-hidden="true">→</span></button></li>`).join('')}</ul></nav>`;
}
function wireJump(){
  const act = {due:() => go(() => study({mode:'due'})), cwrong:() => go(() => study({mode:'wrong'})), dwrong:() => go(deleMistakes), cmock:() => go(examStart), dmock:() => go(deleMock), voc:() => go(() => vocRun(vocDueKeys(), vocab))};
  view.querySelectorAll('[data-j]').forEach(b => b.onclick = act[b.dataset.j]);
}
