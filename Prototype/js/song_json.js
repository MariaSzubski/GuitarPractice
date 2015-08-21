function Song(title, artist, capo, bpm, s_1, s_1_sub, s_2, s_2_sub, s_strum, s_strum_sub) {
	this.title = title;
	this.artist = artist;
	this.capo = capo;
	this.bpm = bpm;
	this.s_1 = s_1;
	this.s_1_sub = s_1_sub;
	this.s_2 = s_2;
	this.s_2_sub = s_2_sub;
	this.s_strum = s_strum;
	this.s_strum_sub = s_strum_sub;
}

var song_ = [
	new Song(
		"Three Little Birds",
		"Bob Marley",
		"Open",
		74,
		["AADA", "AADA", "AEAD", "DADA"],
		"",
		"",
		"",
		["d", "u", "d", "u", "m", "u", "d", "u"],
		["a", " ", " ", " ", " ", " ", "a", " "]
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
		["d", " ", "d", " ", "d" ,"u", "d", " "],
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
		["d", " ", "d", "u"],
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
		["d", " ", "d", " ", "d", "d", "d", "u"],
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
		["d", " ", "d", " ", "d", "u", " ", "u", " ", "u", "d", "u", "d", "u", "d", "u"],
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
		["d", " ", "d", " ", "d", "u", "d", "u"],
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
		["d", " ", "d", "u", "d", "u", "d", "u"],
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
		["d", " ", "d", "u", " ", "u", "d", " "],
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
		["d", "u", "d", "u", "d", "u", "d", " "],
		["a", " ", " ", " ", " ", " ", " ", " "]
	),



];

var songList = document.getElementById('songList');

for (var s = 0; s < song_.length; s++){
	songList.innerHTML +=
		'<li id="song_' + s + '">' +
			'<div>' +
				'<p>' + song_[s].title + '</p>' +
				'<p>' + song_[s].artist + '<p>' +
			'</div>' +
			'<img src="img/next.svg" alt="View Song">' +
		'</li>';
}

var chords = document.getElementById('chords');
var songDetails = document.getElementById('songDetails');

var t_title		= document.getElementById('t_title');
var t_artist 	= document.getElementById('t_artist');
var t_capo 		= document.getElementById('t_capo');
var t_bpm 		= document.getElementById('t_bpm');
var click_id, result, getSong;


songList.addEventListener('click', function(e){
	// Convert ID to index value
	click_id = e.target.id;
	result = click_id.split("_");
	getSong = song_[result[1]];

	// Use index value to target song_ array
	t_title.innerHTML		= getSong.title;
	t_artist.innerHTML	= getSong.artist;
	t_capo.innerHTML		= (
		function(){
			var suffix;
			if ( getSong.capo >= 11 && getSong.capo <= 13 ){
				suffix = 'th';
			} else {
				switch ((getSong.capo % 10) + ''){
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
			return getSong.capo + suffix + " Fret";
		})();

		getSong.capo + " Fret";
	t_bpm.innerHTML		= getSong.bpm + " BPM";
}, true);
