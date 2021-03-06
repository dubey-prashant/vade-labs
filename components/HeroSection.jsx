/* eslint-disable @next/next/no-img-element */
import CTA from './CTA';

const HeroSection = () => {
  return (
    <>
      <section className='bg-[#E5E5E5] bg-[url("/images/heroSection/dots.svg")] bg-center bg-no-repeat bg-cover min-h-screen pt-32 pb-60'>
        {/* top grid*/}
        <div className='flex  items-center justify-between '>
          {/* title and cta */}
          <div className='text-left pl-32 w-[45%]'>
            <h1 className='text-7xl text-[#2E3B4E] font-bold leading-normal'>
              Integrate APIs In Minutes
            </h1>
            <p className='font-bolder text-gray-700 text-[24px] font-medium mt-2 mb-10'>
              Get ridiculously creative with your products and let us do the
              hard work for you!
            </p>
            {/* CTA */}
            <div className='w-[510px]'>
              <CTA />
            </div>
          </div>

          {/* video */}
          <div className=' self-end border rounded-l-[64px] p-8 pl-9  pr-0 bg-white border-[#333C47] border-r-0'>
            <img
              src={'/images/heroSection/video.png'}
              alt='video'
              height={'545'}
              className='h-[545px] m-0'
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
