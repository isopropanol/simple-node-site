//Module dependencies

var express = require('express')
	, style = require('stylus')
	, nib = require('nib');
var app =express();
funciton compile(str,path){
	return stylus(str)
		.set('filename',path)
		.use(nib())
}
app.set('views',)