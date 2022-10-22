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
import { SilicaSection } from '../../collections/MainSection/SilicaSection/SilicaSection';

const SilicaSandSupply = () => {
  const images = [
    '/images/ginger/ginger-1.jpeg',
    '/images/ginger/ginger-2.jpeg',
    '/images/ginger/ginger-3.jpeg',
    '/images/ginger/ginger-4.jpeg',
  ];
  return (
    <div>
      <HeroSection
        title='Silica Sand / Glass Sand / Quartz Supply & Export'
        para={'We supply and export Silica Sand minerals and Quartz.'}
        imgSrc={
          '/images/placeholder-1.jpg'
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
              <SilicaSection />
              <div className='ml-5'>
                <GallerySection images={images} />
              </div>
            </div>
          </div>

          <div>
            <Tabs defaultActiveKey='1'>
              <Tabs.TabPane tab='About Ginger' key='1'>
                <TabContent>
                  <h2 className='font-bold'>What is Silica Sand? </h2>
                  <p>
                    Silica Sand is quartz that over time, through the work of
                    water and wind, has been broken down into tiny granules.
                    Quartz is silica occurring alone in pure state.
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
              <ContactForm />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default SilicaSandSupply;
