import Product from './Product';

const ProductsList = ({ list }) => {
  return (
    <div className=' mx-auto flex flex-wrap'>
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
