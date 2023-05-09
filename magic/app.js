$(function() {
    
    let className = 'fadouttext';
    var slides_count = document.getElementsByClassName("swiper-slide"); 
    var slides_count_dup = document.getElementsByClassName("swiper-slide-duplicate"); 
    var $document = $(document);
    var elmLength = $('.swiper').length;
    
    
  
    
    
    console.log( "Hey Stranger! Enjoy the code! Mark Rabadana - custom theme by georgkettele.com" );
    console.log(platform.name);
    
    $("body").addClass('browser-' + platform.name);
    $("body").addClass('product-' + platform.product);
    
    $('.work-img').mouseover(function(){
      $('.work-img').not(this).addClass('fadeout');
    });
    
    $('.work-img').mouseleave(function(){
      $('.work-img').removeClass('fadeout');
    });
    

    
    

    
    


    
    $('#intro-hero-text').delay(2000).addClass('fadouttext').queue(function(){
      $(this).remove();
    });
    

    $document.scroll(function() {
      if ($document.scrollTop() >= 20) {
        $('#intro-hero-text').addClass('fadouttext').delay(1000).queue(function(){
          $(this).remove();
        });
      } 
    });
    
    
    if (window.matchMedia("(max-width: 639px)").matches){
      $('#intro-hero-text').addClass('fadouttext', function(){
      });
    }
    
  
    
    
  
    
    

    
    
    
});