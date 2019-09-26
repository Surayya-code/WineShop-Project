$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
      items:3,
      loop: true,
      margin: 0,
      autoplay: true,
      nav: true,
      dots: true,
      smartSpeed: 1000,
      navText: ['<span class="icon-arrow_back">', '<span class="icon-arrow_forward">']
    });
  });