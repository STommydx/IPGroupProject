$(document).ready(() => {

	$('.nevitog').click(
		function() {
			if ($(window).width() > 720) return;
			$(this).toggleClass('highlighted');
			$(this).next().toggleClass('expanded');
		}
	);

});

function preloadImage(url, callback) {
	let $newimg = $('<img>');
	$newimg.attr('src', url);
	$newimg.on('load', callback);
}

preloadImage('assets/X.svg');
for(let i=0;i<8;i++) preloadImage('assets/'+ i + '.jpg', alert(i));
