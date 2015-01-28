$(document).ready(function() {

	$('.mobmenu').click(function(event) {
		event.preventDefault();
		$(this).toggleClass('active');
		$(this).siblings('.nav-menu').toggleClass('hide');
	});

	$('.nav .container').on('click','.active + ul li a', function() {
		$('.mobmenu').toggleClass('active');
		$('.nav-menu').toggleClass('hide');
	});

});