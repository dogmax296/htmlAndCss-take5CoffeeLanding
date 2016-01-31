$('.slideshow__carousel').owlCarousel({
    loop:true,
    margin:0,
    nav:false,
    items:1,
    autoplay:true,
    autoplayHoverPause:true,
    autoplayTimeout:4000

})

// $(document).ready(function(){
//     /* Get iframe src attribute value i.e. YouTube video url
//     and store it in a variable */
//     var url = $("#video").attr('src');
    
//     /* Assign empty url value to the iframe src attribute when
//     modal hide, which stop the video playing */
//     $("#modal-video").on('hide.bs.modal', function(){
//         $("#video").attr('src', '');
//     });
    
//     /* Assign the initially stored url back to the iframe src
//     attribute when modal is displayed again */
//     $("#modal-video").on('show.bs.modal', function(){
//         $("#video").attr('src', url);
//     });
// });

// document.write(new Date().getFullYear())

