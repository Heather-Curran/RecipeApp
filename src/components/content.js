import React from "react";
//Must mark for export
//Extend React.Component and add render()
export class Content extends React.Component{
    
    render(){
        //Javascript always goes in return()
        return(
            <div>{/* customs styles have been added to App.css */}
                <h1 id="TitleStyle">Welcome to Heather's Cookbook</h1>
                <p></p>
                <img src="https://cdn.pixabay.com/photo/2016/02/05/15/34/pasta-1181189_960_720.jpg" alt=""></img>
            </div>
         );
    }
}