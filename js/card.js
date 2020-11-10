   'use strict';



var degF = 0,
	degD = 180;

var rotate = function(){
	var front = document.querySelector(".front"),
	decision = document.querySelector(".decision");
	degF += 180;
	degD += 180;
	front.style.transform = 'rotateY(' + degF + 'deg)';
	decision.style.transform = 'rotateY(' + degD + 'deg)';
}


