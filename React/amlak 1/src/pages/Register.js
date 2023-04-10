import React, {useState} from 'react';
import axios from 'axios';
import { Formik, useFormik } from 'formik'; 
import * as Yup from 'yup';

import Banner from '../assets/images/register.png';
import Logo from '../assets/images/logo2.png';

import VCodeModal from '../template/VCodeModal';

// icon
import { ReactComponent as Star } from '../assets/icons/star-solid.svg';
import { Link } from 'react-router-dom';

const Register = () => {

  let [VCode, setVCode] = useState(false);

  let formik = useFormik({
    initialValues: {
      name: '',
      phone: '',
      password: ''
    },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(15, 'باید 15 حرف یا کمتر باشد')
        .required('این قسمت نمیتواند خالی باشد'),
      phone: Yup.string()
        .matches(
          /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
          'شماره معتبر نمی باشد'
        )
        .required('این قسمت نمیتواند خالی باشد'),
      password: Yup.string()
        .min(8, 'باید حداقل 8 کرکتر داشته باشد')
        // .matches(/[a-zA-Z]/, 'باید دارای حروف لاتین باشد')
        .required('این قسمت نمیتواند خالی باشد')
    }),

    onSubmit: (values) => {
      let data = formik.values; 
      console.log(data);
      
      axios
        .post('/register', data)
        .then((res) => {
          console.log(res)
          setVCode(true);
          console.log(res.status)
        })
        .catch((err) => console.error(err));
    }
  });



  return (
    <section className="relative lg:flex items-center justify-center">
      <img className="w-full" src={Banner} alt="banner" />
      <section className="p-5 absolute top-16  w-full lg:max-w-[1200px]  flex flex-col lg:flex-row gap-5 justify-center">
        {/* card */}
        <div className="w-full lg:max-w-xl  bg-white border-2 border-slate-300 rounded-[4px] p-4">
          <Link to={'/'}>
            <img className="mx-auto w-52" src={Logo} alt="logo" />
          </Link>

          <form
            onSubmit={formik.handleSubmit}
            className="w-full mt-8 flex flex-col gap-2"
          >
            {/* sec1 */}
            <div className="flex gap-2 flex-col lg:flex-row">
              {/* name */}
              <div className="flex w-full h-24 flex-col gap-2">
                <label
                  className="flex items-center gap-2 font-iranMed text-sm"
                  htmlFor="name"
                >
                  <Star width={'15px'} fill={'#006AFF'} />
                  نام و نام خانوادگی
                </label>
                <input
                  className="border-2 border-slate-200 pr-2 font-iranMed outline-none focus:border-primary transition-all rounded-[4px] h-9 placeholder:text-xs"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="نام خود را وارد کنید"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                />
                {/* validate */}
                {formik.touched.name && formik.errors.name && (
                  <p className="text-red-600 font-iranBold text-xs">
                    {formik.errors.name}
                  </p>
                )}
              </div>
              {/* phone */}
              <div className="flex w-full flex-col gap-2 h-24">
                <label
                  className=" flex items-center gap-2  font-iranMed text-sm"
                  htmlFor="phone"
                >
                  <Star width={'15px'} fill={'#006AFF'} />
                  شماره موبایل
                </label>
                <input
                  className="border-2 border-slate-200 pr-2 font-iranMed outline-none focus:border-primary transition-all rounded-[4px] h-9 placeholder:text-xs"
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="09xxxxxxxxx"
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
            </div>
            {/* password */}
            <div className="flex flex-col gap-2 h-24">
              <label
                className=" flex items-center gap-2 font-iranMed text-sm"
                htmlFor="password"
              >
                <Star width={'15px'} fill={'#006AFF'} />
                رمز عبور
              </label>
              <input
                className="border-2 border-slate-200 pr-2 font-iranMed outline-none focus:border-primary transition-all rounded-[4px] h-9 placeholder:text-xs"
                type="password"
                name="password"
                id="password"
                placeholder="رمز خود را وارد کنید"
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

            <button
              className="bg-primary border-2 border-primary text-white font-iranMed hover:bg-white hover:text-black rounded-md px-4 py-2 transition-all"
              type="submit"
            >
              ثبت نام
            </button>

            <Link
              className="bg-green-600 text-white w-fit px-4 py-2 rounded-md hover:bg-green-700 transition-all"
              to={'/Login'}
            >
              قبلا ثبت نام کرده ام
            </Link>
          </form>
        </div>

        {/* card */}
        <div className="w-full lg:max-w-lg bg-white border-2 border-slate-300 rounded-[4px] p-4 pb-6">
          <p className="bg-[#D1ECF1] border border-emerald-300 rounded-[5px] py-5 px-5 text-justify text-sm font-iranMed text-emerald-900 mt-2 leading-6">
            این پنل تخصصی بوده و صرفا برای نمایندگی های سایت اول خونه و مالکان
            حقیقی طراحی شده از این رو به سایر مشاوران املاک در سطح استان
            مازندارن خدماتی ارائه نمی شود.
          </p>
          <p className="font-iranBold text-sm mt-4 text-center">
            7 برتری که با ثبت نام در اول خونه تصاحب خواهید کرد
          </p>

          <ul className="flex flex-col gap-5 mt-10 text-xs font-iranMed  RegisterUl">
            <li>
              کسب در آمد از سودمند ترین کسب و کار های برتر دنیا یعنی کسب و کار
              املاک
            </li>
            <li>
              امکان بهرمندی از میز کار مجازی برای فعالیت های مربوط به خرید و
              فروش و ساخت و ساز ساختمان
            </li>
            <li>
              امکان بهرمندی از سه روز اقامت رایگان برای بازدید و خرید ملک های
              انتخاب شده
            </li>
            <li>مشاوره های رایگان در هر زمان</li>
            <li>
              پشتیبانی فنی مشاوران متخصص عرصه هاس مختلف مربوط به املاک و مستغلات
              و ساختمان
            </li>
            <li>ثبت رایگان آگهی های فروش</li>
            <li>
              و معامله های امن به مدد همراهی مشاوران خوش سابقه و کار بلد سایت
              اول خونه تا آخرین لحظه هر پروژه
            </li>
          </ul>
        </div>
      </section>


      <VCodeModal state={VCode} setstate={setVCode} />
    </section>
  );
};

export default Register;
