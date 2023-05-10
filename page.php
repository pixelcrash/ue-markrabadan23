<!-- Page Template  -->
<!-- TEXT only -->
<?php get_header();  ?>

<!-- This is the navigation part for desktop and mobile  -->
<header>
  <?php get_template_part('parts/main', 'navigation'); ?>
</header>

<main class="page">
  <?php the_content(); ?>
</main>

<!--  Footer is navigition - but not on mobile -->
<footer>
  <?php get_template_part('parts/main', 'footer'); ?>
</footer>

<?php get_footer();  ?>