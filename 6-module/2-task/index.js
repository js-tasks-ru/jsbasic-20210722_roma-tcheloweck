import createElement from '../../assets/lib/create-element.js';

export default class ProductCard {
  constructor(product) {
    this._id = product.id;

    this._elem = createElement(`
    <div class="card">
      <div class="card__top">
          <img src="/assets/images/products/${product.image}" class="card__image" alt="product">
          <span class="card__price">€${product.price.toFixed(2)}</span>
      </div>
      <div class="card__body">
          <div class="card__title">${product.name}</div>
          <button type="button" class="card__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
          </button>
      </div>
    </div>`);

    this._elem.addEventListener('click', this.addInList);
  }

  addInList = (event) => {
    let productAdd = new CustomEvent('product-add', 
      {
        detail: this._id,
        bubbles: true
      });

    this.elem.querySelector('.card__button')
      .dispatchEvent(productAdd);
  }

  get elem() {
    return this._elem;
  }
} 