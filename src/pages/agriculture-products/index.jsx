import React from 'react';
import { ExportProducts, HeroSection } from '../../collections';
import { NewProducts } from '../../collections/NewProducts';
import { ContactForm } from '../../components';

const AgricultureProducts = () => {
  const products = [
    {name: "Ginger", imgName:'ginger-2.jpeg'},
    {name: "Seaseed", imgName:'seaseeds.webp'},
    {name: "Cahew Nuts", imgName:'cashew.jpeg'},
    {name: "Tiger Nuts", imgName:'tiger-nuts.jpeg'},
    {name: "Soybeans", imgName:'soy-beans.jpeg'},
    {name: "Palm Kernel Oil", imgName:'palm-kernel-oil.jpeg'},
    {name: "Moringa Seeds", imgName:'moringa-seeds.png'},
    {name: "Cocoa beans", imgName:'cocoa-beans.jpeg'},
    {name: "Peanuts", imgName:'peanuts.jpeg'},
    {name: "Turmeric", imgName:'turmeric.jpeg'},
    {name: "Garlic", imgName:'garlic.jpeg'},
    {name: "Almonds", imgName:'almonds.jpeg'},
  ];
  return (
    <div className='font-chivo custom-img'>
      <section>
        <HeroSection
          title='Agriculure Products'
          para={
            'We facilitate the supply of a broad range of agricultural products to over 54+ countries around the world.'
          }
          imgSrc='/images/stock/agriculture.jpeg'
        />
      </section>

      <section className='container mx-auto'>
        <NewProducts products={products}/>
      </section>

      <section className='mt-[90px]'>
        <ContactForm />
      </section>
    </div>
  );
};

export default AgricultureProducts;
