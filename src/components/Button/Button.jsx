export const Button = ({ children, type, onClick }) => {
  if (type === 'primary')
    return (
      <button
        onClick={onClick}
        className='py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-gray-900 text-white'
      >
        {children}
      </button>
    );
  else
    return (
      <button
        onClick={onClick}
        className='py-3 px-5 text-sm font-medium text-center rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 bg-secondary text-black'
      >
        {children}
      </button>
    );
};
