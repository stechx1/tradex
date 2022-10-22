import React from 'react';
import {
  DepartmentSection,
  GallerySection,
  HeroSection,
  MainSection,
} from '../../collections';
import { BreadCrumbs } from '../../components';

const GingerSupply = () => {
  const images = [
    '/images/ginger/ginger-1.jpeg',
    '/images/ginger/ginger-2.jpeg',
    '/images/ginger/ginger-3.jpeg',
    '/images/ginger/ginger-4.jpeg',
    '/images/ginger/ginger-5.png',
    '/images/ginger/ginger-6.jpeg',
    '/images/ginger/ginger-7.jpeg',
    '/images/ginger/ginger-8.jpeg',
    '/images/ginger/ginger-9.jpeg',
    '/images/ginger/ginger-10.jpeg',
    '/images/ginger/ginger-11.jpeg',
    '/images/ginger/ginger-12.jpeg',
    '/images/ginger/ginger-13.jpeg',
    '/images/ginger/ginger-14.jpeg',
    '/images/ginger/ginger-15.jpeg',
    '/images/ginger/ginger-16.jpeg',
    '/images/ginger/ginger-17.jpeg',
    '/images/ginger/ginger-19.jpeg',
    '/images/ginger/ginger-20.jpeg',
    '/images/ginger/ginger-21.jpeg',
    '/images/ginger/ginger-22.jpeg',
    '/images/ginger/ginger-23.jpeg',
    '/images/ginger/ginger-24.jpeg',
    '/images/ginger/ginger-25.jpeg',
    '/images/ginger/ginger-26.jpeg',
  ];
  return (
    <div>
      <HeroSection
        title='Fresh Ginger & Sun Dried Split Ginger Exporters'
        para={'We are fresh ginger and dry split ginger exporters'}
        imgSrc={'/images/placeholder-1.jpg'}
      />
      <section className='container mx-auto'>
        <BreadCrumbs breadcrumbs={['ginger supply']} />
      </section>

      <main className='px-14 bg-white grid grid-cols-2 md:grid-cols-5 gap-x-8'>
        <section className='font-chivo'>
          <DepartmentSection />
        </section>

        <section className='col-span-2'>
          <MainSection
            heading={'Our Service to you'}
            italicPara='“We supply and export Ginger to international buyers in many countries around the world.”'
          />
        </section>

        {/* <div></div> */}

        <section className='font-chivo col-span-2'>
          <GallerySection images={images} />
        </section>
      </main>
    </div>
  );
};

export default GingerSupply;
