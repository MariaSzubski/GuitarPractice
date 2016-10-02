/* _____________________________________Exercise List*/
if(document.getElementById('list')){
	const filter = document.getElementById('songList').getElementsByTagName('nav');
	const sort = document.getElementById('sortOverlay');
	const radioBtn = sort.getElementsByTagName('input');

	//..................................Show/Hide Sort Ovrlay
	sort.hidden = true;
	function toggleSort(){
		(sort.hidden) ? sort.hidden = false : sort.hidden = true;
		return false;
	}

	//..................................Change Sort description
	function toggleFilter(){
		const sortType = document.getElementById('sortType');
		const sortOrder = document.getElementById('sortOrder');

		for (let i in radioBtn){
			if (radioBtn[i].checked && i < 2){
				sortType.innerText = radioBtn[i].value;
			} else if (radioBtn[i].checked && i > 1){
				sortOrder.innerText = radioBtn[i].value;
			}
		}

		(sortType.innerText == "ALPHABETICAL") ? console.log(sortType.innerText) : null;
	}

	function sortList(

	//..................................Events
	filter[0].addEventListener('click', toggleSort, false);

	for (let i in radioBtn){
		radioBtn[i].addEventListener('click', toggleFilter, true);
	}


}
