const express = require('express');
const app = express();



// App object has a few methods;
// CRUD application 
// HTTP verbs! REST verbs 
// 1. get The default for all browsers is a get request READ
// 2. post is used to submit an entity to the specified resource CREATE
// 3. delete delees the specified resource DELETE
// 4. put Replaces all current representations of the target resource with the request payload UPDATE
// 5. all i will except any method 

// Take 2 args:
// 1. path 
// 2. callback to run if an HTTP request that matches THIS verb is made to the path in #1 

app.all('/',(req,res) =>{
    res.send('<h1>Hello,world </h1>')
})

app.get('/',(req,res) =>{

})

app.post('/',(req,res) =>{

})

app.put('/',(req,res) =>{

})

app.delete('/',(req,res) =>{

})


let PORT = 3000
app.listen(PORT, ()=>{ 
    console.log(`Listening on port ${PORT}`)
});




