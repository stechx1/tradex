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

      <main className='px-14 bg-white grid grid-cols-2 md:grid-cols-3 gap-x-2'>
        <section className='font-chivo'>
          <DepartmentSection />
        </section>

        <section>
          <MainSection
            heading={'Our Service to you'}
            italicPara='“We supply and export Ginger to international buyers in many countries around the world.”'
          />
        </section>

        <section className='font-chivo'>
          <GallerySection />
        </section>
      </main>
    </div>
  );
};

export default GingerSupply;
