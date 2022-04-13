import Recipes from "../Recipes/Recipes";
import {AppContext} from '../Products/Products';
import { useContext } from "react";

export default function ResultOfSearch(){
const context = useContext(AppContext);

return <div className="result">
    <Recipes/>
</div>
}