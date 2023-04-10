import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ReactComponent as SearchIcon } from '../assets/icons/magnifying-glass-solid.svg';

const SearchModal = ({ state, setState }) => {
  let [search, setSearch] = useState('');

  let CloseModal = (e) => {
    if (e.target.id === 'SearchModal-overlay') {
      setState(false);
    }
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ ease: 'easeOut', duration: 0.3 }}
      id="SearchModal-overlay"
      onClick={CloseModal}
      className="fixed inset-0 bg-black bg-opacity-50 z-30 flex items-start justify-center"
    >
      <motion.div
        initial={{ y: -600 }}
        animate={{ y: 0 }}
        exit={{ y: -600 }}
        transition={{ duration: 0.4 }}
        className="bg-white FlexCenter mx-8 mt-32 w-full max-w-[900px] rounded-md group z-40"
      >
        <input
          className=" w-full h-10 outline-none ring-primary transition-all duration-200 focus:ring-2 border-0 pr-2 rounded-r-md placeholder:text-xs placeholder:font-iranBold"
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="جستجو بر اساس کلمه کلیدی یا کد ملک یا آدرس یا شهر یا نام شهر"
        />
        <button className="bg-slate-300 h-10 w-10 transition-all duration-200 group-focus-within:ring-2 text-primary hover:text-white hover:bg-slate-400 ring-primary  FlexCenter justify-center rounded-l-md ">
          <SearchIcon width={'15px'} fill={'currentColor'} />
        </button>
      </motion.div>
    </motion.section>
  );
};

export default SearchModal;
