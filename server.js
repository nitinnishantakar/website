var express = require('express')
var app = express();

app.get("/", (request, response) => {
	response.send("this is nitin");
})

app.listen('3000', () => {
	console.log("server started at port 3000")
})