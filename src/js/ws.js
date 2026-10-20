// ---------- DELE A2 writing (Prueba 3) and speaking (Prueba 4): original practice ----------
const WRITE = [
 {id:'W1a', task:1, words:[60,70],
  input:{from:'Carmen', text:'¡Hola! ¿Qué tal? El sábado 15 hago una comida en mi casa para celebrar mi cumpleaños. Vienen también Luis y Marta. ¿Puedes venir? Empieza a las dos. ¡Ah! ¿Hay algo que no comes o no te gusta? Un beso, Carmen'},
  instr:'Escribe un correo a Carmen. En él debes: saludar; aceptar la invitación y darle las gracias; decir qué comida no te gusta o no puedes comer; ofrecerte a llevar algo; despedirte.',
  instrTr:{en:'Write an email to Carmen: greet her; accept the invitation and thank her; say what food you don’t like or can’t eat; offer to bring something; say goodbye.',ru:'Напишите письмо Кармен: поздоровайтесь; примите приглашение и поблагодарите; скажите, какую еду не любите или не можете есть; предложите что-нибудь принести; попрощайтесь.',uk:'Напишіть листа Кармен: привітайтеся; прийміть запрошення й подякуйте; скажіть, яку їжу не любите або не можете їсти; запропонуйте щось принести; попрощайтеся.'},
  model:'¡Hola, Carmen!\nMuchas gracias por la invitación. ¡Claro que voy a ir el sábado! ¡Me hace mucha ilusión celebrar tu cumpleaños con vosotros! Como sabes, soy vegetariana, así que no como carne ni pescado, pero no te preocupes: me gusta casi todo lo demás. ¿Quieres que lleve el postre? Puedo hacer una tarta de chocolate. Nos vemos a las dos.\nUn beso,\nAna'},
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
  model:'Elena Martín nació en Salamanca en 1975. En 1993 se fue a Madrid para estudiar Medicina. Después de terminar la carrera, trabajó como médica en Guatemala durante seis años, de 1999 a 2005. Al año siguiente volvió a España y abrió una clínica en su ciudad. En 2015 recibió un premio por su trabajo con niños. Hoy vive en Salamanca y da clases en la universidad.'}
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
      model:'Trabajo en una empresa de informática en el centro de la ciudad. Trabajo organizando el desarrollo de productos digitales. Un día normal empiezo a las nueve, leo los correos y luego tengo varias reuniones con mi equipo. A las dos como con mis compañeros. Me gusta mucho mi trabajo porque es creativo y aprendo cosas nuevas cada día. Lo que no me gusta es que a veces tengo demasiadas reuniones. En el futuro me gustaría trabajar desde casa algunos días y tener más tiempo para viajar.'}],
 t2:[{id:'S2a', title:'Un paseo junto al lago', photo:{f:'parque', w:960, h:614, by:'Ubaldo Bitumi', u:'ubigraph'},
      scene:['Es verano y hace sol. Una familia pasea por un camino junto a un lago.','Delante va una niña con un vestido rosa y un sombrero blanco.','Una mujer con sombrero y gafas de sol lleva a un niño pequeño en brazos y una bolsa grande blanca.','Detrás, un hombre lleva a una niña sobre los hombros. A su lado hay un perro blanco pequeño.','Hay árboles muy altos, hierba seca y el agua del lago es verde.'],
      q:['¿Quiénes son? ¿Cómo son y qué llevan?','¿Dónde están? ¿Qué tiempo hace?','¿Qué están haciendo?','¿Qué crees que van a hacer después?'],
      model:'En la foto hay una familia que pasea por un camino al lado de un lago. Creo que es verano porque hace sol y llevan ropa de verano. Delante va una niña con un vestido rosa y un sombrero blanco. Detrás va una mujer, seguramente la madre: lleva sombrero, gafas de sol, una bolsa grande y un niño pequeño en brazos. Al fondo hay un hombre con una niña sobre los hombros y, a su lado, un perro blanco pequeño. Hay árboles muy altos y el agua del lago es verde. Parece que están tranquilos. Quizás después van a sentarse a la sombra a comer algo.'},
     {id:'S2b', title:'Una tienda de ropa vintage', photo:{f:'tienda', w:960, h:633, by:'Richard Wang', u:'rrricharddd'},
      scene:['Es una tienda de ropa con muchísimas cosas.','Hay muchas camisas y chaquetas vaqueras colgadas en barras.','En las estanterías hay ropa doblada, botas y algunos bolsos.','En el centro hay una lámpara grande de colores y un maniquí con sombrero y camisa.','A la izquierda hay una ventana y un espejo. No hay clientes.'],
      q:['¿Qué tipo de tienda es?','¿Qué cosas se venden?','¿Cómo es la tienda? ¿Te gusta?','¿Dónde compras tú la ropa normalmente?'],
      model:'En la foto hay una tienda de ropa. Creo que es una tienda de ropa vintage, es decir, de ropa antigua o de segunda mano. Hay muchísimas cosas: camisas y chaquetas vaqueras colgadas, ropa doblada en las estanterías, botas y algunos bolsos. En el centro hay una lámpara grande de colores y un maniquí con sombrero y camisa. A la izquierda hay una ventana y un espejo. No hay clientes; quizás es temprano y la tienda acaba de abrir. A mí me gustan estas tiendas porque la ropa es original, pero normalmente compro en tiendas del centro o por internet.'},
     {id:'S2c', title:'Una cafetería grande', photo:{f:'cafeteria', w:960, h:715, by:'Shawn', u:'shawnanggg'},
      scene:['Es una cafetería muy grande, con mesas y sillas de madera.','Del techo cuelgan lámparas negras.','A la izquierda está la barra; detrás hay pizarras con el menú.','A la derecha hay ventanas grandes y plantas. Al fondo hay una escalera.','Hay poca gente: una mujer sentada cerca de la barra, un chico con un ordenador portátil y camareros detrás de la barra.'],
      q:['¿Dónde están las personas? ¿Cómo es el lugar?','¿Qué están haciendo?','¿A qué hora crees que es? ¿Por qué hay poca gente?','¿Vas tú a cafeterías? ¿Para qué?'],
      model:'La foto es de una cafetería muy grande y moderna. Las mesas y las sillas son de madera y del techo cuelgan lámparas negras. A la izquierda está la barra, con pizarras donde está el menú, y detrás hay camareros trabajando. A la derecha hay ventanas grandes con plantas. Hay poca gente: una mujer está sentada cerca de la barra y un chico está trabajando con su ordenador. Quizás es por la mañana, entre semana. Me gusta este tipo de sitio porque es tranquilo y tiene mucha luz. Yo a veces voy a una cafetería para estudiar o para quedar con amigos.'},
     {id:'S2d', title:'En una estación de tren', photo:{f:'estacion', w:960, h:1396, by:'Hugh Stevenson', u:'hughstevensonn'},
      scene:['Es el vestíbulo de una estación de tren muy grande y antigua.','Hay tres ventanas enormes en forma de arco.','En el centro hay un punto de información con un reloj dorado.','Hay muchísima gente: unos caminan rápido, otros llevan mochilas o maletas.','Al fondo hay escaleras y, arriba, un balcón con más gente.'],
      q:['¿Qué lugar es? ¿Cómo es?','¿Qué hace la gente?','¿Adónde crees que van?','¿Viajas tú en tren? ¿Adónde?'],
      model:'En la foto se ve una estación de tren muy grande y antigua. Tiene tres ventanas enormes en forma de arco. En el centro hay un punto de información con un reloj dorado. Hay muchísima gente: algunas personas caminan rápido y otras llevan mochilas o maletas. Creo que unos van al trabajo o vuelven a casa, y otros se van de viaje. Como hay tanta gente, quizás es la hora de salir del trabajo. A mí me gusta viajar en tren porque es cómodo y puedo leer. El año pasado fui en tren de Madrid a Sevilla.'},
     {id:'S2e', title:'En un mercado', photo:{f:'mercado', w:960, h:635, by:'Alex Hudson', u:'aliffhassan91'},
      scene:['Es un mercado con muchísima verdura. La foto está hecha desde arriba.','Hay coles, lechugas, berenjenas, judías verdes, patatas, tomates y guindillas rojas.','Una vendedora está sentada entre las cajas de verdura.','Un hombre con una camisa de cuadros está pagando o recibe el cambio.','A la derecha, una mujer con un bolso tiene una bolsa de plástico en la mano.'],
      q:['¿Dónde están? ¿Qué se vende?','¿Quiénes son las personas? ¿Qué hacen?','¿Qué crees que va a comprar la mujer?','¿Dónde compras tú la fruta y la verdura?'],
      model:'La foto está hecha desde arriba y es de un mercado. Hay muchísima verdura de muchos colores: coles, lechugas, berenjenas, judías verdes, patatas, tomates y guindillas rojas. La vendedora está sentada entre las cajas. Un hombre con una camisa de cuadros está pagando, o quizás recibe el cambio. A la derecha hay una mujer con un bolso y una bolsa de plástico; creo que también está comprando o espera su turno. Seguramente va a comprar verdura para la comida. Yo compro la fruta y la verdura en el mercado de mi barrio los sábados, porque es más fresca y más barata.'},
     {id:'S2f', title:'Una comida en casa', photo:{f:'fiesta', w:960, h:635, by:'Josh Frenette', u:'joshfrenette'},
      scene:['Es la cocina de una casa. Hay una encimera larga con mucha comida.','Hay pan, bandejas de carne, salsas, sandía y una ensalada de pasta.','Un señor mayor con gafas se sirve comida en un plato.','Al fondo hay otros dos hombres de pie.','Parece una fiesta o una comida familiar.'],
      q:['¿Dónde están? ¿Qué hay para comer?','¿Qué está haciendo el señor?','¿Qué crees que celebran?','¿Organizas tú comidas en casa? ¿Cómo son?'],
      model:'La foto es de una cocina en una casa. Hay una encimera larga con mucha comida: pan, bandejas de carne, salsas, sandía y una ensalada de pasta. Un señor mayor con gafas está sirviéndose comida en el plato. Al fondo hay otros dos hombres de pie. Creo que es una fiesta o una comida familiar, quizás un cumpleaños, porque hay mucha comida y es tipo bufé: cada persona se sirve. A mí me gustan mucho estas comidas. En mi familia, en verano, comemos juntos en casa de mis padres y cada uno lleva un plato.'}],
 t3:[{id:'S3a', link:'S2b', title:'Cambiar un jersey', role:'Compraste un jersey ayer, pero es pequeño. Vas a la tienda para cambiarlo. Habla con el dependiente (el examinador).',
      lines:['Buenas tardes. ¿En qué puedo ayudarle?','Muy bien. ¿Tiene el tique de compra?','¿Qué talla necesita? ¿Y quiere el mismo color?','Lo siento, en azul no nos queda esa talla. Lo tenemos en rojo o en negro. ¿Le sirve alguno?','Perfecto. ¿Quiere probárselo? El probador está ahí, a la derecha.','¿Qué tal le queda? ¿Necesita algo más?'],
      sample:['Buenas tardes. Quería cambiar este jersey: lo compré ayer, pero me queda pequeño.','Sí, aquí lo tiene.','Necesito la talla M. Y sí, me gusta mucho el azul.','Vale, entonces el negro, por favor.','Sí, me lo pruebo. Gracias.','Me queda muy bien, me lo llevo. No necesito nada más, gracias.'],
      useful:['Quería cambiar este jersey.','Me queda pequeño / grande.','Aquí tiene el tique.','¿Lo tiene en la talla M?','Me lo pruebo, gracias.','Me queda muy bien, me lo llevo.']},
     {id:'S3b', link:'S2a', title:'Organizar un pícnic', role:'Eres amigo/a de la familia de la foto. Hablas con el examinador para organizar un pícnic el próximo domingo.',
      lines:['¡Hola! ¿Qué tal? Oye, ¿te apetece hacer un pícnic el domingo?','¡Genial! ¿Dónde podemos ir? ¿Conoces algún sitio bonito?','¿Y a qué hora quedamos?','¿Qué llevamos para comer? Yo puedo hacer una tortilla.','¿Y si llueve? ¿Tienes otra idea?','Perfecto. Entonces nos vemos el domingo.'],
      sample:['¡Hola! Muy bien. ¡Me parece muy buena idea!','¿Qué te parece si vamos al parque del lago? Es muy bonito y hay sombra.','Podemos quedar a las doce en la entrada del parque.','¡Estupendo! Yo llevo la bebida, la fruta y unos bocadillos.','Si llueve, podemos comer en mi casa y ver una película.','¡Vale! ¡Hasta el domingo!'],
      useful:['¡Me parece muy buena idea!','¿Qué te parece si…?','Podemos quedar a las…','Yo llevo la bebida y la fruta.','Si llueve, podemos ir a…','¡Hasta el domingo!']},
     {id:'S3c', link:'S2c', title:'Pedir en una cafetería', role:'Estás en la cafetería de la foto. Quieres tomar algo y trabajar un rato con tu ordenador. Habla con el camarero (el examinador).',
      lines:['Hola, buenos días. ¿Qué le pongo?','¿Con leche entera, desnatada o de avena?','¿Algo para comer? Hoy tenemos tostadas, cruasanes y tarta de zanahoria.','¿Es para tomar aquí o para llevar?','Sí, claro. La contraseña del wifi está en la pizarra.','Muy bien. Son cinco euros con veinte. ¿Paga con tarjeta o en efectivo?'],
      sample:['Buenos días. Un café con leche, por favor.','Con leche de avena, por favor.','Sí, una tostada con tomate, por favor.','Para tomar aquí. Oiga, ¿tienen wifi?','Muchas gracias.','Con tarjeta. Aquí tiene.'],
      useful:['¿Me pone un café con leche?','Para tomar aquí / para llevar.','¿Qué tienen para comer?','¿Tienen wifi?','¿Cuánto es?','Con tarjeta, por favor.']},
     {id:'S3d', link:'S2d', title:'Comprar un billete de tren', role:'Estás en la estación de la foto. Quieres comprar un billete para el sábado. Habla con el empleado de la taquilla (el examinador).',
      lines:['Buenas tardes. ¿Adónde quiere viajar?','¿Para qué día? ¿Solo ida o ida y vuelta?','Hay un tren a las 8:15 y otro a las 11:40. ¿Cuál prefiere?','¿Y qué día quiere volver?','Muy bien. Son sesenta y cuatro euros en total. ¿Necesita algo más?','Sale del andén 5. Lo puede ver en las pantallas media hora antes.'],
      sample:['Buenas tardes. Quiero ir a Valencia, por favor.','Para el sábado. Ida y vuelta, por favor.','El de las 11:40. Es que el sábado no quiero madrugar.','El domingo por la tarde, después de comer.','Nada más, gracias. Bueno, ¿de qué andén sale el tren?','Muchas gracias. ¡Adiós!'],
      useful:['Quiero un billete para…','Ida y vuelta, por favor.','¿A qué hora sale el tren?','¿Cuánto cuesta?','¿De qué andén sale?','¿Hay un tren más tarde?']},
     {id:'S3e', link:'S2e', title:'Comprar en el mercado', role:'Estás en un mercado como el de la foto. Quieres comprar verdura para hacer una ensalada y una tortilla. Habla con el vendedor (el examinador).',
      lines:['¡Buenos días! ¿Qué le pongo?','¿Cuántos quiere?','Muy bien. ¿Algo más?','Las patatas están a un euro con cincuenta el kilo. ¿Cuántas le pongo?','Aquí tiene. ¿Quiere una bolsa?','Pues son seis euros con treinta.'],
      sample:['Buenos días. ¿Me pone tomates, por favor?','Un kilo, por favor. Maduros, que son para una ensalada.','Sí, una lechuga y una cebolla. ¿A cuánto están las patatas?','Dos kilos, por favor. Son para una tortilla.','No, gracias, traigo la mía.','Aquí tiene. ¡Muchas gracias, hasta luego!'],
      useful:['¿Me pone un kilo de…?','¿A cuánto están los tomates?','Medio kilo, por favor.','Nada más, gracias.','¿Cuánto es?','Traigo mi bolsa.']},
     {id:'S3f', link:'S2f', title:'Una invitación a comer', role:'Un amigo (el examinador) organiza una comida en su casa, como la de la foto, y te invita. Habla con él.',
      lines:['¡Hola! Oye, el sábado hacemos una comida en casa por mi cumpleaños. ¿Vienes?','¡Qué bien! Empezamos a las dos. ¿Te va bien?','No hace falta traer nada, pero si quieres…','Somos unas quince personas. ¿Vienes solo o con alguien?','Perfecto. ¿Sabes llegar a mi casa?','Vale, te mando la dirección por mensaje. ¡Hasta el sábado!'],
      sample:['¡Hola! ¡Felicidades! Claro que voy, muchas gracias.','Sí, perfecto. A las dos estoy allí.','Pues llevo el postre: una tarta de chocolate. ¿Te parece bien?','Voy con mi pareja, si no te importa.','No, no lo sé. ¿Me mandas la dirección?','¡Genial! ¡Hasta el sábado!'],
      useful:['¡Felicidades!','Claro que voy.','¿A qué hora empieza?','¿Llevo algo?','Voy con…, si no te importa.','¿Me mandas la dirección?']}]
};
const STIPS = {
 es:['Tienes 12 minutos para preparar las tareas 1 y 2. Puedes hacer un esquema, pero no leerlo.','Habla 2–3 minutos en las tareas 1 y 2: usa los puntos de la tarea como guía.','Usa conectores: primero, además, pero, porque, por eso, al final.','Si no sabes una palabra, explícala con otras: «es una cosa para…».','En la tarea 3 contesta y también pregunta: es una conversación.'],
 en:['You get 12 minutes to prepare tasks 1 and 2. You can make an outline but not read it out.','Speak for 2–3 minutes in tasks 1 and 2: use the task points as a guide.','Use connectors: primero, además, pero, porque, por eso, al final.','If you don’t know a word, describe it: «es una cosa para…».','In task 3 answer and also ask questions: it’s a conversation.'],
 ru:['На подготовку заданий 1 и 2 даётся 12 минут. Можно набросать план, но не читать по нему.','В заданиях 1 и 2 говорите 2–3 минуты, опираясь на пункты задания.','Используйте связки: primero, además, pero, porque, por eso, al final.','Если не знаете слова, объясните его другими: «es una cosa para…».','В задании 3 не только отвечайте, но и спрашивайте: это разговор.'],
 uk:['На підготовку завдань 1 і 2 дається 12 хвилин. Можна накидати план, але не читати з нього.','У завданнях 1 і 2 говоріть 2–3 хвилини, спираючись на пункти завдання.','Використовуйте зв’язки: primero, además, pero, porque, por eso, al final.','Якщо не знаєте слова, поясніть його іншими: «es una cosa para…».','У завданні 3 не лише відповідайте, а й запитуйте: це розмова.']};

Object.assign(I18N.es,{kWrite:'Expresión escrita',kSpeak:'Expresión oral',writeSub:'2 tareas · 45 minutos',speakSub:'3 tareas · 12 + 12 minutos',
 wT1:'Tarea 1 · Responder a un mensaje',wT2:'Tarea 2 · Texto (elige una opción)',words:(n,a,b)=>`${n} palabras · objetivo ${a}–${b}`,yourText:'Tu texto',checkSelf:'Comprueba tu texto',modelT:'Ejemplo de respuesta',phrasesT:'Frases útiles',showModel:'Ver ejemplo',dataT:'Ficha',
 sT1:'Tarea 1 · Presentación',sT2:'Tarea 2 · Describir una foto',sT3:'Tarea 3 · Conversación',prep:'Preparación',speakNow:'Habla',timerStart:'Empezar',timerStop:'Parar',pointsT:'Habla de:',sceneT:'En la foto (imagínala):',guideQ:'Preguntas de ayuda',listenModel:'Escuchar el ejemplo',examiner:'Examinador',nextLine:'Siguiente frase',startDialog:'Empezar la conversación',dialogEnd:'Fin de la conversación.',roleT:'Situación',tipsT:'Consejos',recordHint:'Consejo: en cada tarea puedes grabarte y escucharte después.',wsNote:'Estas partes no se corrigen automáticamente: compara con el ejemplo y usa la lista.'});
Object.assign(I18N.en,{kWrite:'Writing',kSpeak:'Speaking',writeSub:'2 tasks · 45 minutes',speakSub:'3 tasks · 12 + 12 minutes',
 wT1:'Task 1 · Reply to a message',wT2:'Task 2 · Text (choose one option)',words:(n,a,b)=>`${n} words · target ${a}–${b}`,yourText:'Your text',checkSelf:'Check your text',modelT:'Sample answer',phrasesT:'Useful phrases',showModel:'Show sample',dataT:'Data card',
 sT1:'Task 1 · Presentation',sT2:'Task 2 · Describe a photo',sT3:'Task 3 · Conversation',prep:'Preparation',speakNow:'Speak',timerStart:'Start',timerStop:'Stop',pointsT:'Talk about:',sceneT:'In the photo (imagine it):',guideQ:'Guide questions',listenModel:'Listen to the sample',examiner:'Examiner',nextLine:'Next line',startDialog:'Start the conversation',dialogEnd:'End of the conversation.',roleT:'Situation',tipsT:'Tips',recordHint:'Tip: in each task you can record yourself and listen back.',wsNote:'These parts aren’t marked automatically: compare with the sample and use the checklist.'});
Object.assign(I18N.ru,{kWrite:'Письмо',kSpeak:'Говорение',writeSub:'2 задания · 45 минут',speakSub:'3 задания · 12 + 12 минут',
 wT1:'Задание 1 · Ответ на сообщение',wT2:'Задание 2 · Текст (выберите вариант)',words:(n,a,b)=>`слов: ${n} · нужно ${a}–${b}`,yourText:'Ваш текст',checkSelf:'Проверьте себя',modelT:'Пример ответа',phrasesT:'Полезные фразы',showModel:'Показать пример',dataT:'Карточка',
 sT1:'Задание 1 · Монолог',sT2:'Задание 2 · Описание фото',sT3:'Задание 3 · Диалог',prep:'Подготовка',speakNow:'Говорите',timerStart:'Старт',timerStop:'Стоп',pointsT:'Расскажите о:',sceneT:'На фото (представьте его):',guideQ:'Вопросы-подсказки',listenModel:'Послушать пример',examiner:'Экзаменатор',nextLine:'Следующая реплика',startDialog:'Начать диалог',dialogEnd:'Конец диалога.',roleT:'Ситуация',tipsT:'Советы',recordHint:'Совет: в каждом задании можно записать себя и переслушать.',wsNote:'Эти части не проверяются автоматически: сравните с примером и пройдитесь по чек-листу.'});
Object.assign(I18N.uk,{kWrite:'Письмо',kSpeak:'Говоріння',writeSub:'2 завдання · 45 хвилин',speakSub:'3 завдання · 12 + 12 хвилин',
 wT1:'Завдання 1 · Відповідь на повідомлення',wT2:'Завдання 2 · Текст (оберіть варіант)',words:(n,a,b)=>`слів: ${n} · треба ${a}–${b}`,yourText:'Ваш текст',checkSelf:'Перевірте себе',modelT:'Приклад відповіді',phrasesT:'Корисні фрази',showModel:'Показати приклад',dataT:'Картка',
 sT1:'Завдання 1 · Монолог',sT2:'Завдання 2 · Опис фото',sT3:'Завдання 3 · Діалог',prep:'Підготовка',speakNow:'Говоріть',timerStart:'Старт',timerStop:'Стоп',pointsT:'Розкажіть про:',sceneT:'На фото (уявіть його):',guideQ:'Питання-підказки',listenModel:'Послухати приклад',examiner:'Екзаменатор',nextLine:'Наступна репліка',startDialog:'Почати діалог',dialogEnd:'Кінець діалогу.',roleT:'Ситуація',tipsT:'Поради',recordHint:'Порада: у кожному завданні можна записати себе й переслухати.',wsNote:'Ці частини не перевіряються автоматично: порівняйте з прикладом і пройдіться чек-листом.'});

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
    ${hintsHTML()}
    <section class="panel"><h2>${esc(T_.checkSelf)}</h2><div class="radios">${(WCHECK[lang]||WCHECK.es).map((c,i)=>`<label class="radio"><input type="checkbox" id="wc${i}"> ${esc(c)}</label>`).join('')}</div></section>
    <section class="panel"><h2>${esc(T_.phrasesT)}</h2><ul class="focus">${WPHRASES.map(p=>`<li><span lang="es">${esc(p[0])}</span>${lang!=='es'?` — <span class="tr" style="display:inline">${esc(p[LIX[lang]])}</span>`:''}</li>`).join('')}</ul></section>
    <details class="panel script"><summary>${esc(T_.showModel)}</summary><p lang="es" style="white-space:pre-line">${esc(w.model)}</p><p class="note">${esc(T_.words(wc(w.model), w.words[0], w.words[1]))}</p></details></div>`;
  wireBack(writing);
  const ta = $('#w-txt'), cnt = $('#w-count');
  const upd = () => { const n = wc(ta.value); cnt.textContent = T_.words(n, w.words[0], w.words[1]); cnt.className = 'note ' + (n >= w.words[0] && n <= w.words[1] ? 'okc' : n > w.words[1] ? 'badc' : ''); clearTimeout(cnt._h); cnt._h = setTimeout(() => drawHints(ta.value, w), 250); };
  ta.oninput = () => { S.wr[id] = ta.value; upd(); clearTimeout(ta._t); ta._t = setTimeout(save, 400); };
  upd();
}

// ---------- speaking ----------
let SPK_T = null;
function spTimer(btn, out, secs){
  btn.onclick = () => {
    if (SPK_T){ clearInterval(SPK_T.id); const same = SPK_T.btn === btn; SPK_T.btn.textContent = t().timerStart; SPK_T = null; if (same) return; }
    let left = secs; out.textContent = fmt(left*1000); btn.textContent = t().timerStop;
    const id = setInterval(() => { left--; out.textContent = fmt(left*1000); if (left <= 0){ clearInterval(id); btn.textContent = t().timerStart; SPK_T = null; toast(t().timerEnd); } }, 1000);
    SPK_T = {id, btn};
  };
}
// Photos for speaking task 2: Unsplash License, author credited under every photo and on the About page.
const UNSPLASH = u => `https://unsplash.com/${u?'@'+u:''}?utm_source=apto&utm_medium=referral`;
function photoCredit(p){ const by = `<a href="${UNSPLASH(p.u)}" target="_blank" rel="noopener">${esc(p.by)}</a>`, un = `<a href="${UNSPLASH('')}" target="_blank" rel="noopener">Unsplash</a>`; return t().photoBy(by, un); }
function photoHTML(s){ const p = s.photo;
  return `<figure class="ph"><img src="photos/${p.f}.webp" width="${p.w}" height="${p.h}" alt="${esc(s.scene.join(' '))}" lang="es" decoding="async"><figcaption class="note">${photoCredit(p)}</figcaption></figure>`; }
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
      <div class="player"><span><b>${esc(T_.speakNow)}</b> · 2–3 min</span><button class="btn primary" id="sp-t" type="button">${esc(T_.timerStart)}</button><span class="note mono" id="sp-o"></span></div>${recorderHTML()}</section>
    <details class="panel script"><summary>${esc(T_.showModel)}</summary><p lang="es">${esc(s.model)}</p><button class="trbtn" id="sp-listen" type="button">${esc(T_.listenModel)}</button></details>
    ${selfCheckHTML()}</div>`;
  wireBack(speaking); wireRecorders();
  spTimer($('#sp-t'), $('#sp-o'), 180);
  $('#sp-listen').onclick = () => { TTS.newCast(); TTS.speak([{s:'f', t:s.model}], 0.9); };
}
function speakPhoto(id){
  const T_ = t(), s = SPEAK.t2.find(x=>x.id===id), d = SPEAK.t3.find(x=>x.link===id);
  view.innerHTML = `<div class="stack">${backRow(speaking, T_.kSpeak)}<span class="eyebrow">${esc(T_.sT2)}</span><h1 lang="es">${esc(s.title)}</h1>
    ${photoHTML(s)}
    <section class="panel"><p><b>${esc(T_.guideQ)}</b></p><ul class="focus" lang="es">${s.q.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
      <div class="player"><span><b>${esc(T_.speakNow)}</b> · 2–3 min</span><button class="btn primary" id="sp-t" type="button">${esc(T_.timerStart)}</button><span class="note mono" id="sp-o"></span></div>${recorderHTML()}</section>
    <details class="panel script"><summary>${esc(T_.showModel)}</summary><p lang="es">${esc(s.model)}</p><button class="trbtn" id="sp-listen" type="button">${esc(T_.listenModel)}</button></details>
    <span class="eyebrow">${esc(T_.sT3)}</span><h2 lang="es">${esc(d.title)}</h2>
    <section class="panel"><p class="note">${esc(T_.roleT)}</p><p lang="es"><b>${esc(d.role)}</b></p>
      <div class="player"><button class="btn primary" id="dl-next" type="button">${esc(T_.startDialog)}</button><span class="note mono" id="dl-o"></span></div>
      <ol class="dlog" id="dl-log" lang="es"></ol>${recorderHTML()}
      <p><b>${esc(T_.phrasesT)}</b></p><ul class="focus" lang="es">${d.useful.map(x=>`<li>${esc(x)}</li>`).join('')}</ul>
      <details class="script"><summary>${esc(T_.sampleDlg)}</summary><ol class="dlog" lang="es">${d.lines.map((l,j)=>`<li><span class="who">${esc(T_.examiner)}</span>${esc(l)}</li><li class="you"><span class="who">${esc(T_.candidate)}</span>${esc(d.sample[j])}</li>`).join('')}</ol><p class="note">${esc(T_.sampleNote)}</p></details></section>
    ${selfCheckHTML()}</div>`;
  wireBack(speaking); wireRecorders();
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
