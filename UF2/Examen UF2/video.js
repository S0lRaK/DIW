// Gets the all the document ready for jQuery
$(document).ready(function()
{
	var vid = document.getElementById('video');
	// Clicking on the rigth button will play the video
	$('#btnPlay').click(function()
	{
		vid.play();
	});
	// Clicking on the rigth button will pause the video
	$('#btnPause').click(function()
	{
		vid.pause();
	});
	//
	$('#sliderSpeed').change(function()
	{
		$('#video').get(0).playbackRate = $('#sliderSpeed').val();
		$('#lblSpeed').text($(this).val());
	})
});