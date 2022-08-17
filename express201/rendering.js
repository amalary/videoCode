
const path = require('path')
const express = require('express');
const app = express();
const helmet = require('helmet')

app.use(helmet({
    contentSecurityPolicy: false,
}));
// serve up static files 
app.use(express.static('public'));
// Parse json and urlencoded data into req.body 
app.use(express.json())
app.use(express.urlencoded());

// app.set() Takes 2 things:

// 1.Key
// 2. Value

app.set('view engine','ejs')
app.set('views',path.join(__dirname,'views'))

// 1.Express as we know it happens 
// 2. This file e define the view engine 
// -EJS 
// -Mustache
// -Handlebar
// -Jade/Pug
// 3. Inside one of our routes we have a res.render 
// 4. We pass that res.render 2 things:
// -The file we want to use 
// -The data we want to send to that file. 
// 5. Express uses the node module for ur specified iew engine and parses the file. 
// -That means, it takes the HTML and CSS and combines it with what ever node is in the file 
// 6. The final result of this process is compiled product of the things the browswer can read 
// HTML, JS, CSS

app.get('/',(req,res,next)=>{
    // res.send('Sanity Check!')
    res.render("index")
})
let PORT =3000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})


