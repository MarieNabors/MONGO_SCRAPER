
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var exphbs = require('express-handlebars');
var morgan = require('morgan');

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));

app.engine('handlebars', exphbs({
defaultLayout: 'main', extname: '.handlebars'
}));
app.set('view engine', 'handlebars');


var url ='https://www.glassdoor.com/Job/jobs.htm?suggestCount=0&suggestChosen=false&clickSource=searchBtn&typedKeyword=web+developer&sc.keyword=web+developer&locT=C&locId=1154247&jobType='
require("./routes")(app);
//port
var PORT = process.env.PORT || 3000;
console.log('Marie is awesome! She got her server running on port', PORT)

// LISTENER:
// app.listen(PORT, function(){
//   console.log('Marie is awesome! She got her server running on port', PORT)
// });