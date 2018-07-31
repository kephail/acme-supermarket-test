const Basket = require("./Basket");
const Product = require("./Product");

const pricingRules = {};

const products = [
  new Product("FR1", "Fruit Tea", 311),
  new Product("SR1", "Strawberries", 500),
  new Product("CF1", "Coffee", 1123)
];

const basket = new Basket(pricingRules);
products.forEach(product => {
  basket.add(product);
});
const price = basket.total();
console.log(price);
