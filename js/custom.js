$(function(){
    
    //--------------slider------------------
    
 $('.right').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
 
  nextArrow:'.ron',
  prevArrow:'.chev',
});

//--------------venobox-----------------

  $('.venobox').venobox(); 

  $('.food-main').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    nextArrow:'.it-l',
    prevArrow:'.it-r',
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
         
          
        }
      },
      {
        breakpoint: 776,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  }); 
  //-----------------back-top----------------

  $('.back-top').click(function(){
    $('html, body').animate({scrollTop:0},1000);
});

$(window).scroll(function(){
  var scrolling = $(this).scrollTop();
  if(scrolling > 200){
      $('.navbar').addClass('bg');
  }
   else {
       $('.navbar').removeClass('bg');
   }
   
   if(scrolling >300){
       $('.back-top').fadeIn(500);
   }
   else {
       $('.back-top').fadeOut(500);
   }
});

//animation scroll js
var html_body = $('html, body');
$('nav a').on('click', function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
        if (target.length) {
            html_body.animate({
                scrollTop: target.offset().top - 0
            }, 1500);
            return false;
        }
    }
});
    
    
    
$(window).on('load', function(){
  $('.preloader').delay(1000).fadeOut(1000); 
});   
    
    
    
    
    
    
    
    
    
    
    
    
})