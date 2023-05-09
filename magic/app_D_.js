$(function() {
    
    let className = 'fadouttext';
    var slides_count = document.getElementsByClassName("swiper-slide"); 
    var slides_count_dup = document.getElementsByClassName("swiper-slide-duplicate"); 
    var $document = $(document);
    var elmLength = $('.swiper').length;
    
    
    const swiper = new Swiper('.swiper', {
      loop: true,
      slidesPerView: "auto",
      allowTouchMove: true,
      spaceBetween: 0,
      
      breakpoints: {
        // when window width is >= 320px
        320: {
          slidesPerView: "auto",
          spaceBetween: 0
        },
        // when window width is >= 480px
        480: {
          slidesPerView: "auto",
          spaceBetween: 15
        },
        // when window width is >= 640px
        724: {
          slidesPerView: 2,
          spaceBetween: 125,
          centeredSlides: true
        }
      },
      
      keyboard: {
        enabled: true,
        onlyInViewport: false,
      }
    });
    
    
    if(elmLength){
        slideCounter();
        updateCaption();
    }
    
    
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
    
    if(platform.name == "Firefox" || platform.name == "Safari" ){
      if(elmLength){
        $('.slideshow__slide').css('padding', "0px 125px" );
      }
    }
    
    
    $( window ).resize(function() {
      updateCaption();
    });
    
    
    function updateCaption(){
      let index = swiper.activeIndex;
      if(index){
        let curImg = $('.swiper-slide').eq(index).data('cell');
        let curImgCaption = $('.swiper-slide').eq(index).data('caption');
        let emptyCaption = $('#emptyCaption').val();
        console.log(emptyCaption);

        if(curImg){
          $("#img-caption").html(curImg);
        }else{  
          $("#img-caption").html( $('#emptyCaption').val() );
        }
        
        if(curImgCaption){
          $("#img-caption-mobile").html(curImgCaption);
        }else{  
          $("#img-caption-mobile").html( '' );
        }
      }  
    }
    
    $('#swiper-ele').mouseover(function(event){
      if(event.pageX >= ($(window).width() / 2) ){
        $('#swiper-ele').attr("data-cursor", "next");
      }else{
        $('#swiper-ele').attr("data-cursor", "prev");
      }
    });
    
    
    $('#swiper-ele').click(function(event){
      if(event.pageX >= ($(window).width() / 2) ){
        swiper.slideNext();
      }else{
        $('#swiper-ele').attr("data-cursor", "prev");
        swiper.slidePrev();
      }
    });
    
    
    $('#swiper-ele').mouseleave(function(){
      $('#swiper-ele').attr("data-cursor", "none");
    });
    
    
    swiper.on('slideChange', function(){ 
      updateCaption();
      slideCounter();
    });
  
    
    swiper.on('init', function(){ 
      updateCaption();
      slideCounter();
    });
  
    
    $('.swiper-next').click(function(event){
      swiper.slidePrev();
    });
    
    $('.swiper-prev').click(function(e){
      swiper.slideNext();
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
    
    
    function slideCounter(){
      var total = document.getElementById('slidecounter');
      var total2 = document.getElementById('slidecounter2');
      total.innerHTML = (swiper.realIndex +  1) + ' / ' + (slides_count.length - slides_count_dup.length);
      total2.innerHTML = (swiper.realIndex +  1) + ' / ' + (slides_count.length - slides_count_dup.length);
    }
    
    
    if( $('.grid').length )         
    // check if Masonry Grid is there 
    {
      $('.grid').masonry({
        itemSelector: '.grid-item',
        columnWidth: '.grid-sizer',
        percentPosition: true,
        gutter: 0
      });
    }
    
    
    function resizeFrame(){
      let navH = $('.slider-nav').height();
      let metaH = $('.slider-meta').height();
      let sliderFrame = window.innerHeight - navH - metaH;
    	sliderFrame = sliderFrame;
    	$('.swiper-slider').css('grid-template-rows', navH + "px " + sliderFrame + "px " + metaH +"px" );
      $('.swiper-wrapper').css('max-height', sliderFrame );
    }
    
    
    
    // Flickity
    $('#flickity-wrapper').mouseover(function(event){
      if(event.pageX >= ($(window).width() / 2) ){
        $('#flickity-wrapper').attr("data-cursor", "next");
      }else{
        $('#flickity-wrapper').attr("data-cursor", "prev");
      }
    });
    
    $('#flickity-wrapper').mouseleave(function(){
      $('#flickity-wrapper').attr("data-cursor", "none");
    });
    
    
    
    
});