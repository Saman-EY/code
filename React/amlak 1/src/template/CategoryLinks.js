import React from 'react';
import { Link } from 'react-router-dom';

const CategoryLinks = () => {
    return (
        <div className='flex gap-8 my-4 justify-center'>
            <Link className='border flex-1 text-center border-primary rounded-md shadow-primary shadow-md p-2' to={""}>خرید ویلا جنگلی</Link>
            <Link className='border flex-1 text-center border-primary rounded-md shadow-primary shadow-md p-2' to={""}>خرید ویلا ساحلی</Link>
            <Link className='border flex-1 text-center border-primary rounded-md shadow-primary shadow-md p-2' to={""}>خرید ویلا کوهستانی</Link>
        </div>
    );
};

export default CategoryLinks;