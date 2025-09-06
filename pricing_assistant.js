// Coding Challenge 02a

let productName = "Vacuuum Cleaner";
let costPerUnit = 449.99;
let basePrice = 499.99;
let discountRate = 0.1;
let salesTaxRate = 0.05;
let fixedMonthlyCosts = 1999.99;

let discountedPrice = basePrice * (1 - discountRate);
let finalPriceWithTax  = discountedPrice * (1 + salesTaxRate);
let profitPerUnit = finalPriceWithTax - costPerUnit;
let breakEvenUnits = Math.ceil(fixedMonthlyCosts / profitPerUnit);
let isProfitablePerUnit = profitPerUnit > 0;

console.log("Product name:", productName);
console.log("Discounted price (before tax): $", discountedPrice.toFixed(2));
console.log("Final price with tax: $", finalPriceWithTax.toFixed(2));
console.log("Profit per unit: $", profitPerUnit.toFixed(2));
console.log("Break-even units: ", breakEvenUnits);
console.log("Per-unit profitablity:", isProfitablePerUnit)