<main class="desktop main single">
  <?php $imgs = get_field('gallery'); ?>
  <?php if($imgs):  ?>
  <ul class="project-slider">
    <?php foreach($imgs as $img): ?>
    <?php
    $img = ue_get_image( $img )
  ?>
    <li>
      <img src="<?=$img['srcL'][0]; ?>" alt="<?=$img['alt']; ?>" class="<?=$img['style']; ?>">
    </li>
    <?php endforeach; ?>

  </ul>

  <!-- a[more information] opens the popup  -->
  <div class="counter">
    <span id="current">1<span> / <span id="total">10</span> <a href="#" id="popup">[more information]</a>
  </div>
  <?php endif; ?>

  <!-- This is the content for the popup  -->
  <div id="popup-wrapper">
    <?php echo get_the_content(); ?>
  </div>

</main>