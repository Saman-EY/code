import React from 'react';

const AlbumSinglePage = ({ data }) => {
//   console.log(data);

  return (
    <>
      <h1>This is : {data.title} </h1>
      <h2>userid: {data.userId}</h2>
    </>
  );
};

export default AlbumSinglePage;

export let getServerSideProps = async (context) => {
  let { params, req, query } = context;

  let res = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.albumid}`
  );
  let data = await res.json();

  return {
    props: { data }
  };
};
