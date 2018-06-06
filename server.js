var express= require("express");

 var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
 var article=require('./article')
//  var posts=[];//temporary db to store posts
 
    console.log("the server is listening at: http://localhost:2426/article")

app.listen(2426)
// app.use(express.bodyParser());
// app.use(express.logger())

 var notImplemented =function(req,res){
     res.sendStatus(501) //when you want to send just status prefer sendStatus command instead of send
 }
 //run CRUD operations
 app.get('/article',article.index);//read posts
 app.get('/article/new',article.new);//reading single post
 app.post('/article',article.create);//create single post
 app.put('/article/:articleId',notImplemented);//update single post
 app.delete('/article/:articleId',notImplemented);//deleting single post
