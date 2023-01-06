//Node server.js to run
//Rightclick on server.js and open in integrated terminal
//Others npm start to run

const express = require('express') //Express is web framework
const app = express() //Running express
const port = 4000 //Define port
const bodyParser = require('body-parser'); //Allows you to search body of Http request (Need this for Post Method)

// parse application/x-www-form-urlencoded (Need this for Post Method)
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json (Need this for Post Method)
app.use(bodyParser.json())

// Serve the static files from the React app
const path = require('path');
app.use(express.static(path.join(__dirname,'../../build')));
app.use('/static', express.static(path.join(__dirname,'build//static')));


//Importing mongoose library
const mongoose = require('mongoose');

//Catch Errors
main().catch(err => console.log(err));

//Connects to database
async function main() {
    //Connection string tells mongoose where to connect to 
  await mongoose.connect('mongodb+srv://admin:admin@cluster0.zo0qzsa.mongodb.net/?retryWrites=true&w=majority'); //Connection string for database
}

mongoose.connection.on('connected',() =>{
    console.log('connected to the server via mongooes');
})

//Define Schema - What type of data you want to save
  // recipie schema from a csv file found on a git repo - https://github.com/cweber/cookbook.git
  const recipesSchema = new mongoose.Schema({
    title: String,
    directions: String,
    //1
    quantity1: String,
    unit1: String,
    ingredient1: String,
    //2
    quantity2: String,
    unit2: String,
    ingredient2: String,
    //3
    quantity3: String,
    unit3: String,
    ingredient3: String,
    //4
    quantity4: String,
    unit4: String,
    ingredient4: String,
    //5
    quantity5: String,
    unit5: String,
    ingredient5: String,
    //6
    quantity6: String,
    unit6: String,
    ingredient6: String,
    //7
    quantity7: String,
    unit7: String,
    ingredient7: String,
    //8
    quantity8: String,
    unit8: String,
    ingredient8: String,
    //9
    quantity9: String,
    unit9: String,
    ingredient9: String,
    //10
    quantity10: String,
    unit10: String,
    ingredient10: String,
    //11
    quantity11: String,
    unit11: String,
    ingredient11: String,
    //12
    quantity12: String,
    unit12: String,
    ingredient12: String,
    //13
    quantity13: String,
    unit13: String,
    ingredient13: String,
    //14
    quantity14: String,
    unit14: String,
    ingredient14: String,
    //15
    quantity15: String,
    unit15: String,
    ingredient15: String,
    //16
    quantity16: String,
    unit16: String,
    ingredient16: String,
    //17
    quantity17: String,
    unit17: String,
    ingredient17: String,
    //18
    quantity18: String,
    unit18: String,
    ingredient18: String,
    //19
    quantity19: String,
    unit19: String,
    ingredient19: String,
    category : String,
  })

//Represents a collection of recipe data
//Object that represents database
const recipesModel = mongoose.model('Recipes',recipesSchema);


//Allows access to other server.
const cors = require('cors');
    app.use(cors());
    app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

//greeting from the server for testing its active
app.get('/', (req, res) => {
    res.send('Hello From Your Server')
})

//find all for the data and parse as json to the client
app.get('/api/recipes',(req,res) =>{
    console.log("atempting to get data");
    recipesModel.find((error,data) => {
        console.log("Data Found");
        res.json(data);
    })
})

//Listens for http request at this URL. Pass id as part of URL
app.get('/api/recipes/:id', (req, res)=>{
    console.log(req.params.id);
    
    //Search database for this parameter id
    recipesModel.findById(req.params.id, (error, data)=>{
        res.json(data);
    })
})

// PUT - for editing an entry to the DB
app.put('/api/recipe/:id', (req, res)=> {
    //Pass it the id of what you want to overwrite and data you want to overwrite with
    recipesModel.findByIdAndUpdate(req.params.id, req.body, {new: true}, 
        (error, data) => {
        res.send(data);
    })
})

// GET - for searching the DB - incomplete
app.get('/api/recipesSearch/:id',(req, res) => {
    recipesModel.find({ Title: /req.params.id/}, (error, data)=>{
        res.json(data);
    })
})

//Listen for post request at this URL
//When conditions are met - Log recipe data to console
app.post('/api/recipes', (req,res) =>{
    console.log(req.body);
    recipesModel.create({
    title: req.body.Title,
    directions: req.body.Directions,
    //1
    quantity1: req.body.Quantity01,
    unit1: req.body.Unit01,
    ingredient1: req.body.Ingredient01,
    //2
    quantity2: req.body.Quantity02,
    unit2: req.body.Unit02,
    ingredient2: req.body.Ingredient02,
    //3
    quantity3: req.body.Quantity03,
    unit3: req.body.Unit03,
    ingredient3: req.body.Ingredient03,
    //4
    quantity4: req.body.Quantity04,
    unit4: req.body.Unit04,
    ingredient4: req.body.Ingredient04,
    //5
    quantity5: req.body.Quantity05,
    unit5: req.body.Unit05,
    ingredient5: req.body.Ingredient05,
    //6
    quantity6: req.body.Quantity06,
    unit6: req.body.Unit06,
    ingredient6: req.body.Ingredient06,
    //7
    quantity7: req.body.Quantity07,
    unit7: req.body.Unit07,
    ingredient7: req.body.Ingredient07,
    //8
    quantity8: req.body.Quantity08,
    unit8: req.body.Unit08,
    ingredient8: req.body.Ingredient08,
    //9
    quantity9: req.body.Quantity09,
    unit9: req.body.Unit09,
    ingredient9: req.body.Ingredient09,
    //10
    quantity10: req.body.Quantity10,
    unit10: req.body.Unit10,
    ingredient10: req.body.Ingredient10,
    //11
    quantity11: req.body.Quantity11,
    unit11: req.body.Unit11,
    ingredient11: req.body.Ingredient11,
    //12
    quantity12: req.body.Quantity12,
    unit12: req.body.Unit12,
    ingredient12: req.body.Ingredient12,
    //13
    quantity13: req.body.Quantity13,
    unit13: req.body.Unit13,
    ingredient13: req.body.Ingredient13,
    //14
    quantity14: req.body.Quantity14,
    unit14: req.body.Unit14,
    ingredient14: req.body.Ingredient14,
    //15
    quantity15: req.body.Quantity15,
    unit15: req.body.Unit15,
    ingredient15: req.body.Ingredient15,
    //16
    quantity16: req.body.Quantity16,
    unit16: req.body.Unit16,
    ingredient16: req.body.Ingredient16,
    //17
    quantity17: req.body.Quantity17,
    unit17: req.body.Unit17,
    ingredient17: req.body.Ingredient17,
    //18
    quantity18: req.body.Quantity18,
    unit18: req.body.Unit18,
    ingredient18: req.body.Ingredient18,
    //19
    quantity19: req.body.Quantity19,
    unit19: req.body.Unit19,
    ingredient19: req.body.Ingredient19,

    category : req.body.Category,
    })
})

//delete request
app.delete('/api/recipe/:id', (req, res)=>{
    console.log("Deleting: " + req.params.id)
    //Find by id and delete
    recipesModel.findByIdAndDelete({_id: req.params.id},(error,data)=>{
        res.send(data); //Once deleted, send back data
    })
})

// Handles any requests that don't match the ones above
app.get('*', (req,res) =>{
    res.sendFile(path.join(__dirname+'/../build/index.html'));
});
    
//Listens for request at port 4000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})