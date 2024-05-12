import createItem from "../services/item.js";
import * as cartService from "../services/carItem.js";

const cart = [];

console.log("Welcome the cart of shopping from shopee! ")



const item1 = await createItem("carro de corrida", 50.0, 1);
const item2 = await createItem("avião", 33.5, 5);




await cartService.addItem(cart, item1);
await cartService.addItem(cart, item2);


await cartService.removeItem(cart, item2)
await cartService.displayCart(cart)
console.log('shopee cart total:')
await cartService.calculateTotal(cart);
