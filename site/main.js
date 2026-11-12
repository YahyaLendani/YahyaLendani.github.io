(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Entrances: labels print in, stamps land, rules draw.
  if ('IntersectionObserver' in window) {
    const io = new IntersectionObserver((entries) => {
      for (const e of entries) {
        if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
      }
    }, { threshold: 0.18, rootMargin: '0px 0px -6% 0px' });
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el));
  }
  document.querySelectorAll('.declare dd').forEach((dd) => {
    [...dd.children].forEach((s, n) => s.style.setProperty('--n', n));
  });

  // Route marker travels the shipments section with scroll.
  const section = document.querySelector('.shipments');
  const route = document.querySelector('.route');
  if (section && route) {
    let ticking = false;
    const update = () => {
      ticking = false;
      const r = route.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, (innerHeight * 0.5 - r.top) / r.height));
      route.style.setProperty('--p', p.toFixed(4));
    };
    const onScroll = () => { if (!ticking) { ticking = true; requestAnimationFrame(update); } };
    addEventListener('scroll', onScroll, { passive: true });
    addEventListener('resize', onScroll);
    update();
  }

  // Tape reacts to scroll speed.
  if (!reduce) {
    const tracks = [...document.querySelectorAll('.tape-track')];
    let last = scrollY, boost = 1;
    const tick = () => {
      const v = Math.abs(scrollY - last); last = scrollY;
      boost += ((1 + Math.min(v / 12, 5)) - boost) * 0.08;
      tracks.forEach((t) => t.getAnimations().forEach((a) => { a.playbackRate = boost; }));
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }

  // Warsaw local time.
  const clock = document.getElementById('clock');
  if (clock) {
    const fmt = new Intl.DateTimeFormat('en-GB', { timeZone: 'Europe/Warsaw', hour: '2-digit', minute: '2-digit' });
    const set = () => { const now = new Date(); clock.textContent = fmt.format(now); clock.dateTime = now.toISOString(); };
    set(); setInterval(set, 20000);
  }

  // Live scan: stars and last push for public repositories. Static values stay if this fails.
  const cards = [...document.querySelectorAll('[data-repo]')];
  if (cards.length) {
    fetch('https://api.github.com/users/YahyaLendani/repos?per_page=100', { headers: { Accept: 'application/vnd.github+json' } })
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((repos) => {
        const byName = new Map(repos.map((r) => [r.name, r]));
        for (const card of cards) {
          const repo = byName.get(card.dataset.repo);
          if (!repo) continue;
          const stars = card.querySelector('[data-stars]');
          const pushed = card.querySelector('[data-pushed]');
          if (stars && Number.isFinite(repo.stargazers_count)) stars.textContent = repo.stargazers_count;
          if (pushed && repo.pushed_at) pushed.textContent = repo.pushed_at.slice(0, 10);
        }
      })
      .catch(() => {});
  }
})();
