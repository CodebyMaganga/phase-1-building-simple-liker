// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', function () {
  const hearts = document.getElementsByClassName('like-glyph');
  const errorHeader = document.getElementById('modal')
  errorHeader.classList.add('hidden')

  Array.from(hearts).forEach((element) => {
    element.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          if (element.textContent === EMPTY_HEART) {
            element.classList.add('activated-heart')
            element.textContent = FULL_HEART;
          } else if (element.textContent === FULL_HEART) {
            element.classList.remove('activated-heart')
            element.textContent = EMPTY_HEART;
          }
        })
        .catch((error) => {
          console.error(error);
          errorHeader.classList.remove('hidden') 
          setTimeout(()=>{
            errorHeader.classList.add('hidden')
          }, 3000)

        });
    });
  });
});



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
