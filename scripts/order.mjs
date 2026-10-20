// Script load order. Files share globals, so order matters.
export const JS_ORDER = [
  'i18n.js',                                   // interface strings (es, en, ru, uk)
  'aud.js', 'aud-b.js', 'v2-aud.js', 'v3-aud.js', 'v4-aud.js', // DELE listening content
  'read-a.js', 'read-b.js', 'v2-read.js', 'v2-read-b.js', 'v3-read.js', 'v4-read.js', // DELE reading content
  'aud-app.js',                                // speech synthesis + listening item renderer
  'dele.js', 'dele-app.js',                    // grammar content + views
  'flow.js',                                   // home, hubs, item tracking
  'engine.js',                                 // DELE tasks, mock exam, mistakes, progress
  'ws.js',                                     // writing and speaking
  'extras.js',                                 // plan, guide, resume, reports, explanations
  'more.js',                                   // about, progress file, voice help, spaced repetition, recorder
  'app.js'                                     // CCSE core, storage, settings, boot
];
