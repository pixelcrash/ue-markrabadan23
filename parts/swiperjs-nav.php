<div class="slider-nav x-padding uk-grid">
  <div class="uk-width-1-2" style="line-height: var(--nav-height);">
    <a href="<?php echo get_home_url(); ?>"><?php echo get_bloginfo( 'name' ); ?></a>
    <input type="hidden" value="<?php the_title(); ?>" id="emptyCaption">
  </div>
  <div class="uk-width-1-2 uk-text-right" style="line-height: var(--nav-height);">
    <a href="<?php echo get_home_url(); ?>/#information">Info</a>
  </div>
</div>