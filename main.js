var tokenmocis = {
  distance: '30%',
  origin: 'bottom',
  opacity: 0,
};
var text = {
  opacity: 0,
  delay: 150,
};
var title = {
  opacity: 0,
  delay: 250,
  distance: '150%',
};
ScrollReveal().reveal('.tokenmocis-data-inner', tokenmocis);
ScrollReveal().reveal('#tokenmocies-first', { delay: 200 });
ScrollReveal().reveal('#tokenmocies-second', { delay: 300 });
ScrollReveal().reveal('#tokenmocies-third', { delay: 350 });
ScrollReveal().reveal('.timeline-section__header__p', text);
ScrollReveal().reveal('.timeline-section__header__buttons', text);
ScrollReveal().reveal('.timeline-section__header__h1', title);

window.onload = function () {
  document.querySelector('.hero-section__header__img').classList.add('launch');
};
