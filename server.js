var express = require('express')
var path = require('path')
var port = process.env.PORT || 9090
var app = express()
var fs = require('fs'); // 载入fs模块

app.use(express.static(path.join(__dirname, 'build')));
app.use(function(req, res, next) {
    //判断是主动导向404页面，还是传来的前端路由。
　　 //如果是前端路由则如下处理

    fs.readFile(__dirname + '/build/index.html', function(err, data){
        if(err){
            console.log(err);
            res.send('后台错误');
        } else {
            res.writeHead(200, {
                'Content-type': 'text/html',
                'Connection':'keep-alive'
            });
            res.end(data);
        }
    })
});

app.listen(port)