import React from 'react';
import { Link } from 'react-router-dom';
import Enamad from "../assets/images/enamad.png"
// icons 
import { ReactComponent as ArrowIcon } from '../assets/icons/angle-left-solid.svg';
import { ReactComponent as HomeIcon } from '../assets/icons/house-chimney-solid.svg';
import { ReactComponent as PhoneIcon } from '../assets/icons/phone-solid.svg';
import { ReactComponent as EmailIcon } from '../assets/icons/envelope-solid.svg';
import { ReactComponent as BuildingIcon } from '../assets/icons/footersvg.svg';

const Footer = () => {
  return (
    <footer>
      {/* Links  */}
      <ul className="w-full max-w-[930px] mx-auto px-4 flex flex-wrap  items-center gap-x-2 gap-y-5 mt-16 mb-10">
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            خرید ویلا در شمال
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            خرید ویلا جنگلی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            خرید ویلا ساحلی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            خرید ویلا کوهستانی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            محوطه سازی و بازسازی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            درخواست نمایندگی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            خرید ویلا در شمال
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            خرید ویلا کوهستانی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            خرید ویلا جنگلی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            خرید ویلا جنگلی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            درخواست نمایندگی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            درخواست نمایندگی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            درخواست نمایندگی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            درخواست نمایندگی
          </Link>
        </li>
        <li>
          <Link
            className="FlexCenter gap-1 text-slate-500 font-iranMed text-sm hover:text-blue-300 transition-all"
            to={''}
          >
            <ArrowIcon width={'9px'} fill={'currentColor'} />
            درخواست نمایندگی
          </Link>
        </li>
      </ul>

      <div className='mb-4 w-full max-w-[930px] mx-auto flex-col sm:flex-row FlexCenter justify-between'>
        <ul className=' flex flex-col gap-4 font-iranMed text-gray-400 text-sm px-4'>
          <li className='FlexCenter gap-4'>
            <HomeIcon className='min-w-[15px]'  width={"15px"} fill={"#006AFF"} />
            <p>آدرس : تهران- خیابان میرداماد-میدان مادر-خیابان شاه نظری- کوچه نازآفرین-پلاک 6- ساختمان مادر</p>
          </li>
          <li className='FlexCenter gap-4'>
            <PhoneIcon width={"15px"} fill={"#006AFF"} />
            <p>شماره تماس: 09126794535</p>
          </li>
          <li className='FlexCenter gap-4'>
            <EmailIcon width={"15px"} fill={"#006AFF"} />
            <p>پست الکترونیکی : avalkhune@gmail.com</p>
          </li>
        </ul>

        <img className='w-28' src={Enamad} alt="" />
      </div>
      <BuildingIcon className='w-full m-auto h-full mt-12' />
    </footer>
  );
};

export default Footer;
