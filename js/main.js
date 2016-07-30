$(document).ready(function() {
  $(".sub-title").typed({
          strings: ["a web developer.", "a systems engineer.", "a network engineer.", "an aspiring devops engineer."],
          typeSpeed: 1,
          backSpeed: 1,
          backDelay: 1400,
          loop: !0
      });

   

// Function that adds "open" class to nav bar - utilizing staggerFromTo and staggerTo from Greensock
// original: TweenMax.staggerFrom('.sections', 2, {scale:0.5, opacity:0, delay:0.5, ease:Elastic.easeOut, force3D:true}, 0.2);

  $("#nav-burger").on('click',function(e) {
        e.preventDefault();

        if ($(this).hasClass('open')){
            $(this).removeClass('open');
            TweenMax.staggerTo('.sections', 0.5, {opacity:0, x:-25, ease:Back.easeIn}, 0.1);
        } else {
            $(this).addClass('open'), $('#menu-overlay').addClass("menu-show");
            TweenMax.staggerFromTo('.sections', 2, {opacity:0, x:-25},{opacity:1, x:+25, delay:0.5, ease:Elastic.easeOut, force3D:true},0.2);
    }                             
  });

  // Function that detects the top of the page, removes the open class from the nav-hamburger and then utilizes staggerTo to have the menu disappear to the left of the webpage. 

  $(window).scroll(function(e){
      e.preventDefault();
     
      if ($(window).scrollTop()==0){
        $('#nav-burger').removeClass('open');
        TweenMax.staggerTo('.sections', 0.25, {opacity:0, x:-25, ease:Back.easeIn}, 0.05);
      }


      // Counter
      // $(".count").countTo()

      // Scroll page transition
      // $.scrollify({
      //   section : ".scrolly",
      //   sectionName : "section-name",
      //   interstitialSection : "#landing",
      //   easing: "easeOutExpo",
      //   scrollSpeed: 1000,
      //   offset : 0,
      //   scrollbars: true,
      //   standardScrollElements: "#landing",
      //   setHeights: true,
      //   overflowScroll: true
      // });

      // Progress bar fill animation 
      // if($(window).scrollTop()>10) {
      //   $(".progress-bar").each(function(){
      //     each_bar_width = $(this).attr('aria-valuenow');
      //     $(this).width(each_bar_width + '%');
      //   });
      // }
  });

  


// function to check if element is in viewport
  // function isScrollToWindow(elem)
  // {
  //     var docViewTop = $(window).scrollTop();
  //     var docViewBottom = docViewTop + $(window).height();

  //     var elemTop = $(elem).offset().top;
  //     var elemBottom = elemTop + $(elem).height();

  //     return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
  // }



});



