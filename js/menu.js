jQuery(document).ready(function($) { 
	var current_location = window.location.href.split('/'); 
	var page;

	page = current_location[current_location.length - 1]; 
	$('.scale a[href*="' + page + '"]').addClass('current');

	if (page.localeCompare("all-slideshow") === 0) {
		$('.scale a[href="/metamocoordinate/all"]').addClass('current');
	}
});