<?php

function ue_styles_scripts() {
  
    global $wp_styles; 
    
    if(is_page_template('tmp-swiperjs.php')):
    
      wp_enqueue_script( 'platform', get_template_directory_uri() . '/magic/platform/platform.js', array( 'jquery' ), filemtime(get_template_directory() . '/magic/platform/platform.js'), true );
      
      wp_enqueue_style( 'makeup', get_template_directory_uri() . '/makeup/makeup.css', array(), filemtime(get_template_directory() . '/makeup/makeup.css'), 'all' );
    
    elseif(is_page_template('tmp-swiperjsV4.php') || is_singular()):
      
      wp_enqueue_style( 'makeup', get_template_directory_uri() . '/makeup/makeup.css', array(), filemtime(get_template_directory() . '/makeup/makeup.css'), 'all' );
      wp_enqueue_style( 'reset', get_template_directory_uri() . '/makeup/sliderV4/reset.css', array(), filemtime(get_template_directory() . '/makeup/sliderV4/reset.css'), 'all' );
    
      wp_enqueue_script( 'appV4', get_template_directory_uri() . '/magic/sliderV4/app.js', array( 'jquery', 'modernizr', 'polyfill' ), filemtime(get_template_directory() . '/magic/sliderV4/app.js'), true );
    
      wp_enqueue_script( 'modernizr', get_template_directory_uri() . '/magic/sliderV4/modernizr.js', array( 'jquery' ), filemtime(get_template_directory() . '/magic/sliderV4/modernizr.js'), true );
    
      wp_enqueue_script( 'polyfill', get_template_directory_uri() . '/magic/sliderV4/polyfill.js', array( 'jquery' ), filemtime(get_template_directory() . '/magic/sliderV4/polyfill.js'), true );
      
        wp_enqueue_script( 'magic', get_template_directory_uri() . '/magic/app.js', array( 'jquery', 'platform' ), filemtime(get_template_directory() . '/magic/app.js'), true );
        
        wp_enqueue_script( 'platform', get_template_directory_uri() . '/magic/platform/platform.js', array( 'jquery' ), filemtime(get_template_directory() . '/magic/platform/platform.js'), true );
      
    else:
    
      wp_enqueue_script( 'magic', get_template_directory_uri() . '/magic/app.js', array( 'jquery', 'platform' ), filemtime(get_template_directory() . '/magic/app.js'), true );
    
      wp_enqueue_script( 'platform', get_template_directory_uri() . '/magic/platform/platform.js', array( 'jquery' ), filemtime(get_template_directory() . '/magic/platform/platform.js'), true );
     
      wp_enqueue_style( 'makeup', get_template_directory_uri() . '/makeup/makeup.css', array(), filemtime(get_template_directory() . '/makeup/makeup.css'), 'all' );
    
    endif;
      
    
    
}



add_action('wp_enqueue_scripts', 'ue_styles_scripts', 999);


add_theme_support( 'post-thumbnails' );

add_filter( 'show_admin_bar', '__return_false' );

if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}