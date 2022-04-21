import { Autocomplete, Stack, TextField } from '@mui/material';
import React from 'react';
import { useState, useEffect } from 'react';

function RecipeSearch() {
  const [value, setValue] = useState('');
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

  const inputChangeHandler = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
        if(value === ''){
            console.log('nothing');
            return
        }
        console.log('fetched')
    }, 300)
    return () => clearTimeout(timer);
  }, [value]);

  // fetch(`https://api.spoonacular.com/recipes/autocomplete?number=10&query=${query}`)

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
            label='Enter your products'
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      We hope you have water, salt and pepper. These products are available by
      default.
    </Stack>
  );
}

export default RecipeSearch;
