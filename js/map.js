
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
};

/* Map */
class Map{
    constructor(width, height, indent){
        this.width = width;
        this.height = height;
        this.indent = indent;
        
        this.cellMap = createArr(this.width, this.height);
        this.colorArray = ["#fff", "#f00", "#0f0", "#00f", "#ccc", "#000"];
        // this.colorArray = {0: "#fff", 1: "#f00", 2: "#0f0", 3: "#00f", 4: "#ccc", 5: "#000"};
    }

    // заполняет карту пустыми ячейками
    fillMap(){
        for(var i = 0; i < this.width; ++i){
            for(var j = 0; j < this.height; ++j){
                this.cellMap[i][j] = new Cell(i, j, 0);
            }
        }
    }
    // меняет местами значения ячеек
    swipeCell(cell_1, cell_2){
        var cell = new Cell();
        cell.value = cell_2.value;
        cell_2.value = cell_1.value;
        cell_1.value = cell.value;
    }
}


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
