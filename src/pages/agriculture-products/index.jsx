import React from 'react';
import { ExportProducts, HeroSection } from '../../collections';
import { ContactForm } from '../../components';

const AgricultureProducts = () => {
  const products = [
    'Ginger',
    'Seaseed',
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
    <div className='font-chivo custom-img'>
      <section>
        <HeroSection
          title='Agriculure Products'
          para={
            'We facilitate the supply of a broad range of agricultural products to over 54+ countries around the world.'
          }
          imgSrc='/images/placeholder-1.jpg'
        />
      </section>

      <section className='container mx-auto'>
        <ExportProducts products={products} />
      </section>

      <section className='mt-[90px]'>
        <ContactForm />
      </section>
    </div>
  );
};

export default AgricultureProducts;
