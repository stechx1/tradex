import { useState } from 'react';

export const PreciousProducts = ({ products }) => {
  const colors = ['yellow', 'yellow'];
  const [selectedColor, setSelectedColor] = useState(
    colors[Math.floor(Math.random() * (2 - 0 + 1) + 0)]
  );
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 my-[60px] gap-x-8 gap-y-8'>
      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/kunzite.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-700'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[0]}</p>
          <p>{products[0]} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/zircon-sand.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[1]}</p>
          <p>{products[1]} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/aquamarine.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[2]}</p>
          <p>{products[2]} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/morganite.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[3]}</p>
          <p>{products[3]} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/tourmaline.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[4]}</p>
          <p>{products[4]} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/gold.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[5]}</p>
          <p>{products[5]} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/saphire.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[6]}</p>
          <p>{products[6]} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/garnet.webp')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[7]}</p>
          <p>{products[7]} Export</p>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/topaz.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[8]}</p>
          <p>{products[8]} Export</p>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/emerald.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[9]}</p>
          <p>{products[9]} Export</p>
        </div>
      </div>
      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/agate.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[10]}</p>
          <p>{products[10]} Export</p>
        </div>
      </div>
    </div>
  );
};
