/**
 * Author: Jacob Wakefield 
 * Course: CSC365
 * Descipton: a simple caclulator based on the windows calculator. 
 */
 /** !!!! Disclaimer: 
		I know this is probably the sloppiest javascipt you've ever seen and for that 
		I deeply apologize. But at the same time this was my first attempt at writting 
		JS and intend on getting better. This assinment was a lot of fun btw :).  
 */
"using strict";
let calcOperator = ""; //stores the operator that needs to be applied in the calculations 
let runningTotal = []; //array to hold the running total of the current number 
let firstNum = 0; //stores first number 
let secondNum = 0; //stores second number 
let result = 0; //stores the result after the math operation is complete. 
let firstNumSwitch = false; //bool that indicated when to switch to collecting data for the second number. 
let mathDone = false; //a value to see whether their has been an operation applied to a number. (for doing operations on the result of a previous op.)
let multipleOperations = false; 
let checkConsole = false; 
let input = document.getElementById("usrInput");
let outConsole = document.getElementById("console-text");

let displayNums = function(evt){
	if(mathDone === false){
		if(firstNumSwitch === false){
			runningTotal += Number(evt.target.id); //adds the button number being pushed to the running total 
			console.log(runningTotal);
			input.setAttribute("value", runningTotal); //sets the input box to the running total of the firt number
			firstNum = Number(runningTotal); //adds the running total to the runningTotal array for later operations 
		}
		else{
			runningTotal += Number(evt.target.id);
			console.log(runningTotal);
			input.setAttribute("value", runningTotal);
			secondNum = Number(runningTotal); 
		}
	}
	else{
		firstNum = result;
		runningTotal += Number(evt.target.id);
		console.log(runningTotal);
		input.setAttribute("value", runningTotal);
		secondNum = Number(runningTotal); 
	}
};
let operator = function(evt) {
	//function that applies the operator to the calculation 
	if(multipleOperations === true){ //if true that means there is going to be multiple operations done before hitting the equals key
		if(calcOperator === "plus"){
			result = firstNum + secondNum; 
			mathDone = true;
			input.setAttribute("value", result);
		}
		else if(calcOperator === "minus"){
			result = firstNum - secondNum; 
			mathDone = true;
			input.setAttribute("value", result); 
		}
		else if(calcOperator === "multiply"){
			result = firstNum * secondNum;
			mathDone = true; 
			input.setAttribute("value", result); 
		}
		else if(calcOperator === "divide") {
			result = firstNum / secondNum; 
			mathDone = true;
			input.setAttribute("value", result); 
		}
	}
	calcOperator = evt.target.id;
	firstNumSwitch = true; 
	runningTotal = []; 
	multipleOperations = true; // there has been more then one operation applied 
};

let doMath = function(evt){
	//function that does the math on the two numbers 
	if(calcOperator === "plus"){
		result = firstNum + secondNum; 
		mathDone = true;
		input.setAttribute("value", result);
	}
	else if(calcOperator === "minus"){
		result = firstNum - secondNum; 
		mathDone = true;
		input.setAttribute("value", result); 
	}
	else if(calcOperator === "multiply"){
		result = firstNum * secondNum;
		mathDone = true; 
		input.setAttribute("value", result); 

		// prints statements to the console on the calculator 
		if(checkConsole === false){
			if(firstNum < 12 && secondNum < 20 || firstNum < 20 && secondNum < 12){
				outConsole.innerHTML = ">> you should look into learning your times tables it might come in handy ;). (<a href='http://www.mathsisfun.com/tables.html'>Times Tables</a>)<br/>";
				checkConsole = true; 
			}
		}
		else{
			outConsole.innerHTML += ">> you should look into learning your times tables it might come in handy ;). (<a href='http://www.mathsisfun.com/tables.html'>Times Tables</a>)<br/>";
			checkConsole = true;
		}
	}
	else if(calcOperator === "divide") {
		result = firstNum / secondNum; 
		mathDone = true;
		if(secondNum === 0){
			result = 0; 
		}
		input.setAttribute("value", result); 
	
		// prints statements to the console on the calculator 
		if(checkConsole === false){
			if(secondNum === 0){
				outConsole.innerHTML = ">> like WaterGate dividing by zero is an illegal operation.<br/>";
				checkConsole = true; 
			}
		}
		else{
			outConsole.innerHTML += ">> like WaterGate dividing by zero is an illegal operation.<br/>";
			checkConsole = true; 
		}
	}
	multipleOperations = false; 
};

let clear = function(){
	// function that clears the calculator 
	let input = document.getElementById("usrInput");
	firstNum = 0;
	secondNum = 0;
	firstNumSwitch = false;
	runningTotal = [];
	calcOperator = "";
	input.setAttribute("value","0");
	mathDone = false; 
	multipleOperations = false;
};

//listens for the events on the page.
document.getElementById("0").addEventListener("click",displayNums);
document.getElementById("1").addEventListener("click",displayNums);
document.getElementById("2").addEventListener("click",displayNums);
document.getElementById("3").addEventListener("click",displayNums);
document.getElementById("4").addEventListener("click",displayNums);
document.getElementById("5").addEventListener("click",displayNums);
document.getElementById("6").addEventListener("click",displayNums);
document.getElementById("7").addEventListener("click",displayNums);
document.getElementById("8").addEventListener("click",displayNums);
document.getElementById("9").addEventListener("click",displayNums);
document.getElementById("plus").addEventListener("click",operator);
document.getElementById("minus").addEventListener("click",operator);
document.getElementById("multiply").addEventListener("click",operator);
document.getElementById("divide").addEventListener("click",operator);
document.getElementById("equals").addEventListener("click",doMath);
document.getElementById("clear").addEventListener("click",clear);
