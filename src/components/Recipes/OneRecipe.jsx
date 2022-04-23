import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, CardHeader, Grid } from '@mui/material';
import Icon from '@mui/material/Icon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import FlatwareIcon from '@mui/icons-material/Flatware';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import { Box } from '@mui/system';
import style from './OneRecipe.module.css'

const WrappedIcon = (props) => <Icon {...props} />;

WrappedIcon.muiName = 'Icon';

export default function OneRecipe(props) {
  console.log(props.recipe);

  return (
    <Card
      sx={{
        marginTop: '10px',
        marginRight: '15px',
        zIndex: '1000',
        maxWidth: '70%',
        width: '100%',
        height: '70%',
        margin: '0 auto',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '25px',
        position: 'fixed',
        overflowY: 'scroll',
      }}
      className={style}>
      <Grid container spacing={2} sx={{ padding: '10px' }}>
        <Grid item xs={6}>
          <Box sx={{padding: '5px'}}>
            <Typography component='h2' variant='h4'>
              Ingredients
            </Typography>
            <Grid container spacing={1}>
            {props.recipe.extendedIngredients.map((e) => {
              return (
                <Grid item xs={6} key={e.id} >
                <Card>
                  <CardHeader title={e.name} subheader={e.original} titleTypographyProps={{variant:'subtitle2'}}/>
                </Card>
                </Grid>
              );
            })}
            </Grid>
          </Box>
        </Grid>
        <Grid item xs={6}>
          <LazyLoadImage
            alt={props.recipe.title}
            src={props.recipe.image}
            effect='blur'
            style={{ width: '100%', padding: '5px', margin: '0 auto' }}
          />
          <Typography gutterBottom variant='h5' component='div'>
            {props.recipe.title}
          </Typography>
          <Icon>alarm</Icon>
          <span style={{ paddingRight: '10px' }}>
            {props.recipe.readyInMinutes}
          </span>
          <FlatwareIcon></FlatwareIcon>
          <span style={{ paddingRight: '10px' }}>{props.recipe.servings}</span>
          <AttachMoneyIcon></AttachMoneyIcon>
          <span>per serving: {props.recipe.pricePerServing}$</span>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' color='text.secondary'>
            {props.recipe.analyzedInstructions.length !== 0 ? (
              props.recipe.analyzedInstructions[0].steps.map((el) => (
                <li key={el.number}>
                  <span>{el.step}</span>
                </li>
              ))
            ) : (
              <span>Sorry we dont have recipe yet :c</span>
            )}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
