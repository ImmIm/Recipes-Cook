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
import { recipesActions } from '../../store/store';
import { Grid, Skeleton } from '@mui/material';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Recipe() {
  const context = useContext(AppContext);
  const loading = useSelector((state) => state.recipes.loadingImgs);
  const dispatch = useDispatch();
  const currentProducts = context.currentProducts;
  const recipes = useSelector((store) => store.recipes.recipes);

  useEffect(() => {
    console.log('Changed context');
  }, [context.currentProducts]);


  dispatch(recipesActions.setInredients({ ingredient: currentProducts }));

  return (
    <Grid container spacing={2} sx={{padding: '10px'}}>
 {recipes.map((recipe) => {
        const img = recipe.image;
        return (
          <Grid item xs={12} sm={12} md={6} lg={4} xl={3}>
            <div className='recipe' key={recipe.title}>
              <Card>
                <CardHeader
                  avatar={
                    <Avatar sx={{ bgcolor: red[500]}} aria-label='recipe'>
                      R
                    </Avatar>
                  }
                  action={
                    <IconButton aria-label='settings'>
                      <MoreVertIcon />
                    </IconButton>
                  }
                  sx={{height: '100px'}}
                  title={recipe.title}
                  subheader='September 14, 2016'
                />
                {/* <LazyLoadImage alt={recipe.title} src={img} effect='blur' /> */}
                {loading ? (
                  <Skeleton variant='rectangular' width='100%'>
                    <div style={{ paddingTop: '57%' }} />
                  </Skeleton>
                ) : (
                  <LazyLoadImage alt={recipe.title} src={img} effect='blur'  />
                )}
                <CardContent>
                  <Typography variant='body2' color='text.secondary'>
                    {recipe.description}
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
          </Grid>)})}
    </Grid>
  );
}
