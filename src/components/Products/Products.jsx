import ListOfProducts from './ListOfProducts';
import Search from './Search';
import React from 'react';
import ResultOfSearch from './ResultOfSearch';
import './Products.css';
import recipe1 from '../Recipes/img/recipe1.jpg';
import recipe2 from '../Recipes/img/recipe2.jpg';

export const AppContext = React.createContext([]);

export default function Products(){
    const products = [
        { title: 'pork', type: 'meat', value: false},
        { title: 'beef', type: 'meat', value: false},
        { title: 'lumb', type: 'meat', value: false},
        { title: 'apple', type: 'fruits', value: false},
        { title: 'orange', type: 'fruits', value: false},
        { title: 'potatoes', type: 'vegetables', value: false},
        { title: 'garlic', type: 'vegetables', value: false}
      ];

    const recipes = [
        {title: 'Recipe 1', img: <img src={recipe1} alt={"Recipe 1"}/>, description: 'Lorem ipsum', ingredient: ['garlic', 'apple', 'orange']},
        {title: 'Recipe 2', img: <img src={recipe2} alt={"Recipe 2"}/>, description: 'Lorem ipsum', ingredient: ['lumb', 'apple', 'orange']},
    ] 

return <AppContext.Provider value={{
    products: products,
    recipes: recipes
}}>
<div>
        <Search/>
        <ListOfProducts/>
        <ResultOfSearch/>
    </div>
    </AppContext.Provider>
}

