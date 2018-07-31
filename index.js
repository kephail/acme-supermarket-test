const Basket = require("./Basket");

const pricingRules = {};
const product = {};

const basket = new Basket(pricingRules);
basket.add(product);
const price = basket.total();
console.log(price);
