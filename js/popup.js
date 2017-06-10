$(document).ready(function() {
	chrome.tabs.getSelected(null, function(tab) {
		if(localStorage.getItem('request_url')) {
			var request_url = localStorage.getItem('request_url');
			var channel = localStorage.getItem('channel');
			var username = localStorage.getItem('username');
			if(!localStorage.getItem('text')) {
				text = text.replace('[TITLE]', tab.title) ;
				text = text.replace('[URL]', tab.url) ;
			} else {
				text = tab.title + ':' + tab.url;
			}
			if(!localStorage.getItem('icon_emoji')) {
				var icon_emoji = ':pushpin:';
			} else {
				var icon_emoji = localStorage.getItem('icon_emoji');
			}

			$.ajax({
				url: request_url,
				type: 'post',
				data: 'payload=' + JSON.stringify({
					"channel": channel,
					"username": username,
					"text": text,
					"icon_emoji": icon_emoji
				}),
				success: function() {
					$('#message').html("Success");
				},
				error: function(XMLHttpRequest) {
					$('#message').html("Fail:" + XMLHttpRequest.status);
				}
			});
		} else {
			$('#message').html("Request_url does not exist. please setting.");
		}
	});
});
