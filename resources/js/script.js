$(document).ready(function(){
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
      $('#myNavbar').addClass('scrolled');
    } else {
      $('#myNavbar').removeClass('scrolled');
    }
  });
  $('.nav-link').on('click', function(){
  	$('.collapse').collapse('hide');
  });
});