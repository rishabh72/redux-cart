import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ProductsList from '../components/ProductsList';
import { fetchProducts } from '../store/product-actions';

const Products = () => {
  const dispatch = useDispatch();
  const prod = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (prod.status === 'loading') {
    return (
      <div>
        <p>Loading...</p>
      </div>
    );
  }

  if (prod.status === 'completed' && prod.error) {
    return (
      <div>
        <p>Error {prod.error}!</p>
      </div>
    );
  }

  return (
    <div>
      <ProductsList list={prod.list} />
    </div>
  );
};

export default Products;
