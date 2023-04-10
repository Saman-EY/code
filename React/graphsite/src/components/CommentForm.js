import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Button, Grid, TextField, Typography } from '@mui/material';
import { SEND_COMMENT } from '../graphql/mutations';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CommentForm = ({ slug }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [Toast, setToast] = useState(false);

  let [sendComment, { loading, data}] = useMutation(SEND_COMMENT, {
    variables: { name, text, email, slug }
  });

  let HandleSend = () => {
    if (name && email && text) {
      sendComment();
      setToast(true);
    } else {
      toast.warn('لطفا تمام فیلد ها را پر کنید', {
        position: 'top-center'
      });
    }
  };

  if (data && Toast) {
    toast.success('کامنت ارسال شد و منتظر تایید می باشد.', {
      position: 'top-center'
    });
    setToast(false);
  }

  return (
    <Grid
      container
      sx={{
        boxShadow: ' 0px 4px 12px rgba(0,0,0,0.1)',
        borderRadius: 3
      }}
      py={1}
      my={5}
    >
      <Grid item xs={12} m={2}>
        <Typography component="p" variant="h6" fontWeight={700} color="primary">
          ارسال کامنت
        </Typography>
      </Grid>

      <Grid item xs={12} m={2}>
        <TextField
          label="نام کاربری"
          variant="outlined"
          fullWidth
          value={name}
          onChange={({ target: { value } }) => setName(value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="ایمیل"
          variant="outlined"
          fullWidth
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        <TextField
          label="متن کامنت"
          variant="outlined"
          fullWidth
          multiline
          minRows={5}
          value={text}
          onChange={({ target: { value } }) => setText(value)}
        />
      </Grid>
      <Grid item xs={12} m={2}>
        {loading ? (
          <Button variant="contained" disabled>
            در حال ارسال...
          </Button>
        ) : (
          <Button variant="contained" onClick={HandleSend}>
            ارسال
          </Button>
        )}
      </Grid>
      <ToastContainer />
    </Grid>
  );
};

export default CommentForm;
