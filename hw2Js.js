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
if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera) {
    //events for mobile
    //listens for the events on the page.
    document.getElementById("0").addEventListener("touch",displayNums);
    document.getElementById("1").addEventListener("touch",displayNums);
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
