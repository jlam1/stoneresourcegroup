$(document).ready(function () {

	/* NAVBAR */
	$(window).scroll(function() {    
		var scroll = $(window).scrollTop();
		var main = $("main").offset().top;
	
		if (scroll > main) {
			$("header.navbar-main").addClass("on-scroll");
		} else {
			$("header.navbar-main").removeClass("on-scroll");
		}
	});

});