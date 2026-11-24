// Nav toggle: Work / Info
const navWork = document.getElementById('nav-work');
const navInfo = document.getElementById('nav-info');

function setActiveNav(el) {
  document.querySelectorAll('.nav-toggle').forEach(t => t.classList.remove('active'));
  el.classList.add('active');
}

navWork.addEventListener('click', e => {
  e.preventDefault();
  setActiveNav(navWork);
  const projects = document.getElementById('projects');
  if (projects) projects.scrollIntoView({ behavior: 'smooth' });
});

navInfo.addEventListener('click', e => {
  e.preventDefault();
  setActiveNav(navInfo);
  const footer = document.getElementById('footer');
  if (footer) footer.scrollIntoView({ behavior: 'smooth' });
});

// Mobile menu toggle
const menuBtn = document.getElementById('mobile-menu-btn');
const popup = document.getElementById('mobile-popup');

if (menuBtn && popup) {
  menuBtn.addEventListener('click', () => {
    popup.classList.toggle('open');
  });

  // Close on outside click
  document.addEventListener('click', e => {
    if (!popup.contains(e.target) && !menuBtn.contains(e.target)) {
      popup.classList.remove('open');
    }
  });
}

// Smooth reveal on scroll for project cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.project-card-outline').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(40px)';
  card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(card);
});
