class Basket {
  constructor(discountCodes) {
    this.discountCodes = discountCodes;
    this.products = [];
  }

  add(product) {
    this.products.push(product);
  }

  total() {
    let total = this.products.reduce((total, product) => {
      return (total += product.price);
    }, 0);
    return total;
  }
}

module.exports = Basket;
