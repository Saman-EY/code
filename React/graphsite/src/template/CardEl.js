import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Typography,
  CardMedia,
  CardActions,
  Divider,
  Button
} from '@mui/material';
import { Link } from 'react-router-dom';

const CardEl = ({ data }) => {
  let { author, slug, title, coverPhoto } = data;
  return (
    <Card sx={{ boxShadow: ' 0px 4px 12px rgba(0,0,0,0.1)', borderRadius: 3 }}>
      <CardHeader
        avatar={<Avatar sx={{ ml: 2 }} src={author.avatar.url} />}
        title={
          <Typography
            sx={{ color: 'grey', fontSize: '.9rem', fontWeight: 500 }}
            component={'p'}
            variant="p"
          >
            {author.name}
          </Typography>
        }
      />
      <CardMedia
        component="img"
        height={200}
        image={coverPhoto.url}
        alt={slug}
      />
      <CardContent>
        <Typography
          component="p"
          variant="p"
          fontWeight={500}
          whiteSpace="nowrap"
        >
          {title}
        </Typography>
      </CardContent>
      <Divider variant="middle" sx={{mb: 1}} />
      <CardActions>
        <Link style={{width: "100%", textDecoration: "none"}} to={`/blogs/${slug}`}>
        <Button variant='outlined' sx={{width: "100%", borderRadius: 3}} >مطالعه مقاله</Button>
        </Link>
      </CardActions>
    </Card>
  );
};

export default CardEl;
