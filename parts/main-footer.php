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
<ul>
  <?php foreach($ps as $p): ?>
  <?php $i = get_post_thumbnail_id( $p ); ?>
  <?php $img = ue_get_image( $i ); ?>
  <li>
    <?php var_dump($img); ?>
    <a href="<?php echo get_permalink( $p ); ?>" data-img="<?=$img['srcL']; ?>" data-style="">
      (<?=$ctn; ?>) <?php echo get_the_title($p); ?>
    </a>
  </li>
  <?php $ctn++; endforeach; ?>
</ul>

<?php endif; ?>