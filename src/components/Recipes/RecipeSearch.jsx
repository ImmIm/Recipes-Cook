import { Label } from '@mui/icons-material';
import {
  Autocomplete,
  Checkbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Tooltip,
  Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function RecipeSearch() {
  const [value, setValue] = useState('');
  const diets = useSelector((state) => state.recipes.diets);
  const cuisines = useSelector(state => state.recipes.cuisines)
  const meals = useSelector(state => state.recipes.mealType)
  const recipes = [
    {
      title: 'Apple with Garlic',
      img: <img src={''} alt={'Recipe 1'} />,
      description: 'Apple with garlic',
      ingredient: ['garlic', 'apple', 'orange'],
    },
    {
      title: 'Lumb with orange',
      img: <img src={''} alt={'Recipe 2'} />,
      description: 'Lumb with orange',
      ingredient: ['lumb', 'apple', 'orange'],
    },
  ];

  const changeDietHandler = (e) => {
    console.log(e.target.value);
  };

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (value === '') {
        console.log('nothing');
        return;
      }
      console.log('fetched');
    }, 250);
    return () => clearTimeout(timer);
  }, [value]);

  return (
    <Stack
      spacing={2}
      sx={{ maxWidth: 300, margin: '0 auto' }}
      className='search'>
      <Autocomplete
        freeSolo
        autoHighlight={true}
        onInputChange={inputChangeHandler}
        value={value}
        id='free-solo-2-demo'
        disableClearable
        options={recipes.map((e) => e.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Find recipe'
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      <Box>
      <FormControl component="fieldset">
      <FormLabel component="legend">Diets</FormLabel>
      <FormGroup aria-label="position">
      {diets.map(e => {return <Tooltip title={e.description} placement="right" key={e.name}><FormControlLabel
          value={e.set}
          control={<Checkbox />}
          label={e.name}
          labelPlacement="end"
        /></Tooltip> })}
      </FormGroup>
      <FormLabel component="legend">Cuisines</FormLabel>
      <FormGroup aria-label="position">
      {cuisines.map(e => {return <FormControlLabel
          value={e.set}
          key={e.name}
          control={<Checkbox />}
          label={e.name}
          labelPlacement="end"
        />})}
      </FormGroup>
      <FormLabel component="legend">Meal type</FormLabel>
      <FormGroup aria-label="position">
      {meals.map(e => {return <FormControlLabel
          value={e.set}
          key={e.name}
          control={<Checkbox />}
          label={e.name}
          labelPlacement="end"
        />})}
        </FormGroup>
    </FormControl>
        {/* <FormControl fullWidth>
          <Typography id='demo-simple-select-label'>Diets</Typography>
          {diets.map(e => <Checkbox name={e.name} label={e.name} checked={e.set} key={e.name}/>)}
        </FormControl> */}
      </Box>
    </Stack>
  );
}

export default RecipeSearch;
