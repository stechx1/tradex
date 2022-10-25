import { useState } from 'react';

export const NewProducts = ({ products }) => {
  const colors = ['yellow', 'red'];
  const [selectedColor, setSelectedColor] = useState(
    colors[Math.floor(Math.random() * (2 - 0 + 1) + 0)]
  );
  return (
    <div className='grid grid-cols-2 md:grid-cols-3 my-[60px] gap-x-8 gap-y-8'>
      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/ginger-2.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[0].name}</p>
          <p>{products[0].name} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/seaseeds.webp')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[1].name}</p>
          <p>{products[1].name} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/cashew.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[2].name}</p>
          <p>{products[2].name} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/tiger-nuts.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[3].name}</p>
          <p>{products[3].name} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/soy-beans.jpg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[4].name}</p>
          <p>{products[4].name} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/palm-kernel-oil.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[5].name}</p>
          <p>{products[5].name} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/moringa-seeds.png')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[6].name}</p>
          <p>{products[6].name} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/cocoa-beans.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[7].name}</p>
          <p>{products[7].name} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/peanuts.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[8].name}</p>
          <p>{products[8].name} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/turmeric.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[9].name}</p>
          <p>{products[9].name} Export</p>
        </div>
      </div>

      <div
        className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/garlic.jpeg')] hover:bg-cover hover:bg-center`}
      >
        <div
          className={`${
            selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-yellow-800'
          } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
        >
          <p className='text-3xl'>{products[10].name}</p>
          <p>{products[10].name} Export</p>
        </div>
      </div>
    </div>
  );
};
