// Tiny static server for dist/ (used by `npm start` and the tests).
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';
const dist = join(fileURLToPath(new URL('..', import.meta.url)), 'dist');
const TYPES = {'.html':'text/html; charset=utf-8','.js':'text/javascript; charset=utf-8','.css':'text/css; charset=utf-8','.json':'application/json','.webmanifest':'application/manifest+json','.svg':'image/svg+xml','.png':'image/png','.ico':'image/x-icon','.woff2':'font/woff2','.txt':'text/plain; charset=utf-8'};
export function serve(port = 4173) {
  const server = createServer(async (req, res) => {
    let p = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
    if (p.endsWith('/')) p += 'index.html';
    try { const body = await readFile(join(dist, p)); res.writeHead(200, {'content-type': TYPES[extname(p)] || 'application/octet-stream'}); res.end(body); }
    catch { res.writeHead(404); res.end('not found'); }
  });
  return new Promise(r => server.listen(port, () => r(server)));
}
if (import.meta.url === `file://${process.argv[1]}`) serve(+process.env.PORT || 4173).then(() => console.log('http://localhost:' + (process.env.PORT || 4173)));
