import { Box, Button, Container } from '@mui/material';
import React from 'react';
import Search from '../Products/Search';
import HomePageSearch from './HomePageSearch';
import { useSelector } from 'react-redux';


function HomepageHero() {

  const theme = useSelector(state => state.ui.theme);
  return (
    <section>
      <Container
        maxWidth='1920px'
        sx={{ padding: '0 0', border: '0 0', position: 'relative', maxWidth: '1920px',height: '100vh', overflow: 'hidden', backgroundColor: theme === 'bright' ? '#E7DBC6' : '#31708E'}}
        disableGutters>
        <Box
          sx={{
            position: 'absolute',
            zIndex: '10',
            padding: '0 0',
            margin: '0 auto',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '18px',
            maxWidth: '550px',
          }}>
          <h1 style={{ color: '#FFFFFF', fontSize: 'calc(0.75em + 2vmin)'}}>
            Recipes&Cook is easy to use recipe finder<br></br>
            <br></br>Just enter what you have and get recipies for your dish
          </h1>
          <HomePageSearch />
          <Button variant='contained' sx={{ backgroundColor: '#8EC77F' }}>
            Get started
          </Button>
        </Box>
      </Container>
    </section>
  );
}

export default HomepageHero;
