// Show/hide password
function togglePasswordVisibility() {
  const passwordField = document.getElementById("pass");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

// Nav scroll effect
const navbar = document.querySelector('.navbar-default');
const scrollToTopButton = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  // Navbar color change on scroll
  navbar.classList.toggle('navbar-scrolled', scrollY > 100);
  // Show scroll-to-top button
  scrollToTopButton.className = scrollY >= 300 ? "scrollbtn scrollbtn-show" : "scrollbtn";
});

// Scroll to top function
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  document.getElementById("scrollUpTitle").focus();
}

// Play audio pronunciation
function playAudio() {
    const audio = document.getElementById("audio");
    if (audio) {
        audio.play();
    }
}

// Prevent right-click on images
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.addEventListener("contextmenu", (e) => e.preventDefault());
  });

  initializeImageToggle();
  startTypewriterEffect();
});

// Image toggle functionality
function initializeImageToggle() {
  document.querySelectorAll('.toggle-container').forEach(container => {
    const tabs = container.querySelectorAll('.tab');
    const toggleImage = container.querySelector('.toggle-image');
    const caption = container.querySelector('.caption');

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        toggleImage.src = tab.getAttribute('data-image');
        caption.textContent = tab.getAttribute('data-caption');
      });
    });
    // Set default active tab
    tabs[0].classList.add('active');
  });
}

const typewriterContainer = document.getElementById("typewriterContainer");
const rotateWordsContainer = document.getElementById("rotateWordsContainer");
const typewriterTextElement = document.getElementById("typewriterText");

const typingSpeed = 100;
const deletingSpeed = 100;
const pauseBetweenWords = 4000;
const words = typewriterContainer.getAttribute("data-words").split(",");
let wordIndex = 0;

function startTypewriterEffect() {
  typeWord(words[wordIndex]);
}

function typeWord(word) {
  let charIndex = 0;
  typewriterTextElement.textContent = ""; // Clear text before typing

  function type() {
    if (charIndex < word.length) {
      typewriterTextElement.textContent += word[charIndex++];
      setTimeout(type, typingSpeed);
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
      typewriterTextElement.textContent = word.slice(0, charIndex--);
      setTimeout(erase, deletingSpeed);
    } else {
      wordIndex = (wordIndex + 1) % words.length;
      typeWord(words[wordIndex]);
    }
  }
  erase();
}

function toggleEffect() {
  if (window.innerWidth <= 768) {
    // Mobile: Show rotateWords, hide typewriter
    typewriterContainer.style.display = "none";
    rotateWordsContainer.style.display = "block";
  } else {
    // Desktop: Show typewriter, hide rotateWords
    typewriterContainer.style.display = "block";
    rotateWordsContainer.style.display = "none";
    startTypewriterEffect();
  }
}

// Initialize on load and listen for resizing
window.addEventListener("load", toggleEffect);
window.addEventListener("resize", toggleEffect);

// Scroll to section by ID
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: 'smooth' });
}
