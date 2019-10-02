$(function() {

	$(".data-picker").datepicker({
		language: "ru",
		dateFormat: "dd.mm.yyyy",
		position: "top center",
		offset: 35
	});

	$('.menu-button button').click(function (e) { 
		e.preventDefault();
		$('.menu-button button').toggleClass('button-active');
		$('#home .menu').toggleClass('menu-active');
	});

	var muted = true;

	$('.music button').click(function (e) { 
		e.preventDefault();
		$('.music button').toggleClass('button_active');
		if ( muted == true) {
			$('.video-target').prop('muted', false);
			muted = false;
		} else {
			$('.video-target').prop('muted', true);
			muted = true;
		}
	});
});
