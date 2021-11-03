var fs = require('fs');
var express = require('express')
var app = express();
var port = process.env.PORT || 3000;

app.get("/", (request, response) => {
	response.send("this is nitin");
})

app.get("/website", (a, b) => {
    b.send(fs.readFileSync("./twentyfour.html", "utf-8"))
})

app.listen(port, () => {
	console.log("server started at port 3000")
})