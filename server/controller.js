require("dotenv").config();
const { default: axios } = require("axios");

const { KEY } = process.env;

module.exports = {
  getMovie: (req, res) => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/120?api_key=${KEY}&language=en-US&append_to_response=watch/providers,release_dates,videos,credits`
      )
      .then((dbres) => {
        console.log(dbres.data);
        res.status(200).send(dbres.data);
      })
      .catch((err) => console.log(err));
  },
};
