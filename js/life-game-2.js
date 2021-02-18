'use strict';
const   canvas  = document.getElementById("sea-battle-canvas"),
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

// переводит позицию мыши на экране в позицию на канвасе
function windowToCanvas(x, y, indent = 5) {
    var bbox = canvas.getBoundingClientRect();
    
    return {
        // позиция мыши - (позиция канваса(0.0) + отступ)
        x: x - (bbox.left + indent),
        y: y - (bbox.top + indent)
    };
}

canvas.addEventListener('mousedown', function (e) {

    var loc = windowToCanvas(e.clientX, e.clientY, m.indent);
    var x = loc.x;
    var y = loc.y;
    
    x = Math.floor(x / (canvas.width - m.indent * 2) * m.width);
    y = Math.floor(y / (canvas.height - m.indent * 2) * m.height);

    // изменить в зависимости от логики
    if(m.cellMap[x][y].value < m.colorArray.length - 1){ m.cellMap[x][y].value++;}
    else {m.cellMap[x][y].value = 0;}

    drawMap(m);
});


function drawBorder(m, color, x, y){
    ctx.fillStyle = color;

    ctx.fillRect(   m.indent + x * ((canvas.width - m.indent * 2) / m.width) - 2,
                    m.indent + y * ((canvas.height - m.indent * 2) / m.height) - 2,
                    (canvas.width - m.indent * 2)/ m.width + 2,
                    (canvas.height - m.indent * 2) / m.height + 2
    );
};

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
    for (var i = 0; i < m.cellMap.length; ++i){
        for (var j = 0; j < m.cellMap[i].length; ++j){
            drawCell(m, i, j);
            // console.log("m");
        }
    }
};


// количество клеток определяется масштабом (10px)
var Ms = 20;
var w = Math.floor(canvas.width / Ms); 
var h = Math.floor(canvas.height / Ms); 

var m = new Map(6, 6, 5);
    m.fillMap();

    m.cellMap[0][0].value = 1;
    m.cellMap[5][5].value = 1;
    drawBorder(m, "#0f0", 3, 3);
    // m.cellMap[1][0].value = 1;
    // m.cellMap[1][1].value = 1;
    // m.swipeCell(m.cellMap[0][0], m.cellMap[1][0]);
    drawMap(m);



