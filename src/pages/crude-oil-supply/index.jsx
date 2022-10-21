/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Tabs } from 'antd';
import {
  DepartmentSection,
  GallerySection,
  HeroSection,
  MainSection,
  TabContent,
} from '../../collections';
import { BreadCrumbs, ContactForm } from '../../components';

const CrudeOilSupply = () => {
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
        title='Crude Oil Supply (BLCO)'
        para={
          'We facilitate the supply of Crude Oil (BLCO) on OPEC and OFF-OPEC terms'
        }
        imgSrc={
          'http://globexia.com/wp-content/uploads/2017/10/fbq-default-placeholder-1.jpg'
        }
      />
      <section className='container mx-auto'>
        <BreadCrumbs breadcrumbs={['Crude Oil Supply (BLCO)']} />
      </section>

      <main className='px-14 bg-white grid grid-cols-2 md:grid-cols-4 gap-x-8'>
        <section className='font-chivo'>
          <DepartmentSection />
        </section>

        <section className='col-span-3'>
          {/* <CrudeOil/> */}
          <div>
            <div className='flex items-start'>
              <MainSection
                heading={'Our Service to you'}
                italicPara='“We supply and export Ginger to international buyers in many countries around the world.”'
              />
              <img
                className='mt-[90px] ml-[20px]'
                width={500}
                src='/images/ginger/ginger-1.jpeg'
                alt='image'
              />
            </div>
          </div>

          <div>
            <Tabs defaultActiveKey='1'>
              <Tabs.TabPane tab='About Ginger' key='1'>
                <TabContent>
                  <h2 className='font-bold'>What is Ginger? </h2>
                  <p>
                    Sesame is a flowering plant which grows in pods or buns. It
                    is widely naturalized in tropical regions around the world
                    and is cultivated for its edible oil-rich seeds. Numerous
                    wild relatives occur in Africa and a smaller number in
                    India. The world harvests over 6.5 million metric tonnes of
                    sesame seeds yearly, with Tanzania, India, Nigeria and Sudan
                    being amongst the largest producers. Nigeria alone produces
                    over of 530,000 metric tonnes of Sesame Seeds yearly.
                  </p>
                </TabContent>
              </Tabs.TabPane>
              <Tabs.TabPane tab='Our Trade Process' key='2'>
                <TabContent>
                  <p>
                    Our trade process spreads across C&F and FOB depending on
                    the buyers preference.
                  </p>
                  <p>Heres what they entail:</p>
                  <p>
                    <span className='font-bold'>
                      1) Cost and Fright (C & F):
                    </span>
                    Here, the seller will handle everything from loading the
                    vessel and shipping the product to wherever the buyer wants
                    it delivered.
                  </p>
                  <p>
                    <span className='font-bold'>
                      2) Freight On Board (FOB):
                    </span>
                    Here, the seller will handle everything from loading the
                    vessel and shipping the product to wherever the buyer wants
                    it delivered.
                  </p>
                </TabContent>
              </Tabs.TabPane>
            </Tabs>

            <div className='my-[90px]'>
              <ContactForm/>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default CrudeOilSupply;
