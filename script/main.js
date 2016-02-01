$('.slideshow__carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:4000

})

$(document).ready(function() {
            $('.project__btn').magnificPopup({
                disableOn: 0,
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos:true
            });
        });



// document.write(new Date().getFullYear())

