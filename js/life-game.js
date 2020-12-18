'use strict';

var example = document.getElementById("example"),
	ctx     = example.getContext('2d');

	ctx.fillStyle = "#ccc";
	ctx.fillRect(0, 0, example.width, example.height);


function random(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;}


function createArr(width, height){
	var map = new Array(width);
	for (var i = 0; i < map.length; ++i) {
		map[i] = new Array(height); // 10 столбцов
	}
	return map;
}










function cell(x = 0, y = 0, life = false){
	this.x = x;
	this.y = y;

	this.id = x + '' + y;
	this.life = life;
};

cell.prototype = {
	Cell: function(x = 0, y = 0, life = false){
		this.x = x;
		this.y = y;

		this.id = x + '' + y;
		this.life = life;
	},

	toggleLife: function(){
		if(this.life === true) this.life = false;
		if(this.life === false) this.life = true;
	},

	drawCell: function(color = "#000"){
		ctx.fillStyle = color;
		ctx.fillRect( this.x * 10, this.y * 10, 8, 8);
	}

};


function map(width = 10, height = 10){
	this.width = width;
	this.height = height;
	this.cellMap;

};

map.prototype = {
	createMap: function(){
		this.cellMap = createArr(this.width, this.height);

		for (var i = 0; i < this.cellMap.length; ++i){
			for (var j = 0; j < this.cellMap[i].length; ++j){
				this.cellMap[i][j] = new cell(j, i, false);
//				this.cellMap[i][j] = new cell(j, i, !!random(0, 1));
//				this.cellMap[i][j] = random(0, 1);
			}
		}

	},

	fillMap: function(rand = false){
		for (var i = 0; i < this.cellMap.length; ++i){
			for (var j = 0; j < this.cellMap[i].length; ++j){
				if(rand){
					this.cellMap[i][j].Cell(i, j, !!random(0, 1));
//					this.cellMap[i][j] = random(0, 1);
				}
				else {
					this.cellMap[i][j].Cell(i, j, false);
				}
			}
		}
	},

	dayToggle: function(){
		var secCellMap = createArr(this.width, this.height);
		for (var i = 0; i < this.cellMap.length; ++i){
			for (var j = 0; j < this.cellMap[i].length; ++j){
				secCellMap[i][j] = new cell(i, j, false);
			}
		}


		var d = "";
		var conditions = 0;

		for (var i = 0; i < this.cellMap.length; ++i){
			for (var j = 0; j < this.cellMap[i].length; ++j){

	if(i > 0 && j > 0 												&& this.cellMap[i - 1][j - 1].life) {++conditions;}
	if(i > 0 														&& this.cellMap[i - 1][j].life) 	{++conditions;}
	if(i > 0 && j < this.cellMap[i].length-1						&& this.cellMap[i - 1][j + 1].life) {++conditions;}

	if(j > 0														&& this.cellMap[i][j - 1].life) 	{++conditions;}
	if(j < this.cellMap[i].length-1									&& this.cellMap[i][j + 1].life) 	{++conditions;}

	if(i < this.cellMap.length-1 && j > 0							&& this.cellMap[i + 1][j - 1].life) {++conditions;}
	if(i < this.cellMap.length-1									&& this.cellMap[i + 1][j].life)  	{++conditions;}
	if(i < this.cellMap.length-1 && j < this.cellMap[i].length-1 	&& this.cellMap[i + 1][j + 1].life)	{++conditions;}

				if(this.cellMap[i][j].life == true){
					if(conditions === 2 || conditions === 3) {
						secCellMap[i][j].life = true;
						d = "живет";
					}
					else {
						secCellMap[i][j].life = false;
						d = "умирает";
					}
				} else {
					if(conditions === 3) {
						secCellMap[i][j].life = true;
						d = "рождается";
					}
					else{
						d = "остается мертвой";
					}
				}
//				console.log(i + " " + j + " " + d + " при " + conditions);
				conditions = 0;
			}
		}
		this.cellMap = secCellMap;
//		return secCellMap;
	},

	showMap: function(){
		var show = createArr(this.width, this.height);

		for (var i = 0; i < show.length; ++i){
			for (var j = 0; j < show[i].length; ++j){
				show[i][j] = +this.cellMap[i][j].life;
			}
		}
		console.log(show);
	},

	drawMap: function(){
		for (var i = 0; i < this.cellMap.length; ++i){
			for (var j = 0; j < this.cellMap[i].length; ++j){
				if(this.cellMap[i][j].life == true){
					this.cellMap[i][j].drawCell();
				} else if(this.cellMap[i][j].life == false) {
					this.cellMap[i][j].drawCell("#ccc");

				}
			}
		}
	},


}

	function nextDay(m1){
		m1.dayToggle();
//		m1.showMap();
		m1.drawMap();

		setTimeout(nextDay, 500, m1);
	}


var c = new cell();
//c.drawCell();
console.log(c);

var w = Math.floor(example.width / 10);
var h = Math.floor(example.height / 10);


console.log(w);
console.log(h);




console.log('m');
var m = new map(w, h);
m.createMap();
m.fillMap(true);
//m.cellMap[0][0].life = true;
//m.cellMap[1][0].life = true;
//m.cellMap[0][1].life = true;
//m.cellMap[1][1].life = true;
//
//m.cellMap[0][2].life = false;
//m.cellMap[1][2].life = false;
//m.cellMap[2][2].life = false;
//m.cellMap[2][0].life = false;
//m.cellMap[2][1].life = false;
//
//m.cellMap[29][14].life = true;
//m.cellMap[28][14].life = true;
//m.cellMap[27][14].life = true;
//m.cellMap[26][14].life = true;
//
//m.cellMap[29][14].life = true;
//m.cellMap[29][13].life = true;
//m.cellMap[29][12].life = true;
//m.cellMap[29][11].life = true;

console.log("test");
//m.showMap();
m.drawMap();
//m.dayToggle();

nextDay(m);


//console.log(m);
//console.log('s');
//console.log(m.showMap());
//console.log('m');

//console.log('m1');
//var m1 = new map();
//m1 = m;
//m1.dayToggle();
//console.log(m1);
//console.log(m1.showMap());
