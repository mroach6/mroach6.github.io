
var	clsStopwatch = function() {
		// Private vars
		var	startAt	= 0;	// Time of last start / resume. (0 if not running)
		var	lapTime	= 0;	// Time on the clock when last stopped in milliseconds
 
		var	now	= function() {
				return (new Date()).getTime(); 
			}; 
 
		// Public methods
		// Start or resume
		this.start = function() {
				startAt	= startAt ? startAt : now();
			};
 
		// Stop or pause
		this.stop = function() {
				// If running, update elapsed time otherwise keep it
				lapTime	= startAt ? lapTime + now() - startAt : lapTime;
				startAt	= 0; // Paused
			};
 
		// Reset
		this.reset = function() {
				lapTime = startAt = 0;
			};
 
		// Duration
		this.time = function() {
				return lapTime + (startAt ? now() - startAt : 0); 
			};
	};
 
var x = new clsStopwatch();
var $time;
var clocktimer;
 
function pad(num, size) {
	var s = "0000" + num;
	return s.substr(s.length - size);
}

// 
function formatTime(time) {
	var h = m = s = ms = 0;
	var newTime = '';
 
	h = Math.floor( time / (60 * 60 * 1000) );
	time = time % (60 * 60 * 1000);
	m = Math.floor( time / (60 * 1000) );
	time = time % (60 * 1000);
	s = Math.floor( time / 1000 );
	ms = time % 1000;
 
	newTime = pad(m, 2) + ':' + pad(s, 2) + ':' + pad(ms, 3);
	return newTime;
}

// 
function show() {
	$time = document.getElementById('time');
	update();
}

// 
function update() {
	$time.innerHTML = formatTime(x.time());
}

// 
function start() {
	clocktimer = setInterval("update()", 1);
	x.start();
}

// 
function stop() {
	x.stop();
	clearInterval(clocktimer);
}
 

// ---------------ATHLETE ONE LAP---------------
//
var lapCounter = 1;
var lapArray = [];

function lap(){
  var lapTime = x.time();
  lapArray.push([formatTime(lapTime), lapTime]);
  var laps = "";
  var j;
  for (j = 0; j < lapArray.length; j++) {
    if (j == 0) {
      laps += lapArray[j][0] + "\t[" + lapArray[j][0] + "]<br>";
    } else {
      laps += lapArray[j][0] + "\t[" + formatTime((lapArray[j][1] - lapArray[j-1][1])) + "]<br>";
    }
  }
  
  document.getElementById('lapName').innerHTML = document.getElementById('box1').value.toUpperCase();
  document.getElementById('lap').innerHTML = laps;
  lapCounter++;
  
  // Change text of Lap Button to display lap numbers. 
  // User can see that they've clicked the lap button.
  document.getElementById('button1').innerHTML = "Lap " + lapCounter;

  // When Lap Button is clicked display the results div
  document.getElementById('athleteResults').style.display = "block";
}

// ---------------ATHLETE TWO LAP---------------
var lapCounterTwo = 1;
var lapArrayTwo = [];

function lapTwo(){
  var lapTime = x.time();
  lapArrayTwo.push([formatTime(lapTime), lapTime]);
  var lapsTwo = "";
  var j;
  for (j = 0; j < lapArrayTwo.length; j++) {
    if (j == 0) {
      lapsTwo += lapArrayTwo[j][0] + "\t[" + lapArrayTwo[j][0] + "]<br>";
    } else {
      lapsTwo += lapArrayTwo[j][0] + "\t[" + formatTime((lapArrayTwo[j][1] - lapArrayTwo[j-1][1])) + "]<br>";
    }
  }
  
  document.getElementById('lapName2').innerHTML = document.getElementById('box2').value.toUpperCase();
  document.getElementById('lap2').innerHTML = lapsTwo;
  lapCounterTwo++;

  // Change text of Lap Button to display lap numbers. 
  // User can see that they've clicked the lap button.  
  document.getElementById('button2').innerHTML = "Lap " + lapCounterTwo;

  // When Lap Button is clicked display the results div
  document.getElementById('athleteResults').style.display = "block";
}

// ---------------ATHLETE THREE LAP---------------
var lapCounterThree = 1;
var lapArrayThree = [];

function lapThree(){
  var lapTime = x.time();
  lapArrayThree.push([formatTime(lapTime), lapTime]);
  var lapsThree = "";
  var j;
  for (j = 0; j < lapArrayThree.length; j++) {
    if (j == 0) {
      lapsThree += lapArrayThree[j][0] + "\t[" + lapArrayThree[j][0] + "]<br>";
    } else {
      lapsThree += lapArrayThree[j][0] + "\t[" + formatTime((lapArrayThree[j][1] - lapArrayThree[j-1][1])) + "]<br>";
    }
  }
  
  document.getElementById('lapName3').innerHTML = document.getElementById('box3').value.toUpperCase();
  document.getElementById('lap3').innerHTML = lapsThree;
  lapCounterThree++;

  // Change text of Lap Button to display lap numbers. 
  // User can see that they've clicked the lap button.  
  document.getElementById('button3').innerHTML = "Lap " + lapCounterThree;

  // When Lap Button is clicked display the results div 
  document.getElementById('athleteResults').style.display = "block";
}

// ---------------ATHLETE FOUR LAP---------------
var lapCounterFour = 1;
var lapArrayFour = [];

function lapFour(){
  var lapTime = x.time();
  lapArrayFour.push([formatTime(lapTime), lapTime]);
  var lapsFour = "";
  var j;
  for (j = 0; j < lapArrayFour.length; j++) {
    if (j == 0) {
      lapsFour += lapArrayFour[j][0] + "\t[" + lapArrayFour[j][0] + "]<br>";
    } else {
      lapsFour += lapArrayFour[j][0] + "\t[" + formatTime((lapArrayFour[j][1] - lapArrayFour[j-1][1])) + "]<br>";
    }
  }
  
  document.getElementById('lapName4').innerHTML = document.getElementById('box4').value.toUpperCase();
  document.getElementById('lap4').innerHTML = lapsFour;
  lapCounterFour++;

  // Change text of Lap Button to display lap numbers. 
  // User can see that they've clicked the lap button.  
  document.getElementById('button4').innerHTML = "Lap " + lapCounterFour;
  
  // When Lap Button is clicked display the results div
  document.getElementById('athleteResults').style.display = "block";
}




// RACE SUMMARY

function printSummary(){

	var summary = document.getElementById('summaryReport');
	summary.innerHTML = "TESTING123";
	
	
	
	summary.innerHTML = 
		"<h2>" + document.getElementById('box1').value.toUpperCase() + "</h2><br>" + 
		document.getElementById('lap').innerHTML
		+
		"<h2>" + document.getElementById('box2').value.toUpperCase() + "</h2><br>" + 
		document.getElementById('lap2').innerHTML
		+
		"<h2>" + document.getElementById('box3').value.toUpperCase() + "</h2><br>" + 
		document.getElementById('lap3').innerHTML
		+
		"<h2>" + document.getElementById('box4').value.toUpperCase() + "</h2><br>" + 
		document.getElementById('lap4').innerHTML;
		
}






