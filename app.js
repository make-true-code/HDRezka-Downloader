jQuery( document ).ready(function($) {
	 var el = $("script").text().replace(new RegExp("\\\\/|/\\\\", "g"), "/");
	 var str_1080p = el.substr(el.indexOf("[1080p]") + 7);
	 var str_720p = el.substr(el.indexOf("[720p]") + 6);
	 var result_1080p = str_1080p.split('mp4')[0];
	 var result_720p = str_720p.split('mp4')[0];
	 var link_1080p = "<a href='" + result_1080p + "mp4' target='_blank' download>Скачать 1080p</a>";
	 var link_720p = "<a href='" + result_720p + "mp4' target='_blank' download>Скачать 720p</a></br>";
	 
	 $(link_1080p).prependTo($('.b-post__rating_table'));
	 $(link_720p).prependTo($('.b-post__rating_table'));
	 
	 });