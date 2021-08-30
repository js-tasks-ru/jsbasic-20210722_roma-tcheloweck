export default class Cart {
  cartItems = []; // [product: {...}, count: N]

  constructor(cartIcon) {
    this.cartIcon = cartIcon;
  }

  addProduct(product) {
    // eslint-disable-next-line curly
    if (product == null || product == undefined) return;

    let isItemInList = false;

    this.cartItems.forEach((item, index) => {
      if (product === item.product) {
        this.cartItems[index].count++;
        isItemInList = true;
      }
    });

    if (!isItemInList) {
      let cartItem = {
        product: product, 
        count: 1
      };

      this.cartItems.push(cartItem);
    }
    
    this.onProductUpdate(this.cartItems[this.cartItems.length - 1]);
  }

  updateProductCount(productId, amount) {
    let i = 0;
    for (; i < this.cartItems.length; i++) {
      if (this.cartItems[i].product.id === productId) {
        this.cartItems[i].count += amount;
        break;
      }
    }

    // eslint-disable-next-line curly
    if (i === this.cartItems.length) return;

    if (!this.cartItems[i].count) {
      this.cartItems.splice(i, 1);
    }

    this.onProductUpdate(this.cartItems[i]);
  }

  isEmpty() {
    for (const item of this.cartItems) {
      return false;
    }
    return true;
  }

  getTotalCount() {
    return this.cartItems.reduce((sum, item) => sum + item.count, 0);
  }

  getTotalPrice() {
    return this.cartItems.reduce((sum, item) => sum + item.count * item.product.price, 0);
  }

  onProductUpdate(cartItem) {
    // реализуем в следующей задаче

    this.cartIcon.update(this);
  }
}

