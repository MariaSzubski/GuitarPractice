// ------------------------------------- Timer Code Block
var oneMinuteTimer = (
	function(){

		// ------------------------------- Start & Reset Functions
		function startTimer() {
			sec = 59;
			countdown = setInterval(currentTime, 1000);
			arcAnim = setInterval(drawRingTimer, 50);
			toggle = false;
			toggleBtn.setAttribute('src', 'img/reset.svg');
		}

		function resetTimer(){
			clearInterval(countdown);
			clearInterval(arcAnim);
			toggle = true;
			toggleBtn.setAttribute('src', 'img/play.svg');
			timeValue.innerHTML = "1:00";
			rSec=0;
			ringTimer.clearRect(0,0,174,174);
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
					clearInterval(arcAnim);
					rSec=0;
					break;
				default:
					timeValue.innerHTML = 0 + ':' + sec;
					break;
			}
			sec--;
		}

		// ------------------------------- Ring timer
		function drawRingTimer(){
			// Reset Canvas
			ringTimer.clearRect(0,0,174,174);
			// Increment ring length
			/* length change per frame = [ (radian multiplier) / (60 seconds * frames per second) ] * (elapsed seconds) */
			length_i = ( 2 / (60*20) ) * rSec;

			/* count from top of circle) */
			arcVal = 1.5 + length_i;

			/* calculate radians */
			endPoint = arcVal * Math.PI;

			// Draw timer ring
			ringTimer.beginPath();
			ringTimer.arc (
				87,					// x position
				87,					// y position
				82,					// radius
				(1.5 * Math.PI),	// start
				endPoint,			// end
				true					// counter-clockwise
			);
			ringTimer.lineWidth = 10;
			ringTimer.strokeStyle='teal';
			ringTimer.stroke();
			rSec++;
		}



		// ------------------------------- Variables
		var countdown, sec;
		var toggle = true;

		var rSec=0;
		var length_i, endPoint, arcVal;


		var timer = document.getElementById('timeValue');
		var startReset = document.getElementById('startReset');
		var toggleBtn = document.getElementById('toggleBtn');
		var ringTimer = document.getElementById('ringTimer').getContext('2d');
		var ringTrack = new Image();

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
