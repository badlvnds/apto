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
const SITE_URL = 'https://badlvnds.github.io/apto/';
function shareApto(){
  const T_ = t(), data = {title:'Apto', text:T_.shareText, url:SITE_URL};
  if (navigator.share) return navigator.share(data).catch(() => {});
  try { navigator.clipboard.writeText(SITE_URL).then(() => toast(T_.shareCopied), () => toast(SITE_URL)); } catch(e){ toast(SITE_URL); }
}
