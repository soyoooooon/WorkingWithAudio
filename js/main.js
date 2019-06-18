(() => {
	console.log("cheer up");

	let audioEl = document.querySelector('audio'),
		pauseButton = document.querySelector('#pause'),
		playButton = document.querySelector('#play'),
		loadButton = document.querySelector('#loadmore');

	function pauseAudio() {
		audioEl.pause();
	}

	function playAudio() {
		audioEl.play();

	}

	function logEnded() {
		console.log("done!");

	}

	function loadAudioTrack() {
		//set a new audio source
		audioEl.src = "audio/STP_Interstate_Love_Song.mp3";

		//load it play it
		audioEl.load();
		audioEl.play();

	}


	audioEl.addEventListener("ended", logEnded);
	pauseButton.addEventListener("click", pauseAudio);
	playButton.addEventListener("click", playAudio);
	loadButton.addEventListener("click", loadAudioTrack);

})();