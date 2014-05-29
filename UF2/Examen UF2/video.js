// Gets all the document ready for jQuery
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
	// Slider changes video speed and its label
	$('#sliderSpeed').change(function()
	{
		$('#video').playbackRate = $('#sliderSpeed').val();
		$('#lblSpeed').text('x' + $(this).val());
	})
	//
	var pBar = document.getElementById('progressBar');
	vid.addEventListener('timeupdate', function()
	{
		// gets % video played
		var percent = Math.floor((100 / vid.duration) * vid.currentTime);
		pBar.value = percent;
		// sets and changes progress bar's attributes
		$('#progressBar').attr(
		{
			aria-valuenow: percent,
			style: 'width: ' + percent + '%;'
		});
		// prints % video played
		pBar.getElementById('progressPercent').innerHTML = '%' + percent;
	}, false)
});