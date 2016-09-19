$(function() {
	ScrollIndicator();
});

$(window).scroll(function() {
	ScrollIndicator()
});


function ScrollIndicator(){
	var scrollPercent = 100 * $(window).scrollTop() / ($(document).height() - $(window).height());
	$('#scrollMeter').css("width", scrollPercent + '%');1
}