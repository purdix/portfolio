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


const tabs = document.querySelectorAll('.tab');
const toggleImage = document.getElementById('toggleImage');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('active')); // Remove active class from all tabs
    tab.classList.add('active'); // Add active class to clicked tab
    toggleImage.src = tab.getAttribute('data-image'); // Change image based on clicked tab
  });
});

// Set default active tab
tabs[0].classList.add('active');