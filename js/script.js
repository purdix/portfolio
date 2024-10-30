//Show password
function myFunction() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//Nav scroll
const navbar = document.querySelector('.navbar-default');
window.onscroll = () => {
    if (window.scrollY > 100) {
        navbar.classList.add('navbar-scrolled');
    } else {
        navbar.classList.remove('navbar-scrolled');
    }
};

// Scroll up button
myID = document.getElementById("scrollToTop");
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    myID.className = "scrollbtn scrollbtn-show"
  } else {
    myID.className = "scrollbtn"
  }
};
window.addEventListener("scroll", myScrollFunc);

function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera

  const title = document.getElementById("scrollUpTitle");
  title.focus();
}

//Pronunciation
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}

// Prevent right click on images
$(document).ready(function() {
     $("img").on("contextmenu",function(){
        return false;
     });
 });


// Function to initialize image toggle components
  function initializeImageToggle() {
    // Select each toggle container
    const toggleContainers = document.querySelectorAll('.toggle-container');
    
    toggleContainers.forEach(container => {
      const tabs = container.querySelectorAll('.tab');
      const toggleImage = container.querySelector('.toggle-image');
      const caption = container.querySelector('.caption');
      
      // Attach event listeners to each tab within the container
      tabs.forEach(tab => {
        tab.addEventListener('click', () => {
          // Deactivate all tabs in this container
          tabs.forEach(t => t.classList.remove('active'));
          // Activate the clicked tab
          tab.classList.add('active');
          // Update image and caption based on data attributes
          toggleImage.src = tab.getAttribute('data-image');
          caption.textContent = tab.getAttribute('data-caption');
        });
      });

      // Set default active tab on page load
      tabs[0].classList.add('active');
    });
  }

  // Initialize all image toggle components on page load
  document.addEventListener('DOMContentLoaded', initializeImageToggle);

//Scramble text
const typewriterContainer = document.querySelector(".typewriter-container");
const typewriterTextElement = document.getElementById("typewriterText");
const typingSpeed = 100;  // Speed to type each letter in ms
const pauseBetweenWords = 4000; // Pause time in ms between words

// Get words from data attribute and split into an array
const words = typewriterContainer.getAttribute("data-words").split(",");
let wordIndex = 0;

function startTypewriterEffect() {
  // Start typing the first word immediately
  typeWord(words[wordIndex]);
}

function typeWord(word) {
  let charIndex = 0;
  typewriterTextElement.textContent = ""; // Clear text before typing

  const typeInterval = setInterval(() => {
    typewriterTextElement.textContent += word[charIndex];
    charIndex++;

    // Check if the entire word is typed out
    if (charIndex === word.length) {
      clearInterval(typeInterval); // Stop typing current word

      // Set a delay before starting the next word
      setTimeout(() => {
        deleteWord(word);
      }, pauseBetweenWords);
    }
  }, typingSpeed);
}

function deleteWord(word) {
  let charIndex = word.length;

  const deleteInterval = setInterval(() => {
    typewriterTextElement.textContent = word.slice(0, charIndex);
    charIndex--;

    // Check if the entire word is deleted
    if (charIndex < 0) {
      clearInterval(deleteInterval); // Stop deleting

      // Move to the next word in the array
      wordIndex = (wordIndex + 1) % words.length;
      typeWord(words[wordIndex]);
    }
  }, typingSpeed);
}

// Start the typewriter effect on page load
startTypewriterEffect();
