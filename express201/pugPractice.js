
const path = require('path')
const express = require('express');
const app = express();
const helmet = require('helmet')


app.use(helmet({
    contentSecurityPolicy: false,
}));

app.use(express.static('public'));

app.use(express.json())
app.use(express.urlencoded());



app.set('view engine','pug')
app.set('views',path.join(__dirname,'views'))


// 4. We pass that res.render 2 things:
// -The file we want to use 
// -The data we want to send to that file. 
// 5. Express uses the node module for ur specified iew engine and parses the file. 
// -That means, it takes the HTML and CSS and combines it with what ever node is in the file 
// 6. The final result of this process is compiled product of the things the browswer can read 
// HTML, JS, CSS

function validatedUser(req,res,next){
    // validated user logic 
    res.locals.validatedUser = true;
    next()
};

app.use(validatedUser);

app.get('/',(req,res,next)=>{

    res.render("index",{
        countries:[ 
            {
            name:'Poland',
            capital:'Warsaw',
            western:true,
        },
        {
            name:'Russia',
            capital:'Moscow',
            western:false,
        }],
        msg:'Success!',
        msg2: 'Failure!',
        html:`<p><img src ="data:image/jpeg;base64,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"/></p>`
        
    })
})
let PORT =3000

app.listen(PORT,()=>{
    console.log(`Listening on port ${PORT}`)
})


