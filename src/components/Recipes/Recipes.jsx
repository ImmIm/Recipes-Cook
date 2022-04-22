import React from 'react';
import Recipe from './Recipe.jsx';
import RecipeSearch from './RecipeSearch.jsx';
import Container from '@mui/material/Container';
import { Box, Grid } from '@mui/material';
import OneRecipe from './OneRecipe.jsx';
import ResultOfSearch from '../Products/ResultOfSearch.jsx';
import FilteredRecipes from './FilteredRecipes.jsx';
import RandomRecipes from './RandomRecipes.jsx';
import { recipesActions } from '../../store/store';
import { useDispatch,useSelector } from 'react-redux';


const Recipes = () => {
  const dispatch = useDispatch();
  const theme = useSelector(state => state.ui.theme);
  const noneRecipe = [
    {
      id: 'test',
      title: 'Sorry. we"ve out of points :C',
      image: 'https://m.buro247.ua/images/2017/09/insta-of-the-week-sad-cat-luhu-17.jpg',
      description: 'Error 402',
      ingredient: ['garlic', 'apple', 'orange'],
    },
  ];

  // 5a0abc362e76484ba29eeb96b16641a7
  // 8dbf3f3eb9894749829f44b3ea57a34d

  React.useEffect(() => {
      getData()(dispatch);
      dispatch(recipesActions.setLoading());
    }
  , []);


  const getData = () => async (dispatch) => {
    fetch(
      `https://api.spoonacular.com/recipes/random?&number=12&apiKey=5a0abc362e76484ba29eeb96b16641a7`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.status === 'failure') {
          dispatch(recipesActions.setRandomedRecipes({ data: noneRecipe }));
          dispatch(recipesActions.setLoaded());
          return;
        }
        dispatch(recipesActions.setRandomedRecipes({ data: data }));
        dispatch(recipesActions.setLoaded());
      })
      .catch((err) => {
        console.error(err.message);
      });
    return;
  };

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
    <RandomRecipes />
    </Grid>
  </Grid>

        

  );
};

export default Recipes;
