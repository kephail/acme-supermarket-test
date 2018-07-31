const Basket = require("../Basket");

test("adds 2 fruit tea, 1 strawberries and 1 coffee", () => {
  const products = [
    // Fruit Tea,
    // Strawberries,
    // Fruit Tea,
    // Coffee
  ];

  const pricingRules = {};

  const basket = new Basket(pricingRules);

  products.forEach(product => {
    basket.add(product);
  });

  expect(basket.total()).toBe(1934);
});

test("adds 2 fruit tea", () => {
  const products = [
    // Fruit Tea,
    // Fruit Tea
  ];

  const pricingRules = {};

  const basket = new Basket(pricingRules);

  products.forEach(product => {
    basket.add(product);
  });

  expect(basket.total()).toBe(311);
});

test("adds 3 strawberries and 1 fruit tea", () => {
  const products = [
    // Strawberries,
    // Strawberries,
    // Fruit Tea,
    // Strawberries
  ];

  const pricingRules = {};

  const basket = new Basket(pricingRules);

  products.forEach(product => {
    basket.add(product);
  });

  expect(basket.total()).toBe(1661);
});
