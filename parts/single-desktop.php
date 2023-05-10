<main class="desktop main single">
  <?php $imgs = get_field('gallery'); ?>
  <?php if($imgs):  ?>
  <ul>
    <?php foreach($imgs as $img): ?>
    <?php
    $img = ue_get_image( $img )
  ?>
    <li>
      <img src="<?=$img['srcL'][0]; ?>" alt="<?=$img['alt']; ?>" class="<?=$img['style']; ?>">
    </li>
    <?php endforeach; ?>

  </ul>

  <div class="counter">
    <span id="current">1<span> / <span id="total">10</span> <a href="#" id="popup">[more information]</a>
  </div>
  <?php endif; ?>

  <div class="popup">
    <?php echo get_the_content(); ?>
  </div>

</main>