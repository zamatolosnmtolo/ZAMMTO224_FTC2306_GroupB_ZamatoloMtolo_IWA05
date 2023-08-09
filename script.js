// Costs of items 
const SHOES_COST = 300;
const TOYS_COST = 100;
const PENS_COST = 5;
const SHIRTS_COST = 150;
const BATTERIES_COST = 35;

/* Quantity of items selected:*/
const shoesQuantity = 1;
const batteriesQuantity = 2;
const toysQuantity = 5;
const pensQuantity = 0; /* no pens were selected*/
const shirtsQuantity = 0; /* no shirts were selected*/

// Calculate total cost of selected items:
const totalCost =
  SHOES_COST * shoesQuantity +
  TOYS_COST * toysQuantity +
  SHIRTS_COST * shirtsQuantity +
  BATTERIES_COST * batteriesQuantity +
  PENS_COST * pensQuantity; 

// Shipping costs and currency conditions;//
if (customerLocation === 'RSA') {
    shippingCost = 400;
    currencySymbol = 'R';
} else if (customerLocation === 'NAM') {
    shippingCost = 600;
    currencySymbol = 'USD';
} else {
    shippingCost = 800;
    currencySymbol = 'USD';
}

// Warning if user is in North Korea
if (customerLocation === 'NK') {
    console.log('Unfortunately we do not curently ship to the selected country');
} else {
    console.log('Total Price', currencySymbol, totalCost + shippingCost);
}

// Display a warning if shipping is free but there is more than 1 customer
if (shippingCost === 0 && customers > 1) {
    console.log('Free shipping only applies to single customer orders');

 // Check conditions for free shipping
if ((totalCost >= 1000 && customerLocation === 'RSA') || (totalCost >= 60 && customerLocation === 'NAM' && customers === 1)) {
    // Free shipping for total cost above 1000 in RSA or above 60 in NAM, and
    // only 1 customer
    shippingCost = 0;
}

// Set the value of customers and currencySymbol:
let customers = 1;
currencySymbol = null;
