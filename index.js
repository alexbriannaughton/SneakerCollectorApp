const API = 'http://localhost:3000/Sneakers'
console.log('hello')
fetch(API)
.then(resp => resp.json())
.then(json=>console.log(json))

// testing my push