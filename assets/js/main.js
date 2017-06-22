$(window).resize(function() {

	var windowsize = $(window).width();

    if (windowsize < 320) {

		$( '#mainCont' ).insertAfter( '#mainLeft');

	}

});
