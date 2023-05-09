<div class="swiper" data-cursor="" id="swiper-ele">
  
    <div class="swiper-wrapper">
      <?php $gallery = get_field('gallery'); ?>
     
      <?php if($gallery): ?>
      <?php $ctn = 0; ?>
      
      <?php foreach($gallery as $img): ?>
        <?php if($ctn == 0): $cap = ue_get_image($img)['description']; $ctn++; endif; ?>
        <?php $tn = wp_get_attachment_image_src($img, 'full'); ?>
        <div class="swiper-slide" 
        data-cell="<?php echo ue_get_image($img)['description']; ?> "
        data-caption="<?php echo ue_get_image($img)['caption']; ?> ">
            <div>
              <div>
              <img src="<?php echo $tn[0]; ?>" class="responsive2"
              alt="<?php echo ue_get_image($img)['alt']; ?>">
              </div>
            </div>
        </div>	
       <?php endforeach; ?>
         
       <?php endif; ?>
    </div>
  </div>

<script>

  let mobile = false;

  const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 3,
  allowTouchMove: true,
  spaceBetween: 100,
  loopedSlides: 2,
  centeredSlides: true,
  
  lazy: {
    loadPrevNext: true,
  },
  
  breakpoints: {
    // when window width is >= 320px
    320: {
      slidesPerView: 'auto',
      spaceBetween: 100
    },
    // when window width is >= 480px
    480: {
      slidesPerView: 'auto',
      spaceBetween: 100
    },
    // when window width is >= 640px
    724: {
      slidesPerView: 2,
      spaceBetween: 100
    }
  },
  
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  }
  
});


var isMobile = false; //initiate as false
// device detection
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent) 
    || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4))) { 
    isMobile = true;
}

var slides_count = document.getElementsByClassName("swiper-slide"); 
var slides_count_dup = document.getElementsByClassName("swiper-slide-duplicate"); 
var $document = $(document);
var elmLength = $('.swiper').length;

if(elmLength){
    slideCounter();
    updateCaption();
}

function updateCaption(){
  let index = swiper.activeIndex;
  console.log(index);
  if(index){
    let curImg = $('.swiper-slide').eq(index).data('cell');
    let curImgCaption = $('.swiper-slide').eq(index).data('caption');
    let emptyCaption = $('#emptyCaption').val();
  

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


function slideCounter(){
  
  let total = (swiper.realIndex +  1) + ' / ' + (slides_count.length - slides_count_dup.length);
  let total2 = (swiper.realIndex +  1) + ' / ' + (slides_count.length - slides_count_dup.length);
  
  $("#slidecounter").html(total);
  $("#slidecounter2").html(total2);
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


$(function(){
   updateSize();
   styleImages();
   swiper.init();
   slideCounter();
   updateCaption();
});


$(window).resize(function() {
  updateSize();
  slideCounter();
  updateCaption();
  styleImages();
  swiper.init();
});


function styleImages(){
  let ctrr = 0;
  $('img.responsive').each(function(){
    let imgW = $(this).width();
    let imgH = $(this).height();
    
    if(imgW > imgH){
      $(this).addClass('isLandscape');
      $(this).removeClass('isPortrait');
    }else{
      $(this).addClass('isPortrait');
      $(this).removeClass('isLandscape');
    }
    ctrr++;
  });
}

  
function updateSize(){
  let main = $('main.swiperjs');
  let heightHeader = $('header').height();
  let heightFooter = $('footer').height();
  let mainSize =  $(window).height() - $('header').height() - $('footer').height();
  
  if(isMobile){
    
    $('main.swiperjs').addClass('ismobile');
  } else {
    //$('main.swiperjs').height(mainSize);
    $('main.swiperjs').removeClass('ismobile');
  }    
}
</script>