/**
 * Created by Lily on 8/7/2016.
 */
$( document ).ready(function() {
    $(".thumbnail").mouseover(function() {
        $(this).fadeTo( "fast" , 0.5, function() {
            // Animation complete.
        });
    }).mouseout(function() {
        $(this).fadeTo( "fast" , 1, function() {
            // Animation complete.
        });
    });

    $(".bubble").each(function(index) {
        $(this).delay(2000*index).fadeIn("slow");
    });

});





