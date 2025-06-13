// sw.js
const CACHE_NAME = 'site-cache-v1';
const STATIC_ASSETS = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/manifest.json',
];

// نصب Service Worker و کش کردن فایل‌های استاتیک
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(STATIC_ASSETS))
      .then(() => self.skipWaiting())
  );
});

// فعال‌سازی Service Worker و پاکسازی نسخه‌های قدیمی کش
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_NAME)
            .map(key => caches.delete(key))
      )
    ).then(() => self.clients.claim())
  );
});

// مدیریت درخواست‌ها: cache-first strategy برای استاتیک‌ها و fallback به شبکه
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        // ذخیره کپی در کش برای دفعات بعدی
        return caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    }).catch(() => {
      // در صورت خطا (مثلا آفلاین)، می‌توانید fallback صفحهٔ آفلاین برگردانید
      // return caches.match('/offline.html');
    })
  );
});
