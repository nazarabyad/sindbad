const CACHE_NAME = 'sindbad-v23';
const urlsToCache = [
  '/sindbad/',
  '/sindbad/index.html',
  '/sindbad/manifest.json',
  '/sindbad/icon-192.png',
  '/sindbad/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
