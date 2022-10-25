import React from 'react';
import { ExportProducts, HeroSection } from '../../collections';
import { OilProducts } from '../../collections/NewProducts/OilProducts';
import { ContactForm } from '../../components';

const OilGasSupply = () => {
  const products = [
    'Crude Oil',
    'Disel',
    'Jet Fuel',
    'Petrol',
    'Kerosene',
    'LPG',
    'Pet Coke',
    'LPFO',
  ];
  return (
    <div className='font-chivo custom-img'>
      <section>
        <HeroSection
          title='Oil & Gas Supply'
          para={
            'We facilitate the supply of a broad range of petroleum & gas products to over 54+ countries around the world.'
          }
          imgSrc='/images/stock/petroleum.jpeg'
        />
      </section>

      <section className='container mx-auto'>
        <OilProducts products={products} />
      </section>

      <section className='my-[90px]'>
        <ContactForm />
      </section>
    </div>
  );
};

export default OilGasSupply;
