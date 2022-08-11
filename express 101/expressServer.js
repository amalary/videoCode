



let array = [{name:'Nafim'},{name:'Anthony'},{name:'Vanessa'}]

let unsubbed = array.map(fans => fans.name )

console.log(unsubbed) 

let set1 = new Set(unsubbed)

console.log(set1.has('Vanessa'))




// for(let i = 0; i < array.length; i++){

//     unsubbed.push(array[i].name)

// }

// console.log(unsubbed)



