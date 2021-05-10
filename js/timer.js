
var Ses = document.querySelector(".session .lenght");
var Bre = document.querySelector(".break .lenght");

var Min = document.querySelector(".timer-time .min");
var Sec = document.querySelector(".timer-time .sec");

var CB = document.querySelector(".circle-container");

		Min.textContent = todeg(Ses.textContent);

var stime = (Min.textContent * 60) + Sec.textContent * 1;
var timerid;
var runTimer = false;
var isSes = true;

	document.querySelector(".session .left-arrow").addEventListener('click', function (){
	'use strict';
		if(Ses.textContent > 1)
			Ses.textContent--;
			res();
	});

	document.querySelector(".session .right-arrow").addEventListener('click', function (){
		Ses.textContent++;
			res();
	});

	document.querySelector(".break .left-arrow").addEventListener('click', function (){
		if(Bre.textContent > 1)
			Bre.textContent--;
			res();
	});

	document.querySelector(".break .right-arrow").addEventListener('click', function (){
		Bre.textContent++;
			res();
	});

	CB.addEventListener('click', function(){
		if(runTimer){
			CB.style.background = 'rgba(200, 180, 180, 0.4)';
			runTimer = false;
		}
		else{
			CB.style.background = 'rgba(200, 180, 180, 0.6)';
			runTimer = true;
		}
		timer(runTimer);
	});

	document.querySelector(".stop_icon").addEventListener('click', function (){
		console.log("stop");
		res();
	});

	function timer(runTimer){
		if(runTimer){
			if(stime<=0){
				if(!isSes){
					isSes = true;
					stime = Bre.textContent * 60;
				} else {
					isSes = false;
					stime = Ses.textContent * 60;
				}
				Ding(400, 50, 10);					// DING!!!
			}
			tic();
			timerid = setTimeout(timer, 1000, true);
		}
		else{stop();}
	}

	function tic(){
		if(stime>0){
			stime--;
		}
		
		stom(stime);
	}

	function res(){
		console.log("stop");

		Min.textContent = todeg(Ses.textContent);
		Sec.textContent = todeg(0);
		stime = (Min.textContent * 60) + Sec.textContent * 1;
		CB.style.background = 'rgba(200, 180, 180, 0.4)';
		runTimer = false;

		stop();
	}

	function stop(){
		clearTimeout(timerid);
	}

	function stom(s){
		Min.textContent = todeg(parseInt(s % 3600 / 60));
		Sec.textContent = todeg(parseInt(s % 3600 % 60));
	}

	function todeg(a){
		if(a/10<1){return "0" + a;} else {return a;}
	}
