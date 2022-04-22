import { Grid } from '@mui/material';
import { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import { useSelector } from 'react-redux';
import Recipe from '../Recipes/Recipe';
import { useDispatch} from 'react-redux';
import { recipesActions } from '../../store/store';

export default function ResultOfSearch(props) {
    const context = useContext(AppContext);
    const dispatch = useDispatch()
  const recipes = useSelector((store) => store.recipes.recipes);

  const currentProducts = context.currentProducts;
 

  useEffect(() => {
    console.log('Changed context');
  }, [context.currentProducts]);


  dispatch(recipesActions.setInredients({ ingredient: currentProducts }));

  return (
    <Grid container spacing={2} sx={{ padding: '10px' }}>
      {recipes.map((recipe) => {
        const img = recipe.image;
        return <Recipe recipe={recipe} img={img} key={recipe.id}/>;
      })}
    </Grid>
  );
}
