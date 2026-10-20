// ---------- hub + DELE flow strings ----------
Object.assign(I18N.es,{homeLede:'Elige el examen que quieres preparar.',
 ccseCard:'Conocimientos constitucionales y socioculturales',ccseCardSub:'300 preguntas oficiales · 25 en el examen',deleCard:'Diploma de español, nivel A2',deleCardSub:'Lectura, audición, escritura, oral y gramática',
 hubBack:'Inicio',studyTopics:'Estudiar por temas',studyTopicsSub:'Por tareas, errores o las 300 preguntas',myProgress:'Mi progreso',myProgressSub:'Simulacros, aciertos y puntos débiles',
 deleStudy:'Estudiar un tema',deleStudySub:'Lectura, audición, escritura, oral o gramática',deleMock:'Examen de prueba',deleMockSub:'Lectura + audición, como en el examen',deleWrong:'Repasar errores',
 deleStudyTitle:'¿Qué quieres estudiar?',gramCardSub:n=>`${n} temas · test de nivel`,readCardSub:n=>`${n} textos`,audCardSub:n=>`${n} audios`,
 mockTitle:'Examen de prueba DELE A2',mockLede:'Versión reducida con las tareas de lectura y audición que hay ahora en la app. No verás si aciertas hasta el final.',mockStart:'Empezar el examen',
 partRead:'Parte 1 · Comprensión de lectura',partAud:'Parte 2 · Comprensión auditiva',toAud:'Ir a la audición',finishMock:'Terminar el examen',mockRes:'Resultado del examen de prueba',mockRef:'En el DELE A2 real se aprueba con un 60 % por grupos de pruebas. Úsalo como referencia.',mockAdded:'Los fallos se han añadido a «Repasar errores».',
 mistTitle:'Repasar errores',mistLede:n=>`Tienes ${n} ejercicio${n===1?'':'s'} pendiente${n===1?'':'s'}. Un ejercicio sale de la lista cuando lo aciertas 2 veces seguidas.`,mistEmpty:'No tienes errores pendientes. Haz el examen de prueba o estudia un tema.',
 kRead:'Lectura',kAud:'Audición',kGram:'Gramática',showText:'Ver el texto',
 dprogTitle:'Mi progreso · DELE A2',byPart:'Aciertos por parte',gramTopicsT:'Gramática por temas',audErrT:'Audición: dónde fallas',mocksT:'Exámenes de prueba',noMocks:'Todavía no has hecho ningún examen de prueba.',
 focusPart:(p,n)=>`Tu parte más débil es ${p} (${n} % de aciertos). Dedícale más tiempo.`,focusTopicG:x=>`En gramática, repasa «${x}».`,focusMist:n=>`Tienes ${n} errores pendientes en «Repasar errores».`,focusMock:'Haz un examen de prueba para ver tu nivel en condiciones de examen.',
 backupMoved:'La copia del progreso está en Ajustes.'});
Object.assign(I18N.en,{homeLede:'Choose the exam you want to prepare for.',
 ccseCard:'Constitutional and sociocultural knowledge',ccseCardSub:'300 official questions · 25 in the exam',deleCard:'Spanish diploma, A2 level',deleCardSub:'Reading, listening, writing, speaking and grammar',
 hubBack:'Home',studyTopics:'Study by topic',studyTopicsSub:'By tarea, mistakes or all 300 questions',myProgress:'My progress',myProgressSub:'Mock exams, accuracy and weak spots',
 deleStudy:'Study a topic',deleStudySub:'Reading, listening, writing, speaking or grammar',deleMock:'Mock exam',deleMockSub:'Reading + listening, like the exam',deleWrong:'Review mistakes',
 deleStudyTitle:'What do you want to study?',gramCardSub:n=>`${n} topics · level test`,readCardSub:n=>`${n} texts`,audCardSub:n=>`${n} recordings`,
 mockTitle:'DELE A2 mock exam',mockLede:'A short version with the reading and listening tasks currently in the app. You won’t see whether you’re right until the end.',mockStart:'Start the exam',
 partRead:'Part 1 · Reading',partAud:'Part 2 · Listening',toAud:'Go to listening',finishMock:'Finish the exam',mockRes:'Mock exam result',mockRef:'In the real DELE A2 you pass with 60% per group of tests. Use this as a reference.',mockAdded:'Mistakes were added to “Review mistakes”.',
 mistTitle:'Review mistakes',mistLede:n=>`You have ${n} pending exercise${n===1?'':'s'}. An exercise leaves the list once you get it right twice in a row.`,mistEmpty:'No pending mistakes. Take the mock exam or study a topic.',
 kRead:'Reading',kAud:'Listening',kGram:'Grammar',showText:'Show the text',
 dprogTitle:'My progress · DELE A2',byPart:'Accuracy by part',gramTopicsT:'Grammar by topic',audErrT:'Listening: where you slip',mocksT:'Mock exams',noMocks:'You haven’t taken a mock exam yet.',
 focusPart:(p,n)=>`Your weakest part is ${p} (${n}% correct). Give it more time.`,focusTopicG:x=>`In grammar, review “${x}”.`,focusMist:n=>`You have ${n} pending mistakes in “Review mistakes”.`,focusMock:'Take a mock exam to see your level under exam conditions.',
 backupMoved:'Progress backup is in Settings.'});
Object.assign(I18N.ru,{homeLede:'Выберите экзамен, к которому готовитесь.',
 ccseCard:'Знание Конституции и испанского общества',ccseCardSub:'300 официальных вопросов · 25 на экзамене',deleCard:'Диплом испанского языка, уровень A2',deleCardSub:'Чтение, аудирование, письмо, говорение и грамматика',
 hubBack:'Главная',studyTopics:'Учить по темам',studyTopicsSub:'По tareas, ошибкам или все 300 вопросов',myProgress:'Мой прогресс',myProgressSub:'Пробные экзамены, точность и слабые места',
 deleStudy:'Учить тему',deleStudySub:'Чтение, аудирование, письмо, говорение или грамматика',deleMock:'Пробный экзамен',deleMockSub:'Чтение + аудирование, как на экзамене',deleWrong:'Работа над ошибками',
 deleStudyTitle:'Что будем учить?',gramCardSub:n=>`тем: ${n} · тест уровня`,readCardSub:n=>`текстов: ${n}`,audCardSub:n=>`записей: ${n}`,
 mockTitle:'Пробный экзамен DELE A2',mockLede:'Сокращённая версия из заданий на чтение и аудирование, которые сейчас есть в приложении. Верно или нет, вы увидите только в конце.',mockStart:'Начать экзамен',
 partRead:'Часть 1 · Чтение',partAud:'Часть 2 · Аудирование',toAud:'К аудированию',finishMock:'Завершить экзамен',mockRes:'Результат пробного экзамена',mockRef:'На настоящем DELE A2 нужно набрать 60 % в каждой группе заданий. Это ориентир.',mockAdded:'Ошибки добавлены в «Работу над ошибками».',
 mistTitle:'Работа над ошибками',mistLede:n=>`Упражнений в работе: ${n}. Упражнение уходит из списка, когда вы ответите верно 2 раза подряд.`,mistEmpty:'Ошибок в работе нет. Пройдите пробный экзамен или поучите тему.',
 kRead:'Чтение',kAud:'Аудирование',kGram:'Грамматика',showText:'Показать текст',
 dprogTitle:'Мой прогресс · DELE A2',byPart:'Точность по частям',gramTopicsT:'Грамматика по темам',audErrT:'Аудирование: где ошибки',mocksT:'Пробные экзамены',noMocks:'Вы ещё не проходили пробный экзамен.',
 focusPart:(p,n)=>`Самая слабая часть — ${p} (${n} % верных ответов). Уделите ей больше времени.`,focusTopicG:x=>`В грамматике разберите тему «${x}».`,focusMist:n=>`В «Работе над ошибками» ждут упражнений: ${n}.`,focusMock:'Пройдите пробный экзамен, чтобы оценить уровень в условиях экзамена.',
 backupMoved:'Резервная копия прогресса — в настройках.'});
Object.assign(I18N.uk,{homeLede:'Оберіть іспит, до якого готуєтеся.',
 ccseCard:'Знання Конституції та іспанського суспільства',ccseCardSub:'300 офіційних питань · 25 на іспиті',deleCard:'Диплом з іспанської мови, рівень A2',deleCardSub:'Читання, аудіювання, письмо, говоріння та граматика',
 hubBack:'Головна',studyTopics:'Вчити за темами',studyTopicsSub:'За tareas, помилками або всі 300 питань',myProgress:'Мій прогрес',myProgressSub:'Пробні іспити, точність і слабкі місця',
 deleStudy:'Вчити тему',deleStudySub:'Читання, аудіювання, письмо, говоріння або граматика',deleMock:'Пробний іспит',deleMockSub:'Читання + аудіювання, як на іспиті',deleWrong:'Робота над помилками',
 deleStudyTitle:'Що вчитимемо?',gramCardSub:n=>`тем: ${n} · тест рівня`,readCardSub:n=>`текстів: ${n}`,audCardSub:n=>`записів: ${n}`,
 mockTitle:'Пробний іспит DELE A2',mockLede:'Скорочена версія із завдань на читання та аудіювання, які зараз є в застосунку. Правильно чи ні, ви побачите лише наприкінці.',mockStart:'Почати іспит',
 partRead:'Частина 1 · Читання',partAud:'Частина 2 · Аудіювання',toAud:'До аудіювання',finishMock:'Завершити іспит',mockRes:'Результат пробного іспиту',mockRef:'На справжньому DELE A2 треба набрати 60 % у кожній групі завдань. Це орієнтир.',mockAdded:'Помилки додано до «Роботи над помилками».',
 mistTitle:'Робота над помилками',mistLede:n=>`Вправ у роботі: ${n}. Вправа зникає зі списку, коли ви відповісте правильно 2 рази поспіль.`,mistEmpty:'Помилок у роботі немає. Пройдіть пробний іспит або повчіть тему.',
 kRead:'Читання',kAud:'Аудіювання',kGram:'Граматика',showText:'Показати текст',
 dprogTitle:'Мій прогрес · DELE A2',byPart:'Точність за частинами',gramTopicsT:'Граматика за темами',audErrT:'Аудіювання: де помилки',mocksT:'Пробні іспити',noMocks:'Ви ще не проходили пробний іспит.',
 focusPart:(p,n)=>`Найслабша частина — ${p} (${n} % правильних відповідей). Приділіть їй більше часу.`,focusTopicG:x=>`У граматиці розберіть тему «${x}».`,focusMist:n=>`У «Роботі над помилками» чекають вправ: ${n}.`,focusMock:'Пройдіть пробний іспит, щоб оцінити рівень в умовах іспиту.',
 backupMoved:'Резервна копія прогресу — у налаштуваннях.'});

// ---------- DELE item tracking ----------
// keys: g:<topic>:<d|p><n>  r:<text>:<n>  a:<recording>
GRAM.forEach(g => { g.diag.forEach((it,k) => it.key = `g:${g.id}:d${k}`); g.prac.forEach((it,k) => it.key = `g:${g.id}:p${k}`); });
function drec(key, ok){
  const d = S.dq[key] || (S.dq[key] = {n:0, ok:0, streak:0, wrong:false});
  bumpDay('d'); d.n++; if (ok){ d.ok++; d.streak++; if (d.streak >= MASTER) d.wrong = false; } else { d.streak = 0; d.wrong = true; }
  save();
}
const dWrongKeys = () => Object.keys(S.dq).filter(k => S.dq[k].wrong && dItem(k));
function partAcc(prefix){ let n=0, ok=0; Object.keys(S.dq).forEach(k => { if (k.startsWith(prefix)){ n+=S.dq[k].n; ok+=S.dq[k].ok; } }); return {n, ok, p: n ? Math.round(ok/n*100) : null}; }

// ---------- HOME / HUBS ----------
function home(){
  const T_ = t();
  view.innerHTML = `<div class="stack">
    ${S.set.langChosen ? '' : langRowHTML()}<div class="intro"><span class="eyebrow">${esc(T_.homeEyebrow)}</span><h1>${esc(T_.homeH1)}</h1><p class="lede">${esc(T_.homeLede)}</p></div>
    <div class="cards2">
      <button class="bigcard" id="go-ccse" type="button"><span class="bc-tag">CCSE<span class="bc-go" aria-hidden="true">→</span></span><span class="bc-t">${esc(T_.ccseCard)}</span><span class="bc-s">${esc(T_.ccseCardSub)}</span></button>
      <button class="bigcard" id="go-dele" type="button"><span class="bc-tag">DELE A2<span class="bc-go" aria-hidden="true">→</span></span><span class="bc-t">${esc(T_.deleCard)}</span><span class="bc-s">${esc(T_.deleCardSub)}</span></button>
    </div>${resumeHTML()}${jumpHTML()}${installHTML()}<button class="linkbtn" id="go-guide" type="button">${esc(T_.guideBtn)}</button></div>`;
  wireResume(); wireJump(); wireInstall(); wireLangRow(); $('#go-guide').onclick = () => go(guide);
  $('#go-ccse').onclick = () => go(ccseHub);
  $('#go-dele').onclick = () => go(deleHub);
}
function backRow(fn, label){ return `<button class="backlink" id="back" type="button">← ${esc(label)}</button>`; }
function wireBack(fn){ const b = $('#back'); if (b) b.onclick = () => go(fn); }
function ccseHub(){
  const T_ = t(), mastered = Q.filter(q=>isMastered(q.id)).length, last = S.exams[S.exams.length-1];
  view.innerHTML = `<div class="stack">${backRow(home, T_.hubBack)}
    <div class="intro"><span class="eyebrow">CCSE</span><h1>${esc(T_.h1)}</h1><p class="lede">${esc(T_.lede)}</p></div>
    <section class="panel try" aria-labelledby="h-try"><h2 class="sec" id="h-try">${esc(T_.tryOne)}</h2><div id="try" class="qcard"></div></section>
    <div class="actions">
      <button class="btn" id="go-study" type="button">${esc(T_.studyTopics)}<small>${dueCount()?esc(T_.dueSub(dueCount())):esc(T_.studyTopicsSub)}</small></button>
      <button class="btn primary" id="go-exam" type="button">${esc(T_.exam)}<small>${esc(T_.examSub)}</small></button>
      <button class="btn" id="go-report" type="button">${esc(T_.myProgress)}<small>${mastered}/300 · ${last?esc(T_.lastExam(last.score)):esc(T_.myProgressSub)}</small></button>
    </div>${planSectionHTML('c')}<p class="note">${esc(T_.attrib)} <a href="${MANUAL_URL}" target="_blank" rel="noopener">${esc(T_.manualName)}</a> ${esc(T_.attribB)}</p></div>`;
  wireBack(home); wirePlanSection('c');
  $('#go-study').onclick = () => go(studyPick);
  $('#go-exam').onclick = () => go(examStart);
  $('#go-report').onclick = () => go(report);
  const pool = Q.filter(q=>!isMastered(q.id)), src = pool.length ? pool : Q;
  renderQuestion($('#try'), src[Math.floor(Math.random()*src.length)], {after: fb => { fb.insertAdjacentHTML('beforeend', `<div class="row next"><button class="btn soft" id="try-more" type="button">${esc(T_.keepStudying)} →</button></div>`); $('#try-more').onclick = () => go(() => study({tarea:0})); }});
}
function deleHub(){
  const T_ = t(), wrong = dWrongKeys().length, last = S.dmocks[S.dmocks.length-1];
  view.innerHTML = `<div class="stack">${backRow(home, T_.hubBack)}
    <div class="intro"><span class="eyebrow">DELE A2</span><h1>${esc(T_.deleCard)}</h1><p class="lede">${esc(T_.deleCardSub)}</p></div>
    <div class="actions">
      <button class="btn" id="d-study" type="button">${esc(T_.deleStudy)}<small>${esc(T_.deleStudySub)}</small></button>
      <button class="btn primary" id="d-mock" type="button">${esc(T_.deleMock)}<small>${esc(T_.deleMockSub)}</small></button>
      <button class="btn" id="d-wrong" type="button" ${wrong?'':'disabled'}>${esc(T_.deleWrong)}<small>${esc(T_.pending(wrong))}</small></button>
      <button class="btn" id="d-prog" type="button">${esc(T_.myProgress)}<small>${last?Math.round(last.ok/last.n*100)+' % · ':''}${esc(T_.myProgressSub)}</small></button>
    </div>${planSectionHTML('d')}${deleNote()}</div>`;
  wireBack(home); wirePlanSection('d');
  $('#d-study').onclick = () => go(deleStudy);
  $('#d-mock').onclick = () => go(deleMock);
  $('#d-wrong').onclick = () => go(deleMistakes);
  $('#d-prog').onclick = () => go(deleReport);
}
function deleStudy(){
  const T_ = t(), r = partAcc('r:'), a = partAcc('a:'), g = partAcc('g:');
  const pc = x => x.p === null ? T_.notTested : x.p + ' %';
  view.innerHTML = `<div class="stack">${backRow(deleHub, 'DELE A2')}<h1>${esc(T_.deleStudyTitle)}</h1>
    <div class="tareas" style="gap:10px">
      <button class="btn" id="s-read" type="button">${esc(T_.kRead)}<small>${esc(T_.readCardSub(READ.length))} · ${esc(pc(r))}</small></button>
      <button class="btn" id="s-aud" type="button">${esc(T_.kAud)}<small>${esc(T_.audCardSub(AUD.length))} · ${esc(pc(a))}</small></button>
      <button class="btn" id="s-gram" type="button">${esc(T_.kGram)}<small>${esc(T_.gramCardSub(GRAM.length))} · ${esc(pc(g))}</small></button>
      <button class="btn" id="s-voc" type="button">${esc(T_.kVoc)}<small>${esc(T_.vocSub(VOC_TOTAL))}${vocDueKeys().length?' · '+esc(T_.vocDue(vocDueKeys().length)):''}</small></button>
      <button class="btn" id="s-write" type="button">${esc(T_.kWrite)}<small>${esc(T_.writeSub)}</small></button>
      <button class="btn" id="s-speak" type="button">${esc(T_.kSpeak)}<small>${esc(T_.speakSub)}</small></button>
    </div></div>`;
  wireBack(deleHub);
  $('#s-read').onclick = () => go(reading);
  $('#s-aud').onclick = () => go(listening);
  $('#s-gram').onclick = () => go(grammar);
  $('#s-voc').onclick = () => go(vocab);
  $('#s-write').onclick = () => go(writing);
  $('#s-speak').onclick = () => go(speaking);
}

