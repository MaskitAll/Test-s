'use strict';

var start = document.querySelector("#lifeStart"),
	pause = document.querySelector("#lifePause"),
	rand = document.querySelector("#lifeRand"),
	reset = document.querySelector("#lifeReset"),
	next = document.querySelector("#lifeNext"),
	speed = document.querySelector("#lifeSpeed");

var size_range = document.querySelector("#lifeSize");

var lifeTimer;
var lifeSpeed = 500;


class battleShipMap extends Map 
{
    constructor(id){
        super(id);
        // this.width = 10;
        // this.height = 10;
    }
}

// var m1 = new battleShipMap("sea-battle-canvas" );
// console.log(m1);