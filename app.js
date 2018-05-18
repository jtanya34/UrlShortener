const express=require('express');
const shortid  = require('shortid');
const hbs=require('hbs');
const valid_url=require('valid-url');





var app=express();
const port =process.env.PORT||3000;


app.set('view engine','hbs');




//Home page

app.get('/',(req,res)=>{
	res.render('home.hbs',{
		Created:"Tanya Jain"
	});
});


app.get('/:url(*)',(req,res)=>{
var local=req.headers.host;

	var iurl=req.params.url;

if(!valid_url.isUri(iurl)){
	return res.send("Invalid URL");
} 

res.render('index.hbs',{
	original_url:iurl,

	short_url:(local + '/' + shortid.generate(iurl))
});

	});
	
		
	



app.listen(port,()=>{
	console.log(`Started up at port ${port}`);
});
