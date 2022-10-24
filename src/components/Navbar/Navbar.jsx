import Link from 'next/link';
import { useRouter } from 'next/router';

/* eslint-disable @next/next/no-img-element */
export const Navbar = () => {
  const router = useRouter();
  return (
    <nav className='bg-gray-900 border-gray-200 px-2 sm:px-4 py-2.5 text-white'>
      <div className='container flex flex-wrap justify-between items-center mx-auto'>
        <a href='https://flowbite.com/' className='flex items-center'>
          {/* <img
            src='https://flowbite.com/docs/images/logo.svg'
            className='mr-3 h-6 sm:h-9'
            alt='Flowbite Logo'
          /> */}
          <span className='self-center text-xl font-semibold whitespace-nowrap text-white'>
          1stcca-tradex
          </span>
        </a>
        <button
          data-collapse-toggle='navbar-default'
          type='button'
          className='inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200'
          aria-controls='navbar-default'
          aria-expanded='false'
        >
          <span className='sr-only'>Open main menu</span>
          <svg
            className='w-6 h-6'
            aria-hidden='true'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fill-rule='evenodd'
              d='M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z'
              clip-rule='evenodd'
            ></path>
          </svg>
        </button>
        <div className='hidden w-full md:block md:w-auto' id='navbar-default'>
          <ul className='flex flex-col p-4 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 text-white'>
            <li>
              <Link href={'/'}>
                <a
                  className='block py-2 pr-4 pl-3 text-white rounded md:bg-transparent md:hover:text-secondary md:p-0'
                  aria-current='page'
                >
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/about-us'}>
                <a className='block py-2 pr-4 pl-3 text-gray-300 rounded md:hover:bg-transparent md:border-0 md:hover:text-secondary md:p-0'>
                  About
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/agriculture-products'}>
                <a
                  className={`block py-2 pr-4 pl-3 ${
                    router.route === '/agriculture-products'
                      ? 'text-secondary'
                      : 'text-gray-300'
                  } rounded md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-secondary`}
                >
                  Agriculture Products
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/precious-stones'}>
                <a className={`block py-2 pr-4 pl-3 ${
                    router.route === '/precious-stones'
                      ? 'text-secondary'
                      : 'text-gray-300'
                  } rounded md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-secondary`}>
                  Precious Stones & Metals
                </a>
              </Link>
            </li>
            <li>
              <Link href={'/oil-gas-supply'}>
                <a className={`block py-2 pr-4 pl-3 ${
                    router.route === '/oil-gas-supply'
                      ? 'text-secondary'
                      : 'text-gray-300'
                  } rounded md:hover:bg-transparent md:border-0 md:p-0 md:hover:text-secondary`}>
                  Oil & Gas Supply
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
