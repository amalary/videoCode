// Node js is the language 
// Express is Node, a node module more specifically 

const path = require('path')

// http is a native module 
const http = require('http')

// Express is third party module 
const express = require('express')

// An "app" is the express function(createApplication inside the Express module)
// Invoked and is an Express application 


// All is a method, and it takes 2 args
// 1.route 
// 2.callback to run if the route is requested 
const app = express()


// Serve up static files here only using one line 

app.use(express.static('public'))



app.all('/', (req,res) =>{
    // Express handles the basic headers (status code, mime-type) ! 
    // Read in Node.html 
    console.log(path.join(__dirname + '/node.html'))
    res.sendFile(path.join(__dirname + '/node.html'))
    // res.send("<h1>This is the home page</h1>")
    // Express handles the end. 
});

app.all('*',(req,res) =>{
    res.send("<h1>Sorry this page does not exist</h1>")
})

const PORT = 3000

app.listen(PORT,() => {
    console.log(`Listening on port ${PORT}`)
})







// unsubbed = []

// let array = [{name:'Nafim'},{name:'Anthony'},{name:'Vanessa'}]


// for(let i = 0; i < array.length; i++){
    
//     unsubbed.push(array[i].name)
    
// }



// console.log(unsubbed)

// let unsubbed = array.map(fans => fans.name )

// console.log(unsubbed) 

// let set1 = new Set(unsubbed)

// console.log(set1.has('Vanessa'))