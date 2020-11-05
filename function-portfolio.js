/*Navigation*/
$(document).ready(function() {
  $(".fa-bars").click(function(){
    $(".bar").slideDown();
    $(".fa-bars").hide();
    $(".fa-times").show();
  });
});

$(document).ready(function() {
  $(".fa-times").click(function(){
    $(".bar").slideUp();
    $(".fa-bars").show();
    $(".fa-times").hide();
  });
});

$(document).ready(function() {
  if ($(window).width()<550){
    $('.links').hide();
    $('.fa-bars').show();
    $('.fa-times').hide();
    $('.bar').hide();
  }
  else{
    $('.links').show();
    $('.fa-bars').hide();
    $('.fa-times').hide();
    $('.bar').hide();
  }
});

$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
});
$(window).resize(function(){
  if ($(window).width()<550){
    $('.links').hide();
    $('.fa-times').hide();
    $('.fa-bars').show();
    $('.bar').hide();
  }
  else {
    $('.links').show();
    $('.fa-bars').hide();
    $('.fa-times').hide();
    $('.bar').hide();
  }
});


/*End of Navigation*/
