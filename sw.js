const CACHE = 'hr-system-v3.96';
const FILES = [
  '/hr/',
  '/hr/index.html',
  '/hr/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).catch(() => {})
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(cached => {
      // Network first สำหรับ HTML — ดึงใหม่เสมอ
      if(e.request.url.includes('index.html') || e.request.mode === 'navigate'){
        return fetch(e.request).catch(() => cached);
      }
      return cached || fetch(e.request);
    })
  );
});
