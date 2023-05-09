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
  <li>
    <a href="<?php echo get_permalink( $p ); ?>">
      (<?=$ctn; ?>) <?php echo get_the_title($p); $ctn++;?>
    </a>
  </li>
  <?php endforeach; ?>
</ul>

<?php endif; ?>