function initCarousel() {
  let arrowRight = document.querySelector('.carousel__arrow_right');
  let arrowLeft = document.querySelector('.carousel__arrow_left');

  let carousel = document.querySelector('.carousel__inner');
  let slide = document.querySelector('.carousel__slide');

  let counterSlide = 0;
  arrowLeft.style.display = 'none';
  
  function changeSlide(event) {
    if (event.currentTarget === arrowLeft) {
      counterSlide--;
    } else if (event.currentTarget === arrowRight) {
      counterSlide++;
    }

    if (counterSlide >= 3) {
      arrowRight.style.display = 'none';
    } else if (counterSlide <= 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowRight.style.display = '';
      arrowLeft.style.display = '';
    }

    carousel.style.transform = `translateX(${-counterSlide * slide.offsetWidth}px)`;
  }

  arrowLeft.addEventListener('click', changeSlide);
  arrowRight.addEventListener('click', changeSlide);
}
