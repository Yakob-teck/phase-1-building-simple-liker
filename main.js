// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('modal');
  const modalMessage = document.getElementById('modal-message');
  const hearts = document.querySelectorAll('.like-glyph');

  // Check if modal and modal message elements exist
  if (!modal) {
    console.error("Error: Could not find the modal element.");
    return;
  }
  if (!modalMessage) {
    console.error("Error: Could not find the modal message element.");
    return;
  }

  // Add .hidden class to modal
  modal.classList.add('hidden');

  // Function to mimic server call
  function mimicServerCall() {
    return new Promise((resolve, reject) => {
      // Simulating a server request
      setTimeout(() => {
        const isSuccess = Math.random() < 0.5; // Simulating success and failure randomly

        if (isSuccess) {
          resolve('Success'); // Resolve with success message
        } else {
          reject('Server Error'); // Reject with error message
        }
      }, 300);
    });
  }

  // Event listeners for empty hearts
  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      mimicServerCall()
        .then(() => {
          // On success
          heart.classList.add('activated-heart');
        })
        .catch((error) => {
          // On failure
          modal.classList.remove('hidden');
          modalMessage.textContent = error;

          setTimeout(() => {
            modal.classList.add('hidden');
          }, 3000);
        });
    });
  });

  // Event listeners for full hearts
  hearts.forEach((heart) => {
    heart.addEventListener('click', () => {
      // On click, toggle heart state
      heart.classList.toggle('activated-heart');
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
