import createElement from '../../assets/lib/create-element.js';
import ProductCard from '../../6-module/2-task/index.js';

export default class ProductGrid {
  constructor(products) {
    this.products = products;
    this.filters = {
      noNuts: false, // true/false
      vegeterianOnly: false, // true/false
      maxSpiciness: 4, // числа от 0 до 4
      category: ''
    };

    this.render();
  }

  render() {
    this._elem = createElement(`
      <div class="products-grid">
        <div class="products-grid__inner">
          
        </div>
      </div>
    `);
  }

  updateFilter(filters) {
    Object.assign(this.filters, filters);

    let filteredArray = this.products.filter(item => {
      return this.filters.noNuts === Boolean(item['nuts']) &&
              this.filters.vegeterianOnly === Boolean(item['vegeterian']) &&
              this.filters.maxSpiciness >= item['spiciness'];
    });

    if (this.filters.category) {
      filteredArray = filteredArray.filter(item => this.filters.category === item['category']);
    }
    
    let productsGrid = this._elem.querySelector('.products-grid__inner');
    productsGrid.innerHTML = '';

    filteredArray.forEach(element => {
      let productCard = new ProductCard(element);
      productsGrid.append(productCard.elem);
    });
  }

  get elem() {
    return this._elem;
  }
}
