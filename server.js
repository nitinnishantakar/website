var express = require('express')
var app = express();
var port = process.env.PORT || 3000;

app.get("/", (request, response) => {
	response.send("this is nitin");
})

app.listen(port, () => {
	console.log("server started at port 3000")
})