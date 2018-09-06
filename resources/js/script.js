$(document).ready(function(){
  var featurettes = document.querySelectorAll('.featurette');
  var navs = document.querySelectorAll('.nav-link');
  var supportPageOffset = window.pageXOffset !== undefined;
  var isCSS1Compat = ((document.compatMode || "") === "CSS1Compat");
  $(window).scroll(function(){
    if ($(window).scrollTop() >= 100) {
      $('#myNavbar').addClass('scrolled');
    } else {
      $('#myNavbar').removeClass('scrolled');
    }
    var y = supportPageOffset ? window.pageYOffset : isCSS1Compat ? document.documentElement.scrollTop : document.body.scrollTop;
    var offset = y + window.innerHeight/2;
    for (var key=0; key<navs.length ; key++) {
      if (offset> featurettes[key].offsetTop && offset < featurettes[key].offsetTop + featurettes[key].offsetHeight) {
        navs[key].classList.add('active');
      } else {
        navs[key].classList.remove('active');
      }
    }
  });
  $('.nav-link').on('click', function(){
  	$('.collapse').collapse('hide');
  });
});