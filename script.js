/**
 * Saurabh Singh – Portfolio JavaScript
 * Features: nav scroll behavior, mobile menu, scroll reveal
 */

/* ── Nav: scroll state ─────────────────────────── */
const nav = document.getElementById('nav');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 20);
}, { passive: true });

/* ── Mobile hamburger ──────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const navMobile  = document.getElementById('navMobile');

hamburger.addEventListener('click', () => {
  navMobile.classList.toggle('open');
});

// Close mobile menu on link click
navMobile.querySelectorAll('a').forEach(a => {
  a.addEventListener('click', () => navMobile.classList.remove('open'));
});

/* ── Scroll reveal ─────────────────────────────── */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      revealObserver.unobserve(entry.target); // animate once
    }
  });
}, {
  threshold: 0.12,
  rootMargin: '0px 0px -40px 0px'
});

revealEls.forEach(el => revealObserver.observe(el));

/* ── Active nav link highlight ─────────────────── */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const sectionObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      navLinks.forEach(link => {
        link.style.color = link.getAttribute('href') === `#${entry.target.id}`
          ? 'var(--accent)'
          : '';
      });
    }
  });
}, { threshold: 0.4 });

sections.forEach(s => sectionObserver.observe(s));
