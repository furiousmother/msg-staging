$(window).scroll(function() {
  var top = $(window).scrollTop();
  var anchor = $('#scroller-anchor').offset().top;

  if (top>anchor) {
    $('.marquee-wrapper').addClass('stick');
    $('.hero').css('margin-top', '75px');
    $('.marquee').css('position', 'relative');
    $('.marquee').css('visibility', 'visible');
    // $('#masthead').css('display', 'none');
  }
  else {
    $('.marquee-wrapper').removeClass('stick');
    $('.marquee').css('visibility', 'hidden');
    // $('#masthead').css('display', 'block');
    $('.hero').css('margin-top', '0');
  }
});

$(document).ready(function(){
// NAVIGATION SCROLL
  $( "a.scrollLink" ).click(function( event ) {
      event.preventDefault();
      $("html, body").animate({ scrollTop: $($(this).attr("href")).offset().top }, 800);
  });
// SCROLL TO TOP
  $('.scrollToTop').click(function(){
    $('html, body').animate({scrollTop : 0},800);
    return false;
  });
});
