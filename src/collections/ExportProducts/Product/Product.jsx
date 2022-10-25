import { useRouter } from 'next/router';
import { useState } from 'react';

export const Product = ({ name, route, imgName }) => {
  const colors = ['green', 'red'];
  const [selectedColor, setSelectedColor] = useState(
    colors[Math.floor(Math.random() * (2 - 0 + 1) + 0)]
  );

  const router = useRouter();
  return (
    <div
      onClick={() => router.push({ route })}
      className={`flex flex-col justify-center items-center bg-white min-h-[200px] rounded cursor-pointer hover:bg-[url('/images/gallery/ginger-2.jpeg')] hover:bg-cover hover:bg-center`}
    >
      <div
        className={`${
          selectedColor == 'red' ? 'hover:bg-red-800' : 'hover:bg-green-800'
        } hover:bg-opacity-75 hover:text-white h-full w-full flex flex-col justify-center items-center`}
      >
        <p className='text-3xl'>{name}</p>
        <p>{name} Export</p>
      </div>
    </div>
  );
};
