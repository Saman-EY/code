import React, { useState } from 'react';
import { useFormik } from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import { Link } from 'react-router-dom';

import LoginSms from '../template/LoginSms';

import Banner from '../assets/images/Login.png';
import Logo from '../assets/images/logo2.png';

const Login = () => {
  let [smsLogin, setsmsLogin] = useState(false);

  let formik = useFormik({
    initialValues: {
      phone: '',
      password: ''
    },
    validationSchema: Yup.object({
      phone: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          'شماره معتبر نمی باشد'
        )
        .required('این قسمت نمیتواند خالی باشد'),
      password: Yup.string()
        .min(8, 'باید حداقل 8 کرکتر داشته باشد')
        .required('این قسمت نمیتواند خالی باشد')
    }),
    onSubmit: (values) => {
      let data = formik.values;
      console.log(data);
      // axios({
      //   method: 'POST',
      //   url: 'http://app.aliqomi.ir/api/v1/login',
      //   headers: { 'Content-Type': 'application/json' },
      //   data: data
      // })
      //   .then((res) => {
      //     console.log(res);
      //   })
      //   .catch((err) => {
      //     console.error(err);
      //   });

      axios
        .post('/login', data)
        .then((res) => console.log(res))
        .catch((err) => console.error(err));
    }
  });

  return (
    <section className="">
      <img className="w-full" src={Banner} alt="login pic" />
      <section className="bg-white border-2 rounded-md border-slate-300 max-w-md h-fit fixed inset-0 my-auto mx-4 Break3:m-auto z-20 flex flex-col  p-4">
        <Link className="mx-auto" to={'/'}>
          <img className="w-[13rem]" src={Logo} alt="logo" />
        </Link>
        <p className="bg-[#D1ECF1] border border-emerald-300 rounded-[5px] py-5 px-5 text-justify text-sm font-iranMed text-emerald-900 mt-5">
          این پنل تخصصی بوده و صرفا برای نمایندگی های سایت اول خونه و مالکان
          حقیقی طراحی شده از این رو به سایر مشاوران املاک در سطح استان مازندارن
          خدماتی ارائه نمی شود.
        </p>

        <form
          onSubmit={formik.handleSubmit}
          className="w-full mt-4 flex flex-col"
        >
          <div className="flex flex-col gap-2 h-24">
            <label
              className="text-primary  font-iranMed text-sm"
              htmlFor="phone"
            >
              شماره موبایل
            </label>
            <input
              className="border-2 border-slate-200 pr-2 font-iranMed outline-none focus:border-primary transition-all rounded-[3px] h-9"
              type="text"
              name="phone"
              id="phone"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.phone}
            />
            {/* validate */}
            {formik.touched.phone && formik.errors.phone && (
              <p className="text-red-600 font-iranBold text-xs">
                {formik.errors.phone}
              </p>
            )}
          </div>
          <div className="flex flex-col gap-2 h-24">
            <label
              className="text-primary  font-iranMed text-sm"
              htmlFor="password"
            >
              رمز عبور
            </label>
            <input
              className="border-2 border-slate-200 pr-2 font-iranMed outline-none focus:border-primary transition-all rounded-[3px] h-9"
              type="password"
              name="password"
              id="password"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {/* validate */}
            {formik.touched.password && formik.errors.password && (
              <p className="text-red-600 font-iranBold text-xs">
                {formik.errors.password}
              </p>
            )}
          </div>

          <div className="flex justify-between flex-wrap gap-2">
            <button
              type="submit"
              className="border-2 border-primary rounded-md w-fit px-6 pt-1.5 pb-2 hover:text-white hover:bg-primary transition-all font-iranMed text-sm"
            >
              ورود
            </button>
            <button
              type="button"
              onClick={() => setsmsLogin(true)}
              className="border-2 border-green-500 rounded-md w-fit px-6 pt-1.5 pb-2 hover:text-white hover:bg-green-500 transition-all font-iranMed text-sm"
            >
              ورود با پیامک
            </button>
          </div>
        </form>
        <Link
          to={''}
          className="w-fit mt-3 text-sm font-bold hover:text-green-700"
        >
          رمز عبور خود را فراموش کردم؟
        </Link>
        <Link
          to={'/Register'}
          className="w-fit bg-primary text-white mt-4 px-6 py-2 rounded-md hover:bg-blue-400 transition-all"
        >
          عضویت
        </Link>
      </section>

      <LoginSms state={smsLogin} setstate={setsmsLogin} />
    </section>
  );
};

export default Login;
