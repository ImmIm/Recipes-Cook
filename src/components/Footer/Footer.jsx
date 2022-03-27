import { Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

function Footer() {
  return (
    <footer>
      <Container
        maxWidth='1920px'
        sx={{
          padding: '0 0',
          border: '0 0',
          position: 'relative',
          // bottom: '20px',
        }}
        disableGutters>
        <Box
          maxWidth='1920px'
          position='relative'
          sx={{ width: '100%', backgroundColor: '#31708E', margin: '0 auto' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              margin: '0 auto',
              padding: '100px 0',
            }}>
            <Box
              sx={{
                maxWidth: '600px',
                height: '600px',
                backgroundColor: 'transparent',
                margin: '0 auto',
                marginTop: '10px',
              }}>
              {/* TODO: Left footer info */}
            </Box>
            <Box
              sx={{
                maxWidth: '600px',
                height: '600px',
                backgroundColor: 'transparent',
                margin: '0 auto',
                marginTop: '10px',
              }}></Box>
          </Box>
        </Box>
      </Container>
    </footer>
  );
}

export default Footer;
