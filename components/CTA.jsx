/* eslint-disable @next/next/no-img-element */

import { useState } from 'react';
const CTA = () => {
  const [register, setRegister] = useState(false);

  const submitForm = (e) => {
    e.preventDefault();

    setRegister(true);
  };

  return (
    <>
      {/* cta */}
      <div className='cta max-w-[512px]'>
        {!register ? (
          <form action='' onSubmit={submitForm} className='flex'>
            <input
              className='px-6 h-[60px] text-[18px] w-[55%]  rounded-l-lg leading-none border-primary border active:outline-none focus:outline-none '
              type='email'
              placeholder='email@example.com'
            />
            <input
              className='px-6 h-[60px] text-[22px] w-[45%] capitalize leading-none rounded-r-lg border-primary border bg-primary cursor-pointer text-white hover:opacity-80'
              type='submit'
              value='Get Early Access'
            />
          </form>
        ) : (
          <>
            <p className='h-[60px] leading-[60px] text-[22px] w-full capitalize  text-center rounded-lg border-primary border bg-primary cursor-pointer text-white hover:opacity-80'>
              Thank you for your interest!
            </p>

            <div className='flex justify-between text-[16px] mt-3 px-3'>
              <div className='align-middle'>
                <img
                  className='w-[14px] h-[14px] inline-block mr-1'
                  src='/images/tick.svg'
                  alt='sent'
                />
                <span>An email has been sent to your inbox.</span>
              </div>
              <div>
                <span>Didn&apos;t receive?</span> <br />
                <img
                  src='/images/resend.svg'
                  alt='resend'
                  className='w-[14px] inline-block mr-1'
                />
                <a href='#' className='text-[#E10D0D]'>
                  Resend
                </a>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CTA;
