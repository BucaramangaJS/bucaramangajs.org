$(function () {

  $(".button-collapse").sideNav();

  $('.side-nav a').on('click', function () {
    $('.button-collapse').sideNav('hide');
  });

  $('.menu-list a').on('click', function () {
    $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top
    }, 500);
  });
});
