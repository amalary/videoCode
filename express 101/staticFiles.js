const express = require('express');
const app = express();


// App comes with a use method 
// Use takes 1 arg (right now)
// 1. The middleware you want to run

app.use(express.static('public')); 


let PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})