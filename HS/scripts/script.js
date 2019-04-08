$(function($) {
        
      var $toTop   = $('.to-top');
      var body     = $('html, body');
      var hero   = $('.hero');

      $(window).scroll(function(){
      
        
        
        if($(window).scrollTop()>2300){
          $toTop.fadeIn(800);
        }
        else if ($(window).scrollTop()<1000){
          $toTop.hide();
        }
      });
      
      hero.on('click', function(event) {
        event.preventDefault();
        body.animate({scrollTop:600}, 2000);
      });

      $toTop.on('click', function(event) {
        event.preventDefault();
        body.animate({scrollTop:0}, 1200);
      });
    
    });


$(document).ready(function(){
  $('.slider_players').slick({
    dots:true,
    infinite: true,
  	slidesToShow: 1,
  	slidesToScroll: 1
  });
});






  

















