const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    rating: Number,
    Register: [{
        type: mongoose.Types.ObjectId,
        ref: "register",
    }]
})

const MovieModel = mongoose.model("movies", MovieSchema)
module.exports = MovieModel