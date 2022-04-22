import * as React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import Icon from '@mui/material/Icon';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

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
        position: 'fixed'
      }}>
      <Grid container spacing={2} sx={{ padding: '10px' }}>
        <Grid item xs={6}>
          <p>{props.recipe.title}</p>
        </Grid>
        <Grid item xs={6}>
        <LazyLoadImage
                alt={props.recipe.title}
                src={props.recipe.image}
                effect='blur'
                style={{ width: '100%', padding: '5px', margin: '0 auto' }}
              />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Typography gutterBottom variant='h5' component='div'>
            {props.recipe.title}
          </Typography>
          <Icon>alarm</Icon>
          <span>{props.recipe.readyInMinutes}</span>
        </Grid>
        <Grid item xs={12}>
          <Typography variant='body2' color='text.secondary'>
            {props.recipe.analyzedInstructions[0].steps.map(el => <li key={el.number}><span >{el.step}</span></li>)}
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
