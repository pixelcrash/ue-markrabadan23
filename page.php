<?php get_header();  ?>

<main class="home">
	
	<div class="nav">
		<div class="uk-grid x-padding">
			<div class="uk-width-1-2">
				<a href="<?php echo get_home_url(); ?>"><?php echo get_bloginfo( 'name' ); ?></a>
			</div>
			<div class="uk-width-1-2 uk-text-right"><a href="<?php echo get_home_url(); ?>/#information">Info</a></div>
		</div>
	</div>
	
	<div class="content" id="info">
    
    
    <div class="page-content" id="information">
      <?php the_content(); ?>
    </div>
    
	</div>
	
	<div class="disclaimer x-padding">
			<div class="uk-grid">
				<div class="uk-width-1-2"><a href="{{.Site.BaseURL}}/disclaimer">Disclaimer</a></div>
				<div class="uk-width-1-2 uk-text-right">
					<a href="{{ .Site.Params.Instagram | safeURL }}" target="_blank">Instagram</a>
				</div>
			</div>
	</div>
	
</main>


<?php get_footer();  ?>