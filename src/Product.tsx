import './index.css'

import { useCart, type Product } from "./store";
export default function Product({ product }: { product: Product }) {
  const { cart, addToCart, removeFromCart } = useCart();

  function handleClick() {
    if (cart.includes(product)) {
      removeFromCart(product.id);
    } else {
      addToCart(product);
    }
  }
  return (
    <>
      <h2>{product.name}</h2>
      <button onClick={handleClick}>
        {cart.includes(product) ? "remove" : "add"}
      </button>
    </>
  );
}
