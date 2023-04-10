import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as DArrow } from '../assets/icons/angles-left-solid.svg';


const PageBreadcrumb = () => {
  return (
    <div className="CategoryTitle font-iranBold ">
      <span>اجاره ویلا در شمال</span>
      <DArrow width={'13px'} fill={'currentColor'} />
      <Link to={'/'}>خانه</Link>
    </div>
  );
};

export default PageBreadcrumb;
