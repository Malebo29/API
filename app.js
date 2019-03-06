const express = require("express");
var app = express();
var bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();

var request = require("request");

router.get('/hora', function(req, res) {

  var hora = new Date();

    res.send("La hora es: " + hora.getHours() + ":" + hora.getMinutes() + ":" +hora.getSeconds());
   
});

router.get('/stars',  function(req, res) {
  httpGet({url: "https://api.github.com/repos/Malebo29/Malebo29.github.io", headers: {"User-Agent": "request"}}).then (result => {
  
    res.send(`Las estrellas de mi repo son: ${result}`);
  
  })
  
});

function httpGet(theUrl)
{
  
return new Promise((res, reject) => {
  
  request (theUrl, function(error, response, body){
    if (!error && response.statusCode == 200){
      res (JSON.parse(body).stargazers_count);
    }
    else {
      console.log (response.statusCode);
      console.log (error);
      res ({message: "algo fue mal"});
    }
  })
})
}

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});