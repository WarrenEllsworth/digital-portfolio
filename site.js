document.querySelectorAll('[data-note]').forEach(el => {
  const note = window.portfolioNotes?.[el.dataset.note];
  if (typeof note === 'string' && note.trim()) el.textContent = note;
});
// Content stays visible without JavaScript; animations are progressive enhancement.
if ('IntersectionObserver' in window && !matchMedia('(prefers-reduced-motion: reduce)').matches) {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  document.querySelectorAll('.project-reveal').forEach(el => observer.observe(el));
}
