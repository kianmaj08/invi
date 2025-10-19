const CACHE = 'wk-cache-v1';
const CORE = [
  '/index.html',
  '/assets/styles.css',
  '/assets/script.js',
  '/assets/kinetic-title.js',
  '/assets/geschichte.jpg',
  '/vergleich1.jpg',
  '/vergleich2.jpg',
  '/der_wiener_kongress.mp4',
  '/search.html',
  '/assets/content-index.json',
  '/timeline.html',
  '/quiz.html',
  '/glossar.html',
  '/quellen.html',
  '/impressum.html',
  '/datenschutz.html',
];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(CORE)));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k!==CACHE).map(k => caches.delete(k)))));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
