import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsList from '../components/ProductsList';
import { fetchProducts } from '../store/product-actions';
import './ProductsScreen.css';

const Products = () => {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (prod.status === 'loading') {
    return (
      <div className='center'>
        <p className='center__text'>Loading...</p>
      </div>
    );
  }

  if (prod.status === 'completed' && prod.error) {
    return (
      <div className='center'>
        <p className='center__text'>Error {prod.error}!</p>
      </div>
    );
  }

  return (
    <div className='content'>
      <ProductsList list={prod.list} />
    </div>
  );
};

export default Products;
