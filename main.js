// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
const likeGlyph = document.querySelector('.like-glyph')
const errorField = document.querySelector('#modal')
const errorMessage = document.querySelector('#modal-message')
// EMPTY_HEART.className = 'deactivated-heart'
//FULL_HEART.className = 'activated-heart'

const configObj = body => {
  return {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: JSON.stringify(body)
  }
}
const heartSwitch = () => {
  if (likeGlyph.className === 'activated-heart') {
    likeGlyph.classList.remove('activated-heart');
    likeGlyph.textContent = EMPTY_HEART;
  } else {
    likeGlyph.className = 'activated-heart';
    likeGlyph.textContent = FULL_HEART;
  }
}
const handleGlyphClick = e => {
  mimicServerCall()
  .then(heartSwitch)
  .catch(e => {
    errorField.className = '';
    errorMessage.textContent = e;
    setTimeout(() => errorField.className = 'hidden', 3000)
  })
}
likeGlyph.addEventListener('click', handleGlyphClick)




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
