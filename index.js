const API = 'http://localhost:3000/Sneakers'

fetch(API)
.then(resp => resp.json())
.then(json=>console.log(json))