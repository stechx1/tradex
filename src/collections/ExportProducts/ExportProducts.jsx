import { Product } from './Product';

export const ExportProducts = ({products}) => {
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 my-[60px] gap-x-8 gap-y-8'>
      {products.map((product, index) => (
        <Product key={index} name={product} />
      ))}
    </div>
  );
};
