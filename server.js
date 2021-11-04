 var fs = require('fs');
var express = require('express')
var app = express();
var port = process.env.PORT || 3000;

app.use('/static', express.static('public'))

app.get("/", (request, response) => {
    response.send("http://localhost:3000/static/clock.png");
})

app.get("/website", (a, b) => {
    b.send(fs.readFileSync("./twentyfour.html", "utf-8"))
})

app.listen(port, () => {
	console.log(`server started at port ${port}`)
})