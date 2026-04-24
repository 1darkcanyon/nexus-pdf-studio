// NEXUS PDF Studio Pro — Service Worker
// Offline-first caching strategy

const CACHE = 'nexus-pdf-v1';
const CORE = [
  '/',
  '/index.html',
  'https://fonts.googleapis.com/css2?family=Rajdhani:wght@400;600;700&family=IBM+Plex+Mono:wght@400;500&family=Cinzel:wght@400;700&family=Bebas+Neue&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js',
  'https://cdnjs.cloudflare.com/ajax/libs/pdf-lib/1.17.1/pdf-lib.min.js'
];

// Install — cache core assets
self.addEventListener('install', ev => {
  ev.waitUntil(
    caches.open(CACHE).then(cache => {
      // Cache local files first, CDN files best-effort
      return cache.addAll(['/', '/index.html']).then(() => {
        return Promise.allSettled(CORE.slice(2).map(url => cache.add(url)));
      });
    }).then(() => self.skipWaiting())
  );
});

// Activate — clean old caches
self.addEventListener('activate', ev => {
  ev.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch — cache-first for CDN, network-first for app files
self.addEventListener('fetch', ev => {
  const url = ev.request.url;

  // CDN assets: cache-first (they never change)
  if (url.includes('cdnjs.cloudflare.com') || url.includes('fonts.googleapis.com') || url.includes('fonts.gstatic.com')) {
    ev.respondWith(
      caches.match(ev.request).then(cached => {
        if (cached) return cached;
        return fetch(ev.request).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(ev.request, clone));
          return res;
        }).catch(() => new Response('', { status: 503 }));
      })
    );
    return;
  }

  // App files: network-first, fallback to cache
  if (url.startsWith(self.location.origin)) {
    ev.respondWith(
      fetch(ev.request).then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(ev.request, clone));
        return res;
      }).catch(() => caches.match(ev.request))
    );
  }
});
