for(let i = 0; i < operatorIds.length; i++){ //for loop that determines the button being pushed
			if(operatorIds[i] === evt.target.id){
				calcOperator = evt.target.id;
			}
		}



for(let i = 0; i < numIds.length; i++){ //for loop that determines the button being pushed
			if(numIds[i] === evt.target.id){
				runningTotal += Number(evt.target.id); //adds the button number being pushed to the running total 
				console.log(runningTotal);
				input.setAttribute("value", runningTotal); //sets the input box to the running total of the firt number
				firstNum = Number(runningTotal); //adds the running total to the runningTotal array for later operations 
			}
		}