// app.js
// ثبت Service Worker برای PWA
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js')
      .then(reg => console.log('Service Worker ثبت شد:', reg.scope))
      .catch(err => console.error('خطا در ثبت Service Worker:', err));
  });
}

// Example: Lazy-load صحیح تصاویر زمانی که به ویوپورت می‌رسند
document.addEventListener('DOMContentLoaded', () => {
  const lazyImages = document.querySelectorAll('img[data-src]');
  const config = {
    rootMargin: '0px 0px 50px 0px',
    threshold: 0.01
  };

  let observer = new IntersectionObserver((entries, self) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.getAttribute('data-src');
        img.removeAttribute('data-src');
        img.addEventListener('load', () => img.removeAttribute('data-loading'));
        self.unobserve(img);
      }
    });
  }, config);

  lazyImages.forEach(img => {
    observer.observe(img);
  });
});

// Optional: نمایش اعلان وضعیت آفلاین
window.addEventListener('offline', () => {
  console.warn('شما در وضعیت آفلاین هستید.');
});
window.addEventListener('online', () => {
  console.log('اتصال اینترنت بازگشته است.');
});
