$(document).ready(function () {

	/* NAVBAR ON SCROLL */
	var scroll, main;
	$(window).on('load scroll', function() {    
		scroll = $(window).scrollTop();
		main = $("main").offset().top;
	
		if (scroll > main) {
			$("header.navbar-main").addClass("on-scroll");
		} else {
			$("header.navbar-main").removeClass("on-scroll");
		}
	});

	/** AFFILIATIONS RESIZING BLOCKQUOTES BASED ON SIZE OF IMAGE BOX */
	var affElement, affHeight, affWidth;
	$(window).on('load resize', function() {
		affElement = $(".affiliations .aff-list .aff-wrapper .aff:first-child");
		affHeight = affElement.outerHeight();
		affWidth = affElement.outerWidth();
	
		$(".affiliations .aff-list .aff-wrapper .aff blockquote").css({
			"min-height": affHeight,
			"width": (affWidth * 2)
		});
	});

	$(".affiliations .aff-list .aff-wrapper .aff").hover(
		function() {
			$(".affiliations .aff-list .aff-wrapper .aff").addClass("inactive");
			$(this).addClass("active").removeClass("inactive");
		}, function() {
			$(".affiliations .aff-list .aff-wrapper .aff").removeClass("inactive");
		}
	);
});
