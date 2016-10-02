function Song(title, artist, capo, bpm, chordGroup, s_strum, s_strum_sub) {
	this.title = title;
	this.artist = artist;
	this.capo = capo;
	this.bpm = bpm;
	this.chordGroup = new ChordGroup;
	this.s_strum = s_strum;
	this.s_strum_sub = s_strum_sub;

}

function ChordGroup (s_1, s_1_sub, s_2, s_2_sub){
	[
			this.s_1 = s_1,
			this.s_1_sub = s_1_sub,
			this.s_2 = s_2,
			this.s_2_sub = s_2_sub
	]
}

var song_ = [
	new Song(
		"Three Little Birds",
		"Bob Marley",
		"Open",
		74,
		['new', 'hello', 'hello2', 'test'],
		'strum',
		'strum2'


	),
	new Song(
		"Hound Dog",
		"Elvis",
		"Open",
		178,
		["AAAA", "DDAA", "EDA-"],
		"",
		"",
		"",
		["d", "b", "d", "b", "d", "u", "d", "b"],
		[" ", " ", "a", " ", " ", " ", " ", " "]
	),
	new Song(
		"Walk The Line",
		"Johnny Cash",
		"Open",
		102,
		["AEAE", "DAEA"],
		"",
		"",
		"",
		["d", "b", "d", "u"],
		["a", " ", " ", " "]
	),
	new Song(
		"Wild Thing",
		"The Troggs",
		"Open",
		101,
		["ADEE"],
		"",
		["ADED", "ADED", "ADED", "ADED", "GAGA"],
		["    ", "    ", "    ", "    ", "6 6 "],
		["d", "b", "d", "b", "d", "d", "d", "u"],
		["a", " ", "a", " ", "u", "u", " ", " "]
	),
	new Song(
		"Peggy Sue",
		"Buddy Holly",
		"Open",
		148,
		["AADD", "ADAA", "DDDD", "ADAA", "EEDD", "ADAE"],
		"",
		["AAAA", "FFAA", "DDDD", "ADAA", "EEDD", "ADAA", "EEDD", "ADA "],
		"",
		["d", "d"],
		""
	),
	new Song(
		"Twist and Shout",
		"The Beatles",
		"5",
		127,
		["AADD", "EEEE"],
		"",
		"",
		"",
		["d", "b", "d", "b", "d", "u", "b", "u", "b", "u", "d", "u", "d", "u", "d", "u"],
		""
	),
	new Song(
		"Layout Down Sally",
		"Eric Clapton",
		"Open",
		190,
		["AAAA", "AAAA", "DDAA", "AADD", "EE--"],
		[" 7 7", "    ", "    ", "    ", "    "],
		["AADA", "EEAA", "AADA", "AADD", "EEAA"],
		["    ", "   7", "    ", "    ", "    "],
		["d", "b", "d", "b", "d", "u", "d", "u"],
		[" ", " ", "a", " ", " ", " ", " ", " "]
	),
	new Song(
		"The Gambler",
		"Kenny Rogers",
		"6",
		88,
		["AADA", "AAAE", "AADA", "DAEA", "AADA", "AAAE", "AADA", "DAEA"],
		"",
		["AADA", "DAAE", "AADA", "DAEA"],
		"",
		["d", "b", "d", "u", "d", "u", "d", "u"],
		[" ", " ", "a", " ", " ", " ", "a", " "]
	),
	new Song(
		"Hey Ya",
		"Outkast",
		"6",
		160,
		["GGGG", "CCCC", "CCCC", "DD", "EEEE", "EEEE"],
		"",
		"",
		"",
		["d", "b", "d", "u", "b", "u", "d", "b"],
		[" ", " ", "a", " ", " ", " ", " ", " "]
	),
	new Song(
		"Somebody To Love",
		"Jefferson Airplane",
		"2",
		151,
		["EEAD", "EEEE", "EEAD", "EEEE"],
		["mm <", "mmmm", "mm <", "mmmm"],
		["GGDD", "EEAA", "GGDD", "EEAA", "GGDD", "EEAA", "DDAA"],
		["    ", "mm  ", "    ", "mm  ", "    ", "mm  ", "    "],
		["d", "u", "d", "u", "d", "u", "d", "b"],
		["a", " ", " ", " ", " ", " ", " ", " "]
	),



];

/* ------------------------------ Write Song List */
var songList_ul = document.getElementById('songList_ul');

for (var s = 0; s < song_.length; s++){
	songList_ul.innerHTML +=
		'<li id="song_' + s + '">' +
			'<div>' +
				'<p>' + song_[s].title + '</p>' +
				'<p>' + song_[s].artist + '<p>' +
			'</div>' +
			'<img src="img/next.svg" alt="View Song">' +
		'</li>';
}

/* ------------------------------ Song Details: Variables */
var 	t_title		= document.getElementById('t_title').firstChild;
var 	t_artist 	= document.getElementById('t_artist').firstChild;
var 	t_capo 		= document.getElementById('t_capo').firstChild;
var 	t_bpm 		= document.getElementById('t_bpm').firstChild;
var 	clicked_id,	getIndex, getSong;


/* ------------------------------ Correct Number Suffixes */
function numSuffix(val){
	var suffix;
	if ( val >= 11 && val <= 13 ){
		suffix = 'th';
	} else {
		switch (( val % 10 ) + ''){
			case '1':
				suffix = 'st';
				break;
			case '2':
				suffix = 'nd';
				break;
			case '3':
				suffix = 'rd';
				break;
			case 'NaN':
				suffix = '';
				break;
			default:
				suffix = 'th';
				break;
		}
	}
	return val + suffix;
}



console.log(song_);

//
// /* ------------------------------ Change Song on click */
// var songList_li = songList_ul.getElementsByTagName('li');
// for (var i = 0 ; i < songList_li.length ; ++i) {
// 	songList_li[i].onclick = changeSong;
// }
//
//
// /* ------------------------------ Change Song Details */
// function changeSong(){
//
// 	// Convert li#id to index, retreive value from song_[];
// 	clicked_id 	= this.id;
// 	getIndex 	= clicked_id.split("_");
// 	getSong 		= song_[getIndex[1]];
//
// 	// Update page header based on getSong
// 	t_title.nodeValue		= getSong.title;
// 	t_artist.nodeValue	= getSong.artist;
// 	t_capo.nodeValue		= function(){ return numSuffix(getSong.capo) + " Fret"; }();
// 	t_bpm.nodeValue		= getSong.bpm + " BPM";
//
// 	// Write s_1 to page
// 	var 	cs_1		= document.getElementById('cs_1').getElementsByTagName('div')[0];
// 	var 	cs_2		= document.getElementById('cs_2').getElementsByTagName('div')[0];
// 	var 	s_strum	= document.getElementById('s_strum');
// 	var	c_1, c_2, c_3, c_4;
// 	var	c_1_sub, c_2_sub, c_3_sub, c_4_sub;
//
// 	cs_1.innerHTML ='';
// 	cs_2.innerHTML ='';
// 	s_strum.innerHTML = '';
//
//
//
// 	for (var b = 0; b < getSong.s_1.length; b++){
// 		defineBar(b);
// 		cs_1.innerHTML +=
// 			'<ul>' +
// 				'<li>' + c_1 + '<sub>' + c_1_sub + '</sub>' + '</li>' +
// 				'<li>' + c_2 + '<sub>' + c_2_sub + '</sub>' + '</li>' +
// 				'<li>' + c_3 + '<sub>' + c_3_sub + '</sub>' + '</li>' +
// 				'<li>' + c_4 + '<sub>' + c_4_sub + '</sub>' + '</li>' +
// 			'</ul>';
//
// 	}
//
// 	for (var b = 0; b < getSong.s_2.length; b++){
// 		defineBar2(b);
// 		cs_2.innerHTML +=
// 			'<ul>' +
// 				'<li>' + c_1 + '<sub>' + c_1_sub + '</sub>' + '</li>' +
// 				'<li>' + c_2 + '<sub>' + c_2_sub + '</sub>' + '</li>' +
// 				'<li>' + c_3 + '<sub>' + c_3_sub + '</sub>' + '</li>' +
// 				'<li>' + c_4 + '<sub>' + c_4_sub + '</sub>' + '</li>' +
// 			'</ul>';
//
// 	}
//
// 	for (var b = 0; b < getSong.s_strum.length; b++){
// 		defineStrum(b);
// 		s_strum.innerHTML +=
// 			'<li>' +
// 				'<img src="img/strum_' + c_1 + '.svg" alt="Down">' +
// 				'<sub>' + c_1_sub + '</sub>' +
// 			'</li>';
//
// 	}
//
//
//
// 	function defineStrum(b){
// 		switch(true){
// 			case typeof(getSong.s_strum_sub) === 'string':
// 				for (var l = 0; l < getSong.s_strum[b].length; l++){
// 					c_1 = getSong.s_strum[b].charAt(l);
// 					c_1_sub = '&nbsp';
// 				}
// 				break;
// 			case typeof(getSong.s_strum_sub) === 'object':
// 				for (var l = 0; l < getSong.s_strum[b].length; l++){
// 					c_1 = getSong.s_strum[b].charAt(l);
// 					c_1_sub = getSong.s_strum_sub[b].charAt(l);
// 				}
// 				break;
// 		}
// 	}
//
//
//
// 	function defineBar(b){
// 		c_1 = getSong.s_1[b].charAt(0);
// 		c_2 = getSong.s_1[b].charAt(1);
// 		c_3 = getSong.s_1[b].charAt(2);
// 		c_4 = getSong.s_1[b].charAt(3);
// 		switch(true){
// 			case typeof(getSong.s_1_sub) === 'string':
// 				c_1_sub = '&nbsp;';
// 				c_2_sub = '&nbsp;';
// 				c_3_sub = '&nbsp;';
// 				c_4_sub = '&nbsp;';
// 				break;
// 			case typeof(getSong.s_1_sub) === 'object':
// 				c_1_sub = getSong.s_1_sub[b].charAt(0);
// 				c_2_sub = getSong.s_1_sub[b].charAt(1);
// 				c_3_sub = getSong.s_1_sub[b].charAt(2);
// 				c_4_sub = getSong.s_1_sub[b].charAt(3);
// 				break;
// 		}
// 	}
//
//
// 	function defineBar2(b){
// 		c_1 = getSong.s_2[b].charAt(0);
// 		c_2 = getSong.s_2[b].charAt(1);
// 		c_3 = getSong.s_2[b].charAt(2);
// 		c_4 = getSong.s_2[b].charAt(3);
// 		switch(true){
// 			case typeof(getSong.s_2_sub) === 'string':
// 				c_1_sub = '&nbsp;';
// 				c_2_sub = '&nbsp;';
// 				c_3_sub = '&nbsp;';
// 				c_4_sub = '&nbsp;';
// 				break;
// 			case typeof(getSong.s_2_sub) === 'object':
// 				c_1_sub = getSong.s_2_sub[b].charAt(0);
// 				c_2_sub = getSong.s_2_sub[b].charAt(1);
// 				c_3_sub = getSong.s_2_sub[b].charAt(2);
// 				c_4_sub = getSong.s_2_sub[b].charAt(3);
// 				break;
// 		}
// 	}
// };
