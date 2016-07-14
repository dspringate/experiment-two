// Site functions
window.site = window.site || {};

site.cacheSelectors = function () {
	site.cache = {
		// General
		$html         : $('html'),
		$body         : $('document.body')
	};
};

site.init = function () {
	FastClick.attach(document.body);
	site.cacheSelectors();
	site.smoothScroll();
};

site.smoothScroll = function () {
	$(".scroll").click( function(event) {
		event.preventDefault();
		//calculate destination place
		var dest = 0;
		if ($(this.hash).offset().top > $(document).height() - $(window).height()) {
			dest = $(document).height() - $(window).height();
		} else {
			dest = $(this.hash).offset().top;
		}
		// go to destination
		$('html, body').animate({scrollTop:dest}, 1000, 'swing');
	});
};

// Initialise Site's JS on docready
$(site.init);