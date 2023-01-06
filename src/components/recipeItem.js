import React from "react";
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom'; 
import Button from 'react-bootstrap/Button'
import axios from "axios";
import '../App.css';


export class RecipeItem extends React.Component{

    // state for containg the recipes
    state = {
        Ingreds : []
    }

    constructor(){
        super();
        this.DeleteRecipe = this.DeleteRecipe.bind(this);
        this.IngredientsList = this.IngredientsList.bind(this);
        this.count = 0;
    }

    //method call for deleting recipes from the database
    DeleteRecipe(e){
        e.preventDefault();
        //Delete from this URL with this id
        axios.delete('http://localhost:4000/api/recipes' + this.props.book._id)
        .then((res)=>{
            this.props.ReloadData(); //Then invoke this method to reload page
        })
        .catch();
    }

    //method used for storing the ingredients
    // an issue was happening where the call to this method was being performed 3 times.
    // to avoid this issue the assignment to a specified value was done and an mass if statement created to filter out empty ingredients, quantitys and units
    IngredientsList(){
        if(this.props.recipe.Quantity != ""){
            this.state.Ingreds[0] = (this.props.recipe.Quantity+": "+this.props.recipe.Unit01+" - "+this.props.recipe.Ingredient01+"\n");
        }
        if(this.props.recipe.Quantity02 != "")
        {
            this.state.Ingreds[1] =(this.props.recipe.Quantity02+": "+this.props.recipe.Unit02+" - "+this.props.recipe.Ingredient02+"\n");
        }
        if(this.props.recipe.Quantity03 != "")
        {
            this.state.Ingreds[2]=(this.props.recipe.Quantity03+": "+this.props.recipe.Unit03+" - "+this.props.recipe.Ingredient03+"\n");
        }
        if(this.props.recipe.Quantity04 != "")
        {
            this.state.Ingreds[3]=(this.props.recipe.Quantity04+": "+this.props.recipe.Unit04+" - "+this.props.recipe.Ingredient04+"\n");
        }
        if(this.props.recipe.Quantity05 != "")
        {
            this.state.Ingreds[4]=(this.props.recipe.Quantity05+": "+this.props.recipe.Unit05+" - "+this.props.recipe.Ingredient05+"\n");
        }
        if(this.props.recipe.Quantity06 != "")
        {
            this.state.Ingreds[5]=(this.props.recipe.Quantity06+": "+this.props.recipe.Unit06+" - "+this.props.recipe.Ingredient06+"\n");
        }
        if(this.props.recipe.Quantity07 != "")
        {
            this.state.Ingreds[6]=(this.props.recipe.Quantity07+": "+this.props.recipe.Unit07+" - "+this.props.recipe.Ingredient07+"\n");
        }
        if(this.props.recipe.Quantity08 != "")
        {
            this.state.Ingreds[8]=(this.props.recipe.Quantity08+": "+this.props.recipe.Unit08+" - "+this.props.recipe.Ingredient08+"\n");
        }
        if(this.props.recipe.Quantity09 != "")
        {
            this.state.Ingreds[9]=(this.props.recipe.Quantity09+": "+this.props.recipe.Unit09+" - "+this.props.recipe.Ingredient09+"\n");
        }
        if(this.props.recipe.Quantity10 != "")
        {
            this.state.Ingreds[10]=(this.props.recipe.Quantity10+": "+this.props.recipe.Unit10+" - "+this.props.recipe.Ingredient10+"\n");
        }
        if(this.props.recipe.Quantity11 != "")
        {
            this.state.Ingreds[11]=(this.props.recipe.Quantity11+": "+this.props.recipe.Unit11+" - "+this.props.recipe.Ingredient11+"\n");
        }
        if(this.props.recipe.Quantity12 != "")
        {
            this.state.Ingreds[12]=(this.props.recipe.Quantity12+": "+this.props.recipe.Unit12+" - "+this.props.recipe.Ingredient12+"\n");
        }
        if(this.props.recipe.Quantity13 != "")
        {
            this.state.Ingreds[13]=(this.props.recipe.Quantity13+": "+this.props.recipe.Unit13+" - "+this.props.recipe.Ingredient13+"\n");
        }
        if(this.props.recipe.Quantity14 != "")
        {
            this.state.Ingreds[14]=(this.props.recipe.Quantity14+": "+this.props.recipe.Unit14+" - "+this.props.recipe.Ingredient14+"\n");
        }
        if(this.props.recipe.Quantity15 != "")
        {
            this.state.Ingreds[15]=(this.props.recipe.Quantity15+": "+this.props.recipe.Unit15+" - "+this.props.recipe.Ingredient15+"\n");
        }
        if(this.props.recipe.Quantity16 != "")
        {
            this.state.Ingreds[16]=(this.props.recipe.Quantity16+": "+this.props.recipe.Unit16+" - "+this.props.recipe.Ingredient16+"\n");
        }
        if(this.props.recipe.Quantity17 != "")
        {
            this.state.Ingreds[17]=(this.props.recipe.Quantity17+": "+this.props.recipe.Unit17+" - "+this.props.recipe.Ingredient17+"\n");
        }
        if(this.props.recipe.Quantity18 != "")
        {
            this.state.Ingreds[18]=(this.props.recipe.Quantity18+": "+this.props.recipe.Unit18+" - "+this.props.recipe.Ingredient18+"\n");
        }
        if(this.props.recipe.Quantity19 != "")
        {
            this.state.Ingreds[19]=(this.props.recipe.Quantity19+": "+this.props.recipe.Unit19+" - "+this.props.recipe.Ingredient19+"\n");
        }
        
        return (
            <p>{this.state.Ingreds}</p>
        )
        
    }

    // render method for the recipie item
    // setting up how the item is displayed to the user and binding the data from the databse to the item
    // uses the method call to dispaly ingredients
    render(){
        return( 
            //Added card
            
            <div>
                <Card>
                    <Card.Header>
                        {this.props.recipe.Title}
                    </Card.Header>
                    <Card.Body id="recipeCard">
                        <p>
                        <b>Ingredients : </b>
                           <this.IngredientsList/>
                           <b>Instructions : </b>{this.props.recipe.Directions}
                        </p>
                    </Card.Body>
                    <Card.Footer>
                    <Link to={'/editRecipe/' + this.props.recipe._id} className="btn btn-primary">Edit</Link>
                  {/* Adds red button 
                    Calls DeleteBook Method when clicked*/}
                  <Button variant="danger" onClick={this.DeleteRecipe}>Delete</Button> 
                    </Card.Footer>
                </Card>
            </div>
        );
    }
}