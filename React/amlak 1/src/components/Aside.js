import React from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

// imgs
import vila1 from '../assets/images/vila1.png';
import vila2 from '../assets/images/vila2.png';

const Aside = () => {
  return (
    <aside id='aside' className=" pb-10 border-2 w-full border-slate-200 flex flex-col gap-5 px-5 ">
      <div>
        <p className="font-bold mt-8 border-b border-blue-400 pb-2 h-fit">
          مناطق پر بازدید برای خرید ویلا در شمال
        </p>
        <div className="flex flex-col gap-2 pt-4 w-full ">
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در چمستان
          </button>
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در نوشهر
          </button>
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در سرخرود
          </button>
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در چمستان
          </button>
        </div>
      </div>
      <div className="">
        <p className="font-bold mt-8 border-b border-blue-400 pb-2 h-fit">
          صفحات پر بازدید ویلا
        </p>
        <div className="flex flex-col gap-2 pt-4 w-full ">
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در چمستان
          </button>
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در نوشهر
          </button>
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در سرخرود
          </button>
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در چمستان
          </button>
        </div>
      </div>
      <div>
        <p className="font-bold mt-8 border-b border-blue-400 pb-2 h-fit">
          صفحات پر بازدید زمین
        </p>
        <div className="flex flex-col gap-2 pt-4 w-full ">
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در چمستان
          </button>
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در نوشهر
          </button>
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در سرخرود
          </button>
          <button className="border hover:border-primary hover:bg-indigo-300 transition-all  w-full rounded-md text-sm py-2 font-iranMed">
            خرید ویلا در چمستان
          </button>
        </div>
      </div>
      <section className='sticky top-24'>
        <div className="flex flex-col sm:flex-row items-center gap-1">
          <p className="font-iranBold border-b-2 border-blue-500 pb-2 text-lg whitespace-nowrap ">
            ویلا های برگزیده
          </p>
          <Link
            className="mt-5 sm:mt-0 rounded-md bg-primary border border-primary font-iranMed transition-all hover:bg-white hover:text-black text-white px-5 py-2 whitespace-nowrap sm:rounded-tl-full"
            to={''}
          >
            مشاهده بیشتر
          </Link>
        </div>

        {/* slider  */}
        <section className="mt-5">
          <Swiper
            modules={[Autoplay, Pagination]}
            autoplay={{delay: 2000, disableOnInteraction: false}}
            loop
            
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="bg-gray-200 rounded-md overflow-hidden">
                <Link to={''}>
                  <img className="w-full h-[15rem]" src={vila1} alt="viila" />
                </Link>
                <div className="flex flex-col justify-center items-center mt-5">
                  <p className="font-iranMed text-sm">
                    ویلا هوشمند کلاسیک با استخر و جکوزی
                  </p>
                  <p className="text-red-400 font-iranBold text-sm mb-3">
                    11.7 میلیارد تومان
                  </p>
                  <p className="text-primary mb-3">سرخرود</p>
                  <Link
                    to={''}
                    className="border border-gray-400 hover:bg-primary hover:text-white transition-all w-full text-center rounded-b-md py-1"
                  >
                    مشاهده ویلا
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 rounded-md overflow-hidden">
                <Link to={''}>
                  <img className="w-full h-[15rem]" src={vila2} alt="viila" />
                </Link>
                <div className="flex flex-col justify-center items-center mt-5">
                  <p className="font-iranMed text-sm">
                    ویلا هوشمند کلاسیک با استخر و جکوزی
                  </p>
                  <p className="text-red-400 font-iranBold text-sm mb-3">
                    11.7 میلیارد تومان
                  </p>
                  <p className="text-primary mb-3">سرخرود</p>
                  <Link
                    to={''}
                    className="border border-gray-400 hover:bg-primary hover:text-white transition-all w-full text-center rounded-b-md py-1"
                  >
                    مشاهده ویلا
                  </Link>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="bg-gray-200 rounded-md overflow-hidden">
                <Link to={''}>
                  <img className="w-full h-[15rem]" src={vila1} alt="viila" />
                </Link>
                <div className="flex flex-col justify-center items-center mt-5">
                  <p className="font-iranMed text-sm">
                    ویلا هوشمند کلاسیک با استخر و جکوزی
                  </p>
                  <p className="text-red-400 font-iranBold text-sm mb-3">
                    110.7 میلیارد تومان
                  </p>
                  <p className="text-primary mb-3">سرخرود</p>
                  <Link
                    to={''}
                    className="border border-gray-400 hover:bg-primary hover:text-white transition-all w-full text-center rounded-b-md py-1"
                  >
                    مشاهده ویلا
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </section>
      </section>
    </aside>
  );
};

export default Aside;
