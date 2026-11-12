document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    const href = this.getAttribute('href');

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});


const revealBtn = document.getElementById('reveal-email');
const revealBox = document.getElementById('email-reveal');
if (revealBtn && revealBox) {
  revealBtn.addEventListener('click', () => {
    const open = revealBox.classList.toggle('open');
    revealBtn.setAttribute('aria-expanded', String(open));
    revealBtn.title = open ? 'Click to hide' : 'Click to reveal';
  });
}
