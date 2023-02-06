import { useDispatch } from 'react-redux';
//import  {useNavigation}  from 'react-router-dom'; 
import product from '../data/products.json'
import { addToCart } from '../features/cartSlice';

export type Prod = {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
};

const productList = product.products
const Home = () => {
  const dispatch = useDispatch();
  //const navigate =useNavigation();

  const handleAddToCart = (p: any) => {
    dispatch(addToCart(p));
    // navigate('/cart');
    (window.location.reload as (cache: boolean) => void)(false)

  }

  return (<div className='home-container'>
    <h2>Products</h2>
    <div className='products'>
      {productList.map(p => <div key={p.id} className="product">
        <img src={p.image} alt={p.name} />
        <h3>{p.name}</h3>
        <p>{p.description}</p>

        <div className='details'>
          <h4>Price :</h4>
          <span className='price'>₹{p.price}</span>

        </div>

        <button onClick={() => handleAddToCart(p)}><a href='/cart'>Add To Cart</a></button>

      </div>)}

    </div>
  </div>
  );
}
console.log(product)
export default Home;