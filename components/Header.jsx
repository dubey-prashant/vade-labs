import Image from 'next/image';

const Header = () => {
  return (
    <header
      id='top'
      className='h-[80px] px-8 flex items-center justify-between cursor-pointer shadow'
    >
      <Image
        src={'/images/logo.svg'}
        alt='logo'
        width={'186px'}
        height={'48px'}
      />
      <div className='flex'>
        <a
          className='mx-2 text-center text-gray-800 font-normal text-[18px] hover:text-gray-500'
          href='#skipTheHassle'
        >
          Skip the hassle
        </a>
        <a
          className='mx-2 text-center text-gray-800 font-normal text-[18px] hover:text-gray-500'
          href='#cruiseThroughBackend'
        >
          Cruise through backend
        </a>
      </div>

      <a
        href='#'
        className='px-6 py-3 text-[22px] capitalize rounded-lg bg-primary text-white hover:opacity-80'
      >
        Get Early Access
      </a>
    </header>
  );
};

export default Header;
