// Prima la rete, così vedi sempre la versione aggiornata; la copia salvata serve solo senza connessione.
const CACHE='atlante-v12';
self.addEventListener('install',e=>self.skipWaiting());
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener('fetch',e=>{const r=e.request;if(r.method!=='GET'||new URL(r.url).origin!==location.origin)return;
 e.respondWith(fetch(r).then(res=>{if(res.ok&&!r.url.endsWith('.pdf')){const c=res.clone();caches.open(CACHE).then(ca=>ca.put(r,c));}return res;}).catch(()=>caches.match(r).then(m=>m||caches.match('./'))));});
