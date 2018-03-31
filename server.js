// DEPENDENCIES:
// intialize Express
var express = require('express');
var app = express();
var path = require('path');
// var request = require('request');
var fs = require('fs');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
;

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

// app.engine('handlebars', exphbs({
//   defaultLayout: 'main', extname: '.handlebars'
// }));
// app.set('view engine', 'handlebars');

// require("./controllers/controller.js")(app);
var url ='http://www.indeed.com'
require("./routes")(app);
//port
var PORT = process.env.PORT || 3000;
console.log('Marie is awesome! She got her server running on port', PORT)

// LISTENER:
// app.listen(PORT, function(){
//   console.log('Marie is awesome! She got her server running on port', PORT)
// });