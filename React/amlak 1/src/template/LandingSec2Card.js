import React from 'react';
import CardImg from '../assets/images/Banner_Sale_1.png';

const LandingSec2Card = () => {
  return (
    <div className="shadow-md rounded-md flex flex-col bg-Blackprimary w-full max-w-[400px] Break1:max-w-[280px]">
      <a href="#" className="flex p-4">
        <img className="w-full rounded-t-md" src={CardImg} alt="card-img" />
      </a>
      <p className="px-4 text-center text-[.82rem] leading-6 font-iranBold bgred mb-5  h-32 text-gray-200">
        ما با ارائه نمودار های قیمتی متفاوت ویلا ها به شما، شما را در اجاره ویلا
        مورد نظرتان با قیمتی مناسب همراهی می نماییم. اول خونه همراه همیشگی شما
        است.
      </p>
      <a
        href="#"
        className="mx-auto mb-6 w-36 h-10 rounded-lg font-iranBold text-sm FlexCenter justify-center border border-Gold text-Gold transition-all duration-300 hover:text-white hover:bg-Gold"
      >
        اجاره ویلا
      </a>
    </div>
  );
};

export default LandingSec2Card;
