import { Grid } from '@mui/material';
import React from 'react'
import { useSelector } from 'react-redux';
import Recipe from './Recipe';

function FilteredRecipes() {
const recipes = useSelector(state => state.recipes.filteredRecipes)

  return (
    <Grid container spacing={2} sx={{ padding: '10px' }}>
    {recipes.map((recipe) => {
      const img = recipe.image;
      return <Recipe recipe={recipe} img={img} key={recipe.id} />;
    })}
  </Grid>
  )
}

export default FilteredRecipes