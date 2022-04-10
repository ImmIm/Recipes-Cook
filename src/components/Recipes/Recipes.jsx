import React from 'react';
import recipe1 from '../Recipes/img/recipe1.jpg';
import recipe2 from '../Recipes/img/recipe2.jpg';
import Recipe from './Recipe.jsx'
import ListOfProducts from '../Products/ListOfProducts';

export const RecipesContext = React.createContext([]);

export default function Recipes(){
const recipes = [
    {title: 'Recipe 1', img: <img src={recipe1} alt={"Recipe 1"}/>, description: 'Lorem ipsum', ingredient: ['apple', 'orange']},
    {title: 'Recipe 2', img: <img src={recipe2} alt={"Recipe 2"}/>, description: 'Lorem ipsum', ingredient: ['lumb', 'orange']},
]    
    return <RecipesContext.Provider value={{
        recipes: recipes,
    }}>
        <div>
            <Recipe/>
        </div>
    </RecipesContext.Provider>
}

