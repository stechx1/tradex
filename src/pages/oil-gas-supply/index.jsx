import React from 'react';
import { ExportProducts, HeroSection } from '../../collections';
import { ContactForm } from '../../components';

const OilGasSupply = () => {
  const products = [
    'Crude Oil',
    'Disel',
    'Aquamarine',
    'Morganite',
    'Tourmaline',
    'Gold',
    'Sapphire',
    'Helidort',
    'Garnet',
    'Topaz',
    'Emerald',
    'Agate',
  ];
  return (
    <div className='font-chivo custom-img'>
      <section>
        <HeroSection
          title='Oil & Gas Supply'
          para={
            'We facilitate the supply of a broad range of petroleum & gas products to over 54+ countries around the world.'
          }
          imgSrc='http://globexia.com/wp-content/uploads/2017/10/fbq-default-placeholder-1.jpg'
        />
      </section>

      <section className='container mx-auto'>
        <ExportProducts products={products} />
      </section>

      <section className='my-[90px]'>
        <ContactForm />
      </section>
    </div>
  );
};

export default OilGasSupply;
