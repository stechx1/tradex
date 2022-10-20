import { Product } from './Product';

export const ExportProducts = () => {
  const products = [
    'Seaseed',
    'Ginger',
    'Cahew Nuts',
    'Tiger Nuts',
    'Soybeans',
    'Palm Kernel Oil',
    'Moringa Seeds',
    'Cocoa beans',
    'Peanuts',
    'Turmeric',
    'Garlic',
    'Almonds',
  ];
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 my-12 gap-x-8 gap-y-8'>
      {products.map((product, index) => (
        <Product key={index} name={product} />
      ))}
    </div>
  );
};
