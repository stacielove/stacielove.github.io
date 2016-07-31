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

  
  var speedTrans = 0;// fade speed of transition
  //Hide all slides
  $('.proj-img').hide();
  $('.proj-title').hide();
  $('.proj-item').hide();
  //Show first slide
  $('.active').show();

  // Next event
  $('#next').on('click', nextSlide);
  // Previous event
  $('#previous').on('click', previousSlide);


  function rightClick(){
    nextSlide();
    findPie();
  }

  function leftClick(){
    previousSlide();
    findPie();
  }


  //Function: Next slide
  function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    
    if($('.oldActive').is(':last-child')){
      $('.proj-img').first().addClass('active');
      $('.proj-title').first().addClass('active');
      $('.proj-item').first().addClass('active');
    }else{
      $('.oldActive').next().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.proj-img').fadeOut(speedTrans);
    $('.proj-title').fadeOut(speedTrans);
    $('.proj-item').fadeOut(speedTrans);
    $('.active').fadeIn(speedTrans);
  }

  //Function: Previous slide
  function previousSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    
    if($('.oldActive').is(':first-child')){
      $('.proj-img').last().addClass('active');
      $('.proj-title').last().addClass('active');
      $('.proj-item').last().addClass('active');
    }else{
      $('.oldActive').prev().addClass('active');
    }
    $('.oldActive').removeClass('oldActive');
    $('.proj-img').fadeOut(speedTrans);
    $('.proj-title').fadeOut(speedTrans);
    $('.proj-item').fadeOut(speedTrans);
    $('.active').fadeIn(speedTrans);
  }


drawLayeredPie('diagram-van','.get-van');
drawLayeredPie('diagram-seq','.get-seq');
drawLayeredPie('diagram-roa','.get-roa');

// Just manually do it?
// Create a loop that iterates? 
// Write algo where if .proj-item has class active - fire off initialization of drawLayeredPie function

// $('.myclass a').click(function() {
   // var className = $(this).attr('class');
   // switch(className){
      // case 'class1':
     //put your cases here
   // }
// });

function findPie(){ 

};



//  Function - where param is the div id
// need to find out how to get div id
// need to pass the div id via drawLayeredPie
  // .proj-item active
  // .proj-stats
  // #diagram (where you draw the circle)
  // .get (div) to get all the measurements for the chart
  function drawLayeredPie(diagramArea,arcArea){

    var o = {
    // starts the func - by calling diagram
    init: function(){
      this.diagram();
    },
    // randomizes layer position
    random: function(l, u){
      return Math.floor((Math.random()*(u-l+1))+l);
    },
    // draws the diagram - calls the random func
    diagram: function(){
      var r = Raphael(diagramArea, 500, 500),
        rad = 25,
        defaultText = '',
        speed = 250;
      
      r.circle(300, 300, 85).attr({ stroke: 'none', fill: 'rgba(0,0,0,0)' });
      
      var title = r.text(300, 300, defaultText).attr({
        font: '12px Lato',
        fill: '#000000'
      }).toFront();
      
      r.customAttributes.arc = function(value, color, rad){
        var v = 3.6*value,
          alpha = v == 360 ? 359.99 : v,
          random = o.random(91, 240),
          a = (random-alpha) * Math.PI/180,
          b = random * Math.PI/180,
          sx = 300 + rad * Math.cos(b),
          sy = 300 - rad * Math.sin(b),
          x = 300 + rad * Math.cos(a),
          y = 300 - rad * Math.sin(a),
          path = [['M', sx, sy], ['A', rad, rad, 0, +(alpha > 180), 1, x, y]];
        return { path: path, stroke: color }
      }
      
      $(arcArea).find('.arc').each(function(i){
        var t = $(this), 
          color = t.find('.color').val(),
          value = t.find('.percent').val(),
          text = t.find('.text').text();
        
        rad += 30;  
        var z = r.path().attr({ arc: [value, color, rad], 'stroke-width': 26 });
        
        // mouseover animations on the arcs
        z.mouseover(function(){
                  this.animate({ 'stroke-width': 50, opacity: .75 }, 1000, 'elastic');
                  if(Raphael.type != 'VML') //solves IE problem
        this.toFront();

          title.stop().animate({ opacity: 0 }, speed, '>', function(){
            this.attr({ text: text + '\n' + value + '%' }).animate({ opacity: 1 }, speed, '<');
          });
              }).mouseout(function(){
          this.stop().animate({ 'stroke-width': 26, opacity: 1 }, speed*4, 'elastic');
          title.stop().animate({ opacity: 0 }, speed, '>', function(){
            title.attr({ text: defaultText }).animate({ opacity: 1 }, speed, '<');
          }); 
        });
      }); 
    }
  }
  // $(function(){ o.init(); });
  // run function
    o.init();
    // removes the top styling of the svg
    $('svg').css('top', '');

  } //end of drawLayeredPie


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



