function navbarScrollEffect() {
  var navbar = $('.navbar');
  var scrolled = false;

  jQuery(window).on('scroll', _.throttle(function() {
    if (jQuery("header").offset().top > 10) {
      jQuery("header").addClass("scrolled");
    } else {
      jQuery("header").removeClass("scrolled");
    }
  }, 200));

  // For setting navbar scrolled on load
  jQuery(window).ready(function() {
    if (jQuery("header").offset().top > 10) {
      jQuery("header").addClass("scrolled");
    } else {
      jQuery("header").removeClass("scrolled");
    }
  })

}

navbarScrollEffect();
