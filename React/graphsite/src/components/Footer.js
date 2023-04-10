import { Box, Typography } from '@mui/material';
import React from 'react';

const Footer = () => {
  

  return (
    <Box  width="100%" bgcolor={'grey.200'}>
      <Typography
        p={1}
        fontWeight={700}
        sx={{ wordSpacing: 4, textAlign: 'center' }}
        color="primary"
      >
        پروزه وبلاگ با NOVA | GRAPHQL
      </Typography>
    </Box>
  );
};

export default Footer;
