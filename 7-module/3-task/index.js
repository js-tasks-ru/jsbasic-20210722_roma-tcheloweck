import createElement from '../../assets/lib/create-element.js';
export default class StepSlider {
  constructor({ steps, value = 0 }) {
    this._steps = steps;
    this._value = value;

    this._elem = createElement(`
      <div class="slider">

        <!--Ползунок слайдера с активным значением-->
        <div class="slider__thumb">
          <span class="slider__value">${value}</span>
        </div>

        <!--Полоска слайдера-->
        <div class="slider__progress"></div>

        <!-- Шаги слайдера (вертикальные чёрточки) -->
        <div class="slider__steps"></div>
      </div>
    `);

    this.render();

    this._elem.addEventListener('click', this.step);
  }
  
  render() {
    for (let i = 0; i < this._steps; i++) {
      this._elem.querySelector('.slider__steps')
        .insertAdjacentHTML('beforeend', '<span></span>');
  
      if (i === this._value) {
        this._elem.querySelector('.slider__steps').lastElementChild
          .classList.add('slider__step-active');
      }
    }
  }

  step = (event) => {
    // Set step
    let steps = this._steps;

    let sections = steps - 1;
    let sectionWidth = Math.floor(this._elem.offsetWidth / sections);

    if (event.offsetX >= 0 && event.offsetX < sectionWidth / 2) {
      this._value = 0;
    } else if ((event.offsetX >= sections * sectionWidth - sectionWidth / 2) && 
               (event.offsetX <= sections * sectionWidth)) {
      this._value = steps - 1;
    }

    for (let i = 1; i < steps - 1; i++) {
      let left = i * sectionWidth;

      if ((event.offsetX >= left - (sectionWidth / 2)) && 
          // eslint-disable-next-line no-multi-spaces
          (event.offsetX <  left + (sectionWidth / 2))) {
        this._value = i;
      }
    }

    this._elem.querySelector('.slider__value').textContent = this._value;

    this._elem.querySelector('.slider__step-active').classList.remove('slider__step-active');
    this._elem.querySelector(`span:nth-child(${this._value + 1})`).classList.add('slider__step-active');

    let position = this._value * Math.round(100 / sections) + "%";
    this._elem.querySelector('.slider__thumb').style.left = position;
    this._elem.querySelector('.slider__progress').style.width = position;

    this._elem.dispatchEvent(new CustomEvent('slider-change', {
      detail: this._value,
      bubbles: true
    }));
  }

  get elem() {
    return this._elem;
  }
}
