// ---------- DELE A2 vocabulary cards with spaced repetition ----------
// Each word: [es, en, ru, uk]. Nouns carry their article so gender is learned with the word.
const VOC = [
 {id:'gente', name:{es:'Familia y personas',en:'Family and people',ru:'Семья и люди',uk:'Сім’я та люди'}, w:[
  ['el abuelo / la abuela','grandfather / grandmother','дедушка / бабушка','дідусь / бабуся'],['el nieto / la nieta','grandson / granddaughter','внук / внучка','онук / онука'],
  ['el tío / la tía','uncle / aunt','дядя / тётя','дядько / тітка'],['el primo / la prima','cousin','двоюродный брат / сестра','двоюрідний брат / сестра'],
  ['el marido / la mujer','husband / wife','муж / жена','чоловік / дружина'],['la pareja','partner, couple','партнёр, пара','партнер, пара'],
  ['los suegros','parents-in-law','свёкор и свекровь / тесть и тёща','свекор і свекруха / тесть і теща'],['el vecino / la vecina','neighbour','сосед / соседка','сусід / сусідка'],
  ['soltero / casado','single / married','холост / женат (замужем)','неодружений / одружений'],['divorciado','divorced','разведён','розлучений'],
  ['alto / bajo','tall / short','высокий / низкий','високий / низький'],['delgado','slim','худой, стройный','худий, стрункий'],
  ['simpático','friendly, nice','приятный, симпатичный','приємний, симпатичний'],['tímido','shy','застенчивый','сором’язливий'],
  ['llevarse bien con','to get on well with','ладить с','ладнати з']]},
 {id:'casa', name:{es:'Casa y barrio',en:'Home and neighbourhood',ru:'Дом и район',uk:'Дім і район'}, w:[
  ['el piso','flat, apartment','квартира','квартира'],['el alquiler','rent','аренда, квартплата','оренда, квартплата'],
  ['alquilar','to rent','снимать, сдавать','винаймати, здавати'],['el salón','living room','гостиная','вітальня'],
  ['el dormitorio','bedroom','спальня','спальня'],['la cocina','kitchen','кухня','кухня'],
  ['el cuarto de baño','bathroom','ванная','ванна кімната'],['la terraza','terrace','терраса','тераса'],
  ['el ascensor','lift, elevator','лифт','ліфт'],['la calefacción','heating','отопление','опалення'],
  ['la nevera','fridge','холодильник','холодильник'],['la lavadora','washing machine','стиральная машина','пральна машина'],
  ['el armario','wardrobe, cupboard','шкаф','шафа'],['la mudanza','move (house)','переезд','переїзд'],
  ['ruidoso / tranquilo','noisy / quiet','шумный / тихий','галасливий / тихий']]},
 {id:'comida', name:{es:'Comida y restaurantes',en:'Food and eating out',ru:'Еда и рестораны',uk:'Їжа та ресторани'}, w:[
  ['el desayuno','breakfast','завтрак','сніданок'],['la comida','lunch; food','обед; еда','обід; їжа'],
  ['la cena','dinner','ужин','вечеря'],['la carne','meat','мясо','м’ясо'],
  ['el pescado','fish (food)','рыба (еда)','риба (їжа)'],['las verduras','vegetables','овощи','овочі'],
  ['la fruta','fruit','фрукты','фрукти'],['el pan','bread','хлеб','хліб'],
  ['la cuenta','the bill','счёт','рахунок'],['el menú del día','set lunch menu','комплексный обед','комплексний обід'],
  ['el primer plato / el segundo','starter / main course','первое / второе','перша страва / друга'],['el postre','dessert','десерт','десерт'],
  ['la propina','tip','чаевые','чайові'],['reservar una mesa','to book a table','забронировать столик','забронювати столик'],
  ['estar rico','to taste good','быть вкусным','бути смачним']]},
 {id:'salud', name:{es:'Salud y cuerpo',en:'Health and body',ru:'Здоровье и тело',uk:'Здоров’я і тіло'}, w:[
  ['la cabeza','head','голова','голова'],['el estómago','stomach','желудок, живот','шлунок, живіт'],
  ['la espalda','back','спина','спина'],['la garganta','throat','горло','горло'],
  ['me duele…','… hurts','у меня болит…','у мене болить…'],['la fiebre','fever, temperature','температура, жар','температура, жар'],
  ['la tos','cough','кашель','кашель'],['estar resfriado','to have a cold','быть простуженным','бути застудженим'],
  ['la receta','prescription; recipe','рецепт','рецепт'],['la farmacia','pharmacy','аптека','аптека'],
  ['la pastilla','pill','таблетка','пігулка'],['el centro de salud','health centre','поликлиника','поліклініка'],
  ['pedir cita','to make an appointment','записаться на приём','записатися на прийом'],['la tarjeta sanitaria','health card','медицинская карта','медична картка'],
  ['las urgencias','A&E, emergency room','скорая помощь, приёмный покой','невідкладна допомога']]},
 {id:'trabajo', name:{es:'Trabajo y estudios',en:'Work and study',ru:'Работа и учёба',uk:'Робота й навчання'}, w:[
  ['el puesto de trabajo','job, position','должность, рабочее место','посада, робоче місце'],['la empresa','company','компания','компанія'],
  ['el jefe / la jefa','boss','начальник / начальница','начальник / начальниця'],['el compañero','colleague; classmate','коллега; одногруппник','колега; одногрупник'],
  ['el sueldo','salary','зарплата','зарплата'],['el contrato','contract','договор, контракт','договір, контракт'],
  ['el horario','timetable, working hours','расписание, график','розклад, графік'],['estar en paro','to be unemployed','быть безработным','бути безробітним'],
  ['buscar trabajo','to look for work','искать работу','шукати роботу'],['la entrevista','interview','собеседование','співбесіда'],
  ['el currículum','CV, résumé','резюме','резюме'],['jubilarse','to retire','выйти на пенсию','вийти на пенсію'],
  ['la carrera','university degree','высшее образование, специальность','вища освіта, фах'],['aprobar / suspender','to pass / to fail (an exam)','сдать / провалить (экзамен)','скласти / провалити (іспит)'],
  ['la beca','grant, scholarship','стипендия, грант','стипендія, грант']]},
 {id:'ciudad', name:{es:'Ciudad y transporte',en:'Town and transport',ru:'Город и транспорт',uk:'Місто і транспорт'}, w:[
  ['la parada','(bus) stop','остановка','зупинка'],['la estación','station','вокзал, станция','вокзал, станція'],
  ['el billete','ticket','билет','квиток'],['ida y vuelta','return (ticket)','туда и обратно','туди й назад'],
  ['coger el autobús','to take the bus','сесть на автобус','сісти на автобус'],['bajarse','to get off','выходить (из транспорта)','виходити (з транспорту)'],
  ['el andén','platform','перрон','перон'],['el retraso','delay','опоздание, задержка','запізнення, затримка'],
  ['el atasco','traffic jam','пробка','затор'],['el semáforo','traffic light','светофор','світлофор'],
  ['la esquina','corner','угол','ріг'],['todo recto','straight on','прямо','прямо'],
  ['girar a la derecha','to turn right','повернуть направо','повернути праворуч'],['cerca de / lejos de','near / far from','рядом с / далеко от','поруч із / далеко від'],
  ['el ayuntamiento','town hall','мэрия','мерія']]},
 {id:'compras', name:{es:'Compras y dinero',en:'Shopping and money',ru:'Покупки и деньги',uk:'Покупки та гроші'}, w:[
  ['¿Cuánto cuesta?','How much is it?','Сколько стоит?','Скільки коштує?'],['barato / caro','cheap / expensive','дешёвый / дорогой','дешевий / дорогий'],
  ['las rebajas','the sales','распродажа','розпродаж'],['el descuento','discount','скидка','знижка'],
  ['la talla','(clothes) size','размер (одежды)','розмір (одягу)'],['probarse','to try on','примерить','приміряти'],
  ['el probador','fitting room','примерочная','приміряльня'],['quedar bien / mal','to fit/suit well / badly','хорошо / плохо сидеть','добре / погано сидіти'],
  ['en efectivo','in cash','наличными','готівкою'],['con tarjeta','by card','картой','карткою'],
  ['el tique','receipt','чек','чек'],['devolver','to return; to give back','вернуть','повернути'],
  ['cambiar','to exchange','обменять','обміняти'],['la caja','till, checkout','касса','каса'],
  ['ahorrar','to save (money)','копить, экономить','заощаджувати']]},
 {id:'ocio', name:{es:'Tiempo libre y viajes',en:'Free time and travel',ru:'Досуг и путешествия',uk:'Дозвілля й подорожі'}, w:[
  ['quedar con amigos','to meet up with friends','встречаться с друзьями','зустрічатися з друзями'],['salir de copas','to go out for drinks','сходить выпить','піти випити'],
  ['dar un paseo','to go for a walk','прогуляться','прогулятися'],['hacer deporte','to do sport','заниматься спортом','займатися спортом'],
  ['el ocio','leisure','досуг','дозвілля'],['la entrada','(event) ticket; entrance','билет (на мероприятие); вход','квиток (на захід); вхід'],
  ['la sesión','showing (film)','сеанс','сеанс'],['el alojamiento','accommodation','жильё (в поездке)','житло (у подорожі)'],
  ['hacer la maleta','to pack','собирать чемодан','збирати валізу'],['la reserva','booking','бронь','бронювання'],
  ['de vacaciones','on holiday','в отпуске','у відпустці'],['el puente','long weekend; bridge','длинные выходные; мост','довгі вихідні; міст'],
  ['la playa / la montaña','beach / mountains','пляж / горы','пляж / гори'],['la excursión','day trip, outing','поездка, экскурсия','поїздка, екскурсія'],
  ['merecer la pena','to be worth it','стоить того','бути вартим']]}
,
 {id:'tramites', name:{es:'Trámites y papeles',en:'Paperwork and admin',ru:'Документы и госуслуги',uk:'Документи й держпослуги'}, w:[
  ['el empadronamiento','registration at the town hall (padrón)','прописка (регистрация в мэрии)','реєстрація за місцем проживання'],['el certificado de empadronamiento','proof of address from the town hall','справка о прописке','довідка про реєстрацію'],
  ['la cita previa','appointment (booked in advance)','предварительная запись','попередній запис'],['pedir cita','to book an appointment','записаться на приём','записатися на прийом'],
  ['el NIE','foreigner identity number','идентификационный номер иностранца (NIE)','ідентифікаційний номер іноземця (NIE)'],['la tarjeta de residencia (TIE)','residence card','вид на жительство (TIE)','посвідка на проживання (TIE)'],
  ['renovar','to renew','продлить','продовжити'],['caducar','to expire','истечь (о сроке)','закінчитися (про строк)'],
  ['la solicitud','application form; application','заявление','заява'],['rellenar un formulario','to fill in a form','заполнить анкету','заповнити анкету'],
  ['el justificante','proof, receipt','подтверждение, квитанция','підтвердження, квитанція'],['la tasa','fee (official)','госпошлина','державне мито'],
  ['la Seguridad Social','Social Security','социальное страхование','соціальне страхування'],['la ventanilla','service window, counter','окошко (в учреждении)','віконце (в установі)'],
  ['el plazo','deadline; period','срок','строк']]}
];
VOC.forEach(tp => tp.w.forEach((w, k) => w.key = `v:${tp.id}:${k}`));
const VLX = {en:1, ru:2, uk:3};
const vocById = key => { const [, tp, k] = key.split(':'); const T = VOC.find(x => x.id === tp); return T && T.w[+k] ? {T, w:T.w[+k]} : null; };

Object.assign(I18N.es,{kVoc:'Vocabulario',vocSub:n=>`${VOC.length} temas · ${n} palabras`,vocTitle:'Vocabulario A2',vocLede:'Tarjetas por temas del DELE A2. Mira la palabra, piensa qué significa y dale la vuelta. Las que sabes vuelven al cabo de unos días; las que no, mañana.',
 vocCardOf:(i,n)=>`Tarjeta ${i} de ${n}`,vocLearnedOf:(k,n)=>`${k} de ${n} palabras aprendidas`,vocRepeat:'Otra vez',vocDue:n=>n?`${n} para repasar hoy`:'Nada pendiente hoy',vocAll:'Repasar las de hoy',vocNew:n=>`${n} nuevas`,vocShow:'Ver la traducción',vocKnow:'La sabía',vocAgain:'Todavía no',vocDoneT:'Hecho por ahora',vocDone:(k,n)=>`Has repasado ${n} tarjetas y sabías ${k}. Las demás vuelven mañana.`,vocLearned:(k,n)=>`${k}/${n} aprendidas`,vocMeaning:'Significado'});
Object.assign(I18N.en,{kVoc:'Vocabulary',vocSub:n=>`${VOC.length} topics · ${n} words`,vocTitle:'A2 vocabulary',vocLede:'Flashcards by DELE A2 topic. Look at the word, think what it means, then flip it. Words you know come back in a few days; the rest tomorrow.',
 vocCardOf:(i,n)=>`Card ${i} of ${n}`,vocLearnedOf:(k,n)=>`${k} of ${n} words learned`,vocRepeat:'One more time',vocDue:n=>n?`${n} to review today`:'Nothing due today',vocAll:'Review today’s cards',vocNew:n=>`${n} new`,vocShow:'Show translation',vocKnow:'I knew it',vocAgain:'Not yet',vocDoneT:'Done for now',vocDone:(k,n)=>`You reviewed ${n} cards and knew ${k}. The rest come back tomorrow.`,vocLearned:(k,n)=>`${k}/${n} learned`,vocMeaning:'Meaning'});
Object.assign(I18N.ru,{kVoc:'Лексика',vocSub:n=>`${VOC.length} тем · ${n} слов`,vocTitle:'Лексика A2',vocLede:'Карточки по темам DELE A2. Посмотрите на слово, вспомните значение и переверните карточку. Знакомые слова вернутся через несколько дней, остальные — завтра.',
 vocCardOf:(i,n)=>`Карточка ${i} из ${n}`,vocLearnedOf:(k,n)=>`выучено ${k} из ${n} слов`,vocRepeat:'Ещё раз',vocDue:n=>n?`На сегодня: ${n}`:'На сегодня ничего',vocAll:'Повторить на сегодня',vocNew:n=>`новых: ${n}`,vocShow:'Показать перевод',vocKnow:'Знаю',vocAgain:'Пока нет',vocDoneT:'На этом всё',vocDone:(k,n)=>`Вы повторили карточек: ${n}, знали ${k}. Остальные вернутся завтра.`,vocLearned:(k,n)=>`выучено ${k}/${n}`,vocMeaning:'Значение'});
Object.assign(I18N.uk,{kVoc:'Лексика',vocSub:n=>`${VOC.length} тем · ${n} слів`,vocTitle:'Лексика A2',vocLede:'Картки за темами DELE A2. Подивіться на слово, згадайте значення й переверніть картку. Знайомі слова повернуться за кілька днів, решта — завтра.',
 vocCardOf:(i,n)=>`Картка ${i} з ${n}`,vocLearnedOf:(k,n)=>`вивчено ${k} з ${n} слів`,vocRepeat:'Ще раз',vocDue:n=>n?`На сьогодні: ${n}`:'На сьогодні нічого',vocAll:'Повторити на сьогодні',vocNew:n=>`нових: ${n}`,vocShow:'Показати переклад',vocKnow:'Знаю',vocAgain:'Ще ні',vocDoneT:'На цьому все',vocDone:(k,n)=>`Ви повторили карток: ${n}, знали ${k}. Решта повернеться завтра.`,vocLearned:(k,n)=>`вивчено ${k}/${n}`,vocMeaning:'Значення'});

// state: S.voc[key] = {box, due, n}
function vst(key){ S.voc = S.voc || {}; return S.voc[key]; }
const vocDueKeys = (tp) => VOC.filter(T => !tp || T.id === tp).flatMap(T => T.w.map(w => w.key)).filter(k => { const s = vst(k); return s && s.due <= endOfToday(); });
const vocLearned = T => T.w.filter(w => { const s = vst(w.key); return s && s.box >= 3; }).length;
const VOC_TOTAL = VOC.reduce((a, T) => a + T.w.length, 0);
// One step up per word per day: seeing a word again the same day never counts twice towards "learned".
function vrec(key, know){ S.voc = S.voc || {}; const s = S.voc[key] || (S.voc[key] = {box:0, due:0, n:0}); s.n++; bumpDay('d');
  const d = today(); if (!(know && s.last === d && s.box > 0)) srsUpdate(s, know); s.last = d; save(); }

function vocab(){
  const T_ = t(), due = vocDueKeys().length;
  view.innerHTML = `<div class="stack">${backRow(deleStudy, T_.deleStudy)}<span class="eyebrow">DELE A2 · ${esc(T_.kVoc)}</span><h1>${esc(T_.vocTitle)}</h1><p class="lede">${esc(T_.vocLede)}</p>
    <div class="actions"><button class="btn${due?' primary':''}" id="v-due" type="button" ${due?'':'disabled'}>${esc(T_.vocAll)}<small>${esc(T_.vocDue(due))}</small></button></div>
    <div class="tareas" style="gap:10px">${VOC.map(T=>{const nNew=T.w.filter(w=>!vst(w.key)).length, d=vocDueKeys(T.id).length;
      return `<button class="btn" data-v="${T.id}" type="button">${esc(loc(T.name))}<small>${esc(T_.vocLearned(vocLearned(T), T.w.length))}${d?' · '+esc(T_.vocDue(d)):''}${nNew?' · '+esc(T_.vocNew(nNew)):''}</small></button>`}).join('')}</div></div>`;
  wireBack(deleStudy);
  $('#v-due').onclick = () => go(() => vocRun(vocDueKeys(), vocab));
  view.querySelectorAll('[data-v]').forEach(b => b.onclick = () => { const T = VOC.find(x => x.id === b.dataset.v);
    const keys = [...vocDueKeys(T.id), ...T.w.filter(w => !vst(w.key)).slice(0, 10).map(w => w.key)];
    go(() => vocRun(keys.length ? keys : shuffle(T.w.map(w => w.key)).slice(0, 10), vocab)); });
}
function vocRun(keys, back){
  const T_ = t(), lang = S.set.lang, queue = shuffle(keys), seen = new Set(); let i = 0, known = 0;
  current = () => vocRun(keys, back);
  view.innerHTML = `<div class="stack">${backRow(back, T_.kVoc)}<div class="vhead"><span class="eyebrow" id="v-count"></span><span class="note" id="v-prog"></span></div><section class="panel qcard vcard" id="v-card"></section></div>`;
  wireBack(back);
  function step(){
    if (i >= queue.length){
      $('#v-count').textContent = ''; $('#v-prog').textContent = '';
      $('#v-card').innerHTML = `<h2>${esc(T_.vocDoneT)}</h2><p class="lede">${esc(T_.vocDone(known, seen.size))}</p><div class="row"><button class="btn primary" id="v-back" type="button">${esc(T_.kVoc)}</button></div>`;
      $('#v-back').onclick = () => go(back); return;
    }
    const key = queue[i], d = vocById(key), w = d.w;
    const total = new Set(keys).size, rep = seen.has(key);
    $('#v-count').textContent = loc(d.T.name);
    $('#v-prog').textContent = `${rep ? T_.vocRepeat : T_.vocCardOf(Math.min(seen.size + 1, total), total)} · ${T_.vocLearnedOf(vocLearned(d.T), d.T.w.length)}`;
    const tr = lang === 'es' ? w[1] : w[VLX[lang]];
    $('#v-card').innerHTML = `<div class="qhead"><span class="sp"></span>${TTS.ok?`<button type="button" class="iconbtn sm" id="v-say" aria-label="${esc(T_.listenQ)}">${SPK}</button>`:''}</div>
      <p class="vword" lang="es">${esc(w[0])}</p><div class="vback" id="v-back" hidden><span class="eyebrow">${esc(T_.vocMeaning)}</span><p class="vtr">${esc(tr)}</p></div>
      <div class="row" id="v-acts"><button class="btn primary" id="v-show" type="button">${esc(T_.vocShow)}</button></div>`;
    const say = $('#v-say'); if (say) say.onclick = () => { TTS.newCast(); TTS.speak([{s:'f', t:w[0].replace(/ \/ /g, ', ')}], 0.9); };
    $('#v-show').onclick = () => {
      $('#v-back').hidden = false;
      $('#v-acts').innerHTML = `<button class="btn" id="v-again" type="button">${esc(T_.vocAgain)}</button><button class="btn primary" id="v-know" type="button">${esc(T_.vocKnow)}</button>`;
      const next = k => { if (!seen.has(key)){ seen.add(key); if (k) known++; } vrec(key, k); if (!k && queue.slice(i+1).filter(x => x === key).length < 1) queue.push(key); i++; step(); };
      $('#v-know').onclick = () => next(true); $('#v-again').onclick = () => next(false); $('#v-know').focus();
    };
    $('#v-show').focus();
  }
  step();
}
