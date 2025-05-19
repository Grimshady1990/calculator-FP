// CREATE a variable called `numOne` initialized to null.
let numOne = null;
   
// CREATE a variable called `numTwo` initialized to null.
let numTwo = null;

// CREATE a variable called `op` initialized to null.
let operator = "*";

// CREATE a function called `operate()`.
function operate() {
    // IF/ELSE statement that choses a operation function based on the chosen operator
    if (operator === "+") {
        // ACCEPT the inputs of the two numbers and the operator that has been selected
        add(numOne, numTwo);
    }
    else if (operator === "-") {
        // ACCEPT the inputs of the two numbers and the operator that has been selected
        sub(numOne, numTwo);
    }
    else if (operator === "*") {
        // ACCEPT the inputs of the two numbers and the operator that has been selected
        multi(numOne, numTwo);
    }
    else if (operator === "/") {
        // ACCEPT the inputs of the two numbers and the operator that has been selected
        div(numOne, numTwo);
    }
}
   





// CREATE a function called `add()` that takes two integers as parameters.
function add(n1, n2) {
// CREATE functionality that takes the two parameters and adds them together.
// RETURN the results in the console.
    let total = n1 + n2;
    console.log(total);    
} 

// CREATE a function called `sub()` that takes two integers as parameters.
function sub(n1, n2) {
// CREATE functionality that takes the two parameters and subtracts them.
// RETURN the results in the console.
    let total = n1 - n2;
    console.log(total);
}

// CREATE a function called `multi()` that takes two integers as parameters.
function multi(n1, n2) {
// CREATE functionality that takes the two parameters and multiplies them together.
// RETURN the results in the console.
    let total = n1 * n2;
    console.log(total);
}

// CREATE a function called `div()` that takes two integers as parameters.
function div(n1, n2) {
// CREATE functionality that takes the two parameters and divides them.
// RETURN the results in the console.
    let total = n1 / n2;
    console.log(total);
}

let showDigits = document.querySelector("#display-text");


const butOne = document.querySelector("#one");
butOne.addEventListener("click", buttonPush);

let displayLength = showDigits.textContent.length;


function buttonPush(){
    if (displayLength < 9) {
    showDigits.textContent += 1;
    displayLength++; 
    }
    else {
        return;
    }
    
}

// CALL functions
add(200, 200);
sub(1000, 600);
multi(80, 5);
div(1200, 3);
operate();