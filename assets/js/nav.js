(function () {
  document.addEventListener('DOMContentLoaded', function () {

    /* ── Mobile menu toggle ── */
    var btn = document.getElementById('menuBtn');
    var menu = document.getElementById('mobileMenu');
    if (btn && menu) {
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        var hidden = menu.classList.toggle('hidden');
        btn.innerHTML = hidden ? '&#9776;' : '&#10005;';
      });
      document.addEventListener('click', function (e) {
        if (!menu.classList.contains('hidden') && !menu.contains(e.target) && !btn.contains(e.target)) {
          menu.classList.add('hidden');
          btn.innerHTML = '&#9776;';
        }
      });
    }

    /* ── Active nav link ── */
    var page = window.location.pathname.split('/').pop() || 'index.html';
    if (page === '') page = 'index.html';
    document.querySelectorAll('[data-navpage]').forEach(function (a) {
      if (a.dataset.navpage === page) {
        a.style.backgroundColor = '#D9E58C';
        a.style.fontWeight = '700';
        a.style.transform = 'scale(1.05)';
      }
    });

    /* ── Scroll reveal ── */
    var reveals = document.querySelectorAll('.reveal');
    if ('IntersectionObserver' in window && reveals.length) {
      var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      reveals.forEach(function (el) { observer.observe(el); });
    } else {
      reveals.forEach(function (el) { el.classList.add('visible'); });
    }

    /* ── Toast helper ── */
    window.showToast = function (msg, duration) {
      var toast = document.getElementById('globalToast');
      if (!toast) {
        toast = document.createElement('div');
        toast.id = 'globalToast';
        toast.className = 'toast';
        document.body.appendChild(toast);
      }
      toast.textContent = msg;
      toast.classList.add('show');
      clearTimeout(toast._t);
      toast._t = setTimeout(function () { toast.classList.remove('show'); }, duration || 2500);
    };

    /* ── Animated counters ── */
    document.querySelectorAll('[data-count]').forEach(function (el) {
      var target = parseFloat(el.dataset.count);
      var suffix = el.dataset.suffix || '';
      var prefix = el.dataset.prefix || '';
      var duration = 1200;
      var startTime = null;
      function step(ts) {
        if (!startTime) startTime = ts;
        var progress = Math.min((ts - startTime) / duration, 1);
        var ease = 1 - Math.pow(1 - progress, 3);
        var current = Math.round(ease * target);
        el.textContent = prefix + current.toLocaleString('id-ID') + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }
      var obs = new IntersectionObserver(function (entries) {
        if (entries[0].isIntersecting) { requestAnimationFrame(step); obs.disconnect(); }
      }, { threshold: 0.5 });
      obs.observe(el);
    });

  });
})();
