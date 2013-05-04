//Module dependencies

var express = require('express')
	, style = require('stylus')
	, nib = require('nib');
var app =express();
funciton compile(str,path){
	return stylus(str)
		.set('filename',path)
		.use(nib());
}
app.set('views',__dirname+'/views');
app.set('view engine','jade');
app.use(express.logger('dev'));
app.use(stylus.middleware(
	{
	src: __dirname+'/public'
	, compile:complile
}));
app.use(express.static(__dirname+'/public'));