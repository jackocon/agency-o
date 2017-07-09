// Listen for when the user clicks on the hamburger icon
$('.hamburger').on('click', function () {
  $('.menu').toggleClass('open');
});

$( '.menu a' ).on("click", function(){
  $('.menu').removeClass('open');
});
