<?php 
	
add_theme_support( 'post-thumbnails' );
add_image_size ( 'XS', 480 , 480 , false ) ;
add_image_size ( 'S', 960 , 960 , false ) ;
add_image_size ( 'M', 1280 , 1280 , false ) ;
add_image_size ( 'L', 1920 , 1920 , false ) ;
add_image_size ( 'XL', 2400 , 2400 , false ) ;

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

  if($orientation = 0):
    $style = "landscape centered";
  else:
    $style = "portrait centered";
  endif;
	
  $style = ( get_field('orientation_style', $attachment->ID) ) ? get_field('orientation_style', $attachment->ID) : $style;

	return array(
	    'alt' => get_post_meta( $attachment->ID, '_wp_attachment_image_alt', true ),
	    'caption' => wptexturize($attachment->post_excerpt),
	    'description' => $attachment->post_content,
	    'href' => get_permalink( $attachment->ID ),
	    'src' => $attachment->guid,
      'srcSX' => wp_get_attachment_image_src($attachment->ID, 'XS'),
      'srcS' => wp_get_attachment_image_src($attachment->ID, 'S'),
      'srcM' => wp_get_attachment_image_src($attachment->ID, 'M'),
      'srcL' => wp_get_attachment_image_src($attachment->ID, 'L'),
      'srcXL' => wp_get_attachment_image_src($attachment->ID, 'XL'),
	    'title' => $attachment->post_title,
			'width' => $size['width'],
			'height' => $size['height'],
			'orientation' => $orientation,
			'ratio' => $ratio,
      'style' => $style  
	);
}





?>