let showDigits = document.querySelector("#display-text");

const butTwo = document.querySelector("#two");
butTwo.addEventListener("click", buttonPush2);

const butThree = document.querySelector("#three");
butThree.addEventListener("click", buttonPush3);

const butFour = document.querySelector("#four");
butFour.addEventListener("click", buttonPush4);

const butFive = document.querySelector("#five");
butFive.addEventListener("click", buttonPush5);

const butSix = document.querySelector("#six");
butSix.addEventListener("click", buttonPush6);

const butSeven = document.querySelector("#seven");
butSeven.addEventListener("click", buttonPush7);

const butEight = document.querySelector("#eight");
butEight.addEventListener("click", buttonPush8);

const butNine = document.querySelector("#nine");
butNine.addEventListener("click", buttonPush9);

const butZero = document.querySelector("#zero");
butZero.addEventListener("click", buttonPush0);

const butCancel = document.querySelector("#cancel");
butCancel.addEventListener("click", buttonPushC);

/* const butDecimal = document.querySelector("#decimal");
butOne.addEventListener("click", buttonPushD); */

const butAdd = document.querySelector("#add");
butAdd.addEventListener("click", buttonPushAdd);

const butSub = document.querySelector("#sub");
butSub.addEventListener("click", buttonPushSub);

const butMulti = document.querySelector("#multi");
butMulti.addEventListener("click", buttonPushMulti);

const butDivide = document.querySelector("#divide");
butDivide.addEventListener("click", buttonPushDivide);

const butEquals = document.querySelector("#equals");
butEquals.addEventListener("click", buttonPushEquals);


let displayLength = showDigits.textContent.length;

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
    let total = +n1 + +n2;
    showDigits.textContent = total.toString().slice(0, 9);    
} 

// CREATE a function called `sub()` that takes two integers as parameters.
function sub(n1, n2) {
// CREATE functionality that takes the two parameters and subtracts them.
// RETURN the results in the console.
    let total = n1 - n2;
    showDigits.textContent = total.toString().slice(0, 9);
}

// CREATE a function called `multi()` that takes two integers as parameters.
function multi(n1, n2) {
// CREATE functionality that takes the two parameters and multiplies them together.
// RETURN the results in the console.
    let total = n1 * n2;
    showDigits.textContent = total.toString().slice(0, 9);
}

// CREATE a function called `div()` that takes two integers as parameters.
function div(n1, n2) {
// CREATE functionality that takes the two parameters and divides them.
// RETURN the results in the console.
    let total = n1 / n2;
    showDigits.textContent = total.toString().slice(0, 9);
}




const butOne = document.querySelector("#one");
butOne.addEventListener("click", buttonPush1);

function buttonPush1(){
    console.log(displayLength);
    if (displayLength < 9) {
    showDigits.textContent += 1;
    displayLength++; 
    }
    else {
        return;
    }
    
}






function buttonPush2(){
    if (displayLength < 9) {
    showDigits.textContent += 2;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush3(){
    if (displayLength < 9) {
    showDigits.textContent += 3;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush4(){
    if (displayLength < 9) {
    showDigits.textContent += 4;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush5(){
    if (displayLength < 9) {
    showDigits.textContent += 5;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush6(){
    if (displayLength < 9) {
    showDigits.textContent += 6;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush7(){
    if (displayLength < 9) {
    showDigits.textContent += 7;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush8(){
    if (displayLength < 9) {
    showDigits.textContent += 8;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush9(){
    if (displayLength < 9) {
    showDigits.textContent += 9;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush0(){
    if (displayLength < 9) {
    showDigits.textContent += 0;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPushC(){
    
    showDigits.textContent = "";
    displayLength = 0;
}

/*function buttonPushD(){
    if (displayLength < 9) {
    showDigits.textContent += 1;
    displayLength++; 
    }
    else {
        return;
    }
    */

function buttonPushAdd() {
    numOne = showDigits.textContent;
    operator = "+"
    showDigits.textContent = "";
    displayLength = 0;
    console.log(numOne);
}

function buttonPushSub() {
    numOne = showDigits.textContent;
    operator = "-"
    showDigits.textContent = "";
    displayLength = 0;
    console.log(numOne);
}

function buttonPushMulti() {
    numOne = showDigits.textContent;
    operator = "*"
    showDigits.textContent = "";
    displayLength = 0;
    console.log(numOne);
}

function buttonPushDivide() {
    numOne = showDigits.textContent;
    operator = "/"
    showDigits.textContent = "";
    displayLength = 0;
    console.log(numOne);
}

function buttonPushEquals() {
    numTwo = showDigits.textContent;
    operate();
}