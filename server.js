var fs = require('fs');
var express = require('express')
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 3000;

app.use('/static', express.static('public'))
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.get("/", (request, response) => {
    response.send("http://localhost:3000/static/clock.png");
})

app.get("/get", (req, res) => {
	var static_1 = fs.readFileSync("./database.json", "utf-8");
   	static_1 = JSON.parse(static_1);

   	res.send(static_1);
})

app.get("/get/:name/:password", (request, response) => {
    var static_1 = fs.readFileSync("./database.json", "utf-8");
   	static_1 = JSON.parse(static_1);
   	
   	var data = {error: "data not found"}

   	for (var i = 0; i < static_1.length; i++) {
   		if (static_1[i].username == request.params.name) {
   			if (static_1[i].password == request.params.password) {
   				data = static_1[i]
   			}
   		}
   		else {

   		}
   	}	

   	response.send(data)
})

app.post("/get", (req, res) => {
	var static_1 = fs.readFileSync("./database.json", "utf-8");
   	static_1 = JSON.parse(static_1);
   	
   	var data = {error: "data not found"}

   	for (var i = 0; i < static_1.length; i++) {
   		if (static_1[i].username == req.body.name) {
   			if (static_1[i].password == req.body.password) {
   				data = static_1[i]
   			}
   		}
   		else {

   		}
   	}	
   	res.send(data)
})

function getIndex (user, pass) {
	var local_2 = -1;
	var local_1 = JSON.parse(fs.readFileSync("./database.json", "utf-8"));
	for (var i = 0; i < local_1.length; i++) {
		console.log(user)
		if (local_1[i].username == user && local_1[i].password == pass) {
			console.log("found")
			local_2 = i
		}
		else {

		}
	}
	return local_2
}

app.get("/write/:name/:password", (request, response) => {
	var local_1 = JSON.parse(fs.readFileSync("./database.json", "utf-8"));
	var local_2 = {username: request.params.name, password: request.params.password}

	var local_3 = getIndex(request.params.name, request.params.password);
	console.log(local_1)
	if(local_3 >= 0) {
		response.send({error: "data already exists"});
	}

	else {
		var local_4 = local_1.push(local_2);
		fs.writeFileSync("./database.json", JSON.stringify(local_1));
		response.send(local_2);
	}
})

app.get("/website", (a, b) => {
    b.send(fs.readFileSync("./twentyfour.html", "utf-8"))
})

app.listen(port, () => {
	console.log(`server started at port ${port}`)
})