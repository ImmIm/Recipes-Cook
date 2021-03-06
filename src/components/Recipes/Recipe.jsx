import { useContext, useEffect } from 'react';
import { AppContext } from '../../App';
import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useDispatch, useSelector } from 'react-redux';
import { recipesActions, uiActions } from '../../store/store';
import { Button, Grid, Skeleton } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Recipe(props) {
  const loading = useSelector((state) => state.recipes.loadingImgs);
  const dispatch = useDispatch();

  const getData = (query) => async (dispatch) => {
    if (!query) {
      return;
    }
    fetch(
      `https://api.spoonacular.com/recipes/${props.recipe.id}/information?includeNutrition=false&apiKey=5a0abc362e76484ba29eeb96b16641a7`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        if (data.status !== 'failure') {
          console.log('succses', data);
          
          dispatch(recipesActions.setOneRecipe({ recipe: data }));
          dispatch(uiActions.setRecipeModal());
          return;
        }
        console.log('failure', data);
        
        dispatch(recipesActions.setOneRecipe({ recipe: data }));
        dispatch(uiActions.setRecipeModal());
      });
  };


  const clickHandler = () => {
    getData(props.recipe.id)(dispatch);
  };

  return (
    <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
      <div className='recipe' key={props.recipe.title}>
        <Card>
          <CardHeader
            action={
              loading ? null : (
                <IconButton aria-label='settings'>
                  <MoreVertIcon />
                </IconButton>
              )
            }
            title={
              loading ? (
                <Skeleton
                  animation='wave'
                  height={10}
                  width='80%'
                  style={{ marginBottom: 6 }}
                />
              ) : (
                props.recipe.title
              )
            }
            sx={{ height: '100px' }}
          />
          {loading ? (
            <Skeleton variant='rectangular' width='100%'>
              <div style={{ paddingTop: '57%' }} />
            </Skeleton>
          ) : (
            <Button onClick={clickHandler}>
              {' '}
              <LazyLoadImage
                alt={props.recipe.title}
                src={props.img}
                effect='blur'
                style={{ width: '100%', padding: '5px', margin: '0 auto' }}
              />
            </Button>
          )}
          <CardContent>
            <Typography variant='body2' color='text.secondary'>
              {props.recipe.description}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label='add to favorites'>
              <FavoriteIcon />
            </IconButton>
            <IconButton aria-label='share'>
              <ShareIcon />
            </IconButton>
          </CardActions>
        </Card>
      </div>
    </Grid>
  );
}

// Template

// return (
//   <>
//     {context.recipes
//       .filter(({ ingredient }) => {
//         return (
//           JSON.stringify(ingredient.sort()) ===
//           JSON.stringify(context.currentProducts.sort())
//         );
//       })
//       .map((recipe) => {
//         return (
//           <div className='recipe' key={recipe.title}>
//             <Card sx={{ margin: '10px 0' }}>
//               <CardHeader
//                 avatar={
//                   <Avatar sx={{ bgcolor: red[500] }} aria-label='recipe'>
//                     R
//                   </Avatar>
//                 }
//                 action={
//                   <IconButton aria-label='settings'>
//                     <MoreVertIcon />
//                   </IconButton>
//                 }
//                 title={recipe.title}
//                 subheader='September 14, 2016'
//               />
//               {recipe.img}
//               <CardContent>
//                 <Typography variant='body2' color='text.secondary'>
//                   {recipe.description}
//                 </Typography>
//               </CardContent>
//               <CardActions disableSpacing>
//                 <IconButton aria-label='add to favorites'>
//                   <FavoriteIcon />
//                 </IconButton>
//                 <IconButton aria-label='share'>
//                   <ShareIcon />
//                 </IconButton>
//                 <ExpandMore
//                   expand={expanded}
//                   onClick={handleExpandClick}
//                   aria-expanded={expanded}
//                   aria-label='show more'>
//                   <ExpandMoreIcon />
//                 </ExpandMore>
//               </CardActions>
//               <Collapse in={expanded} timeout='auto' unmountOnExit>
//                 <CardContent>
//                   <Typography paragraph>Method:</Typography>
//                   <Typography paragraph>
//                     Heat 1/2 cup of the broth in a pot until simmering, add
//                     saffron and set aside for 10 minutes.
//                   </Typography>
//                   <Typography paragraph>
//                     Heat oil in a (14- to 16-inch) paella pan or a large, deep
//                     skillet over medium-high heat. Add chicken, shrimp and
//                     chorizo, and cook, stirring occasionally until lightly
//                     browned, 6 to 8 minutes. Transfer shrimp to a large plate
//                     and set aside, leaving chicken and chorizo in the pan. Add
//                     piment??n, bay leaves, garlic, tomatoes, onion, salt and
//                     pepper, and cook, stirring often until thickened and
//                     fragrant, about 10 minutes. Add saffron broth and
//                     remaining 4 1/2 cups chicken broth; bring to a boil.
//                   </Typography>
//                   <Typography paragraph>
//                     Add rice and stir very gently to distribute. Top with
//                     artichokes and peppers, and cook without stirring, until
//                     most of the liquid is absorbed, 15 to 18 minutes. Reduce
//                     heat to medium-low, add reserved shrimp and mussels,
//                     tucking them down into the rice, and cook again without
//                     stirring, until mussels have opened and rice is just
//                     tender, 5 to 7 minutes more. (Discard any mussels that
//                     don&apos;t open.)
//                   </Typography>
//                   <Typography>
//                     Set aside off of the heat to let rest for 10 minutes, and
//                     then serve.
//                   </Typography>
//                 </CardContent>
//               </Collapse>
//             </Card>
//           </div>
//         );
//       })}
//   </>
// );
