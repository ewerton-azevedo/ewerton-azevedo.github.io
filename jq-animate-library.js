javascript: (function(e, s) {
    e.src = s;
    e.onload = function() {
        jQuery.noConflict();
        console.log('jQuery injected');
    };
    document.head.appendChild(e);
})(document.createElement('script'), 'http://code.jquery.com/jquery-latest.min.js')


$(document).ready(function(){
var x = $(".fadeIn");
 var fadeIn = function(X){
  x.css("display", "none"); 
  x.fadeIn(3000);
  
}
fadeIn();})

