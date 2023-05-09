<?php /* Template Name: Masonry */ ?>
<?php get_header();  ?>

<main class="home">
	<div id="intro-hero-text"><span>Mark Rabadan</span></div>
	<div class="nav">
		<div class="uk-grid x-padding">
			<div class="uk-width-1-2">
				<a href="<?php echo get_home_url(); ?>"><?php echo get_bloginfo( 'name' ); ?></a>
			</div>
			<div class="uk-width-1-2 uk-text-right"><a href="<?php echo get_home_url(); ?>/#information">Info</a></div>
		</div>
	</div>
	
	<div class="content x-padding" id="info">
    
    <div class="grid">
				<div class="grid-sizer"></div>
				
				<?php
					$args = array(
						'numberposts' => -1,
						'post_type'   => 'post'
					);

					$works = get_posts( $args );
					if($works):
						foreach($works as $work):
				?>
      
        <div class="grid-item masonry-<?php the_field('styles', $work->ID); ?>">       
        <article class="">
          <div class="">
            <a href="<?php echo get_permalink($work->ID); ?>">
            <?php 
							$tnID = get_post_thumbnail_id($work->ID);
							$tn = wp_get_attachment_image($tnID, array('1200', '1200'), "", array( "class" => "work-img" ));
							echo $tn;
						?>
              <h2>
                <?php echo $work->post_title;  ?>
              </h2>  
            </a> 
          </div> 
        </article>
				</div> 
			<?php endforeach; ?>
		<?php endif; ?>    
      </div>
    </div>
		<?php 
		$content_id = get_field('info_text', 'option');
		if($content_id): 
		?>
    <div class="page-content" id="information">
			<?php
			 
       	echo  get_post($content_id[0])->post_content;   
		 	 
			 ?>
			
    </div>
		<?php endif; ?>
    
	</div>
	
	<div class="disclaimer x-padding">
			<div class="uk-grid">
				<div class="uk-width-1-2"><a href="<?php the_field('imprint', 'option'); ?>">Imprint / Disclaimer</a></div>
				<div class="uk-width-1-2 uk-text-right">
					<?php $instagram = get_field('instagram', 'option'); ?>
					
					<a href="<?=$instagram['url']; ?>" target="<?=$instagram['target']; ?>"><?=$instagram['title'];?></a>
				</div>
			</div>
	</div>
	
</main>


<?php get_footer();  ?>