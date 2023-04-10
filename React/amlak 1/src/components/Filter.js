import React from 'react';
import { ReactComponent as SearchIcon } from '../assets/icons/magnifying-glass-solid.svg';

const Filter = () => {
  return (
    <div className="shadow-md mb-10">
      <section className="flex gap-6 lg:container mx-auto px-7 py-4 flex-wrap items-center justify-center">
        <div className="FlexCenter px-2 gap-2 justify-between w-full max-w-xs bg-white rounded-md transition-all duration-200 hover:border-primary border-2 focus-within:border-black outline-black">
          <input
            className="text-xs py-1 flex-1 outline-none border-0 focus:border-0 focus:outline-none"
            type="text"
            placeholder="جستجو با کلمه کلیدی یا کد ملک یا آدرس یا شهر"
          />
          <button>
            <SearchIcon width={'14px'} fill={'blue'} />
          </button>
        </div>

        <div className="FlexCenter  gap-3">
          <select
            className="border text-sm text-primary rounded-md w-[110px] p-1 cursor-pointer font-semibold hover:border-primary transition-all duration-200"
            defaultValue={"newest"}
            name="sort"
            id="sort"
          >
            <option value="newest">جدیدترین ها</option>
            <option value="price">قیمت</option>
            <option value="mostVisited">پربازدید</option>
          </select>

          <select
            className="border text-sm text-primary rounded-md w-[110px] p-1 cursor-pointer font-semibold text-center hover:border-primary transition-all duration-200"
            defaultValue={"descending"}
            name="BasicSort"
            id="BasicSort"
          >
            <option value="descending">نزولی</option>
            <option value="ascending">صعودی</option>
          </select>
        </div>

        <div className='FlexCenter gap-2'>
          <select
            name="category"
            defaultValue={""}
            id="category"
            className="border text-sm text-primary rounded-md w-[90px] p-1 cursor-pointer font-semibold hover:border-primary transition-all duration-200 "
          >
            <option disabled value="">
              نوع دسته
            </option>
            <option value="buy-vila">خرید ویلا</option>
            <option value="rent-vila">اجاره ویلا</option>
          </select>

          <button className="border-2 text-sm font-iranMed text-primary py-1.5 rounded-md w-[80px] hover:border-primary transition-all duration-200">
            قیمت
          </button>
          <button className="border-2 text-sm font-iranMed text-primary py-1.5 rounded-md w-[80px] hover:border-primary transition-all duration-200">
            بیشتر
          </button>
          <button className="border-2 text-sm font-iranMed text-primary py-1.5 rounded-md w-[80px] hover:border-primary transition-all duration-200">
            جستجو
          </button>
        </div>
      </section>
    </div>
  );
};

export default Filter;
