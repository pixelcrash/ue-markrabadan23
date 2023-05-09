<?php
// Register menus
register_nav_menus(
	array(
		'main-nav'		=> __( 'The Main Menu', 'ue-wp' ),		// Main nav in header
		'offcanvas-nav'	=> __( 'The Off-Canvas Menu', 'ue-wp' ),	// Off-Canvas nav
		'footer-links'	=> __( 'Footer Links', 'ue-wp' )			// Secondary nav in footer
	)
);

// The Top Menu
function ue_top_nav() {
	wp_nav_menu(array(
		'container'			=> false,						// Remove nav container
		'menu_id'			=> 'main-nav',					// Adding custom nav id
		'menu_class'		=> 'medium-horizontal menu',	// Adding custom nav class
		'items_wrap'		=> '<ul id="%1$s" class="%2$s" data-responsive-menu="accordion medium-dropdown">%3$s</ul>',
		'theme_location'	=> 'main-nav',					// Where it's located in the theme
		'depth'				=> 5,							// Limit the depth of the nav
		'fallback_cb'		=> false,						// Fallback function (see below)
		'walker'			=> new Topbar_Menu_Walker()
	));
}

// Big thanks to Brett Mason (https://github.com/brettsmason) for the awesome walker
class Topbar_Menu_Walker extends Walker_Nav_Menu {
	function start_lvl(&$output, $depth = 0, $args = Array() ) {
		$indent = str_repeat("\t", $depth);
		$output .= "\n$indent<ul class=\"menu\">\n";
	}
}

// The Off Canvas Menu
function ue_off_canvas_nav() {
	wp_nav_menu(array(
		'container'			=> false,							// Remove nav container
		'menu_id'			=> 'offcanvas-nav',					// Adding custom nav id
		'menu_class'		=> 'vertical menu accordion-menu',	// Adding custom nav class
		'items_wrap'		=> '<ul id="%1$s" class="%2$s" data-accordion-menu>%3$s</ul>',
		'theme_location'	=> 'offcanvas-nav',					// Where it's located in the theme
		'depth'				=> 5,								// Limit the depth of the nav
		'fallback_cb'		=> false,							// Fallback function (see below)
		'walker'			=> new Off_Canvas_Menu_Walker()
	));
}

class Off_Canvas_Menu_Walker extends Walker_Nav_Menu {
	function start_lvl(&$output, $depth = 0, $args = Array() ) {
		$indent = str_repeat("\t", $depth);
		$output .= "\n$indent<ul class=\"vertical menu\">\n";
	}
}

// The Footer Menu
function ue_footer_links() {
	wp_nav_menu(array(
		'container'			=> 'false',				// Remove nav container
		'menu_id'			=> 'footer-links',		// Adding custom nav id
		'menu_class'		=> 'menu',				// Adding custom nav class
		'theme_location'	=> 'footer-links',		// Where it's located in the theme
		'depth'				=> 0,					// Limit the depth of the nav
		'fallback_cb'		=> ''					// Fallback function
	));
} /* End Footer Menu */

// Header Fallback Menu
function ue_main_nav_fallback() {
	wp_page_menu( array(
		'show_home'		=> true,
		'menu_class'	=> '',		// Adding custom nav class
		'include'		=> '',
		'exclude'		=> '',
		'echo'			=> true,
		'link_before'	=> '',		// Before each link
		'link_after'	=> ''		// After each link
	));
}

// Footer Fallback Menu
function ue_footer_links_fallback() {
	/* You can put a default here if you like */
}

// Add Foundation active class to menu
function required_active_nav_class( $classes, $item ) {
	if ( $item->current == 1 || $item->current_item_ancestor == true ) {
		$classes[] = 'active';
	}
	return $classes;
}
add_filter( 'nav_menu_css_class', 'required_active_nav_class', 10, 2 );



function ue_page_navi() {
		global $wp_query;
		$big = 999999999; // This needs to be an unlikely integer
		// For more options and info view the docs for paginate_links()
		// http://codex.wordpress.org/Function_Reference/paginate_links
		$paginate_links = paginate_links( array(
			'base' => str_replace( $big, '%#%', html_entity_decode( get_pagenum_link( $big ) ) ),
			'current' => max( 1, get_query_var( 'paged' ) ),
			'total' => $wp_query->max_num_pages,
			'mid_size' => 5,
			'prev_next' => true,
		    'prev_text' => __( '&laquo;', 'jointswp' ),
		    'next_text' => __( '&raquo;', 'jointswp' ),
			'type' => 'list',
		) );
		$paginate_links = str_replace( "<ul class='page-numbers'>", "<ul class='pagination'>", $paginate_links );
		$paginate_links = str_replace( '<li><span class="page-numbers dots">', "<li><a href='#'>", $paginate_links );
		$paginate_links = str_replace( "<li><span class='page-numbers current'>", "<li class='current'>", $paginate_links );
		$paginate_links = str_replace( '</span>', '</a>', $paginate_links );
		$paginate_links = str_replace( "<li><a href='#'>&hellip;</a></li>", "<li><span class='dots'>&hellip;</span></li>", $paginate_links );
		$paginate_links = preg_replace( '/\s*page-numbers/', '', $paginate_links );
		// Display the pagination if more than one page is found.
		if ( $paginate_links ) {
			echo '<div class="page-navigation">';
			echo $paginate_links;
			echo '</div><!--// end .pagination -->';
		}
	}