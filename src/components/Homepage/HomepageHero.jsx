import { Box, Button, Container } from '@mui/material';
import React from 'react';
import HomepageMainJpg from '../../Assets/Imgs/HomepageMainJpg.jpg';
import Search from '../Products/Search';
import HomePageSearch from './HomePageSearch';

function HomepageHero() {
  return (
    <section>
      <Container
        maxWidth='1920px'
        sx={{ padding: '0 0', border: '0 0', position: 'relative', maxWidth: '1920px', width: '100%', backgroundColor: '#31708E' }}
        disableGutters>
        <img
          src={HomepageMainJpg}
          alt='Food'
          padding='0px'
          style={{ width: '100%',height: '100%', maxWidth: '1920px', overflow: 'hidden'}}
        />
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
