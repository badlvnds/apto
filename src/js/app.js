const TAREAS = [{n:1,exam:10},{n:2,exam:3},{n:3,exam:2},{n:4,exam:3},{n:5,exam:7}];
const EXAM_MIN = 45, PASS = 15, MASTER = 2;
const byId = Object.fromEntries(Q.map(q => [q.id, q]));
const L = ['a','b','c'];
const SPK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M4 9v6h4l5 4V5L8 9H4z"/><path d="M16.5 8.5a5 5 0 0 1 0 7"/><path d="M19 6a8.5 8.5 0 0 1 0 12"/></svg>';
const MANUAL_URL = 'https://examenes.cervantes.es/es/ccse/preparar-prueba';

// ---------- storage (this browser only) ----------
const KEY = 'ccse2026.v1';
function detectLang(){ try { const l = (navigator.language||'').slice(0,2); return ['ru','uk','en','es'].includes(l) ? l : 'en'; } catch(e){ return 'en'; } }
function fresh(){ return {q:{}, exams:[], aud:{}, audRuns:[], gram:{}, read:{}, dq:{}, dmocks:[], set:{lang:detectLang(), tr:'tap', trExam:false, vA:'', vB:'', audMode:'exam', audSlow:false}}; }
let S = fresh();
try { const raw = localStorage.getItem(KEY); if (raw){ const o = JSON.parse(raw); S = Object.assign(fresh(), o); S.set = Object.assign(fresh().set, o.set||{}); } } catch(e) {}
function save(){ try { localStorage.setItem(KEY, JSON.stringify(S)); } catch(e) {} }
function st(id){ return S.q[id] || (S.q[id] = {seen:0, ok:0, streak:0, last:0, wrong:false}); }
function record(id, correct){
  const s = st(id); s.seen++; s.last = Date.now(); bumpDay('c');
  if (correct){ s.ok++; s.streak++; if (s.streak >= MASTER) s.wrong = false; }
  else { s.streak = 0; s.wrong = true; }
  save();
}
const isMastered = id => (S.q[id]?.streak || 0) >= MASTER;
const isSeen = id => (S.q[id]?.seen || 0) > 0;
const isWrong = id => !!S.q[id]?.wrong;

// ---------- i18n ----------
const t = () => I18N[S.set.lang] || I18N.en;
const tname = n => t().T[n-1];
function trOf(q){ // returns {q, opts} in current language or null
  const lang = S.set.lang; if (lang === 'es') return null;
  const x = TR[q.id] && TR[q.id][lang]; if (!x) return null;
  return {q: x[0], opts: q.opts.length === 2 ? [t().tTrue, t().tFalse] : x.slice(1)};
}

// ---------- helpers ----------
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
function shuffle(a){ a = a.slice(); for (let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; }
const view = $('#view');
let timer = null, current = home;
function setMeta(x){ $('#bar-meta').textContent = x; }
function stopTimer(){ if (timer){ clearInterval(timer); timer = null; } }
function go(fn){ EXAM_ON = false; if (typeof SPK_T !== 'undefined' && SPK_T){ clearInterval(SPK_T.id); SPK_T = null; } const mm = document.getElementById('bar-meta'); if (mm) mm.classList.remove('warn'); stopTimer(); try { TTS.stop(); } catch(e){} current = fn; setMeta(''); fn(); window.scrollTo(0,0); }
function chrome(){
  document.documentElement.lang = S.set.lang;
  $('#lang').value = S.set.lang;
  $('#set-btn').setAttribute('aria-label', t().settings);
  $('#foot').innerHTML = `<span>${esc(t().foot1)}</span><span>${esc(t().foot2)} <a href="${MANUAL_URL}" target="_blank" rel="noopener">${esc(t().manualName)}</a> ${esc(t().foot2b)}</span><span>${esc(t().foot3)}</span>`;
}

// translation block under a question
function trMode(inExam){ if (S.set.lang==='es') return 'off'; if (inExam && !S.set.trExam) return 'off'; return S.set.tr; }
function trHTML(q, inExam){
  const x = trOf(q), mode = trMode(inExam);
  if (!x || mode === 'off') return {q:'', o:()=>'', btn:''};
  const hid = mode === 'tap' ? ' hidden' : '';
  return {
    q: `<p class="tr"${hid}>${esc(x.q)}</p>`,
    o: oi => (x.opts[oi] === q.opts[oi] ? '' : `<span class="tr"${hid}>${esc(x.opts[oi])}</span>`),
    btn: mode === 'tap' ? `<button type="button" class="trbtn" aria-expanded="false">${esc(t().translate)}</button>` : ''
  };
}
function wireTr(container){
  const b = container.querySelector('.trbtn'); if (!b) return;
  b.onclick = () => { const open = b.getAttribute('aria-expanded') !== 'true';
    container.querySelectorAll('.tr').forEach(e => e.hidden = !open);
    b.setAttribute('aria-expanded', open); b.textContent = open ? t().hide : t().translate; };
}

// ---------- question card (study) ----------
function renderQuestion(container, q, {shuffleOpts=true, onAnswer, after}){
  const order = (shuffleOpts && q.opts.length === 3) ? shuffle([0,1,2]) : q.opts.map((_,i)=>i);
  const T = trHTML(q, false);
  container.innerHTML = `
    <div class="qhead"><span class="chip t">${t().tarea} ${q.tarea}</span><span class="chip">${q.id}</span>${isWrong(q.id)?`<span class="chip">${esc(t().failedBefore)}</span>`:''}<span class="sp"></span>${TTS.ok?`<button type="button" class="iconbtn sm" data-say aria-label="${esc(t().listenQ)}">${SPK}</button>`:''}${T.btn}</div>
    <div class="qblock"><p class="qtext" lang="es">${esc(q.q)}</p>${T.q}</div>
    <div class="opts">${order.map((oi,k)=>`<button type="button" class="opt" data-oi="${oi}"><span class="l">${L[k]}</span><span class="ot"><span lang="es">${esc(q.opts[oi])}</span>${T.o(oi)}</span></button>`).join('')}</div>
    <div class="fb"></div>`;
  wireTr(container);
  const say = container.querySelector('[data-say]'); if (say) say.onclick = () => TTS.speak([{s:'f', t:q.q}].concat(order.map((oi,k)=>({s:'f', t:L[k]+'. '+q.opts[oi]}))), 0.9);
  container.querySelectorAll('.opt').forEach(b => b.addEventListener('click', () => {
    const chosen = +b.dataset.oi, right = L.indexOf(q.ans), correct = chosen === right;
    container.querySelectorAll('.opt').forEach(x => { x.disabled = true; const oi = +x.dataset.oi;
      if (oi === right) x.classList.add('right'); else if (oi === chosen) x.classList.add('wrong'); });
    record(q.id, correct);
    const fb = container.querySelector('.fb');
    fb.innerHTML = `<p class="feedback ${correct?'ok':'no'}">${correct?esc(t().correct):esc(t().incorrect)+' <span lang="es">'+esc(q.opts[right])+'</span>'}</p>${typeof explHTML==='function'?explHTML(q):''}${reportHTML()}`;
    wireReport(fb, 'CCSE ' + q.id, q.q);
    onAnswer && onAnswer(correct);
    after && after(fb);
  }));
}

function tareaBars(mFn, sFn, labelFn){
  return `<div class="tareas">${TAREAS.map(x=>{
    const qs = Q.filter(q=>q.tarea===x.n), m = qs.filter(q=>mFn(q.id)).length, s = sFn ? qs.filter(q=>sFn(q.id)).length : 0;
    return `<div class="trow"><span class="tn">T${x.n}</span><span class="tt">${esc(tname(x.n))}</span><span class="tc">${labelFn?labelFn(x.n):m+'/'+qs.length}</span>
      <div class="track" aria-hidden="true"><i class="m" style="width:${m/qs.length*100}%"></i><i class="s" style="width:${s/qs.length*100}%"></i></div></div>`;}).join('')}</div>`;
}

// ---------- STUDY ----------
function studyPick(){
  const T_ = t();
  const wrong = Q.filter(q=>isWrong(q.id)).length;
  view.innerHTML = `<div class="stack">${backRow(ccseHub, 'CCSE')}<h1>${esc(T_.pickTitle)}</h1><p class="lede">${esc(T_.pickLede)}</p>
    <div class="actions"><button class="btn" id="go-wrong" type="button" ${wrong?'':'disabled'}>${esc(T_.wrong)}<small>${esc(T_.pending(wrong))}</small></button><button class="btn" id="go-browse" type="button">${esc(T_.browse)}<small>${T_.tarea} 1–5</small></button></div>
    <div class="tareas" style="gap:10px">
      <button class="btn" data-t="0" type="button">${esc(T_.allT)}<small>${esc(T_.masteredOf(Q.filter(q=>isMastered(q.id)).length, Q.length))}</small></button>
      ${TAREAS.map(x=>{const qs=Q.filter(q=>q.tarea===x.n);return `<button class="btn" data-t="${x.n}" type="button">${T_.tarea} ${x.n}. ${esc(tname(x.n))}<small>${esc(T_.masteredOf(qs.filter(q=>isMastered(q.id)).length, qs.length))} · ${esc(T_.inExam(x.exam))}</small></button>`}).join('')}
    </div></div>`;
  view.querySelectorAll('[data-t]').forEach(b => b.onclick = () => go(() => study({tarea:+b.dataset.t})));
  wireBack(ccseHub);
  $('#go-wrong').onclick = () => go(() => study({mode:'wrong'}));
  $('#go-browse').onclick = () => go(browse);
}
function nextFor(pool, prevId){
  const cand = pool.filter(q=>q.id!==prevId), list = cand.length ? cand : pool;
  const score = q => { const s = S.q[q.id]; if (!s) return 1; if (s.wrong) return 0; if (s.streak < MASTER) return 2; return 3; };
  const best = Math.min(...list.map(score)), tier = list.filter(q=>score(q)===best);
  if (best === 3){ tier.sort((a,b)=>S.q[a.id].last-S.q[b.id].last); return tier[0]; }
  return tier[Math.floor(Math.random()*tier.length)];
}
function study({tarea=0, mode='all'}){
  const T_ = t();
  const label = mode==='wrong' ? T_.wrong : tarea ? `${T_.tarea} ${tarea}` : T_.allT;
  let done = 0, okc = 0, prev = null;
  const poolFn = () => mode==='wrong' ? Q.filter(q=>isWrong(q.id)) : Q.filter(q=>!tarea || q.tarea===tarea);
  view.innerHTML = `<div class="stack">
    <div class="row"><span class="eyebrow">${esc(label)}</span><span class="sp"></span><span class="chip" id="sess">${esc(T_.zero)}</span></div>
    <section class="panel qcard" id="card"></section>
    <div class="row"><button class="btn" id="exit" type="button">${esc(T_.finish)}</button></div></div>`;
  $('#exit').onclick = () => go(ccseHub);
  function next(){
    const pool = poolFn();
    if (!pool.length){ $('#card').innerHTML = `<h2>${esc(T_.noErr)}</h2><p class="lede">${esc(T_.noErrLede(MASTER))}</p><div class="row"><button class="btn primary" id="h" type="button">${esc(T_.back)}</button></div>`; $('#h').onclick=()=>go(ccseHub); return; }
    const q = nextFor(pool, prev); prev = q.id;
    renderQuestion($('#card'), q, {
      onAnswer: c => { done++; if (c) okc++; $('#sess').textContent = T_.answered(okc, done); },
      after: fb => { fb.insertAdjacentHTML('beforeend', `<div class="row" style="margin-top:12px"><span class="sp"></span><button class="btn primary" id="nx" type="button">${esc(T_.next)}</button></div>`); const nx=$('#nx'); nx.onclick = next; nx.focus(); }
    });
  }
  next();
}

// ---------- EXAM ----------
let E = null;
function examStart(){
  const qs = [];
  TAREAS.forEach(x => qs.push(...shuffle(Q.filter(q=>q.tarea===x.n)).slice(0,x.exam)));
  E = {qs: qs.map(q=>q.id), ans: Array(qs.length).fill(null), i:0, end: Date.now()+EXAM_MIN*60000, done:false};
  saveCur({t:'ccse', E});
  examView();
}
function fmt(ms){ ms=Math.max(0,ms); const m=Math.floor(ms/60000), s=Math.floor(ms%60000/1000); return `${m}:${String(s).padStart(2,'0')}`; }
function examView(){
  stopTimer(); current = examView;
  const T_ = t();
  EXAM_ON = true; saveCur({t:'ccse', E});
  const tick = () => { const left = E.end-Date.now(); setMeta('⏱ '+fmt(left)); warnCheck(E.end, E); if (left<=0) examFinish(); };
  tick(); timer = setInterval(tick, 1000);
  const q = byId[E.qs[E.i]], answered = E.ans.filter(a=>a!==null).length, TT = trHTML(q, true);
  view.innerHTML = `<div class="stack">
    <div class="row"><span class="eyebrow">${esc(T_.examQ(E.i+1))}</span><span class="sp"></span><span class="chip">${esc(T_.answeredN(answered))}</span></div>
    <div class="dots" role="navigation">${E.qs.map((id,k)=>`<button type="button" data-k="${k}" class="${E.ans[k]!==null?'done':''} ${k===E.i?'cur':''}" aria-label="${k+1}">${k+1}</button>`).join('')}</div>
    <section class="panel qcard" id="ecard">
      <div class="qhead"><span class="chip t">${T_.tarea} ${q.tarea}</span><span class="sp"></span>${TT.btn}</div>
      <div class="qblock"><p class="qtext" lang="es">${esc(q.q)}</p>${TT.q}</div>
      <div class="opts">${q.opts.map((o,k)=>`<button type="button" class="opt ${E.ans[E.i]===k?'sel':''}" data-k="${k}" aria-pressed="${E.ans[E.i]===k}"><span class="l">${L[k]}</span><span class="ot"><span lang="es">${esc(o)}</span>${TT.o(k)}</span></button>`).join('')}</div>
    </section>
    <div class="row"><button class="btn" id="prev" type="button" ${E.i===0?'disabled':''}>${esc(T_.prev)}</button><span class="sp"></span>${E.i<24?`<button class="btn primary" id="nxt" type="button">${esc(T_.next)}</button>`:''}</div>
    <div class="row"><button class="btn" id="fin" type="button">${esc(T_.submit)}</button></div>
    <div id="fin-box"></div></div>`;
  wireTr($('#ecard'));
  view.querySelectorAll('.opts .opt').forEach(b => b.onclick = () => { E.ans[E.i] = +b.dataset.k; if (E.i<24) E.i++; examView(); });
  view.querySelectorAll('.dots button').forEach(b => b.onclick = () => { E.i = +b.dataset.k; examView(); });
  $('#prev').onclick = () => { E.i--; examView(); };
  const n = $('#nxt'); if (n) n.onclick = () => { E.i++; examView(); };
  $('#fin').onclick = () => {
    const left = 25 - E.ans.filter(a=>a!==null).length;
    if (!left) return examFinish();
    $('#fin-box').innerHTML = `<div class="confirm"><span>${esc(T_.leftWarn(left))}</span><span class="sp"></span><button class="btn" id="f-no" type="button">${esc(T_.keepGoing)}</button><button class="btn primary" id="f-yes" type="button">${esc(T_.submitShort)}</button></div>`;
    $('#f-no').onclick = () => $('#fin-box').innerHTML = '';
    $('#f-yes').onclick = examFinish;
  };
}
function examFinish(){
  if (!E || E.done) return; E.done = true; stopTimer(); clearCur(); EXAM_ON = false;
  let score = 0; const perT = {}, wrongIds = [];
  E.qs.forEach((id,k) => { const q = byId[id], c = E.ans[k] === L.indexOf(q.ans); if (c) score++; else wrongIds.push(id);
    perT[q.tarea] = perT[q.tarea] || [0,0]; perT[q.tarea][1]++; if (c) perT[q.tarea][0]++; record(id, c); });
  S.exams.push({at: Date.now(), score, perT, wrong: wrongIds}); save();
  examResult(S.exams.length-1);
}
function examResult(idx){
  current = () => examResult(idx);
  const T_ = t(), ex = S.exams[idx], score = ex.score, pass = score >= PASS;
  setMeta(T_.result);
  view.innerHTML = `<div class="stack">
    <section class="panel">
      <span class="eyebrow">${esc(T_.result)}</span>
      <div class="stat"><span class="verdict ${pass?'ok':'no'}">${esc(pass?T_.pass:T_.fail)}</span><b style="font-size:28px">${score}/25</b></div>
      <p class="lede">${esc(pass?T_.passMsg(PASS):T_.failMsg(PASS-score, PASS))} ${esc(T_.addedWrong)}</p>
      <div class="tareas">${TAREAS.map(x=>{const p=ex.perT[x.n];return `<div class="trow"><span class="tn">T${x.n}</span><span class="tt">${esc(tname(x.n))}</span><span class="tc">${p[0]}/${p[1]}</span><div class="track"><i class="m" style="width:${p[0]/p[1]*100}%"></i></div></div>`}).join('')}</div>
    </section>
    <div class="actions"><button class="btn primary" id="again" type="button">${esc(T_.again)}</button><button class="btn" id="rev" type="button">${esc(T_.wrong)}</button><button class="btn" id="rep" type="button">${esc(T_.myProgress)}</button><button class="btn" id="hub" type="button">CCSE</button></div>
    ${E && E.done && S.exams.length-1===idx ? `<h2>${esc(T_.review)}</h2><div class="blist">${E.qs.map((id,k)=>{const q=byId[id],a=E.ans[k],r=L.indexOf(q.ans),c=a===r,x=trOf(q);
      return `<div class="bitem"><span class="bm">${k+1} · ${T_.tarea} ${q.tarea} · ${q.id} · ${esc(c?T_.hit:T_.miss)}</span><span class="bq" lang="es">${esc(q.q)}</span>${x?`<span class="tr">${esc(x.q)}</span>`:''}
      ${!c&&a!==null?`<span class="bx" lang="es">${esc(q.opts[a])}</span>`:''}${a===null?`<span class="bm">${esc(T_.unanswered)}</span>`:''}<span class="ba" lang="es">${esc(q.opts[r])}</span>${x?`<span class="tr">${esc(x.opts[r])}</span>`:''}${!c&&EX[q.id]?`<span class="why">${esc(EX[q.id][EXL[S.set.lang] ?? 1])}</span>`:''}</div>`}).join('')}</div>` : ''}</div>`;
  $('#again').onclick = () => go(examStart);
  $('#rev').onclick = () => go(() => study({mode:'wrong'}));
  $('#rep').onclick = () => go(report);
  $('#hub').onclick = () => go(ccseHub);
}

// ---------- REPORT ----------
function report(){
  const T_ = t(), ex = S.exams, last5 = ex.slice(-5);
  const anyData = ex.length || Object.keys(S.q).length;
  const avg = last5.length ? (last5.reduce((a,e)=>a+e.score,0)/last5.length) : null;
  const best = ex.length ? Math.max(...ex.map(e=>e.score)) : null;
  const passed = ex.filter(e=>e.score>=PASS).length;
  const acc = TAREAS.map(x => { let ok=0, n=0; Q.filter(q=>q.tarea===x.n).forEach(q=>{const s=S.q[q.id]; if(s){ok+=s.ok;n+=s.seen;}}); return {t:x.n, ok, n, p: n ? Math.round(ok/n*100) : null}; });
  const unseen = Q.filter(q=>!isSeen(q.id)).length, wrong = Q.filter(q=>isWrong(q.id)).length;
  const missed = Q.map(q=>({q, m:(S.q[q.id]?.seen||0)-(S.q[q.id]?.ok||0)})).filter(x=>x.m>0).sort((a,b)=>b.m-a.m || (S.q[b.q.id].last-S.q[a.q.id].last)).slice(0,8);
  // readiness 0..3
  const mastPct = Q.filter(q=>isMastered(q.id)).length / Q.length;
  const last3 = ex.slice(-3), last3avg = last3.length ? last3.reduce((a,e)=>a+e.score,0)/last3.length : 0;
  let lvl = 0; if (mastPct > .25 || last3avg >= 12) lvl = 1; if ((mastPct > .6 || last3avg >= 17) && last3.length) lvl = 2; if (last3.length >= 3 && last3.every(e=>e.score>=18) && mastPct > .6) lvl = 3;
  const focus = [];
  const weak = acc.filter(a=>a.n>=5).sort((a,b)=>a.p-b.p)[0];
  if (weak && weak.p < 85) focus.push(T_.focusWeak(weak.t, weak.p));
  if (wrong) focus.push(T_.focusWrong(wrong));
  if (unseen) focus.push(T_.focusUnseen(unseen));
  if (ex.length < 3) focus.push(T_.focusMore); else if (lvl >= 2 && last3.every(e=>e.score>=PASS)) focus.push(T_.focusReady);
  view.innerHTML = `<div class="stack">${backRow(ccseHub, 'CCSE')}<h1>${esc(T_.myProgress)} · CCSE</h1>
    ${!anyData ? `<section class="panel"><p class="lede">${esc(T_.repEmpty)}</p><div class="row"><button class="btn primary" id="r-exam" type="button">${esc(T_.exam)}</button></div></section>` : `
    <section class="panel">
      <div class="row"><span class="eyebrow">${esc(T_.readiness)}</span></div>
      <div class="ready" role="img" aria-label="${esc(T_.ready[lvl])}">${T_.ready.map((r,i)=>`<span class="${i<=lvl?'on':''}">${esc(r)}</span>`).join('')}</div>
      <div class="kpis">
        <div><b>${ex.length}</b><span>${esc(T_.repExams)}</span></div>
        <div><b>${avg===null?'–':avg.toFixed(1)}</b><span>${esc(T_.repAvg)}</span></div>
        <div><b>${best===null?'–':best}</b><span>${esc(T_.repBest)}</span></div>
        <div><b>${ex.length?passed+'/'+ex.length:'–'}</b><span>${esc(T_.repPassRate)}</span></div>
      </div>
    </section>
    ${ex.length ? `<section class="panel"><h2>${esc(T_.repChart)}</h2>${chart(ex.slice(-15))}</section>` : ''}
    <section class="panel"><h2>${esc(T_.repFocus)}</h2><ul class="focus">${focus.map(f=>`<li>${esc(f)}</li>`).join('')}</ul></section>
    <section class="panel"><h2>${esc(T_.progress)}</h2><div class="stat"><b>${Q.filter(q=>isMastered(q.id)).length}</b><span>${esc(T_.mastered(Q.length))}</span></div>${tareaBars(id=>isMastered(id), id=>isSeen(id)&&!isMastered(id))}<div class="legend"><span><i style="background:var(--ok)"></i>${esc(T_.legendM(MASTER))}</span><span><i style="background:var(--ochre)"></i>${esc(T_.legendS)}</span></div></section>
    <section class="panel"><h2>${esc(T_.repByT)}</h2>
      <div class="tareas">${acc.map(a=>`<div class="trow"><span class="tn">T${a.t}</span><span class="tt">${esc(tname(a.t))}</span><span class="tc">${a.p===null?esc(T_.repNoData):a.p+'%'}</span><div class="track"><i class="${a.p===null?'':a.p>=80?'m':a.p>=60?'s':'b'}" style="width:${a.p||0}%"></i></div></div>`).join('')}</div>
    </section>
    ${missed.length ? `<section class="panel"><h2>${esc(T_.repMissed)}</h2><div class="blist">${missed.map(({q,m})=>{const x=trOf(q), r=L.indexOf(q.ans);
      return `<div class="bitem"><span class="bm">${q.id} · ${T_.tarea} ${q.tarea} · ${esc(T_.repMissedN(m))}</span><span class="bq" lang="es">${esc(q.q)}</span>${x?`<span class="tr">${esc(x.q)}</span>`:''}<span class="ba" lang="es">${esc(q.opts[r])}</span>${x?`<span class="tr">${esc(x.opts[r])}</span>`:''}</div>`}).join('')}</div>
      <div class="row"><button class="btn" id="r-wrong" type="button" ${wrong?'':'disabled'}>${esc(T_.wrong)}</button></div></section>` : ''}`}
    <p class="note">${esc(T_.backupMoved)}</p>
  </div>`;
  const re = $('#r-exam'); if (re) re.onclick = () => go(examStart);
  const rw = $('#r-wrong'); if (rw) rw.onclick = () => go(() => study({mode:'wrong'}));
  wireBack(ccseHub);
}
function chart(ex){
  const W = 360, H = 190, pl = 28, pr = 8, pt = 12, pb = 26, n = ex.length;
  const bw = Math.min(24, (W-pl-pr)/Math.max(n,1)*0.6), iw = W-pl-pr-bw-8;
  const x = i => pl + 4 + bw/2 + (n===1 ? iw/2 : i*iw/(n-1)), y = s => pt + (25-s)*(H-pt-pb)/25;
  const ticks = [0,5,10,15,20,25];
  return `<div class="chartwrap"><svg viewBox="0 0 ${W} ${H}" role="img" aria-label="${esc(t().repChart)}">
    ${ticks.map(v=>`<line x1="${pl}" x2="${W-pr}" y1="${y(v)}" y2="${y(v)}" class="grid"/><text x="${pl-6}" y="${y(v)+4}" class="ax" text-anchor="end">${v}</text>`).join('')}
    <line x1="${pl}" x2="${W-pr}" y1="${y(PASS)}" y2="${y(PASS)}" class="passline"/>
    <text x="${pl+4}" y="${y(PASS)-5}" class="ax pl" text-anchor="start">${esc(t().repPassLine)}</text>
    ${ex.map((e,i)=>`<rect x="${x(i)-bw/2}" y="${y(e.score)}" width="${bw}" height="${y(0)-y(e.score)}" rx="3" class="${e.score>=PASS?'bok':'bno'}"/><text x="${x(i)}" y="${y(e.score)-4}" class="ax v" text-anchor="middle">${e.score}</text><text x="${x(i)}" y="${H-8}" class="ax" text-anchor="middle">${new Date(e.at).toLocaleDateString(S.set.lang,{day:'numeric',month:'numeric'})}</text>`).join('')}
  </svg></div>`;
}
function backupHTML(){
  const T_ = t();
  return `<section class="panel"><h2>${esc(T_.backup)}</h2><p class="note">${esc(T_.backupLede)}</p>
    <div class="row"><button class="btn" id="b-copy" type="button">${esc(T_.copy)}</button><span id="b-msg" class="note" role="status"></span></div>
    <textarea id="b-code" rows="3" aria-label="${esc(T_.paste)}" placeholder="${esc(T_.paste)}"></textarea>
    <div class="row"><button class="btn" id="b-load" type="button">${esc(T_.import)}</button><span class="sp"></span><button class="linkbtn" id="reset" type="button">${esc(T_.reset)}</button></div>
    <div id="reset-box"></div></section>`;
}
function exportCode(){ const s = JSON.stringify({v:1, q:S.q, exams:S.exams, aud:S.aud, audRuns:S.audRuns, gram:S.gram, read:S.read, dq:S.dq, dmocks:S.dmocks}); return 'CCSE1.' + btoa(unescape(encodeURIComponent(s))); }
function wireBackup(){
  const T_ = t(), msg = $('#b-msg'), box = $('#b-code');
  $('#b-copy').onclick = () => {
    const code = exportCode(); box.value = code;
    const fail = () => { msg.textContent = T_.copyFail; box.focus(); box.select(); };
    try { navigator.clipboard.writeText(code).then(() => msg.textContent = T_.copied, fail); } catch(e){ fail(); }
  };
  $('#b-load').onclick = () => {
    try { const raw = box.value.trim(); if (!raw.startsWith('CCSE1.')) throw 0;
      const o = JSON.parse(decodeURIComponent(escape(atob(raw.slice(6)))));
      if (!o || typeof o.q !== 'object' || !Array.isArray(o.exams)) throw 0;
      S.q = o.q; S.exams = o.exams; S.aud = o.aud||{}; S.audRuns = o.audRuns||[]; S.gram = o.gram||{}; S.read = o.read||{}; S.dq = o.dq||{}; S.dmocks = o.dmocks||[]; save(); go(settings); setTimeout(()=>{ const m=$('#b-msg'); if (m) m.textContent = T_.imported; }, 0);
    } catch(e){ msg.textContent = T_.badCode; }
  };
  $('#reset').onclick = () => {
    $('#reset-box').innerHTML = `<div class="confirm"><span>${esc(T_.resetQ)}</span><span class="sp"></span><button class="btn" id="r-no" type="button">${esc(T_.cancel)}</button><button class="btn primary" id="r-yes" type="button">${esc(T_.del)}</button></div>`;
    $('#r-no').onclick = () => $('#reset-box').innerHTML = '';
    $('#r-yes').onclick = () => { const set = S.set; S = fresh(); S.set = set; save(); go(home); };
  };
}

// ---------- BROWSE ----------
function browse(){
  const T_ = t(); let tt = 0, term = '';
  view.innerHTML = `<div class="stack">${backRow(studyPick, T_.studyTopics)}<h1>${esc(T_.allQ)}</h1>
    <input type="search" id="q-search" placeholder="${esc(T_.search)}" aria-label="${esc(T_.search)}">
    <div class="filters" role="group"><button type="button" class="chip" data-t="0" aria-pressed="true">${esc(T_.all)}</button>${TAREAS.map(x=>`<button type="button" class="chip" data-t="${x.n}" aria-pressed="false">${T_.tarea} ${x.n}</button>`).join('')}</div>
    <p class="note" id="count"></p><div class="blist" id="list"></div></div>`;
  const norm = s => s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'');
  function draw(){
    const n = norm(term);
    const res = Q.filter(q => { if (tt && q.tarea!==tt) return false; if (!n) return true; const x = trOf(q); return norm(q.q+' '+q.opts.join(' ')+' '+q.id+(x?' '+x.q+' '+x.opts.join(' '):'')).includes(n); });
    $('#count').textContent = T_.count(res.length);
    $('#list').innerHTML = res.map(q=>{const x=trOf(q), r=L.indexOf(q.ans); return `<div class="bitem"><span class="bm">${q.id} · ${T_.tarea} ${q.tarea}${isMastered(q.id)?' · '+esc(T_.mastShort):isWrong(q.id)?' · '+esc(T_.failShort):''}</span><span class="bq" lang="es">${esc(q.q)}</span>${x&&S.set.tr!=='off'?`<span class="tr">${esc(x.q)}</span>`:''}<span class="ba" lang="es">${esc(q.opts[r])}</span>${x&&S.set.tr!=='off'?`<span class="tr">${esc(x.opts[r])}</span>`:''}</div>`}).join('');
  }
  wireBack(studyPick);
  $('#q-search').addEventListener('input', e => { term = e.target.value; draw(); });
  view.querySelectorAll('.filters .chip').forEach(b => b.onclick = () => { tt = +b.dataset.t; view.querySelectorAll('.filters .chip').forEach(x=>x.setAttribute('aria-pressed', x===b)); draw(); });
  draw();
}

// ---------- SETTINGS ----------
function settings(){
  const T_ = t(), s = S.set;
  const radio = (name, val, label, cur) => `<label class="radio"><input type="radio" name="${name}" id="${name}-${val}" value="${val}" ${cur===val?'checked':''}> ${esc(label)}</label>`;
  view.innerHTML = `<div class="stack"><h1>${esc(T_.setTitle)}</h1>
    <section class="panel"><h2>${esc(T_.setLang)}</h2><div class="radios">${Object.keys(I18N).map(l=>radio('lang', l, I18N[l].lang, s.lang)).join('')}</div></section>
    <section class="panel"><h2>${esc(T_.setTr)}</h2>${s.lang==='es'?`<p class="note">${esc(T_.trNoteEs)}</p>`:''}
      <div class="radios">${radio('tr','always',T_.trAlways,s.tr)}${radio('tr','tap',T_.trTap,s.tr)}${radio('tr','off',T_.trOff,s.tr)}</div>
      <label class="radio"><input type="checkbox" id="trexam" ${s.trExam?'checked':''}> ${esc(T_.setTrExam)}</label><p class="note">${esc(T_.setTrExamHint)}</p>
    </section>
    ${datesHTML()}
    ${backupHTML()}
    <div class="row"><button class="btn primary" id="s-done" type="button">${esc(T_.home)}</button></div></div>`;
  view.querySelectorAll('input[name=lang]').forEach(i => i.onchange = () => { S.set.lang = i.value; save(); chrome(); go(settings); });
  view.querySelectorAll('input[name=tr]').forEach(i => i.onchange = () => { S.set.tr = i.value; save(); });
  $('#trexam').onchange = e => { S.set.trExam = e.target.checked; save(); };
  wireBackup(); wireDates();
  $('#s-done').onclick = () => go(home);
}

$('#home-btn').onclick = () => guardLeave(home);
$('#set-btn').onclick = () => guardLeave(settings);
$('#lang').onchange = e => { S.set.lang = e.target.value; save(); chrome(); if (current === examView) examView(); else go(current); };
$('#lang').innerHTML = Object.keys(I18N).map(l=>`<option value="${l}">${l.toUpperCase()}</option>`).join('');
chrome();
if (S.set.langChosen) home(); else firstRun();
