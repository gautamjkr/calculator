// retrieving data from HTML

const clearButton = document.querySelector('.clear-button');
const del = document.querySelector('.backspace-button');
const inputNumber = document.querySelector('.numbers');
const operations = document.querySelectorAll('.operation');
const result = document.querySelector('.equals');
const textArea = document.querySelector('.text-area');
const buttonArea = document.querySelector('.button-area');

// functions for mathematical operations

function addNumbers(number1, number2){
    return number1 + number2;
}

function subtractNumbers(number1, number2){
    return number1 - number2;
}

function multiplyNumbers(number1, number2){
    return number1 * number2;
}

function divideNumbers(number1, number2){
    return number1 / number2;
}

function clearTextArea(){
    textArea.innerText = ``;
}

// An array to store numbers for calculation

const numberCalculation = [
    "Initial Number"

]

// When you click any button, this event listener is triggered

buttonArea.addEventListener("click", function(event){

    let pressedButton = event.target.innerText;
    
if (pressedButton === "C"){
        clearTextArea();
        numberCalculation.splice(1,3);
    }
else if (pressedButton === "=" && numberCalculation.length < 4){

   pressedButton.disabled = true;
}

else if (pressedButton === "=" && numberCalculation.length === 4){
       
// Mathematical calculation starts
    if (numberCalculation[2] === "+"){
        textArea.innerText = addNumbers(numberCalculation[1], numberCalculation[3]);
        numberCalculation.splice(1,3);
    
    }
  
    else if (numberCalculation[2] === "-"){
        textArea.innerText = subtractNumbers(numberCalculation[1], numberCalculation[3]);
        numberCalculation.splice(1,3);
    }
  
    else if (numberCalculation[2] === "*"){
      textArea.innerText = multiplyNumbers(numberCalculation[1], numberCalculation[3]);
      numberCalculation.splice(1,3);
  }
  
    else if (numberCalculation[2] === "/"){
      textArea.innerText = divideNumbers(numberCalculation[1], numberCalculation[3]);
      numberCalculation.splice(1,3);
  }
// Mathematical calculation ends



   }

   else if(pressedButton === "←"){


   textArea.innerText = textArea.innerText.slice(0, textArea.innerText.length - 1);
    
    
}
    
else if (pressedButton !== "+" && pressedButton !== "-" && pressedButton !== "*" && pressedButton !== "/" 
 
&& numberCalculation[2] === undefined) {
      
      textArea.innerText = textArea.innerText + pressedButton;
      numberCalculation[1] = parseInt(textArea.innerText);
      
      
}



else if (numberCalculation[2] === "+" || numberCalculation[2] === "-" || numberCalculation[2] === "*" 
|| numberCalculation[2] === "/") {
    
     textArea.innerText = textArea.innerText + pressedButton;
     numberCalculation[3] = parseInt(textArea.innerText);  
     
}

else if(numberCalculation[1] === undefined){
    pressedButton.disabled = true;
}

     
else   {
   numberCalculation[2] = pressedButton;
   clearTextArea();      
      
}
     
  })



 








