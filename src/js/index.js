const slider = document.querySelector('.slider');
const images = slider.querySelectorAll('img');

let currentImage = 0;

setInterval(() => {
  currentImage++;

  if (currentImage >= images.length) {
    currentImage = 0;
  }

  slider.style.backgroundImage = `url(${images[currentImage].src})`;
}, 1000);