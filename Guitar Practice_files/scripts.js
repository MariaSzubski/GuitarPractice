/* ____________________________________ Timer */
if(document.getElementById('chordChg')){
	var oneMinuteTimer = (
		function(){

			/* ------------------------------ On Start/Reset */
			function startTimer() {
				n_sec = 60;
				a_sec = 0;
				toggle_startStop = false;
				toggle_btn.setAttribute('src', 'img/reset.svg');

				drawNum();	// Write n_sec before first interval
				drawArc();	// Draw arc before first interval
				arc_interval = setInterval(drawArc, 500); // match arc frame rate
				num_interval = setInterval(drawNum, 1000);
			}

			function resetTimer(){
				clearInterval(arc_interval);
				clearInterval(num_interval);
				a_timer.clearRect(0 , 0, 174, 174);	// Reset canvas

				toggle_startStop = true;
				toggle_btn.setAttribute('src', 'img/play.svg');
				n_timer.nodeValue = "1:00";
			}

			/* ------------------------------ Countdown Output */
			function drawNum() {
				switch(true){
					case (n_sec < 10 && n_sec > 0):
						n_timer.nodeValue = 0 + ':0' + n_sec;
						break;
					case (n_sec === 0):
						clearInterval(num_interval);
						clearInterval(arc_interval);
						a_timer.clearRect(0 , 0, 174, 174); // Reset Canvas
						n_timer.nodeValue = 0 + ':0' + n_sec;
						break;
					case (n_sec === 60):
						n_timer.nodeValue = '1:00';
						break;
					default:
						n_timer.nodeValue = 0 + ':' + n_sec;
						break;
				}
				n_sec--;
			}

			/* ------------------------------ Arc Timer */
			function drawArc(){
				// Reset Canvas
				a_timer.clearRect(0 , 0, 174, 174);

				// Length of arc increment
				length_i =	(2 / (60 * 2)) * a_sec;
								/*[ (radian multiplier) / (60 seconds * frames per second) ] * (elapsed intervals) */

				// Start counting from top of circle
				a_val = 1.5 + length_i;

				// Convert to radians
				a_endPoint = a_val * Math.PI;

				// Draw timer arc
				a_timer.beginPath();
				a_timer.arc(
					87,					// x position
					87,					// y position
					82,					// radius
					(3.5 * Math.PI),	// start @ top + 2pi
					a_endPoint,			// end
					true					// counter-clockwise
				);
				a_timer.lineWidth = 10;
				a_timer.strokeStyle = 'teal';
				a_timer.stroke();
				a_sec += 1;
			}

			/* ------------------------------ Variables */
			var 	n_sec,		// Number countdown value
					n_interval;	// Number interval

			var 	a_sec,		// Arc countdown value
					a_interval,	// Arc interval
					length_i,	// Arc increment
					a_val,		// Arc increment, top of circle
					a_endPoint;	// Arc increment, in radians

			var 	toggle_startStop = true; // Start/Reset countdown on click
			var 	toggle_btn = document.getElementById('toggle_btn');

			var 	timer_container = document.getElementById('timer_container');
			var 	n_timer = document.getElementById('n_timer').firstChild;
			var 	a_timer = document.getElementById('a_timer').getContext('2d');

			/* ------------------------------ Start/Reset on Click */
			timer_container.onclick = function(){
				switch(toggle_startStop){
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

	/* ____________________________________ New Chord Overlay */
	var overlayContainer = document.getElementById('addChordOverlay');
	var newChordCombo = document.getElementById('newChordCombo');
	var submitChordCombo = document.getElementById('submitChordCombo');

	submitChordCombo.onclick = function(){
		overlayContainer.className += " hidden ";
	};

	newChordCombo.onclick = function(){
		overlayContainer.className = "overlayContainer";
	};
}
