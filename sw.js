// sw.js - Service Worker

// You will need 3 event listeners:
//   - One for installation
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('/sw.js').then(function (registration) {
            // Registration was successful
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
        }, function (err) {
            // registration failed :(
            console.log('ServiceWorker registration failed: ', err);
        });
    });
}
let CACHE_NAME = 'http://127.0.0.1:5500/#default';
let urlsToCache = [
    '/',
    '/components/entry-page.js',
    '/components/-entry.js',
    '/style.css',
    '/scripts/router.js',
    '/scripts/script.js'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function (cache) {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
    );
});
//   - One for activation ( check out MDN's clients.claim() for this step )
//   - One for fetch requests
