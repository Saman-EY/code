import React, { useEffect, useState } from 'react';

// framer motion
import { AnimatePresence, motion } from 'framer-motion';

// swipper JS
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

// ICON
import { ReactComponent as Searchicon } from '../assets/icon/Mask Group 27.svg';
import { ReactComponent as Navicon1 } from '../assets/icon/home.svg';
import { ReactComponent as Navicon2 } from '../assets/icon/video.svg';
import { ReactComponent as Navicon3 } from '../assets/icon/chart.svg';
import { ReactComponent as Navicon4 } from '../assets/icon/home-trend-up.svg';
import { ReactComponent as Navicon5 } from '../assets/icon/note-2.svg';
import { ReactComponent as Navicon6 } from '../assets/icon/briefcase.svg';
import { ReactComponent as Carticon } from '../assets/icon/shopping-cart.svg';
import { ReactComponent as Loginicon } from '../assets/icon/login.svg';
import { ReactComponent as Medalstar } from '../assets/icon/medal-star.svg';

import arrowLeft from '../assets/icon/arrow-left.png';
import clock from '../assets/icon/clock.png';
import trash from '../assets/icon/trash.png';
import fire from '../assets/icon/fire.png';

// IMG
import Logo from '../assets/images/logo-01.png';
import searchBanner from '../assets/images/Searchbanner.png';

const Navbar = () => {
  let [scroll, setscroll] = useState(false);
  let [search, setsearch] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 5 ? setscroll(true) : setscroll(false);
    });
  }, []);

  let OpenSearch = () => {
    document.body.classList.add('overflow-hidden');
    setsearch(true);
  };

  let CloseSearch = () => {
    document.body.classList.remove('overflow-hidden');
    setsearch(false);
  };

  return (
    <>
      <nav
        className={
          scroll ? 'NavStyle bg-opacity-50 backdrop-blur-sm' : 'NavStyle'
        }
      >
        <section className="container mx-auto flex justify-between">
          <section className="">
            <div className="flex items-center pt-1">
              {/* LOGO  */}
              <img className="w-36" src={Logo} alt="" />

              {/* SEARCH  */}
              <div className="w-full max-w-[460px] relative  h-[44px]">
                {/* disabaled search  */}
                <div
                  onClick={OpenSearch}
                  className="bg-searchColor  px-3 py-3 rounded-lg cursor-pointer"
                >
                  <div className="flexCenter gap-2">
                    {/* serach icon  */}
                    <Searchicon width={'18px'} fill={'#B8ACAF'} />

                    <span className="text-xs text-textColor-1">جستجو کنید</span>
                  </div>
                </div>

                {/* opened search */}
                <AnimatePresence>
                  {search && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{
                        ease: 'easeOut',
                        duration: 0.3
                      }}
                      className="bg-searchColor px-3 py-3 rounded-lg absolute w-full top-0 z-30"
                    >
                      <section className="flexCenter gap-3 border-b border-[#5473FF] pb-2">
                        {/* serach icon  */}
                        <Searchicon width={'18px'} fill={'#E7E7E7'} />

                        <span className="text-xs text-textColor-2 ">
                          جستجو کنید
                        </span>
                      </section>

                      <section className="border-b border-[#4C6A93] mt-4 pb-4 flex flex-col gap-3">
                        <div className="flex justify-between">
                          <div className="flexCenter gap-3">
                            <img className="w-5" src={clock} alt="" />
                            <p className="text-xs font-light">
                              اخیرا جست و جو شده
                            </p>
                          </div>
                          <button>
                            <img className="w-5" src={trash} alt="" />
                          </button>
                        </div>
                        <div className="flexCenter gap-2">
                          <a
                            className="flexCenter gap-4 text-[.6rem] border rounded-full px-3 py-1.5 border-gray-500 text-textColor-2"
                            href="#"
                          >
                            اندیکاتور خفن
                            <img src={arrowLeft} alt="" />
                          </a>
                          <a
                            className="flexCenter gap-4 text-[.6rem] border rounded-full px-3 py-1.5 border-gray-500 text-textColor-2"
                            href="#"
                          >
                            تحلیل نمودار
                            <img src={arrowLeft} alt="" />
                          </a>
                        </div>
                      </section>

                      <section>
                        <p className="flexCenter gap-2 text-xs mt-2 font-light mb-4">
                          <img className="w-5" src={fire} alt="" />
                          داغ ترین جست و جو ها
                        </p>
                        {/* slider  */}
                        <Swiper
                          navigation={true}
                          modules={[Navigation]}
                          slidesPerView={4}
                          freeMode={true}
                          className="mySwiper mb-2 h-10 flex items-center justify-cente"
                        >
                          <SwiperSlide className="flexCenter">
                            <a
                              className="flexCenter gap-4 text-[.6rem] border rounded-full px-3 py-1.5 border-gray-500 text-textColor-2"
                              href="#"
                            >
                              تحلیل نمودار
                              <img src={arrowLeft} alt="" />
                            </a>
                          </SwiperSlide>
                          <SwiperSlide className="flexCenter">
                            <a
                              className="flexCenter gap-4 text-[.6rem] border rounded-full px-3 py-1.5 border-gray-500 text-textColor-2"
                              href="#"
                            >
                              برنامه نویسی
                              <img src={arrowLeft} alt="" />
                            </a>
                          </SwiperSlide>
                          <SwiperSlide className="flexCenter">
                            <a
                              className="flexCenter gap-4 text-[.6rem] border rounded-full px-3 py-1.5 border-gray-500 text-textColor-2"
                              href="#"
                            >
                              تحلیل نمودار
                              <img src={arrowLeft} alt="" />
                            </a>
                          </SwiperSlide>
                          <SwiperSlide className="flexCenter">
                            <a
                              className="flexCenter gap-4 text-[.6rem] border rounded-full px-3 py-1.5 border-gray-500 text-textColor-2"
                              href="#"
                            >
                              برنامه نویسی
                              <img src={arrowLeft} alt="" />
                            </a>
                          </SwiperSlide>
                          <SwiperSlide className="flexCenter">
                            <a
                              className="flexCenter gap-4 text-[.6rem] border rounded-full px-3 py-1.5 border-gray-500 text-textColor-2"
                              href="#"
                            >
                              تحلیل نمودار
                              <img src={arrowLeft} alt="" />
                            </a>
                          </SwiperSlide>
                          <SwiperSlide className="flexCenter">
                            <a
                              className="flexCenter gap-4 text-[.6rem] border rounded-full px-3 py-1.5 border-gray-500 text-textColor-2"
                              href="#"
                            >
                              برنامه نویسی
                              <img src={arrowLeft} alt="" />
                            </a>
                          </SwiperSlide>
                          <SwiperSlide className="flexCenter">
                            <a
                              className="flexCenter gap-4 text-[.6rem] border rounded-full px-3 py-1.5 border-gray-500 text-textColor-2"
                              href="#"
                            >
                              تحلیل نمودار
                              <img src={arrowLeft} alt="" />
                            </a>
                          </SwiperSlide>
                        </Swiper>
                        <img src={searchBanner} alt="" />
                      </section>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <ul className="flex gap-12 p-3">
              <li>
                <a className="NavLink" href="#">
                  <Navicon1 width={'18px'} fill={'#E7E7E7'} />
                  صفحه اصلی
                </a>
              </li>
              <li>
                <a className="NavLink" href="#">
                  <Navicon2 width={'18px'} fill={'#E7E7E7'} />
                  دوره های آموزشی
                </a>
              </li>
              <li>
                <a className="NavLink" href="#">
                  <Navicon3 width={'18px'} fill={'#E7E7E7'} />
                  اندیکاتور
                </a>
              </li>
              <li>
                <a className="NavLink" href="#">
                  <Navicon4 width={'18px'} fill={'#E7E7E7'} />
                  استراتژی
                </a>
              </li>
              <li>
                <a className="NavLink" href="#">
                  <Navicon5 width={'18px'} fill={'#E7E7E7'} />
                  مقالات
                </a>
              </li>
              <li>
                <a className="NavLink" href="#">
                  <Navicon6 width={'18px'} fill={'#E7E7E7'} />
                  خدمات سود آموز
                </a>
              </li>
            </ul>
          </section>

          {/* buttons  */}
          <section className="flex flex-col gap-2 pt-3 pl-6">
            <button className=" Goldbtn">
              <Medalstar width={'18px'} fill={'currentColor'} />
              اشتراک طلایی
            </button>
            <div className="flexCenter gap-3 text-xs">
              <button className="login-registerBtn">
                <Loginicon width={'18px'} fill={'currentColor'} />
                ورود | ثبت نام
              </button>
              <Carticon width={'18px'} fill={'currentColor'} />
            </div>
          </section>
        </section>
      </nav>
      <AnimatePresence>
        {/* overlay  */}
        {search && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ ease: 'easeOut', duration: 0.3 }}
            onClick={CloseSearch}
            className="fixed inset-0 backdrop-blur-sm  z-10"
          ></motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
