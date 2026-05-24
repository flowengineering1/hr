const CACHE = 'hr-v4.30';
const STATIC = [
  '/hr/',
  '/hr/index.html',
  '/hr/manifest.json',
  '/hr/sw.js'
];

// Install — cache static files
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(STATIC))
      .catch(() => {})
  );
  self.skipWaiting();
});

// Activate — delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch — Network First for HTML, Cache First for assets
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  
  // Network first สำหรับ HTML และ API calls
  if (e.request.mode === 'navigate' || url.pathname.endsWith('.html')) {
    e.respondWith(
      fetch(e.request)
        .then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
          return res;
        })
        .catch(() => caches.match(e.request))
    );
    return;
  }
  
  // Cache first สำหรับ assets
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
