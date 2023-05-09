<?php

require_once(get_template_directory().'/functions/navigations.php'); 
require_once(get_template_directory().'/functions/cleanup.php'); 
require_once(get_template_directory().'/functions/enqueues.php'); 

function getJS($filename){
	echo get_template_directory_uri() . "/magic/" . $filename . ".js";
}

function getCSS($filename){
	echo get_template_directory_uri() . "/makeup/" . $filename . ".css";
}


function ue_get_image( $attachment_id ) {

	$attachment = get_post( $attachment_id );
	$size = wp_get_attachment_metadata( $attachment_id );
	$orientation = 0;  
	$ratio = round(($size['width'] / $size['height']), 2);
	
	if( $size['width'] > $size['height'] ):
		$orientation = 0;
	endif;
	
	if( $size['width'] < $size['height'] ):
		$orientation = 1;
	endif;
	
	if( $size['width'] == $size['height'] ):
		$orientation = 2;
	endif;
	

	return array(
	    'alt' => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
	    'caption' => wptexturize($attachment->post_excerpt),
	    'description' => $attachment->post_content,
	    'href' => get_permalink( $attachment->ID ),
	    'src' => $attachment->guid,
	    'title' => $attachment->post_title,
			'width' => $size['width'],
			'height' => $size['height'],
			'orientation' => $orientation,
			'ratio' => $ratio
	);
}