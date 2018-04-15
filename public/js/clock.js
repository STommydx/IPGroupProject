var updateClock = function() {
	$('.liveclock').text(new Date().toLocaleTimeString());
}

setInterval(updateClock, 250);

$(document).ready(() => {
	$('.nav-toggle').click(() => {
		$('.nav').slideToggle();
	});
});
