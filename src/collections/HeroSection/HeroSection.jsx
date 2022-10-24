export const HeroSection = ({ title, para, imgSrc }) => {
  return (
    <div
      style={{
        background: `url(${imgSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className='min-h-[310px] flex flex-col justify-center items-center text-white bg-o'
    >
      <div className='min-h-[310px] w-full bg-black bg-blend-multiply absolute bg-opacity-60'></div>
      <div className='z-10 flex flex-col justify-center items-center'>
        <h1 className='text-4xl font-bold mb-2 text-white'>{title}</h1>
        <p>{para}</p>
      </div>
    </div>
  );
};
