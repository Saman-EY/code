import React from 'react';
import { Link } from 'react-router-dom';
import CategoryLinks from '../template/CategoryLinks';
// icon
import { ReactComponent as Left } from '../assets/icons/angle-left-solid.svg';
import { ReactComponent as Right } from '../assets/icons/angle-right-solid.svg';
// images
import Pic1 from '../assets/images/pic1.png';
import Pic2 from '../assets/images/pic2.png';
import Pic3 from '../assets/images/pic3.png';

const CardContainer = () => {
  return (
    <section className="flex-1 px-4">
      <CategoryLinks />
      <section className="flex flex-col  gap-4 divide-y-8 divide-primary ">
        {/* card list */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4">
          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic3} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic2} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic1} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>
        </div>
        {/* card list */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 pt-4">
          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic3} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic2} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic1} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>
        </div>
        {/* card list */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 pt-4">
          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic3} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic2} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic1} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>
        </div>
        {/* card list */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4">
          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic3} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic2} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic1} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>
        </div>
        {/* card list */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 pt-4">
          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic3} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic2} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic1} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>
        </div>
        {/* card list */}
        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-4 pt-4">
          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic3} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic2} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>

          <div className="lg:flex-1 bg-slate-200 md:max-w-[16.6rem]  rounded-md overflow-hidden flex flex-col">
            <div className="w-full  h-full max-h-52">
              <img className="w-full h-full" src={Pic1} alt="" />
            </div>
            <div className="p-2 pb-3 flex flex-col items-center gap-3">
              <p className="font-semibold line-clamp-1">
                خرید ویلای مدرن شهرکی سرخرود
              </p>
              <p className="text-xs line-clamp-1">
                زمین 300 متر، بنا 250 متر، 4 اتاق
              </p>
            </div>
          </div>
        </div>
      </section>

      <ul className="flex justify-center mt-4 items-center -space-x-px w-full ">
        <li>
          <Link to={''} className=" bg-slate-400 hover:bg-slate-200 p-4 block rounded-r-md">
            <Right width={'7px'} />
          </Link>
        </li>
        <li>
          <Link
            to={''}
            className="py-2 px-3 leading-tight text-white border border-gray-300 hover:bg-blue-200 hover:text-gray-700 bg-blue-500"
          >
            1
          </Link>
        </li>
        <li>
          <Link
            to={''}
            className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
          >
            2
          </Link>
        </li>
        <li>
          <Link
            to={''}
            aria-current="page"
            className="z-10 py-2 px-3 leading-tight border border-gray-300 hover:bg-gray-100"
          >
            3
          </Link>
        </li>
        <li>
          <Link
            to={''}
            className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
          >
            4
          </Link>
        </li>
        <li>
          <Link
            to={''}
            className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 "
          >
            5
          </Link>
        </li>
        <li>
          

            <Link to={''} className="bg-slate-400 p-4 block rounded-l-md hover:bg-slate-200">
              <Left width={'7px'} />
            </Link>
        </li>
      </ul>
    </section>
  );
};

export default CardContainer;
