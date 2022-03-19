const buttons = document.querySelectorAll("button")
const display = document.getElementById("display")
let lastValue = 0
let lastOperator = "+"  //The first number should be added into result
setInterval(() => {
    
});
buttons.forEach((button) => {
    button.addEventListener('click', function(){ buttonClicked(button.innerHTML) }) //Add function on click base on its value
})
function buttonClicked(newValue) {
    //If it's number
    if (!isNaN(newValue)) {
        display.value = Number(display.value) * 10 + Number(newValue)   //Add number directly after the display
    }
    //If it's equal sign
    else if (newValue === "=") {
        display.value = getResult(lastValue, Number(display.value), lastOperator)   //Show the result in the display
        lastValue = Number(display.value)
        lastOperator = "="
    }
    //If it's a operator other than equal
    else {
        //Record the operator and value, also set the display to 0
        if (lastOperator != "=") lastValue = getResult(lastValue, Number(display.value), lastOperator)  //Prevent calculate again if last operation is equal
        lastOperator = newValue
        display.value = "0"
    }
}
//Return a number base number and operator
function getResult(firstNum, secondNum, operator) {
    switch (operator) {
        case "+":
            return firstNum + secondNum
        case "-":
            return firstNum - secondNum
        case "*":
            return firstNum * secondNum
        case "/":
            return firstNum / secondNum
        default:
            break
    }
}
