import { useQuery } from '@apollo/client';
import { Avatar, Box, Grid, Typography } from '@mui/material';
import React from 'react';
import { GET_BLOG_COMMENTS } from '../graphql/queries';

const Comments = ({ slug }) => {
  let { data } = useQuery(GET_BLOG_COMMENTS, {
    variables: { slug }
  });

  if (!data) return null;

  let { comments } = data;
  console.log(comments);


  return (
    <Grid
      container
      sx={{
        boxShadow: ' 0px 4px 12px rgba(0,0,0,0.1)',
        borderRadius: 4,
        py: 2,
        mt: 2,
        mb: 10
      }}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" color="primary" fontWeight={600}>
          کامنت ها
        </Typography>
      </Grid>
      {comments.map((item) => (
        <Grid
        key={item.id}
          item
          xs={12}
          m={2}
          p={2}
          border="1px solid silver"
          borderRadius={1}
        >
          <Box
            component="div"
            display={'flex'}
            alignItems={'center'}
            gap={1.5}
            mb={2}
          >
            <Avatar>{item.name[0]}</Avatar>
            <Typography
              component="p"
              variant="h6"
              fontSize={'1rem'}
              fontWeight={600}
            >
              {item.name}
            </Typography>
          </Box>
          <Typography
            component="p"
            variant="p"
            fontWeight={350}
            textAlign="justify"
            lineHeight={2}
          >
            {item.text}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
};

export default Comments;
