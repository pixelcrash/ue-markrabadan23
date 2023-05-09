<div class="slider-meta x-padding">
  
  <div class="slider-meta-wrapper uk-visible@m uk-grid">
    <div class="meta-counter uk-width-auto " style="line-height: var(--nav-height);"><span id="slidecounter"></span></div>
    <div class="meta-caption uk-width-expand uk-text-center" style="line-height: var(--nav-height);"><span id="img-caption"></span></div>
    <div class="meta-title uk-width-auto uk-text-right" style="line-height: var(--nav-height);"><?php the_title(); ?></div>
  </div>
  
  <div class="slider-meta-wrapper-mobile uk-hidden@m">
    <div class="meta-caption-mobile" style="line-height: var(--nav-height); display: flex;">
      <span id="slidecounter2" style="flex-grow: 1;"></span> <span id="img-caption-mobile" style="text-align: right; flex-grow: 1;"></span>
    </div>
  </div>
  
</div>

<script>
$(function() {
    
    centerCaption();
    
});

window.addEventListener('resize', centerCaption);


function centerCaption(){
  let wRight = $('.meta-title').width();
  $('.meta-counter').width(wRight);  
}
</script>