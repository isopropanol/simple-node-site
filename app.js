//Module dependencies

var express = require('express')
	, stylus = require('stylus')
	, nib = require('nib');
var app =express();
app.use(express.bodyParser());
function compile(str,path){
	return stylus(str)
		.set('filename',path)
		.use(nib());
}
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(stylus.middleware(
	{
	src: __dirname+'/public'
	, compile:compile
}));
app.use(express.static(__dirname+'/public'));

app.get('/',function(req,res){
	res.render('index',
		{title:"Hoos Working Where"}		)
})
app.get('/selectjob',function(req,res){
	res.render('selectjob',
		{title:"What's your plan"}		)
})

app.post('/selectjob/detailsubmission',function(req,res){
	//var name = req.body.place;
		//city = req.body.city,
		//country= req.body.country;
	console.log(" in "+req.body.place);
	res.redirect("/");
});
app.listen(3000);