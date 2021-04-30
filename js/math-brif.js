var easy = 1,
    medium = 3,
    hard = 5;

var lvl = 0;

var taskArr = new Array;    // массив чисел
var singsArr = new Array;   // массив знаков
var mathRezult = 0;         // результат выражения

var mathTest = document.querySelector("#math_test");
var mathTask = document.querySelector("#math_task");


function changeRadioBox(){
    var level = mathTest.querySelectorAll('input[type="radio"]');

    for(var i = 0; i < level.length; ++i){
        if(level[i].checked === true){
            switch (i){
                case 0: lvl = easy; break;
                case 1: lvl = medium; break;
                case 2: lvl = hard; break;
            };  
        }
    };
    // console.log(lvl);
    createTask();
};

function createTask(){
    
    taskArr.splice(0, taskArr.length);
    singsArr.splice(0, singsArr.length);

    for(var i = 0; i < lvl; ++i){
        taskArr.push(random(0, 20));
        singsArr.push(random(0, 4));
    }
    taskArr.push(random(0, 20));

    mathTask.innerHTML = writeTask(taskArr, singsArr) + " = ";
    console.log(findRezult(taskArr, singsArr));
}


function findDesigion(a, b, sign){
    switch (sign){
        case 0: return a * b; break;
        case 1: return Math.floor(a / b); break;            // ИЗМЕНИТЬ!!!
        case 2: return a + b; break;
        case 3: return a - b; break;
    };
}

function myMin(Arr){
    var min = Arr[0];
    Arr.forEach(el =>{ el < min ? min = el : min});         // ИЗМЕНИТЬ!!!
    return min;
}

function findRezult(tasks, sings){
    var j;
    // console.log("Начальный массив");
    // console.log(tasks);
    // console.log(sings);
    // console.log("***");

    while(sings.length != 0){
        j = sings.findIndex(item => item === myMin(sings));
        if(j != -1){
            tasks.splice(j, 2, findDesigion(tasks[j], tasks[j + 1], sings[j]));
            sings.splice(j, 1);
        }    
        // console.log("singsArr");
        // console.log(sings);
        // console.log("taskArr");
        // console.log(tasks);
    }
    return taskArr[0];
}

function writeSings(sign){
    switch (sign){
        case 0: return "*"; break;
        case 1: return "/"; break;
        case 2: return "+"; break;
        case 3: return "-"; break;
    };
}

function writeTask(tasks, signs){
    var W = "";

    for(var i = 0; i < tasks.length - 1; ++i){
        W += tasks[i] + " ";
        W += writeSings(signs[i]) + " ";
    }
    W += tasks[tasks.length - 1];

    return W;
}

changeRadioBox();


