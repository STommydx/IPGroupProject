$(document).ready(() => {

	$('.nevitog').click(
		function() {
			if ($(window).width() > 720) return;
			$(this).toggleClass('highlighted');
			$(this).next().toggleClass('expanded');
		}
	);

});

$(window).on('load', () => $('.countdown').hide())

function preloadImage(url, callback) {
	let $newimg = $('<img>');
	$newimg.attr('src', url);
	$newimg.on('load', callback);
}

preloadImage('images/X.svg');
for(let i=0;i<8;i++) preloadImage('images/'+ i + '.jpg');
