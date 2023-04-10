import React from 'react';
// import { Formik, useFormik } from 'formik';
import { ReactComponent as CloseBtn } from '../assets/icons/circle-xmark-solid.svg';

const VCodeModal = ({ state, setstate }) => {
  let Close = (e) => {
    if (e.target && e.target.id === 'VCode-overlay') {
      setstate(false);
    }
  };

  return (
    <>
      {state && (
        <div
          onClick={Close}
          id="VCode-overlay"
          className=" fixed inset-0  bg-black bg-opacity-50 z-20 w-full flex justify-center p-4"
        >
          <div className="relative   pt-8 h-fit w-full max-w-md rounded-lg shadow bg-slate-200 mt-40 ">
            <button
              type="button"
              className="absolute top-3 right-2.5 bg-transparent hover:text-red-600  hover:bg-white  rounded-lg  p-1.5 "
              onClick={() => setstate(false)}
            >
              <CloseBtn width={'15px'} fill={'currentColor'} />
            </button>

            <form
              className="p-4 flex flex-col gap-1"
              onSubmit={e => e.preventDefault()}
            >
              <div className="flex flex-col mt-5 gap-3 h-24">
                <label className="text-sm font-bold " htmlFor="phoneNum">
                  کد دریافت شده را وارد کنید
                </label>
                <input
                  className="rounded-md border h-7 shadow-sm outline-none pr-3 font-iranBold text-sm focus:border-primary"
                  type="text"
                  name="phoneNum"
                  
                />
                
              </div>
              <button
                type="submit"
                className="bg-primary text-white rounded-md px-4 py-2 hover:bg-green-500 transition-all duration-300"
                // onClick={e => e.preventDefault()}
              >
                تایید
              </button>
            </form>


          </div>
        </div>
      )}
    </>
  );
};

export default VCodeModal;
