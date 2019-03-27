  var vw = $(window).width();

  var lastScrollTop = 0;
  var control1 = 0;
  var control2 = 0;
  var control3 = 0;
  var control4 = 0;
  var control5 = 0;
  var control6 = 0;
$(window).scroll(function(event){

    if (vw>992) {

      if($(".slider_heroes")[0]) {

        var st = $(this).scrollTop();
        if (st > lastScrollTop){


          if( $(this).scrollTop() > 0 && $(this).scrollTop() - $(".scrin1").offset().top < 0 ) {
            if(control1 == 0){
              $("html, body").animate({ scrollTop: $(".scrin1").offset().top }, 500);
              control1=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control1=0;
              }, 500);
            }
          }
          if( $(this).scrollTop() - $(".scrin1").offset().top > 0 && $(this).scrollTop() - $(".scrin2").offset().top < 0) {
            if(control2==0){
              $("html, body").animate({ scrollTop: $(".scrin2").offset().top }, 500);
              control2=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control2=0;
              }, 500);
            }
          }
          if( $(this).scrollTop() - $(".scrin2").offset().top > 0 && $(this).scrollTop() - $(".scrin3").offset().top < 0) {
            if(control3==0){
              $("html, body").animate({ scrollTop: $(".scrin3").offset().top }, 500);
              control3=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control3=0;
              }, 500);
            }
          }
          if( $(this).scrollTop() - $(".scrin3").offset().top > 0 && $(this).scrollTop() - $(".scrin4").offset().top < 0) {
            if(control4==0){
              $("html, body").animate({ scrollTop: $(".scrin4").offset().top }, 500);
              control4=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control4=0;
              }, 500);
            }
          }
          if( $(this).scrollTop() - $(".scrin4").offset().top > 0 && $(this).scrollTop() - $(".scrin5").offset().top < 0) {
            if(control5==0){
              $("html, body").animate({ scrollTop: $(".scrin5").offset().top }, 500);
              control5=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control5=0;
              }, 500);
            }
          }
          if( $(this).scrollTop() - $("..scrin5").offset().top > 0 && $(this).scrollTop() - $(".scrin6").offset().top < 0) {
            if(control6==0){
              $("html, body").animate({ scrollTop: $(".scrin6").offset().top }, 500);
              control6=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control6=0;
              }, 500);
            }
          }

        } else {

          if( $(this).scrollTop() > 0 && $(this).scrollTop() - $(".scrin1").offset().top < 0 ) {
            if(control1 == 0){
              $("html, body").animate({ scrollTop: 0 }, 500);
              control1=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control1=0;
              }, 500);
            }
          }
          if( $(this).scrollTop() - $(".scrin1").offset().top > 0 && $(this).scrollTop() - $(".scrin2").offset().top < 0) {
            if(control2==0){
              $("html, body").animate({ scrollTop: $(".scrin1").offset().top }, 500);
              control2=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control2=0;
              }, 500);
            }
          }
          if( $(this).scrollTop() - $(".scrin2").offset().top > 0 && $(this).scrollTop() - $(".scrin3").offset().top < 0) {
            if(control3==0){
              $("html, body").animate({ scrollTop: $(".scrin2").offset().top }, 500);
              control3=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control3=0;
              }, 500);
            }
          }
          if( $(this).scrollTop() - $(".scrin3").offset().top > 0 && $(this).scrollTop() - $(".scrin4").offset().top < 0) {
            if(control4==0){
              $("html, body").animate({ scrollTop: $(".scrin3").offset().top }, 500);
              control4=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control4=0;
              }, 500);
            }
          }
          if( $(this).scrollTop() - $(".scrin4").offset().top > 0 && $(this).scrollTop() - $(".scrin5").offset().top < 0) {
            if(control5==0){
              $("html, body").animate({ scrollTop: $(".scrin4").offset().top }, 500);
              control5=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control5=0;
              }, 500);
            }
          }
          if( $(this).scrollTop() - $(".scrin5").offset().top > 0 && $(this).scrollTop() - $(".scrin5").offset().top < 0) {
            if(control6==0){
              $("html, body").animate({ scrollTop: $(".scrin6").offset().top }, 500);
              control6=1;
              setTimeout(function(){
                $("html, body").clearQueue();
                control6=0;
              }, 500);
            }
          }

        }
        lastScrollTop = st;

      }
};