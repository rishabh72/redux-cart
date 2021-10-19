import { useDispatch, useSelector } from 'react-redux';
import { productsActions } from '../store/product-slice';
import './Product.css';

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
    <div className='prod'>
      <div className='prod__img-box'>
        <img src={image} alt='' className='prod__img' />
      </div>
      <div className='prod__content'>
        <div className='prod__row'>
          <p className='prod__title'>{name}</p>
          <div className='prod__price'>${price}</div>
        </div>
        <div className='prod__right-align'>
          {itemInCart ? (
            <div className='prod__count'>
              <div onClick={incrementHandler} className='prod__count-symbol'>
                +
              </div>
              <div className='prod__count-num'>{itemInCart.num}</div>
              <div onClick={decrementHandler} className='prod__count-symbol'>
                -
              </div>
            </div>
          ) : (
            <button onClick={addToCartHandler} className='prod__btn '>
              Add To Cart
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Product;
