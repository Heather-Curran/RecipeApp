import React from 'react';
import '../App.css';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { Container } from '@mui/system';
import { Button } from 'bootstrap';

export function EditRecipe(props) {
    // The useParams hook returns an object of key/value pairs of
    // the dynamic params from the current URL that were matched by
    //the <Route path>.
    
    let { id } = useParams(); //Holds id of document

    // update arrays using the React useState()
    // and without the Array object's push() method
    const [Title, setTitle] = useState("");
    const [Category,setCategory] = useState("");
    const [Directions,setDirections] = useState();
    const [Ingredients01,setIngredient01] = useState("");
    const [Ingredients02,setIngredient02] = useState("");
    const [Ingredients03,setIngredient03] = useState("");
    const [Ingredients04,setIngredient04] = useState("");
    const [Ingredients05,setIngredient05] = useState("");
    const [Ingredients06,setIngredient06] = useState("");
    const [Ingredients07,setIngredient07] = useState("");
    const [Ingredients08,setIngredient08] = useState("");
    const [Ingredients09,setIngredient09] = useState("");
    const [Ingredients10,setIngredient10] = useState("");
    const [Ingredients11,setIngredient11] = useState("");
    const [Ingredients12,setIngredient12] = useState("");
    const [Ingredients13,setIngredient13] = useState("");
    const [Ingredients14,setIngredient14] = useState("");
    const [Ingredients15,setIngredient15] = useState("");
    const [Ingredients16,setIngredient16] = useState("");
    const [Ingredients17,setIngredient17] = useState("");
    const [Ingredients18,setIngredient18] = useState("");
    const [Ingredients19,setIngredient19] = useState("");
    const [Quantity01,setQuantity] = useState("");    
    const [Quantity02,setQuantity02] = useState("");    
    const [Quantity03,setQuantity03] = useState("");
    const [Quantity04,setQuantity04] = useState("");
    const [Quantity05,setQuantity05] = useState("");
    const [Quantity06,setQuantity06] = useState("");
    const [Quantity07,setQuantity07] = useState("");
    const [Quantity08,setQuantity08] = useState("");
    const [Quantity09,setQuantity09] = useState("");
    const [Quantity10,setQuantity10] = useState("");
    const [Quantity11,setQuantity11] = useState("");
    const [Quantity12,setQuantity12] = useState("");
    const [Quantity13,setQuantity13] = useState("");
    const [Quantity14,setQuantity14] = useState("");
    const [Quantity15,setQuantity15] = useState("");
    const [Quantity16,setQuantity16] = useState("");
    const [Quantity17,setQuantity17] = useState("");
    const [Quantity18,setQuantity18] = useState("");
    const [Quantity19,setQuantity19] = useState(""); 
    const [Unit01 , setUnit01] = useState("");    
    const [Unit02 , setUnit02] = useState("");    
    const [Unit03 , setUnit03] = useState("");
    const [Unit04 , setUnit04] = useState("");
    const [Unit05 , setUnit05] = useState("");
    const [Unit06 , setUnit06] = useState("");
    const [Unit07 , setUnit07] = useState("");
    const [Unit08 , setUnit08] = useState("");
    const [Unit09 , setUnit09] = useState("");
    const [Unit10 , setUnit10] = useState("");
    const [Unit11 , setUnit11] = useState("");
    const [Unit12 , setUnit12] = useState("");
    const [Unit13 , setUnit13] = useState("");
    const [Unit14 , setUnit14] = useState("");
    const [Unit15 , setUnit15] = useState("");
    const [Unit16 , setUnit16] = useState("");
    const [Unit17 , setUnit17] = useState("");
    const [Unit18 , setUnit18] = useState("");
    const [Unit19 , setUnit19] = useState("");    

    // useNavigate return a function that we can use to navigate
    //Allows to change url
    const navigate = useNavigate();

    //useEffect Hook is similar componentDidMount
    useEffect(() => {
        //axios is a promised based web client
        //make a HTTP Request with GET method and pass as part of the
        //url.
        axios.get('http://localhost:4000/api/recipes/' + id)
            .then((response) => {
                // Assign Response data to the arrays using useState.
                setTitle(response.data.Title);
                setCategory(response.data.Category);
                setDirections(response.data.Directions);
                setIngredient01(response.data.Ingredient01);
                setIngredient02(response.data.Ingredient02);
                setIngredient03(response.data.Ingredient03);
                setIngredient04(response.data.Ingredient04);
                setIngredient05(response.data.Ingredient05);
                setIngredient06(response.data.Ingredient06);
                setIngredient07(response.data.Ingredient07);
                setIngredient08(response.data.Ingredient08);
                setIngredient09(response.data.Ingredient09);
                setIngredient10(response.data.Ingredient10);
                setIngredient11(response.data.Ingredient11);
                setIngredient12(response.data.Ingredient12);
                setIngredient13(response.data.Ingredient13);
                setIngredient14(response.data.Ingredient14);
                setIngredient15(response.data.Ingredient15);
                setIngredient16(response.data.Ingredient16);
                setIngredient17(response.data.Ingredient17);
                setIngredient18(response.data.Ingredient18);
                setIngredient19(response.data.Ingredient19);
                setQuantity(response.data.Quantity);
                setQuantity02(response.data.Quantity02);
                setQuantity03(response.data.Quantity03);
                setQuantity04(response.data.Quantity04);
                setQuantity05(response.data.Quantity05);
                setQuantity06(response.data.Quantity06);
                setQuantity07(response.data.Quantity07);
                setQuantity08(response.data.Quantity08);
                setQuantity09(response.data.Quantity09);
                setQuantity10(response.data.Quantity10);
                setQuantity11(response.data.Quantity11);
                setQuantity12(response.data.Quantity12);
                setQuantity13(response.data.Quantity13);
                setQuantity14(response.data.Quantity14);
                setQuantity15(response.data.Quantity15);
                setQuantity16(response.data.Quantity16);
                setQuantity17(response.data.Quantity17);
                setQuantity18(response.data.Quantity18);
                setQuantity19(response.data.Quantity19);
                setUnit01(response.data.Unit01);
                setUnit02(response.data.Unit02);
                setUnit03(response.data.Unit03);
                setUnit04(response.data.Unit04);
                setUnit05(response.data.Unit05);
                setUnit06(response.data.Unit06);
                setUnit07(response.data.Unit07);
                setUnit08(response.data.Unit08);
                setUnit09(response.data.Unit09);
                setUnit10(response.data.Unit10);
                setUnit11(response.data.Unit11);
                setUnit12(response.data.Unit12);
                setUnit13(response.data.Unit13);
                setUnit14(response.data.Unit14);
                setUnit15(response.data.Unit15);
                setUnit16(response.data.Unit16);
                setUnit17(response.data.Unit17);
                setUnit18(response.data.Unit18);
                setUnit19(response.data.Unit19);

            })
            .catch(function (error) {
                console.log(error);
            })
    }, []);


    const handleSubmit = (event) => {
        event.preventDefault();
        const editRecipe = {
            Title : Title,
            Category : Category,
            Directions : Directions,
            Ingredients01 : Ingredients01,
            Ingredients02 : Ingredients02,
            Ingredients03 : Ingredients03,
            Ingredients04 : Ingredients04,
            Ingredients05 : Ingredients05,
            Ingredients06 : Ingredients06,
            Ingredients07 : Ingredients07,
            Ingredients08 : Ingredients08,
            Ingredients09 : Ingredients09,
            Ingredients10 : Ingredients10,
            Ingredients11 : Ingredients11,
            Ingredients12 : Ingredients12,
            Ingredients13 : Ingredients13,
            Ingredients14 : Ingredients14,
            Ingredients15 : Ingredients15,
            Ingredients16 : Ingredients16,
            Ingredients17 : Ingredients17,
            Ingredients18 : Ingredients18,
            Ingredients19 : Ingredients19,
            Quantity01 : Quantity01,
            Quantity02 : Quantity02,
            Quantity03 : Quantity03,
            Quantity04 : Quantity04,
            Quantity05 : Quantity05,
            Quantity06 : Quantity06,
            Quantity07 : Quantity07,
            Quantity08 : Quantity08,
            Quantity09 : Quantity09,
            Quantity10 : Quantity10,
            Quantity11 : Quantity11,
            Quantity12 : Quantity12,
            Quantity13 : Quantity13,
            Quantity14 : Quantity14,
            Quantity15 : Quantity15,
            Quantity16 : Quantity16,
            Quantity17 : Quantity17,
            Quantity18 : Quantity18,
            Quantity19 : Quantity19,
            Unit01 : Unit01,
            Unit02 : Unit02,
            Unit03 : Unit03,
            Unit04 : Unit04,
            Unit05 : Unit05,
            Unit06 : Unit06,
            Unit07 : Unit07,
            Unit08 : Unit08,
            Unit09 : Unit09,
            Unit10 : Unit10,
            Unit11 : Unit11,
            Unit12 : Unit12,
            Unit13 : Unit13,
            Unit14 : Unit14,
            Unit15 : Unit15,
            Unit16 : Unit16,
            Unit17 : Unit17,
            Unit18 : Unit18,
            Unit19 : Unit19
        };

        axios.put('http://localhost:4000/api/recipe/' + id, editRecipe)
            .then((res) => {
                console.log("result Data : " + res.data);
                navigate('/recipes'); //When edit works, navigate back to /read
            })
            .catch();
    }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <Card>
                    <div>
                        <label >Title -</label>
                        <input  title='Title' placeholder='Title' class='Title' type="text" value={Title} onChange={(e) => setTitle(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Category -</label>
                        <input  title='Category' placeholder='Category' class='Category' type="text" value={Category} onChange={(e) => setCategory(e.target.value)}></input>
                    </div>
                    <div>
                        <label >Directions -</label>
                        <input  title='Directions' placeholder='Directions' class='Directions' type="textBox" value={Title} onChange={(e) => setDirections(e.target.value)}></input>
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
                            <input id='Quantity' title='Quantity1' placeholder='Quantity1' type="text" value={Quantity01} onChange={(e) => setQuantity(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity2 -</label>
                            <input id='Quantity' title='Quantity2' placeholder='Quantity2'  type="text" value={Quantity02} onChange={(e) => setQuantity02(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 3 -</label>
                            <input id='Quantity' title='Quantity3' placeholder='Quantity3'  type="text" value={Quantity03} onChange={(e) => setQuantity03(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 4 -</label>
                            <input id='Quantity' title='Quantity4' placeholder='Quantity4'  type="text" value={Quantity04} onChange={(e) => setQuantity04(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 5 -</label>
                            <input id='Quantity' title='Quantity5' placeholder='Quantity5'  type="text" value={Quantity05} onChange={(e) => setQuantity05(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 6 -</label>
                            <input id='Quantity' title='Quantity6' placeholder='Quantity6'  type="text" value={Quantity06} onChange={(e) => setQuantity06(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 7 -</label>
                            <input id='Quantity' title='Quantity7' placeholder='Quantity7'  type="text" value={Quantity07} onChange={(e) => setQuantity07(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 8 -</label>
                            <input id='Quantity' title='Quantity8' placeholder='Quantity8'  type="text" value={Quantity08} onChange={(e) => setQuantity08(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 9 -</label>
                            <input id='Quantity' title='Quantity9' placeholder='Quantity9'  type="text" value={Quantity09} onChange={(e) => setQuantity09(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 10 -</label>
                            <input id='Quantity' title='Quantity10' placeholder='Quantity10'  type="text" value={Quantity10} onChange={(e) => setQuantity10(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 11 -</label>
                            <input id='Quantity' title='Quantity10' placeholder='Quantity11'  type="text" value={Quantity11} onChange={(e) => setQuantity11(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 12 -</label>
                            <input id='Quantity' title='Quantity2' placeholder='Quantity12'  type="text" value={Quantity12} onChange={(e) => setQuantity12(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity13 -</label>
                            <input id='Quantity' title='Quantity3' placeholder='Quantity13'  type="text" value={Quantity13} onChange={(e) => setQuantity13(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 14 -</label>
                            <input id='Quantity' title='Quantity4' placeholder='Quantity14'  type="text" value={Quantity14} onChange={(e) => setQuantity14(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 15 -</label>
                            <input id='Quantity' title='Quantity5' placeholder='Quantity15'  type="text" value={Quantity15} onChange={(e) => setQuantity15(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 16 -</label>
                            <input id='Quantity' title='Quantity6' placeholder='Quantity16'  type="text" value={Quantity16} onChange={(e) => setQuantity16(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 17 -</label>
                            <input id='Quantity' title='Quantity7' placeholder='Quantity17'  type="text" value={Quantity17} onChange={(e) => setQuantity17(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 18 -</label>
                            <input id='Quantity' title='Quantity8' placeholder='Quantity18'  type="text" value={Quantity18} onChange={(e) => setQuantity18(e.target.value)}></input>
                        </div>
                        <div className="dropdown">
                            <label>Quantity 19 -</label>
                            <input id='Quantity' title='Quantity9' placeholder='Quantity19'  type="text" value={Quantity19} onChange={(e) => setQuantity19(e.target.value)}></input>
                        </div>
                    </Container>
                    <Container id='Ingredients'>
                        <div>
                            <label>Unit 1 -</label>
                            <input id='Unit' placeholder='Unit1' class='Unit' type="text" value={Unit01} onChange={(e) => setUnit01(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 2 -</label>
                            <input id='Unit' placeholder='Unit2' class='Unit' type="text" value={Unit02} onChange={(e) => setUnit02(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 3 -</label>
                            <input id='Unit' placeholder='Unit3' class='Unit' type="text" value={Unit03} onChange={(e) => setUnit03(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 4 -</label>
                            <input id='Unit' placeholder='Unit4' class='Unit' type="text" value={Unit04} onChange={(e) => setUnit04(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 5 -</label>
                            <input id='Unit' placeholder='Unit5' class='Unit' type="text" value={Unit05} onChange={(e) => setUnit05(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 6 -</label>
                            <input id='Unit' placeholder='Unit6' class='Unit' type="text" value={Unit06} onChange={(e) => setUnit06(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 7 -</label>
                            <input id='Unit' placeholder='Unit7' class='Unit' type="text" value={Unit07} onChange={(e) => setUnit07(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 8 -</label>
                            <input id='Unit' placeholder='Unit8' class='Unit' type="text" value={Unit08} onChange={(e) => setUnit08(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 9 -</label>
                            <input id='Unit' placeholder='Unit9' class='Unit' type="text" value={Unit09} onChange={(e) => setUnit09(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 10 -</label>
                            <input id='Unit' placeholder='Unit10' class='Unit' type="text" value={Unit10} onChange={(e) => setUnit10(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 11 -</label>
                            <input id='Unit' placeholder='Unit11' class='Unit' type="text" value={Unit11} onChange={(e) => setUnit11(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 12 -</label>
                            <input id='Unit' placeholder='Unit12' class='Unit' type="text" value={Unit12} onChange={(e) => setUnit12(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 13 -</label>
                            <input id='Unit' placeholder='Unit13' class='Unit' type="text" value={Unit13} onChange={(e) => setUnit13(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 14 -</label>
                            <input id='Unit' placeholder='Unit14' class='Unit' type="text" value={Unit14} onChange={(e) => setUnit14(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 15 -</label>
                            <input id='Unit' placeholder='Unit15' class='Unit' type="text" value={Unit15} onChange={(e) => setUnit15(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 16 -</label>
                            <input id='Unit' placeholder='Unit16' class='Unit' type="text" value={Unit16} onChange={(e) => setUnit16(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 17 -</label>
                            <input id='Unit' placeholder='Unit17' class='Unit' type="text" value={Unit17} onChange={(e) => setUnit17(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 18 -</label>
                            <input id='Unit' placeholder='Unit18' class='Unit' type="text" value={Unit18} onChange={(e) => setUnit18(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Unit 19 -</label>
                            <input id='Unit' placeholder='Unit19' class='Unit' type="text" value={Unit19} onChange={(e) => setUnit19(e.target.value)}></input>
                        </div>

                        
                    </Container>
                    <Container id='Ingredients'>
                        <div>
                            <label>Ingredient 1 -</label>
                            <input id='Ingredent' placeholder='Ingredent1' class='Ingredent' type="text" value={Ingredients01} onChange={(e) => setIngredient01(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 2 -</label>
                            <input id='Ingredent' placeholder='Ingredent2' class='Ingredent' type="text" value={Ingredients02} onChange={(e) => setIngredient02(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 3 -</label>
                            <input id='Ingredent' placeholder='Ingredent3' class='Ingredent' type="text" value={Ingredients03} onChange={(e) => setIngredient03(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 4 -</label>
                            <input id='Ingredent' placeholder='Ingredent4' class='Ingredent' type="text" value={Ingredients04} onChange={(e) => setIngredient04(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 5 -</label>
                            <input id='Ingredent' placeholder='Ingredent5' class='Ingredent' type="text" value={Ingredients05} onChange={(e) => setIngredient05(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 6 -</label>
                            <input id='Ingredent' placeholder='Ingredent6' class='Ingredent' type="text" value={Ingredients06} onChange={(e) => setIngredient06(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 7 -</label>
                            <input id='Ingredent' placeholder='Ingredent7' class='Ingredent' type="text" value={Ingredients07} onChange={(e) => setIngredient07(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 8 -</label>
                            <input id='Ingredent' placeholder='Ingredent8' class='Ingredent' type="text" value={Ingredients08} onChange={(e) => setIngredient08(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 9 -</label>
                            <input id='Ingredent' placeholder='Ingredent9' class='Ingredent' type="text" value={Ingredients09} onChange={(e) => setIngredient09(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 10 -</label>
                            <input id='Ingredent' placeholder='Ingredent10' class='Ingredent' type="text" value={Ingredients10} onChange={(e) => setIngredient10(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 11 -</label>
                            <input id='Ingredent' placeholder='Ingredent11' class='Ingredent' type="text" value={Ingredients11} onChange={(e) => setIngredient11(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 12 -</label>
                            <input id='Ingredent' placeholder='Ingredent12' class='Ingredent' type="text" value={Ingredients12} onChange={(e) => setIngredient12(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 13 -</label>
                            <input id='Ingredent' placeholder='Ingredent13' class='Ingredent' type="text" value={Ingredients13} onChange={(e) => setIngredient13(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 14 -</label>
                            <input id='Ingredent' placeholder='Ingredent14' class='Ingredent' type="text" value={Ingredients14} onChange={(e) => setIngredient14(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 15 -</label>
                            <input id='Ingredent' placeholder='Ingredent15' class='Ingredent' type="text" value={Ingredients15} onChange={(e) => setIngredient15(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 16 -</label>
                            <input id='Ingredent' placeholder='Ingredent16' class='Ingredent' type="text" value={Ingredients16} onChange={(e) => setIngredient16(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 17 -</label>
                            <input id='Ingredent' placeholder='Ingredent17' class='Ingredent' type="text" value={Ingredients17} onChange={(e) => setIngredient17(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 18 -</label>
                            <input id='Ingredent' placeholder='Ingredent18' class='Ingredent' type="text" value={Ingredients18} onChange={(e) => setIngredient18(e.target.value)}></input>
                        </div>
                        <div>
                            <label>Ingredient 19 -</label>
                            <input id='Ingredent' placeholder='Ingredent19' class='Ingredent' type="text" value={Ingredients19} onChange={(e) => setIngredient19(e.target.value)}></input>
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