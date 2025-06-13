// structured-data.js
// ماژول تولید JSON-LD برای Structured Data
(function() {
  function generateBreadcrumb() {
    return {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "خانه", "item": "https://example.com/" },
        { "@type": "ListItem", "position": 2, "name": "اخبار", "item": "https://example.com/news" },
        { "@type": "ListItem", "position": 3, "name": "۵۰ خبر مهم امروز", "item": "https://example.com/" }
      ]
    };
  }

  function generateFAQ() {
    return {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "وب‌سایت خبری چیست؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "یک پلتفرم آنلاین برای انتشار اخبار و گزارش‌های روز."
          }
        },
        {
          "@type": "Question",
          "name": "چرا اخبار روز مهم است؟",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "به‌روزرسانی دوره‌ای اخبار باعث آگاهی کاربران و بهبود سئو سایت می‌شود."
          }
        }
      ]
    };
  }

  // قرار دادن ساختار در head به صورت دینامیک
  document.addEventListener('DOMContentLoaded', () => {
    const head = document.querySelector('head');

    const breadcrumbScript = document.createElement('script');
    breadcrumbScript.type = 'application/ld+json';
    breadcrumbScript.text = JSON.stringify(generateBreadcrumb());
    head.appendChild(breadcrumbScript);

    const faqScript = document.createElement('script');
    faqScript.type = 'application/ld+json';
    faqScript.text = JSON.stringify(generateFAQ());
    head.appendChild(faqScript);
  });
})();