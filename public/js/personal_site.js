$(document).ready(function() {
    $('div.intro-message').fadeIn(2200);
});

$(".navbar-nav li a").click(function(event) {
    if (!$(this).parent().hasClass('dropdown'))
    $(".navbar-collapse").collapse('hide');
});

// JS FOR VIDEO FROM COVERR.CO
$( document ).ready(function() {

  scaleVideoContainer();

  initBannerVideoSize('.video-container .poster img');
  initBannerVideoSize('.video-container .filter');
  initBannerVideoSize('.video-container video');

  $(window).on('resize', function() {
    scaleVideoContainer();
    scaleBannerVideoSize('.video-container .poster img');
    scaleBannerVideoSize('.video-container .filter');
    scaleBannerVideoSize('.video-container video');
  });
});

function scaleVideoContainer() {

var height = $(window).height() + 5;
var unitHeight = parseInt(height) + 'px';
$('.homepage-hero-module').css('height',unitHeight);
}

function initBannerVideoSize(element){

$(element).each(function(){
    $(this).data('height', $(this).height());
    $(this).data('width', $(this).width());
});

scaleBannerVideoSize(element);
}

function scaleBannerVideoSize(element){

var windowWidth = $(window).width(),
windowHeight = $(window).height() + 5,
videoWidth,
videoHeight;

// console.log(windowHeight);

$(element).each(function(){
    var videoAspectRatio = $(this).data('height')/$(this).data('width');

    $(this).width(windowWidth);

    if(windowWidth < 1000){
        videoHeight = windowHeight;
        videoWidth = videoHeight / videoAspectRatio;
        $(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

        $(this).width(videoWidth).height(videoHeight);
    }

    $('.homepage-hero-module .video-container video').addClass('fadeIn animated');

});
}
// Smooth scrolling
// Select all links with hashes
$('a[href*="#"]')
// Remove links that don't actually link to anything
.not('[href="#"]')
.not('[href="#0"]')
.click(function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
    &&
    location.hostname == this.hostname
  ) {
  // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
});
