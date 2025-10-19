
self.addEventListener('install', e => {
  e.waitUntil(caches.open('v2-static').then(c => c.addAll([
    '/', '/index.html', '/assets/styles.css', '/assets/script.min.js', '/assets/kinetic-title.min.js'
  ])));
});
self.addEventListener('fetch', e => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});
