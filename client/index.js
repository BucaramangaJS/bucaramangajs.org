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

if ((/bucaramangajs\.org/).test(location.origin)) {
  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  ga('create', 'UA-99058727-1', 'auto');
  ga('send', 'pageview');
}
