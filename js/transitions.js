$(document).ready(function() {

  // BODY FADE IN
  $('body').css('display', '');
  $('body').fadeIn(400);

  // IMG FADE IN
  $('img').css('display', '');
  $('img').fadeIn(800);

  $('.link').click(function(event) {

    event.preventDefault();
    newLocation = this.href;
    $('body').fadeOut(800, newpage);

  });

function newpage() {

    window.location = newLocation;

  }
});
