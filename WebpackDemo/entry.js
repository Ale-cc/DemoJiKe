require('bootstrap/less/bootstrap.less')
/* bootstrap安装在node_modules路径里，因此可以直接用bootstrap路径*/
require('../less/lesson3-2.less')
require('style-loader!css-loader!./style.css')
/*document.write(require('./content.html'))*/
require(['./content.html'],function(content){
	document.body.innerHTML = content
})
/* AMD规范的异步请求*/
