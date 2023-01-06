import React from "react";
//Import recipes component so it can be imbedded
import { Recipes } from "./recipes";
import axios from "axios";

//Inherite from React.Component
export class DisplayRecipes extends React.Component{

    constructor(){
        super();
        this.ReloadData = this.ReloadData.bind(this)
    }

    //Component lifecycle hook
    componentDidMount() {
        //Asynchronous call
        //Http Get method - goes to this URL
        //Call for data
        axios.get('http://localhost:4000/api/recipes')
        .then((response)=>{  //Arrow function - Http response
            console.log("component Mounted"); // data is being retreived
            this.setState({  //Call back funtion
                recipes : response.data
            })
        }) 
        .catch(function(error){  //Call back function
            console.log(error);
        });
    }

    //Refresh page - Reload data 
    ReloadData(){
        axios.get('http://localhost:4000/api/recipes')
        .then((response)=>{  //Arrow function - Http response
            this.setState({  //Call back funtion
                recipes:response.data
            })
        }) 
        .catch((error)=>{  //Call back function
            console.log(error);
        });
    }

    //State holds data related to component
    state = {
        recipes:[ ]
    }
        // render and call to component
        render(){
            return( 
                <div>
                    <h1 id="TitleStyle"><b>Recipes</b></h1>
                    <Recipes recipes={this.state.recipes} ReloadData={this.ReloadData}></Recipes>
                </div>
            );
        }    
}