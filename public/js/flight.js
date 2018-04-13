
$(function() {

	var slider = $('.slider'),
	items  = slider.find('.slider-item'),
	length = items.length,
	index  = 1,

	first  = items.filter(':first'),
	last   = items.filter(':last'),

	triggers = $('.panel-button');

	// Clone first and last item
	first.before(last.clone(true));
	last.after(first.clone(true));

	//
	slider.css({width: window.innerWidth * (length + 2)});

	$(window).resize(function(){
		slider.css({width: window.innerWidth * (length + 2)});
		slider.css({left:  -window.innerWidth * index });
	});

	triggers.on('click', function(){
		var width = window.innerWidth;
		// Wait until transition to end before allowing another click
		if(slider.is(':not(:animated)')) {
			var loop = false,
			dir = $(this).hasClass("carousel-prev") ? -1 : 1;

			slider.animate({ left: "+=" + (-width * dir) }, "slow", function() {

				index += dir;
				loop = (index === 0 || index > length);

				if (loop) {
					index = (index === 0) ? length : 1;
					slider.css({left:  -width * index });
				}
			});
		}
	});

	$('.close-button').click(function(){
		$('.drawer').toggleClass('close');
		setTimeout(function() {
			$('.drawer-panel').hide();
		}, 2000);
	});


    setTimeout(function() {
    	$('.drawer').toggleClass('close');
    }, 2000);

    setInterval(function (){
    	triggers[1].click();
    }, 5000);

});
