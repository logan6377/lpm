$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  });

  var scrollFirst = true;

  /* Smooth Scroll */

  $(document).ready(function(){
      // $fn.scrollSpeed(step, speed, easing);
      jQuery.scrollSpeed(100, 1000);

        var screenright = $(window).width()-$('.pagewrap').width();
        $('nav').css('right',screenright/2+'px');

        $(window).resize(function(){
            var screenright = $(window).width()-$('.pagewrap').width();
            $('nav').css('right',screenright/2+'px');
    
        })

          $('.iconoMenu').click(function(){
              $(this).toggleClass('open');
              $('.nav').toggleClass('hideMenu');
          }); 
              
          $('.parallax-container').height($(window).height())
          $('.parallax').parallax();

          window.sr = ScrollReveal();
          sr.reveal('.parallax', { origin: 'top', scale: 1, duration: 2000, distance:'0px' }, 50); 
          
          sr.reveal('.pov-headline', { origin: 'right', scale: 1, duration: 2500, distance:'500px', delay: 1500 }, 50);
          sr.reveal('nav', { origin: 'right', scale: 1, duration: 2000, distance:'250px', delay: 3000 }, 50);

          sr.reveal('nav li', { origin: 'right', scale: 1, duration: 2000, distance:'250px', delay: 3000 }, 200);
          sr.reveal('.top-logo', { origin: 'bottom', scale: 1, duration: 2000, delay: 3000 }, 500);

          sr.reveal('.pov-headline h1', { origin: 'bottom', scale: 1, duration: 2500, distance:'100px', delay: 4000 }, 50);
          sr.reveal('.pov-headline h1 span', { origin: 'bottom', scale: 1, duration: 2500, distance:'100px', delay: 4000 }, 150);
          sr.reveal('.get-app', { origin: 'bottom', scale: 1, duration: 2000, distance:'100px', delay: 2500 }, 250);
          //sr.reveal('.page-content', { origin: 'bottom', scale: 1, duration: 2000, distance:'150px', delay: 100 }, 250)

          sr.reveal('.nav-services li', { origin: 'bottom', opacity:1, scale: 1, duration: 2000, distance:'100px', delay: 200 }, 50);
          
 

          /* $(window).scroll(function(){
              if(scrollFirst){

                  $('html, body').animate({scrollTop:$('.content-section').offset().top}, 1000,
                  function(){
                      //jQuery.scrollSpeed(100, 1000);
                  })
  
                  scrollFirst = false
              }
          }) */

          jQuery(".testimonial-slider").slick({
            infinite:true,
            autoplay:true,
            speed:500,
            arrows:false,
            pauseOnHover:false
        }).on("afterChange",function(event, slick, currentSlide, nextSlide) {
            $("[testi-slide]").removeClass("active");
            $("[testi-slide="+currentSlide+"]").addClass("active")
        });
        jQuery("[testi-slide]").on("click", function() {
            var slideNum = $(this).attr("testi-slide");
            $(".testimonial-slider").slick("slickGoTo",slideNum);
            $(this).addClass("active").siblings().removeClass("active");
        });
           
  });
 

    (function($) {

    jQuery.scrollSpeed = function(step, speed, easing) {
        
        var $document = $(document),
            $window = $(window),
            $body = $('html, body'),
            option = easing || 'default',
            root = 0,
            scroll = false,
            scrollY,
            scrollX,
            view;
            
        if (window.navigator.msPointerEnabled)
        
            return false;
            
        $window.on('mousewheel DOMMouseScroll', function(e) {

            
            
            var deltaY = e.originalEvent.wheelDeltaY,
                detail = e.originalEvent.detail;
                scrollY = $document.height() > $window.height();
                scrollX = $document.width() > $window.width();
                scroll = true;
            
            if (scrollY) {
                
                view = $window.height();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.height() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollTop: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            if (scrollX) {
                
                view = $window.width();
                    
                if (deltaY < 0 || detail > 0)
            
                    root = (root + view) >= $document.width() ? root : root += step;
                
                if (deltaY > 0 || detail < 0)
            
                    root = root <= 0 ? 0 : root -= step;
                
                $body.stop().animate({
            
                    scrollLeft: root
                
                }, speed, option, function() {
            
                    scroll = false;
                
                });
            }
            
            return false;
            
        }).on('scroll', function() {
            
            if (scrollY && !scroll) root = $window.scrollTop();
            if (scrollX && !scroll) root = $window.scrollLeft();

            
            
        }).on('resize', function() {
            
            if (scrollY && !scroll) view = $window.height();
            if (scrollX && !scroll) view = $window.width();
            
        });       
    };

    jQuery.easing.default = function (x,t,b,c,d) {

        return -c * ((t=t/d-1)*t*t*t - 1) + b;
    };

    })(jQuery); 

