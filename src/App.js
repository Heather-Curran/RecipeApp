//Import React, bootstrap elements and routes so you can use them
//Import content, header and footer components so they can be displayed
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import MatButton from '@mui/material/Button';
import { Content } from './components/content';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { DisplayRecipes } from './components/DisplayRecipes'
import { Create } from './components/create';
import { EditRecipe } from './components/editRecipe';
//Client side routing
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Button } from 'bootstrap';


//Extend React.Component and add render()
class App extends React.Component {
  //Visual Piece
  //Can write js if you wrap it in curly brackets{}
  render() {
    return (
      <Router>
        <div className="App">
          {/* Navigation Bar (jsx) - changes url if clicked*/}
          <Navbar  variant="Light">
            <Container>
              <Navbar.Brand href="/">Heathers Cook Book</Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/recipes">Recipes</Nav.Link>
                <Nav.Link href="/create">Create</Nav.Link>
              </Nav>
              <input id="searchInput" placeholder='Search'></input>
              <MatButton id='searchButton'>Search</MatButton>
            </Container>
          </Navbar>

          <Routes>
            {/* When url path changes to this, show this component */}
            <Route path='/' element={<Content />}></Route>
            <Route path='/recipes' element={<DisplayRecipes/>}/>
            <Route path='/create' element={<Create />} />
            <Route path='/editRecipe/:id' element={<EditRecipe/>}></Route>
            
          </Routes>

          {/* <Header></Header>
      <Content></Content>
      <Footer></Footer> */}
        </div>
      </Router>
    );
  }
}

export default App;
