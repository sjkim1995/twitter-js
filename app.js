var Express = require('express');
var Chalk = require('chalk');

var app = Express(); 

app.listen(3000);

console.log("Server listening...");

app.use(function (req, res, next) {
	console.log(Chalk.blue(req.method, req.path, res.statusCode));
	next();
});

app.use("/special/", function (req, res, next) {
	console.log(Chalk.blue(req.method, req.path));
	res.send("You've reached the special area");
	next();
});

app.get("/", function (req, res, next){
	res.send("Hello!");
})

app.get("news", function (req, res, next){
	res.send("This is news");
});

app.post("/", function (req, res, next){
	res.send("Posting on the root level")
})

app.use(function(err, req, res, next) {
	console.log('Error!', err);
	console.log(res.statusCode);
});