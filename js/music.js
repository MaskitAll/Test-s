var frequency = document.querySelector("#frequency");
var fr = frequency.value;

var delay = document.querySelector("#delay");
var delayValue = delay.value;

var frArr = new Array;
var delayArr = new Array;

//  создать Web Audio API контекст;
var audioContext = new (window.AudioContext || window.webkitAudioContext)();

function Ding( fr, st){
    var now = audioContext.currentTime;
    // Создать узел осциллятора внутри этого контекста;
    oscillator = audioContext.createOscillator() //Осциллятор - математически вычисляемые звуки;
    // Выбрать тип сигнала;
    //OscillatorNode.type = 'sine'|'square'|'triangle'|'sawtooth';
    oscillator.type="square";
    // Установить частоту;
    oscillator.frequency.value = fr;
    // Подключить осциллятор;
    oscillator.connect(audioContext.destination);
    
    // Создать узел усилителя внутри контекста
    gain = audioContext.createGain()
    // Присоединить его к цепи
    oscillator.connect(gain);
    // Присоединить усилитель к назначению
    gain.connect(audioContext.destination);

    gain.gain.value = .5;
    // gain.gain.setValueAtTime(100, now);
    // gain.gain.exponentialRampToValueAtTime(0.001, now + 0.5);

    // Запустить осциллятор;
    oscillator.start(now);
    oscillator.stop(now + st * 0.001);
}

function changeFrequency(){
    console.log("frequency = " + fr)

    fr = frequency.value;
    Ding(fr, delayValue);

}

function changeDelay(){
    console.log("delay = " + delayValue)

    delayValue = delay.value;
    Ding(fr, delayValue);

}

function goMusic(){
    for(var i = 0; i < frArr.length; ++i){
        Ding(frArr[i], delayArr[i]);
    }
}

function remember(){
    frArr.push(fr);
    delayArr.push(delayValue);
}