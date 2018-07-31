const Discount = require("./Discount");

class Discount_bxgx extends Discount {
  constructor(code, productCode, options) {
    super(code, productCode);
    this.buy = options.buy || 1;
    this.get = options.get || 1;
  }

  apply(product) {
    if (product.quantity % (this.buy + this.get) === 0) {
      console.log(`Applying ${this.code} to ${product.name}`);
      product.discount += this.get * product.price;
    }
  }
}

module.exports = Discount_bxgx;
