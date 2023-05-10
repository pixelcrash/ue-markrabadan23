<!-- Single View for project Desktop / Mobile list all projects  -->
<!-- 
	- Slideshow   
	- Counter
	- more info popup
-->
<?php get_header();  ?>

<!-- This is the navigation part for desktop and mobile  -->
<header>
  <?php get_template_part('parts/main', 'navigation'); ?>
</header>

<!-- Main 
	- Single Desktop only the current project 
	- main-mobile list all proejcts
-->
<main>
  <?php get_template_part('parts/single', 'desktop'); ?>
  <?php get_template_part('parts/main', 'mobile'); ?>
</main>

<!-- 
	Footer is navigition - but not on mobile
 -->
<footer>
  <?php get_template_part('parts/main', 'footer'); ?>
</footer>

<?php get_footer(); ?>