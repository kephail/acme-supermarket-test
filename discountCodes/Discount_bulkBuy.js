const Discount = require("./Discount");

class Discount_bulkBuy extends Discount {
  constructor(code, productCode, options) {
    super(code, productCode);
    this.buy = options.buy || 2;
    this.discount = options.discount || 0;
  }

  apply(product) {
    if (product.quantity >= this.buy) {
      console.log(`Applying ${this.code} to ${product.name}`);
      product.discount = product.quantity * this.discount;
    }
  }
}

module.exports = Discount_bulkBuy;
