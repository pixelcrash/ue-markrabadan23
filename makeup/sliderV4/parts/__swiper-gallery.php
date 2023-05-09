<div class="slider-content" id="swiper-ele" data-cursor="">
  
  <div class="swiper mySwiper">
    <div class="swiper-wrapper">
      <?php $gallery = get_field('gallery'); ?>
     
      <?php if($gallery): ?>
      <?php $ctn = 0; ?>
      
      <?php foreach($gallery as $img): ?>
        <?php if($ctn == 0): $cap = ue_get_image($img)['description']; $ctn++; endif; ?>
        <?php $tn = wp_get_attachment_image_src($img, 'full'); ?>
        
        <div class="swiper-slide slideshow__slide" 
        data-cell="<?php echo ue_get_image($img)['description']; ?> "
        data-caption="<?php echo ue_get_image($img)['caption']; ?> ">
          <div class="responsive-img">
            <img src="<?php echo $tn[0]; ?>" class="swiper-image"
            alt="<?php echo ue_get_image($img)['alt']; ?>">
          </div>
        </div>	
         
       <?php endforeach; ?>
         
       <?php endif; ?>
    </div>
  </div>
  
</div>