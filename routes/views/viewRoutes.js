//create multiple routes, starting with home route
module.exports = function (app){
	app.get("/", function(req, res){
		res.render("./views/layouts/main.handlebars");
    });
}
//add saved route
module.exports = function (app){
	app.get("/", function(req, res){
		res.render("./views/savedPage.handlebars");
    });
}