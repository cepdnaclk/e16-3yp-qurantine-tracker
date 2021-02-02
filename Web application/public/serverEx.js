var http = require('http');  
var url = require('url');  
var fs = require('fs');
var path = require('path');  
var express = require('express');
var app = express();
var server = http.createServer(function(request, response) {  
    var pathtoPage = url.parse(request.url).pathname;
    app.use(express.static(path.join('__dirname','/public')));  
    switch (pathtoPage) {  
        case '/':  
            response.writeHead(200, {  
                'Content-Type': 'text/plain'  
            });  
            response.write("This is Test Message.");  
            response.end();  
            break;  
        case '/firstpage.html':  
            fs.readFile(__dirname + pathtoPage, function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data); 
                    response.end();  
                }  
            });  
            break;  
        case '/personReg.html':  
            fs.readFile("./personReg.html", function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break; 
        case '/userRegister.html':  
            fs.readFile("./userRegister.html", function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;   
        case '/loginpsge.html':  
            fs.readFile('./loginpsge.html', function(error, data) {  
                if (error) {  
                    response.writeHead(404);  
                    response.write(error);  
                    response.end();  
                } else {  
                    response.writeHead(200, {  
                        'Content-Type': 'text/html'  
                    });  
                    response.write(data);  
                    response.end();  
                }  
            });  
            break;  
        default:  
            response.writeHead(404);  
            response.write("opps this doesn't exist - 404");  
            response.end();  
            break;  
    }  
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');