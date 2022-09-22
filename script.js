// var player1Btn = document.getElementById("p1Btn")
// var player2Btn = document.getElementById("p2Btn")
// var reset = document.getElementById("resetBtn")
// var p1Result = document.getElementsById("result1")
// var p2Result = document.getElementsById("result2")
// var input = document.querySelector("inputNumber")
// var counter = 0



var counterVal = 0;
var counterVal2 = 0;
let input = document.getElementById("inputNumber")
let zaisimIki = document.getElementById("PlayingTo")
let playerOneBtn = document.getElementById("p1Btn")


function incrementClick() {
    updateDisplay(++counterVal);
} 

function incrementClick2() {
    updateDisplay2(++counterVal2);
}

// function incrementClick3() {
//     updateDisplay3(++counterVal3);
// }


function resetCounter() {
    counterVal = 0;
    counterVal2 = 0;
    updateDisplay(counterVal);
    updateDisplay2(counterVal2);
}


function updateDisplay(val) {
    document.getElementById("counter-label").innerHTML = val;
} if(document.getElementById("inputNumber") = counterVal){
    playerOneBtn.disabled = true
}

function updateDisplay2(val) {
    document.getElementById("counter-label2").innerHTML = val;
}

let playingTo = document.getElementById("playingTo")


