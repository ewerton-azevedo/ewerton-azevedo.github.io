
$(document).ready(function(){
 
 var x = $('.fadeIn');
 
 var fade = function(X){
 
  x.css("display", "none"); 
  x.fadeIn(3000);
  
}
 
var e = $('.smothScroll');
 
var smothScroll = function(e){

      $("a").on('click', function(event) {
             if (this.hash !== "") {
                          
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                scrollTop: $(hash).offset().top
                }, 1800, function(){
               window.location.hash = hash;
      });
    } 
  });


}
fade(), smothScroll();})

