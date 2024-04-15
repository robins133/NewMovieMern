const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    rating: Number
})

const MovieModel = mongoose.model("movies", MovieSchema)
module.exports = MovieModel