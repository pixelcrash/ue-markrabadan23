<?php 
  $args = array(
  'numberposts' => -1,
  'post_type' => 'post',
  'orderby'    => 'menu_order',
  'sort_order' => 'asc',
  'fields' => 'ids'
  );
  $ps = get_posts($args);
  if($ps):
  $ctn = 1; 
?>

<?php foreach($ps as $p): ?>
<?php $i = get_post_thumbnail_id( $p ); ?>
<?php $img = ue_get_image( $i ); ?>
<?php $gallery = get_field('gallery', $p); ?>
<article class="mobile-view" id="project-<?=$i; ?>">

  <div class="mobile-slider">
    <?php if($gallery): ?>
    <?php foreach($gallery as $g): ?>
    <?php $gg = ue_get_image( $g ); ?>
    <li>
      <img src="<?=$g['srcM'][0]; ?>" alt="<?=$g['alt']; ?>">
    </li>
    <?php endforeach; ?>
    <?php endif; ?>
  </div>

  <div class="mobile-content">
    <div class="accordion-title"><?php echo get_the_title($i); ?> <a href="#" class="">[more information]</a></div>
    <div class="accordion-content"><?php echo get_the_content($i); ?></div>
  </div>

  <a href="<?php echo get_permalink( $p ); ?>" data-img="<?=$img['srcL'][0]; ?>" data-style="<?=$img['style']; ?>">
    (<?=$ctn; ?>) <?php echo get_the_title($p); ?>
  </a>

</article>
<?php $ctn++; endforeach; ?>


<?php endif; ?>