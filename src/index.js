const API = 'http://localhost:3000/Sneakers'
console.log('hello')
fetch(API)
  .then(resp => resp.json())
  .then(renderSneakersToScreen)

function renderSneakersToScreen(sneaker) {
 sneaker.forEach(renderSneakers);
};

function renderSneakers(sneaker) {
  const sneakerCollection = document.querySelector('#sneaker-collection');
  const sneakerCard = document.createElement('div')
  const userName = document.createElement('p');
  const imageUrl = document.createElement('img');
  const sneakerDesc = document.createElement('p');
  const sneakerLikes = document.createElement('p');
  sneakerCard.className = "sneaker-card"

  userName.textContent = sneaker.username;
  imageUrl.src = sneaker.image;
  sneakerDesc.textContent = sneaker.description;
  sneakerLikes.textContent = `likes: ${sneaker.likes}`

  sneakerCard.append(userName, imageUrl, sneakerDesc, sneakerLikes);
  sneakerCollection.append(sneakerCard)
};

