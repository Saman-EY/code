import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
// icons
import { ReactComponent as Close } from '../assets/icons/circle-xmark-solid.svg';
import { ReactComponent as Arrow } from '../assets/icons/angle-down-solid.svg';

const MobileNav = ({ state, setState }) => {
  let overlay = useRef(null);

  let [temp, settemp] = useState(false);

  let CloseNav = (e) => {
    if (e.target.id === 'nav-overlay') {
      setState(false);
    }
  };


  let NavDopdown = (e) => {
    if(e.target.id === "MobileNav") {
      let target = e.target.nextSibling;
      target.classList.toggle("hidden");
    }
    if (e.target.parentNode.id === "MobileNav") {
      let target = e.target.parentNode.nextSibling;
      target.classList.toggle("hidden");
    }
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
      id="nav-overlay"
      onClick={CloseNav}
      ref={overlay}
      className="fixed inset-0 bg-black bg-opacity-50 z-30"
    >
      <motion.section
        initial={{ x: 600 }}
        animate={{ x: 0 }}
        exit={{ x: 1000 }}
        transition={{ duration: 0.4 }}
        className="w-64 inset-0 bg-Blackprimary text-white h-full overflow-y-auto pb-10"
      >
        <div className="pt-7 flex justify-end px-4 ">
          <button
            onClick={() => {
              setState(false);
            }}
            className="text-red-500"
          >
            <Close width={'18px'} fill={'currentColor'} />
          </button>
        </div>
        <ul className="flex flex-col gap-4 px-4 mt-4 divide-y">
          <li className="font-iranBold pt-2">
            <Link to={''}>صفحه اصلی</Link>
          </li>

          <li className="font-semibold pt-2 ">
            <button onClick={NavDopdown} id='MobileNav' className='FlexCenter gap-1 '>
              خرید ویلا در شمال
              <Arrow width={'10px'} fill={"currentColor"} />
            </button>
            <ul className='text-slate-500 text-sm border-r border-primary mt-4 pr-2 flex hidden flex-col gap-3 '>
              <li>خرید ویلا جنگلی</li>
              <li>خرید ویلا ساحلی</li>
              <li>خرید ویلا کوهستانی</li>
            </ul>
          </li>
          <li className="font-semibold pt-2 ">
            <button onClick={NavDopdown} id='MobileNav' className='FlexCenter gap-1 '>
              اجاره ویلا در ساحل
              <Arrow width={'10px'} fill={"currentColor"} />
            </button>
            <ul className='text-slate-500 text-sm border-r border-primary mt-4 pr-2 flex hidden flex-col gap-3 '>
              <li>خرید ویلا جنگلی</li>
              <li>خرید ویلا ساحلی</li>
              <li>خرید ویلا کوهستانی</li>
            </ul>
          </li>
          <li className="font-semibold pt-2 ">
            <button onClick={NavDopdown} id='MobileNav' className='FlexCenter gap-1 '>
              پیمانکاری
              <Arrow width={'10px'} fill={"currentColor"} />
            </button>
            <ul className='text-slate-500 text-sm border-r border-primary mt-4 pr-2 flex hidden flex-col gap-3 '>
              <li>خرید ویلا جنگلی</li>
              <li>خرید ویلا ساحلی</li>
              <li>خرید ویلا کوهستانی</li>
              <li>خرید ویلا کوهستانی</li>
              <li>خرید ویلا کوهستانی</li>
              <li>خرید ویلا کوهستانی</li>
              <li>خرید ویلا کوهستانی</li>
            </ul>
          </li>

          
          <li className="font-semibold pt-2">
            <Link to={''}>وبلاگ</Link>
          </li>
          <li className="font-semibold pt-2">
            <Link to={''}>خانه ی رویایی من</Link>
          </li>
        </ul>
      </motion.section>
    </motion.div>
  );
};

export default MobileNav;
