// ---------- extras: exam resume, 5-min warning, leave guard, onboarding, error reports, study plan, guide ----------
const REPORT_CONTACT = ''; // where reports should go in the public version (email or form link)
Object.assign(I18N.es,{resumeT:'Tienes un examen sin terminar',resumeLeft:x=>`Quedan ${x}`,resumeGo:'Continuar',resumeEnd:'Terminar y ver el resultado',warn5:'Quedan 5 minutos.',
 leaveQ:'¿Salir del examen? Se guarda y puedes continuarlo desde el inicio. El tiempo sigue corriendo.',leaveYes:'Salir',leaveNo:'Seguir con el examen',
 welcome:'Elige el idioma de la aplicación. Las preguntas siempre están en español.',
 report:'Avisar de un error',reportPh:'¿Qué está mal? (opcional)',reportCopy:'Copiar el aviso',reportDone:REPORT_CONTACT?`Copiado. Envíalo a ${REPORT_CONTACT}.`:'Copiado. Pégalo en un mensaje a la autora del proyecto.',
 planT:'Plan para hoy',planNoDate:'Indica la fecha de tu examen y te calculamos cuánto estudiar cada día.',planDate:'Fecha del examen',planDays:n=>`Faltan ${n} día${n===1?'':'s'}`,planPast:'La fecha ya ha pasado. Cámbiala en Ajustes.',
 planCcse:(d,t)=>`Hoy: ${d} de ${t} preguntas`,planDele:(d,t)=>`Hoy: ${d} de ${t} ejercicios`,planGo:'Estudiar ahora',planDone:'¡Objetivo de hoy cumplido!',streak:n=>`Racha: ${n} día${n===1?'':'s'} seguidos`,
 planMockSoon:'Quedan menos de dos semanas: haz un examen de prueba cada dos o tres días.',planCcseHint:'Primero los errores, luego preguntas nuevas.',planDeleHint:'Una tarea al día + repasar errores.',
 datesT:'Fechas de tus exámenes',guideBtn:'Cómo inscribirse y qué llevar',guideT:'Cómo son los exámenes',guideAsOf:'Información de octubre de 2026. Comprueba siempre los datos en las webs oficiales.'});
Object.assign(I18N.en,{resumeT:'You have an unfinished exam',resumeLeft:x=>`${x} left`,resumeGo:'Continue',resumeEnd:'Finish and see the result',warn5:'5 minutes left.',
 leaveQ:'Leave the exam? It’s saved and you can continue from the home screen. The clock keeps running.',leaveYes:'Leave',leaveNo:'Back to the exam',
 welcome:'Choose the app language. Questions are always in Spanish.',
 report:'Report a mistake',reportPh:'What’s wrong? (optional)',reportCopy:'Copy the report',reportDone:REPORT_CONTACT?`Copied. Send it to ${REPORT_CONTACT}.`:'Copied. Paste it into a message to the project’s author.',
 planT:'Today’s plan',planNoDate:'Set your exam date and we’ll work out how much to study each day.',planDate:'Exam date',planDays:n=>`${n} day${n===1?'':'s'} to go`,planPast:'That date has passed. Change it in Settings.',
 planCcse:(d,t)=>`Today: ${d} of ${t} questions`,planDele:(d,t)=>`Today: ${d} of ${t} exercises`,planGo:'Study now',planDone:'Today’s goal done!',streak:n=>`Streak: ${n} day${n===1?'':'s'} in a row`,
 planMockSoon:'Less than two weeks left: take a mock exam every two or three days.',planCcseHint:'Mistakes first, then new questions.',planDeleHint:'One task a day + review mistakes.',
 datesT:'Your exam dates',guideBtn:'How to register and what to bring',guideT:'How the exams work',guideAsOf:'Information as of October 2026. Always check the details on the official websites.'});
Object.assign(I18N.ru,{resumeT:'У вас незаконченный экзамен',resumeLeft:x=>`Осталось ${x}`,resumeGo:'Продолжить',resumeEnd:'Завершить и посмотреть результат',warn5:'Осталось 5 минут.',
 leaveQ:'Выйти из экзамена? Он сохранится, продолжить можно с главной. Время продолжает идти.',leaveYes:'Выйти',leaveNo:'Вернуться к экзамену',
 welcome:'Выберите язык приложения. Вопросы всегда на испанском.',
 report:'Сообщить об ошибке',reportPh:'Что не так? (необязательно)',reportCopy:'Скопировать сообщение',reportDone:REPORT_CONTACT?`Скопировано. Отправьте на ${REPORT_CONTACT}.`:'Скопировано. Вставьте в сообщение автору проекта.',
 planT:'План на сегодня',planNoDate:'Укажите дату экзамена — посчитаем, сколько заниматься в день.',planDate:'Дата экзамена',planDays:n=>`До экзамена: ${n} дн.`,planPast:'Эта дата уже прошла. Измените её в настройках.',
 planCcse:(d,t)=>`Сегодня: ${d} из ${t} вопросов`,planDele:(d,t)=>`Сегодня: ${d} из ${t} упражнений`,planGo:'Заниматься',planDone:'Цель на сегодня выполнена!',streak:n=>`Серия: ${n} дн. подряд`,
 planMockSoon:'Осталось меньше двух недель: проходите пробный экзамен раз в два-три дня.',planCcseHint:'Сначала ошибки, потом новые вопросы.',planDeleHint:'Одно задание в день + работа над ошибками.',
 datesT:'Даты ваших экзаменов',guideBtn:'Как записаться и что взять с собой',guideT:'Как устроены экзамены',guideAsOf:'Информация на октябрь 2026 года. Всегда проверяйте данные на официальных сайтах.'});
Object.assign(I18N.uk,{resumeT:'У вас незавершений іспит',resumeLeft:x=>`Залишилось ${x}`,resumeGo:'Продовжити',resumeEnd:'Завершити й побачити результат',warn5:'Залишилось 5 хвилин.',
 leaveQ:'Вийти з іспиту? Його збережено, продовжити можна з головної. Час іде далі.',leaveYes:'Вийти',leaveNo:'Повернутися до іспиту',
 welcome:'Оберіть мову застосунку. Питання завжди іспанською.',
 report:'Повідомити про помилку',reportPh:'Що не так? (необов’язково)',reportCopy:'Скопіювати повідомлення',reportDone:REPORT_CONTACT?`Скопійовано. Надішліть на ${REPORT_CONTACT}.`:'Скопійовано. Вставте в повідомлення авторці проєкту.',
 planT:'План на сьогодні',planNoDate:'Вкажіть дату іспиту — порахуємо, скільки займатися щодня.',planDate:'Дата іспиту',planDays:n=>`До іспиту: ${n} дн.`,planPast:'Ця дата вже минула. Змініть її в налаштуваннях.',
 planCcse:(d,t)=>`Сьогодні: ${d} із ${t} питань`,planDele:(d,t)=>`Сьогодні: ${d} із ${t} вправ`,planGo:'Займатися',planDone:'Мету на сьогодні виконано!',streak:n=>`Серія: ${n} дн. поспіль`,
 planMockSoon:'Залишилось менше двох тижнів: проходьте пробний іспит раз на два-три дні.',planCcseHint:'Спочатку помилки, потім нові питання.',planDeleHint:'Одне завдання на день + робота над помилками.',
 datesT:'Дати ваших іспитів',guideBtn:'Як записатися й що взяти з собою',guideT:'Як влаштовані іспити',guideAsOf:'Інформація на жовтень 2026 року. Завжди перевіряйте дані на офіційних сайтах.'});

// ---------- toast ----------
function toast(msg){ let el = document.getElementById('toast'); if (!el){ el = document.createElement('div'); el.id = 'toast'; el.setAttribute('role','status'); document.body.appendChild(el); }
  el.textContent = msg; el.classList.add('on'); clearTimeout(el._t); el._t = setTimeout(() => el.classList.remove('on'), 5000); }

// ---------- exam persistence ----------
let EXAM_ON = false;
function saveCur(obj){ S.cur = obj; save(); }
function clearCur(){ S.cur = null; save(); }
function warnCheck(end, holder){ const l = end - Date.now(); if (l < 5*60000 && l > 0 && !holder.warned){ holder.warned = true; toast(t().warn5); const m = $('#bar-meta'); if (m) m.classList.add('warn'); } }
function resumeHTML(){
  const c = S.cur; if (!c) return '';
  const T_ = t(), end = c.t === 'ccse' ? c.E.end : c.DM.end, left = end - Date.now();
  return `<section class="panel resume"><span class="eyebrow">${esc(c.t === 'ccse' ? 'CCSE' : 'DELE A2')}</span><h2>${esc(T_.resumeT)}</h2><p class="note">${left>0?esc(T_.resumeLeft(fmt(left))):''}</p>
    <div class="row"><button class="btn primary" id="cur-go" type="button">${esc(left>0?T_.resumeGo:T_.resumeEnd)}</button>${left>0?`<button class="btn" id="cur-end" type="button">${esc(T_.resumeEnd)}</button>`:''}</div></section>`;
}
function wireResume(){
  const g = $('#cur-go'), e = $('#cur-end'), c = S.cur; if (!c) return;
  const finish = () => { if (c.t === 'ccse'){ E = c.E; E.done = false; examFinish(); } else { DM = c.DM; DM.done = false; mockFinish(); } };
  if (g) g.onclick = () => { const left = (c.t === 'ccse' ? c.E.end : c.DM.end) - Date.now(); if (left <= 0) return finish();
    if (c.t === 'ccse'){ E = c.E; go(examView); } else { DM = c.DM; const at = c.at || {p:'r', n:1}; go(() => at.p === 'r' ? mockRead(at.n) : mockAud(at.i)); } };
  if (e) e.onclick = finish;
}
function guardLeave(target){
  if (!EXAM_ON) return go(target);
  const box = document.createElement('div'); box.className = 'confirm leave';
  box.innerHTML = `<span>${esc(t().leaveQ)}</span><span class="sp"></span><button class="btn" type="button" data-no>${esc(t().leaveNo)}</button><button class="btn primary" type="button" data-yes>${esc(t().leaveYes)}</button>`;
  const old = view.querySelector('.confirm.leave'); if (old) old.remove();
  view.prepend(box); window.scrollTo(0,0);
  box.querySelector('[data-no]').onclick = () => box.remove();
  box.querySelector('[data-yes]').onclick = () => { TTS.stop(); go(target); };
}

// ---------- first run ----------
function firstRun(){
  view.innerHTML = `<div class="stack"><div class="intro"><span class="eyebrow">Apto</span><h1>Hola · Hello · Привет · Привіт</h1>
    <p class="lede">${Object.keys(I18N).map(l=>esc(I18N[l].welcome)).join('<br>')}</p></div>
    <div class="cards2">${Object.keys(I18N).map(l=>`<button class="bigcard lang" type="button" data-l="${l}"><span class="bc-tag">${l.toUpperCase()}</span><span class="bc-t">${esc(I18N[l].lang)}</span></button>`).join('')}</div></div>`;
  view.querySelectorAll('[data-l]').forEach(b => b.onclick = () => { S.set.lang = b.dataset.l; S.set.langChosen = true; save(); chrome(); go(home); });
}

// ---------- error report ----------
function reportHTML(){ return `<div class="report"><button type="button" class="linkbtn rep-open">${esc(t().report)}</button></div>`; }
function wireReport(box, ref, text){
  const b = box.querySelector('.rep-open'); if (!b) return;
  b.onclick = () => {
    const wrap = b.parentElement, T_ = t();
    wrap.innerHTML = `<textarea rows="2" class="rep-txt" aria-label="${esc(T_.reportPh)}" placeholder="${esc(T_.reportPh)}"></textarea><div class="row"><button type="button" class="btn rep-copy">${esc(T_.reportCopy)}</button><span class="note rep-msg" role="status"></span></div>`;
    const ta = wrap.querySelector('.rep-txt'); ta.focus();
    wrap.querySelector('.rep-copy').onclick = () => {
      const msg = `Apto · ${ref}\n${text}\n${ta.value ? '— ' + ta.value : ''}`.trim();
      const done = () => wrap.querySelector('.rep-msg').textContent = T_.reportDone;
      const fail = () => { ta.value = msg; ta.select(); wrap.querySelector('.rep-msg').textContent = T_.copyFail; };
      try { navigator.clipboard.writeText(msg).then(done, fail); } catch(e){ fail(); }
    };
  };
}

// ---------- study plan ----------
const today = () => { const d = new Date(); return d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); };
function bumpDay(k){ const d = today(); S.daily = S.daily || {}; const x = S.daily[d] || (S.daily[d] = {c:0, d:0}); x[k]++; }
function streak(){ const days = S.daily || {}; let n = 0; const d = new Date(); if (!days[today()]) d.setDate(d.getDate()-1);
  for(;;){ const k = d.getFullYear()+'-'+String(d.getMonth()+1).padStart(2,'0')+'-'+String(d.getDate()).padStart(2,'0'); const x = days[k]; if (x && (x.c||x.d)) { n++; d.setDate(d.getDate()-1); } else break; } return n; }
function daysTo(dateStr){ if (!dateStr) return null; const [y,m,dd] = dateStr.split('-').map(Number); const t0 = new Date(); t0.setHours(0,0,0,0); return Math.round((new Date(y, m-1, dd) - t0) / 86400000); }
function planHTML(kind){
  const T_ = t(), date = kind === 'c' ? S.set.dateC : S.set.dateD, n = daysTo(date), x = (S.daily||{})[today()] || {c:0,d:0}, st = streak();
  if (!date) return `<section class="panel plan"><h2>${esc(T_.planT)}</h2><p class="note">${esc(T_.planNoDate)}</p><label class="vrow"><span>${esc(T_.planDate)}</span><input type="date" id="plan-date" min="${today()}"></label></section>`;
  if (n < 0) return `<section class="panel plan"><h2>${esc(T_.planT)}</h2><p class="note">${esc(T_.planPast)}</p></section>`;
  let target, doneN = kind === 'c' ? x.c : x.d;
  if (kind === 'c'){ const left = Q.filter(q=>!isMastered(q.id)).length; const studyDays = Math.max(1, n - 2); target = Math.max(10, Math.min(80, Math.ceil(left * MASTER / studyDays))); }
  else target = n <= 14 ? 25 : 15;
  const pct = Math.min(100, Math.round(doneN / target * 100));
  return `<section class="panel plan"><div class="row"><h2>${esc(T_.planT)}</h2><span class="sp"></span><span class="chip">${esc(T_.planDays(n))}</span></div>
    <p><b>${esc(kind==='c'?T_.planCcse(doneN,target):T_.planDele(doneN,target))}</b>${pct>=100?' · '+esc(T_.planDone):''}</p>
    <div class="track big" aria-hidden="true"><i class="${pct>=100?'m':'s'}" style="width:${pct}%"></i></div>
    <p class="note">${esc(kind==='c'?T_.planCcseHint:T_.planDeleHint)}${n<=14?' '+esc(T_.planMockSoon):''}${st?' · '+esc(T_.streak(st)):''}</p>
    <div class="row"><button class="btn primary" id="plan-go" type="button">${esc(T_.planGo)}</button></div></section>`;
}
function wirePlan(kind){
  const inp = $('#plan-date'); if (inp) inp.onchange = () => { if (!inp.value) return; if (kind === 'c') S.set.dateC = inp.value; else S.set.dateD = inp.value; save(); go(current); };
  const b = $('#plan-go'); if (!b) return;
  b.onclick = () => {
    if (kind === 'c'){ const wrong = Q.filter(q=>isWrong(q.id)).length; go(() => study(wrong ? {mode:'wrong'} : {tarea:0})); }
    else { if (dWrongKeys().length) return go(deleMistakes);
      const cand = [...[1,2,3,4].map(n=>({p:'r',n,a:taskAcc('r',n)})), ...[1,2,3,4].map(n=>({p:'a',n,a:taskAcc('a',n)}))].sort((x,y)=>(x.a===null?-1:x.a)-(y.a===null?-1:y.a))[0];
      go(() => cand.p === 'r' ? readTask(cand.n) : (cand.n <= 2 ? audRun(cand.n, 0, []) : groupRun(cand.n))); }
  };
}
function datesHTML(){ const T_ = t(); return `<section class="panel"><h2>${esc(T_.datesT)}</h2><label class="vrow"><span>CCSE</span><input type="date" id="d-ccse" value="${S.set.dateC||''}"></label><label class="vrow"><span>DELE A2</span><input type="date" id="d-dele" value="${S.set.dateD||''}"></label></section>`; }
function wireDates(){ const c = $('#d-ccse'), d = $('#d-dele'); if (c) c.onchange = () => { S.set.dateC = c.value; save(); }; if (d) d.onchange = () => { S.set.dateD = d.value; save(); }; }

// ---------- guide ----------
const LINKS = {ccse:'https://examenes.cervantes.es/es/ccse/que-es', ccsePrep:'https://examenes.cervantes.es/es/ccse/preparar-prueba', exams:'https://examenes.cervantes.es/es', mj:'https://www.mjusticia.gob.es'};
const GUIDE = {
 ru:{ccse:['25 вопросов из 300 в официальном мануале, 45 минут. Чтобы сдать, нужно 15 правильных ответов. Мануал обновляется каждый год.','Стоимость в 2026 году — 85 €; в цену входит две попытки сдачи.','Запись и оплата — онлайн, в личном кабинете на сайте Instituto Cervantes. Имя и данные вводите точно как в документе: они попадут в сертификат.','Экзамен проходит почти каждый месяц, обычно в последний четверг. Запись закрывается примерно за три недели. Ближайшая сессия 2026 года — 26 ноября, запись до 5 ноября.','В день экзамена возьмите оригиналы документов: TIE или другой вид на жительство и паспорт (граждане ЕС — паспорт или удостоверение личности и сертификат регистрации), а также подтверждение записи.','Не сдают CCSE несовершеннолетние и люди с ограниченной судом дееспособностью. В отдельных случаях можно запросить освобождение у Министерства юстиции.'],
     dele:['Четыре части: чтение (60 мин), аудирование (40 мин), письмо (45 мин) и устная часть (около 12 мин плюс подготовка). Устная часть часто проходит в другой день.','Чтобы сдать, нужно 60 баллов из 100 и минимум 30 в каждой группе: «чтение + письмо» и «аудирование + устная часть».','Стоимость DELE A2 в Испании в 2026 году — 138 €.','Сессий несколько в год, у каждого центра свой срок записи — обычно за 6–7 недель до экзамена. Расписание и центры — на сайте Instituto Cervantes.','Не сдают DELE граждане испаноязычных стран и несовершеннолетние. Освобождение можно запросить и в других случаях, например если вы окончили ESO в Испании: это решает Министерство юстиции.']},
 en:{ccse:['25 questions from the 300 in the official manual, 45 minutes. You need 15 correct answers to pass. The manual is updated every year.','The fee in 2026 is €85 and includes two attempts.','Registration and payment are online, in your personal area on the Instituto Cervantes website. Enter your name and details exactly as on your ID: they will appear on the certificate.','The exam runs almost every month, usually on the last Thursday. Registration closes about three weeks before. The next 2026 session is 26 November, with registration until 5 November.','On the day, bring original documents: your TIE or other residence permit and your passport (EU citizens: passport or ID card and registration certificate), plus your registration confirmation.','Minors and people whose legal capacity has been limited by a court do not take the CCSE. In some cases you can ask the Ministry of Justice for an exemption.'],
     dele:['Four parts: reading (60 min), listening (40 min), writing (45 min) and speaking (about 12 min plus preparation). Speaking is often on a different day.','To pass you need 60 points out of 100 and at least 30 in each group: “reading + writing” and “listening + speaking”.','The DELE A2 fee in Spain in 2026 is €138.','There are several sessions a year, and each centre has its own registration deadline, usually 6–7 weeks before the exam. Dates and centres are on the Instituto Cervantes website.','Nationals of Spanish-speaking countries and minors do not take the DELE. You can also ask for an exemption in other cases, for example if you finished ESO in Spain: the Ministry of Justice decides.']},
 es:{ccse:['25 preguntas de las 300 del manual oficial, 45 minutos. Se aprueba con 15 respuestas correctas. El manual se actualiza cada año.','El precio en 2026 es de 85 € e incluye dos convocatorias.','La inscripción y el pago son en línea, en tu área personal de la web del Instituto Cervantes. Escribe tus datos exactamente como en tu documento: aparecerán en el certificado.','Hay prueba casi todos los meses, normalmente el último jueves. La inscripción cierra unas tres semanas antes. La próxima convocatoria de 2026 es el 26 de noviembre, con inscripción hasta el 5 de noviembre.','Ese día lleva los documentos originales: la TIE u otra autorización de residencia y el pasaporte (ciudadanos de la UE: pasaporte o documento de identidad y certificado de registro), y el resguardo de inscripción.','No hacen la prueba CCSE los menores de edad ni las personas con la capacidad modificada judicialmente. En algunos casos se puede pedir una dispensa al Ministerio de Justicia.'],
     dele:['Cuatro pruebas: comprensión de lectura (60 min), comprensión auditiva (40 min), expresión escrita (45 min) y expresión oral (unos 12 min más preparación). La oral suele ser otro día.','Para aprobar necesitas 60 puntos de 100 y al menos 30 en cada grupo: «lectura + escritura» y «audición + oral».','El precio del DELE A2 en España en 2026 es de 138 €.','Hay varias convocatorias al año y cada centro tiene su plazo de inscripción, normalmente 6 o 7 semanas antes. Las fechas y los centros están en la web del Instituto Cervantes.','No hacen el DELE los nacionales de países de lengua española ni los menores. También se puede pedir una dispensa en otros casos, por ejemplo si terminaste la ESO en España: decide el Ministerio de Justicia.']},
 uk:{ccse:['25 питань із 300 в офіційному посібнику, 45 хвилин. Щоб скласти, потрібно 15 правильних відповідей. Посібник оновлюється щороку.','Вартість у 2026 році — 85 €; у ціну входять дві спроби.','Запис і оплата — онлайн, в особистому кабінеті на сайті Instituto Cervantes. Ім’я та дані вводьте точно як у документі: вони потраплять у сертифікат.','Іспит проходить майже щомісяця, зазвичай в останній четвер. Запис закривається приблизно за три тижні. Найближча сесія 2026 року — 26 листопада, запис до 5 листопада.','У день іспиту візьміть оригінали документів: TIE або інший дозвіл на проживання та паспорт (громадяни ЄС — паспорт або посвідчення особи й сертифікат реєстрації), а також підтвердження запису.','Не складають CCSE неповнолітні та люди з обмеженою судом дієздатністю. В окремих випадках можна попросити звільнення в Міністерства юстиції.'],
     dele:['Чотири частини: читання (60 хв), аудіювання (40 хв), письмо (45 хв) і усна частина (близько 12 хв плюс підготовка). Усна частина часто проходить в інший день.','Щоб скласти, потрібно 60 балів зі 100 і щонайменше 30 у кожній групі: «читання + письмо» та «аудіювання + усна частина».','Вартість DELE A2 в Іспанії у 2026 році — 138 €.','Сесій кілька на рік, у кожного центру свій термін запису — зазвичай за 6–7 тижнів до іспиту. Розклад і центри — на сайті Instituto Cervantes.','Не складають DELE громадяни іспаномовних країн і неповнолітні. Звільнення можна попросити й в інших випадках, наприклад якщо ви закінчили ESO в Іспанії: це вирішує Міністерство юстиції.']}
};
function guide(){
  const T_ = t(), g = GUIDE[S.set.lang] || GUIDE.en;
  view.innerHTML = `<div class="stack">${backRow(home, T_.hubBack)}<h1>${esc(T_.guideT)}</h1><p class="note">${esc(T_.guideAsOf)}</p>
    <section class="panel"><h2>CCSE</h2><ul class="focus">${g.ccse.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
      <p class="note"><a href="${LINKS.ccse}" target="_blank" rel="noopener">examenes.cervantes.es · CCSE</a> · <a href="${LINKS.ccsePrep}" target="_blank" rel="noopener">${esc(T_.manualName)}</a></p></section>
    <section class="panel"><h2>DELE A2</h2><ul class="focus">${g.dele.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
      <p class="note"><a href="${LINKS.exams}" target="_blank" rel="noopener">examenes.cervantes.es</a> · <a href="${DELE_A2_URL}" target="_blank" rel="noopener">${esc(T_.deleNoteLink)}</a> · <a href="${LINKS.mj}" target="_blank" rel="noopener">Ministerio de Justicia</a></p></section></div>`;
  wireBack(home);
}

// ---------- CCSE explanations ----------
const EXL = {es:0, en:1, ru:2, uk:3};
Object.assign(I18N.es,{why:'Por qué'}); Object.assign(I18N.en,{why:'Why'}); Object.assign(I18N.ru,{why:'Почему'}); Object.assign(I18N.uk,{why:'Чому'});
function explHTML(q){ const x = EX[q.id]; if (!x) return ''; return `<div class="tipbox"><span class="eyebrow">${esc(t().why)}</span><p>${esc(x[EXL[S.set.lang] ?? 1])}</p></div>`; }
