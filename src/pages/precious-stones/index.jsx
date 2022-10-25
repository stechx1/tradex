import React from 'react';
import { ExportProducts, HeroSection } from '../../collections';
import { PreciousProducts } from '../../collections/NewProducts/PreciousProducts';
import { ContactForm } from '../../components';

const PreciousStones = () => {
  const products = [
    'Kunzite',
    'Zircon Sand',
    'Aquamarine',
    'Morganite',
    'Tourmaline',
    'Gold',
    'Sapphire',
    'Garnet',
    'Topaz',
    'Emerald',
    'Agate',
  ];
  return (
    <div className='font-chivo custom-img'>
      <section>
        <HeroSection
          title='Precious Stones & Metals'
          para={
            'We export a broad range of precious stones and precious metals to over 54+ countries around the world.'
          }
          imgSrc='/images/stock/stones-metals.jpeg'
        />
      </section>

      <section className='container mx-auto'>
        <PreciousProducts products={products}/>
      </section>

      <section className='my-[90px]'>
        <ContactForm />
      </section>
    </div>
  );
};

export default PreciousStones;
