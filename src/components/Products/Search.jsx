import * as React from 'react';
import TextField from '@mui/material/TextField';
import Stack from '@mui/material/Stack';
import Autocomplete from '@mui/material/Autocomplete';
import {AppContext} from './Products';
import {useContext} from 'react'

export default function Search() {
  const context = useContext(AppContext);
  return (
    <Stack spacing={2} sx={{ width: 300 }} className="search">
      <Autocomplete
        freeSolo
        autoHighlight={true}
        onInputChange = {(e)=> console.log('Hello')}
        id="free-solo-2-demo"
        disableClearable
        options={context.products.map(e => e.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter your products"
            InputProps={{
              ...params.InputProps,
              type: 'search',
            }}
          />
        )}
      />
      We hope you have water, salt and pepper. These products are available by default.
    </Stack>
  );
}