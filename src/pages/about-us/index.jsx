import { HeroSection } from '../../collections';

const AboutUs = () => {
  return (
    <div>
      <section>
        <HeroSection title='About Us' imgSrc='/images/stock/petroleum.jpeg' />
      </section>

      <section className='container mx-auto'>
        <div className='rounded bg-gray-100 p-5 my-14 max-w-[600px] mx-auto'>
          <p>
            1stCCA Ltd is a reasonable exporting company that is neither
            expensive nor cheapest and simply carries the philosophy of edifying
            strategic long-lasting relationships with its business associates
            that understand the quality of our services and want the mutual
            progression of both firms.
          </p>

          <p className='my-4'>
            We are concerned with negotiating and providing profound guidance
            services and to provide the broad range supply of agricultural and
            products, petroleum products, solid minerals, and medical
            consumables and equipment to most of the ports worldwide. We do this
            by maintaining a strong client focus and facilitating more than just
            an explanation for the clients business. We establish
            trade-significant policies and operations to communicate evidences
            and proofs to our clients.
          </p>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
