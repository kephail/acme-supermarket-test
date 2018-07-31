const Basket = require("../Basket");
const Product = require("../Product");

const { discountCodes } = require("../helper");

test("adds 2 fruit tea, 1 strawberries and 1 coffee", () => {
  const products = [
    new Product("FR1", "Fruit Tea", 311),
    new Product("SR1", "Strawberries", 500),
    new Product("FR1", "Fruit Tea", 311),
    new Product("CF1", "Coffee", 1123)
  ];

  const basket = new Basket(discountCodes);

  products.forEach(product => {
    basket.add(product);
  });

  expect(basket.total()).toBe(1934);
});

test("adds 2 fruit tea", () => {
  const products = [
    new Product("FR1", "Fruit Tea", 311),
    new Product("FR1", "Fruit Tea", 311)
  ];

  const basket = new Basket(discountCodes);

  products.forEach(product => {
    basket.add(product);
  });

  expect(basket.total()).toBe(311);
});

test("adds 3 strawberries and 1 fruit tea", () => {
  const products = [
    new Product("SR1", "Strawberries", 500),
    new Product("SR1", "Strawberries", 500),
    new Product("FR1", "Fruit Tea", 311),
    new Product("SR1", "Strawberries", 500)
  ];

  const basket = new Basket(discountCodes);

  products.forEach(product => {
    basket.add(product);
  });

  expect(basket.total()).toBe(1661);
});
