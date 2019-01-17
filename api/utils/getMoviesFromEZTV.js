const axios = require('axios');

const MovieManager = require('../models/movieManager');

function getNewMovies() {
  EztvPageCount().then(pages => {
    getAllPages(pages);
  })
}

function EztvPageCount() {
  return new Promise ((resolve, reject) => {
    axios.get('https://eztv.io/api/get-torrents?limit=100')
    .then(response => {
      resolve(Math.ceil(response.data.torrents_count  / response.data.limit));
    }).catch(error => reject(error));
  });
}

function checkMovie(data) {
  MovieManager.exist(data.imdb_id)
  .then(status => {
    if (!status) { addMovie(data) }
  })
}

function addMovie(data) {

    let movie = {
      imdbId: data.imdb_id,
      title: data.title,
      season: data.season,
      episode: data.episode,
      cover: data.large_screenshot,
      torrents: {
      }
    }
    MovieManager.createMovie(movie).then(created => {

    })

}

function getPage(page) {
  return new Promise (resolve => {
    axios.get('https://eztv.io/api/get-torrents?limit=100&page='+page)
    .then(response => {
      for (var i = 0; i < response.data.torrents.length; i++) {
        checkMovie(response.data.torrents[i]);
      }
      setTimeout(resolve, 1500)
    })
  })
}

async function getAllPages(pages) {
  for (var i = 1; i <= pages; i++) {
  //  console.log('EZTV Check Page '+ i)
    await getPage(i);
  }
}
function getNewMovies() {
  EztvPageCount().then(pages => {
    getAllPages(pages);
  })
}
module.exports.launcher = getNewMovies;
