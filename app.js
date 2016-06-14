var Express = require('express');
var Chalk = require('chalk');
var Swig = require('swig');
var index = require('./routes')
var app = Express();

app.listen(3000);

console.log("Server listening...");

// Swig.renderFile(__dirname + "/views/index.html", locals, function(err, output) {
// 	if (err) {
// 		throw err;
// 	}

// 	console.log(output);
// });

app.engine('html', Swig.renderFile);

app.set('view engine', 'html');
app.set('views', __dirname + '/views');

Swig.setDefaults({ cache: false });

app.use(function (req, res, next) {
	console.log(Chalk.blue(req.method, req.path, res.statusCode));
	next();
});

var people = [{name: 'Full'}, {name: 'Stack'}, {name: 'Son'}];

app.get("/", function (req, res){
	res.render('index', {title: 'Hall of Fame', people: people});
});

app.use(function(err, req, res, next) {
	console.log('Error!', err);
	console.log(res.statusCode);
});

// app.use("/special/", function (req, res, next) {
// 	console.log(Chalk.blue(req.method, req.path));
// 	res.send("You've reached the special area");
// 	next();
// });



// app.get("news", function (req, res, next){
// 	res.send("This is news");
// });

// app.post("/", function (req, res, next){
// 	res.send("Posting on the root level")
// })


