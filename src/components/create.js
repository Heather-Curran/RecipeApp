import React from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import { Container } from '@mui/system';
import '../App.css';
//Inherite from React.Component
export class Create extends React.Component {

    constructor(){
        super();
        // method binding
        this.handleSubmit = this.handleSubmit.bind(this); //To bind to the correct instance of this
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);
        this.onChangeDirections = this.onChangeDirections.bind(this);
        this.onChangeIngredient01 = this.onChangeIngredient01.bind(this);
        this.onChangeIngredient02 = this.onChangeIngredient02.bind(this);
        this.onChangeIngredient03 = this.onChangeIngredient03.bind(this);
        this.onChangeIngredient04 = this.onChangeIngredient04.bind(this);
        this.onChangeIngredient05 = this.onChangeIngredient05.bind(this);
        this.onChangeIngredient06 = this.onChangeIngredient06.bind(this);
        this.onChangeIngredient07 = this.onChangeIngredient07.bind(this);
        this.onChangeIngredient08 = this.onChangeIngredient08.bind(this);
        this.onChangeIngredient09 = this.onChangeIngredient09.bind(this);
        this.onChangeIngredient10 = this.onChangeIngredient10.bind(this);
        this.onChangeIngredient11 = this.onChangeIngredient11.bind(this);
        this.onChangeIngredient12 = this.onChangeIngredient12.bind(this);
        this.onChangeIngredient13 = this.onChangeIngredient13.bind(this);
        this.onChangeIngredient14 = this.onChangeIngredient14.bind(this);
        this.onChangeIngredient15 = this.onChangeIngredient15.bind(this);
        this.onChangeIngredient16 = this.onChangeIngredient16.bind(this);
        this.onChangeIngredient17 = this.onChangeIngredient17.bind(this);
        this.onChangeIngredient18 = this.onChangeIngredient18.bind(this);
        this.onChangeIngredient19 = this.onChangeIngredient19.bind(this);
        this.onChangeQuantity01 = this.onChangeIngredient01.bind(this);
        this.onChangeQuantity02 = this.onChangeIngredient02.bind(this);
        this.onChangeQuantity03 = this.onChangeIngredient03.bind(this);
        this.onChangeQuantity04 = this.onChangeIngredient04.bind(this);
        this.onChangeQuantity05 = this.onChangeIngredient05.bind(this);
        this.onChangeQuantity06 = this.onChangeIngredient06.bind(this);
        this.onChangeQuantity07 = this.onChangeIngredient07.bind(this);
        this.onChangeQuantity08 = this.onChangeIngredient08.bind(this);
        this.onChangeQuantity09 = this.onChangeIngredient09.bind(this);
        this.onChangeQuantity10 = this.onChangeIngredient10.bind(this);
        this.onChangeQuantity11 = this.onChangeIngredient11.bind(this);
        this.onChangeQuantity12 = this.onChangeIngredient12.bind(this);
        this.onChangeQuantity13 = this.onChangeIngredient13.bind(this);
        this.onChangeQuantity14 = this.onChangeIngredient14.bind(this);
        this.onChangeQuantity15 = this.onChangeIngredient15.bind(this);
        this.onChangeQuantity16 = this.onChangeIngredient16.bind(this);
        this.onChangeQuantity17 = this.onChangeIngredient17.bind(this);
        this.onChangeQuantity18 = this.onChangeIngredient18.bind(this);
        this.onChangeQuantity19 = this.onChangeIngredient19.bind(this);
        this.onChangeUnit01 = this.onChangeUnit01.bind(this);
        this.onChangeUnit02 = this.onChangeUnit02.bind(this);
        this.onChangeUnit03 = this.onChangeUnit03.bind(this);
        this.onChangeUnit04 = this.onChangeUnit04.bind(this);
        this.onChangeUnit05 = this.onChangeUnit05.bind(this);
        this.onChangeUnit06 = this.onChangeUnit06.bind(this);
        this.onChangeUnit07 = this.onChangeUnit07.bind(this);
        this.onChangeUnit08 = this.onChangeUnit08.bind(this);
        this.onChangeUnit09 = this.onChangeUnit09.bind(this);
        this.onChangeUnit10 = this.onChangeUnit10.bind(this);
        this.onChangeUnit11 = this.onChangeUnit11.bind(this);
        this.onChangeUnit12 = this.onChangeUnit12.bind(this);
        this.onChangeUnit13 = this.onChangeUnit13.bind(this);
        this.onChangeUnit14 = this.onChangeUnit14.bind(this);
        this.onChangeUnit15 = this.onChangeUnit15.bind(this);
        this.onChangeUnit16 = this.onChangeUnit16.bind(this);
        this.onChangeUnit17 = this.onChangeUnit17.bind(this);
        this.onChangeUnit18 = this.onChangeUnit18.bind(this);
        this.onChangeUnit19 = this.onChangeUnit19.bind(this);    

        //creation of a state variable
        this.state = {
            Title : "",
            Category : "",
            Directions : "",
            Ingredients01 : "",
            Ingredients02 : "",
            Ingredients03 : "",
            Ingredients04 : "",
            Ingredients05 : "",
            Ingredients06 : "",
            Ingredients07 : "",
            Ingredients08 : "",
            Ingredients09 : "",
            Ingredients10 : "",
            Ingredients11 : "",
            Ingredients12 : "",
            Ingredients13 : "",
            Ingredients14 : "",
            Ingredients15 : "",
            Ingredients16 : "",
            Ingredients17 : "",
            Ingredients18 : "",
            Ingredients19 : "",
            Quantity01 : "",
            Quantity02 : "",
            Quantity03 : "",
            Quantity04 : "",
            Quantity05 : "",
            Quantity06 : "",
            Quantity07 : "",
            Quantity08 : "",
            Quantity09 : "",
            Quantity10 : "",
            Quantity11 : "",
            Quantity12 : "",
            Quantity13 : "",
            Quantity14 : "",
            Quantity15 : "",
            Quantity16 : "",
            Quantity17 : "",
            Quantity18 : "",
            Quantity19 : "",
            Unit01 : "",
            Unit02 : "",
            Unit03 : "",
            Unit04 : "",
            Unit05 : "",
            Unit06 : "",
            Unit07 : "",
            Unit08 : "",
            Unit09 : "",
            Unit10 : "",
            Unit11 : "",
            Unit12 : "",
            Unit13 : "",
            Unit14 : "",
            Unit15 : "",
            Unit16 : "",
            Unit17 : "",
            Unit18 : "",
            Unit19 : ""
        }
    }

    //handle submit
    handleSubmit(e){
        e.preventDefault();

        //Item to pass up
        const book = {
            Title : this.state.Title,
            Category : this.state.Category,
            Directions : this.state.Directions,
            Ingredient01 : this.state.Ingredients01,
            Ingredient02 : this.state.Ingredients02,
            Ingredient03 : this.state.Ingredients03,
            Ingredient04 : this.state.Ingredients04,
            Ingredient05 : this.state.Ingredients05,
            Ingredient06 : this.state.Ingredients06,
            Ingredient07 : this.state.Ingredients07,
            Ingredient08 : this.state.Ingredients08,
            Ingredient09 : this.state.Ingredients09,
            Ingredient10 : this.state.Ingredients10,
            Ingredient11 : this.state.Ingredients11,
            Ingredient12 : this.state.Ingredients12,
            Ingredient13 : this.state.Ingredients13,
            Ingredient14 : this.state.Ingredients14,
            Ingredient15 : this.state.Ingredients15,
            Ingredient16 : this.state.Ingredients16,
            Ingredient17 : this.state.Ingredients17,
            Ingredient18 : this.state.Ingredients18,
            Ingredient19 : this.state.Ingredients19,
            Quantity01 : this.state.Quantity01,
            Quantity02 : this.state.Quantity02,
            Quantity03 : this.state.Quantity03,
            Quantity04 : this.state.Quantity04,
            Quantity05 : this.state.Quantity05,
            Quantity06 : this.state.Quantity06,
            Quantity07 : this.state.Quantity07,
            Quantity08 : this.state.Quantity08,
            Quantity09 : this.state.Quantity09,
            Quantity10 : this.state.Quantity10,
            Quantity11 : this.state.Quantity11,
            Quantity12 : this.state.Quantity12,
            Quantity13 : this.state.Quantity13,
            Quantity14 : this.state.Quantity14,
            Quantity15 : this.state.Quantity15,
            Quantity16 : this.state.Quantity16,
            Quantity17 : this.state.Quantity17,
            Quantity18 : this.state.Quantity18,
            Quantity19 : this.state.Quantity19,
            Unit01 : this.state.Unit01,
            Unit02 : this.state.Unit02,
            Unit03 : this.state.Unit03,
            Unit04 : this.state.Unit04,
            Unit05 : this.state.Unit05,
            Unit06 : this.state.Unit06,
            Unit07 : this.state.Unit07,
            Unit08 : this.state.Unit08,
            Unit09 : this.state.Unit09,
            Unit10 : this.state.Unit10,
            Unit11 : this.state.Unit11,
            Unit12 : this.state.Unit12,
            Unit13 : this.state.Unit13,
            Unit14 : this.state.Unit14,
            Unit15 : this.state.Unit15,
            Unit16 : this.state.Unit16,
            Unit17 : this.state.Unit17,
            Unit18 : this.state.Unit18,
            Unit19 : this.state.Unit19
        }
        
        axios.post('http://localhost:4000/api/recipe',book)
        .then()
        .catch();

        this.setState = ({  //Sets state again to blank
            Title : "",
            Category : "",
            Directions : "",
            Ingredients01 : "",
            Ingredients02 : "",
            Ingredients03 : "",
            Ingredients04 : "",
            Ingredients05 : "",
            Ingredients06 : "",
            Ingredients07 : "",
            Ingredients08 : "",
            Ingredients09 : "",
            Ingredients10 : "",
            Ingredients11 : "",
            Ingredients12 : "",
            Ingredients13 : "",
            Ingredients14 : "",
            Ingredients15 : "",
            Ingredients16 : "",
            Ingredients17 : "",
            Ingredients18 : "",
            Ingredients19 : "",
            Quantity01 : "",
            Quantity02 : "",
            Quantity03 : "",
            Quantity04 : "",
            Quantity05 : "",
            Quantity06 : "",
            Quantity07 : "",
            Quantity08 : "",
            Quantity09 : "",
            Quantity10 : "",
            Quantity11 : "",
            Quantity12 : "",
            Quantity13 : "",
            Quantity14 : "",
            Quantity15 : "",
            Quantity16 : "",
            Quantity17 : "",
            Quantity18 : "",
            Quantity19 : "",
            Unit01 : "",
            Unit02 : "",
            Unit03 : "",
            Unit04 : "",
            Unit05 : "",
            Unit06 : "",
            Unit07 : "",
            Unit08 : "",
            Unit09 : "",
            Unit10 : "",
            Unit11 : "",
            Unit12 : "",
            Unit13 : "",
            Unit14 : "",
            Unit15 : "",
            Unit16 : "",
            Unit17 : "",
            Unit18 : "",
            Unit19 : ""
        })
    }

    // titles,category and directions
    onChangeTitle(e){this.setState({Title:e.target.value})}
    onChangeCategory(e){this.setState({Category:e.target.value})}
    onChangeDirections(e){this.setState({Directions:e.target.value})}

    //ingrediants sets
    onChangeIngredient01(e){this.setState({Ingredients01:e.target.value})}
    onChangeIngredient02(e){this.setState({Ingredients02:e.target.value})}
    onChangeIngredient03(e){this.setState({Ingredients03:e.target.value})}
    onChangeIngredient04(e){this.setState({Ingredients04:e.target.value})}
    onChangeIngredient05(e){this.setState({Ingredients05:e.target.value})}
    onChangeIngredient06(e){this.setState({Ingredients06:e.target.value})}
    onChangeIngredient07(e){this.setState({Ingredients07:e.target.value})}
    onChangeIngredient07(e){this.setState({Ingredients07:e.target.value})}
    onChangeIngredient08(e){this.setState({Ingredients08:e.target.value})}
    onChangeIngredient09(e){this.setState({Ingredients09:e.target.value})}
    onChangeIngredient10(e){this.setState({Ingredients10:e.target.value})}
    onChangeIngredient11(e){this.setState({Ingredients11:e.target.value})}
    onChangeIngredient12(e){this.setState({Ingredients12:e.target.value})}
    onChangeIngredient13(e){this.setState({Ingredients13:e.target.value})}
    onChangeIngredient14(e){this.setState({Ingredients14:e.target.value})}
    onChangeIngredient15(e){this.setState({Ingredients15:e.target.value})}
    onChangeIngredient16(e){this.setState({Ingredients16:e.target.value})}
    onChangeIngredient17(e){this.setState({Ingredients17:e.target.value})}
    onChangeIngredient18(e){this.setState({Ingredients18:e.target.value})}
    onChangeIngredient19(e){this.setState({Ingredients19:e.target.value})}
    //Unit set
    onChangeUnit01(e){this.setState({Unit01:e.target.value})}
    onChangeUnit02(e){this.setState({Unit02:e.target.value})}
    onChangeUnit03(e){this.setState({Unit03:e.target.value})}
    onChangeUnit04(e){this.setState({Unit04:e.target.value})}
    onChangeUnit05(e){this.setState({Unit05:e.target.value})}
    onChangeUnit06(e){this.setState({Unit06:e.target.value})}
    onChangeUnit07(e){this.setState({Unit07:e.target.value})}
    onChangeUnit07(e){this.setState({Unit07:e.target.value})}
    onChangeUnit08(e){this.setState({Unit08:e.target.value})}
    onChangeUnit09(e){this.setState({Unit09:e.target.value})}
    onChangeUnit10(e){this.setState({Unit10:e.target.value})}
    onChangeUnit11(e){this.setState({Unit11:e.target.value})}
    onChangeUnit12(e){this.setState({Unit12:e.target.value})}
    onChangeUnit13(e){this.setState({Unit13:e.target.value})}
    onChangeUnit14(e){this.setState({Unit14:e.target.value})}
    onChangeUnit15(e){this.setState({Unit15:e.target.value})}
    onChangeUnit16(e){this.setState({Unit16:e.target.value})}
    onChangeUnit17(e){this.setState({Unit17:e.target.value})}
    onChangeUnit18(e){this.setState({Unit18:e.target.value})}
    onChangeUnit19(e){this.setState({Unit19:e.target.value})}
    //Quantity set
    onChangeQuantity01(e){this.setState({Quantity01:e.target.value})}
    onChangeQuantity02(e){this.setState({Quantity02:e.target.value})}
    onChangeQuantity03(e){this.setState({Quantity03:e.target.value})}
    onChangeQuantity04(e){this.setState({Quantity04:e.target.value})}
    onChangeQuantity05(e){this.setState({Quantity05:e.target.value})}
    onChangeQuantity06(e){this.setState({Quantity06:e.target.value})}
    onChangeQuantity07(e){this.setState({Quantity07:e.target.value})}
    onChangeQuantity07(e){this.setState({Quantity07:e.target.value})}
    onChangeQuantity08(e){this.setState({Quantity08:e.target.value})}
    onChangeQuantity09(e){this.setState({Quantity09:e.target.value})}
    onChangeQuantity10(e){this.setState({Quantity10:e.target.value})}
    onChangeQuantity11(e){this.setState({Quantity11:e.target.value})}
    onChangeQuantity12(e){this.setState({Quantity12:e.target.value})}
    onChangeQuantity13(e){this.setState({Quantity13:e.target.value})}
    onChangeQuantity14(e){this.setState({Quantity14:e.target.value})}
    onChangeQuantity15(e){this.setState({Quantity15:e.target.value})}
    onChangeQuantity16(e){this.setState({Quantity16:e.target.value})}
    onChangeQuantity17(e){this.setState({Quantity17:e.target.value})}
    onChangeQuantity18(e){this.setState({Quantity18:e.target.value})}
    onChangeQuantity19(e){this.setState({Quantity19:e.target.value})}    

    //render - configured code from the editRecipe
    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <Card>
                    <div>
                        <label >Title -</label>
                        <input  title='Title' placeholder='Title' class='Title' type="text" value={this.state.Title} onChange={this.onChangeTitle}></input>
                    </div>
                    <div>
                        <label >Category -</label>
                        <input  title='Category' placeholder='Category' class='Category' type="text" value={this.state.Category} onChange={this.onChangeCategory}></input>
                    </div>
                    <div>
                        <label >Directions -</label>
                        <input  title='Directions' placeholder='Directions' class='Directions' type="textBox" value={this.state.Title} onChange={this.onChangeDirections}></input>
                    </div>
                </Card>
                <Card bg=''>
                <div id='editForm' className="form-group">
                    <Card.Header>
                        <p>Ingredients</p>
                    </Card.Header>
                    <Container id='Ingredients'>
                        <div>
                            <label >Quantity1 -</label>
                            <input id='Quantity' title='Quantity1' placeholder='Quantity1' type="text" value={this.state.Quantity01} onChange={this.onChangeQuantity01}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity2 -</label>
                            <input id='Quantity' title='Quantity2' placeholder='Quantity2'  type="text" value={this.state.Quantity02} onChange={this.onChangeQuantity02}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 3 -</label>
                            <input id='Quantity' title='Quantity3' placeholder='Quantity3'  type="text" value={this.state.Quantity03} onChange={this.onChangeQuantity03}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 4 -</label>
                            <input id='Quantity' title='Quantity4' placeholder='Quantity4'  type="text" value={this.state.Quantity04} onChange={this.onChangeQuantity04}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 5 -</label>
                            <input id='Quantity' title='Quantity5' placeholder='Quantity5'  type="text" value={this.state.Quantity05} onChange={this.onChangeQuantity05}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 6 -</label>
                            <input id='Quantity' title='Quantity6' placeholder='Quantity6'  type="text" value={this.state.Quantity06} onChange={this.onChangeQuantity06}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 7 -</label>
                            <input id='Quantity' title='Quantity7' placeholder='Quantity7'  type="text" value={this.state.Quantity07} onChange={this.onChangeQuantity07}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 8 -</label>
                            <input id='Quantity' title='Quantity8' placeholder='Quantity8'  type="text" value={this.state.Quantity08} onChange={this.onChangeQuantity08}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 9 -</label>
                            <input id='Quantity' title='Quantity9' placeholder='Quantity9'  type="text" value={this.state.Quantity09} onChange={this.onChangeQuantity09}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 10 -</label>
                            <input id='Quantity' title='Quantity10' placeholder='Quantity10'  type="text" value={this.state.Quantity10} onChange={this.onChangeQuantity10}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 11 -</label>
                            <input id='Quantity' title='Quantity10' placeholder='Quantity11'  type="text" value={this.state.Quantity11} onChange={this.onChangeQuantity11}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 12 -</label>
                            <input id='Quantity' title='Quantity2' placeholder='Quantity12'  type="text" value={this.state.Quantity12} onChange={this.onChangeQuantity12}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity13 -</label>
                            <input id='Quantity' title='Quantity3' placeholder='Quantity13'  type="text" value={this.state.Quantity13} onChange={this.onChangeQuantity13}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 14 -</label>
                            <input id='Quantity' title='Quantity4' placeholder='Quantity14'  type="text" value={this.state.Quantity14} onChange={this.onChangeQuantity14}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 15 -</label>
                            <input id='Quantity' title='Quantity5' placeholder='Quantity15'  type="text" value={this.state.Quantity15} onChange={this.onChangeQuantity15}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 16 -</label>
                            <input id='Quantity' title='Quantity6' placeholder='Quantity16'  type="text" value={this.state.Quantity16} onChange={this.onChangeQuantity16}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 17 -</label>
                            <input id='Quantity' title='Quantity7' placeholder='Quantity17'  type="text" value={this.state.Quantity17} onChange={this.onChangeQuantity17}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 18 -</label>
                            <input id='Quantity' title='Quantity8' placeholder='Quantity18'  type="text" value={this.state.Quantity18} onChange={this.onChangeQuantity18}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 19 -</label>
                            <input id='Quantity' title='Quantity9' placeholder='Quantity19'  type="text" value={this.state.Quantity19} onChange={this.onChangeQuantity19}></input>
                        </div>
                    </Container>
                    <Container id='Ingredients'>
                        <div>
                            <label>Unit 1 -</label>
                            <input id='Unit' placeholder='Unit1' class='Unit' type="text" value={this.state.Unit01} onChange={this.onChangeUnit01}></input>
                        </div>
                        <div>
                            <label>Unit 2 -</label>
                            <input id='Unit' placeholder='Unit2' class='Unit' type="text" value={this.state.Unit02} onChange={this.onChangeUnit02}></input>
                        </div>
                        <div>
                            <label>Unit 3 -</label>
                            <input id='Unit' placeholder='Unit3' class='Unit' type="text" value={this.state.Unit03} onChange={this.onChangeUnit03}></input>
                        </div>
                        <div>
                            <label>Unit 4 -</label>
                            <input id='Unit' placeholder='Unit4' class='Unit' type="text" value={this.state.Unit04} onChange={this.onChangeUnit04}></input>
                        </div>
                        <div>
                            <label>Unit 5 -</label>
                            <input id='Unit' placeholder='Unit5' class='Unit' type="text" value={this.state.Unit05} onChange={this.onChangeUnit05}></input>
                        </div>
                        <div>
                            <label>Unit 6 -</label>
                            <input id='Unit' placeholder='Unit6' class='Unit' type="text" value={this.state.Unit06} onChange={this.onChangeUnit06}></input>
                        </div>
                        <div>
                            <label>Unit 7 -</label>
                            <input id='Unit' placeholder='Unit7' class='Unit' type="text" value={this.state.Unit07} onChange={this.onChangeUnit07}></input>
                        </div>
                        <div>
                            <label>Unit 8 -</label>
                            <input id='Unit' placeholder='Unit8' class='Unit' type="text" value={this.state.Unit08} onChange={this.onChangeUnit08}></input>
                        </div>
                        <div>
                            <label>Unit 9 -</label>
                            <input id='Unit' placeholder='Unit9' class='Unit' type="text" value={this.state.Unit09} onChange={this.onChangeUnit09}></input>
                        </div>
                        <div>
                            <label>Unit 10 -</label>
                            <input id='Unit' placeholder='Unit10' class='Unit' type="text" value={this.state.Unit10} onChange={this.onChangeUnit10}></input>
                        </div>
                        <div>
                            <label>Unit 11 -</label>
                            <input id='Unit' placeholder='Unit11' class='Unit' type="text" value={this.state.Unit11} onChange={this.onChangeUnit11}></input>
                        </div>
                        <div>
                            <label>Unit 12 -</label>
                            <input id='Unit' placeholder='Unit12' class='Unit' type="text" value={this.state.Unit12} onChange={this.onChangeUnit12}></input>
                        </div>
                        <div>
                            <label>Unit 13 -</label>
                            <input id='Unit' placeholder='Unit13' class='Unit' type="text" value={this.state.Unit13} onChange={this.onChangeUnit13}></input>
                        </div>
                        <div>
                            <label>Unit 14 -</label>
                            <input id='Unit' placeholder='Unit14' class='Unit' type="text" value={this.state.Unit14} onChange={this.onChangeUnit14}></input>
                        </div>
                        <div>
                            <label>Unit 15 -</label>
                            <input id='Unit' placeholder='Unit15' class='Unit' type="text" value={this.state.Unit15} onChange={this.onChangeUnit15}></input>
                        </div>
                        <div>
                            <label>Unit 16 -</label>
                            <input id='Unit' placeholder='Unit16' class='Unit' type="text" value={this.state.Unit16} onChange={this.onChangeUnit16}></input>
                        </div>
                        <div>
                            <label>Unit 17 -</label>
                            <input id='Unit' placeholder='Unit17' class='Unit' type="text" value={this.state.Unit17} onChange={this.onChangeUnit17}></input>
                        </div>
                        <div>
                            <label>Unit 18 -</label>
                            <input id='Unit' placeholder='Unit18' class='Unit' type="text" value={this.state.Unit18} onChange={this.onChangeUnit18}></input>
                        </div>
                        <div>
                            <label>Unit 19 -</label>
                            <input id='Unit' placeholder='Unit19' class='Unit' type="text" value={this.state.Unit19} onChange={this.onChangeUnit19}></input>
                        </div>

                        
                    </Container>
                    <Container id='Ingredients'>
                        <div>
                            <label>Ingredient 1 -</label>
                            <input id='Ingredent' placeholder='Ingredent1' class='Ingredent' type="text" value={this.state.Ingredients01} onChange={this.onChangeIngredient01}></input>
                        </div>
                        <div>
                            <label>Ingredient 2 -</label>
                            <input id='Ingredent' placeholder='Ingredent2' class='Ingredent' type="text" value={this.state.Ingredients02} onChange={this.onChangeIngredient02}></input>
                        </div>
                        <div>
                            <label>Ingredient 3 -</label>
                            <input id='Ingredent' placeholder='Ingredent3' class='Ingredent' type="text" value={this.state.Ingredients03} onChange={this.onChangeIngredient03}></input>
                        </div>
                        <div>
                            <label>Ingredient 4 -</label>
                            <input id='Ingredent' placeholder='Ingredent4' class='Ingredent' type="text" value={this.state.Ingredients04} onChange={this.onChangeIngredient04}></input>
                        </div>
                        <div>
                            <label>Ingredient 5 -</label>
                            <input id='Ingredent' placeholder='Ingredent5' class='Ingredent' type="text" value={this.state.Ingredients05} onChange={this.onChangeIngredient05}></input>
                        </div>
                        <div>
                            <label>Ingredient 6 -</label>
                            <input id='Ingredent' placeholder='Ingredent6' class='Ingredent' type="text" value={this.state.Ingredients06} onChange={this.onChangeIngredient06}></input>
                        </div>
                        <div>
                            <label>Ingredient 7 -</label>
                            <input id='Ingredent' placeholder='Ingredent7' class='Ingredent' type="text" value={this.state.Ingredients07} onChange={this.onChangeIngredient07}></input>
                        </div>
                        <div>
                            <label>Ingredient 8 -</label>
                            <input id='Ingredent' placeholder='Ingredent8' class='Ingredent' type="text" value={this.state.Ingredients08} onChange={this.onChangeIngredient08}></input>
                        </div>
                        <div>
                            <label>Ingredient 9 -</label>
                            <input id='Ingredent' placeholder='Ingredent9' class='Ingredent' type="text" value={this.state.Ingredients09} onChange={this.onChangeIngredient09}></input>
                        </div>
                        <div>
                            <label>Ingredient 10 -</label>
                            <input id='Ingredent' placeholder='Ingredent10' class='Ingredent' type="text" value={this.state.Ingredients10} onChange={this.onChangeIngredient10}></input>
                        </div>
                        <div>
                            <label>Ingredient 11 -</label>
                            <input id='Ingredent' placeholder='Ingredent11' class='Ingredent' type="text" value={this.state.Ingredients11} onChange={this.onChangeIngredient11}></input>
                        </div>
                        <div>
                            <label>Ingredient 12 -</label>
                            <input id='Ingredent' placeholder='Ingredent12' class='Ingredent' type="text" value={this.state.Ingredients12} onChange={this.onChangeIngredient12}></input>
                        </div>
                        <div>
                            <label>Ingredient 13 -</label>
                            <input id='Ingredent' placeholder='Ingredent13' class='Ingredent' type="text" value={this.state.Ingredients13} onChange={this.onChangeIngredient13}></input>
                        </div>
                        <div>
                            <label>Ingredient 14 -</label>
                            <input id='Ingredent' placeholder='Ingredent14' class='Ingredent' type="text" value={this.state.Ingredients14} onChange={this.onChangeIngredient14}></input>
                        </div>
                        <div>
                            <label>Ingredient 15 -</label>
                            <input id='Ingredent' placeholder='Ingredent15' class='Ingredent' type="text" value={this.state.Ingredients15} onChange={this.onChangeIngredient15}></input>
                        </div>
                        <div>
                            <label>Ingredient 16 -</label>
                            <input id='Ingredent' placeholder='Ingredent16' class='Ingredent' type="text" value={this.state.Ingredients16} onChange={this.onChangeIngredient16}></input>
                        </div>
                        <div>
                            <label>Ingredient 17 -</label>
                            <input id='Ingredent' placeholder='Ingredent17' class='Ingredent' type="text" value={this.state.Ingredients17} onChange={this.onChangeIngredient17}></input>
                        </div>
                        <div>
                            <label>Ingredient 18 -</label>
                            <input id='Ingredent' placeholder='Ingredent18' class='Ingredent' type="text" value={this.state.Ingredients18} onChange={this.onChangeIngredient18}></input>
                        </div>
                        <div>
                            <label>Ingredient 19 -</label>
                            <input id='Ingredent' placeholder='Ingredent19' class='Ingredent' type="text" value={this.state.Ingredients19} onChange={this.onChangeIngredient19}></input>
                        </div>
                    </Container>
                    
                </div>
                </Card>
                <div className="form-group">
                    <input type="submit" value="Edit Book" className="btn btn-primary"
                    />
                </div>
            </form>
        </div>
    );
    }
}