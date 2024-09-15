//Show password
function myFunction() {
  var x = document.getElementById("pass");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}

//Collapsible notes 
var coll = document.getElementsByClassName("notes-collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.maxHeight){
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
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

/////////////////////

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
/////////////////////

//Pronunciation
function play() {
  var audio = document.getElementById("audio");
  audio.play();
}
/////////////////////

// Image to Lightbox Overlay
$('img').on('click', function() {
  $('#overlay')
    .css({
      backgroundImage: `url(${this.src})`
    })
    .addClass('open')
    .one('click', function() {
      $(this).removeClass('open');
    });
});
/////////////////////

// Prevent right click on images
$(document).ready(function() {
     $("img").on("contextmenu",function(){
        return false;
     });
 });
/////////////////////


// Submenu
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.sidenav a');
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', function () {
        let currentSection = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 160; // Adjust based on your scroll-margin-top
            const sectionBottom = sectionTop + section.offsetHeight;
            if (pageYOffset >= sectionTop && pageYOffset < sectionBottom) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            const sectionId = link.getAttribute('data-section');
            const subMenu = link.nextElementSibling;

            if (sectionId === currentSection) {
                link.classList.add('active');
                if (subMenu && subMenu.classList.contains('submenu')) {
                    subMenu.style.display = 'block';
                }
            } else {
                if (subMenu && subMenu.classList.contains('submenu')) {
                    subMenu.style.display = 'none';
                }
            }
        });
    });
});
/////////////////////
