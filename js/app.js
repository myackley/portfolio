$(document).ready(function() {

	$('.mobmenu').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings('.nav-menu').toggleClass('hide');
	});

});