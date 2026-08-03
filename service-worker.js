// Service Worker für Cantusprügel der SAT
// Cache-Version ist an die App-Version gebunden — bei Update wird alter Cache gelöscht
const CACHE_NAME = 'canten-v10.8';
const URLS_TO_CACHE = [
    '/SAT-Canten/',
    '/SAT-Canten/index.html',
];
const LIVE_PATHS = new Set(URLS_TO_CACHE);

self.addEventListener('install', (event) => {
    event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(URLS_TO_CACHE)));
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) =>
            Promise.all(keys
                .filter((key) => key.startsWith('canten-v') && key !== CACHE_NAME)
                .map((key) => caches.delete(key)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
    const url = new URL(event.request.url);
    if (url.origin !== self.location.origin) return;
    if (!LIVE_PATHS.has(url.pathname)) return;

    event.respondWith(
        caches.open(CACHE_NAME).then(async (cache) => {
            try {
                const response = await fetch(event.request);
                if (response && response.status === 200) {
                    await cache.put(event.request, response.clone());
                }
                return response;
            } catch (error) {
                return cache.match(url.pathname, { ignoreSearch: true });
            }
        })
    );
});
