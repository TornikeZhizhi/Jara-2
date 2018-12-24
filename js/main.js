
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




})
