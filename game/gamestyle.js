$(document).ready(() => {

	$('.nevitog').click(
		function() {
			if ($(window).width() > 720) return;
			$(this).toggleClass('highlighted');
			$(this).next().toggleClass('expanded');
		}
	);

});

function preloadImage(url) {
	$('<img>').attr('src', url);
}

preloadImage('assets/X.svg');
for(let i=0;i<8;i++) preloadImage('assets/'+ i + '.jpg');
