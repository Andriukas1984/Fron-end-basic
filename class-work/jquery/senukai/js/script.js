$(document).ready(function(){
    $( ".ic_p" ).mouseenter(function() {
        $( ".login" ).slideDown( "fast", function() {
          // Animation complete.
        });
      });

      $( ".login" ).mouseleave(function() {
        $( ".login" ).slideUp( "fast", function() {
          // Animation complete.
        });
      });

});