$(window).on('beforeunload', function(){
    $(window).scrollTop(0);
  }); 

  $(document).ready(function(){

    $("body").find('img').each(function() {
        var fakeSrc = $(this).attr('src');
        $("<img/>").attr("src", fakeSrc).css('display', 'none').load(function() {
            images_loaded++;
            if (images_loaded >= total_images) {
                // now all images are loaded.
                alert("all images are loaded. Click OK to view.") ;

                $('.pagewrap').addClass('loaded');

                var scrollFirst = true;

                /* Smooth Scroll */

                var intro = function(){
                    var screenright = $(window).width()-$('.pagewrap').width();
                    $('nav').css('right',screenright/2+'px');

                    var testi = $('[testi-slide]').height();
                    $('.testimonials').css('margin-top',-testi+'px')
                }

                intro();

                $(window).resize(function(){
                    intro();
                });

                $('.iconoMenu').click(function(){
                    $(this).toggleClass('open');
                    $('.nav').toggleClass('hideMenu');
                }); 
                    
                $('.parallax-container').height($(window).height()-50) 
      
                window.sr = ScrollReveal();
                sr.reveal('.pov-img-container', { origin: 'top', scale: 1, duration: 2000, distance:'0px' }, 50); 
                
                sr.reveal('.pov-headline', { origin: 'right', scale: 1, duration: 2500, distance:'500px', delay: 1500 }, 50);
                sr.reveal('nav', { origin: 'right', scale: 1, duration: 2000, distance:'250px', delay: 3000 }, 50);
      
                sr.reveal('nav li', { origin: 'right', scale: 1, duration: 2000, distance:'250px', delay: 3000 }, 200);
                sr.reveal('.top-logo', { origin: 'bottom', scale: 1, duration: 2000, delay: 3000 }, 500);
      
                sr.reveal('.pov-headline h1', { origin: 'bottom', scale: 1, duration: 2500, distance:'100px', delay: 4000 }, 50);
                sr.reveal('.pov-headline h1 span', { origin: 'bottom', scale: 1, duration: 2500, distance:'100px', delay: 4000 }, 150);
                sr.reveal('.get-app', { origin: 'bottom', scale: 1, duration: 2000, distance:'100px', delay: 2500 }, 250);
                //sr.reveal('.page-content', { origin: 'bottom', scale: 1, duration: 2000, distance:'150px', delay: 100 }, 250)
      
                sr.reveal('.nav-services li', { origin: 'bottom', opacity:1, scale: 1, duration: 2000, distance:'100px', delay: 200 }, 50);
                
      
                sr.reveal('[testi-slide]', { origin: 'bottom', opacity:1, scale: 1, duration: 2000, distance:'100px',  }, 50);
      
                $(window).scroll(function(){
                    if(scrollFirst){
      
                        $('html, body').animate({scrollTop:$('.content-section').offset().top}, 1000)
        
                        scrollFirst = false
                    }
                })
      
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
      
              $('.pov-img-container').slick({
                  infinite:true,
                  autoplay:true,
                  speed:1500,
                  arrows:false,
                  pauseOnHover:false
              });
      
              $('.nav-services li').click(function(){
                  var current = $(this).attr('class').split(' ')[0];
                  $('.nav-services li').removeClass('active')
                  $(this).addClass('active')
                  $('.service-container > div').hide();
                  $('.service-container > div.'+current).show();
              })
            }
        });
    
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

