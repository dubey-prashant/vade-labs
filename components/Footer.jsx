import Image from 'next/image';

const Footer = () => {
  return (
    <>
      <footer
        className='bg-[#2E3B4E] px-12
        text-white font-sans'
      >
        <div className='pt-10 pb-16 flex justify-center text-center text-[18px]'>
          <div className='flex-1 '>
            <p>© 2022 Vade Labs Pvt. Ltd.</p>
            <div className='mt-3 flex justify-center'>
              <div className='mx-2 w-[20px]'>
                <Image
                  className='mx-10'
                  height={'100%'}
                  width={'100%'}
                  src={'/images/twitter.svg'}
                  alt='twitter'
                />
              </div>
              <div className='mx-2 w-[20px]'>
                <Image
                  className=''
                  height={'100%'}
                  width={'100%'}
                  src={'/images/linkedin.svg'}
                  alt='linkedin'
                />
              </div>
            </div>
          </div>
          {/* About  */}
          <div className='flex-1'>
            <h4 className='mb-3 text-[#999999]'>About Us</h4>

            <p className='max-w-sm m-auto '>
              We&apos;re a group of enthusiasts who love helping creatives build
              software applications.
            </p>
          </div>
          {/* contact */}
          <div className='flex-1'>
            <h4 className='text-[#999999] mb-3'>Contact</h4>
            <div className='ml-auto flex items-center justify-center'>
              <Image width={11} height={11} src='/images/web.svg' alt='web' />
              <p className='pl-1 '>hello@vadelabs.com </p>
            </div>
            <div className='flex items-center justify-center '>
              <Image
                width={11}
                height={11}
                src='/images/phone.svg'
                alt='phone'
              />
              <p className='pl-1 '>+91-7829887887</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
