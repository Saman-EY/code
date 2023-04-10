import React from 'react';
import { Link } from 'react-router-dom';
// Icon
import { ReactComponent as DArrow } from '../assets/icons/angles-left-solid.svg';
// components
import Aside from '../components/Aside';
import CardContainer from '../components/CardContainer';
import Filter from '../components/Filter';
import CategoryLinks from '../template/CategoryLinks';
import PageBreadcrumb from '../template/PageBreadcrumb';

const Category = () => {
  return (
    <>
      <PageBreadcrumb />
      <Filter />
      {/* <CategoryLinks /> */}
      <section className='flex flex-col-reverse Break2:flex-row gap-5 max-w-6xl mx-auto px-4'>
        <Aside />
        <CardContainer />
      </section>
    </>
  );
};

export default Category;
