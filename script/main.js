$(document).ready(function() {
  // SLIDESHOW TOP
    $('.slideshow__carousel').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      items:1,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout:4000

    });
    $('.slideshow--sketch').owlCarousel({
      loop:true,
      margin:0,
      nav:false,
      items:1,
      autoplay:true,
      autoplayHoverPause:true,
      autoplayTimeout:4000

    });

  // VIDEO POPUP
  $('.project__btn').magnificPopup({
      disableOn: 0,
      type: 'iframe',
      mainClass: 'mfp-fade',
      removalDelay: 160,
      preloader: false,
      fixedContentPos:true
    });
  // CONTACT US POPUP
  $('.contact__popup-link').magnificPopup({
    removalDelay: 500, //delay removal by X to allow out-animation
    closeMarkup: '<button title="CloseBtn" type="button" class="mfp-close contact__popup-btn">Закрыть окно</button>',
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
   // FORM US POPUP
  $('.form__popup-link').magnificPopup({
    removalDelay: 500, //delay removal by X to allow out-animation
    callbacks: {
      beforeOpen: function() {
         this.st.mainClass = this.st.el.attr('data-effect');
      }
    },
    midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
  });
  // YEAR COUNTER
  $('.year').html(new Date().getFullYear());
  // SMOOTH SCROLL
  $(".smoothclick").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 1500);
  });
  // COUNTER TERM
  $(window).scroll(startCounter);
  function startCounter() {
      if ($(window).scrollTop() > 5200) {
          $(window).off("scroll", startCounter);
          $('.term__number').each(function () {
              var $this = $(this);
              jQuery({ Counter: 0 }).animate({ Counter: $this.text() }, {
                  duration: 2500,
                  easing: 'swing',
                  step: function () {
                      $this.text(Math.ceil(this.Counter));
                  }
              });
          });
      }
  };
});




