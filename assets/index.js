
let numOne = null;
let numTwo = null;
let operator = null;
let decimal = null;

let answer = false;

let showDigitsIndex = null; 

let screenEquals = document.querySelector("#screen-equals");
let screenAdd = document.querySelector("#screen-add");
let screenSub = document.querySelector("#screen-sub");
let screenMulti = document.querySelector("#screen-multi");
let screenDivide = document.querySelector("#screen-divide");
let screenBackspace = document.querySelector("#screen-backspace");

const lightOff = "color: rgba(16, 28, 28, 0.335)";
const lightOn = "color: rgb(53, 207, 207); filter: drop-shadow(0 0 0.75rem rgba(53, 207, 207, 0.475));";

let showDigits = document.querySelector("#display-text");
let displayLength = showDigits.textContent.length;

const butOne = document.querySelector("#one");
butOne.addEventListener("click", buttonPush1);

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

const butDecimal = document.querySelector("#decimal");
butDecimal.addEventListener("click", buttonPushD);

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

const butBackspace = document.querySelector("#backspace");
butBackspace.addEventListener("click", buttonPushBackspace);





document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "1") {
      buttonPush1();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "2") {
      buttonPush2();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "3") {
      buttonPush3();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "4") {
      buttonPush4();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "5") {
      buttonPush5();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "6") {
      buttonPush6();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "7") {
      buttonPush7();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "8") {
      buttonPush8();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "9") {
      buttonPush9();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "0") {
      buttonPush0();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "+") {
      buttonPushAdd();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "-") {
      buttonPushSub();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "*") {
      buttonPushMulti();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "/") {
      buttonPushDivide();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "Enter") {
      buttonPushEquals();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "Backspace") {
      buttonPushBackspace();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "Delete") {
      buttonPushC();
      return;
    }
});

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === ".") {
      buttonPushD();
      return;
    }
});

function operate() {    
    if (operator === "+") {
        add(numOne, numTwo);
        displayLength = 0;
    }
    else if (operator === "-") {
        sub(numOne, numTwo);
        displayLength = 0;
    }
    else if (operator === "*") {
        multi(numOne, numTwo);
        displayLength = 0;
    }
    else if (operator === "/") {
        div(numOne, numTwo);
        displayLength = 0;
    }
}
   
function add(n1, n2) {
    if (numOne === "" && numTwo === "") {
        showDigits.textContent = "";
    }
    else {
        let total = +n1 + +n2;
        showDigits.textContent = total.toString().slice(0, 8); 
    }   
} 

function sub(n1, n2) {
    if (numOne === "" && numTwo === "") {
        showDigits.textContent = "";
    }
    else {
        let total = +n1 - +n2;
        showDigits.textContent = total.toString().slice(0, 8); 
    }
}

function multi(n1, n2) {
    if (numOne === "" && numTwo === "") {
        showDigits.textContent = "";
    }
    else {
        let total = +n1 * +n2;
        showDigits.textContent = total.toString().slice(0, 8); 
    }
}

function div(n1, n2) {
    if (numOne === "" && numTwo === "") {
        showDigits.textContent = "";
    }
    else {
        let total = +n1 / +n2;
        showDigits.textContent = total.toString().slice(0, 8); 
    }
}
function buttonPushBackspace() {
showDigitsIndex = showDigits.textContent.toString().split('').slice(-1).join('');
    if (answer === true || displayLength <= 0){
        return;
    }
    else if (answer === false && showDigitsIndex !== "."){
        screenBackspace.setAttribute("style", lightOn);
        showDigits.textContent = showDigits.textContent.toString().split('').slice(0, -1).join('');
        displayLength--;
    }
    else if (answer === false && showDigitsIndex === "."){
        screenBackspace.setAttribute("style", lightOn);
        decimal = null;
        showDigits.textContent = showDigits.textContent.toString().split('').slice(0, -1).join('');
        displayLength--;
    }
}

function buttonPush1(){
    if (showDigits.textContent === "0" && operator === null) {
        return;
    }    
    else if (operator !== null && showDigits.textContent === "0")
    {
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 1;
        numTwo = showDigits.textContent;
        displayLength++;
        screenBackspace.setAttribute("style", lightOff);       
    }
    else if (operator !== null && numOne !== null && numTwo === null){
        answer = false;
        screenEquals.setAttribute("style", lightOff);
        showDigits.textContent = "";
        showDigits.textContent += 1;
        numTwo = showDigits.textContent;
        displayLength++;      
    }
    else if (operator === null && numOne === null && numTwo === null && decimal === ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        showDigits.textContent += 1;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (operator === null && numOne === null && numTwo === null && decimal !== ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        displayLength = 0;
        showDigits.textContent += 1;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (displayLength < 8) {
        screenBackspace.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent += 1;
        displayLength++; 
    }
    else {
        return;
    }   
}

function buttonPush2(){
    if (showDigits.textContent === "0" && operator === null) {
        return;
    }   
    else if (operator !== null && showDigits.textContent === "0")
    {
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 2;
        numTwo = showDigits.textContent;
        displayLength++;
        screenBackspace.setAttribute("style", lightOff);       
    }
    else if (operator !== null && numOne !== null && numTwo === null){
        screenEquals.setAttribute("style", lightOff);
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 2;
        numTwo = showDigits.textContent;
        displayLength++;       
    }
    else if (operator === null && numOne === null && numTwo === null && decimal === ".") {
        answer = false;
        screenBackspace.setAttribute("style", lightOff);
        showDigits.textContent += 2;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (operator === null && numOne === null && numTwo === null && decimal !== ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        displayLength = 0;
        showDigits.textContent += 2;
        numOne = showDigits.textContent;
        displayLength++;
        console.log(displayLength);
    }
    else if (displayLength < 8) {
        screenBackspace.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent += 2;
        displayLength++; 
    }
    else {
        return;
    } 
}

function buttonPush3(){
    if (showDigits.textContent === "0" && operator === null) {
        return;
    }    
    else if (operator !== null && showDigits.textContent === "0")
    {
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 3;
        numTwo = showDigits.textContent;
        displayLength++;
        screenBackspace.setAttribute("style", lightOff);       
    }
    else if (operator !== null && numOne !== null && numTwo === null){
        screenEquals.setAttribute("style", lightOff);
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 3;
        numTwo = showDigits.textContent;
        displayLength++;       
    }
    else if (operator === null && numOne === null && numTwo === null && decimal === ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        showDigits.textContent += 3;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (operator === null && numOne === null && numTwo === null && decimal !== ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        displayLength = 0;
        showDigits.textContent += 3;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (displayLength < 8) {
        screenBackspace.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent += 3;
        displayLength++; 
    }
    else {
        return;
    }    
}

function buttonPush4(){
    if (showDigits.textContent === "0" && operator === null) {
        return;
    }    
    else if (operator !== null && showDigits.textContent === "0")
    {
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 4;
        numTwo = showDigits.textContent;
        displayLength++;
        screenBackspace.setAttribute("style", lightOff);        
    }
    else if (operator !== null && numOne !== null && numTwo === null){
        screenEquals.setAttribute("style", lightOff);
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 4;
        numTwo = showDigits.textContent;
        displayLength++;        
    }
    else if (operator === null && numOne === null && numTwo === null && decimal === ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        showDigits.textContent += 4;
        numOne = showDigits.textContent;
        displayLength++;
        console.log(displayLength);
    }
    else if (operator === null && numOne === null && numTwo === null && decimal !== ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        displayLength = 0;
        showDigits.textContent += 4;
        numOne = showDigits.textContent;
        displayLength++;
        console.log(displayLength);

    }
    else if (displayLength < 8) {
        screenBackspace.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent += 4;
        displayLength++; 
    }
    else {
        return;
    }    
}

function buttonPush5(){
    if (showDigits.textContent === "0" && operator === null) {
        return;
    }    
    else if (operator !== null && showDigits.textContent === "0")
    {
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 5;
        numTwo = showDigits.textContent;
        displayLength++;
        screenBackspace.setAttribute("style", lightOff);        
    }
    else if (operator !== null && numOne !== null && numTwo === null){
        screenEquals.setAttribute("style", lightOff);
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 5;
        numTwo = showDigits.textContent;
        displayLength++;    
    }
    else if (operator === null && numOne === null && numTwo === null && decimal === ".") {
        answer = false;
        screenBackspace.setAttribute("style", lightOff);
        showDigits.textContent += 5;
        numOne = showDigits.textContent;
        displayLength++;
        console.log(displayLength);
    }
    else if (operator === null && numOne === null && numTwo === null && decimal !== ".") {
        answer = false;
        screenBackspace.setAttribute("style", lightOff);
        displayLength = 0;
        showDigits.textContent += 5;
        numOne = showDigits.textContent;
        displayLength++;
        console.log(displayLength);
    }
    else if (displayLength < 8) {
        screenBackspace.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent += 5;
        displayLength++; 
    }
    else {
        return;
    }   
}

function buttonPush6(){
    if (showDigits.textContent === "0" && operator === null) {
        return;
    }    
    else if (operator !== null && showDigits.textContent === "0")
    {
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 6;
        numTwo = showDigits.textContent;
        displayLength++;
        screenBackspace.setAttribute("style", lightOff);
        
    }
    else if (operator !== null && numOne !== null && numTwo === null){
        screenEquals.setAttribute("style", lightOff);
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 6;
        numTwo = showDigits.textContent;
        displayLength++;       
    }
    else if (operator === null && numOne === null && numTwo === null && decimal === ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        showDigits.textContent += 6;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (operator === null && numOne === null && numTwo === null && decimal !== ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        displayLength = 0;
        showDigits.textContent += 6;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (displayLength < 8) {
        screenBackspace.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent += 6;
        displayLength++; 
    }
    else {
        return;
    }    
}

function buttonPush7(){
    if (showDigits.textContent === "0" && operator === null) {
        return;
    }    
    else if (operator !== null && showDigits.textContent === "0")
    {
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 7;
        numTwo = showDigits.textContent;
        displayLength++;
        screenBackspace.setAttribute("style", lightOff);        
    }
    else if (operator !== null && numOne !== null && numTwo === null){
        screenEquals.setAttribute("style", lightOff);
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 7;
        numTwo = showDigits.textContent;
        displayLength++;        
    }
    else if (operator === null && numOne === null && numTwo === null && decimal === ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        showDigits.textContent += 7;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (operator === null && numOne === null && numTwo === null && decimal !== ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        displayLength = 0;
        showDigits.textContent += 7;
        numOne = showDigits.textContent;
        displayLength++;
        console.log(displayLength);
    }
    else if (displayLength < 8) {
        screenBackspace.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent += 7;
        displayLength++; 
    }
    else {
        return;
    }    
}

function buttonPush8(){
    if (showDigits.textContent === "0" && operator === null) {
        return;
    }
    else if (operator !== null && showDigits.textContent === "0")
    {
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 8;
        numTwo = showDigits.textContent;
        displayLength++;
        screenBackspace.setAttribute("style", lightOff);        
    }
    else if (operator !== null && numOne !== null && numTwo === null){
        screenEquals.setAttribute("style", lightOff);
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 8;
        numTwo = showDigits.textContent;
        displayLength++;        
    }
    else if (operator === null && numOne === null && numTwo === null && decimal === ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        showDigits.textContent += 8;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (operator === null && numOne === null && numTwo === null && decimal !== ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        displayLength = 0;
        showDigits.textContent += 8;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (displayLength < 8) {
        screenBackspace.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent += 8;
        displayLength++; 
    }
    else {
        return;
    }    
}

function buttonPush9(){
    if (showDigits.textContent === "0" && operator === null) {
        return;
    }    
    else if (operator !== null && showDigits.textContent === "0")
    {
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 9;
        numTwo = showDigits.textContent;
        displayLength++;
        screenBackspace.setAttribute("style", lightOff);
    }
    else if (operator !== null && numOne !== null && numTwo === null) {
        screenEquals.setAttribute("style", lightOff);
        answer = false
        displayLength = 0;
        showDigits.textContent = "";
        showDigits.textContent += 9;
        numTwo = showDigits.textContent;
        displayLength++;        
    }
    else if (operator === null && numOne === null && numTwo === null && decimal === ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        showDigits.textContent += 9;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (operator === null && numOne === null && numTwo === null && decimal !== ".") {
        screenBackspace.setAttribute("style", lightOff);
        answer = false;
        displayLength = 0;
        showDigits.textContent += 9;
        numOne = showDigits.textContent;
        displayLength++;
    }
    else if (displayLength < 8) {
        screenBackspace.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent += 9;
        displayLength++; 
    }
    else {
        return;
    }    
}

function buttonPush0(){
    if (showDigits.textContent === "0") {
        return;
    }
    else if (operator !== null && numOne !== null && numTwo === null){
        screenEquals.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent = "";
        showDigits.textContent += 0;
        numTwo = showDigits.textContent;
        displayLength++;       
    }
    else if (operator !== null && numOne !== null && numTwo === null){
        answer = false
        showDigits.textContent = "";
        showDigits.textContent += 0;
        numTwo = showDigits.textContent;
        displayLength++;
        console.log(displayLength);
    }
    else if (displayLength < 8) {
        screenBackspace.setAttribute("style", lightOff);
        answer = false
        showDigits.textContent += 0;
        displayLength++; 
        console.log(displayLength);
    }
    else {
        return;
    }    
}

function buttonPushC(){   
    showDigits.textContent = "";
    answer = false;
    numOne = null;
    numTwo = null;
    operator = null;
    decimal = null;
    displayLength = 0;
    screenMulti.setAttribute("style", lightOff);
    screenDivide.setAttribute("style", lightOff);
    screenAdd.setAttribute("style", lightOff);
    screenEquals.setAttribute("style", lightOff);
    screenSub.setAttribute("style", lightOff);
    screenBackspace.setAttribute("style", lightOff);
}

function buttonPushD(){
    if (decimal !== "." && displayLength !== 0) {
        decimal = ".";
        showDigits.textContent += ".";
        displayLength++; 
        console.log(displayLength);
        screenBackspace.setAttribute("style", lightOff);
    }
    else {
        return;
    }
}
    
function buttonPushAdd() {
    if (numOne === null && numTwo === null) {
        return;
    }
    else if (operator !== null && numTwo !== null && operator === "="){
        answer = true;
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "+";
        screenSub.setAttribute("style", lightOff);
        screenMulti.setAttribute("style", lightOff);
        screenDivide.setAttribute("style", lightOff);
        screenAdd.setAttribute("style", lightOn);
        screenEquals.setAttribute("style", lightOff);
        screenBackspace.setAttribute("style", lightOff);
        decimal = null;
    }
    else if (operator !== null && numTwo !== null){
        answer = true;
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "+";
        screenSub.setAttribute("style", lightOff);
        screenMulti.setAttribute("style", lightOff);
        screenDivide.setAttribute("style", lightOff);
        screenAdd.setAttribute("style", lightOn);
        screenEquals.setAttribute("style", lightOn);
        screenBackspace.setAttribute("style", lightOff);
        decimal = null;     
    } 
    else {
    answer = false;
    numOne = showDigits.textContent;
    operator = "+"
    screenSub.setAttribute("style", lightOff);
    screenMulti.setAttribute("style", lightOff);
    screenDivide.setAttribute("style", lightOff);
    screenAdd.setAttribute("style", lightOn);
    screenEquals.setAttribute("style", lightOff);
    screenBackspace.setAttribute("style", lightOff);
    showDigits.textContent = numOne;
    displayLength = 0;
    decimal = null;
    }    
}

function buttonPushSub() {
    if (numOne === null && numTwo === null) {
        return;
    }
    else if (operator !== null && numTwo !== null && operator === "="){
        answer = true;
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "-";
        screenSub.setAttribute("style", lightOn);
        screenMulti.setAttribute("style", lightOff);
        screenDivide.setAttribute("style", lightOff);
        screenAdd.setAttribute("style", lightOff);
        screenEquals.setAttribute("style", lightOff);
        screenBackspace.setAttribute("style", lightOff);
        decimal = null;
    }
    else if (operator !== null && numTwo !== null){
        answer = true;
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "-";
        screenSub.setAttribute("style", lightOn);
        screenMulti.setAttribute("style", lightOff);
        screenDivide.setAttribute("style", lightOff);
        screenAdd.setAttribute("style", lightOff);
        screenEquals.setAttribute("style", lightOn);
        screenBackspace.setAttribute("style", lightOff);
        decimal = null;       
    } 
    else {
    answer = false;
    numOne = showDigits.textContent;
    operator = "-"    
    screenSub.setAttribute("style", lightOn);
    screenMulti.setAttribute("style", lightOff);
    screenDivide.setAttribute("style", lightOff);
    screenAdd.setAttribute("style", lightOff);
    screenEquals.setAttribute("style", lightOff);
    screenBackspace.setAttribute("style", lightOff);
    showDigits.textContent = numOne;
    displayLength = 0;
    decimal = null;
    }
}

function buttonPushMulti() {
    if (numOne === null && numTwo === null) {
        return;
    }
    else if (operator !== null && numTwo !== null && operator === "="){
        answer = true;
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "*";
        screenSub.setAttribute("style", lightOff);
        screenMulti.setAttribute("style", lightOn);
        screenDivide.setAttribute("style", lightOff);
        screenAdd.setAttribute("style", lightOff);
        screenEquals.setAttribute("style", lightOff);
        screenBackspace.setAttribute("style", lightOff);
        decimal = null;
    }
    else if (operator !== null && numTwo !== null){
        answer = true;
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "*";
        screenSub.setAttribute("style", lightOff);
        screenMulti.setAttribute("style", lightOn);
        screenDivide.setAttribute("style", lightOff);
        screenAdd.setAttribute("style", lightOff);
        screenEquals.setAttribute("style", lightOn);
        screenBackspace.setAttribute("style", lightOff);
        decimal = null;   
    } 
    else {
    answer = false;
    numOne = showDigits.textContent;
    operator = "*"
    screenSub.setAttribute("style", lightOff);
    screenMulti.setAttribute("style", lightOn);
    screenDivide.setAttribute("style", lightOff);
    screenAdd.setAttribute("style", lightOff);
    screenEquals.setAttribute("style", lightOff);
    screenBackspace.setAttribute("style", lightOff);
    showDigits.textContent = numOne;
    displayLength = 0;
    decimal = null;
    }
}

function buttonPushDivide() {
    if (numOne === null && numTwo === null) {
        return;
    }    
    else if (operator !== null && numTwo !== null && operator === "="){
        answer = true;
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "/";
        screenSub.setAttribute("style", lightOff);
        screenMulti.setAttribute("style", lightOff);
        screenDivide.setAttribute("style", lightOn);
        screenAdd.setAttribute("style", lightOff);
        screenEquals.setAttribute("style", lightOff);
        screenBackspace.setAttribute("style", lightOff);
        decimal = null;
    }
    else if (operator !== null && numTwo !== null){
        answer = true;
        numTwo = showDigits.textContent;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "/";
        screenSub.setAttribute("style", lightOff);
        screenMulti.setAttribute("style", lightOff);
        screenDivide.setAttribute("style", lightOn);
        screenAdd.setAttribute("style", lightOff);
        screenEquals.setAttribute("style", lightOn);
        screenBackspace.setAttribute("style", lightOff);
        decimal = null;        
    } 
    else {
    answer = false;
    numOne = showDigits.textContent;
    operator = "/"
    screenSub.setAttribute("style", lightOff);
    screenMulti.setAttribute("style", lightOff);
    screenDivide.setAttribute("style", lightOn);
    screenAdd.setAttribute("style", lightOff);
    screenEquals.setAttribute("style", lightOff);
    screenBackspace.setAttribute("style", lightOff);
    showDigits.textContent = numOne;
    displayLength = 0;
    decimal = null;
    }
}

function buttonPushEquals() {
    if (numTwo === null || operator === "=") {
        return;
    }
    else if (operator !== null && numTwo !== null){
        numTwo = showDigits.textContent;
        answer = true;
        operate();
        numOne = showDigits.textContent;
        numTwo = null;
        displayLength = 0;
        operator = "=";
        screenSub.setAttribute("style", lightOff);
        screenEquals.setAttribute("style", lightOn);
        screenMulti.setAttribute("style", lightOff);
        screenDivide.setAttribute("style", lightOff);
        screenAdd.setAttribute("style", lightOff);
        screenBackspace.setAttribute("style", lightOff);
        decimal = null;
        return;
    }
    else {
    numOne = showDigits.textContent;
    operator = "=";
    screenEquals.setAttribute("style", lightOn);
    showDigits.textContent = numOne;
    displayLength = 0;
    decimal = null;
    }        
}
