import {useContext} from 'react';
import {AppContext} from '../Products/Products';

export default function Recipe(){
const context = useContext(AppContext);

    return <div>
{context.recipes.filter(({ingredient})=>{
    return JSON.stringify(ingredient.sort()) === JSON.stringify(context.currentProducts.sort())
})
.map(recipe => {return <div className="recipe" key={recipe.title}>
{recipe.title}
{recipe.img}
{recipe.description}
</div>
})
}
    </div>
}



