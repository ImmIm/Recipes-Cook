import React from 'react';
import Recipe from './Recipe.jsx';
import RecipeSearch from './RecipeSearch.jsx';
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';
import OneRecipe from './OneRecipe.jsx';

const Recipes = () => {
  return (
    <Grid
    container
    component='main'
    spacing={2}
    sx={{ backgroundColor: '#E7DBC6',height: '100%', overflow: 'hidden'}}>
    <Grid item component='aside' xs={4} sx={{overflow: 'hidden'}}>
      <Box
        xs={4}
        sx={{
          margin: '10px 0',
          backgroundColor: '#FFFFFF',
          borderRadius: '10px',
          boxShadow: '3px 5px 10px 0px #000000',
          position: 'sticky'
        }}>
        <RecipeSearch />
      </Box>
    </Grid>
    <Grid item xs={8} component='section'>
    {/* <OneRecipe/> */}
    </Grid>
  </Grid>

        

  );
};

export default Recipes;
