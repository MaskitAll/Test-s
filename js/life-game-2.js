'use strict';
const   canvas  = document.getElementById("example"),
        ctx     = canvas.getContext('2d'); 
           
        canvas.width = Math.floor(canvas.offsetWidth);
        canvas.height =  Math.floor(canvas.offsetHeight);
        
        ctx.fillStyle = "#ccc";
        ctx.fillRect(0, 0, canvas.width, canvas.height);


var start = document.querySelector("#lifeStart"),
	pause = document.querySelector("#lifePause"),
	rand = document.querySelector("#lifeRand"),
	reset = document.querySelector("#lifeReset"),
	next = document.querySelector("#lifeNext"),
	speed = document.querySelector("#lifeSpeed");

var size_range = document.querySelector("#lifeSize");

var lifeTimer;
var lifeSpeed = 500;


class LifeGame extends Map{
    
    constructor(width, height, indent){
        super(width, height, indent);
        this.colorArray = ["#fff", "#000"];
    }
    // проверяет наличие соседей
    lifeCondition(i, j){
		var conditions = 0;
		if(i > 0 && j > 0 				&& this.cellMap[i - 1][j - 1].value === 1) {++conditions;}
		if(i > 0 						&& this.cellMap[i - 1][j].value === 1) 	{++conditions;}
		if(i > 0 && j < this.cellMap[i].length-1
										&& this.cellMap[i - 1][j + 1].value === 1) {++conditions;}

		if(j > 0						&& this.cellMap[i][j - 1].value === 1) 	{++conditions;}
		if(j < this.cellMap[i].length-1	&& this.cellMap[i][j + 1].value === 1) 	{++conditions;}

		if(i < this.cellMap.length-1 && j > 0
										&& this.cellMap[i + 1][j - 1].value === 1) {++conditions;}
		if(i < this.cellMap.length-1	&& this.cellMap[i + 1][j].value === 1)  	{++conditions;}
		if(i < this.cellMap.length-1 && j < this.cellMap[i].length-1
										&& this.cellMap[i + 1][j + 1].value === 1)	{++conditions;}
		
        return conditions;
	}
    // условия рождения и смерти
	bn_sn(secCellMap, conditions, i, j){
        var b = false;
        if(this.cellMap[i][j].value === 1){
            for(var k = 0; k <= 8; ++k){
                b = (b || born_i(getCheckedCheckBoxes(".check-born .checkbox"), conditions, k));
            }
            if(b) {secCellMap[i][j].value = 1;}
            else {secCellMap[i][j].value = 0;}

        } else {
            for(var k = 0; k <= 8; ++k){
                b = (b || born_i(getCheckedCheckBoxes(".check-survive .checkbox"), conditions, k));
            }
            if(b) {secCellMap[i][j].value = 1;}
            else {secCellMap[i][j].value = 0;}
        }
        return secCellMap;
    }
    // смена дня
    dayToggle(){
		var conditions = 0;
        var secCellMap = new Array(this.width);

        for (var i = 0; i < secCellMap.length; ++i) {
            secCellMap[i] = new Array(this.height);

            for (var j = 0; j < this.height; ++j){
				secCellMap[i][j] = new Cell(i, j, 0);
                conditions = this.lifeCondition(i, j); // соседи

				this.bn_sn(secCellMap, conditions, i, j); // ХЗ куда оно вообще возвращает результат
				conditions = 0;
			}
        }
		this.cellMap = secCellMap;
	}
}

// отрисовывает обводку ячейки
function drawBorder(m, color, x, y){
    ctx.fillStyle = color;

    ctx.fillRect(   m.indent + x * ((canvas.width - m.indent * 2) / m.width) - 2,
                    m.indent + y * ((canvas.height - m.indent * 2) / m.height) - 2,
                    (canvas.width - m.indent * 2)/ m.width + 2,
                    (canvas.height - m.indent * 2) / m.height + 2
    );
};

// отрисовывает ячейку
function drawCell(m, x, y){
    ctx.fillStyle = m.colorArray[m.cellMap[x][y].value];

    ctx.fillRect(   m.indent + x * ((canvas.width - m.indent * 2) / m.width),
                    m.indent + y * ((canvas.height - m.indent * 2) / m.height),
                    (canvas.width - m.indent * 2)/ m.width - 2,
                    (canvas.height - m.indent * 2) / m.height - 2
    );
};

// отрисовывает карту
function drawMap(m){
    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (var i = 0; i < m.cellMap.length; ++i){
        for (var j = 0; j < m.cellMap[i].length; ++j){
            drawCell(m, i, j);
        }
    }
};

// меняет скорость жизни
function changeSpeed(){
	lifeSpeed = (20 - speed.value) * 100;
	start.click();
};

// меняет размеры карты при изменении положения ползунка
function changeSize(){
    canvas.width = Math.floor(canvas.offsetWidth);
    canvas.height =  Math.floor(canvas.offsetHeight);

	w = Math.floor(canvas.width / (size_range.value * 5));
	h = Math.floor(canvas.height / (size_range.value * 5));

	var m1 = new  LifeGame(w, h, m.indent);
	m1.fillMap();
	m1.fillMapArr(m);

	m = m1;

	drawMap(m);
	pause.click();
};

// проверяет нужно ли рождаться
function born_i(checkboxesChecked, conditions, i){
	if(checkboxesChecked.indexOf(i) != -1){
		if(conditions === i) {
			return true;
		}
	}
	return false;
}

// смена дня и отрисовка
function nextDay(){
	m.dayToggle();
	drawMap(m);
}

// возвращает массив активных чекбоксов
function getCheckedCheckBoxes(ch_container) {
	var checkboxes = document.querySelectorAll(ch_container);
	var checkboxesChecked = []; // можно в массиве их хранить, если нужно использовать

	for (var i = 0; i < checkboxes.length; i++) {
		if (checkboxes[i].checked) {
		checkboxesChecked.push(i); // положим в массив выбранный
		}
	}
	return checkboxesChecked; // для использования в нужном месте
}

// события
start.addEventListener('click', function(){
	clearInterval(lifeTimer);
	lifeTimer = setInterval(nextDay, lifeSpeed);
});

pause.addEventListener('click', function(){
	clearInterval(lifeTimer);
});

next.addEventListener('click', function(){
	m.dayToggle();
	drawMap(m);
});

rand.addEventListener('click', function(){
	clearInterval(lifeTimer);
	m.fillMapRand();
	drawMap(m);
});

reset.addEventListener('click', function(){
	clearInterval(lifeTimer);
	m.fillMap();
	drawMap(m);
});

// подстраивает размер карты под размер страницы
window.addEventListener(`resize`, event => {
    canvas.width = Math.floor(canvas.offsetWidth);
    canvas.height =  Math.floor(canvas.offsetHeight);

    ctx.fillStyle = "#ccc";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    drawMap(m);
}, false);

// меняет ячейку при нажатии
canvas.addEventListener('mousedown', function (e) {
    var loc = windowToCanvas(e.clientX, e.clientY, m.indent);
    var x = loc.x;
    var y = loc.y;
    
    x = Math.floor(x / (canvas.width - m.indent * 2) * m.width);
    y = Math.floor(y / (canvas.height - m.indent * 2) * m.height);

    // изменить в зависимости от логики
    m.cellMap[x][y].toggleValue();

    drawMap(m);
});

// количество клеток определяется масштабом (10px)
// var Ms = 20;
// var w = Math.floor(canvas.width / Ms); 
// var h = Math.floor(canvas.height / Ms); 

var w = Math.floor(example.width / (size_range.value * 5));
var h = Math.floor(example.height / (size_range.value * 5));

var m = new LifeGame(w, h, 5);
    m.fillMap();
    drawMap(m);