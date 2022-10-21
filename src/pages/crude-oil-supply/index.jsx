/* eslint-disable @next/next/no-img-element */
import React from 'react';
import { Tabs } from 'antd';
import { DepartmentSection, HeroSection, TabContent } from '../../collections';
import { BreadCrumbs, ContactForm } from '../../components';
import { CrudeOilSupplySection } from '../../collections/MainSection/CrudeOilSupply/CrudeOilSupply';

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

      <main className='px-14 bg-white grid grid-cols-1 md:grid-cols-4 gap-x-8'>
        <section className='font-chivo'>
          <DepartmentSection />
        </section>

        <section className='col-span-3'>
          {/* <CrudeOil/> */}
          <div>
            <div className='flex flex-col lg:flex-row items-start'>
              <CrudeOilSupplySection />
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
                  <h2 className='font-bold'>What is Crude Oil? </h2>
                  <p>
                    Crude oil is commonly known as petrol. It is a liquid found
                    within the Earth comprised of hydrocarbons, organic
                    compounds and small amounts of metal. Crude oil is typically
                    obtained through drilling, where it is usually found
                    alongside other resources, such as natural gas (which is
                    lighter and therefore sits above the crude oil) and saline
                    water (which is denser and sinks below). It is then refined
                    and processed into a variety of forms, such as gasoline,
                    diesel, kerosene and various forms of petrochemicals.
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

export default CrudeOilSupply;
