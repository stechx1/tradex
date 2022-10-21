import Link from 'next/link';
import { Button } from '../../components';

export const DepartmentSection = () => {
  return (
    <div className='sticky top-0 my-5'>
      <div className='h-1 w-[200px] bg-black'></div>
      <div className='mb-[80px]'>
        <h2 className='font-semibold uppercase tracking-wide text-xl my-3'>
          Department
        </h2>
        <div className=' flex flex-col'>
          {/* 788791 */}
          <div className='h-[1px] w-[200px] bg-[#c8d1d7]'></div>
          <Link href='/'>
            <a className='text-[#788791] my-2'>Agriculture Product Export</a>
          </Link>
          <div className='h-[1px] w-[200px] bg-[#c8d1d7]'></div>
          <Link href='/'>
            <a className='text-[#788791] my-2'>Minerals & Metals Export</a>
          </Link>
          <div className='h-[1px] w-[200px] bg-[#c8d1d7]'></div>
          <Link href='/'>
            <a className='text-[#788791] my-2'>Petroleum and Gas Supply</a>
          </Link>
          <div className='h-[1px] w-[200px] bg-[#c8d1d7]'></div>
        </div>
      </div>
      <div className='h-1 w-[200px] bg-black'></div>
      <div>
        <h2 className='font-semibold uppercase tracking-wide text-xl my-3'>
          Download
        </h2>
        <Button type={'primary'}>Profile</Button>
      </div>
    </div>
  );
};
