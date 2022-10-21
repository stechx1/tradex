export const BreadCrumbs = ({breadcrumbs}) => {
  return (
    <nav class='flex p-4' aria-label='Breadcrumb'>
      <ol class='inline-flex items-center space-x-1 md:space-x-3'>
        <li class='inline-flex items-center'>
          <a
            href='#'
            class='inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white'
          >
            Home
          </a>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index}>
            <div class='flex items-center'>
              <svg
                class='w-6 h-6 text-gray-400'
                fill='currentColor'
                viewBox='0 0 20 20'
                xmlns='http://www.w3.org/2000/svg'
              >
                <path
                  fill-rule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clip-rule='evenodd'
                ></path>
              </svg>
              <a
                href='#'
                class='ml-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ml-2 dark:text-gray-400 dark:hover:text-white'
              >
                {breadcrumb}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
};
