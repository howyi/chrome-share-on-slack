$(document).ready(function() {
	$('#request_url').val(localStorage.getItem('request_url'));
	$('#channel').val(localStorage.getItem('channel'));
	$('#username').val(localStorage.getItem('username'));
	if(!localStorage.getItem('text')) {
		$('#text').val('[TITLE]:[URL]');
	} else {
		$('#text').val(localStorage.getItem('text'));
	}
	if(!localStorage.getItem('icon_emoji')) {
		$('#icon_emoji').val(':pushpin:');
	} else {
		$('#icon_emoji').val(localStorage.getItem('icon_emoji'));
	}
	$('#save').click(function(){
		if('' != $('#request_url').val())
		{
			localStorage.setItem('request_url', $('#request_url').val());
			localStorage.setItem('channel', $('#channel').val());
			localStorage.setItem('username', $('#username').val());
			localStorage.setItem('text', $('#text').val());
			localStorage.setItem('icon_emoji', $('#icon_emoji').val());
		} else {
			window.alert('RequestURL is required.');
		}
	});
});
