const Basket = require("./Basket");
const Product = require("./Product");
const Discount = require("./discountCodes");

// Fake API data
const { getDiscountCodes } = require("./api");

let discountCodes = getDiscountCodes();

discountCodes = discountCodes.map(discountCode => {
  switch (discountCode.type) {
    case "bxgx":
      return new Discount.Bxgx(
        discountCode.code,
        discountCode.productCode,
        discountCode.options
      );
    case "bulkBuy":
      return new Discount.BulkBuy(
        discountCode.code,
        discountCode.productCode,
        discountCode.options
      );
    default:
      console.log(new Error("An unknown discount type was found"));
      return;
  }
});

const products = [
  new Product("FR1", "Fruit Tea", 311),
  new Product("SR1", "Strawberries", 500),
  new Product("FR1", "Fruit Tea", 311),
  new Product("SR1", "Strawberries", 500),
  new Product("CF1", "Coffee", 1123),
  new Product("SR1", "Strawberries", 500)
];

const basket = new Basket(discountCodes);
products.forEach(product => {
  basket.add(product);
});
const price = basket.total();
console.log(price);

console.log(basket.products);
