<div class="slideshow__area">
    <div class="slideshow__el swiper-container slideshow-type--scroll-3" data-type="scroll">
        <div class="swiper-wrapper">
          
      <?php $gallery = get_field('gallery'); ?>
     
      <?php if($gallery): ?>
      <?php $ctn = 0; ?>
      
      <?php foreach($gallery as $img): ?>
        <?php 
        if($ctn == 0): 
          $cap = ue_get_image($img)['description']; 
          $ctn++; 
        endif; ?>
        
        <?php 
          $tn = wp_get_attachment_image_src($img, 'full'); 
          $S = ue_get_image($img);
        ?>
        
        <!-- SLIDE -->
        <div class="slideshow__slide swiper-slide" data-index="0">
            <div class="caption" id="captionL">
                <?php echo $S['description']; ?>
            </div>
            
            <div class="caption" id="captionS">
                <?php echo $S['caption']; ?>
            </div>
            <!--data ratio is for scaling image in here -->
            <div class="responsive-img" data-ratio="<?php echo $S['ratio']; ?>">
                <img 
                src="data:<?php echo $tn[0]; ?>" 
                data-srcset="<?php echo $tn[0]; ?>" 
                data-sizes="auto" 
                data-cell="<?php $S['description']; ?>"
                data-caption="<?php $S['caption']; ?>">
                class="lazyload lazy-fade">
            </div>
        </div>
        
        <!-- /SLIDE -->
        
       <?php endforeach; ?>
       
    
         
       <?php endif; ?>
    </div>
  </div>
  </div>  