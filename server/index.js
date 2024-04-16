const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const MovieModel = require('./models/Movies')
const RegisterUserModel = require('./models/Register')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const cookieParser = require('cookie-parser')

//mongo
const uri = "mongodb+srv://robins57:Bruh5@fullstackproject.nhzv5ms.mongodb.net/?retryWrites=true&w=majority&appName=FullStackProject";

const app = express()
//only allowing GET, POST, PUT, and DELETE methods from http://localhost:5173
app.use(cors({
  origin: ["http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}))
app.use(cookieParser())
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


  // Authentication middleware, if token is valid then the request can proceed, otherwise returns an error
  const verifyUser = (req, res, next) => {
    const token = req.cookies.token;
    //console.log(token);
    if(!token) {
      return res.json("The token was not available")
    } else {
      jwt.verify(token, "jwt-secret-key", (err, decoded) => {
        if(err) return res.json("Token is wrong")
        next();
      })
    }
  }

  // Protected route, can only load database entries and crud abilities if user is verified
app.get('/', verifyUser, (req, res) => {
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


  /**
 * POST endpoint to register a new user.
 * 
 * param {Object} req - The request object containing user data.
 * param {Object} res - The response object used to send back the response.
 */
  app.post("/register", (req, res) => {
    console.log("Received POST request to /register");
    const { name, email, password } = req.body;
  
    // Hashing the password
    bcrypt.hash(password, 10)
      .then(hashedPassword => {
        RegisterUserModel.findOne({ email: email })
          .then(user => {
            if (user) {
              res.json("User already has an account with that email");
            } else {
              RegisterUserModel.create({
                name: name,
                email: email,
                password: hashedPassword  // Storing hashed password
              })
                .then(result => res.json("Account Created"))
                .catch(err => res.json("Error while creating user" + err));
            }
          })
          .catch(err => res.json(err));
      })
      .catch(err => res.json(err));
  });
  

  /**
 * POST endpoint for user login.
 * 
 * param {Object} req - The request object containing user credentials.
 * pparam {Object} res - The response object used to send back the response.
 */
  app.post("/login", (req, res) => {
    console.log("Recieved POST request to /login")
    const {email, password} = req.body;
    RegisterUserModel.findOne({email: email})
    .then(user => {
      if(user) {
          bcrypt.compare(password, user.password, (err, response) => {
            if(response) {
              const token = jwt.sign({email: user.email}, "jwt-secret-key", {expiresIn:"1d"})
              //Sets token in cookie
              res.cookie("token", token);
              // Sends success message along with token
              res.json({ message: "Successful login.", token: token });
            } else {
              res.json("The password is incorrect")
            }
          })
      } else {
        // if no user found in DB collection
        res.json("No record exists for this email/pass combo")
      }
    }) .catch(err => res.json(err))
  })


// Starting the server
app.listen(3001, () => {
    console.log("Server is running")
})