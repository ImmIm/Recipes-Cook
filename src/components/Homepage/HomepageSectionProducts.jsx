import { Button, Container } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import BorderTopMainpage from '../../Assets/svg/BorderTopMainpage';
import MainpageFridge from '../../Assets/svg/MainpageFridge';

function HomepageSectionProducts() {
  return (
    <section>
      <Container
        maxWidth='1920px'
        sx={{
          padding: '0 0',
          border: '0 0',
          position: 'relative',
          // bottom: '10px',
        }}
        disableGutters>
        <Box
          maxWidth='1920px'
          position='relative'
          sx={{ width: '100%', backgroundColor: '#5085A5', margin: '0 auto' }}>
          <BorderTopMainpage />
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
              <MainpageFridge />
              {/* TODO: Image of fridge */}
            </Box>
            <Box
              sx={{
                maxWidth: '600px',
                height: '600px',
                backgroundColor: 'transparent',
                margin: '0 auto',
                marginTop: '10px',
              }}>
              <h2
                style={{
                  fontSize: 'calc(0.75em + 2vmin)',
                  textAlign: 'right',
                  color: '#F7F9FB',
                }}>
                Pick what is in your fridge now, by selecting from vast variety
                of products
              </h2>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  flexWrap: 'wrap',
                  margin: '10px auto',
                  maxWidth: '600px'
                }}>
                <Button
                  sx={{
                    border: '1px solid #F7F9FB',
                    borderRadius: '30px',
                    margin: '0 auto',
                    color: '#F7F9FB',
                    width: '125px',
                    height: '55px',
                    marginTop: '10px',
                  }}>
                  Vegetables
                </Button>
                <Button
                  sx={{
                    border: '1px solid #F7F9FB',
                    borderRadius: '30px',
                    margin: '0 auto',
                    color: '#F7F9FB',
                    width: '125px',
                    height: '55px',
                    marginTop: '10px',
                  }}>
                  Fruits
                </Button>
                <Button
                  sx={{
                    border: '1px solid #F7F9FB',
                    borderRadius: '30px',
                    margin: '0 auto',
                    color: '#F7F9FB',
                    width: '125px',
                    height: '55px',
                    marginTop: '10px',
                  }}>
                  Diary
                </Button>

                <Button
                  sx={{
                    border: '1px solid #F7F9FB',
                    borderRadius: '30px',
                    margin: '0 auto',
                    color: '#F7F9FB',
                    width: '125px',
                    height: '55px',
                    marginTop: '10px',
                  }}>
                  Meat
                </Button>
                <Button
                  sx={{
                    border: '1px solid #F7F9FB',
                    borderRadius: '30px',
                    margin: '0 auto',
                    color: '#F7F9FB',
                    width: '125px',
                    height: '55px',
                    marginTop: '10px',
                  }}>
                  Fish
                </Button>
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </section>
  );
}

export default HomepageSectionProducts;
