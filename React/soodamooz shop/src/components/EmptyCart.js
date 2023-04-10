import React from 'react';
// img
import basket from '../assets/images/basket.png';

const EmptyCart = () => {
    return (
        <div className="bg-[#00173D] h-screen">
            <section className="BackdropImg px-2">
                
                <div className="Line"></div>
                <div className="bg-[#001636] backdrop-blur-[3rem] bg-opacity-50 w-full  max-w-[84rem] h-[30rem] mx-auto backdrop-brightness-150 shadow-2xl relative -top-20 rounded-2xl flex flex-col justify-center items-center ">
                    <img
                        className="w-56 -scale-x-100 mb-10"
                        src={basket}
                        alt=""
                    />
                    <p className="text-textColor-2 text-3xl font-bold">
                        سبد خرید شما خالیه !
                    </p>
                    <p className="text-textColor-1 my-4">
                        می توانید برای مشاهده محصولات بیشتر به صفحات زیر بروید:
                    </p>
                    <div className="flexCenter gap-3">
                        <button className="BasketBtn">
                            تخفیف ها و پیشنهاد ها
                        </button>
                        <button className="BasketBtn">
                            پرفروش ترین ها
                        </button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default EmptyCart;
