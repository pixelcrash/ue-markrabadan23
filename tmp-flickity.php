<?php /* Template Name: Slider Flickity*/ ?>
<?php get_header();  ?>


<main class="flickity-main-slider">
	
	<?php get_template_part('parts/flickity', 'nav'); ?>
	
	<?php get_template_part('parts/flickity', 'gallery'); ?>
	
	<?php get_template_part('parts/flickity', 'meta'); ?>
	
</main>


<?php get_footer();  ?>