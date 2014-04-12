/*
	All following code and comments written by Joseph L Dailey unless stated otherwise
	All Rights Reserved
*/
//////////////////////////////////////////////////////////////////////////////////////////
//Set Up Start///////////////////////////////////////////////////////////////////////////
//rendering///////////////////////////////////////////////////////////////////////////// 
var express = require('express');
var scriptr = express();
scriptr.set('view engine', 'ejs');
//body parsing/////////////////////////////////////////////////////////////////////////////
var bodyParser = require('body-parser');
scriptr.use(bodyParser({uploadDir:__dirname + '/static/tmp/'}));
scriptr.set('view options', {
	layout: false
});
scriptr.listen(7000);
//Set Up End///////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////
//RoutingStart///////////////////////////////////////////////////////////////////////////
//--------------------------------------------------------------------/////-landing page
scriptr.get('/', function (req, res){
	var func = {script:setTimeout(function(){$("body").css("background", "rgb("+(Math.random()*255)+","+(Math.random()*255)+","+(Math.random()*255)+")");}, 20)};
	res.send(200, func);
 });	