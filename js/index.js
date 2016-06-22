$(document).ready(function (){
  
  $("#about-link").click(function (){
    scrollTo($('#about'));
  });
  
  $("#port-link").click(function (){
    scrollTo($('#hr-portfolio'));
  });
  
  $("#contact-link").click(function (){
    scrollTo($('#hr-contact'));
  });
  
});

function scrollTo(element){
  $('html, body').animate({
    scrollTop: $(element).offset().top
  }, 1000);
};