import { useState } from 'react';

export const OilProducts = ({ products }) => {
  const colors = ['yellow', 'red'];
  const [selectedColor, setSelectedColor] = useState(
    colors[Math.floor(Math.random() * (2 - 0 + 1) + 0)]
  );
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 my-[60px] gap-x-8 gap-y-8'>
      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/crude-oil.avif')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[0]}</p>
          <p>{products[0]} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/diseal.webp')] hover:bg-cover hover:bg-center`}
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
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/jet-fuel.jpeg')] hover:bg-cover hover:bg-center`}
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
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/petrol.jpeg')] hover:bg-cover hover:bg-center`}
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
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/kerosene.jpeg')] hover:bg-cover hover:bg-center`}
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
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/lpg.jpeg')] hover:bg-cover hover:bg-center`}
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
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/pet-coke.jpeg')] hover:bg-cover hover:bg-center`}
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
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/lpfo.jpg')] hover:bg-cover hover:bg-center`}
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

    </div>
  );
};
