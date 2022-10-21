import React from 'react';
import { HeroSection } from '../../collections';
import { BreadCrumbs } from '../../components';

const GingerSupply = () => {
  return (
    <div>
      <HeroSection
        title='Fresh Ginger & Sun Dried Split Ginger Exporters'
        para={'We are fresh ginger and dry split ginger exporters'}
        imgSrc={
          'http://globexia.com/wp-content/uploads/2017/10/fbq-default-placeholder-1.jpg'
        }
      />
      <section className='container mx-auto'>
      <BreadCrumbs breadcrumbs={["ginger supply"]} />

      </section>
    </div>
  );
};

export default GingerSupply;
