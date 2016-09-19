$(function() {
	var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
	console.log(scrollPercent);
	$('#scrollMeter').css("width", scrollPercent + '%');
});

$(window).scroll(function() {
	var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
	console.log(scrollPercent);
	$('#scrollMeter').css("width", scrollPercent + '%');
});