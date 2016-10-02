/* ____________________________________ Timer */
if(document.getElementById('exercises')){

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
