import {RecipesContext} from './Recipes';
import {useContext} from 'react';

export default function Recipe(){
const context = useContext(RecipesContext);

    return <div>
        {context.recipes.map(recipe => { return <div className="recipe">
            {recipe.title}
            {recipe.img}
            {recipe.description}
            </div>
        })}
    </div>
}