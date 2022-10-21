/* eslint-disable @next/next/no-img-element */
export const GallerySection = ({ images }) => {
  return (
    <div className='my-[70px] grid grid-cols-2 gap-x-4 gap-y-4'>
      {images.map((img, index) => (
        <img className="rounded" key={index} src={img} alt='img' />
      ))}
    </div>
  );
};
