// ------------------------------------- Timer Code Block
var oneMinuteTimer = (
	function(){
		// ------------------------------- Start & Reset Functions
		function startTimer() {
			sec = 59;
			countdown = setInterval(currentTime, 1000);
			toggle = false;
			toggleBtn.setAttribute('src', 'img/reset.svg');
		}

		function resetTimer(){
			clearInterval(countdown);
			toggle = true;
			toggleBtn.setAttribute('src', 'img/play.svg');
			timeValue.innerHTML = "1:00";
		}

		// ------------------------------- Countdown Output
		function currentTime() {
			switch(true){
				case (sec < 10 && sec > 0):
					timeValue.innerHTML = 0 + ':0' + sec;
					break;
				case (sec === 0):
					timeValue.innerHTML = 0 + ':0' + sec;
					clearInterval(countdown);
					break;
				default:
					timeValue.innerHTML = 0 + ':' + sec;
					break;
			}
			sec--;
		}

		// ------------------------------- Variables
		var countdown, sec;
		var toggle = true;
		var timer = document.getElementById('timeValue');
		var startReset = document.getElementById('startReset');
		var toggleBtn = document.getElementById('toggleBtn');

		// ------------------------------- Start/Reset Events
		startReset.onclick = function(){
			switch(toggle){
				case true:
					startTimer();
					break;
				case false:
					resetTimer();
					break;
			}
		};

	}()
);

var overlayContainer = document.getElementById('addChordOverlay');
var newChordCombo = document.getElementById('newChordCombo');
var submitChordCombo = document.getElementById('submitChordCombo');

submitChordCombo.onclick = function(){
	console.log('click');
	overlayContainer.className += " hidden ";
};

newChordCombo.onclick = function(){
	console.log('click');
	overlayContainer.className = "overlayContainer";
};
