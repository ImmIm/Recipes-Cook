import { Grid } from '@mui/material';
import React from 'react';
import Recipe from './Recipe';
import { useSelector } from 'react-redux';

function RandomRecipes() {
  const recipes = useSelector((state) => state.recipes.randomRecipes);
  return (
    <Grid container spacing={2} sx={{ padding: '10px' }}>
      {recipes.map((recipe) => {
        const img = recipe.image;
        return <Recipe recipe={recipe} img={img} key={recipe.id} />;
      })}
    </Grid>
  );
}

export default RandomRecipes;
