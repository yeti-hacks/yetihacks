
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementByClassName("nav-bar").style.top = "0";
  } else {
    document.getElementByClassName("nav-bar").style.top = "-50px";
  }
}


      $("#sec-1").click(function() {
           $('html, body').animate({
               scrollTop:        $("#one").offset().top-66
           }, 1000);
        return false;
       });
      
      $("#sec-2").click(function() {
           $('html, body') .animate({
               scrollTop:        $("#two").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#sec-3").click(function() {
           $(' html,body') .animate({
               scrollTop:        $("#three").offset().top-112
           }, 1000);
        return false;
       });
      
      $("#sec-4").click(function() {
        $(this).addClass("active");
           $('html,body ') .animate({
               scrollTop:        $("#four").offset().top-112
           }, 1000);
        return false;
       });
      $("#sec-5").click(function() {
        $(this).addClass("active");
           $('html,body ') .animate({
               scrollTop:        $("#five").offset().top-112
           }, 1000);
        return false;
       });
$('#faq').waypoint(function() {
      
        $(".container ul li").children().removeClass("active");
        $("#faq'").addClass("active");
        
      }, { offset: 101 });
      
          $('#volunteers').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#volunteers").addClass("active");
      }, { offset: 0 });
      
      $('#sponsors').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#sec-3").addClass("active");
      }, { offset: 101 });
      
      $('#team').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#team").addClass("active");
      }, { offset: 101 });
      
      $('#prizes').waypoint(function() {
        $(".container ul li").children().removeClass("active");
        $("#prizes").addClass("active");
      }, { offset: 0 });

/* nav bar code */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "nav-links") {
    x.className += "responsive";
  } else {
    x.className = "nav-links";
  }
  
  
}

/*Make icon for navbar disappear */






