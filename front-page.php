<?php get_header();  ?>

<header>
  <?php get_template_part('parts/main', 'navigation'); ?>
</header>

<main class="front-page">
  <div class="wrapper">
    <?php $i = get_post_thumbnail_id(); ?>
    <?php $img = ue_get_image( $i ); ?>
    <img src="<?=$img['srcL'][0]; ?>">
  </div>
</main>

<footer>
  <?php get_template_part('parts/main', 'footer'); ?>
</footer>

<?php get_footer();  ?>