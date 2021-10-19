import { useSelector } from 'react-redux';
import ProductsList from '../components/ProductsList';
import './CartScreen.css';

const Cart = () => {
  const cartList = useSelector((state) => state.products.cart);
  const total = cartList.reduce((total, item) => {
    const sum = parseFloat(item.totalPrice) + total;
    return sum;
  }, 0);

  if (cartList.length === 0) {
    return (
      <div className='center'>
        <div className='center__text'>No Items in Cart!</div>
      </div>
    );
  }
  return (
    <div className='content'>
      {total > 0 && (
        <div className='total'>
          <div className='total__text'>Total Amount</div>
          <div className='total__text'>${total}</div>
        </div>
      )}
      <ProductsList list={cartList} />
    </div>
  );
};

export default Cart;
