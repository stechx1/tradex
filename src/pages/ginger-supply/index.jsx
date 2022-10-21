import React from 'react';
import {
  DepartmentSection,
  GallerySection,
  HeroSection,
  MainSection,
} from '../../collections';
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
        <BreadCrumbs breadcrumbs={['ginger supply']} />
      </section>

      <main className='px-14 bg-white font-chivo grid grid-cols-2 md:grid-cols-3 space-x-10'>
        <section>
          <DepartmentSection />
        </section>

        <section>
          <MainSection />
        </section>

        <section>
          <GallerySection />
        </section>
      </main>
    </div>
  );
};

export default GingerSupply;
