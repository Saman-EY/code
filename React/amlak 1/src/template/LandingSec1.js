import React, { useState } from 'react';

// icons 
import { ReactComponent as SearchIcon } from '../assets/icons/magnifying-glass-solid.svg';


const LandingSec1 = () => {
  let [search, setSearch] = useState('');

  return (
    <section className="LandingSearchSec">
      <div className='bg-white FlexCenter m-4 mb-16 w-full max-w-[900px] rounded-md group'>
        <input
          className=" w-full h-10 outline-none ring-primary transition-all duration-200 focus:ring-2 border-0 pr-2 rounded-r-md placeholder:text-xs placeholder:font-iranBold"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجو بر اساس کلمه کلیدی یا کد ملک یا آدرس یا شهر یا نام شهر"
        />
        <button className='bg-slate-300 h-10 w-10 transition-all duration-200 group-focus-within:ring-2 text-primary hover:text-white hover:bg-slate-400 ring-primary  FlexCenter justify-center rounded-l-md '><SearchIcon width={"15px"} fill={"currentColor"}  /></button>
      </div>
    </section>
  );
};

export default LandingSec1;
