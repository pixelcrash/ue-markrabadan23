<div class="slider-content-flickity" id="flickity-wrapper" data-cursor="">
  
    <div class="main-carousel">
      <?php $gallery = get_field('gallery'); ?>
     
      <?php if($gallery): ?>
      <?php $ctn = 0; ?>
      
      <?php foreach($gallery as $img): ?>
        <?php if($ctn == 0): $cap = ue_get_image($img)['description']; $ctn++; endif; ?>
        <?php $tn = wp_get_attachment_image_src($img, 'full'); ?>
        <?php $orintation = ue_get_image($img)['orientation']; ?>
        <div class="carousel-cell" 
        data-cell="<?php echo ue_get_image($img)['description']; ?> "
        data-caption="<?php echo ue_get_image($img)['caption']; ?> "
        data-orientation="<?php echo ue_get_image($img)['orientation']; ?> "
        data-width="<?php echo ue_get_image($img)['width']; ?> "
        data-height="<?php echo ue_get_image($img)['height']; ?> ">
          
            <img src="<?php echo $tn[0]; ?>" class="<?php echo ($orintation)? 'img-portrait' : 'img-landscape'; ?>"
            alt="<?php echo ue_get_image($img)['alt']; ?>">
          
        </div>	
       <?php endforeach; ?>
         
       <?php endif; ?>
    </div>

</div>


<script
  src="https://code.jquery.com/jquery-3.6.1.slim.min.js"
  integrity="sha256-w8CvhFs7iHNVUtnSP0YKEg00p9Ih13rlL9zGqvLdePA="
  crossorigin="anonymous"></script>
  
  <link rel="stylesheet" href="https://unpkg.com/flickity@2/dist/flickity.min.css">
  <script src="https://unpkg.com/flickity@2/dist/flickity.pkgd.min.js"></script>

<script>

  let fl = $('.main-carousel');
   fl.flickity({
    cellAlign: 'center',
    contain: true,
    prevNextButtons: false,
    pageDots: false,
    wrapAround: true,
    imagesLoaded: true
  });
  
  var flkty = $('.main-carousel').data('flickity')
  
  
  var selectedIndex = flkty.selectedIndex;

  flkty.on( 'settle', function() {
    if ( flkty.selectedIndex !== selectedIndex ) {
      selectedIndex = flkty.selectedIndex;
      captionFlickity(flkty.selectedIndex);
    }
  });
  


  $('#flickity-wrapper').click(function(event){
    if(event.pageX >= ($(window).width() / 2) ){
      fl.flickity( 'next' );
    }else{
      $('#flickity-wrapper').attr("data-cursor", "prev");
      fl.flickity( 'previous' );
    }
  });
  
  function captionFlickity(index){
    if(index){
      let curImg = $('.carousel-cell').eq(index).data('cell');
      let curImgCaption = $('.carousel-cell').eq(index).data('caption');
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
  
  
</script>

