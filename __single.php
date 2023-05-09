<?php get_header();  ?>

<main class="work-single">
	
	<div class="nav">
		<div class="uk-grid x-padding">
			<div class="uk-width-1-2">
				<a href="<?php echo get_home_url(); ?>"><?php echo get_bloginfo( 'name' ); ?></a>
			</div>
			<div class="uk-width-1-2 uk-text-right"><a href="<?php echo get_home_url(); ?>/#information">Info</a></div>
		</div>
	</div>
	
	<div class="single-content">
		
		<div class="swiper-area">
			
			<div id="swiper-ele" class="swiper" data-cursor="none">
				
				 <div class="swiper-wrapper">
					 <?php $gallery = get_field('gallery'); ?>
					
					 <?php if($gallery): ?>
					 <?php $ctn = 0; ?>
					 
					 <?php foreach($gallery as $img): ?>
						 <?php if($ctn == 0): $cap = ue_get_image($img)['description']; $ctn++; endif; ?>
						 <div class="swiper-slide" 
						 data-cell="<?php echo ue_get_image($img)['description']; ?> "
						 data-caption="<?php echo ue_get_image($img)['caption']; ?> "
						 >
						<?php $tn = wp_get_attachment_image_src($img, 'full'); ?>
							<img src="<?php echo $tn[0]; ?>" class="swiper-image">
							</div>	
						<?php endforeach; ?>
							
						<?php endif; ?>
						
					</div>
						
					<div class="swiper-navigation">
						<div class="swiper-next"></div>
						<div class="swiper-prev"></div>
					</div>
					
				</div>
		</div> 
		
	</div>
	
	<div class="single-meta">
		
		<div class="uk-grid uk-visible@s">
			<div class="uk-width-1-3"><span class="x-padding y-padding display-block">
				<span id="slidecounter"></span> 
			</span></div>
			<div class="uk-width-1-3 uk-text-center"><span class="x-padding y-padding display-block" id="img-caption"><?php echo $cap; ?></span></div>
			<div class="uk-width-1-3 uk-text-right"><span class="x-padding y-padding display-block"><?php the_title(); ?></span></div>
		</div>
		
		
		<div class="uk-grid uk-hidden@s">
			<div class="uk-width-1-1">
				<span class="x-padding display-block" id="img-caption-mobile"> <?php echo $cap; ?></span>
			</div>
		</div>
		 
	</div>

</main>


<?php get_footer();  ?>