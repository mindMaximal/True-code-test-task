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
});
