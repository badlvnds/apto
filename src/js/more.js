// ---------- about & privacy, progress file, voice help, spaced repetition, voice recorder ----------
const REPO_URL = 'https://github.com/badlvnds/apto';
const APP_VERSION = '__APP_VERSION__';
const GH_PRIVACY = 'https://docs.github.com/en/site-policy/privacy-policies/github-general-privacy-statement';
Object.assign(I18N.es,{aboutBtn:'Sobre Apto y privacidad',aboutT:'Sobre Apto y privacidad',
 aboutWhatT:'Qué es',aboutWhat:'Apto es un proyecto personal, gratuito y sin fines comerciales para preparar el CCSE y el DELE A2. No es una web oficial: no tiene relación con el Instituto Cervantes, el Ministerio de Justicia ni ningún centro de examen.',
 aboutSrcT:'De dónde sale el contenido',aboutSrc:['Las 300 preguntas y respuestas del CCSE son las del manual oficial de 2026 (© Instituto Cervantes). Las traducciones y las explicaciones son de Apto y pueden tener errores: en caso de duda, vale el texto en español del manual.','Las tareas del DELE A2 (lectura, audición, gramática, escritura y oral) son ejercicios originales escritos para Apto con el formato del examen. No son exámenes oficiales. Para practicar con modelos oficiales, usa los del Instituto Cervantes.','¿Has visto un error? Pulsa «Avisar de un error» debajo de la pregunta o escribe a'],
 aboutPrivT:'Privacidad',aboutPriv:['No hay cuentas, ni cookies, ni publicidad, ni estadísticas de visitas.','Tus datos de estudio se quedan en tu dispositivo. Apto no recibe tus resultados ni tu progreso.','Todos los archivos, también las fuentes, se cargan desde la propia web: Apto no pide nada a servicios de terceros.','Los avisos de error no se envían solos: el texto se copia y tú decides si lo mandas.','Las grabaciones de voz del oral se quedan en tu dispositivo y se borran al salir de la página.','Si borras los datos del navegador, pierdes el progreso. Descarga una copia en Ajustes.'],
 aboutHost:'La web está alojada en GitHub Pages. Como cualquier servidor, GitHub puede registrar datos técnicos de la conexión, como la dirección IP:',aboutHostLink:'declaración de privacidad de GitHub',
 aboutCodeT:'Código',aboutCode:'El código es abierto, con licencia MIT.',
 fileT:'Archivo de progreso',fileLede:'Descarga un archivo con todo tu progreso y cárgalo en otro dispositivo o navegador.',fileSave:'Descargar archivo',fileLoad:'Cargar archivo',fileOk:'Progreso cargado desde el archivo.',fileBad:'Este archivo no es una copia de Apto.',lastBackup:d=>`Última copia: ${d}`,noBackup:'Todavía no has guardado ninguna copia.',codeT:'O con un código de texto',
 voiceHelpT:'Cómo instalar una voz en español',readInstead:'Leer el texto en lugar de escucharlo',
 vh:{ios:'iPhone o iPad: Ajustes → Accesibilidad → Contenido leído → Voces → Español. Descarga una voz y vuelve a abrir la página.',android:'Android: en Ajustes busca «Salida de texto a voz», elige el motor de Google → Instalar datos de voz → Español. Después vuelve a abrir la página.',mac:'Mac: Ajustes del Sistema → Accesibilidad → Contenido leído → Voz del sistema → Gestionar voces → Español.',win:'Windows: Configuración → Hora e idioma → Voz → Agregar voces → Español. Después reinicia el navegador.',other:'Prueba con Chrome, Edge o Safari: suelen traer voces en español.'},
 dueBtn:'Repaso de hoy',dueSub:n=>n?`${n} pregunta${n===1?'':'s'} para repasar hoy`:'Nada pendiente para hoy',dueNone:'Hoy no tienes nada que repasar',dueNoneLede:'Las preguntas que aciertas vuelven al cabo de 1, 3, 7, 16 y 35 días, para que no se te olviden. Mientras tanto, estudia preguntas nuevas.',dueChip:'repaso',nextDue:d=>`Vuelve en ${d} día${d===1?'':'s'}`,
 recT:'Grábate',recStart:'● Grabar',recStop:'■ Parar',recAgain:'● Grabar otra vez',recHint:'Grábate, escúchate y compárate con el ejemplo. La grabación no sale de tu dispositivo.',recDenied:'No hay acceso al micrófono. Permítelo en los ajustes del navegador.',recNo:'Tu navegador no puede grabar. Usa la grabadora del móvil.',recOn:'Grabando…'});
Object.assign(I18N.en,{aboutBtn:'About Apto and privacy',aboutT:'About Apto and privacy',
 aboutWhatT:'What it is',aboutWhat:'Apto is a free, non-commercial personal project for preparing the CCSE and DELE A2. It isn’t an official website and has no connection with the Instituto Cervantes, the Ministry of Justice or any exam centre.',
 aboutSrcT:'Where the content comes from',aboutSrc:['The 300 CCSE questions and answers are those of the official 2026 manual (© Instituto Cervantes). The translations and explanations are Apto’s own and may contain mistakes: if in doubt, the manual’s Spanish text is what counts.','The DELE A2 tasks (reading, listening, grammar, writing and speaking) are original exercises written for Apto in the exam format. They aren’t official exams. To practise with official models, use the Instituto Cervantes ones.','Spotted a mistake? Tap “Report a mistake” under the question or write to'],
 aboutPrivT:'Privacy',aboutPriv:['No accounts, no cookies, no ads and no visitor statistics.','Your learning data stays on your device. Apto doesn’t receive your results or progress.','Every file, fonts included, is loaded from this website itself: Apto makes no requests to third-party services.','Mistake reports aren’t sent automatically: the text is copied and you decide whether to send it.','Speaking-practice recordings stay on your device and are deleted when you leave the page.','If you clear your browser data, you lose your progress. Download a copy in Settings.'],
 aboutHost:'The site is hosted on GitHub Pages. Like any web server, GitHub may log technical connection data such as your IP address:',aboutHostLink:'GitHub privacy statement',
 aboutCodeT:'Code',aboutCode:'The code is open source, under the MIT licence.',
 fileT:'Progress file',fileLede:'Download a file with all your progress and load it on another device or browser.',fileSave:'Download file',fileLoad:'Load file',fileOk:'Progress loaded from the file.',fileBad:'This file isn’t an Apto backup.',lastBackup:d=>`Last copy: ${d}`,noBackup:'You haven’t saved a copy yet.',codeT:'Or with a text code',
 voiceHelpT:'How to install a Spanish voice',readInstead:'Read the text instead of listening',
 vh:{ios:'iPhone or iPad: Settings → Accessibility → Spoken Content → Voices → Spanish. Download a voice and reopen the page.',android:'Android: in Settings search for “Text-to-speech output”, choose the Google engine → Install voice data → Spanish. Then reopen the page.',mac:'Mac: System Settings → Accessibility → Spoken Content → System voice → Manage Voices → Spanish.',win:'Windows: Settings → Time & language → Speech → Add voices → Spanish. Then restart the browser.',other:'Try Chrome, Edge or Safari: they usually have Spanish voices.'},
 dueBtn:'Today’s review',dueSub:n=>n?`${n} question${n===1?'':'s'} to review today`:'Nothing due today',dueNone:'Nothing to review today',dueNoneLede:'Questions you get right come back after 1, 3, 7, 16 and 35 days so you don’t forget them. Meanwhile, study new questions.',dueChip:'review',nextDue:d=>`Back in ${d} day${d===1?'':'s'}`,
 recT:'Record yourself',recStart:'● Record',recStop:'■ Stop',recAgain:'● Record again',recHint:'Record yourself, listen back and compare with the sample. The recording never leaves your device.',recDenied:'No microphone access. Allow it in your browser settings.',recNo:'Your browser can’t record. Use your phone’s voice recorder.',recOn:'Recording…'});
Object.assign(I18N.ru,{aboutBtn:'О проекте и приватности',aboutT:'О проекте и приватности',
 aboutWhatT:'Что это',aboutWhat:'Apto — личный бесплатный некоммерческий проект для подготовки к CCSE и DELE A2. Это не официальный сайт: он никак не связан с Instituto Cervantes, Министерством юстиции или экзаменационными центрами.',
 aboutSrcT:'Откуда материалы',aboutSrc:['300 вопросов и ответов CCSE взяты из официального пособия 2026 года (© Instituto Cervantes). Переводы и пояснения сделаны для Apto и могут содержать ошибки: если сомневаетесь, верен испанский текст пособия.','Задания DELE A2 (чтение, аудирование, грамматика, письмо и говорение) — оригинальные упражнения, написанные для Apto в формате экзамена. Это не официальные экзамены. Для тренировки на официальных моделях используйте материалы Instituto Cervantes.','Нашли ошибку? Нажмите «Сообщить об ошибке» под вопросом или напишите на'],
 aboutPrivT:'Приватность',aboutPriv:['Нет аккаунтов, cookie, рекламы и статистики посещений.','Ваши учебные данные остаются на вашем устройстве. Apto не получает ваши результаты и прогресс.','Все файлы, включая шрифты, загружаются с самого сайта: Apto ничего не запрашивает у сторонних сервисов.','Сообщения об ошибках не отправляются сами: текст копируется, а отправлять или нет — решаете вы.','Записи голоса в разделе «Говорение» остаются на вашем устройстве и удаляются, когда вы уходите со страницы.','Если очистить данные браузера, прогресс пропадёт. Скачайте копию в настройках.'],
 aboutHost:'Сайт размещён на GitHub Pages. Как и любой веб-сервер, GitHub может записывать технические данные подключения, например IP-адрес:',aboutHostLink:'политика конфиденциальности GitHub',
 aboutCodeT:'Код',aboutCode:'Код открыт, лицензия MIT.',
 fileT:'Файл с прогрессом',fileLede:'Скачайте файл со всем прогрессом и загрузите его на другом устройстве или в другом браузере.',fileSave:'Скачать файл',fileLoad:'Загрузить файл',fileOk:'Прогресс загружен из файла.',fileBad:'Это не файл копии Apto.',lastBackup:d=>`Последняя копия: ${d}`,noBackup:'Вы ещё не сохраняли копию.',codeT:'Или текстовым кодом',
 voiceHelpT:'Как установить испанский голос',readInstead:'Прочитать текст вместо прослушивания',
 vh:{ios:'iPhone или iPad: Настройки → Универсальный доступ → Устный контент → Голоса → Испанский. Скачайте голос и откройте страницу заново.',android:'Android: в настройках найдите «Синтез речи», выберите движок Google → Установить голосовые данные → Испанский. Потом откройте страницу заново.',mac:'Mac: Системные настройки → Универсальный доступ → Устный контент → Системный голос → Управлять голосами → Испанский.',win:'Windows: Параметры → Время и язык → Речь → Добавить голоса → Испанский. Потом перезапустите браузер.',other:'Попробуйте Chrome, Edge или Safari: в них обычно есть испанские голоса.'},
 dueBtn:'Повторение на сегодня',dueSub:n=>n?`На сегодня: ${n}`:'На сегодня ничего',dueNone:'Сегодня повторять нечего',dueNoneLede:'Вопросы, на которые вы ответили верно, возвращаются через 1, 3, 7, 16 и 35 дней, чтобы не забылись. А пока учите новые вопросы.',dueChip:'повтор',nextDue:d=>`Вернётся через ${d} дн.`,
 recT:'Запишите себя',recStart:'● Записать',recStop:'■ Стоп',recAgain:'● Записать ещё раз',recHint:'Запишите себя, переслушайте и сравните с примером. Запись не покидает ваше устройство.',recDenied:'Нет доступа к микрофону. Разрешите его в настройках браузера.',recNo:'Ваш браузер не умеет записывать. Используйте диктофон телефона.',recOn:'Идёт запись…'});
Object.assign(I18N.uk,{aboutBtn:'Про проєкт і приватність',aboutT:'Про проєкт і приватність',
 aboutWhatT:'Що це',aboutWhat:'Apto — особистий безкоштовний некомерційний проєкт для підготовки до CCSE і DELE A2. Це не офіційний сайт: він ніяк не пов’язаний з Instituto Cervantes, Міністерством юстиції чи екзаменаційними центрами.',
 aboutSrcT:'Звідки матеріали',aboutSrc:['300 питань і відповідей CCSE взято з офіційного посібника 2026 року (© Instituto Cervantes). Переклади й пояснення зроблено для Apto, і вони можуть містити помилки: якщо сумніваєтеся, правильним є іспанський текст посібника.','Завдання DELE A2 (читання, аудіювання, граматика, письмо й говоріння) — оригінальні вправи, написані для Apto у форматі іспиту. Це не офіційні іспити. Для тренування на офіційних моделях використовуйте матеріали Instituto Cervantes.','Знайшли помилку? Натисніть «Повідомити про помилку» під питанням або напишіть на'],
 aboutPrivT:'Приватність',aboutPriv:['Немає акаунтів, cookie, реклами й статистики відвідувань.','Ваші навчальні дані залишаються на вашому пристрої. Apto не отримує ваших результатів і прогресу.','Усі файли, зокрема шрифти, завантажуються із самого сайту: Apto нічого не запитує в сторонніх сервісів.','Повідомлення про помилки не надсилаються самі: текст копіюється, а надсилати чи ні — вирішуєте ви.','Записи голосу в розділі «Говоріння» залишаються на вашому пристрої й видаляються, коли ви йдете зі сторінки.','Якщо очистити дані браузера, прогрес зникне. Завантажте копію в налаштуваннях.'],
 aboutHost:'Сайт розміщено на GitHub Pages. Як і будь-який вебсервер, GitHub може записувати технічні дані підключення, наприклад IP-адресу:',aboutHostLink:'політика конфіденційності GitHub',
 aboutCodeT:'Код',aboutCode:'Код відкритий, ліцензія MIT.',
 fileT:'Файл із прогресом',fileLede:'Завантажте файл з усім прогресом і відкрийте його на іншому пристрої чи в іншому браузері.',fileSave:'Завантажити файл',fileLoad:'Відкрити файл',fileOk:'Прогрес завантажено з файлу.',fileBad:'Це не файл копії Apto.',lastBackup:d=>`Остання копія: ${d}`,noBackup:'Ви ще не зберігали копію.',codeT:'Або текстовим кодом',
 voiceHelpT:'Як установити іспанський голос',readInstead:'Прочитати текст замість прослуховування',
 vh:{ios:'iPhone або iPad: Параметри → Доступність → Озвучення вмісту → Голоси → Іспанська. Завантажте голос і відкрийте сторінку знову.',android:'Android: у налаштуваннях знайдіть «Синтез мовлення», оберіть рушій Google → Установити голосові дані → Іспанська. Потім відкрийте сторінку знову.',mac:'Mac: Системні параметри → Доступність → Озвучення вмісту → Системний голос → Керувати голосами → Іспанська.',win:'Windows: Настройки → Час і мова → Мовлення → Додати голоси → Іспанська. Потім перезапустіть браузер.',other:'Спробуйте Chrome, Edge або Safari: у них зазвичай є іспанські голоси.'},
 dueBtn:'Повторення на сьогодні',dueSub:n=>n?`На сьогодні: ${n}`:'На сьогодні нічого',dueNone:'Сьогодні повторювати нічого',dueNoneLede:'Питання, на які ви відповіли правильно, повертаються через 1, 3, 7, 16 і 35 днів, щоб не забулися. А поки вчіть нові питання.',dueChip:'повтор',nextDue:d=>`Повернеться через ${d} дн.`,
 recT:'Запишіть себе',recStart:'● Записати',recStop:'■ Стоп',recAgain:'● Записати ще раз',recHint:'Запишіть себе, переслухайте й порівняйте з прикладом. Запис не залишає вашого пристрою.',recDenied:'Немає доступу до мікрофона. Дозвольте його в налаштуваннях браузера.',recNo:'Ваш браузер не вміє записувати. Використайте диктофон телефона.',recOn:'Іде запис…'});

// ---------- about ----------
function about(){
  const T_ = t(), mail = `<a href="mailto:${REPORT_CONTACT}">${REPORT_CONTACT}</a>`;
  view.innerHTML = `<div class="stack">${backRow(home, T_.hubBack)}<h1>${esc(T_.aboutT)}</h1>
    <section class="panel"><h2>${esc(T_.aboutWhatT)}</h2><p>${esc(T_.aboutWhat)}</p></section>
    <section class="panel"><h2>${esc(T_.aboutSrcT)}</h2><ul class="focus"><li>${esc(T_.aboutSrc[0])} <a href="${MANUAL_URL}" target="_blank" rel="noopener">${esc(T_.manualName)}</a></li><li>${esc(T_.ccseMeta)}</li><li>${esc(T_.aboutSrc[1])} <a href="${DELE_A2_URL}" target="_blank" rel="noopener">examenes.cervantes.es</a></li><li>${esc(T_.aboutSrc[2])} ${mail}.</li></ul></section>
    <section class="panel"><h2>${esc(T_.aboutPrivT)}</h2><ul class="focus">${T_.aboutPriv.map(x=>`<li>${esc(x)}</li>`).join('')}<li>${esc(T_.aboutHost)} <a href="${GH_PRIVACY}" target="_blank" rel="noopener">${esc(T_.aboutHostLink)}</a>.</li></ul></section>
    <section class="panel"><h2>${esc(T_.verT)}</h2><p><b>${esc(T_.verLine(APP_VERSION))}</b></p><p class="note">${esc(T_.newT)}</p><ul class="focus">${T_.newList.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
    <section class="panel"><h2>${esc(T_.aboutCodeT)}</h2><p>${esc(T_.aboutCode)} <a href="${REPO_URL}" target="_blank" rel="noopener">github.com/badlvnds/apto</a></p></section></div>`;
  wireBack(home);
}

// ---------- progress file ----------
const BACKUP_KEYS = ['q','exams','aud','audRuns','gram','read','dq','dmocks','daily','wr','voc'];
function backupData(){ const d = {}; BACKUP_KEYS.forEach(k => d[k] = S[k]); d.set = {dateC:S.set.dateC||'', dateD:S.set.dateD||''}; return d; }
function applyBackup(d){
  if (!d || typeof d.q !== 'object' || !Array.isArray(d.exams)) throw new Error('bad');
  const f = fresh(); BACKUP_KEYS.forEach(k => S[k] = d[k] !== undefined ? d[k] : (f[k] !== undefined ? f[k] : {}));
  if (d.set){ if (d.set.dateC) S.set.dateC = d.set.dateC; if (d.set.dateD) S.set.dateD = d.set.dateD; }
  save();
}
function fileHTML(){
  const T_ = t(), lb = S.set.lastBackup;
  return `<section class="panel"><h2>${esc(T_.fileT)}</h2><p class="note">${esc(T_.fileLede)}</p>
    <div class="row"><button class="btn primary" id="f-save" type="button">${esc(T_.fileSave)}</button><label class="btn" for="f-load">${esc(T_.fileLoad)}</label><input type="file" id="f-load" accept=".json,application/json" hidden></div>
    <p class="note" id="f-msg" role="status">${esc(lb ? T_.lastBackup(new Date(lb).toLocaleDateString(S.set.lang,{day:'numeric',month:'long',year:'numeric'})) : T_.noBackup)}</p></section>`;
}
function wireFile(){
  const T_ = t(), msg = $('#f-msg');
  $('#f-save').onclick = () => {
    const blob = new Blob([JSON.stringify({app:'apto', v:2, at:new Date().toISOString(), data:backupData()})], {type:'application/json'});
    const a = document.createElement('a'); a.href = URL.createObjectURL(blob); a.download = `apto-${today()}.json`;
    document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 1000);
    S.set.lastBackup = Date.now(); save(); msg.textContent = T_.lastBackup(new Date().toLocaleDateString(S.set.lang,{day:'numeric',month:'long',year:'numeric'}));
  };
  $('#f-load').onchange = e => {
    const file = e.target.files && e.target.files[0]; if (!file) return;
    file.text().then(txt => { const o = JSON.parse(txt); if (!o || o.app !== 'apto') throw 0; applyBackup(o.data); go(settings); setTimeout(() => { const m = $('#f-msg'); if (m) m.textContent = T_.fileOk; toast(T_.fileOk); }, 0); })
      .catch(() => { msg.textContent = T_.fileBad; });
  };
}

// ---------- voice help (no Spanish voice on the device) ----------
function platform(){ const u = navigator.userAgent || '';
  if (/iPhone|iPad|iPod/.test(u) || (/Macintosh/.test(u) && navigator.maxTouchPoints > 1)) return 'ios';
  if (/Android/.test(u)) return 'android'; if (/Macintosh/.test(u)) return 'mac'; if (/Windows/.test(u)) return 'win'; return 'other'; }
function hasVoices(){ return TTS.ok && TTS.list().length > 0; }
// shown in place of the audio when no Spanish voice is available; lines = [{s,t}], names = {f,m,n}
function noVoiceHTML(lines, names){
  if (hasVoices()) return '';
  const T_ = t(), p = platform();
  return `<div class="novoice"><p class="note">${esc(TTS.ok ? T_.noVoices : T_.noTTS)}</p>
    <details class="script"><summary>${esc(T_.voiceHelpT)}</summary><p class="note">${esc(T_.vh[p])}</p>${p!=='other'?`<p class="note">${esc(T_.vh.other)}</p>`:''}</details>
    <details class="script"><summary>${esc(T_.readInstead)}</summary><ol>${lines.map(l=>`<li>${l.s==='n'?'':`<span class="who">${esc((names&&names[l.s])||T_.speaker[l.s]||'')}</span>`}<span lang="es">${esc(l.t)}</span></li>`).join('')}</ol></details></div>`;
}
// voices often load a moment after the page: hide fallbacks once they arrive
function voicesArrived(){ if (hasVoices()) document.querySelectorAll('.novoice').forEach(e => e.remove()); }

// ---------- CCSE spaced repetition ----------
const SRS_DAYS = [0, 1, 3, 7, 16, 35];
const DAY = 86400000;
const endOfToday = () => { const d = new Date(); d.setHours(23,59,59,999); return d.getTime(); };
// box/due are derived for questions answered before spaced repetition existed
function srs(id){
  const s = S.q[id]; if (!s || !s.seen) return null;
  if (s.box === undefined){ s.box = s.wrong ? 1 : Math.min(5, Math.max(1, s.streak)); s.due = (s.last || Date.now()) + SRS_DAYS[s.box]*DAY; }
  return s;
}
function srsUpdate(s, correct){ if (correct){ s.box = Math.min(5, (s.box || 0) + 1); } else s.box = 1; s.due = Date.now() + SRS_DAYS[s.box]*DAY; }
const isDue = id => { const s = srs(id); return !!s && s.due <= endOfToday(); };
const dueCount = () => Q.filter(q => isDue(q.id)).length;

// ---------- voice recorder (speaking practice) ----------
let REC = null;
function recStop(){ if (!REC) return; try { if (REC.mr && REC.mr.state !== 'inactive') REC.mr.stop(); } catch(e){} try { REC.stream && REC.stream.getTracks().forEach(tr => tr.stop()); } catch(e){} REC = null; }
function recorderHTML(){
  const T_ = t();
  if (!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia && window.MediaRecorder)) return `<p class="note">${esc(T_.recNo)}</p>`;
  return `<div class="rec"><div class="row"><b>${esc(T_.recT)}</b><span class="sp"></span><span class="note mono rec-o" role="status"></span></div>
    <p class="note">${esc(T_.recHint)}</p><div class="row"><button class="btn rec-b" type="button">${esc(T_.recStart)}</button></div><audio class="rec-a" controls hidden></audio></div>`;
}
function wireRecorders(){
  view.querySelectorAll('.rec').forEach(box => {
    const b = box.querySelector('.rec-b'), out = box.querySelector('.rec-o'), au = box.querySelector('.rec-a'), T_ = t();
    b.onclick = async () => {
      if (REC && REC.box === box){ recStop(); return; }
      recStop(); TTS.stop();
      let stream; try { stream = await navigator.mediaDevices.getUserMedia({audio:true}); } catch(e){ out.textContent = T_.recDenied; return; }
      const chunks = [], mr = new MediaRecorder(stream), t0 = Date.now();
      const tick = setInterval(() => out.textContent = '● ' + fmt(Date.now() - t0), 500);
      REC = {mr, stream, box};
      mr.ondataavailable = e => e.data.size && chunks.push(e.data);
      mr.onstop = () => { clearInterval(tick); stream.getTracks().forEach(tr => tr.stop()); if (REC && REC.box === box) REC = null;
        if (au.src) URL.revokeObjectURL(au.src);
        au.src = URL.createObjectURL(new Blob(chunks, {type: mr.mimeType || 'audio/webm'})); au.hidden = false;
        b.textContent = T_.recAgain; b.classList.remove('primary'); out.textContent = fmt(Date.now() - t0); };
      mr.start(); b.textContent = T_.recStop; b.classList.add('primary'); out.textContent = T_.recOn;
    };
  });
}
Object.assign(I18N.es,{verT:'Versión',verLine:v=>`Apto ${v} · octubre de 2026`,newT:'Qué hay en esta versión',newList:['CCSE: las 300 preguntas del manual de 2026 con traducción, explicaciones, repaso por días y simulacros de 45 minutos.','DELE A2: cuatro versiones de lectura y audición, examen de prueba completo con escritura y oral, 12 temas de gramática y 9 de vocabulario.','Todo en español, inglés, ruso y ucraniano; funciona sin conexión y tu progreso se queda en tu dispositivo.']});
Object.assign(I18N.en,{verT:'Version',verLine:v=>`Apto ${v} · October 2026`,newT:'What’s in this version',newList:['CCSE: all 300 questions of the 2026 manual with translations, explanations, spaced review and 45-minute mock exams.','DELE A2: four reading and listening versions, a full mock exam with writing and speaking, 12 grammar topics and 9 vocabulary topics.','Everything in Spanish, English, Russian and Ukrainian; works offline and your progress stays on your device.']});
Object.assign(I18N.ru,{verT:'Версия',verLine:v=>`Apto ${v} · октябрь 2026`,newT:'Что в этой версии',newList:['CCSE: все 300 вопросов мануала 2026 года с переводом, пояснениями, повторением по дням и пробными экзаменами на 45 минут.','DELE A2: четыре варианта чтения и аудирования, полный пробный экзамен с письмом и устной частью, 12 тем грамматики и 9 тем лексики.','Всё на испанском, английском, русском и украинском; работает без интернета, прогресс остаётся на вашем устройстве.']});
Object.assign(I18N.uk,{verT:'Версія',verLine:v=>`Apto ${v} · жовтень 2026`,newT:'Що в цій версії',newList:['CCSE: усі 300 питань мануалу 2026 року з перекладом, поясненнями, повторенням за днями та пробними іспитами на 45 хвилин.','DELE A2: чотири варіанти читання й аудіювання, повний пробний іспит із письмом і усною частиною, 12 тем граматики та 9 тем лексики.','Усе іспанською, англійською, російською та українською; працює без інтернету, прогрес залишається на вашому пристрої.']});
