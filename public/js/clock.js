var updateClock = function() {
	$('.liveclock').text(new Date().toLocaleTimeString());
}

setInterval(updateClock, 250);
