<div class="wrapper">
  <?php $i = get_post_thumbnail_id(); ?>
  <?php $img = ue_get_image( $i ); ?>
  <img src="<?=$img['srcL'][0]; ?>" alt="<?=$img['alt']; ?>">
</div>