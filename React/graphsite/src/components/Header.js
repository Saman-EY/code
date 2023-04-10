import React from 'react';
import { AppBar, Toolbar, Button, Typography, Container } from '@mui/material';
import TurnedInIcon from '@mui/icons-material/TurnedIn';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <AppBar sx={{ bgcolor: 'secondary' }} position="sticky">
        <Container maxWidth="lg">
          <Toolbar>
            <Link
              to={'/'}
              style={{ flex: 1, textDecoration: 'none', color: 'inherit' }}
            >
              <Typography
                variant="h6"
                component="div"
                fontWeight="700"
                sx={{ flex: 1 }}
              >
                وبلاگ NOVA
              </Typography>
            </Link>
            <Link to={"/"} style={{color: "inherit"}}>
              <Button color="inherit">
                <TurnedInIcon />
              </Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
    </>
  );
};

export default Header;
