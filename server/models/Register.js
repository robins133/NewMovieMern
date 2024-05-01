const mongoose = require('mongoose')

const RegisterUserSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    Movies: [{
        type: mongoose.Types.ObjectId,
        ref: "movies",
    }]
})

//2 params in mongoose.model(), 1st is the name of the collection, second is the schema type
const RegisterUserModel = mongoose.model("register", RegisterUserSchema)
module.exports = RegisterUserModel;