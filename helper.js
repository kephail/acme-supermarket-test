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

module.exports = { discountCodes };
