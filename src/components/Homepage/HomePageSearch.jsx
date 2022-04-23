import React from 'react'
import {AppContext} from '../../App'
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { useContext } from "react";


function HomePageSearch() {
    const context = useContext(AppContext);
  return (
    <Stack spacing={2} sx={{ maxWidth: 300, margin: '0 auto'}} className="search">
        {/* search recipe with entered ingredient */}
      <Autocomplete
        freeSolo
        autoHighlight={true}
        onInputChange={(e, value) => {
          context.recipes.forEach((el)=>{
            if(el.ingredient.find(e => {if (e === value) return true})){
            el.value = !el.value;
            return;
            }
          })
        }}
        id="free-solo-2-demo"
        disableClearable
        options={context.recipes.map((e) => e.title)}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Enter your products"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
          />
        )}
      />
    </Stack>
  )
}

export default HomePageSearch