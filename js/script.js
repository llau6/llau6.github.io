/**
 * Created by Lily on 8/7/2016.
 */
$( document ).ready(function() {
    //$(".thumbnail").mouseover(function() {
    //
    //}).mouseout(function() {
    //
    //});

    $(".bubble").each(function(index) {
        $(this).delay(2000*index).fadeIn("fast");
    });
});