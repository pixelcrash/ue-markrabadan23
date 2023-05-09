<!doctype html>
<html class="no-js"  <?php language_attributes(); ?>>
<head>
	<meta charset="utf-8">
	<!-- Force IE to use the latest rendering engine available -->
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta
      name="viewport"
      content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1"
    />
	
	<script src="<?php getJS('jquery-min'); ?>"></script>
	<script src="<?php getJS('uikit'); ?>"></script>
	<script src="<?php getJS('swiper-bundle'); ?>"></script>
	<script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js"></script>
	
	<link rel="icon" href="<?php echo get_template_directory_uri(); ?>/favicon.ico">
	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
	<?php wp_head(); ?>

</head>


		
<body <?php body_class(); ?>>