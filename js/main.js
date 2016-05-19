$(document).ready(function() {
  $(".sub-title").typed({
          strings: ["a web developer.", "a systems engineer.", "a network engineer.", "an aspiring devops engineer."],
          typeSpeed: 1,
          backSpeed: 1,
          backDelay: 1400,
          loop: !0
      });

// Added function that adds "open" class to nav bar - utilizing stagger from Greensock
// TweenMax.staggerFrom('.sections', 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

  $("#nav-icon").on('click',function(e) {
        e.preventDefault();

        if ($(this).hasClass('open')){
            $(this).removeClass('open');
            TweenMax.staggerTo('.sections', 0.5, {opacity:0, x:-20, ease:Back.easeIn}, 0.1);
        } else {
            $(this).addClass('open'), $('#menu-overlay').addClass("menu-show");
            TweenMax.staggerFromTo('.sections', 2, {opacity:0, x:-20},{opacity:1, x:+20, delay:0.5, ease:Elastic.easeOut, force3D:true},0.2);
    }                             
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


