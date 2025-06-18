// Show/hide password
function togglePasswordVisibility() {
  const passwordField = document.getElementById("pass");
  passwordField.type = passwordField.type === "password" ? "text" : "password";
}

const navbar = document.querySelector('.navbar-default');
const scrollToTopButton = document.getElementById("scrollToTop");

// Get current page from URL
const currentPage = window.location.pathname.split("/").pop();

const scrollPages = ['index.html', 'about.html', 'work.html'];
const staticPages = ['zinnia.html', 'objectbuilder.html', 'rating.html'];

if (scrollPages.includes(currentPage) || currentPage === '') {
  // Scroll behavior only on scroll-enabled pages
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    navbar.classList.toggle('navbar-scrolled', scrollY > 100);
    if (scrollToTopButton) {
      scrollToTopButton.className = scrollY >= 300 ? "scrollbtn scrollbtn-show" : "scrollbtn";
    }
  });
} else if (staticPages.includes(currentPage)) {
  // Always apply navbar-scrolled on static pages
  navbar.classList.add('navbar-scrolled');
}

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

    // ✅ Skip containers without tabs or toggle image
    if (!tabs.length || !toggleImage) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        tab.classList.add('active');
        toggleImage.src = tab.getAttribute('data-image');
        if (caption) {
          caption.textContent = tab.getAttribute('data-caption');
        }
      });
    });

    tabs[0].classList.add('active');
  });
}

// Typewriter effect
const typewriterContainer = document.querySelector(".typewriter-container");
const typewriterTextElement = document.getElementById("typewriterText");

const typingSpeed = 100; // 200ms for mobile, 100ms for desktop
const deletingSpeed = 100; // Same speeds for deleting
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

// Scroll to section by ID
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section?.scrollIntoView({ behavior: 'smooth' });
}


//Name scrolling
const text = document.querySelector('.text p');
text.innerHTML = text.innerText.split("").map(
  (char, i) => `<span style="transform:rotate(${i * 8.6}deg)">${char}</span>`
  ).join("")


//Before & after slider
function initializeImageComparison() {
  document.querySelectorAll('.image-comparison').forEach(container => {
    const slider = container.querySelector('.image-slider');
    const resize = container.querySelector('.image-resize');

    slider.addEventListener('input', () => {
      resize.style.width = slider.value + '%';
    });
  });
}

document.addEventListener('DOMContentLoaded', initializeImageComparison);