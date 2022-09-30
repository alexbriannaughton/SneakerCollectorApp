const API = 'http://localhost:3000/Sneakers'
console.log('hello')
fetch(API)
  .then(resp => resp.json())
  .then(console.log)

function renderSneakersToScreen(sneaker) {
 sneaker.forEach(renderSneakers);
};

function renderSneakers(sneaker) {
  const sneakerCollection = document.querySelector('.sneaker-collection');
  const sneakerName = document.createElement('p');
  const userName = document.createElement('h3');
  const imageUrl = document.createElement('img');
  const sneakerDesc = document.createElement('p');
  const sneakerLikes = document.createElement('p');


  sneakerName.textContent = sneaker.name;
  userName.textContent = sneaker.username;
  imageUrl.src = sneaker.image;
  sneakerDesc.textContent = sneaker.description;
  sneakerLikes.textContent = sneaker.likes

  sneakerCollection.append(sneakerName, userName, imageUrl, sneakerDesc, sneakerLikes);
};
