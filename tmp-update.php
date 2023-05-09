<?php /* Template Name: Mobile Update Slideshow */ ?>
<?php get_header();  ?>

<script>
//  $('.swiper-slider').css('height', (window.innerHeight + "px"));
	

</script>

<main class="swiper-slider">
	
	<?php get_template_part('parts/swiper', 'nav'); ?>
	
	<?php get_template_part('parts/swiper', 'gallery'); ?>
	
	<?php get_template_part('parts/swiper', 'meta'); ?>
	
</main>


<?php get_footer();  ?>