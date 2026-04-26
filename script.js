document.querySelectorAll('.gallery-card').forEach(card => {
  const track = card.querySelector('.slider-track');
  const imgs = track.children;
  let index = 0;

  card.querySelector('.next').onclick = () => {
    index = (index + 1) % imgs.length;
    track.style.transform = `translateX(-${index * 280}px)`;
  };

  card.querySelector('.prev').onclick = () => {
    index = (index - 1 + imgs.length) % imgs.length;
    track.style.transform = `translateX(-${index * 280}px)`;
  };
});
// джава скрипт это язык который позволяет оперировать дом моделью// дом модель это dom tree
window.addEventListener("scroll", () => {

  let scroll = window.scrollY;
  let height = document.body.scrollHeight - window.innerHeight;

  let progress = (scroll / height) * 100;

  document.querySelector(".scroll-bar").style.width = progress + "%";

});
