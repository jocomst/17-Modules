//exporting module
console.log(`Exporting module`);

//blocking code
console.log('fetching users');
await fetch(`https://jsonplaceholder.typicode.com/users`);
console.log('Finished fetching users ');
//inside a module, all top level variables are private
const shippingCost = 10;
export const cart = [];

export const addToCart = function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} was added to the cart`);
};

const totalPrice = 237;
const totalQuantity = 23;

export { totalPrice, totalQuantity as qt };

export default function (product, quantity) {
  cart.push(product, quantity);
  console.log(`${quantity} ${product} was added to the cart`);
}
