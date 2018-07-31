const BasketProduct = require("./BasketProduct");

class Basket {
  constructor(discountCodes) {
    this.discountCodes = discountCodes || [];
    this.products = [];
  }

  add(product) {
    let addedProduct = this.products.find(p => p.sku === product.sku);

    if (!addedProduct) {
      addedProduct = new BasketProduct(
        product.sku,
        product.name,
        product.price
      );
      this.products.push(addedProduct);
    } else {
      addedProduct.quantity++;
    }

    this.checkDiscounts(addedProduct);
  }

  checkDiscounts(product) {
    const discount = this.discountCodes.find(
      d => d.productCode === product.sku
    );
    if (discount) {
      discount.apply(product);
    }
  }

  total() {
    let total = this.products.reduce((total, product) => {
      total += product.price * product.quantity;
      return total;
    }, 0);
    return total;
  }
}

module.exports = Basket;
