var express = require('express');
var path = require('path');
var http= require('http'); 
var books = require('./books.json');
var app = express();


app.set('port',4000);
app.use(express.static(path.join(__dirname,'public')));

app.get("/",(req, res) =>{
  res.render("index.html")
})

app.get("/books",(req, res) =>{
	res.header('Access-Control-Allow-Origin', "*");
    res.json(books)
})

app.get("/books/:id",(req, res) =>{
	res.header('Access-Control-Allow-Origin', "*");
    res.json(books[req.params.id-1])
})
http.createServer(app).listen(app.get('port'),function(){
	console.log("server listening on port : "+app.get('port'))
    //console.log(JSON.stringify(books))
})
