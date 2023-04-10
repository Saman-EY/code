import React from 'react';
import LandingSec2Card from './LandingSec2Card';

const LandingSec2 = () => {
  return (
    <section className="mt-10 mb-16">
      <div className='flex flex-col items-center gap-3 mb-8'>
        <h3 className='font-iranBold text-gray-200 text-xl'>ما همیشه اینجا هستیم تا به شما کمک کنیم</h3>
        <span className='w-[50px] h-[2px] bg-Gold'></span>
      </div>
      <div className="flex justify-center flex-wrap items-center gap-7">
        <LandingSec2Card />
        <LandingSec2Card />
        <LandingSec2Card />
        <LandingSec2Card />
      </div>
    </section>
  );
};

export default LandingSec2;
