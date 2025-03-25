const express = require("express");

const MovieRouter = express.Router();

const {getCurrentMovies , getTrendingMovies , getPopularMovies, getUpComingMovies,
getTopRatedMovies , getActionMovies, getComedyMovies, getHorrorMovies , getRomanceMovies,getAnimeMovies,
getActionTV , getComedyTV , getMysteryTV , getDramaTV , getCrimeTV} = require("../controllers/movieController")


// home page routes
MovieRouter.get("/api/movies/CurrentMovies",getCurrentMovies);
MovieRouter.get("/api/movies/TrendingMovies",getTrendingMovies);
MovieRouter.get("/api/movies/PopularMovies",getPopularMovies);
MovieRouter.get("/api/movies/UpComingMovies",getUpComingMovies);
// movies routes
MovieRouter.get("/api/movies/TopRated",getTopRatedMovies);
MovieRouter.get("/api/movies/ActionMovies",getActionMovies);
MovieRouter.get("/api/movies/ComedyMovies",getComedyMovies);
MovieRouter.get("/api/movies/HorrorMovies",getHorrorMovies);
MovieRouter.get("/api/movies/RomanceMovies",getRomanceMovies);
MovieRouter.get("/api/movies/AnimeMovies",getAnimeMovies);
// TV shows routes
MovieRouter.get("/api/movies/ActionTV",getActionTV);
MovieRouter.get("/api/movies/ComedyTV",getComedyTV);
MovieRouter.get("/api/movies/MysteryTV",getMysteryTV);
MovieRouter.get("/api/movies/DramaTV",getDramaTV);
MovieRouter.get("/api/movies/CrimeTV",getCrimeTV);

module.exports = MovieRouter;