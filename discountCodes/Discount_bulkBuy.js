const Discount = require("./Discount");

class Discount_bulkBuy extends Discount {
  constructor(code, productCode, options) {
    super(code, productCode);
    this.buy = options.buy || 2;
    this.discount = options.discount || 0;
  }

  apply(product) {
    // TODO: apply 'bulk buy' logic in here
    console.log(`applying ${this.code} to ${product.name}`);
  }
}

module.exports = Discount_bulkBuy;
