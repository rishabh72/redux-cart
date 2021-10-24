import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../store/product-slice';

const Product = ({ price, name, image, id }) => {
  const dispatch = useDispatch();
  const carts = useSelector((state) => state.products.cart);
  const itemInCart = carts.find((el) => el.id === id);

  const addToCartHandler = () => {
    dispatch(
      productsActions.addToCart({
        name,
        price,
        image,
        id,
      })
    );
  };

  const incrementHandler = () => {
    dispatch(
      productsActions.addToCart({
        name,
        price,
        image,
        id,
      })
    );
  };
  const decrementHandler = () => {
    dispatch(productsActions.removeCart(id));
  };

  return (
    <div className=' shadow-xl m-8 h-[105] w-72'>
      <div className='h-2/3'>
        <img
          src={image}
          alt=''
          className='
          w-full h-full object-cover 
        '
        />
      </div>
      <div className='px-4 py-2'>
        <div>
          <p className=' font-semibold my-1 capitalize text-xl'>{name}</p>
          <div className='prod__price my-1 '>${price}</div>
        </div>
        <div>
          {itemInCart ? (
            <div className='flex items-center justify-center '>
              <div
                onClick={incrementHandler}
                className='cursor-pointer h-8 w-8 
                 flex justify-center items-center
                rounded-full border border-black p-2'
              >
                +
              </div>
              <div className='mx-4'>{itemInCart.num}</div>
              <div
                onClick={decrementHandler}
                className='cursor-pointer h-8 w-8 
                flex justify-center items-center
               rounded-full border border-black p-2'
              >
                -
              </div>
            </div>
          ) : (
            <div className='flex justify-end items-center'>
              <button
                onClick={addToCartHandler}
                className=' rounded bg-black text-white px-4 py-2 shadow-sm '
              >
                Add To Cart
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
