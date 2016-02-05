$(document).ready(function() {
  // SLIDESHOW
    $('.slideshow__carousel').owlCarousel({
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
    // showCloseBtn: false,
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

});




