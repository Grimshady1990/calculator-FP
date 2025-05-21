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
let operator = null;

// CREATE a function called `operate()`.
function operate() {
    // IF/ELSE statement that choses a operation function based on the chosen operator
    
    if (operator === "+") {
        // ACCEPT the inputs of the two numbers and the operator that has been selected
        add(numOne, numTwo);
        displayLength = 0;
    }
    else if (operator === "-") {
        // ACCEPT the inputs of the two numbers and the operator that has been selected
        sub(numOne, numTwo);
        displayLength = 0;
    }
    else if (operator === "*") {
        // ACCEPT the inputs of the two numbers and the operator that has been selected
        multi(numOne, numTwo);
        displayLength = 0;
    }
    else if (operator === "/") {
        // ACCEPT the inputs of the two numbers and the operator that has been selected
        div(numOne, numTwo);
        displayLength = 0;
    }
}
   





// CREATE a function called `add()` that takes two integers as parameters.
function add(n1, n2) {
// CREATE functionality that takes the two parameters and adds them together.
// RETURN the results in the console.
    if (numOne === "" && numTwo === "") {
        showDigits.textContent = "";
    }
    else {
        let total = +n1 + +n2;
        showDigits.textContent = total.toString().slice(0, 9); 
        console.log(numOne);
    }   
} 

// CREATE a function called `sub()` that takes two integers as parameters.
function sub(n1, n2) {
// CREATE functionality that takes the two parameters and subtracts them.
// RETURN the results in the console.
    if (numOne === "" && numTwo === "") {
        showDigits.textContent = "";
    }
    else {
        let total = +n1 - +n2;
        showDigits.textContent = total.toString().slice(0, 9); 
        console.log(numOne);
    }
}

// CREATE a function called `multi()` that takes two integers as parameters.
function multi(n1, n2) {
// CREATE functionality that takes the two parameters and multiplies them together.
// RETURN the results in the console.
    if (numOne === "" && numTwo === "") {
        showDigits.textContent = "";
    }
    else {
        let total = +n1 * +n2;
        showDigits.textContent = total.toString().slice(0, 9); 
        console.log(numOne);
    }
}

// CREATE a function called `div()` that takes two integers as parameters.
function div(n1, n2) {
// CREATE functionality that takes the two parameters and divides them.
// RETURN the results in the console.
    if (numOne === "" && numTwo === "") {
        showDigits.textContent = "";
    }
    else {
        let total = +n1 / +n2;
        showDigits.textContent = total.toString().slice(0, 9); 
        console.log(numOne);
    }
}




const butOne = document.querySelector("#one");
butOne.addEventListener("click", buttonPush1);

function buttonPush1(){
    if (operator !== null && numOne !== null && numTwo === null){
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 1;
        numTwo = showDigits.textContent;
        displayLength++;
        
    }
    else if (operator === null && numOne === null && numTwo === null ) {
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 1;
        numOne = showDigits.textContent;
        displayLength++;

    }
    else if (displayLength < 8) {
    
    showDigits.textContent += 1;
    displayLength++; 
    }
    else {
        return;
    }
    
}






function buttonPush2(){
    if (operator !== null && numOne !== null && numTwo === null){
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 2;
        numTwo = showDigits.textContent;
        displayLength++;
        
    }
    else if (operator === null && numOne === null && numTwo === null ) {
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 2;
        numOne = showDigits.textContent;
        displayLength++;

    }
    else if (displayLength < 8) {
    
    showDigits.textContent += 2;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush3(){
    if (operator !== null && numOne !== null && numTwo === null){
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 3;
        numTwo = showDigits.textContent;
        displayLength++;
        
    }
    else if (operator === null && numOne === null && numTwo === null ) {
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 3;
        numOne = showDigits.textContent;
        displayLength++;

    }
    else if (displayLength < 8) {
    
    showDigits.textContent += 3;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush4(){
    if (operator !== null && numOne !== null && numTwo === null){
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 4;
        numTwo = showDigits.textContent;
        displayLength++;
        
    }
    else if (operator === null && numOne === null && numTwo === null ) {
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 4;
        numOne = showDigits.textContent;
        displayLength++;

    }
    else if (displayLength < 8) {
    
    showDigits.textContent += 4;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush5(){
    if (operator !== null && numOne !== null && numTwo === null){
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 5;
        numTwo = showDigits.textContent;
        displayLength++;
        
    }
    else if (operator === null && numOne === null && numTwo === null ) {
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 5;
        numOne = showDigits.textContent;
        displayLength++;

    }
    else if (displayLength < 8) {
    
    showDigits.textContent += 5;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush6(){
    if (operator !== null && numOne !== null && numTwo === null){
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 6;
        numTwo = showDigits.textContent;
        displayLength++;
        
    }
    else if (operator === null && numOne === null && numTwo === null ) {
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 6;
        numOne = showDigits.textContent;
        displayLength++;

    }
    else if (displayLength < 8) {
    
    showDigits.textContent += 6;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush7(){
    if (operator !== null && numOne !== null && numTwo === null){
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 7;
        numTwo = showDigits.textContent;
        displayLength++;
        
    }
    else if (operator === null && numOne === null && numTwo === null ) {
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 7;
        numOne = showDigits.textContent;
        displayLength++;

    }
    else if (displayLength < 8) {
    
    showDigits.textContent += 7;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush8(){
    if (operator !== null && numOne !== null && numTwo === null){
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 8;
        numTwo = showDigits.textContent;
        displayLength++;
        
    }
    else if (operator === null && numOne === null && numTwo === null ) {
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 8;
        numOne = showDigits.textContent;
        displayLength++;

    }
    else if (displayLength < 8) {
    
    showDigits.textContent += 8;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush9(){
    if (operator !== null && numOne !== null && numTwo === null){
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 9;
        numTwo = showDigits.textContent;
        displayLength++;
        
    }
    else if (operator === null && numOne === null && numTwo === null ) {
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 9;
        numOne = showDigits.textContent;
        displayLength++;

    }
    else if (displayLength < 8) {
    
    showDigits.textContent += 9;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPush0(){
    if (displayLength === 0) {
        return;
    }
    else if (displayLength < 9) {
    showDigits.textContent += 0;
    displayLength++; 
    }
    else {
        return;
    }
    
}

function buttonPushC(){
    
    showDigits.textContent = "";
    numOne = null;
    numTwo = null;
    operator = null;
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
console.log("Operator: " + operator);
function buttonPushAdd() {

    if (operator !== null && numTwo !== null){
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "+";
        
        return;

    }
    
    numOne = showDigits.textContent;
    operator = "+"
    showDigits.textContent = numOne;
    displayLength = 0;
    console.log("Operator: " + operator);
    
}

function buttonPushSub() {
    if (operator !== null && numTwo !== null){
        numTwo = showDigits.textContent;
        
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "-";
        
        return;

    }
    numOne = showDigits.textContent;
    operator = "-"
    showDigits.textContent = numOne;
    displayLength = 0;
    console.log(numOne);
}

function buttonPushMulti() {

    if (operator !== null && numTwo !== null){
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "*";
        
        return;

    }

    numOne = showDigits.textContent;
    operator = "*"
    showDigits.textContent = numOne;
    displayLength = 0;
    console.log(numOne);
}

function buttonPushDivide() {
    if (operator !== null && numTwo !== null){
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "/";
        
        return;

    }

    numOne = showDigits.textContent;
    operator = "/"
    showDigits.textContent = numOne;
    displayLength = 0;
    console.log(numOne);
}

function buttonPushEquals() {
    if (numTwo === null) {
        return;
    }
    numTwo = showDigits.textContent;
    operate();
    numOne = null;
    operator = null;
    numTwo = null;
}

console.log(displayLength);