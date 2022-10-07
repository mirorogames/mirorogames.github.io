$(function() {	 
    $("#progress").width((50 + Math.random() * 30) + "%");
    $(window).on('load', function() {
      $("#progress").width("101%").delay(300).fadeOut(400);
    });
});