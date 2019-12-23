jQuery(document).ready(function() {
	jQuery(window).on('load resize', function(){

		if (jQuery('#top-slide').length){

			var winHeight = jQuery(window).height();
			var headerHeight  = jQuery('#header').outerHeight();
			var footerHeight  = jQuery('#footer').outerHeight();
			jQuery('#top-slide').css({ height: winHeight - headerHeight - footerHeight});
		}
	});

	jQuery("#mmenu").mmenu({
		slidingSubmenus: true,
		extensions: [
			"pagedim-black",
			"border-none"
		],
		"offCanvas": {"zposition": "front"},
		"navbars": [{
			"position": "top",
			"content": [
				"prev","title","close"
			]},
		{
		"position": "top",
		"content": [
			"<a href='https://twitter.com/MetamorphoseEng?ref_src=twsrc%5Etfw' target='_blank'><i class='fab fa-twitter'></i></a>",
			"<a href='https://www.facebook.com/metamorphose.temps.de.fille' target='_blank'><i class='fab fa-facebook'></i></a>",
			"<a href='https://www.instagram.com/metamorphosetempsdefille/' target='_blank'><i class='fab fa-instagram'></i></a>",
			"<a href='http://weibo.com/p/1006065983885270/home' target='_blank'><i class='fab fa-weibo'></i></a>"
		]}]
	});

//sticky-header
	  var sticyHeader = jQuery('.header');
	  jQuery(window).scroll(function () {
	    if ( jQuery(this).scrollTop() > 200 ) {
	      sticyHeader.addClass('sticky');
	    } else {
	      sticyHeader.removeClass('sticky');
	    }
	  });

	  var startPos = 0,winScrollTop = 0;
	  jQuery(window).on('scroll',function(){
	      winScrollTop = jQuery(this).scrollTop();
	      if (winScrollTop >= startPos) {
	          jQuery('.header').addClass('scrDown');
	      } else {
	          jQuery('.header').removeClass('scrDown');
	      }
	      startPos = winScrollTop;
	  });

//page-top
		var topBtn = jQuery('#page-top');
    topBtn.hide();
    jQuery(window).scroll(function () {
        if (jQuery(this).scrollTop() > 50) {
            topBtn.fadeIn();
        } else {
            topBtn.fadeOut();
        }
    });
    topBtn.click(function () {
        jQuery('body,html').animate({
            scrollTop: 0
        }, 500);
        return false;
    });


});
