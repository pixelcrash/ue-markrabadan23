<?php

require_once(get_template_directory().'/functions/navigations.php'); 
require_once(get_template_directory().'/functions/cleanup.php'); 
require_once(get_template_directory().'/functions/enqueues.php'); 
require_once(get_template_directory().'/functions/ue-images.php'); 

function getJS($filename){
	echo get_template_directory_uri() . "/magic/" . $filename . ".js";
}

function getCSS($filename){
	echo get_template_directory_uri() . "/makeup/" . $filename . ".css";
}