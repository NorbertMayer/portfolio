(function($) {
  "use strict";
  // animation css
  $(".page-title a")
    .mouseover(function() {
      $(this).addClass("animated bounce");
    })
    .mouseout(function() {
      $(this).removeClass("animated bounce");
    });
  $(".social-menu li a")
    .mouseover(function() {
      $(this).addClass("animated bounce");
    })
    .mouseout(function() {
      $(this).removeClass("animated bounce");
    });

  $(".mainmenu-area #mainmenu li a").on("click", function() {
    $(".navbar-collapse").removeClass("in");
  });
  // active menu link
  $(".navbar-collapse .nav li").on("click", function() {
    $(".nav")
      .find(".active")
      .removeClass("active");
    $(this).addClass("active");
  });

  //Background Parallax
  $(".header-area").parallax("50%", -0.4);

  //Function to animate slider captions
  function doAnimations(elems) {
    //Cache the animationend event in a variable
    var animEndEv = "webkitAnimationEnd animationend";

    elems.each(function() {
      var $this = $(this),
        $animationType = $this.data("animation");
      $this.addClass($animationType).one(animEndEv, function() {
        $this.removeClass($animationType);
      });
    });
  }
  // Select all links with hashes
  $('.mainmenu-area a[href*="#"], .header-btn a, .navbar-header a.logo')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
      // On-page links
      if (
        location.pathname.replace(/^\//, "") ==
          this.pathname.replace(/^\//, "") &&
        location.hostname == this.hostname
      ) {
        // Figure out element to scroll to
        var target = $(this.hash);
        target = target.length
          ? target
          : $("[name=" + this.hash.slice(1) + "]");
        // Does a scroll target exist?
        if (target.length) {
          // Only prevent default if animation is actually gonna happen
          event.preventDefault();
          $("html, body").animate(
            {
              scrollTop: target.offset().top
            },
            1000,
            function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) {
                // Checking if the target was focused
                return false;
              } else {
                $target.attr("tabindex", "-1"); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              }
            }
          );
        }
      }
    });

  /* Preloader Js
    ===================*/
  $(window).on("load", function() {
    $(".preloader").fadeOut(500);
  });
})(jQuery);
