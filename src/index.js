const API = 'http://localhost:3000/Sneakers'
let currentSneaker;



fetch(API)
  .then(resp => resp.json())
  .then(json => renderSneakersToScreen(json))

function renderSneakersToScreen(sneaker) {
  sneaker.forEach(makeSneakerCard)
};



const listenForFormSubmit = () => {
  const form = document.querySelector('form')
  form.addEventListener('submit', e => {
    e.preventDefault();
    const userName = e.target[0].value;
    const sneakerImage = e.target[1].value;
    const description = e.target[2].value
    const sneakerLikes = 0
    const newSneaker = {
      username: userName,
      image: sneakerImage,
      description: description,
      likes: sneakerLikes
    }
    postSneaker(newSneaker)
  })
};

const postSneaker = sneaker => {
  const config = {
    method: 'POST',
    headers: {
      'Content-Type': 'Application/json'
    },
    body: JSON.stringify(sneaker)
  }
  fetch(API, config)
    .then(resp => resp.json())
    .then(json => makeSneakerCard(json))
}

function makeSneakerCard(sneaker) {
  const sneakerCollection = document.querySelector('#sneaker-collection');

  const sneakerCard = document.createElement('div')
  const userName = document.createElement('p');
  const imageUrl = document.createElement('img');
  const sneakerDesc = document.createElement('p');
  const sneakerLikes = document.createElement('p');
  const likeButton = document.createElement('button')

  sneakerCard.className = "sneaker-card"
  imageUrl.className = 'sneaker-pic'
  userName.className = 'userName-text'
  sneakerDesc.className = 'desc-text'
  likeButton.className = 'likeButton'

  likeButton.textContent = "s~m~a~s~h"
  userName.textContent = `${sneaker.username} posted their kicks:`;
  imageUrl.src = sneaker.image;
  imageUrl.alt = `${userName.textContent} ${sneaker.description}`
  sneakerDesc.textContent = sneaker.description;
  sneakerLikes.textContent = `likes: ${sneaker.likes}`

  sneakerCard.append(userName, imageUrl, sneakerDesc, likeButton, sneakerLikes);
  sneakerCollection.append(sneakerCard)

  likeButton.addEventListener('click', e => {
    currentSneaker = sneaker
    patchLikes(e, currentSneaker, sneakerLikes)
  })
};

function patchLikes(e, currentSneaker, sneakerLikes) {
  console.log(e),
  console.log(currentSneaker)

  const likesPlus = currentSneaker.likes + 1
  console.log(likesPlus)

  const config = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      likes: likesPlus
    })
  }
  fetch(`http://localhost:3000/Sneakers/${currentSneaker.id}`, config)
    .then(sneakerLikes.textContent = `likes: ${likesPlus}`)
}

listenForFormSubmit();