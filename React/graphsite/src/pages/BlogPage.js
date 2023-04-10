import { useQuery } from '@apollo/client';
import { Container, Box, Typography, IconButton, Avatar } from '@mui/material';
import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { GET_BLOG_INFO } from '../graphql/queries';
import Loader from '../icon/Snake.gif';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import CommentForm from '../components/CommentForm';
import Comments from '../components/Comments';

const BlogPage = () => {
  let { slug } = useParams();

  let navigate = useNavigate();

  let { loading,  data } = useQuery(GET_BLOG_INFO, {
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
    post: { author, content, coverPhoto, title }
  } = data;
  return (
    <Container>
      <Box
        mt={8}
        display="flex"
        justifyContent={'space-between'}
        alignItems="center"
      >
        <Typography
          color={'primary'}
          component="p"
          variant="h4"
          fontWeight={600}
        >
          {title}
        </Typography>
        <IconButton sx={{ color: 'black' }} onClick={() => navigate(-1)}>
          <ArrowBackRoundedIcon />
        </IconButton>
      </Box>

      <Box display={'flex'} justifyContent="center" mt={4}>
        <img
          style={{ width: '100%', maxWidth: 1000, maxHeight: 570 }}
          src={coverPhoto.url}
          alt="cover"
        />
      </Box>

      <Box display={'flex'} alignItems="center" gap={3} mb={6}>
        <Avatar src={author.avatar.url} sx={{ width: 80, height: 80 }} />
        <div>
          <Typography component="p" variant="h5" fontWeight={600}>
            {author.name}
          </Typography>
          <Typography
            component="p"
            variant="p"
            fontSize={'.8rem'}
            fontWeight={600}
            color="text.secondary"
          >
            {author.field}
          </Typography>
        </div>
      </Box>

      <div
        style={{ fontWeight: 400, textAlign: 'justify', lineHeight: 3 }}
        dangerouslySetInnerHTML={{ __html: content.html }}
      ></div>

      <CommentForm slug={slug} />
      <Comments slug={slug} />
    </Container>
  );
};

export default BlogPage;
