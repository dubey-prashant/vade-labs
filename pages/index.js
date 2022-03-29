/* eslint-disable @next/next/no-img-element */
import CruiseThroughBackend from '../components/CruiseThroughBackend';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import HR from '../components/HR';
import SkipTheHassle from '../components/SkipTheHassle';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />

      <section className='w-full rounded-t-[60px] bg-white mt-[-60px] pt-32 px-24 text-center'>
        {/* TOP PARAGRAPH START */}
        <p className='paragraph  px-8'>
          We understand your needs to&nbsp;
          <span className='highlight'>build integrated applications</span>
          &nbsp;in today&apos;s hyper-connected world.&nbsp;
          <span className='highlight'>Skip the hassle</span>&nbsp;to repeat a
          cumbersome process&nbsp;
          <span className='highlight'>for each unique integration.</span> Join
          us to build reliable connections with multiple providers and&nbsp;
          <span className='highlight'>cruise through backend</span> with ease.
        </p>
        <HR />
        {/* TOP PARAGRAPH END */}

        <SkipTheHassle />
        <CruiseThroughBackend />

        {/* BOTTOM PARAGRAPH */}
        <HR />
        <p className='paragraph px-10'>
          We&apos;re building an ecosystem where{' '}
          <span className='highlight'>anyone can get inspired</span> with
          application templates, discover novel ideas from top builders, and{' '}
          <span className='highlight'>publish revolutionary applications</span>{' '}
          that could <span className='highlight'>change the world.</span>
        </p>
        <div className='mx-auto my-14 w-[560px] '>
          <CTA />
        </div>

        {/* GOTO TOP BUTTON */}
        <div className='flex justify-end my-16'>
          <a href='#top' className='block text-center'>
            <img
              src='/images/top.svg'
              alt='go to top'
              className='mx-auto my-4'
            />
            <p className='text-center text-[18px]'>Back to top</p>
          </a>
        </div>
      </section>
      {/* FOOTER */}
      <Footer />
    </>
  );
}
