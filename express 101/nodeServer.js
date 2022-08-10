// http is native to NodeJs . We just have to ask for it 

const http = require('http');


// The http module has a createServer method that comes with it 
// It takes 1 arg 
//1 argument callback, callback, has 2 args: req, res

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        // The user wants the homepage  We know, because the req object has / in the url property 
        // console.log(req)
        // res = our way of responding to the requester 
        // http message 
        // 1. start-line CHECK 
        // 2. header 
        // 3. body 
        // writeHead takes 2 args;
        // 1. status code 
        // 2. object for the mime-type 
        res.writeHead(200,{'content-type': 'text/html'})
        res.write('<h1>This is the home page </h1>')
        res.end()

    }else{
        res.writeHead(404,{'content-type': 'text/html'})
        res.write('<h4>This is the wrong page </h4>')
        res.end()

    }
   
})

// createServer returns an object with a listen method 
// Listen takes 1 arg:
// 1 port to listen for http traffic on 
server.listen(3000);