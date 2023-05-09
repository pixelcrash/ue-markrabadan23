$(function() {
  
    console.log( "Mark Rabadana - custom theme by georgkettele.com - based on HUGO" );
    
    $('.work-img').mouseover(function(){
      $('.work-img').not(this).addClass('fadeout');
    });
    
    $('.work-img').mouseleave(function(){
      $('.work-img').removeClass('fadeout');
    });
    
    
    
    $('.work-gallery__').flickity({
      wrapAround: true,
      pageDots: false,
      draggable: true,
  		lazyLoad: 2,
      
      prevNextButtons: false,
      
      
      on: {
        ready: function() {
          console.log('slide away');
        },
        change: function( index ) {
          console.log( 'Slide changed to' + index );
          let curImg = $('.carousel-cell').eq(index).data('cell');
          caption = curImg.match(/_-(.*?)-_/);

          if(caption){
            $("#img-caption").html(caption[1]);
          }else{  
            $("#img-caption").html( $('#emptyCaption').val() );
          }
          
        }
      },
      
      
      
    });
    
    const swiper = new Swiper('.swiper', {
      loop: true,
      mousewheel: true,
      slidesPerView: 2,
      centeredSlides: true,
      spaceBetween: 200,
      observer: true, 
      observeParents: true,

      keyboard: {
          enabled: true,
      },
    
      // Responsive breakpoints
      breakpoints: {
        
        1024: {
          slidesPerView: 2,
          spaceBetween: 200
        },
        
        640: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is >= 480px
        480: {
          slidesPerView: 1,
          spaceBetween: 20
        },
        // when window width is >= 640px
        375: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      },
      
      on: {
        afterInit: function () {
          
        },
      },
      
      
    });
    
    function updateCaption(){
      let index = swiper.activeIndex;
      
      let curImg = $('.swiper-slide').eq(index).data('cell');
      caption = curImg.match(/_-(.*?)-_/);

      if(caption){
        $("#img-caption").html(caption[1]);
      }else{  
        $("#img-caption").html( $('#emptyCaption').val() );
      }
    }
    
    swiper.on('slideChange', function(){ 
      updateCaption();
    });
    
    swiper.on('init', function(){ 
      updateCaption();
      console.log("after init");
      console.log('swiper initialized');
    });
  
    
  
    
  
    
    
    $('.swiper-next').click(function(event){
      swiper.slideNext();
    });
    
    $('.swiper-prev').click(function(e){
      swiper.slidePrev();
    });
    
    
  
    
    
    let firstTimeVisit = 'true';
    // Set a Cookie
    function setCookie(cName, cValue, expDays) {
            let date = new Date();
            date.setTime(date.getTime() + (expDays * 24 * 60 * 60 * 1000));
            const expires = "expires=" + date.toUTCString();
            document.cookie = cName + "=" + cValue + "; " + expires + "; path=/";
    }
    // Apply setCookie
    setCookie('firsttimevisit', firstTimeVisit, 1);
    
    let cookies = document.cookie;
    
    console.log(cookies); 
    updateCaption();
    
});