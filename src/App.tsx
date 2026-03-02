import './index.css'
import products from './data/products (2).json'
import Product from './Product';
import { useCart } from './store';

function App() {
const {cart} = useCart();
  return (
    <>
    <p>in cart: {cart.length} products</p>
      {products.map(product => <Product product={product}/>)}
    </>
  )
}
export default App