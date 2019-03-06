var express = require("express");
var app = express();
var bodyParser  = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var router = express.Router();

router.get('/hora', function(req, res) {

  var d = new Date();

    res.send("La hora es: " + d.getHours() + ":" + d.getMinutes() + ":" +d.getSeconds());
   
});

router.get('/estrellas', function(req, res) {

});

app.use(router);

app.listen(3000, function() {
  console.log("Node server running on http://localhost:3000");
});