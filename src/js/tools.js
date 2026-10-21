// ---------- writing hints, report by email, share ----------
Object.assign(I18N.es,{hintsT:'Antes de entregar',hintsNote:'Son pistas, no una nota: detectan despistes típicos, no todos los errores.',hNone:'No vemos nada evidente. Compara con el ejemplo.',
 hAccent:l=>`¿Falta una tilde o una ñ? ${l}`,hQ:'Las preguntas y exclamaciones en español se abren con ¿ y ¡.',hCap:'Después de un punto, empieza con mayúscula.',hConn:'Une las ideas con conectores: y, pero, porque, así que, después, además.',hRep:(w,n)=>`Repites «${w}» ${n} veces. Prueba un sinónimo o un pronombre.`,hGreet:'Empieza con un saludo: «Hola, …», «Querida …».',hBye:'Termina con una despedida: «Un beso», «Un abrazo», «Un saludo».',
 repMail:'Enviar por correo',share:'Compartir Apto',shareText:'Apto: práctica gratuita para el CCSE y el DELE A2, en español, inglés, ruso y ucraniano.',shareCopied:'Enlace copiado.'});
Object.assign(I18N.en,{hintsT:'Before you hand it in',hintsNote:'Hints, not a grade: they catch typical slips, not every mistake.',hNone:'Nothing obvious stands out. Compare with the sample.',
 hAccent:l=>`Missing an accent or ñ? ${l}`,hQ:'Spanish questions and exclamations open with ¿ and ¡.',hCap:'Start with a capital letter after a full stop.',hConn:'Link your ideas with connectors: y, pero, porque, así que, después, además.',hRep:(w,n)=>`You use «${w}» ${n} times. Try a synonym or a pronoun.`,hGreet:'Start with a greeting: «Hola, …», «Querida …».',hBye:'End with a sign-off: «Un beso», «Un abrazo», «Un saludo».',
 repMail:'Send by email',share:'Share Apto',shareText:'Apto: free practice for the CCSE and DELE A2, in Spanish, English, Russian and Ukrainian.',shareCopied:'Link copied.'});
Object.assign(I18N.ru,{hintsT:'Перед сдачей',hintsNote:'Это подсказки, а не оценка: они ловят типичные описки, но не все ошибки.',hNone:'Явных проблем не видно. Сравните с примером.',
 hAccent:l=>`Не пропущено ударение или ñ? ${l}`,hQ:'В испанском вопрос и восклицание открываются знаками ¿ и ¡.',hCap:'После точки начинайте с заглавной буквы.',hConn:'Свяжите мысли связками: y, pero, porque, así que, después, además.',hRep:(w,n)=>`«${w}» повторяется ${n} раза. Попробуйте синоним или местоимение.`,hGreet:'Начните с приветствия: «Hola, …», «Querida …».',hBye:'Закончите прощанием: «Un beso», «Un abrazo», «Un saludo».',
 repMail:'Отправить письмом',share:'Поделиться Apto',shareText:'Apto — бесплатная подготовка к CCSE и DELE A2 на испанском, английском, русском и украинском.',shareCopied:'Ссылка скопирована.'});
Object.assign(I18N.uk,{hintsT:'Перед здачею',hintsNote:'Це підказки, а не оцінка: вони ловлять типові описки, але не всі помилки.',hNone:'Явних проблем не видно. Порівняйте з прикладом.',
 hAccent:l=>`Чи не пропущено наголос або ñ? ${l}`,hQ:'В іспанській питання й оклик відкриваються знаками ¿ і ¡.',hCap:'Після крапки починайте з великої літери.',hConn:'Поєднайте думки зв’язками: y, pero, porque, así que, después, además.',hRep:(w,n)=>`«${w}» повторюється ${n} рази. Спробуйте синонім або займенник.`,hGreet:'Почніть із привітання: «Hola, …», «Querida …».',hBye:'Закінчіть прощанням: «Un beso», «Un abrazo», «Un saludo».',
 repMail:'Надіслати листом',share:'Поділитися Apto',shareText:'Apto — безкоштовна підготовка до CCSE і DELE A2 іспанською, англійською, російською та українською.',shareCopied:'Посилання скопійовано.'});

// words that only exist with an accent or ñ (ambiguous ones like esta/está, si/sí are left out on purpose)
const ACCENTS = {tambien:'también',despues:'después',aqui:'aquí',alli:'allí',adios:'adiós',facil:'fácil',dificil:'difícil',ademas:'además',rapido:'rápido',
 musica:'música',telefono:'teléfono',pelicula:'película',peliculas:'películas',proximo:'próximo',proxima:'próxima',ultimo:'último',ultima:'última',sabado:'sábado',miercoles:'miércoles',
 ingles:'inglés',frances:'francés',cafe:'café',ano:'año',anos:'años',manana:'mañana',espanol:'español',espanola:'española',espana:'España',cumpleanos:'cumpleaños',
 senor:'señor',senora:'señora',nino:'niño',nina:'niña',ninos:'niños',pequeno:'pequeño',pequena:'pequeña',companero:'compañero',companera:'compañera',dia:'día',dias:'días',
 tio:'tío',tia:'tía',jardin:'jardín',medico:'médico',medica:'médica',numero:'número',examenes:'exámenes',tambíen:'también',habitacion:'habitación',estacion:'estación',
 informacion:'información',invitacion:'invitación',cancion:'canción',leccion:'lección',direccion:'dirección',profesion:'profesión',relacion:'relación',situacion:'situación',solucion:'solución',opcion:'opción',razon:'razón',corazon:'corazón',reunion:'reunión',television:'televisión',nacion:'nación',vacacion:'vacación',autobus:'autobús',sofa:'sofá',mama:'mamá',arbol:'árbol',lapiz:'lápiz',facilmente:'fácilmente',rapidamente:'rápidamente'};
const STOP = new Set('que de la el en y a los las un una es por con para mi me se no lo le muy del al te su pero mis tus sus como mas más este esta esto ese eso hay hola son era fue han has he ha tengo tiene tienes estoy está esta pues todo todos nos les ya sí si yo tú él ella nosotros'.split(' '));
const CONNECTORS = ['y','pero','porque','así que','después','además','luego','cuando','también','primero','al final','entonces','por eso','sin embargo'];
function writeHints(text, w){
  const T_ = t(), out = [], words = (text.toLowerCase().match(/[a-záéíóúüñ]+/g) || []);
  if (words.length < 8) return [];
  const miss = [...new Set(words.filter(x => ACCENTS[x]))].slice(0, 5);
  if (miss.length) out.push(T_.hAccent(miss.map(x => `${x} → ${ACCENTS[x]}`).join(', ')));
  if ((text.match(/\?/g)||[]).length > (text.match(/¿/g)||[]).length || (text.match(/!/g)||[]).length > (text.match(/¡/g)||[]).length) out.push(T_.hQ);
  if (/[.!?]\s+[a-záéíóúñ]/.test(text)) out.push(T_.hCap);
  const low = ' ' + text.toLowerCase().replace(/[^a-záéíóúüñ ]+/g, ' ') + ' ';
  if (words.length >= 30 && CONNECTORS.filter(c => low.includes(' ' + c + ' ')).length < 3) out.push(T_.hConn);
  const cnt = {}; words.filter(x => x.length >= 4 && !STOP.has(x)).forEach(x => cnt[x] = (cnt[x]||0) + 1);
  const rep = Object.entries(cnt).sort((a,b) => b[1]-a[1])[0]; if (rep && rep[1] >= 3) out.push(T_.hRep(rep[0], rep[1]));
  if (w.task === 1 && words.length >= 20){
    if (!/^\s*(hola|querid[oa]s?|buen[oa]s|estimad[oa]s?)/i.test(text)) out.push(T_.hGreet);
    if (!/(un beso|besos|un abrazo|abrazos|un saludo|saludos|hasta (pronto|luego|mañana|el)|nos vemos|cuídate|un fuerte abrazo)/i.test(text)) out.push(T_.hBye);
  }
  return out.length ? out : [T_.hNone];
}
function hintsHTML(){ const T_ = t(); return `<section class="panel" aria-live="polite"><h2>${esc(T_.hintsT)}</h2><ul class="focus" id="w-hints"></ul><p class="note">${esc(T_.hintsNote)}</p></section>`; }
function drawHints(text, w){ const el = $('#w-hints'); if (!el) return; const h = writeHints(text, w); el.parentElement.hidden = !h.length; el.innerHTML = h.map(x => `<li>${esc(x)}</li>`).join(''); }

// ---------- share ----------
const SITE_URL = '__SITE__';
function shareApto(){
  // URL only: with extra text, iOS and messengers send a plain message instead of a link preview card.
  const T_ = t(), data = {url:SITE_URL};
  if (navigator.share) return navigator.share(data).catch(() => {});
  try { navigator.clipboard.writeText(SITE_URL).then(() => toast(T_.shareCopied), () => toast(SITE_URL)); } catch(e){ toast(SITE_URL); }
}

// ---------- keyboard: 1–4 / a–d pick an answer, ←/→ move in the mock exam ----------
Object.assign(I18N.es,{kbdHint:'Teclado: 1–3 o A–C para responder, Enter para seguir.',instT:'Apto como aplicación',instAndroid:'Instálala en la pantalla de inicio: se abre a pantalla completa y funciona sin conexión.',instIOS:'En Safari, pulsa «Compartir» y luego «Añadir a pantalla de inicio». Se abre a pantalla completa y funciona sin conexión.',instBtn:'Instalar',instLater:'Ahora no'});
Object.assign(I18N.en,{kbdHint:'Keyboard: 1–3 or A–C to answer, Enter to continue.',instT:'Apto as an app',instAndroid:'Install it on your home screen: it opens full screen and works offline.',instIOS:'In Safari, tap “Share”, then “Add to Home Screen”. It opens full screen and works offline.',instBtn:'Install',instLater:'Not now'});
Object.assign(I18N.ru,{kbdHint:'Клавиатура: 1–3 или A–C — ответ, Enter — дальше.',instT:'Apto как приложение',instAndroid:'Установите на главный экран: откроется на весь экран и работает без интернета.',instIOS:'В Safari нажмите «Поделиться», затем «На экран „Домой“». Откроется на весь экран и работает без интернета.',instBtn:'Установить',instLater:'Не сейчас'});
Object.assign(I18N.uk,{kbdHint:'Клавіатура: 1–3 або A–C — відповідь, Enter — далі.',instT:'Apto як застосунок',instAndroid:'Установіть на головний екран: відкриється на весь екран і працює без інтернету.',instIOS:'У Safari натисніть «Поділитися», потім «На початковий екран». Відкриється на весь екран і працює без інтернету.',instBtn:'Установити',instLater:'Не зараз'});
const hasKeyboard = () => { try { return matchMedia('(hover:hover) and (pointer:fine)').matches; } catch(e){ return false; } };
function kbdHintHTML(){ return hasKeyboard() ? `<p class="note kbd">${esc(t().kbdHint)}</p>` : ''; }
document.addEventListener('keydown', e => {
  if (e.altKey || e.ctrlKey || e.metaKey) return;
  const el = document.activeElement, tag = el && el.tagName;
  if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT' || (el && el.isContentEditable)) return;
  if (e.key === 'ArrowLeft' || e.key === 'ArrowRight'){ const b = document.getElementById(e.key === 'ArrowLeft' ? 'prev' : 'nxt'); if (b && !b.disabled){ e.preventDefault(); b.click(); } return; }
  const k = e.key.toLowerCase(), idx = '1234'.indexOf(k) >= 0 ? '1234'.indexOf(k) : 'abcd'.indexOf(k);
  if (idx < 0 || k.length !== 1) return;
  // the answer group: the one holding focus, else the first one still open on the page
  const groups = [...view.querySelectorAll('.opts')].filter(g => g.offsetParent !== null);
  const g = (el && el.closest && el.closest('.opts')) || groups.find(x => x.querySelector('.opt:not(:disabled)') && !x.querySelector('.opt.sel, .opt.right, .opt.wrong')) || groups.find(x => x.querySelector('.opt:not(:disabled)'));
  if (!g) return;
  const b = g.querySelectorAll('.opt')[idx]; if (b && !b.disabled){ e.preventDefault(); b.click(); }
});

// ---------- install hint (only after some real use, never in the installed app) ----------
let INSTALL_EVT = null;
addEventListener('beforeinstallprompt', e => { e.preventDefault(); INSTALL_EVT = e; const h = document.getElementById('inst'); if (!h && current === home) go(home); });
const isStandalone = () => { try { return matchMedia('(display-mode: standalone)').matches || navigator.standalone === true; } catch(e){ return false; } };
const isIOS = () => /iPhone|iPad|iPod/.test(navigator.userAgent) || (/Macintosh/.test(navigator.userAgent) && navigator.maxTouchPoints > 1);
function installHTML(){
  if (isStandalone() || S.set.installDismissed) return '';
  const used = S.exams.length || S.dmocks.length || Object.keys(S.q).length >= 10 || Object.keys(S.dq).length >= 10;
  if (!used || !(INSTALL_EVT || isIOS())) return '';
  const T_ = t();
  return `<div class="plan-line" id="inst"><span class="eyebrow">${esc(T_.instT)}</span><p>${esc(INSTALL_EVT ? T_.instAndroid : T_.instIOS)}</p>
    <div class="row">${INSTALL_EVT?`<button class="btn primary" id="inst-go" type="button">${esc(T_.instBtn)}</button>`:''}<button class="btn" id="inst-no" type="button">${esc(T_.instLater)}</button></div></div>`;
}
function wireInstall(){
  const g = document.getElementById('inst-go'), n = document.getElementById('inst-no');
  if (g) g.onclick = async () => { try { INSTALL_EVT.prompt(); await INSTALL_EVT.userChoice; } catch(e){} INSTALL_EVT = null; go(home); };
  if (n) n.onclick = () => { S.set.installDismissed = true; save(); const b = document.getElementById('inst'); if (b) b.remove(); };
}
Object.assign(I18N.es,{loading:'Cargando…',loadFail:'No se ha podido cargar. Comprueba la conexión y recarga la página.'});
Object.assign(I18N.en,{loading:'Loading…',loadFail:'Couldn’t load. Check your connection and reload the page.'});
Object.assign(I18N.ru,{loading:'Загрузка…',loadFail:'Не удалось загрузить. Проверьте подключение и обновите страницу.'});
Object.assign(I18N.uk,{loading:'Завантаження…',loadFail:'Не вдалося завантажити. Перевірте з’єднання й оновіть сторінку.'});

// ---------- screen readers: every view has one h1, focus moves to it, results are announced ----------
let FB_WATCH = null;
// ---------- anonymous visit counter (GoatCounter, no cookies) ----------
// One count per section (e.g. /ccse-hub, /mock-read, /mock-result), not per question. Never answers or progress.
// count.js skips localhost, so tests and local runs are never counted.
let GC_LAST = '';
function routeOf(fn){ if (!fn) return 'home'; const src = String(fn); if (fn.name && !/^\s*(async\s*)?\(/.test(src)) return fn.name; const m = src.match(/^\s*\(\)\s*=>\s*([A-Za-z_$][\w$]*)/); return m ? m[1] : 'view'; }
function routePath(fn){ return '/' + routeOf(fn).replace(/[A-Z]/g, c => '-' + c.toLowerCase()); }
function countRoute(){ const p = routePath(current); if (p === GC_LAST) return; const gc = window.goatcounter; if (!gc || !gc.count) return; GC_LAST = p; try { gc.count({path: p, title: p}); } catch(e){} }
addEventListener('load', () => countRoute());

function afterNav(){
  if (!FB_WATCH){ FB_WATCH = new MutationObserver(() => view.querySelectorAll('.fb:not([aria-live])').forEach(f => f.setAttribute('aria-live', 'polite'))); FB_WATCH.observe(view, {childList:true, subtree:true}); }
  let h = view.querySelector('h1');
  if (!h){ const src = view.querySelector('.eyebrow, h2'); h = document.createElement('h1'); h.className = 'sr-only'; h.textContent = src ? src.textContent.trim() : 'Apto'; view.prepend(h); }
  document.title = (h.textContent.trim() ? h.textContent.trim() + ' · ' : '') + 'Apto';
  h.setAttribute('tabindex', '-1'); try { h.focus({preventScroll:true}); } catch(e){}
  countRoute();
}
