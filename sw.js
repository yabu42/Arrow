/* ARROW : fonctionnement hors connexion.
   Pages : réseau d'abord (pour recevoir les mises à jour), sinon la copie gardée.
   Le reste (icônes, polices, voix) : copie gardée d'abord. */
const CACHE='arrow-v5';
const CORE=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png','./apple-touch-icon.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request;if(r.method!=='GET')return;
  /* comptes et sauvegarde (Supabase) : toujours en direct, jamais en cache */
  const u=new URL(r.url);if(u.origin!==self.location.origin&&!/fonts\.(googleapis|gstatic)\.com$/.test(u.host))return;
  /* liste des voix : toujours demander la dernière version */
  if(/voix\.json$/.test(new URL(r.url).pathname)){e.respondWith(fetch(r.url,{cache:'no-store'}).then(res=>{const copy=res.clone();caches.open(CACHE).then(c=>c.put(r,copy));return res}).catch(()=>caches.match(r)));return}
  if(r.mode==='navigate'){
    /* une requête de navigation ne peut pas recevoir d'options : on redemande l'adresse elle-même */
    e.respondWith(fetch(r.url,{cache:'no-store',credentials:'same-origin'}).then(res=>{if(res.ok){const copy=res.clone();caches.open(CACHE).then(c=>c.put('./index.html',copy))}return res}).catch(()=>caches.match('./index.html')));return}
  e.respondWith(caches.match(r).then(hit=>hit||fetch(r).then(res=>{if(res.ok||res.type==='opaque'){const copy=res.clone();caches.open(CACHE).then(c=>c.put(r,copy))}return res})));
});
