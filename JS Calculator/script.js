const button1 = document.querySelector("#button1")
const button2 = document.querySelector("#button2")
const button3 = document.querySelector("#button3")
const button4 = document.querySelector("#button4")
const button5 = document.querySelector("#button5")
const button6 = document.querySelector("#button6")
const button7 = document.querySelector("#button7")
const button8 = document.querySelector("#button8")
const button9 = document.querySelector("#button9")
const button10 = document.querySelector("#button10")
const button11 = document.querySelector("#button11")
const button12 = document.querySelector("#button12")
const button13 = document.querySelector("#button13")
const button14 = document.querySelector("#button14")
const button15 = document.querySelector("#button15")
const button16 = document.querySelector("#button16")
const button17 = document.querySelector("#button17")
const screen = document.querySelector("#screen")

button1.onclick = addNumbers;
button2.onclick = minusNumbers;
button3.onclick = timesNumbers;
button4.onclick = divideNumbers;
button5.onclick = numSeven;
button6.onclick = numEight;
button7.onclick = numNine;
button8.onclick = equalNumbers;
button9.onclick = numFour;
button10.onclick = numFive;
button11.onclick = numSix;
button12.onclick = numOne;
button13.onclick = numTwo;
button14.onclick = numThree;
button15.onclick = numZero;
button16.onclick = numDot;
button17.onclick = numCE;

function addNumbers(){
	screen.innerText = "+";
}

function minusNumbers(){
	screen.innerText = "-";
}

function timesNumbers(){
	screen.innerText = "x";
}

function divideNumbers(){
	screen.innerText = "/";
}

function numSeven(){
	screen.innerText = "7";
}

function numEight(){
	screen.innerText = "8";
}

function numNine(){
	screen.innerText = "9";
}

function equalNumbers(){
	screen.innerText = "=";
}

function numFour(){
	screen.innerText = "4";
}

function numFive(){
	screen.innerText = "5";
}

function numSix(){
	screen.innerText = "6";
}

function numOne(){
	screen.innerText = "1";
}

function numTwo(){
	screen.innerText = "2";
}

function numThree(){
	screen.innerText = "3";
}

function numZero(){
	screen.innerText = "0";
}

function numDot(){
	screen.innerText = ".";
}

function numCE(){
	screen.innerText = "0";
}


