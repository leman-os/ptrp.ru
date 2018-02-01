$(function() {

	

});

$(document).ready(function(){
  
  

  $('.car2').owlCarousel({
    loop:true,
    nav:true,
    navText: ["<img src='../img/ic-ph/left.png'>","<img src='../img/ic-ph/right.png'>"],
    dots:false,
    autoplay:true,
    smartSpeed:1000,
    autoplayTimeout:2000,
    loop: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
  });

});