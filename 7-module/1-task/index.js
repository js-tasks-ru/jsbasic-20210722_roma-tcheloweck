import createElement from '../../assets/lib/create-element.js';

export default class RibbonMenu {
  constructor(categories) {
    this.categories = categories;
    this.value = '';
    this._elem = createElement(`
      <div class="ribbon">
        
        <button class="ribbon__arrow ribbon__arrow_left">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>

        <nav class="ribbon__inner">
          <a href="#" class="ribbon__item ribbon__item_active" data-id="">All</a>
          <a href="#" class="ribbon__item" data-id="salads">Salads</a>
          <a href="#" class="ribbon__item" data-id="soups">Soups</a>
          <a href="#" class="ribbon__item" data-id="chicken-dishes">Chicken dishes</a>
          <a href="#" class="ribbon__item" data-id="beef-dishes">Beef dishes</a>
          <a href="#" class="ribbon__item" data-id="seafood-dishes">Seafood dishes</a>
          <a href="#" class="ribbon__item" data-id="vegetable-dishes">Vegetable dishes</a>
          <a href="#" class="ribbon__item" data-id="bits-and-bites">Bits and bites</a>
          <a href="#" class="ribbon__item" data-id="on-the-side">On the side</a>
        </nav>

        <button class="ribbon__arrow ribbon__arrow_right ribbon__arrow_visible">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </button>
      </div>
    `);


    this._inner = this._elem.querySelector('.ribbon__inner');

    this._arrowLeft = this._elem.querySelector('.ribbon__arrow_left');
    this._arrowRight = this._elem.querySelector('.ribbon__arrow_right');
    this._arrowLeft.addEventListener('click', () => this.scroll('left', this._inner));
    this._arrowRight.addEventListener('click', () => this.scroll('right', this._inner));
    
    this._inner.addEventListener("click", this.toggleCategory);
  }

  toggleCategory = (event) => {
    let category = event.target;

    let customEvent = new CustomEvent('ribbon-select', {
      detail: category.dataset.id,
      bubbles: true
    });

    if (event.target.tagName === 'A') {
      event.preventDefault();
      this._inner.querySelector('.ribbon__item_active').classList.remove('ribbon__item_active');
      event.target.classList.add('ribbon__item_active');
    }

    this._elem.dispatchEvent(customEvent);
  }

  scroll(dir, inner) {

    if (dir === "left") {
      inner.scrollBy(-350, 0);
    } else if (dir === "right") {
      inner.scrollBy(350, 0);
    }

    if (inner.scrollWidth - inner.scrollLeft - inner.clientWidth <= 1) {
      this._arrowRight.classList.remove('ribbon__arrow_visible');
    } else {
      this._arrowRight.classList.add('ribbon__arrow_visible');
    }
    
    if (inner.scrollLeft <= 1) {
      this._arrowLeft.classList.remove('ribbon__arrow_visible');
    } else {
      this._arrowLeft.classList.add('ribbon__arrow_visible');
    }
  }

  get elem() {
    return this._elem;
  }
}
