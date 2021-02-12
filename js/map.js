

/* Всякие функции поддержки*/

// Random
function random(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Create array
function createArr(width, height){
	var arr = new Array(width);
	for (var i = 0; i < arr.length; ++i) {
		arr[i] = new Array(height);
	}
	return arr;
}

// Work with canvas
function map(id){
    const   canvas  = document.getElementById(id),
            ctx     = canvas.getContext('2d');

            canvas.width = Math.floor(canvas.offsetWidth);
            canvas.height =  Math.floor(canvas.offsetHeight);
        
            ctx.fillStyle = "#ccc";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        
    
    /* Cell */
    class Cell{
        constructor(x = 0, y = 0, value = 0) {
            this.x = x;
            this.y = y;

            this.value = value;
        }

        setValue(newValue){
            this.value = newValue;
        }
        
        drawCell(color = "#ddd", width = 10, height = 10, indent = 5){
            ctx.fillStyle = color;
            
            ctx.fillRect(   indent + this.x * ((canvas.width - indent * 2) / width),
                            indent + this.y * ((canvas.height - indent * 2) / height),
                            (canvas.width - indent * 2)/ width - 2,
                            (canvas.height - indent * 2) / height - 2
            );
        }
    };

    /* Map */
    class Map{
        constructor(width, height, indent){
            this.width = width;
            this.height = height;
            this.indent = indent;
            
            this.cellMap = createArr(this.width, this.height);
            this.colorArray = {0: "#fff", 1: "#f00", 2: "#0f0", 3: "#00f", 4: "#ccc", 5: "#000"}
        }

        // заполняет карту пустыми ячейками
        fillMap(){
            for(var i = 0; i < this.width; ++i){
                for(var j = 0; j < this.height; ++j){
                    this.cellMap[i][j] = new Cell(i, j, 0);
                }
            }
        }

        // отрисовывает карту
        drawMap(){
            for (var i = 0; i < this.cellMap.length; ++i){
                for (var j = 0; j < this.cellMap[i].length; ++j){
                    this.cellMap[i][j].drawCell(this.colorArray[this.cellMap[i][j].value], this.width, this.height, this.indent);
                }
            }
        }
    }

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
            if(m.cellMap[x][y].value < 5){ m.cellMap[x][y].value++;}
            else {m.cellMap[x][y].value = 0;}

            m.drawMap();
        });


    // количество клеток определяется масштабом (10px)
    var Ms = 20;
    var w = Math.floor(canvas.width / Ms); 
    var h = Math.floor(canvas.height / Ms); 

    var m = new Map(w, h, 5);
    m.fillMap();
    m.drawMap();
}







// map("example");
map("sea-battle-canvas");

