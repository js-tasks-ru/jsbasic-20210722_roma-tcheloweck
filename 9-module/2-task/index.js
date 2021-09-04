'use strict';

import Carousel from '../../6-module/3-task/index.js';
import slides from '../../6-module/3-task/slides.js';

import RibbonMenu from '../../7-module/1-task/index.js';
import categories from '../../7-module/1-task/categories.js';

import StepSlider from '../../7-module/4-task/index.js';
import ProductsGrid from '../../8-module/2-task/index.js';

import CartIcon from '../../8-module/1-task/index.js';
import Cart from '../../8-module/4-task/index.js';

export default class Main {

  constructor() {
  }

  async render() {
    return new Promise((resolve, reject) => {
      let carousel = new Carousel(slides);
      document.querySelector('[data-carousel-holder]').append(carousel.elem);

      let ribbonMenu = new RibbonMenu(categories);
      document.querySelector('[data-ribbon-holder]').append(ribbonMenu.elem);

      let slider = new StepSlider(5, 3);
      document.querySelector('[data-slider-holder]').append(slider.elem);

      let cartIcon = new CartIcon();
      document.querySelector('[data-cart-icon-holder]').append(cartIcon.elem);

      let cart = new Cart(cartIcon);

      let products = await fetch('products.json', { method: 'POST' })
        .then(response => JSON.parse(response))
        .catch(console.log('Ошибка при получении товаров с сервера!'));
    
      let grid = new ProductsGrid(products);
      document.querySelector('[data-products-grid-holder]').append(grid.elem);

    });
  }
}
