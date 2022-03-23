import { Box, Button, Container } from '@mui/material';
import React from 'react';
import HomepageMainJpg from '../../Assets/Imgs/HomepageMainJpg.jpg';


function HomepageHero() {
  
  return (
    <section>
      <Container
        maxWidth='1440px'
        sx={{ padding: '0 0', border: '0 0' }}
        disableGutters>
        <img
          src={HomepageMainJpg}
          alt='Food'
          padding='0px'
          style={{ maxWidth: '1440px', height: 'auto' }}
        />
        <Box
          sx={{
            position: 'absolute',
            zIndex: '100',
            padding: '0 0',
            margin: '0 auto',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            fontSize: '18px',
            width: '550px',
          }}>
          <p style={{ color: '#FFFFFF', fontSize: '48px'}}>
            App Name is easy to use recipe finder<br></br>
            <br></br>Just enter what you have and get recipies for your dish
          </p>
          <Button variant='contained' sx={{backgroundColor: '#8EC77F'}}>Get started</Button>
        </Box>
      </Container>
    </section>
  );
}

export default HomepageHero;
