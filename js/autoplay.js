var secs;
var mins;
var cronometer;

var board = new Array(8);

var CellSelected_x;
var CellSelected_y;

autoplay();

function autoplay(){

	for( i = 0 ; i < 8 ; i++ ){
		board[i] = new Array(8);
	}
	ClearBoard();

	ResetTime();
	StarTime();

	x = Math.round( Math.random() * 7 );
	y = Math.round( Math.random() * 7 );

	CellSelected_x = x;
	CellSelected_y = y;

	SelectCell(x, y);

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

function SelectCell(x, y){

	board[x][y] = 1;
	PaintCell(CellSelected_x, CellSelected_y, "orange");
	PaintHorseCell(x, y, "green");
	CellSelected_x = x;
	CellSelected_y = y;
}

function CheckCell(x, y){
	
	CheckTrue = false;

	dif_x = Math.abs(x - CellSelected_x);
	dif_y = Math.abs(y - CellSelected_y);

	if( (dif_x == 1 && dif_y == 2) || (dif_x == 2 && dif_y == 1)  ) CheckTrue = true;

	if( board[x][y] == 1 ) CheckTrue = false;

	if (CheckTrue) SelectCell(x, y);
}

function PaintCell(x, y, color){
	cell = document.getElementById("c"+x+y);
	cell.style.background = color;
}

function PaintHorseCell(x, y, color){
	cell = document.getElementById("c"+x+y);
	cell.style.background = color;
	cell.innerHTML = "<img src='horse.gif'>";
}