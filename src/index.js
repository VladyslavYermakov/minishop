import { products } from "./js/data";
import { renderItem } from "./js/render";
import { initCart } from "./js/cart";
import { renderCart } from "./js/cart"

renderCart()
renderItem(products)
initCart(products)