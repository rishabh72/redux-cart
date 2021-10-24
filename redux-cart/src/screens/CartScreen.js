import { useSelector } from 'react-redux';
import ProductsList from '../components/ProductsList';

const Cart = () => {
  const cartList = useSelector((state) => state.products.cart);
  const total = cartList.reduce((total, item) => {
    const sum = parseFloat(item.totalPrice) + total;
    return sum;
  }, 0);

  if (cartList.length === 0) {
    return (
      <div>
        <div>No Items in Cart!</div>
      </div>
    );
  }
  return (
    <div className='content'>
      {total > 0 && (
        <div className=' max-w-sm w-full rounded justify-between mx-auto flex text-white bg-blue-500 px-5 py-3'>
          <div className=' text-xl'>Total Amount</div>
          <div className=' text-xl'>${total}</div>
        </div>
      )}
      <ProductsList list={cartList} />
    </div>
  );
};

export default Cart;
