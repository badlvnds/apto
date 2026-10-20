// Script load order. Files share globals, so order matters.
// JS_CORE goes into app.*.js (loaded first). PACK_DELE is the DELE reading/listening content, loaded right after.
export const JS_CORE = [
  'i18n.js',                                   // interface strings (es, en, ru, uk)
  'aud-app.js',                                // speech synthesis + listening item renderer
  'dele.js', 'gram-b.js', 'dele-app.js',       // grammar content + views
  'flow.js',                                   // home, hubs, item tracking
  'engine.js',                                 // DELE tasks, mock exam, mistakes, progress (deleInit runs from the pack)
  'ws.js',                                     // writing and speaking
  'extras.js',                                 // plan, guide, resume, reports, explanations
  'more.js',                                   // about, progress file, voice help, spaced repetition, recorder
  'polish.js',                                 // appearance, answer labels, microcopy, optional plan, home shortcuts
  'vocab.js',                                  // DELE vocabulary cards
  'tools.js',                                  // writing hints, report by email, share, keyboard, install hint
  'mock-ws.js',                                // full DELE mock: writing + speaking parts
  'app.js'                                     // CCSE core, storage, settings, boot
];
export const PACK_DELE = [
  'aud.js', 'aud-b.js', 'v2-aud.js', 'v3-aud.js', 'v4-aud.js',
  'read-a.js', 'read-b.js', 'v2-read.js', 'v2-read-b.js', 'v3-read.js', 'v4-read.js'
];
export const JS_ORDER = [...JS_CORE, ...PACK_DELE];
