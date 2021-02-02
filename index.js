var b = false;

$(".navbar-toggler").click(function() {
  if (!b) {
    b = true;
    $(".navbar-toggler-icon").css("background-image", "url('images/icon-close.png')");
    $(".navbar-toggler-icon").css("background-size", "70%");
    $("#intro, #reason, #Articles, footer").css("filter", "brightness(0.5)");
  }
  else if(b){
    b = false;
    $(".navbar-toggler-icon").css("background-image", "url('images/icon-hamburger.png')");
    $(".navbar-toggler-icon").css("background-size", "100%");
    $("#intro, #reason, #Articles, footer").css("filter", "brightness(1)");
  }
})
