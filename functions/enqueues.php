<?php

function ue_styles_scripts() {
  
    global $wp_styles; 
    
    wp_enqueue_script( 'magic', get_template_directory_uri() . '/magic/magic.js', array( 'jquery' ), filemtime(get_template_directory() . '/magic/magic.js'), true );
    wp_enqueue_style( 'makeup', get_template_directory_uri() . '/makeup/makeup.css', array(), filemtime(get_template_directory() . '/makeup/makeup.css'), 'all' );
        
}

add_action('wp_enqueue_scripts', 'ue_styles_scripts', 999);


add_theme_support( 'post-thumbnails' );

add_filter( 'show_admin_bar', '__return_false' );

if( function_exists('acf_add_options_page') ) {
	acf_add_options_page();
}