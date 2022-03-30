/* eslint-disable @next/next/no-img-element */
const CruiseThroughBackend = () => {
  return (
    <div className='pb-20'>
      <h1 className='heading my-20 ' id='cruiseThroughBackend'>
        <span className='text-primary'>Cruise</span> through backend.
      </h1>

      <div className='grid grid-cols-2 gap-x-5 gap-y-28 items-center'>
        <div className='textBox  justify-self-end'>
          <span className='num -top-[100px] -left-[100px]'>#1</span>
          <h3 className='title '>
            Choose from <br /> 100+ integrations.
          </h3>
          <p className='text-[18px]'>
            Vade Studio is designed to work seamlessly with your favourite
            databases or web services. <br />
            <strong>Tweak a template or start from scratch.</strong>
            <br />
            <br />
            We&apos;ve baked-in over 100 integrations directly into the
            platform, so you can integrate quickly and easily with other
            services, databases and applications out there.
          </p>
          <img
            src='/images/cruiseSection/dotted.svg'
            alt='dot line'
            className='absolute bottom-100% left-[50%]'
          />
        </div>
        <div className='imgBox'>
          <img src='/images/cruiseSection/one.png' width={'100%'} alt='one' />
        </div>
        <div className='imgBox'>
          <img src='/images/cruiseSection/two.png' alt='two' />
        </div>
        <div className='textBox'>
          <span className='num -top-[144px] -right-[144px]'>#2</span>
          <h3 className='title'>Configure & Connect.</h3>
          <p>
            Get all of your&nbsp;
            <strong>
              data sources connected into a content mesh, in the same place, in
              real time.
            </strong>
            <br />
            <br />
            This provides you a unified API for data navigation across all your
            integrated services.
          </p>
          <img
            src='/images/cruiseSection/dotted2.svg'
            alt='dot line'
            className='absolute bottom-105% -left-[50%]'
          />
        </div>
        <div className='textBox  justify-self-end'>
          <span className='num -top-[120px] -left-[120px]'>#3</span>
          <h3 className='title'>Test. Build. Deploy.</h3>
          <p>
            <strong> Play around with the generated APIs.</strong> Once
            configured - test, build and deploy the unified API into our secure
            and reliable infrastructure.
            <br />
            <br />
            Run your queries in the editor and use our intuitive interface to
            <strong>
              navigate through your data - clean, organised & at your
              fingertips.
            </strong>
          </p>
        </div>
        <div className='imgBox'>
          <img
            src='/images/cruiseSection/three.png'
            className='w-full'
            alt='three'
          />
        </div>
      </div>
    </div>
  );
};

export default CruiseThroughBackend;
