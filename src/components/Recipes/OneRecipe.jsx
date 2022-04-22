import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea, Grid } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Icon from '@mui/material/Icon';

const WrappedIcon = (props) => <Icon {...props} />;

WrappedIcon.muiName = 'Icon';

export default function OneRecipe() {
  return (
    <Card sx={{ marginTop: '10px', marginRight: '15px' }}>
      <Grid container spacing={2} sx={{ padding: '10px' }}>
        <Grid item xs={6}>
          <p>asdfgh</p>
        </Grid>
        <Grid item xs={6}>
          <CardMedia
            component='img'
            height='140'
            image='https://img.povar.ru/main/be/c2/6d/28/veprevo_koleno-356748.JPG'
            alt='green iguana'
          />
        </Grid>
        <Grid item xs={6}></Grid>
        <Grid item xs={6}>
          <Typography gutterBottom variant='h5' component='div'>
            Вепрево колено
          </Typography>
          <Icon>alarm</Icon>
        </Grid>
        <Grid item sx={12}>
          <Typography variant='body2' color='text.secondary'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sit
            amet commodo leo. Proin sed sagittis tellus. Etiam rhoncus, nibh
            volutpat ultrices hendrerit, dolor enim fringilla dolor, vitae
            accumsan turpis nulla vel nisl. Etiam id dapibus lorem, ut consequat
            dolor. Class aptent taciti sociosqu ad litora torquent per conubia
            nostra, per inceptos himenaeos. Fusce dignissim sagittis dictum.
            Etiam elementum vestibulum sem, et egestas tortor maximus quis.
            Maecenas quis vulputate enim, nec cursus nunc. Quisque vitae risus
            tempus, porttitor orci eget, ultricies orci. Maecenas sit amet
            tristique ex, sit amet dictum ipsum. Fusce hendrerit ultrices leo ut
            venenatis. Sed tincidunt tortor nec elit pharetra commodo. Donec
            vitae ultricies ex. Aliquam consectetur est vel porta pretium. Cras
            porttitor dictum sem, a interdum erat semper ac. Pellentesque justo
            justo, consectetur eu ligula dapibus, molestie tempus elit. Maecenas
            feugiat ante odio, sit amet pellentesque nunc condimentum in. Nam
            posuere aliquam iaculis. Morbi dignissim leo et ipsum eleifend, quis
            commodo ipsum aliquet. Maecenas id leo ex. Nulla nisl dolor,
            efficitur at imperdiet id, imperdiet ac purus. Mauris euismod eu
            urna id interdum. Cras mauris nunc, semper in tortor sit amet,
            tempus commodo enim. Morbi sapien justo, luctus non enim ut, iaculis
            accumsan est. Aliquam auctor.
          </Typography>
        </Grid>
      </Grid>
    </Card>
  );
}
