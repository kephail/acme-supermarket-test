const Discount = require("./Discount");

class Discount_bxgx extends Discount {
  constructor(code, productCode, options) {
    super(code, productCode);
    this.buy = options.buy || 1;
    this.get = options.get || 1;
  }

  apply(product) {
    // TODO: apply 'buy x get x' logic in here
    console.log(`applying ${this.code} to ${product.name}`);
  }
}

module.exports = Discount_bxgx;
