const calc = document.querySelector(".calc");
const display = document.querySelector(".display");

let firstNum;
let secondNum;
let operatorPressed;
let finalResult;



function add(firstNum, secondNum) {
    let result = firstNum + secondNum;
    display.textContent = result;
}

function subtract(firstNum, secondNum) {
    let result = firstNum - secondNum;
    display.textContent = result;
}

function multiply(firstNum, secondNum) {
    let result = firstNum * secondNum;
    display.textContent = result;
}

function divide(firstNum, secondNum) {
    let result = firstNum / secondNum;
    if (result == Infinity) {
        display.textContent = "Error! Can't Divide by 0";
    } else {
        display.textContent = result;
    }
}

function operate(operator, firstNum, secondNum) {
    switch(operator) {
        case "add":
            add(parseInt(firstNum), parseInt(secondNum));
            break;
        case "subtract":
            subtract(parseInt(firstNum), parseInt(secondNum));
            break;
        case "multiply":
            multiply(parseInt(firstNum), parseInt(secondNum));
            break;
        case "divide":
            divide(parseInt(firstNum), parseInt(secondNum));
            break;
    }
}

function getFirstNum(e) {
    if (e.target.matches("button")) {
        // use the data-action attribute to determine the type of key that is clicked.
        const key = e.target;
        const action = key.dataset.action;
        // The number of the key that was clicked
        const keyContent = key.textContent;
        // The current displayed number
        let displayedNum = display.textContent;

        if (!action) {
            if (displayedNum === "0") {
                display.textContent = keyContent;
            } else {
                display.textContent = displayedNum + keyContent;
            }
        } else if  (
            action === "add" ||
            action === "subtract" ||
            action === "multiply" ||
            action === "divide"
        ) {
            //console.log(firstNum);
            if(firstNum == undefined) {
                operatorPressed = action; //stores what operator button was pressed
                firstNum = displayedNum; //stores whatever is on the screen as their first numb
                display.textContent = " "; //clears the screen
                displayedNum = display.textContent; //resets displayedNum value to blank
            } else if (finalResult != undefined) {
                firstNum = finalResult;
                display.textContent = " ";
                operatorPressed = action;
                secondNum = displayedNum;
            } else {
                secondNum = displayedNum; //stores second value when pressed =
                operate(operatorPressed, firstNum, secondNum);
                displayedNum = display.textContent;
                let firstResult = displayedNum;
                display.textContent = " ";
                operatorPressed = action;
                firstNum = firstResult;
            }
            
        } else if (action === "clear") {
            display.textContent = "";
            firstNum = undefined;
            secondNum = undefined;
            firstResult = undefined;
            displayedNum = undefined;
        } else if (action === "calculate") {
            secondNum = displayedNum; //stores second value when pressed =
            operate(operatorPressed, firstNum, secondNum);
            displayedNum = display.textContent;
            finalResult = displayedNum;
            

        }
    }
}


calc.addEventListener("click", (e) => {
    getFirstNum(e);
    
});
    


