/**
 * Author: Jacob Wakefield
 * Course: CSC365
 * Desription: a simple passive aggressive calculator.
*/ 
"using strict"; 
//declares all needed variables
let input = document.getElementById("usrInput"), 
    outConsole = document.getElementById("console-text"),
    consoleText = [], 
	firstNum = "", //stores the first number
	secondNum = "", //stores the second number
	operator = "", //stores the operator of the equation
	mathDone = false,
	operationOnResult = false; 
	operatorCheck = false; //a value to track whether there has been an operator set


let displayNums = function(evt){
	if(!operatorCheck){ //collects numbers for the first number
		firstNum += evt.target.id;
		input.setAttribute("value", firstNum);
	}
	else{ //collects numbers for the second number of if the user is doing a operation on a result 
		secondNum += evt.target.id; 
		input.setAttribute("value", secondNum); 
	}
	if(mathDone === true){
		if(operationOnResult === true){ //if a user hits an operator after doing an operation 
			input.setAttribute("value", evt.target.id);
		}
		else{       //if the user hits a number after doing an operation 
			clear(); 
			input.setAttribute("value", evt.target.id);
			firstNum += evt.target.id;
		}
	}
};

//function that looks at the operator and applies the appropriate equation to the operation 
let doMath = function(evt){
	if(operator === "plus"){
		firstNum = Number(firstNum) + Number(secondNum);
		// prints statements to the console on the calculator 
		if(firstNum < 25000 && secondNum < 25000 ){
			consoleText.push(">> I bet you could do that in your head.");
			constructConsoleText();	
		}
	}
	else if(operator === "minus"){
		firstNum = Number(firstNum) - Number(secondNum);
		// prints statements to the console on the calculator 
		if(firstNum < 25000 && secondNum < 25000 ){
			consoleText.push(">> I bet you could do that in your head.");
			constructConsoleText();	
		}
	}
	else if(operator === "multiply"){
		firstNum = Number(firstNum) * Number(secondNum);
		// prints statements to the console on the calculator 
		if(firstNum < 12 && secondNum < 20 || firstNum < 20 && secondNum < 12){
			consoleText.push(">> You should look into learning your times tables it might come in handy ;).");
			constructConsoleText();	
		} 
	}
	else if(operator === "divide"){
		//checks to see if you are dividing by zero 
		if(Number(secondNum) === 0){
			firstNum = 0; 
		}
		else{
			firstNum = Number(firstNum) / Number(secondNum);
		}
		// prints statements to the console on the calculator 
		if(firstNum === 0){ 
			consoleText.push(">> Like WaterGate dividing by zero is an illegal operation.");
			constructConsoleText();
		}
	}
	mathDone = true;
	secondNum = ""; //resets secondNum  
	operatorCheck = false; //resets operatorCheck so it starts looking for a new operator 
	input.setAttribute("value", firstNum); 
};

//sets the operator for the equation at hand
let operation = function(evt){
	let operation1 = evt.target.id; 
	operatorCheck = true; //an operator has been selected 
	if(mathDone === true){
		operationOnResult = true; //if the user is doing  an oepration on the result of an operation 
	}
	if(!secondNum){      //used for the first operation 
		operator = operation1;
	}
	else{                      //else set the operator for multiple operations 
		doMath();
		operation(evt); 
	}
};

//function that clears the calculator for future use 
let clear = function(evt){
	mathDone = false;
	firstNum = "";
	secondNum = "";
	operator = "";
	consoleText = []; 
	operationOnResult = false; 
	constructConsoleText(); //bascially clears out the console by making an empty list 
	input.setAttribute("value", 0);
}

let constructConsoleText = function() {
	//function that constructs then text in the console 
	let newNode = document.createElement("ul"),
		oldNode = document.getElementById("console-messages");
	newNode.id = "console-messages";
	consoleText.forEach(function(item){
		let liNode = document.createElement("li"),
		text = document.createTextNode(item); 
		liNode.appendChild(text);
		newNode.appendChild(liNode);
	});
	oldNode.parentNode.replaceChild(newNode,oldNode);
};
	
    if(Mozilla/5.0 (Linux; Android 4.4.2); Nexus 5 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.117 Mobile Safari/537.36 OPR/20.0.1396.72047.test(navigator.userAgent)) { 
    //events for mobile
    //listens for the events on the page.
	    consoleText.push("hello"); 
	   constructConsoleText(); 
    document.getElementById("0").addEventListener("touchstart",displayNums);
    document.getElementById("1").addEventListener("touchstart",displayNums);
    document.getElementById("2").addEventListener("touch",displayNums);
    document.getElementById("3").addEventListener("touch",displayNums);
    document.getElementById("4").addEventListener("touch",displayNums);
    document.getElementById("5").addEventListener("touch",displayNums);
    document.getElementById("6").addEventListener("touch",displayNums);
    document.getElementById("7").addEventListener("touch",displayNums);
    document.getElementById("8").addEventListener("touch",displayNums);
    document.getElementById("9").addEventListener("touch",displayNums);
    document.getElementById("plus").addEventListener("touch",operation);
    document.getElementById("minus").addEventListener("touch",operation);
    document.getElementById("multiply").addEventListener("touch",operation);
    document.getElementById("divide").addEventListener("touch",operation);
    document.getElementById("equals").addEventListener("touch",doMath);
    document.getElementById("clear").addEventListener("touch",clear);
}
else{
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
    document.getElementById("plus").addEventListener("click",operation);
    document.getElementById("minus").addEventListener("click",operation);
    document.getElementById("multiply").addEventListener("click",operation);
    document.getElementById("divide").addEventListener("click",operation);
    document.getElementById("equals").addEventListener("click",doMath);
    document.getElementById("clear").addEventListener("click",clear);
}
