import React from "react";
import { RecipeItem } from "./recipeItem";

//Inherite from React.Component
export class Recipes extends React.Component{

    render(){
        //Map will perform same operation on each element in array
        //Creates a recipeItem for every recipe in array
        //this.props.recipes accesses properties of parent
        //Add unique key so that you don't end up in infinite loop
        //return console.log(this.props.recipes);
        return this.props.recipes.map(
            (recipes)=>{
                return <RecipeItem recipe={recipes} key={recipes._id} ReloadData={this.props.ReloadData}></RecipeItem> //_id is the unique identifier
            }
        );
    }    
}