// ---------- DELE A2 writing (Prueba 3) and speaking (Prueba 4): original practice ----------
const WRITE = [
 {id:'W1a', task:1, words:[60,70],
  input:{from:'Carmen', text:'¡Hola! ¿Qué tal? El sábado 15 hago una comida en mi casa para celebrar mi cumpleaños. Vienen también Luis y Marta. ¿Puedes venir? Empieza a las dos. ¡Ah! ¿Hay algo que no comes? Un beso, Carmen'},
  instr:'Escribe un correo a Carmen. En él debes: saludar; aceptar la invitación y darle las gracias; decir qué comida no te gusta o no puedes comer; ofrecerte a llevar algo; despedirte.',
  instrTr:{en:'Write an email to Carmen: greet her; accept the invitation and thank her; say what food you don’t like or can’t eat; offer to bring something; say goodbye.',ru:'Напишите письмо Кармен: поздоровайтесь; примите приглашение и поблагодарите; скажите, какую еду не любите или не можете есть; предложите что-нибудь принести; попрощайтесь.',uk:'Напишіть листа Кармен: привітайтеся; прийміть запрошення й подякуйте; скажіть, яку їжу не любите або не можете їсти; запропонуйте щось принести; попрощайтеся.'},
  model:'¡Hola, Carmen!\nMuchas gracias por la invitación. ¡Claro que voy a ir el sábado! Me encanta celebrar tu cumpleaños con Luis y Marta. Como sabes, soy vegetariana, así que no como carne ni pescado, pero no te preocupes: me gusta casi todo lo demás. ¿Quieres que lleve el postre? Puedo hacer una tarta de chocolate. Nos vemos a las dos.\nUn beso,\nAna'},
 {id:'W1b', task:1, words:[60,70],
  input:{from:'Jorge (tu vecino)', text:'Hola. Soy Jorge, el vecino del segundo. Mañana por la mañana viene un técnico a arreglar la calefacción del edificio y yo no estoy. ¿Puedes abrirle la puerta del garaje? Llega a las diez. Gracias. Jorge'},
  instr:'Responde a Jorge. En tu nota debes: saludar; decir que no puedes ayudarle y explicar por qué; proponer otra solución; despedirte.',
  instrTr:{en:'Reply to Jorge: greet him; say you can’t help and explain why; suggest another solution; say goodbye.',ru:'Ответьте Хорхе: поздоровайтесь; скажите, что не можете помочь, и объясните почему; предложите другое решение; попрощайтесь.',uk:'Відповідайте Хорхе: привітайтеся; скажіть, що не можете допомогти, і поясніть чому; запропонуйте інше рішення; попрощайтеся.'},
  model:'Hola, Jorge:\nLo siento mucho, pero mañana no puedo abrirle la puerta al técnico. Trabajo de ocho a tres y no puedo salir de la oficina. ¿Por qué no hablas con Lola, la vecina del cuarto? Ella está jubilada y siempre está en casa por las mañanas. Si quieres, esta tarde le pregunto yo. Espero que se arregle pronto la calefacción.\nUn saludo,\nAndrés'},
 {id:'W2a', task:2, words:[70,80], opt:1,
  instr:'Opción 1. Escribe un texto sobre un viaje que recuerdas. Debes hablar de: adónde fuiste y cuándo; con quién; qué hiciste allí; qué fue lo que más te gustó y por qué.',
  instrTr:{en:'Option 1. Write about a trip you remember: where you went and when; who with; what you did; what you liked most and why.',ru:'Вариант 1. Напишите о поездке, которую вы помните: куда и когда ездили; с кем; что делали; что понравилось больше всего и почему.',uk:'Варіант 1. Напишіть про подорож, яку пам’ятаєте: куди й коли їздили; з ким; що робили; що сподобалося найбільше й чому.'},
  model:'El verano pasado fui a Granada con mi hermana. Estuvimos allí cuatro días en un hotel pequeño del barrio del Albaicín. Por las mañanas visitamos la Alhambra y los jardines del Generalife, y por las tardes paseamos por el centro y tomamos tapas. Lo que más me gustó fue ver la puesta de sol desde el mirador de San Nicolás, porque la vista de la Alhambra con las montañas detrás era increíble. Quiero volver pronto.'},
 {id:'W2b', task:2, words:[70,80], opt:1,
  instr:'Opción 1. Escribe un texto sobre tu rutina de los fines de semana. Debes hablar de: a qué hora te levantas; qué haces normalmente; con quién pasas el tiempo; qué hiciste el último fin de semana.',
  instrTr:{en:'Option 1. Write about your weekend routine: when you get up; what you usually do; who you spend time with; what you did last weekend.',ru:'Вариант 1. Напишите о своих выходных: во сколько встаёте; что обычно делаете; с кем проводите время; что делали в прошлые выходные.',uk:'Варіант 1. Напишіть про свої вихідні: о котрій встаєте; що зазвичай робите; з ким проводите час; що робили минулих вихідних.'},
  model:'Los fines de semana me levanto tarde, sobre las diez. Normalmente desayuno tranquilamente con mi marido y después vamos al mercado a comprar fruta y verdura. Por la tarde quedo con mis amigas para dar un paseo por la playa o ver una película. El último fin de semana fue diferente: fuimos de excursión a la montaña con unos compañeros de trabajo, comimos en un restaurante del pueblo y volvimos muy cansados, pero contentos.'},
 {id:'W2c', task:2, words:[70,80], opt:2,
  data:['Nombre: Elena Martín','Nace en Salamanca en 1975','1993: empieza a estudiar Medicina en Madrid','1999–2005: trabaja como médica en Guatemala','2006: vuelve a España y abre una clínica en su ciudad','2015: recibe un premio por su trabajo con niños','Hoy: vive en Salamanca y da clases en la universidad'],
  instr:'Opción 2. Escribe la biografía de Elena Martín con los datos de la ficha. Usa el pretérito indefinido y conectores (después, más tarde, en…).',
  instrTr:{en:'Option 2. Write Elena Martín’s biography from the data card. Use the preterite and connectors (después, más tarde, en…).',ru:'Вариант 2. Напишите биографию Елены Мартин по данным карточки. Используйте pretérito indefinido и связки (después, más tarde, en…).',uk:'Варіант 2. Напишіть біографію Олени Мартін за даними картки. Використовуйте pretérito indefinido та зв’язки (después, más tarde, en…).'},
  model:'Elena Martín nació en Salamanca en 1975. En 1993 se fue a Madrid para estudiar Medicina. Después de terminar la carrera, trabajó como médica en Guatemala durante seis años, de 1999 a 2005. Al año siguiente volvió a España y abrió una clínica en su ciudad. En 2015 recibió un premio por su trabajo con niños. Hoy vive en Salamanca, todavía trabaja como médica y además da clases en la universidad.'}
];
const WCHECK = {
 es:['He respondido a todos los puntos de la tarea.','He saludado y me he despedido de forma adecuada (tú / usted).','El número de palabras está dentro del límite.','He usado el tiempo verbal correcto (pasado, presente, futuro).','He unido las ideas con conectores: y, pero, porque, así que, después.','He revisado acentos, mayúsculas y la concordancia (el/la, -o/-a, singular/plural).'],
 en:['I answered every point of the task.','I greeted and said goodbye appropriately (tú / usted).','The word count is within the limit.','I used the right tense (past, present, future).','I linked ideas with connectors: y, pero, porque, así que, después.','I checked accents, capitals and agreement (el/la, -o/-a, singular/plural).'],
 ru:['Я ответил(а) на все пункты задания.','Есть уместное приветствие и прощание (tú / usted).','Количество слов в пределах нормы.','Время глагола выбрано верно (прошедшее, настоящее, будущее).','Мысли связаны связками: y, pero, porque, así que, después.','Проверены ударения, заглавные буквы и согласование (el/la, -o/-a, ед./мн. число).'],
 uk:['Я відповів(ла) на всі пункти завдання.','Є доречне привітання й прощання (tú / usted).','Кількість слів у межах норми.','Час дієслова обрано правильно (минулий, теперішній, майбутній).','Думки пов’язано зв’язками: y, pero, porque, así que, después.','Перевірено наголоси, великі літери й узгодження (el/la, -o/-a, однина/множина).']};
const WPHRASES = [['Muchas gracias por…','Спасибо за…','Thanks for…','Дякую за…'],['Lo siento, pero no puedo…','Извини, но я не могу…','Sorry, but I can’t…','Вибач, але я не можу…'],['¿Por qué no…?','Почему бы не…?','Why don’t…?','Чому б не…?'],['Si quieres, puedo…','Если хочешь, могу…','If you like, I can…','Якщо хочеш, можу…'],['Lo que más me gustó fue…','Больше всего мне понравилось…','What I liked most was…','Найбільше мені сподобалося…'],['Al año siguiente…','На следующий год…','The following year…','Наступного року…'],['Un beso / Un abrazo / Un saludo','Целую / Обнимаю / С приветом','Love / Hugs / Regards','Цілую / Обіймаю / З повагою']];

const SPEAK = {
 t1:[{id:'S1a', title:'Mi barrio', points:['¿Dónde está y cómo es?','¿Qué hay en tu barrio? (tiendas, parques, transporte…)','¿Qué es lo que más te gusta y lo que menos?','¿Cómo era el barrio donde vivías antes?'],
      model:'Vivo en Benimaclet, un barrio al norte de Valencia. Es un barrio tranquilo, con muchos estudiantes y calles pequeñas. Hay muchas tiendas, bares y un mercado los martes. También tiene buen transporte: el tranvía y el metro me llevan al centro en quince minutos. Lo que más me gusta es la vida en la calle: la gente sale, habla, toma algo en las terrazas. Lo que menos me gusta es que por la noche hay ruido. Antes vivía en un pueblo pequeño, donde había mucho silencio y todo el mundo se conocía.'},
     {id:'S1b', title:'Mi trabajo o mis estudios', points:['¿Qué haces y dónde?','¿Cómo es un día normal?','¿Qué te gusta y qué no te gusta?','¿Qué te gustaría hacer en el futuro?'],
      model:'Trabajo en una empresa de informática en el centro de la ciudad. Soy responsable de producto. Un día normal empiezo a las nueve, leo los correos y luego tengo varias reuniones con mi equipo. A las dos como con mis compañeros. Me gusta mucho mi trabajo porque es creativo y aprendo cosas nuevas cada día. Lo que no me gusta es que a veces tengo demasiadas reuniones. En el futuro me gustaría trabajar desde casa algunos días y tener más tiempo para viajar.'}],
 t2:[{id:'S2a', title:'Una familia en un parque', scene:['Es domingo por la mañana y hace sol.','Una familia (padre, madre y dos niños) está en un parque.','Los niños juegan con un perro; el padre prepara un pícnic sobre una manta.','La madre hace una foto con el móvil.','Al fondo hay árboles, un lago y gente en bicicleta.'],
      q:['¿Quiénes son? ¿Cómo son?','¿Dónde están?','¿Qué están haciendo?','¿Qué crees que van a hacer después?'],
      model:'En la foto veo a una familia en un parque. Son el padre, la madre y dos niños pequeños. Creo que es domingo porque hace sol y hay mucha gente. Los niños están jugando con un perro marrón y el padre está preparando un pícnic encima de una manta. La madre está haciendo una foto con el móvil. Al fondo hay árboles, un lago y personas que montan en bicicleta. Creo que después van a comer y luego a pasear por el lago.'},
     {id:'S2b', title:'En una tienda de ropa', scene:['Una tienda de ropa en el centro, con mucha luz.','Una chica joven tiene un jersey azul en la mano y habla con el dependiente.','El dependiente le enseña otro jersey de color rojo.','Al lado hay un probador y un espejo grande.','En la puerta hay un cartel: «Rebajas −30 %».'],
      q:['¿Dónde están las personas?','¿Cómo son y qué llevan?','¿Qué está pasando?','¿Qué crees que va a comprar la chica?'],
      model:'La foto es de una tienda de ropa. Hay una chica joven, morena, con el pelo largo, que lleva vaqueros y una chaqueta. Tiene en la mano un jersey azul y está hablando con el dependiente, que le enseña otro jersey rojo. Creo que la chica quiere cambiar de talla o de color. Al lado hay un probador y un espejo grande. En la puerta hay un cartel de rebajas, así que los precios son más baratos. Creo que al final va a comprar el jersey rojo.'}],
 t3:[{id:'S3a', link:'S2b', title:'Cambiar un jersey', role:'Compraste un jersey ayer, pero es pequeño. Vas a la tienda para cambiarlo. Habla con el dependiente (el examinador).',
      lines:['Buenas tardes. ¿En qué puedo ayudarle?','Muy bien. ¿Tiene el tique de compra?','¿Qué talla necesita? ¿Y quiere el mismo color?','Lo siento, en azul no nos queda esa talla. Lo tenemos en rojo o en negro. ¿Le sirve alguno?','Perfecto. ¿Quiere probárselo? El probador está ahí, a la derecha.','¿Qué tal le queda? ¿Necesita algo más?'],
      useful:['Quería cambiar este jersey.','Me queda pequeño / grande.','Aquí tiene el tique.','¿Lo tiene en la talla M?','Me lo pruebo, gracias.','Me queda muy bien, me lo llevo.']},
     {id:'S3b', link:'S2a', title:'Organizar un pícnic', role:'Eres amigo/a de la familia de la foto. Hablas con el examinador para organizar un pícnic el próximo domingo.',
      lines:['¡Hola! ¿Qué tal? Oye, ¿te apetece hacer un pícnic el domingo?','¡Genial! ¿Dónde podemos ir? ¿Conoces algún sitio bonito?','¿Y a qué hora quedamos?','¿Qué llevamos para comer? Yo puedo hacer una tortilla.','¿Y si llueve? ¿Tienes otra idea?','Perfecto. Entonces nos vemos el domingo.'],
      useful:['¡Me parece muy buena idea!','¿Qué te parece si…?','Podemos quedar a las…','Yo llevo la bebida y la fruta.','Si llueve, podemos ir a…','¡Hasta el domingo!']}]
};
const STIPS = {
 es:['Tienes 12 minutos para preparar las tareas 1 y 2. Puedes hacer un esquema, pero no leerlo.','Habla 2–3 minutos en las tareas 1 y 2: usa los puntos de la tarea como guía.','Usa conectores: primero, además, pero, porque, por eso, al final.','Si no sabes una palabra, explícala con otras: «es una cosa para…».','En la tarea 3 contesta y también pregunta: es una conversación.'],
 en:['You get 12 minutes to prepare tasks 1 and 2. You can make an outline but not read it out.','Speak for 2–3 minutes in tasks 1 and 2: use the task points as a guide.','Use connectors: primero, además, pero, porque, por eso, al final.','If you don’t know a word, describe it: «es una cosa para…».','In task 3 answer and also ask questions: it’s a conversation.'],
 ru:['На подготовку заданий 1 и 2 даётся 12 минут. Можно набросать план, но не читать по нему.','В заданиях 1 и 2 говорите 2–3 минуты, опираясь на пункты задания.','Используйте связки: primero, además, pero, porque, por eso, al final.','Если не знаете слова, объясните его другими: «es una cosa para…».','В задании 3 не только отвечайте, но и спрашивайте: это разговор.'],
 uk:['На підготовку завдань 1 і 2 дається 12 хвилин. Можна накидати план, але не читати з нього.','У завданнях 1 і 2 говоріть 2–3 хвилини, спираючись на пункти завдання.','Використовуйте зв’язки: primero, además, pero, porque, por eso, al final.','Якщо не знаєте слова, поясніть його іншими: «es una cosa para…».','У завданні 3 не лише відповідайте, а й запитуйте: це розмова.']};

Object.assign(I18N.es,{kWrite:'Expresión escrita',kSpeak:'Expresión oral',writeSub:'2 tareas · 45 minutos',speakSub:'3 tareas · 12 + 12 minutos',
 wT1:'Tarea 1 · Responder a un mensaje',wT2:'Tarea 2 · Texto (elige una opción)',words:(n,a,b)=>`${n} palabras · objetivo ${a}–${b}`,yourText:'Tu texto',checkSelf:'Comprueba tu texto',modelT:'Ejemplo de respuesta',phrasesT:'Frases útiles',showModel:'Ver ejemplo',dataT:'Ficha',
 sT1:'Tarea 1 · Presentación',sT2:'Tarea 2 · Describir una foto',sT3:'Tarea 3 · Conversación',prep:'Preparación',speakNow:'Habla',timerStart:'Empezar',timerStop:'Parar',pointsT:'Habla de:',sceneT:'En la foto (imagínala):',guideQ:'Preguntas de ayuda',listenModel:'Escuchar el ejemplo',examiner:'Examinador',nextLine:'Siguiente frase',startDialog:'Empezar la conversación',dialogEnd:'Fin de la conversación.',roleT:'Situación',tipsT:'Consejos',recordHint:'Consejo: grábate con la grabadora del móvil y escúchate después.',wsNote:'Estas partes no se corrigen automáticamente: compara con el ejemplo y usa la lista.'});
Object.assign(I18N.en,{kWrite:'Writing',kSpeak:'Speaking',writeSub:'2 tasks · 45 minutes',speakSub:'3 tasks · 12 + 12 minutes',
 wT1:'Task 1 · Reply to a message',wT2:'Task 2 · Text (choose one option)',words:(n,a,b)=>`${n} words · target ${a}–${b}`,yourText:'Your text',checkSelf:'Check your text',modelT:'Sample answer',phrasesT:'Useful phrases',showModel:'Show sample',dataT:'Data card',
 sT1:'Task 1 · Presentation',sT2:'Task 2 · Describe a photo',sT3:'Task 3 · Conversation',prep:'Preparation',speakNow:'Speak',timerStart:'Start',timerStop:'Stop',pointsT:'Talk about:',sceneT:'In the photo (imagine it):',guideQ:'Guide questions',listenModel:'Listen to the sample',examiner:'Examiner',nextLine:'Next line',startDialog:'Start the conversation',dialogEnd:'End of the conversation.',roleT:'Situation',tipsT:'Tips',recordHint:'Tip: record yourself with your phone’s voice recorder and listen back.',wsNote:'These parts aren’t marked automatically: compare with the sample and use the checklist.'});
Object.assign(I18N.ru,{kWrite:'Письмо',kSpeak:'Говорение',writeSub:'2 задания · 45 минут',speakSub:'3 задания · 12 + 12 минут',
 wT1:'Задание 1 · Ответ на сообщение',wT2:'Задание 2 · Текст (выберите вариант)',words:(n,a,b)=>`слов: ${n} · нужно ${a}–${b}`,yourText:'Ваш текст',checkSelf:'Проверьте себя',modelT:'Пример ответа',phrasesT:'Полезные фразы',showModel:'Показать пример',dataT:'Карточка',
 sT1:'Задание 1 · Монолог',sT2:'Задание 2 · Описание фото',sT3:'Задание 3 · Диалог',prep:'Подготовка',speakNow:'Говорите',timerStart:'Старт',timerStop:'Стоп',pointsT:'Расскажите о:',sceneT:'На фото (представьте его):',guideQ:'Вопросы-подсказки',listenModel:'Послушать пример',examiner:'Экзаменатор',nextLine:'Следующая реплика',startDialog:'Начать диалог',dialogEnd:'Конец диалога.',roleT:'Ситуация',tipsT:'Советы',recordHint:'Совет: запишите себя на диктофон телефона и переслушайте.',wsNote:'Эти части не проверяются автоматически: сравните с примером и пройдитесь по чек-листу.'});
Object.assign(I18N.uk,{kWrite:'Письмо',kSpeak:'Говоріння',writeSub:'2 завдання · 45 хвилин',speakSub:'3 завдання · 12 + 12 хвилин',
 wT1:'Завдання 1 · Відповідь на повідомлення',wT2:'Завдання 2 · Текст (оберіть варіант)',words:(n,a,b)=>`слів: ${n} · треба ${a}–${b}`,yourText:'Ваш текст',checkSelf:'Перевірте себе',modelT:'Приклад відповіді',phrasesT:'Корисні фрази',showModel:'Показати приклад',dataT:'Картка',
 sT1:'Завдання 1 · Монолог',sT2:'Завдання 2 · Опис фото',sT3:'Завдання 3 · Діалог',prep:'Підготовка',speakNow:'Говоріть',timerStart:'Старт',timerStop:'Стоп',pointsT:'Розкажіть про:',sceneT:'На фото (уявіть його):',guideQ:'Питання-підказки',listenModel:'Послухати приклад',examiner:'Екзаменатор',nextLine:'Наступна репліка',startDialog:'Почати діалог',dialogEnd:'Кінець діалогу.',roleT:'Ситуація',tipsT:'Поради',recordHint:'Порада: запишіть себе на диктофон телефона й переслухайте.',wsNote:'Ці частини не перевіряються автоматично: порівняйте з прикладом і пройдіться чек-листом.'});

const wc = s => (s.trim().match(/[\wÀ-ÿ’'-]+/g) || []).length;
const LIX = {ru:1, en:2, uk:3};

// ---------- writing ----------
function writing(){
  const T_ = t();
  const card = w => `<button class="btn" data-w="${w.id}" type="button">${esc(w.task===1?('«'+w.input.text.slice(0,48)+'…»'):(w.opt===2?'Opción 2 · '+w.data[0].split(': ')[1]:w.instr.split('. ')[1].slice(0,60)+'…'))}<small>${esc(T_.words((S.wr&&S.wr[w.id]?wc(S.wr[w.id]):0), w.words[0], w.words[1]))}</small></button>`;
  view.innerHTML = `<div class="stack">${backRow(deleStudy, T_.deleStudy)}<span class="eyebrow">DELE A2 · Prueba 3</span><h1>${esc(T_.kWrite)}</h1><p class="lede">${esc(T_.writeSub)}. ${esc(T_.wsNote)}</p>
    <h2>${esc(T_.wT1)}</h2><div class="tareas" style="gap:10px">${WRITE.filter(w=>w.task===1).map(card).join('')}</div>
    <h2>${esc(T_.wT2)}</h2><div class="tareas" style="gap:10px">${WRITE.filter(w=>w.task===2).map(card).join('')}</div></div>`;
  wireBack(deleStudy);
  view.querySelectorAll('[data-w]').forEach(b => b.onclick = () => go(() => writeTask(b.dataset.w)));
}
function writeTask(id){
  const T_ = t(), w = WRITE.find(x => x.id === id), lang = S.set.lang;
  S.wr = S.wr || {};
  view.innerHTML = `<div class="stack">${backRow(writing, T_.kWrite)}<span class="eyebrow">${esc(w.task===1?T_.wT1:T_.wT2)}</span>
    ${w.input?`<article class="panel doc" lang="es"><span class="eyebrow">De: ${esc(w.input.from)}</span><p>${esc(w.input.text)}</p></article>`:''}
    ${w.data?`<article class="panel doc" lang="es"><span class="eyebrow">${esc(T_.dataT)}</span><ul class="focus">${w.data.map(d=>`<li>${esc(d)}</li>`).join('')}</ul></article>`:''}
    <section class="panel"><p lang="es"><b>${esc(w.instr)}</b></p>${lang!=='es'?`<p class="tr">${esc(w.instrTr[lang])}</p>`:''}</section>
    <section class="panel"><label class="vrow"><span>${esc(T_.yourText)}</span><textarea id="w-txt" rows="9" lang="es" spellcheck="true">${esc(S.wr[id]||'')}</textarea></label><p class="note" id="w-count" role="status"></p></section>
    <section class="panel"><h2>${esc(T_.checkSelf)}</h2><div class="radios">${(WCHECK[lang]||WCHECK.es).map((c,i)=>`<label class="radio"><input type="checkbox" id="wc${i}"> ${esc(c)}</label>`).join('')}</div></section>
    <section class="panel"><h2>${esc(T_.phrasesT)}</h2><ul class="focus">${WPHRASES.map(p=>`<li><span lang="es">${esc(p[0])}</span>${lang!=='es'?` — <span class="tr" style="display:inline">${esc(p[LIX[lang]])}</span>`:''}</li>`).join('')}</ul></section>
    <details class="panel script"><summary>${esc(T_.showModel)}</summary><p lang="es" style="white-space:pre-line">${esc(w.model)}</p><p class="note">${esc(T_.words(wc(w.model), w.words[0], w.words[1]))}</p></details></div>`;
  wireBack(writing);
  const ta = $('#w-txt'), cnt = $('#w-count');
  const upd = () => { const n = wc(ta.value); cnt.textContent = T_.words(n, w.words[0], w.words[1]); cnt.className = 'note ' + (n >= w.words[0] && n <= w.words[1] ? 'okc' : n > w.words[1] ? 'badc' : ''); };
  ta.oninput = () => { S.wr[id] = ta.value; upd(); clearTimeout(ta._t); ta._t = setTimeout(save, 400); };
  upd();
}

// ---------- speaking ----------
let SPK_T = null;
function spTimer(btn, out, secs){
  btn.onclick = () => {
    if (SPK_T){ clearInterval(SPK_T.id); const same = SPK_T.btn === btn; SPK_T.btn.textContent = t().timerStart; SPK_T = null; if (same) return; }
    let left = secs; out.textContent = fmt(left*1000); btn.textContent = t().timerStop;
    const id = setInterval(() => { left--; out.textContent = fmt(left*1000); if (left <= 0){ clearInterval(id); btn.textContent = t().timerStart; SPK_T = null; toast('⏱ ' + fmt(0)); } }, 1000);
    SPK_T = {id, btn};
  };
}
function speaking(){
  const T_ = t(), lang = S.set.lang;
  view.innerHTML = `<div class="stack">${backRow(deleStudy, T_.deleStudy)}<span class="eyebrow">DELE A2 · Prueba 4</span><h1>${esc(T_.kSpeak)}</h1><p class="lede">${esc(T_.speakSub)}. ${esc(T_.wsNote)}</p>
    <section class="panel"><h2>${esc(T_.tipsT)}</h2><ul class="focus">${(STIPS[lang]||STIPS.es).map(x=>`<li>${esc(x)}</li>`).join('')}</ul><p class="note">${esc(T_.recordHint)}</p>
      <div class="player"><span><b>${esc(T_.prep)}</b> · 12:00</span><button class="btn primary" id="sp-prep" type="button">${esc(T_.timerStart)}</button><span class="note mono" id="sp-prep-o"></span></div></section>
    <h2>${esc(T_.sT1)}</h2><div class="tareas" style="gap:10px">${SPEAK.t1.map(s=>`<button class="btn" data-s="t1:${s.id}" type="button" lang="es">${esc(s.title)}</button>`).join('')}</div>
    <h2>${esc(T_.sT2)} + ${esc(T_.sT3)}</h2><div class="tareas" style="gap:10px">${SPEAK.t2.map(s=>`<button class="btn" data-s="t2:${s.id}" type="button" lang="es">${esc(s.title)}</button>`).join('')}</div></div>`;
  wireBack(deleStudy);
  spTimer($('#sp-prep'), $('#sp-prep-o'), 12*60);
  view.querySelectorAll('[data-s]').forEach(b => b.onclick = () => { const [k,id] = b.dataset.s.split(':'); go(() => k === 't1' ? speakMono(id) : speakPhoto(id)); });
}
function speakMono(id){
  const T_ = t(), s = SPEAK.t1.find(x=>x.id===id);
  view.innerHTML = `<div class="stack">${backRow(speaking, T_.kSpeak)}<span class="eyebrow">${esc(T_.sT1)}</span><h1 lang="es">${esc(s.title)}</h1>
    <section class="panel"><p><b>${esc(T_.pointsT)}</b></p><ul class="focus" lang="es">${s.points.map(p=>`<li>${esc(p)}</li>`).join('')}</ul>
      <div class="player"><span><b>${esc(T_.speakNow)}</b> · 2–3 min</span><button class="btn primary" id="sp-t" type="button">${esc(T_.timerStart)}</button><span class="note mono" id="sp-o"></span></div></section>
    <details class="panel script"><summary>${esc(T_.showModel)}</summary><p lang="es">${esc(s.model)}</p><button class="trbtn" id="sp-listen" type="button">${esc(T_.listenModel)}</button></details></div>`;
  wireBack(speaking);
  spTimer($('#sp-t'), $('#sp-o'), 180);
  $('#sp-listen').onclick = () => { TTS.newCast(); TTS.speak([{s:'f', t:s.model}], 0.9); };
}
function speakPhoto(id){
  const T_ = t(), s = SPEAK.t2.find(x=>x.id===id), d = SPEAK.t3.find(x=>x.link===id);
  view.innerHTML = `<div class="stack">${backRow(speaking, T_.kSpeak)}<span class="eyebrow">${esc(T_.sT2)}</span><h1 lang="es">${esc(s.title)}</h1>
    <section class="panel photo"><span class="eyebrow">${esc(T_.sceneT)}</span><ul class="focus" lang="es">${s.scene.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section>
    <section class="panel"><p><b>${esc(T_.guideQ)}</b></p><ul class="focus" lang="es">${s.q.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
      <div class="player"><span><b>${esc(T_.speakNow)}</b> · 2–3 min</span><button class="btn primary" id="sp-t" type="button">${esc(T_.timerStart)}</button><span class="note mono" id="sp-o"></span></div></section>
    <details class="panel script"><summary>${esc(T_.showModel)}</summary><p lang="es">${esc(s.model)}</p><button class="trbtn" id="sp-listen" type="button">${esc(T_.listenModel)}</button></details>
    <span class="eyebrow">${esc(T_.sT3)}</span><h2 lang="es">${esc(d.title)}</h2>
    <section class="panel"><p class="note">${esc(T_.roleT)}</p><p lang="es"><b>${esc(d.role)}</b></p>
      <div class="player"><button class="btn primary" id="dl-next" type="button">${esc(T_.startDialog)}</button><span class="note mono" id="dl-o"></span></div>
      <ol class="dlog" id="dl-log" lang="es"></ol>
      <p><b>${esc(T_.phrasesT)}</b></p><ul class="focus" lang="es">${d.useful.map(x=>`<li>${esc(x)}</li>`).join('')}</ul></section></div>`;
  wireBack(speaking);
  spTimer($('#sp-t'), $('#sp-o'), 180);
  $('#sp-listen').onclick = () => { TTS.newCast(); TTS.speak([{s:'f', t:s.model}], 0.9); };
  let i = 0; const nb = $('#dl-next'), log = $('#dl-log');
  TTS.newCast();
  nb.onclick = () => {
    if (i >= d.lines.length){ return; }
    const line = d.lines[i++];
    log.insertAdjacentHTML('beforeend', `<li><span class="who">${esc(T_.examiner)}</span>${esc(line)}</li>`);
    TTS.speak([{s:'m', t:line}], 0.95);
    nb.textContent = i < d.lines.length ? T_.nextLine : T_.dialogEnd; if (i >= d.lines.length) nb.disabled = true;
    $('#dl-o').textContent = `${i}/${d.lines.length}`;
  };
}
