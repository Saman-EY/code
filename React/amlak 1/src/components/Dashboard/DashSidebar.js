import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ReactComponent as Arrow } from '../../assets/icons/angle-down-solid.svg';
import { ReactComponent as Plus } from '../../assets/icons/circle-plus-solid.svg';

const DashSidebar = ({ state, setstate }) => {

  let DropDown = (e) => {
    let Ul = e.currentTarget.nextSibling;
    console.log(e.currentTarget);
    let Svg = e.currentTarget.children[1].children[0];
    if (Ul.classList.contains('flex')) {
      Ul.classList.remove('flex');
      Ul.classList.add('hidden');
      Svg.classList.add('rotate-180');
    } else {
      Ul.classList.remove('hidden');
      Ul.classList.add('flex');
      Svg.classList.remove('rotate-180');
    }
  };

  let Close = (e) => {
    if (e.target.id === 'dash-overlay') {
      setstate(false);
    }
  };

  return (
    <AnimatePresence>
      {state && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: 'easeOut', duration: 0.3 }}
          id="dash-overlay"
          onClick={Close}
          className=" bg-black bg-opacity-50 fixed inset-0 lg:static"
        >
          <motion.div
            initial={{ x: 600 }}
            animate={{ x: 0 }}
            exit={{ x: 1000 }}
            transition={{ duration: 0.4 }}
            className="overflow-y-auto h-screen py-4 px-3 bg-[#04246a] w-full max-w-[240px] fixed inset-0 lg:static"
          >
            <ul className="space-y-2">
              <li>
                <Link to="/" className="DashboardLinks">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span className=" mr-2">صفح اصلی</span>
                </Link>
              </li>
              <li>
                <Link to="/dashboard/Proflie" className="DashboardLinks">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                    />
                  </svg>

                  <span className="flex-1  whitespace-nowrap mr-2">
                    مشاهده پروفایل
                  </span>
                </Link>
              </li>
              <li>
                <Link to="" className="DashboardLinks">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
                    />
                  </svg>

                  <span className="flex-1  whitespace-nowrap mr-2">
                    کاربران مدیریت شده
                  </span>
                  <span className="inline-flex justify-center items-center p-3 ml-3 w-3 h-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">
                    3
                  </span>
                </Link>
              </li>
              <li>
                <button
                  onClick={DropDown}
                  to=""
                  className="flex items-center w-full p-2 text-sm font-normal rounded-lg text-white hover:bg-gray-100 hover:text-gray-600  transition-all"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 "
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                    />
                  </svg>

                  <span className=" whitespace-nowrap mr-2 flex-1 FlexCenter justify-between">
                    ملک
                    <Arrow className="" width={'9px'} fill="#D4DBE2" />
                  </span>
                </button>
                <ul className="flex flex-col  bg-slate-400">
                  <li>
                    <Link
                      className="FlexCenter gap-2 py-2 text-white pr-6  font-iranBold text-xs transition-all duration-200 hover:bg-blue-400"
                      to={'/dashboard/AddEstate'}
                    >
                      <Plus width={'15px'} fill={'currentColor'} />
                      افزودن ملک فروشی
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="FlexCenter gap-2 py-2 text-white pr-6  font-iranBold text-xs transition-all duration-200 hover:bg-blue-400"
                      to={''}
                    >
                      <Plus width={'15px'} fill={'currentColor'} />
                      افزودن ملک فروشی
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="FlexCenter gap-2 py-2 text-white pr-6  font-iranBold text-xs transition-all duration-200 hover:bg-blue-400"
                      to={''}
                    >
                      <Plus width={'15px'} fill={'currentColor'} />
                      افزودن ملک فروشی
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="FlexCenter gap-2 py-2 text-white pr-6  font-iranBold text-xs transition-all duration-200 hover:bg-blue-400"
                      to={''}
                    >
                      <Plus width={'15px'} fill={'currentColor'} />
                      افزودن ملک فروشی
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link to="" className="DashboardLinks">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                    />
                  </svg>

                  <span className="flex-1  whitespace-nowrap mr-2">
                    قوانین و شرایط
                  </span>
                </Link>
              </li>
              <li>
                <Link to="" className="DashboardLinks">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                    />
                  </svg>

                  <span className="flex-1  whitespace-nowrap mr-2">
                    پیام های ارسال شده در املاک
                  </span>
                </Link>
              </li>
              <li>
                <Link to="" className="DashboardLinks">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
                    />
                  </svg>

                  <span className="flex-1 whitespace-nowrap mr-2">
                    معرفی و همکاری
                  </span>
                </Link>
              </li>
            </ul>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default DashSidebar;
