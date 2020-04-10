$(document).ready(function () {
  //initialize swiper when document ready
  var mySwiper = new Swiper ('.js-hero-swiper', {
    // Optional parameters
		loop: true,
		pagination: {
			el: '.js-hero-swiper-pagination',
		},
  })

  var mySwiper2 = new Swiper ('.js-quotes-swiper', {
    // Optional parameters
		loop: true,
		pagination: {
			el: '.js-quotes-swiper-pagination',
		},
  })
});