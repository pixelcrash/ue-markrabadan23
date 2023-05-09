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
?>
<ul>
  <?php foreach($ps as $p: ?>
  <li><a href="">(1) project one <?php var_dump($p); ?></a></li>
  <?php endforeach; ?>
</ul>

<?php endif; ?>