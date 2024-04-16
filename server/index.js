const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MovieModel = require('./models/Movies')
const RegisterUserModel = require('./models/Register')

//mongo
const uri = "mongodb+srv://robins57:Bruh5@fullstackproject.nhzv5ms.mongodb.net/?retryWrites=true&w=majority&appName=FullStackProject";

const app = express()
app.use(cors())
app.use(express.json())

// Connecting to the Mongo DB
mongoose.connect(uri, {
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

app.get('/', (req, res) => {
    MovieModel.find({})
    .then(movies => res.json(movies))
    .catch(err => res.json(err))
})

app.get('/getMovie/:id', (req, res) => {
    const id = req.params.id;
    MovieModel.findById({_id:id})
    .then(movies => res.json(movies))
    .catch(err => res.json(err))
})

app.put('/updateMovie/:id', (req, res) => {
    console.log("Recieved PUT request to /updateMovie")
    const id = req.params.id;
    MovieModel.findByIdAndUpdate({_id: id}, {
        title: req.body.title, 
        genre: req.body.genre, 
        rating: req.body.rating})
    .then(movies => res.json(movies))
    .catch(err => res.json(err))
})

app.delete('/deleteMovie/:id', (req, res) => {
    console.log("Recieved delete request to /deleteMovie")
    const id = req.params.id;
    MovieModel.findByIdAndDelete({_id: id})
    .then(res => res.json(res))
    .catch(err => res.json(err))
})

  app.post("/createMovie", (req, res) => {
    console.log("Recieved POST request to /createMovie")
    MovieModel.create(req.body)
    .then(movies => res.json(movies))
    .catch(err => res.json(err))
  })

  app.post("/register", (req, res) => {
    console.log("Recieved POST request to /register")
    const {name, email, password} = req.body;
    RegisterUserModel.findOne({email: email})
    .then(user => {
      if(user) {
        res.json("User already has an account with that email")
      } else {
        RegisterUserModel.create({name: name, email: email, password: password})
        .then(result => res.json("Account Created"))
        .catch(err => res.json("Error while creating user" + err))
      }
    }) .catch(err => res.json(err))
  })
  
  app.post("/login", (req, res) => {
    console.log("Recieved POST request to /login")
    const {email, password} = req.body;
    RegisterUserModel.findOne({email: email})
    .then(user => {
      if(user) {
          if(user.password === password) {
            res.json("Login Successful")
          } else {
            res.json("Login failed. Wrong password")
          }
      } else {
        res.json("No record exists for this email/pass combo")
      }
    }) .catch(err => res.json(err))
  })


// Starting the server
app.listen(3001, () => {
    console.log("Server is running")
})