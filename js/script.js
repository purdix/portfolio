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

//Text typer
const typewriterContainer = document.querySelector(".typewriter-container");
const typewriterTextElement = document.getElementById("typewriterText");
const typingSpeed = window.innerWidth <= 768 ? 80 : 140;
const pauseBetweenWords = 4000; 

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

  function type() {
    if (charIndex < word.length) {
      typewriterTextElement.textContent += word[charIndex];
      charIndex++;
      setTimeout(() => requestAnimationFrame(type), typingSpeed);
    } else {
      setTimeout(() => deleteWord(word), pauseBetweenWords);
    }
  }
  type();
}

function deleteWord(word) {
  let charIndex = word.length;

  function erase() {
    if (charIndex >= 0) {
      typewriterTextElement.textContent = word.slice(0, charIndex);
      charIndex--;
      setTimeout(() => requestAnimationFrame(erase), typingSpeed);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      typeWord(words[wordIndex]);
    }
  }
  erase();
}

// Start the typewriter effect on page load
startTypewriterEffect();

// Anchor button
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}