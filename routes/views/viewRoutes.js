//create multiple routes, starting with home route
module.exports = function (app){
	app.get("/", function(req, res){
		res.render("./views/layouts/main.html");
    });
}
//add saved route