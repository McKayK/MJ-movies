require("dotenv").config();
const { default: axios } = require("axios");

const {  KEY } = process.env;

module.exports = {
    getMovie: (req, res) => {
        axios.get(`https://api.themoviedb.org/3/movie/123?api_key=${KEY}&language=en-US`)
        .then(dbres => {
            console.log(dbres.data)
            res.status(200).send(dbres.data)
        })
    }
}