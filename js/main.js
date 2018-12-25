
$(document).ready(function(){

$('.home_main_slider').owlCarousel({
    loop:true,
    margin:0,
    autoplay:true,
    autoplayTimeout:5000,
    smartSpeed: 1100,
    responsive:{
        0:{
            items:1
        },
        690:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
})



$('.home_gallery_slider').owlCarousel({
    loop:true,
    margin:0,
    dots:false,
    smartSpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        690:{
            items:1
        },
        992:{
            items:1
        },
        1200:{
            items:1
        }
    }
})

$('.video_slider_wrapper').owlCarousel({
    loop:true,
    margin:5,
    dots:false,
    smartSpeed: 1500,
    responsive:{
        0:{
            items:1
        },
        690:{
            items:3
        },
        992:{
            items:4
        },
        1200:{
            items:5
        }
    }
})



// Scroll

$(".srcroll_line a").on("click",function(e){

    var href = $(this).attr('href');
    $("html, body").animate({
        scrollTop : $(href).offset().top
    },500);
    e.preventDefault()
})


//video modal
$(".video_play span").on("click",function(){
    $(".home_video_modal_fluid").addClass("active");
});

$(".home_video_modal_fluid").on("click",function(){
   $(this).removeClass("active")
})

$(".home_video_modal").on("click",function(e){
    e.stopPropagation();
})


// Search

$(".header_search img").on("click",function(){
    $(".search_box").fadeIn(100);
})

$(window).on("click",function(){
     $(".search_box").fadeOut(100);
})

$(".header_search").on("click",function(e){
    e.stopPropagation();
})

// Video Slider


var vids = $(".home_video_box video"); 
$.each(vids, function(){
       this.controls = false; 
}); 


$(document).ready(function(){

  $(".home_video_box video").mouseenter(function() {
      this.play();

  });

  $(".home_video_box video").mouseleave(function() {
      this.pause();
  });

})




$(".home_video_box").mouseenter(function() {

    $(this).find(".video_decor").addClass("active");
    
})

$(".home_video_box").mouseleave(function() {
    $(this).find(".video_decor").removeClass("active");
})



// modal video

var vids = $(".home_video_modal video"); 
$.each(vids, function(){
       this.controls = false; 
}); 
//Loop though all Video tags and set Controls as false

$(".home_video_modal video").click(function() {

    
  
  if (this.paused) {
    this.play();
  } else {
    this.pause();
  }
});


// Video Modal

$(".home_video_box video").on("click",function(){
    $(".video_slider_modal").addClass("active");
})

$(".video_slider_modal").on("click",function(){
   $(this).removeClass("active")
})

$(".home_video_modal").on("click",function(e){
    e.stopPropagation();
})



$(window).on("load",function(){

    var hh = $(".home_video_wrapper").height() / 1.6;

    $(".home_video_text").css("height",hh);

})




})
