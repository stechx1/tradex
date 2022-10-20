import React from 'react';
import { HeroSection } from '../../collections';

const AgricultureProducts = () => {
  return (
    <div className='font-chivo custom-img'>
      <section>
        <HeroSection
          title='Agriculure Products'
          para={
            'We facilitate the supply of a broad range of agricultural products to over 54+ countries around the world.'
          }
          imgSrc='http://globexia.com/wp-content/uploads/2017/10/fbq-default-placeholder-1.jpg'
        />
      </section>
    </div>
  );
};

export default AgricultureProducts;
