import ListOfProducts from './ListOfProducts';
import Search from './Search';
import React from 'react';
import ResultOfSearch from './ResultOfSearch';
import './Products.css';

import { Grid } from '@mui/material';
import Header from '../Header/Header';
import { Box } from '@mui/system';
import { useSelector } from 'react-redux';


export default function Products(props) {
  const theme = useSelector(state => state.ui.theme)
  
  return (
        <Grid
          container
          component='main'
          spacing={2}

          sx={{ backgroundColor: theme === 'bright' ? '#E7DBC6' : '#31708E',height: '100%'}}>
          <Grid item component='aside' xs={4} sx={{overflow: 'hidden', backgroundColor: theme === 'bright' ? '#E7DBC6' : '#31708E'}} >
            <Box
              xs={4}
              sx={{
                margin: '10px 0',
                backgroundColor:  theme === 'bright' ? '#E7DBC6' : '#31708E',
                borderRadius: '10px',
                boxShadow: '3px 5px 10px 0px #000000',
                position: 'sticky'
              }}>
              <Search />
              <ListOfProducts />
            </Box>
          </Grid>
          <Grid item xs={8} component='section'>
              <ResultOfSearch />
          </Grid>
        </Grid>
   
  );
}
