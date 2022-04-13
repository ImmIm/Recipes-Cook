import ListOfProducts from './ListOfProducts';
import Search from './Search';
import React from 'react';
import ResultOfSearch from './ResultOfSearch';
import './Products.css';
import recipe1 from '../Recipes/img/recipe1.jpg';
import recipe2 from '../Recipes/img/recipe2.jpg';
import Recipe from '../Recipes/Recipe';
import { Grid } from '@mui/material';
import Header from '../Header/Header';
import { Box } from '@mui/system';


export const AppContext = React.createContext([]);


export default function Products(props) {
  
  const products = [
    { title: 'pork', type: 'meat', value: false },
    { title: 'beef', type: 'meat', value: false },
    { title: 'lumb', type: 'meat', value: false },
    { title: 'apple', type: 'fruits', value: false },
    { title: 'orange', type: 'fruits', value: false },
    { title: 'potatoes', type: 'vegetables', value: false },
    { title: 'garlic', type: 'vegetables', value: false },
  ];

    const recipes = [
        {title: 'Recipe 1', img: <img src={recipe1} alt={"Recipe 1"}/>, description: 'Apple with garlic', ingredient: ['garlic', 'apple', 'orange']},
        {title: 'Recipe 2', img: <img src={recipe2} alt={"Recipe 2"}/>, description: 'Lumb with orange', ingredient: ['lumb', 'apple', 'orange']},
    ];

    const [currentProducts, setCurrentProducts] = React.useState([])



  return (
    <AppContext.Provider value={{
        products: products,
        recipes: recipes,
        currentProducts: currentProducts,
        setCurrentProducts: setCurrentProducts

    }}>
        <Grid
          container
          component='main'
          spacing={2}

          sx={{ backgroundColor: '#E7DBC6', height: '100%', overflow: 'hidden'}}>
          <Grid item component='aside' xs={4} sx={{overflow: 'hidden'}}>
            <Box
              xs={4}
              sx={{
                margin: '10px 0',
                backgroundColor: '#FFFFFF',
                borderRadius: '10px',
                boxShadow: '3px 5px 10px 0px #000000',
                position: 'sticky'
              }}>
              <Search />
              <ListOfProducts />
            </Box>
          </Grid>
          <Grid item xs={8} component='section'>
              <ResultOfSearch />
          </Grid>
        </Grid>
    </AppContext.Provider>
  );
}
