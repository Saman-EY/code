import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_AUTHOR_INFO } from '../graphql/queries';
import { useParams } from 'react-router-dom';
import {
  Avatar,
  Box,
  Container,
  Grid,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Divider,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

import Loader from '../icon/Snake.gif';

const AuthorPage = () => {
  let { slug } = useParams();

  let { loading, data } = useQuery(GET_AUTHOR_INFO, {
    variables: { slug }
  });

  if (loading)
    return (
      <Container
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <img style={{ marginTop: 40, width: 50 }} src={Loader} alt="gif" />
      </Container>
    );

  let {
    author: { posts, name, field, description, avatar }
  } = data;

  return (
    <Container maxWidth="lg">
      <Box
        display={'flex'}
        flexDirection={'column'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={2}
        mt={10}
      >
        <Avatar src={avatar.url} sx={{ width: 250, height: 250 }} />
        <Typography component={'p'} variant="h5">
          {name}
        </Typography>
        <Typography component={'p'} variant="h6" color={'text.secondary'}>
          {field}
        </Typography>
      </Box>

      <div
        style={{ textAlign: 'justify' }}
        dangerouslySetInnerHTML={{ __html: description.html }}
      ></div>

      <Typography component={'p'} variant="h5" mt={5} mb={3}>
        مقالات {name}
      </Typography>

      <Grid
        container
        rowSpacing={{ xs: 3, md: 5 }}
        columnSpacing={{ md: 5 }}
        mb={10}
      >
        {posts.map((item) => (
          <Grid item key={item.id} xs={12} sm={6} md={4}>
            <Card
              sx={{
                boxShadow: ' 0px 4px 12px rgba(0,0,0,0.1)',
                borderRadius: 3
              }}
            >
              <CardMedia
                component={'img'}
                image={item.coverPhoto.url}
                alt={item.title}
                height={250}
              />
              <CardContent>
                <Typography component={'p'} variant={'p'} fontWeight={600}>
                  {item.title}
                </Typography>
              </CardContent>
              <Divider variant="middle" />
              <CardActions>
                <Link
                  style={{ width: '100%', textDecoration: 'none' }}
                  to={`/blogs/${item.slug}`}
                >
                  <Button
                    variant="outlined"
                    sx={{ width: '100%', borderRadius: 3 }}
                  >
                    مطالعه مقاله
                  </Button>
                </Link>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default AuthorPage;
