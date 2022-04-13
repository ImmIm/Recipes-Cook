import * as React from "react";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import Autocomplete from "@mui/material/Autocomplete";
import { AppContext } from "./Products";
import { useContext } from "react";

export default function Search() {
  const context = useContext(AppContext);
  return (
    <Stack spacing={2} sx={{ maxWidth: 300, margin: '0 auto'}} className="search">
      <Autocomplete
        freeSolo
        autoHighlight={true}
        onInputChange={(e, value) => {
          context.products.forEach((el)=>{
            if(el.title == value){
            el.value = !el.value;
            return;
            }
          })
        }}
        id="free-solo-2-demo"
        disableClearable
        options={context.products.map((e) => e.title)}
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
      We hope you have water, salt and pepper. These products are available by
      default.
    </Stack>
  );
}
