const discountCodes = [
  {
    id: 1,
    code: "b1g1",
    productCode: "FR1",
    type: "bxgx",
    options: {
      buy: 1,
      get: 1
    }
  },
  {
    id: 2,
    code: "cooSpecial",
    productCode: "SR1",
    type: "bulkBuy",
    options: {
      type: "fixedDiscount",
      buy: 3,
      discount: 50
    }
  }
];

function getDiscountCodes() {
  return discountCodes;
}

module.exports = { getDiscountCodes };
