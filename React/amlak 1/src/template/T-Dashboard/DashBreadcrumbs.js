import React from 'react';

import { ReactComponent as ArrowIcon } from '../../assets/icons/angle-left-solid.svg';


const DashBreadcrumbs = () => {
    return (
        <div className='h-fit flex-1 flex gap-2 border-b shadow-md p-2'>
            صفحه اصلی < ArrowIcon width={"8px"} /> پنل مدیریت
            
        </div>
    );
};

export default DashBreadcrumbs;