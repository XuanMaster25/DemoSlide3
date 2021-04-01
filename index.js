var http = require('http');
var fs = require('fs');
var port = process.env.PORT || 5000;

http.createServer(function (rep, res){
    res.writeHead(200,{'Content-type' : 'text/html'});

    var url = rep.url;
    if (url == '/home'){
        fs.readFile('demo.html',function (error,data){
            if (error != null){
                res.end(error);
            }else {
                res.write(data);
                res.end();
            }
        })

    }else  if (url == '/show'){
        fs.readFile('test.txt',function (err,data){
            if (err) throw err;
            res.write(data);
        })
    }else  if (url == '/'){
        fs.readFile('demo.html',function (error,data){
            if (error != null){
                res.end(error);
            }else {
                res.write(data);
                res.end();
            }
        })
    }else if (url == '/create'){
        fs.writeFile('test.txt', '\n tk mk', function (err){
            if (err){
                console.log(err);
            }else {
                res.end('Create File Success!');
            }
        })
    } else  if (url == '/append'){
        fs.appendFile('test.txt', 'append File', function (err){
            if (err){
                console.log(err);
            }else {
                res.end("Append File");
            }
        })
    }else  if (url == '/unlink'){
        fs.unlink('te.txt',function (err){
            if (err){
                console.log(err);
            }else {
                res.end('Unlink File')
            }
        })
    }else if (url == '/rename'){
        fs.rename('test.txt', 'test-old.txt',function (err){
            if (err) throw err;
            res.end('Rename File');
        })
    }else {
        res.end('Not Page 404!')
    }


}).listen(port);