var express = require('express')
var morgan = require('morgan')

var app = express();
app.use(morgan());

app.use(function(req,res){
	res.sendFile(path.jion(__dirname,'Vue-router 04 路由民命-基于Vue-router 2.0.html'))
});

app.listen(3000,function(error){
	if(error){
		console.error('express instance fasiled to listen,ree:',error);
		return;
	}
	console.log('http running on 3000 port, open broswer http://localhost:3000/')
});
