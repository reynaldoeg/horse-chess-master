var secs;
var mins;
var cronometer;

var board = new Array(8);

autoplay();

function autoplay(){

	for( i = 0 ; i < 8 ; i++ ){
		board[i] = new Array(8);
	}

	ResetTime();
	StarTime();

}

function StarTime(){

	secs = 0;
	mins = 0;

	s = document.getElementById("seconds");
	m = document.getElementById("minutes");

	cronometer = setInterval(function(){

		if( secs==60 ){
			secs = 0;
			mins++;
			if(mins<10) m.innerHTML = "0"+mins;
			else m.innerHTML = mins;

			if(mins==60) mins=0;
		}

		if(secs<10) s.innerHTML = "0"+secs;
		else s.innerHTML = secs;
		
		secs++;
		
	},1000);
	

}

function ResetTime(){
	clearInterval(cronometer);
}

function ClearBoard(){

	for( i = 0 ; i < 8 ; i++ ){
		for( j = 0 ; j < 8 ; j++ ){
			board[i][j] = 0;
		}
	}

}