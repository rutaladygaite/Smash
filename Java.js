var minion1 = document.getElementById('minion1');
var minion2 = document.getElementById('minion2');
var minion3 = document.getElementById('minion3');
var level = 1;
var result = 0;
var myTimer;

function start (){
	document.getElementById('overlay').style.display = 'none';
	document.getElementById('startGame').style.display = 'none';
	grow();
}


function lost (){
	clearTimeout(myTimer);
	document.getElementById('overlay').style.display = 'block';
	document.getElementById('lostGame').style.display = 'block';
	document.getElementById('lostResult').innerText = result;
}


function grow (){
		myTimer = setTimeout(function(){
		minion1.style.height = minion1.offsetHeight + 5 + 'px';
		minion2.style.height = minion2.offsetHeight + 3 + 'px';
		minion3.style.height = minion3.offsetHeight + 10 + 'px';
		if(minion1.offsetHeight == 800 || minion2.offsetHeight == 800 || minion3.offsetHeight == 800){
			lost();
			return false;
		}
		grow();
	}, 100/ level)
}


function smash(minion){
	result = result + 1;
	document.getElementById('result').innerText = "Result: " + result; 
	if (result % 10 === 0) {
		level = level + 1;
		document.getElementById('level').innerText = "Level: " + level;
	}
	var gnom = document.getElementById(minion);
	gnom.style.height = "200px";
}

function reset () {
	document.getElementById('overlay').style.display = "none";
	minion1.style.height = "200px";
	minion2.style.height = "200px";
	minion3.style.height = "200px";
	result = 0;
	level = 1;
	document.getElementById('result').innerText = 'Result: 0';
	document.getElementById('level').innerText = 'Level: 1';
	grow();
}
/* minion1.style.height = "500px"; */
