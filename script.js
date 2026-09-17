// ── Mobile nav ──
const hamburger = document.querySelector('.nav-hamburger');
const navLinks  = document.querySelector('.nav-links');

hamburger?.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

// ── Smooth scroll ──
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const href = this.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    const navH = document.querySelector('.nav')?.offsetHeight || 64;
    const top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top, behavior: 'smooth' });
  });
});

// ── Active nav highlight ──
const sections   = document.querySelectorAll('section[id]');
const navAnchors = document.querySelectorAll('.nav-links a[href^="#"]');

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navAnchors.forEach(a => a.classList.remove('active'));
      const active = document.querySelector(`.nav-links a[href="#${entry.target.id}"]`);
      active?.classList.add('active');
    }
  });
}, { rootMargin: '-40% 0px -55% 0px' });

sections.forEach(s => sectionObserver.observe(s));

// ── Scroll reveal ──
const revealEls = document.querySelectorAll(
  '.card, .step, .mode-card, .rule-card, .benefit-card, .spec-row, .stat-pill'
);

revealEls.forEach(el => el.classList.add('reveal'));

const revealObserver = new IntersectionObserver(entries => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 40);
      revealObserver.unobserve(entry.target);
    }
  });
}, { rootMargin: '0px 0px -60px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

// ── Contact form ──
document.getElementById('contactForm')?.addEventListener('submit', function (e) {
  e.preventDefault();
  const name    = document.getElementById('name').value;
  const email   = document.getElementById('email').value;
  const company = document.getElementById('company').value;
  const message = document.getElementById('message').value;

  const isEn    = document.documentElement.lang === 'en';
  const subject = encodeURIComponent(
    isEn ? 'HANALYST SmartFix — Demo Request' : 'HANALYST SmartFix — Pedido de Demo'
  );
  const body = encodeURIComponent(
    `${isEn ? 'Name' : 'Nome'}: ${name}\nEmail: ${email}\n${isEn ? 'Company' : 'Empresa'}: ${company}\n\n${message}`
  );

  window.location.href =
    `mailto:sap.sc.technology.coordination.portugal@inetum.com?subject=${subject}&body=${body}`;
});

// ── Active nav style injection ──
const style = document.createElement('style');
style.textContent = `.nav-links a.active { color: var(--accent) !important; }`;
document.head.appendChild(style);
