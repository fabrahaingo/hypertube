const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TorrentsSchema = new Schema({
  url: String,
  hash: String,
  quality: String,
  seeds: Number,
  peers: Number,
});

const MovieSchema = new Schema({
  cover: String,
  imdbId: String,
  title: String,
  year: Number,
  synopsis: String,
  rating: Number,
  torrents: [TorrentsSchema]
});

const Movie = mongoose.model('movie', MovieSchema);

module.exports = Movie;
