$(document).ready(() => {

	$('.nevitog').click(
		function() {
			if ($(window).width() > 720) return;
			$(this).toggleClass('highlighted');
			$(this).next().toggleClass('expanded');
		}
	);

});
