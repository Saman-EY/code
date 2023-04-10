import React from 'react';
import Blogs from '../components/Blogs';
import Authors from '../components/Authors';
import { Container, Grid } from '@mui/material';

const Landing = () => {
  return (
    <>
      <Container maxWidth={'lg'}>
        <Grid
          container
          sx={{
            p: 4,
            pr: 3
          }}
          rowSpacing={10}
          columnSpacing={{ xs: 0, md: 3 }}
        >
          <Grid item xs={12} md={3}>
            <Authors />
          </Grid>
          <Grid item xs={12} md={9}>
            <Blogs />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Landing;
