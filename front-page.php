<!-- Front Page Template  -->
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
	- Single Desktop only the current project - only on Desktop
	- main-mobile list all proejcts - only on Mobile
-->

<main class="front-page">
  <!-- Shows only on Desktop -->
  <?php get_template_part('parts/landing', 'desktop'); ?>
  <!-- Shows only on Mobile -->
  <?php get_template_part('parts/main', 'mobile'); ?>
</main>

<!--  Footer is navigition - shows only on desktop -->
<footer>
  <?php get_template_part('parts/main', 'footer'); ?>
</footer>

<?php get_footer();  ?>