// analytics.js
// پیکربندی Google Analytics 4 (GA4)
(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX','gtag');

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

// تنظیمات اولیه
gtag('config', 'G-XXXXXXXXXX', {
  'anonymize_ip': true,
  'cookie_flags': 'SameSite=None;Secure',
  'send_page_view': true
});

// Optional: تنظیم هدف‌ها (Events)
gtag('event', 'scroll_depth', {
  'event_category': 'engagement',
  'event_label': 'scroll',
  'value': 50
});

// Optional: ثبت رویداد کلیک CTA
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.cta-button').forEach(btn => {
    btn.addEventListener('click', () => {
      gtag('event', 'click', {
        'event_category': 'CTA',
        'event_label': btn.textContent.trim()
      });
    });
  });
});
