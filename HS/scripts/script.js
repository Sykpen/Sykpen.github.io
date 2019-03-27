$(function($) {
        
      var $toTop   = $('.to-top');
      var body     = $('html, body');
      
      $(window).scroll(function(){
      
        
        
        if($(window).scrollTop()>2300){
          $toTop.fadeIn(800);
        }
        else if ($(window).scrollTop()<1000){
          $toTop.hide();
        }
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

$(document).ready(function(){
  $('.wallpapers').slick({
    dots:true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });
});




  

















