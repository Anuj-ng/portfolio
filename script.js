const slides = document.querySelectorAll('.slide');
const thumbs = document.querySelectorAll('.thumb');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;

function showSlide(i) {
  slides.forEach(s => s.classList.remove('active'));
  thumbs.forEach(t => t.classList.remove('active'));

  slides[i].classList.add('active');
  thumbs[i].classList.add('active');
  index = i;
}

prev.onclick = () => showSlide((index - 1 + slides.length) % slides.length);
next.onclick = () => showSlide((index + 1) % slides.length);

thumbs.forEach((thumb, i) => {
  thumb.onclick = () => showSlide(i);
});
