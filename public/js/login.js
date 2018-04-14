var validate = function() {
	if ($('#username').val() == 'JavaScript' && $('#password').val() == 'JavaScript') {
		return true;
	} else {
		alert('Incorrect username or password.');
		return false;
	}
}
