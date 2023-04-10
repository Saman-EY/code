import React, { useState, useEffect, useRef } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

import MobileNav from './MobileNav';
import SearchModal from '../template/SearchModal';

// logo
import Logo from '../assets/images/logo.png';
// icons
import { ReactComponent as Hamburger } from '../assets/icons/bars-solid.svg';
import { ReactComponent as SearchIcon } from '../assets/icons/magnifying-glass-solid.svg';
import { ReactComponent as UserIcon } from '../assets/icons/user-regular.svg';
import { ReactComponent as DropDown } from '../assets/icons/sort-down-solid.svg';
import { ReactComponent as Plus } from '../assets/icons/plus-solid.svg';
import { ReactComponent as LoginIcon } from '../assets/icons/right-to-bracket-solid.svg';
import { ReactComponent as SignupIcon } from '../assets/icons/user-plus-solid.svg';
import { ReactComponent as Logo2 } from '../assets/images/iZcDyy01.svg';

const Navbar = () => {
  let [userBtn, setuserBtn] = useState(false);
  let [mobileNav, setmobileNav] = useState(false);
  let [SModal, setSModal] = useState(false);

  useEffect(() => {
    let HandleClose = (e) => {
      let temp = e.target;

      if (Nav.current && !Nav.current.contains(temp)) {
        setuserBtn(false);
      }
    };

    document.addEventListener('click', HandleClose);
  }, []);

  let Nav = useRef(null);

  return (
    <>
      <div className="bg-Blackprimary text-white sticky top-0 z-20 border-b-2 shadow-sm">
        <nav
          ref={Nav}
          className="flex xl:container mx-auto justify-between md:justify-start items-center py-4 px-6  "
        >
          <button
            onClick={() => setmobileNav(!mobileNav)}
            className="md:hidden"
          >
            <Hamburger width={'20px'} fill={'#E7C700'} />
          </button>
          <div className="FlexCenter">
            {/* logo  */}
            <Link
              to="/"
              className="w-[120px] md:w-[100px]  lg:w-[150px] mr-12 md:mr-0"
            >
              <img className="w-full h-full" src={Logo} alt="logo" />
              {/* <Logo2 width={"100px"} fill={"red"} /> */}
            </Link>

            <ul className="mr-6 hidden md:flex items-center gap-5 ">
              <li className="relative group">
                <Link to={'/category'} className="NavDropdown">
                  خرید ویلا در شمال
                  <DropDown width={'8px'} fill={"currentColor"} />
                </Link>
                <ul className="NavDropdownLinks">
                  <li className="">
                    <a
                      href="#"
                      className="text-sm  flex p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6"
                    >
                      خرید ویلا جنگلی
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="text-sm  flex p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6"
                    >
                      خرید ویلا ساحلی
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="text-sm  flex p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6"
                    >
                      خرید ویلا کوهستانی
                    </a>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <span className="NavDropdown">
                  اجاره ویلا در شمال
                  <DropDown width={'8px'} fill={"currentColor"}/>
                </span>
                <ul className="NavDropdownLinks">
                  <li className="">
                    <a
                      href="#"
                      className="text-sm flex p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6"
                    >
                      خرید ویلا جنگلی
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="text-sm flex p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6"
                    >
                      خرید ویلا ساحلی
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="text-sm flex p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6"
                    >
                      خرید ویلا کوهستانی
                    </a>
                  </li>
                </ul>
              </li>

              <li className="relative group">
                <span className="NavDropdown">
                  پیمانکاری
                  <DropDown width={'8px'} fill={"currentColor"} />
                </span>
                <ul className="NavDropdownLinks">
                  <li className="">
                    <a
                      href="#"
                      className="text-sm flex p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6"
                    >
                      خرید ویلا جنگلی
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="text-sm flex p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6"
                    >
                      خرید ویلا ساحلی
                    </a>
                  </li>
                  <li className="">
                    <a
                      href="#"
                      className="text-sm flex p-4 transition-all ease-in hover:bg-slate-300 hover:pr-6"
                    >
                      خرید ویلا کوهستانی
                    </a>
                  </li>
                </ul>
              </li>

              <li>
                <a href="#" className="NavLink">
                  وبلاگ
                </a>
              </li>

              <li>
                <a href="#" className="NavLink">
                  خانه ی رویایی من
                </a>
              </li>
            </ul>
          </div>

          <div className="FlexCenter gap-3 justify-end md:mr-auto md:flex-wrap-reverse">
            <Link
              to="/dashboard/AddEstate"
              className="hidden md:FlexCenter bg-Gold  text-white FlexCenter gap-2 font-semibold text-xs lg:text-sm px-4 py-2 rounded-md hover:bg-white hover:text-Gold border border-Gold transition-all ease-in whitespace-nowrap "
            >
              <span className="">
                <Plus width={'16px'} fill={'currentColor'} />
              </span>
              ثبت رایگان ملک
            </Link>

            <div className="FlexCenter gap-3 mr-6">
              <button onClick={() => setSModal(true)}>
                <SearchIcon width={'18px'} fill={'#E7C700'} />
              </button>

              <button
                onClick={() => setuserBtn(!userBtn)}
                id="dropdown-btn"
                className="hidden bg-Gold rounded-full px-3.5 py-3 md:FlexCenter md:gap-1 relative"
              >
                <UserIcon width={'12px'} fill={'white'} />
                <DropDown
                  className="hidden md:block "
                  width={'8px'}
                  fill={'white'}
                />
                <ul
                  className={
                    userBtn
                      ? 'bg-white border-2 divide-y absolute w-40 rounded-md top-16 left-0 overflow-hidden'
                      : 'hidden'
                  }
                >
                  <li>
                    <Link
                      to={'/Login'}
                      className="FlexCenter text-black gap-2 p-3 text-sm font-semibold transition-all ease-in hover:bg-slate-300 hover:pr-5"
                    >
                      <LoginIcon
                        className="mt-1"
                        width={'18px'}
                        fill={'#E7C700'}
                      />
                      ورود
                    </Link>
                  </li>
                  <li>
                    <Link
                      to={'/Register'}
                      className="FlexCenter text-black gap-2 p-3 text-sm font-semibold transition-all ease-in hover:bg-slate-300 hover:pr-5"
                    >
                      <SignupIcon
                        className="mt-1"
                        width={'18px'}
                        fill={'#E7C700'}
                      />
                      ثبت نام
                    </Link>
                  </li>
                </ul>
              </button>

              <Link
                to={"/login"}
                className="block bg-Gold rounded-full px-3.5 py-3 md:hidden"
              >
                <UserIcon width={'12px'} fill={'white'} />
              </Link>
            </div>
          </div>
        </nav>
      </div>
      {/* MOBILE NAVBAR  */}
      <AnimatePresence>
        {mobileNav && <MobileNav state={mobileNav} setState={setmobileNav} />}
      </AnimatePresence>
      {/* SEARCHBOX MODAL  */}
      <AnimatePresence>
        {SModal && <SearchModal state={SModal} setState={setSModal} />}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
