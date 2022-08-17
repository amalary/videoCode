const express = require('express');
const app = express();
const helment = require('helmet')



app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(helment())

// 1. static 
// 2. json
// 3. urlencoded

app.post('/ajax', (req,res)=>{
    console.log(req.body)
    res.json(['Test',1,2,3,4])
});

let PORT = 3000;

app.listen(PORT, ()=>{
    console.log(`Listening on port ${PORT}`)
})