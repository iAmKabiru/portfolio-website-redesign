'use strict';

const menuButton = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('#mobile-nav');

function setMobileMenu(open) {
  if (!menuButton || !mobileMenu) return;
  menuButton.setAttribute('aria-expanded', String(open));
  menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuButton.classList.toggle('menu-open', open);
  mobileMenu.hidden = !open;
  document.body.classList.toggle('mobile-menu-active', open);
}

menuButton?.addEventListener('click', () => setMobileMenu(menuButton.getAttribute('aria-expanded') !== 'true'));
mobileMenu?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMobileMenu(false)));
window.addEventListener('keydown', e => { if (e.key === 'Escape') setMobileMenu(false); });
window.addEventListener('resize', () => { if (window.innerWidth > 920) setMobileMenu(false); });

const filters = [...document.querySelectorAll('[data-filter]')];
const cards = [...document.querySelectorAll('.project-card')];
filters.forEach(button => button.addEventListener('click', () => {
  const chosen = button.dataset.filter;
  filters.forEach(b => {
    const active = b === button;
    b.classList.toggle('active', active);
    b.setAttribute('aria-pressed', String(active));
  });
  cards.forEach(card => {
    const visible = chosen === 'all' || card.dataset.category.split(' ').includes(chosen);
    card.hidden = !visible;
  });
}));

const projects = {
  schooltry: {
    eyebrow: '01 / APPLIED AI · EDTECH',
    title: 'SchoolTry AI',
    description: 'Building intelligent learning experiences at the intersection of education platforms and applied AI.',
    work: 'Work across education technology includes scalable application backends, LLM-assisted user experiences, retrieval-augmented workflows, service performance, and cloud delivery. The goal: practical intelligence that makes everyday learning and support more useful.',
    tags: ['Python', 'Django', 'LangChain', 'RAG', 'AWS']
  },
  doyarbank: {
    eyebrow: '02 / FINTECH · BACKEND',
    title: 'Doyarbank',
    description: 'Reliable financial infrastructure built around trust, performance, and carefully managed risk.',
    work: 'Backend engineering across digital wallet, savings, payment, and lending workflows. The work draws on secure API design, transaction handling, data modeling, and predictive systems to support financial products and operational visibility.',
    tags: ['Python', 'Backend APIs', 'Financial Systems', 'Risk Modeling']
  },
  planta: {
    eyebrow: '03 / AGROTECH · DATA SYSTEMS',
    title: 'Planta Agrotech',
    description: 'Connecting agriculture, software platforms, and data-informed decisions.',
    work: 'Engineering contributions to farm management systems, tenant-aware databases, external weather and soil services, and data-driven crop insights. The platform work integrates agricultural operations with scalable backend architecture.',
    tags: ['Django', 'PostgreSQL', 'API Integrations', 'Data Engineering']
  }
};

const dialog = document.querySelector('#project-dialog');
const closeDialog = dialog?.querySelector('.dialog-close');
let lastTrigger = null;

document.querySelectorAll('[data-open]').forEach(button => button.addEventListener('click', () => {
  const project = projects[button.dataset.open];
  if (!project || !dialog) return;
  lastTrigger = button;
  document.querySelector('#dialog-overline').textContent = project.eyebrow;
  document.querySelector('#dialog-title').textContent = project.title;
  document.querySelector('#dialog-description').textContent = project.description;
  document.querySelector('#dialog-work').textContent = project.work;
  document.querySelector('#dialog-tags').replaceChildren(...project.tags.map(tag => {
    const node = document.createElement('span');
    node.textContent = tag;
    return node;
  }));
  dialog.showModal();
}));

closeDialog?.addEventListener('click', () => dialog.close());
dialog?.addEventListener('click', e => { if (e.target === dialog) dialog.close(); });
dialog?.addEventListener('close', () => lastTrigger?.focus());
document.querySelector('#year').textContent = new Date().getFullYear();

// Reveal sections only when motion is permitted, with content visible by default.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const blocks = document.querySelectorAll('.project-card, .capability, .experience-item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        observer.unobserve(entry.target);
      }
    });
  }, { rootMargin: '0px 0px 30px 0px', threshold: 0.04 });
  blocks.forEach(block => { block.classList.add('will-reveal'); observer.observe(block); });
}
