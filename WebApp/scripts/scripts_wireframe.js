/* ____________________________________ Timer */
if(document.getElementById('exercises')){
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
				arc.clearRect(0 , 0, 174, 174);	// Reset canvas

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
						arc.clearRect(0 , 0, 174, 174); // Reset Canvas
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
				arc.clearRect(0 , 0, 312, 156);

				// Length of arc increment
				length_i =	(2 / (60 * 2)) * a_sec;
								/*[ (radian multiplier) / (60 seconds * frames per second) ] * (elapsed intervals) */

				// Start counting from top of circle
				a_val = 1.5 + length_i;

				// Convert to radians
				a_endPoint = a_val * Math.PI;

				// Draw timer arc
				arc.beginPath();
				arc.arc(
					156,					// x position
					78,				// y position
					82,					// radius
					(3.5 * Math.PI),	// start @ top + 2pi
					a_endPoint,			// end
					true				// counter-clockwise
				);
				arc.lineWidth = 7;
				arc.strokeStyle = 'orange';
				arc.stroke();
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

			var 	timer_container = document.getElementById('timer');
			var 	n_timer = document.getElementById('n_timer').firstChild;
			var 	arc = document.getElementById('arc').getContext('2d');

			/* ------------------------------ Start/Reset on Click */
			timer.onclick = function(){
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
}



/* ____________________________________ Exercise List*/
if(document.getElementById('list')){
	var filter = document.getElementById('chordList').getElementsByTagName('nav');
	var sort = document.getElementById('sortOverlay');
	var radioBtn = sort.getElementsByTagName('input');
	sort.hidden = true;


	/*------------------- Show/Hide Overlay */
	function toggleSort(){
		if(sort.hidden){
			sort.hidden = false;
		} else{
			sort.hidden = true;
		}
		return false;
	}

	/*-------------------Change Text */
	function toggleFilter(){
		var sortType = document.getElementById('sortType');
		var sortOrder = document.getElementById('sortOrder');

		for (var i = 0; i < radioBtn.length; i++){
			if (radioBtn[i].checked && i < 2){
				sortType.innerText = radioBtn[i].value;
			} else if (radioBtn[i].checked && i > 1){
				sortOrder.innerText = radioBtn[i].value;
			}
		}
	}

	/*------------------- Events */
	filter[0].addEventListener('click', toggleSort, false);

	for (var i = 0; i < radioBtn.length; i++){
		radioBtn[i].addEventListener('click', toggleFilter, true);
	}


}
