// Scroll up button
myID = document.getElementById("scrollToTop");
var myScrollFunc = function() {
  var y = window.scrollY;
  if (y >= 300) {
    myID.className = "scrollBtn scrollBtn-show"
  } else {
    myID.className = "scrollBtn"
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

// Carousel
 $('.carousel').carousel({
    interval: false,
    wrap: false,
});
//Disable arrow on first and last slides
/* checkitem = function() {
 var $this;
  $this = $("#carousel");
  if ($("#carousel .carousel-inner .carousel-item:first").hasClass("active")) {
    $this.children(".carousel-control-prev").hide();
    $this.children(".carousel-control-next").show();
  } else if ($("#carousel .carousel-inner .carousel-item:last").hasClass("active")) {
    $this.children(".carousel-control-next").hide();
    $this.children(".carousel-control-prev").show();
  } else {
    $this.children(".carousel-control-next").show();
    $this.children(".carousel-control-prev").show();
  }
};
checkitem();
$("#carousel").on("slid.bs.carousel", "", checkitem); */
/////////////////////
