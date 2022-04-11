// importing module
// import { addToCart, totalPrice as price, qt } from './shoppingCart.js';
console.log(`Importing module`);
// addToCart('bread', 5);
// console.log(price, qt);

// import * as ShoppingCart from './shoppingCart.js';

// ShoppingCart.addToCart('bread', 5);
// console.log(ShoppingCart.qt);

import add, { cart } from './shoppingCart.js';

add('pizza', 5);
add('bread', 5);
add('apples', 5);

console.log(cart);

// top level await only works in modules
// top level await blocks execution

// const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
// const data = await res.json();
// console.log(data);
// console.log('something');

const getLastPost = async function () {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();
  return { title: data.at(-1).title, text: data.at(-1).body };
};

const lastPost = await getLastPost();
console.log(lastPost);

const ShoppingCart2 = (function () {
  const cart = [];
  const shippingCost = 10;
  const totalPrice = 237;
  const totalQuantity = 23;

  const addToCart = function (product, quantity) {
    cart.push(product, quantity);
    console.log(`${quantity} ${product} was added to the cart`);
  };

  const orderStock = function (product, quantity) {
    console.log(`${quantity} ${product} ordered from supplier`);
  };

  return {
    addToCart,
    cart,
    totalPrice,
    totalQuantity,
  };
})();

ShoppingCart2.addToCart('apple', 4);
ShoppingCart2.addToCart('pizza', 4);
console.log(ShoppingCart2);

import cloneDeep from './node_modules/lodash-es/cloneDeep.js';

const state = {
  cart: [
    { product: 'bread', quantity: 5 },
    { product: 'bread', quantity: 5 },
  ],
  user: {
    loggedIn: true,
  },
};
const stateDeepClone = cloneDeep(state);
const stateClone = Object.assign({}, state);
state.user.loggedIn = false;
console.log(stateClone);
console.log(stateDeepClone);
