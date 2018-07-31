const Product = require("./Product");

class BasketProduct extends Product {
  constructor(sku, name, price) {
    super(sku, name, price);
    this.quantity = 1;
    this.discount = 0;
  }
}

module.exports = BasketProduct;
