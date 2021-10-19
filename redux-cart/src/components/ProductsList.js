import Product from './Product';
import './ProductsList.css';

const ProductsList = ({ list }) => {
  return (
    <div className='productsList'>
      {list.map((item) => {
        return (
          <Product
            name={item.name}
            price={item.price}
            image={item.image}
            key={item.id}
            id={item.id}
          />
        );
      })}
    </div>
  );
};

export default ProductsList;
