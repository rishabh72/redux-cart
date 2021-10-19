import { productsActions } from './product-slice';

export const fetchProducts = () => {
  return async (dispatch) => {
    dispatch(
      productsActions.updateProductsState({
        status: 'loading',
        error: null,
        list: [],
      })
    );
    const fetchProducts = async () => {
      const response = await fetch(
        'https://react-http-e1b4b-default-rtdb.firebaseio.com/products.json'
      );
      if (!response.ok) {
        throw new Error('Error while fetching Products');
      }
      const products = await response.json();
      return products;
    };

    try {
      const productsData = await fetchProducts();

      dispatch(productsActions.getProducts(productsData));
    } catch (err) {
      console.log(err.message);
      dispatch(
        productsActions.updateProductsState({
          status: 'completed',
          error: err.message,
          list: [],
        })
      );
    }
  };
};
