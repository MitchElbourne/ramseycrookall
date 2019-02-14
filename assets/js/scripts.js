function navbarScrollEffect() {
  var navbar = $('.navbar');
  var scrolled = false;

  jQuery(window).on('scroll', _.debounce(function() {
    if (jQuery("header").offset().top > 10) {
      jQuery("header").addClass("scrolled");
    } else {
      jQuery("header").removeClass("scrolled");
    }
  }, 150));

  // For setting navbar scrolled on load
  jQuery(window).ready(() => {
    if (jQuery("header").offset().top > 10) {
      jQuery("header").addClass("scrolled");
    } else {
      jQuery("header").removeClass("scrolled");
    }
  })

}

navbarScrollEffect();
