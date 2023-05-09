	<style>
<?php the_field('custom_styles', 'option'); ?>

.style-a{
<?php the_field('style_a', 'option'); ?>
}

.style-b{
<?php the_field('style_b', 'option'); ?>
}

.style-c{
<?php the_field('style_c', 'option'); ?>
}

.style-d{
<?php the_field('style_d', 'option'); ?>
}

.style-e{
<?php the_field('style_e', 'option'); ?>
}

.style-f{
<?php the_field('style_f', 'option'); ?>
}


.masonry-a{
<?php the_field('masonry_a', 'option'); ?>
}

.masonry-b{
<?php the_field('masonry_b', 'option'); ?>
}

.masonry-c{
<?php the_field('masonry_c', 'option'); ?>
}

.masonry-d{
<?php the_field('masonry_d', 'option'); ?>
}

.masonry-e{
<?php the_field('masonry_e', 'option'); ?>
}

.masonry-f{
<?php the_field('masonry_f', 'option'); ?>
}

@media screen and (max-width: 764px) {
	.masonry-a, .masonry-b, .masonry-c, .masonry-d, .masonry-e, .masonry-f{
		<?php the_field('masonry_mobile', 'option'); ?>
	}
}



		
:root{
	--padding-overview-header: <?php the_field('over_heading', 'option'); ?>;
	<?php the_field('root_desktop', 'option'); ?>	
}
		
@media screen and (max-width: 767px) {
:root {
	--padding-overview-header: <?php the_field('over_heading_m', 'option'); ?>;
	<?php the_field('root_mobile', 'option'); ?>
	}
}
		
#intro-hero-text{
<?php the_field('intro_hero_text', 'option'); ?>
}
		
.page-content{
	<?php the_field('page_content', 'option'); ?>
}

			
</style>

	<?php wp_footer(); ?>
</body>
	
</html> <!-- end page -->