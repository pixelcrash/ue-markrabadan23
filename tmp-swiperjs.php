<?php /* Template Name: Swiperjs V2 */ ?>
<?php get_header();  ?>

<header>
	<?php get_template_part('parts/swiperjs', 'nav'); ?>
</header>
<main class="swiperjs">
	
		<?php get_template_part('parts/swiperjs', 'slider'); ?>

</main>
<footer>
		<?php get_template_part('parts/swiperjs', 'meta'); ?>
</footer>


<?php get_footer();  ?>