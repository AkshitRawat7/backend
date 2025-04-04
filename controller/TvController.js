const { tmdbApi, TMDB_ENDPOINT } = require("../services/tmdb");

const getActionTvShows = async (req, res) => {
  try {
    const data = await tmdbApi.get(TMDB_ENDPOINT.fetchActionTvShows);
    data.data.results.forEach((item) => {
      item["media_type"] = "tv";
    });
    res.status(200).json({
      status: "success",
      data: data.data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getComedyTvShows = async (req, res) => {
  try {
    const data = await tmdbApi.get(TMDB_ENDPOINT.fetchComedyTvShows);
    data.data.results.forEach((item) => {
      item["media_type"] = "tv";
    });
    res.status(200).json({
      status: "success",
      data: data.data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getMysteryTvShows = async (req, res) => {
  try {
    const data = await tmdbApi.get(TMDB_ENDPOINT.fetchMysteryTvShows);
    data.data.results.forEach((item) => {
      item["media_type"] = "tv";
    });
    res.status(200).json({
      status: "success",
      data: data.data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getDramaTvShows = async (req, res) => {
  try {
    const data = await tmdbApi.get(TMDB_ENDPOINT.fetchDramaTvShows);
    data.data.results.forEach((item) => {
      item["media_type"] = "tv";
    });
    res.status(200).json({
      status: "success",
      data: data.data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getCrimeTvShows = async (req, res) => {
  try {
    const data = await tmdbApi.get(TMDB_ENDPOINT.fetchCrimeTvShows);
    data.data.results.forEach((item) => {
      item["media_type"] = "tv";
    });
    res.status(200).json({
      status: "success",
      data: data.data,
    });
  } catch (err) {
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

const getTvShowDetails = async (req, res) => {
  try {
    const { id } = req.query;
    if (!id) throw new Error("Video Id is not defined.");
    const details = await tmdbApi.get(TMDB_ENDPOINT.fetchTvShowVideos(id));
    res.status(200).json({
      status: "success",
      data: details.data,
    });
  } catch (err) {
    console.log('err: ', err);
    res.status(500).json({
      message: err.message,
      status: "failure",
    });
  }
};

module.exports = {
  getActionTvShows,
  getComedyTvShows,
  getMysteryTvShows,
  getDramaTvShows,
  getCrimeTvShows,
  getTvShowDetails,
};