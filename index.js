// define api object

const express = require('express')
var cors = require('cors')
const api = express();
api.use(cors())

const PORT = process.env.PORT || 3000


const axios = require('axios');
let cheerio = require('cheerio');




// define API endpoints
api.get('/', function (req, res) {
  res.send("For NYT articles Link Preview use '/article' route")
})

api.get('/article', function (req, res) {
    const url = req.headers.url;

axios.get(url)
    .then(response => {

      const $ = cheerio.load(response.data);

    const resImage = 'https://static01.nyt.com/images/icons/t_logo_291_black.png';

      console.log(response.status);
      let image = $('meta[name=image]').attr("content");
      let url1 = $('meta[name=url]').attr("content");
      let description = $('meta[name=description]').attr("content");
      let title = $(response.data).filter('title').text()
      console.log(title);
      const rest={
        title: title,
        description: description,
        image: image ? image : resImage,
        url: url1};
      res.json(rest);
    })
     .catch(error => {
      console.log(error);
    });
})



api.get('*', function(req, res, next) {
    let err = new Error('Page Not Found');
    err.statusCode = 404;
     next(err);
      });



api.listen(PORT, () => console.log(`Example app listening on ${ PORT }!`))
