$(document).ready(function(){

      /* For the sticky navigation */
    var waypoint = new Waypoint({
        element: $('.js--section-features'),
        handler: function(direction) {
            if (direction == "down") {
                        $('nav').addClass('sticky');
                    } else {
                        $('nav').removeClass('sticky');
                    }
        },
        offset: '60px'
      });

      /* Scroll to button click */
      $('.js--scroll-to-plans').on('click', function(){
        $('html, body').animate({scrollTop: $('.js--section-plans').offset().top }, 4000);
      });

      $('.js--scroll-to-start').on('click', function(){
        $('html, body').animate({scrollTop: $('.js--section-features').offset().top }, 2000);
      });

      /* Scroll to navigation links click */
      $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        // Does a scroll target exist?
        if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
            scrollTop: target.offset().top
            }, 1000, function() {
            // Callback after animation
            // Must change focus!
            var $target = $(target);
            $target.focus();
            if ($target.is(":focus")) { // Checking if the target was focused
                return false;
            } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
            };
            });
        }
    }
    });

    /* Scrolling animations for plans section */
    var waypoint = new Waypoint({
        element: $('.js--wp-1'),
        handler: function(direction) {
            $('.js--wp-1').addClass('animated fadeIn');
        },
        offset: '50%'
      });

    /* Scrolling animation for app image */
    var waypoint = new Waypoint({
        element: $('.js--wp-2'),
        handler: function(direction) {
            $('.js--wp-2').addClass('animated bounceInUp');
        },
        offset: '50%'
      });
    /* Scrolling animation for cities section */  
      var waypoint = new Waypoint({
        element: $('.js--wp-3'),
        handler: function(direction) {
            $('.js--wp-3').addClass('animated fadeIn');
        },
        offset: '50%'
      });  

      var waypoint = new Waypoint({
        element: $('.js--wp-4'),
        handler: function(direction) {
            $('.js--wp-4').addClass('animated pulse');
        },
        offset: '50%'
      });  

      /* Mobile nav */
      $('.js--nav-icon').on('click', function(){

        // .js--main-nav
        var nav = $('.js--main-nav');
        var icon = $('.js--nav-icon ion-icon');

        //  $("#id").attr("name");

        if(icon.attr("name") == 'menu'){
            icon.attr('name', 'close');
        }else{
            icon.attr('name', 'menu');
        }

        nav.slideToggle(200);

      });

});