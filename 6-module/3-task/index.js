import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this._slides = slides;
    this._counterSlide = 0;

    this._elem = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>

        <div class="carousel__inner">
        </div>
      </div>`);

    for (const slide of slides) {
      let slideElem = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>`);

      this._elem.querySelector('.carousel__inner').append(slideElem);
    }

    this._elem.querySelector('.carousel__arrow_left')
      .style.display = 'none';

    this._elem.addEventListener('click', this.createEventChangeSlide);
    this._elem.querySelector('.carousel__arrow_right')
      .addEventListener('change', this.changeSlide);
    this._elem.querySelector('.carousel__arrow_left')
      .addEventListener('change', this.changeSlide);
  }


  createEventChangeSlide = (event) => {
    let customEvent = new CustomEvent('change', {
      detail: {
        elem: this._elem, 
        counter: this._counterSlide,
        amount: this._slides.length - 1
      },

      bubbles: true
    });

    this._elem.querySelector('.carousel__arrow_right').dispatchEvent(customEvent);
    this._elem.querySelector('.carousel__arrow_left').dispatchEvent(customEvent);
  }

  changeSlide(event) {
    let carousel = event.detail.elem.querySelector('.carousel__inner');
    let slide = event.detail.elem.querySelector('.carousel__slide');

    let arrowRight = event.detail.elem.querySelector('.carousel__arrow_right');
    let arrowLeft = event.detail.elem.querySelector('.carousel__arrow_left');

    if (event.currentTarget === arrowLeft) {
      event.detail.counter--;
    } else if (event.currentTarget === arrowRight) {
      event.detail.counter++;
    }

    if (event.detail.counter >= event.detail.amount) {
      arrowRight.style.display = 'none';
    } else if (event.detail.counter <= 0) {
      arrowLeft.style.display = 'none';
    } else {
      arrowRight.style.display = '';
      arrowLeft.style.display = '';
    }

    carousel.style.transform = `translateX(${-event.detail.counter * slide.offsetWidth}px)`;
  }

  get elem() {
    return this._elem;
  }
}

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
