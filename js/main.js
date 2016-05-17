$(document).ready(function() {
  $(".sub-title").typed({
          strings: ["a web developer.", "a systems engineer.", "a network engineer.", "an aspiring devops engineer."],
          typeSpeed: 1,
          backSpeed: 1,
          backDelay: 1400,
          loop: !0
      });

// Added function that adds "open" class to nav bar - need to look at menu-overlay now
  $("#nav-icon").click(function() {
        $(this).toggleClass('open'), $("#menu-overlay").toggleClass("menu-show")
    });
  // Add a function here that removes "menu-show" class from menu-overlay IF portfolio-slide has class modify - maybe I can use classie - like I did for the nav bar 

  // $(window).scroll(function(){
    // this part does not work :(
    // if($(!'.portfolio-slide').hasClass('modify')){
      // $('#menu-overlay').removeClass('menu-show');
      // console.log('yay!');
    // }
  // });


});


