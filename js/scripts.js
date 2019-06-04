$(document).ready(function() {
  $(".jumbotron").click(function() {
    if ($(".jumbotron").hasClass("forest1")) {
      $(".jumbotron").addClass("mnt2");
      $(".jumbotron").removeClass("forest1");
      $(changeB1Color("tan"));
    } else if ($(".jumbotron").hasClass("mnt2")){
        $(".jumbotron").addClass("seaside1");
        $(".jumbotron").removeClass("mnt2");
        $(changeB1Color("navy"));
          } else {
            $(".jumbotron").addClass("forest1");
            $(".jumbotron").removeClass("seaside1");
            $(changeB1Color("darkgreen"));
          }
  });
});

function changeB1Color(color) {
  document.body.style.background = color;
}
// fadeIn()
// fadeOut()
// fadeToggle()
// slideDown()
// slideUp()
// slideToggle()
