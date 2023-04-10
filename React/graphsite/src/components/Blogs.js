import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_BLOGS_INFO } from '../graphql/queries';
import { Grid, Typography } from '@mui/material';
import CardEl from '../template/CardEl';
import Loader from '../icon/Snake.gif';

const Blogs = () => {
  let { data} = useQuery(GET_BLOGS_INFO);

  return (
    <>
      <Typography
        component={'h3'}
        variant="h6"
        fontWeight={700}
        mb={2}
        fontSize={18}
      >
        مقالات
      </Typography>
      {!data && <img  src={Loader} alt="gif" />}
      {data && (
        <Grid container spacing={{ xs: 3 }}>
          {data.posts.map((item) => (
            <Grid key={item.id} item xs={12} sm={6} md={4}>
              <CardEl data={item} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Blogs;
