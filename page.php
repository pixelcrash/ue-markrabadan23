<?php get_header();  ?>

<header>
  <?php get_template_part('parts/main', 'navigation'); ?>
</header>

<main class="page">
  <?php the_content(); ?>
</main>

<footer>
  <?php get_template_part('parts/main', 'footer'); ?>
</footer>

<?php get_footer();  ?>