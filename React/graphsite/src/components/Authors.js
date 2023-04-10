import React from 'react';
import { useQuery } from '@apollo/client';
import { Typography, Grid, Avatar, Divider } from '@mui/material';
import { GET_AUTHORS_INFO } from '../graphql/queries';
import { Link } from 'react-router-dom';
import Loader from '../icon/Snake.gif';

const Authors = () => {
  let { loading, data } = useQuery(GET_AUTHORS_INFO);

  if (loading) return <img style={{marginTop: 40}} src={Loader} alt="gif" />;

  const { authors } = data;

  return (
    <>
      <Typography
        component={'h3'}
        variant="h6"
        fontWeight={600}
        mb={2}
        fontSize={18}
      >
        نویسنده ها
      </Typography>
      {data && (
        <Grid
          container
          sx={{
            boxShadow: ' 0px 4px 12px rgba(0,0,0,0.1)',
            borderRadius: 3,
            position: 'sticky',
            top: 85
          }}
        >
          {authors.map((item, index) => (
            <React.Fragment key={item.id}>
              <Grid key={item.id} xs={12} item sx={{ p: 2 }}>
                <Link
                  to={`/authors/${item.slug}`}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 10,
                    textDecoration: 'none'
                  }}
                >
                  <Avatar src={item.avatar.url} />
                  <Typography
                    component={'p'}
                    variant="p"
                    color="text.secondary"
                    fontWeight={500}
                    fontSize=".8rem"
                  >
                    {item.name}
                  </Typography>
                </Link>
              </Grid>
              {index !== authors.length - 1 && (
                <Grid item xs={12}>
                  <Divider variant="middle" />
                </Grid>
              )}
            </React.Fragment>
          ))}
        </Grid>
      )}
    </>
  );
};

export default Authors;
