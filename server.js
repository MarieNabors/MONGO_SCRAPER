// DEPENDENCIES:
// intialize Express
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var osmosis = require('osmosis');

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
require("./routes")(app);
//port
var PORT = process.env.PORT || 3000;

// LISTENER:
app.listen(PORT, function(){
  console.log('Your app is listening on port: ', PORT)
});