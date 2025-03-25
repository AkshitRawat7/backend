const { getMediaList, TMDB_ENDPOINT } = require("../utility/utility")

//Home page controllers\\
async function getCurrentMovies(req, res) {
  try {
    const currentMovieList = await getMediaList(TMDB_ENDPOINT.fetchcurrentMovies);
    res.status(200).json({
      status: "success",
      message: currentMovieList
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getTrendingMovies(req, res) {
  try {
    const currentMovieList = await getMediaList(TMDB_ENDPOINT.fetchTrending);
    res.status(200).json({
      status: "success",
      message: currentMovieList
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getPopularMovies(req, res) {
  try {
    const currentMovieList = await getMediaList(TMDB_ENDPOINT.fetchPopular);
    res.status(200).json({
      status: "success",
      message: currentMovieList
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getUpComingMovies(req,res){
  try {
    const upComing = await getMediaList(TMDB_ENDPOINT.fetchUpcoming);
    res.status(200).json({
      status: "success",
      message: upComing
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

//movies controller\\
async function getTopRatedMovies(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchTopRated);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getActionMovies(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchActionMovies);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getComedyMovies(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchComedyMovies);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getHorrorMovies(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchHorrorMovies);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getRomanceMovies(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchRomanceMovies);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getAnimeMovies(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchAnimeMovies);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

// TV controllers\\
async function getActionTV(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchActionTvShows);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getComedyTV(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchComedyTvShows);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getMysteryTV(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchMysteryTvShows);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getDramaTV(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchDramaTvShows);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}

async function getCrimeTV(req,res){
  try {
    const topRatedMovies = await getMediaList(TMDB_ENDPOINT.fetchCrimeTvShows);
    res.status(200).json({
      status: "success",
      message: topRatedMovies
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Failed to fetch movie list",
      error: error.message
    });
  }
}


  module.exports = {
    getCurrentMovies , getTrendingMovies , getPopularMovies, getUpComingMovies,
    getTopRatedMovies , getActionMovies, getComedyMovies, getHorrorMovies , getRomanceMovies,getAnimeMovies,
    getActionTV , getComedyTV , getMysteryTV , getDramaTV , getCrimeTV
  }


 