export const HeroSection = ({ title, para, imgSrc }) => {
  return (
    <div
      style={{
        ackground: `url(${imgSrc})`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      }}
      className='min-h-[310px] flex flex-col justify-center items-center text-black'
    >
      <h1 className='text-4xl font-bold'>{title}</h1>
      <p>{para}</p>
    </div>
  );
};
