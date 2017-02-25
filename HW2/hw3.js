"using strict";
let numIds = ["0","1","2","3","4","5","6","7","8","9"];
let displayNums = function(evt){
	let input = document.getElementById("usrInput");
	
	for(let i = 0; i < numIds.length; i++){
		if(numIds[i] === evt.target.id){
			input.setAttribute("value", evt.target.id);
		}
	}
};

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
document.getElementById("plus").addEventListener("click",displayNums);
document.getElementById("minus").addEventListener("click",displayNums);
document.getElementById("multiply").addEventListener("click",displayNums);
document.getElementById("divide").addEventListener("click",displayNums);
document.getElementById("equals").addEventListener("click",displayNums);
document.getElementById("clear").addEventListener("click",displayNums);
