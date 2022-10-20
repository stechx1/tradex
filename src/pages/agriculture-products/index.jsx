import React from 'react';
import { HeroSection } from '../../collections';

const AgricultureProducts = () => {
  return (
    <div className='container mx-auto font-chivo custom-img'>
      <section>
        <HeroSection
          title='Agriculure Products'
          para={
            'We are helping develop these agri products at a higher rate than ever'
          }
        />
      </section>
    </div>
  );
};

export default AgricultureProducts;
