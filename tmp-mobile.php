<?php /* Template Name: Mobile Template */ ?>

<?php get_header();  ?>

<header>
  <?php get_template_part('parts/main', 'navigation'); ?>
</header>

<main>
  <?php get_template_part('parts/single', 'content'); ?>
</main>

<footer>
  <?php get_template_part('parts/main', 'footer'); ?>
</footer>

<?php get_template_part('parts/single', 'information'); ?>

<?php get_footer(); ?>