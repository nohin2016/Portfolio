$(function () {

  $(".menu__list").on("click", "a", function (e) {
    e.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({
      scrollTop: top
    }, 1500);
  });

  $('.header__burger').click(function (event) {
    $('.header__burger, .menu__list').toggleClass('active')
  });

  var mixer = mixitup('.portfolio__items');
});